import logo from '../Assets/image.png';

export const jobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    employer: {
      name: "Tech Solutions Inc.",
  logo: logo
    },
    location: {
      name: "Banjul",
      type: "Onsite"
    },
    level: "Senior",
    shift: "Day",
    description: "Build and maintain responsive React applications, mentor juniors, and collaborate with design and backend teams.",
    salary: 3500,
    tags: ["React", "TypeScript", "CSS"],
    postedDate: "2025-08-19",
    requirements: [
      "5+ years of frontend development experience",
      "Strong knowledge of React and TypeScript",
      "Experience with responsive design and CSS frameworks",
      "Ability to mentor junior developers"
    ]
  },
  {
    id: 2,
    title: "Backend Engineer (Node.js)",
    employer: {
      name: "Gambia Tech",
  logo: logo
    },
    location: {
      name: "Remote",
      type: "Remote"
    },
    level: "Mid",
    shift: "Flexible",
    description: "Design and implement RESTful APIs using Node.js and Express. Work with MongoDB and ensure performant, secure endpoints.",
    salary: 3000,
    tags: ["Node.js", "Express", "MongoDB"],
    postedDate: "2025-08-18",
    requirements: [
      "3+ years of backend development experience",
      "Strong proficiency with Node.js and Express",
      "Experience designing MongoDB schemas and indexes",
      "Knowledge of API authentication and security (JWT/OAuth)",
      "Familiarity with automated testing (Jest / Supertest)",
      "Ability to profile and optimize API performance"
    ]
  },
  {
    id: 3,
    title: "UI/UX Designer",
    employer: {
      name: "Creative Minds",
  logo: logo
    },
    location: {
      name: "Serrekunda",
      type: "Onsite"
    },
    level: "Mid",
    shift: "Day",
    description: "Lead user research, design high-fidelity interfaces, and create prototypes to improve user satisfaction.",
    salary: 2200,
    tags: ["Figma", "Adobe XD", "User Research"],
    postedDate: "2025-08-20",
    requirements: [
      "3+ years in UI/UX design",
      "Expert with Figma and Adobe XD",
      "Experience conducting user interviews & usability tests",
      "Ability to create wireframes, flows, and interactive prototypes",
      "Understanding of design systems and component libraries",
      "Strong collaboration and communication skills"
    ]
  },
  {
    id: 4,
    title: "Full-Stack Developer",
    employer: {
      name: "Innovate Gambia",
  logo: logo
    },
    location: {
      name: "Brusubi",
      type: "Onsite"
    },
    level: "Mid",
    shift: "Day",
    description: "Develop full-stack features using React and Node.js. Work with PostgreSQL and Docker for deployments.",
    salary: 3200,
    tags: ["React", "Node.js", "PostgreSQL", "Docker"],
    postedDate: "2025-08-17",
    requirements: [
      "3+ years building full-stack web applications",
      "Strong React and Node.js skills",
      "Experience with PostgreSQL schema design & optimization",
      "Familiarity with Docker and container-based deployment",
      "Comfortable integrating and designing REST APIs",
      "Writing unit and integration tests"
    ]
  },
  {
    id: 5,
    title: "DevOps Engineer",
    employer: {
      name: "CloudNet Africa",
  logo: logo
    },
    location: {
      name: "Remote",
      type: "Remote"
    },
    level: "Senior",
    shift: "Flexible",
    description: "Maintain and scale cloud infrastructure using AWS, Kubernetes and Terraform. Automate CI/CD pipelines.",
    salary: 3800,
    tags: ["AWS", "Kubernetes", "Terraform"],
    postedDate: "2025-08-16",
    requirements: [
      "5+ years in DevOps / SRE roles",
      "Deep experience with AWS (EC2, S3, RDS, IAM)",
      "Managing Kubernetes clusters in production",
      "Infrastructure as Code with Terraform",
      "Building & maintaining CI/CD pipelines (GitHub Actions / GitLab CI)",
      "Monitoring & logging (Prometheus, Grafana, ELK)"
    ]
  },
  {
    id: 6,
    title: "Mobile App Developer (React Native)",
    employer: {
      name: "Senegambia Apps",
  logo: logo
    },
    location: {
      name: "Dakar, Senegal",
      type: "Hybrid"
    },
    level: "Mid",
    shift: "Day",
    description: "Build cross-platform mobile applications using React Native and ensure high performance across devices.",
    salary: 2800,
    tags: ["React Native", "iOS", "Android"],
    postedDate: "2025-08-15",
    requirements: [
      "2+ years with React Native",
      "Published apps to App Store and/or Play Store",
      "Experience integrating REST / GraphQL APIs",
      "Understanding of mobile performance optimization",
      "Familiarity with native modules & platform differences",
      "Testing with Jest / Detox"
    ]
  }
];
