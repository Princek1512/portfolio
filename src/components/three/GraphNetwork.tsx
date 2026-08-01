import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

/**
 * Builds a small random graph laid out on a sphere: nodes + edges,
 * echoing the graph-algorithm world (BFS/DFS/shortest-path) that shows
 * up throughout the resume's competitive-programming achievements.
 */
function useGraphGeometry(nodeCount = 26) {
  return useMemo(() => {
    const nodes: THREE.Vector3[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;
      const r = 2.1;
      nodes.push(
        new THREE.Vector3(
          r * Math.cos(theta) * Math.sin(phi),
          r * Math.sin(theta) * Math.sin(phi),
          r * Math.cos(phi),
        ),
      );
    }

    const edges: [number, number][] = [];
    nodes.forEach((n, i) => {
      const distances = nodes
        .map((m, j) => ({ j, d: i === j ? Infinity : n.distanceTo(m) }))
        .sort((a, b) => a.d - b.d)
        .slice(0, 2);
      distances.forEach(({ j }) => {
        const key: [number, number] = i < j ? [i, j] : [j, i];
        if (!edges.some(([a, b]) => a === key[0] && b === key[1])) {
          edges.push(key);
        }
      });
    });

    return { nodes, edges };
  }, [nodeCount]);
}

function Network() {
  const groupRef = useRef<THREE.Group>(null);
  const { nodes, edges } = useGraphGeometry();

  const edgePositions = useMemo(() => {
    const positions = new Float32Array(edges.length * 6);
    edges.forEach(([a, b], i) => {
      positions.set(
        [nodes[a].x, nodes[a].y, nodes[a].z, nodes[b].x, nodes[b].y, nodes[b].z],
        i * 6,
      );
    });
    return positions;
  }, [nodes, edges]);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.12;
      groupRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[edgePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#17a398" transparent opacity={0.35} />
      </lineSegments>

      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[i % 5 === 0 ? 0.07 : 0.045, 16, 16]} />
          <meshStandardMaterial
            color={i % 5 === 0 ? "#e8a33d" : "#eceef0"}
            emissive={i % 5 === 0 ? "#e8a33d" : "#17a398"}
            emissiveIntensity={i % 5 === 0 ? 0.6 : 0.3}
          />
        </mesh>
      ))}
    </group>
  );
}

/** Interactive hero centerpiece: drag to rotate, auto-spins when idle. */
export default function GraphNetworkScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 4, 4]} intensity={40} color="#17a398" />
      <pointLight position={[-4, -2, -3]} intensity={20} color="#e8a33d" />
      <Network />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        rotateSpeed={0.5}
      />
    </Canvas>
  );
}
