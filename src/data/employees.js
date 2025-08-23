export const employees=[
    {
        id:1,
        fullName:"Mamadou Bah",
        profession:"Software Engineer",
        email:"mamadou.bah@example.com",
        phone:"+2203283624",
        education:[
            {
                id:1,
                institution:"University of The Gambia",
                course:"Bachelor of Science in Computer Science"
            },
            {
                id:2,
                institution:"Gambia Technical Training Institute",
                course:"Bachelor of Engineering in Electrical Engineering"
            },
            {
                id:3,
                institution:"Stanford University",
                course:"Phd in Computer Science"
            }
        ],
        experience:[
            {
                id:1,
                employer:"Bah Tech",
                role:"Software Engineer",
                startDate:"January 2025",
                endDate:"Present"
            },
            {
                id:2,
                employer:"Gambia Tech",
                role:"Junior Developer",
                startDate:"January 2024",
                endDate:"December 2024"
            }
        ],
    bio:"I am a Computer Science student and Product Engineer with strong skills in Java, Spring Boot, and backend development. I build scalable digital solutions and have worked on projects like job and talent matching platforms and university election systems. I am also advancing my skills in Machine Learning with Python, aiming to apply AI to solve real-world problems. Beyond coding, I mentor peers on clean architecture and help teams adopt test-driven development and continuous integration practices. I am passionate about performance optimization, developer experience, and building tools that empower others to move faster with confidence.",
        address:"Lamin Kerewan"
    },
    {
        id:2,
        fullName:"Awa Jallow",
        profession:"Frontend Developer",
        email:"awa.jallow@example.com",
        phone:"+2202456789",
        education:[
            {
                id:1,
                institution:"University of The Gambia",
                course:"BSc Information Systems"
            },
            {
                id:2,
                institution:"FreeCodeCamp",
                course:"Responsive Web Design Certification"
            }
        ],
        experience:[
            {
                id:1,
                employer:"WebCraft",
                role:"Frontend Developer",
                startDate:"June 2024",
                endDate:"Present"
            },
            {
                id:2,
                employer:"Startup Hub",
                role:"UI Intern",
                startDate:"January 2024",
                endDate:"May 2024"
            }
        ],
    bio:"Creative frontend developer focused on building accessible, performant interfaces with React, modern CSS, and design systems. Passionate about consistent UI and component reusability. I enjoy translating product requirements into modular component libraries, enforcing design tokens, and partnering closely with designers to refine interaction details. I advocate for accessibility-first workflows, semantic HTML, and progressive enhancement. My recent work includes building a theming engine, optimizing bundle size through code-splitting, and instituting visual regression testing for UI stability.",
        address:"Serrekunda"
    },
    {
        id:3,
        fullName:"Lamin Sowe",
        profession:"Data Analyst",
        email:"lamin.sowe@example.com",
        phone:"+2203311223",
        education:[
            {
                id:1,
                institution:"University of The Gambia",
                course:"BSc Economics"
            },
            {
                id:2,
                institution:"Coursera",
                course:"Google Data Analytics Professional Certificate"
            }
        ],
        experience:[
            {
                id:1,
                employer:"Insight Labs",
                role:"Data Analyst",
                startDate:"March 2024",
                endDate:"Present"
            },
            {
                id:2,
                employer:"MarketPulse",
                role:"Junior Analyst",
                startDate:"August 2023",
                endDate:"February 2024"
            }
        ],
    bio:"Data analyst specializing in transforming raw datasets into actionable insights using Python, SQL, and visualization tools. Interested in predictive analytics and business intelligence. I design efficient ETL workflows, build dashboards that elevate strategic decision making, and prototype statistical models to forecast trends. My approach balances data rigor with storytelling clarity, ensuring stakeholders understand not just the 'what' but also the 'why'. I am steadily incorporating cloud data warehouses and orchestration tools to scale analytics pipelines.",
        address:"Brikama"
    },
    {
        id:4,
        fullName:"Fatou Ceesay",
        profession:"Product Designer",
        email:"fatou.ceesay@example.com",
        phone:"+2207755044",
        education:[
            {
                id:1,
                institution:"Design Institute Africa",
                course:"Diploma in UX/UI Design"
            },
            {
                id:2,
                institution:"Interaction Design Foundation",
                course:"Human-Centered Design"
            }
        ],
        experience:[
            {
                id:1,
                employer:"Pixel Forge",
                role:"Product Designer",
                startDate:"April 2024",
                endDate:"Present"
            },
            {
                id:2,
                employer:"Creative Studio",
                role:"UX Research Intern",
                startDate:"October 2023",
                endDate:"March 2024"
            }
        ],
    bio:"Product designer crafting intuitive user journeys and clean interfaces. Strong in wireframing, prototyping, and usability testing with a focus on accessibility. I facilitate collaborative design workshops, run moderated and unmoderated usability studies, and synthesize qualitative insights into actionable iterations. My workflow blends systems thinking with micro‑interaction polish, ensuring solutions are both coherent and delightful. I champion inclusive design, color contrast standards, and scalable component inventories across product teams.",
        address:"Bakau"
    },
    {
        id:5,
        fullName:"Isatou Touray",
        profession:"DevOps Engineer",
        email:"isatou.touray@example.com",
        phone:"+2206611445",
        education:[
            { id:1, institution:"University of The Gambia", course:"BSc Information Technology" },
            { id:2, institution:"Udacity", course:"Cloud DevOps Nanodegree" }
        ],
        experience:[
            { id:1, employer:"CloudBridge", role:"DevOps Engineer", startDate:"Feb 2024", endDate:"Present" },
            { id:2, employer:"InfraWorks", role:"Junior DevOps", startDate:"Jul 2023", endDate:"Jan 2024" }
        ],
    bio:"DevOps engineer automating CI/CD pipelines, container orchestration, and infrastructure as code with Docker, Kubernetes, and Terraform. I design resilient deployment strategies (blue/green and canary), implement observability stacks (metrics, tracing, structured logs), and enforce security baselines via policy-as-code. My focus is reducing meantime to recovery, increasing delivery frequency, and empowering developers with self-service platform tooling. I routinely profile build pipelines to cut latency and cost while keeping compliance in check.",
        address:"Fajara"
    },
    {
        id:6,
        fullName:"Ebrima Njie",
        profession:"Mobile Developer",
        email:"ebrima.njie@example.com",
        phone:"+2207012234",
        education:[
            { id:1, institution:"Gambia College", course:"Diploma in Software Development" },
            { id:2, institution:"Coursera", course:"Meta React Native Specialization" }
        ],
        experience:[
            { id:1, employer:"AppSphere", role:"React Native Developer", startDate:"May 2024", endDate:"Present" },
            { id:2, employer:"BrightApps", role:"Mobile Intern", startDate:"Jan 2024", endDate:"Apr 2024" }
        ],
    bio:"Mobile developer building performant cross-platform apps with React Native, TypeScript, and Expo; keen on UX polish and performance profiling. I architect shared component layers, optimize startup time through asset preloading and Hermes tuning, and integrate analytics/event schemas to guide feature iteration. I am driven by delivering smooth animations at 60fps, robust offline support, and accessible touch targets. Recently I implemented an error boundary + crash reporting pipeline that reduced unhandled runtime issues by over 40%.",
        address:"Tallinding"
    },
    {
        id:7,
        fullName:"Mariama Conteh",
        profession:"Cybersecurity Analyst",
        email:"mariama.conteh@example.com",
        phone:"+2207722990",
        education:[
            { id:1, institution:"University of The Gambia", course:"BSc Computer Science" },
            { id:2, institution:"EC-Council", course:"Certified Ethical Hacker (CEH)" }
        ],
        experience:[
            { id:1, employer:"SecureNet", role:"Cybersecurity Analyst", startDate:"Jan 2025", endDate:"Present" },
            { id:2, employer:"NetShield", role:"Security Operations Intern", startDate:"Aug 2024", endDate:"Dec 2024" }
        ],
    bio:"Cybersecurity analyst focusing on threat monitoring, vulnerability assessment, and incident response. Interested in cloud security and zero trust architectures. I build detection rules, fine‑tune SIEM signal-to-noise ratios, and coordinate tabletop exercises to strengthen incident readiness. My work spans hardening cloud identities, implementing least privilege, and automating patch validation cycles. I am committed to translating complex security posture metrics into actionable remediation plans for both technical and non-technical stakeholders.",
        address:"Kanifing"
    }
]