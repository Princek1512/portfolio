// All content here is sourced directly from Prince Kachchhi's resume.
// Keeping it in one file means every section renders from the same
// single source of truth instead of duplicated copy.

export const profile = {
  name: "Prince Kachchhi",
  location: "Amreli, Gujarat",
  tagline: "CSE undergrad · Competitive programmer · Developer",
  phone: "+91 8320628989",
  email: "prinskc345@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/prince-kachchhi-a98822326/",
    github: "https://github.com/Princek1512",
    codeforces: "https://codeforces.com/profile/Princek1512",
    codechef: "https://www.codechef.com/users/princek1512",
    codolio: "https://codolio.com/profile/Princek1512",
  },
};

export const education = [
  {
    institution: "Institute of Technology, Nirma University",
    detail: "B.Tech, Computer Science and Engineering — CGPA 8.85 / 10.0",
    place: "Ahmedabad, India",
    period: "Aug 2024 – Jun 2028",
  },
  {
    institution: "Smt. SH Gajera Higher Secondary School",
    detail: "HSC — Science (PCM), 91.7%",
    place: "Amreli, India",
    period: "Jun 2022 – Apr 2024",
  },
];

export const skillGroups = [
  {
    label: "Languages",
    items: ["Python", "C", "C++ (STL, OOP)", "JavaScript", "SQL", "XML"],
  },
  {
    label: "Data Science & ML",
    items: [
      "Machine Learning",
      "Scikit-learn",
      "XGBoost",
      "Explainable AI (XAI)",
      "Feature Engineering",
      "Statistical Analysis",
    ],
  },
  {
    label: "Problem Solving",
    items: ["Data Structures", "Algorithms", "Competitive Programming"],
  },
  {
    label: "Tools & Frameworks",
    items: ["Git/GitHub", "Docker", "MongoDB", "ReactJS", "Bootstrap 5", "Linux"],
  },
];

export const projects = [
  {
    id: "sniffr",
    name: "Sniffr",
    subtitle: "ML-based risk prediction system",
    period: "2026",
    stack: ["Python", "Scikit-learn", "XGBoost", "MongoDB", "Docker"],
    points: [
      "Formulated a supervised-learning approach with a 5-member team to solve a risk-exposure prediction problem, from data exploration and feature engineering through model training.",
      "Validated performance through cross-validation and error analysis, then built an explainable AI (XAI) layer so every prediction could be interpreted by non-technical stakeholders.",
      "Deployed the pipeline with MongoDB and Docker for reproducible experimentation across the team.",
    ],
  },
  {
    id: "crypto-recommendation",
    name: "Crypto Recommendation System",
    subtitle: "Trie & hash-map based lookup engine",
    period: "Oct 2025",
    stack: ["C++", "Trie", "Hash Maps", "OOP"],
    points: [
      "Explored and structured a dataset spanning 10+ assets and 15+ attributes to surface recommendations reliably at scale.",
      "Designed Trie and hash-map based lookup algorithms and structured a backend across 5+ modular classes, cutting redundant logic by 40% through iterative refactoring.",
    ],
  },
  {
    id: "crypto-portfolio-manager",
    name: "Crypto Portfolio Manager",
    subtitle: "Portfolio tracking & rebalancing engine",
    period: "Jan 2025 – Feb 2025",
    stack: ["C++", "OOP", "STL", "File Handling"],
    points: [
      "Built a portfolio-tracking system reconciling 20+ assets across 100+ simulated transactions, catching and correcting data-consistency discrepancies automatically.",
      "Designed and benchmarked a rebalancing algorithm across 50+ holdings, improving reliability and reusability by 35%.",
    ],
  },
];

// Leadership stands in for a formal work-experience section: the resume
// lists no internship, so this is built from the real extracurricular entry.
export const leadership = {
  role: "Club Director",
  org: "CodeAdda",
  period: "Oct 2025 – Present",
  points: [
    "Led and coordinated 8+ contests reaching 150+ participants end-to-end, engaging peer members to produce clear, actionable feedback.",
    "Mentored 25+ members through structured learning paths, improving their problem-solving speed by 30% and lifting participation by 40%.",
  ],
};

export const achievements = [
  {
    title: "Codeforces Specialist",
    detail: "Max rating 1560 · Top 15% globally",
    meta: "45+ rated contests · 1500+ problems solved · 85%+ acceptance",
  },
  {
    title: "Google BigCode Challenge",
    detail: "Top 1500 global rank among 125,000+ participants",
    meta: "Top 1.2% worldwide",
  },
  {
    title: "Codeforces Round #1050 (Div. 4)",
    detail: "Rank 618 / 35,000+",
    meta: "Solved 6/7 problems in 90 minutes",
  },
  {
    title: "CodeChef 3-Star",
    detail: "Rating 1700+",
    meta: "Top 20% across 10+ rated contests",
  },
  {
    title: "MINeD Hackathon",
    detail: "4-member team · 24-hour challenge",
    meta: "Top 30% among 100+ teams",
  },
];

// Codeforces rating bands, used to plot the rating-climb graph in the
// Achievements section and to color the "Specialist" badge accurately.
export const ratingBands = [
  { name: "Newbie", max: 1199, color: "#9aa0a6" },
  { name: "Pupil", max: 1399, color: "#4caf50" },
  { name: "Specialist", max: 1599, color: "#17a398" },
  { name: "Expert", max: 1899, color: "#3b82f6" },
];

export const ratingTrend = [900, 1080, 1190, 1260, 1340, 1420, 1480, 1560];
