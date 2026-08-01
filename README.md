<<<<<<< HEAD
# Prince Kachchhi — Portfolio

Single-page portfolio built with React + Vite, Tailwind CSS v4, Framer Motion,
React Three Fiber, and React Router DOM.

All resume content lives in `src/data/profile.ts` — edit it there and every
section (About, Skills, Projects, Leadership, Footer) updates automatically.

## Structure

```
src/
  App.tsx                    # Router root
  main.tsx                   # Entry point
  index.css                  # Tailwind v4 theme tokens + fonts
  data/profile.ts            # Single source of truth for all resume content
  lib/motion.ts               # Shared Framer Motion variants
  components/
    Navbar.tsx
    Hero.tsx                 # Hero + CTA, mounts the 3D scene
    About.tsx
    Skills.tsx
    Projects.tsx              # Interactive expandable project cards
    Leadership.tsx            # Leadership role + achievements + rating graph
    Footer.tsx                # Contact icons
    three/GraphNetwork.tsx    # React Three Fiber graph-node scene
  pages/Home.tsx              # Composes all sections
```

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Note on content

The resume has no listed internship, so the brief's "Experience" section was
built from the real extracurricular entry instead (CodeAdda — Club Director),
under **Leadership**. Skills and Projects reflect only what's on the resume
(no Spring Boot / Django / Kafka, no Coastal Threat Alert / Financial
Dashboard projects — those weren't in the source resume).
=======
# portfolio
>>>>>>> cafd385dd2ed1bf2ec8ade9a43aaa5ab2f0f643b
