export interface Profile {
  name: string;
  title: string;
  heroText: string;
  availability: string;
  showAvailability: boolean;
  location: string;
  email: string;
  phone: string;
  phoneHref: string;
  github: string;
  linkedin: string;
  website: string;
  aboutParagraphs: string[];
  stats: { value: string; label: string }[];
}

export interface JobLink {
  label: string;
  url: string;
}

export interface Job {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  points: string[];
  links?: JobLink[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface SiteContent {
  profile: Profile;
  experience: Job[];
  projects: Project[];
  skills: SkillGroup[];
}

export type ContentKey = keyof SiteContent;

export const defaultProfile: Profile = {
  name: "Pacific Ndahiro",
  title: "Software Engineer",
  heroText:
    "6+ years designing, building, and shipping production-grade web and mobile applications with React, React Native, Flutter, and Node.js. Clean code, scalable architecture, real impact.",
  availability: "Available for new opportunities",
  showAvailability: true,
  location: "11901 Wornall Road, Kansas City, MO 64145",
  email: "ndahiropacific@gmail.com",
  phone: "+1 (402) 904-1136",
  phoneHref: "+14029041136",
  github: "https://github.com/Paccyfic",
  linkedin: "https://linkedin.com/in/ndahiropacific",
  website: "https://www.ndahiropacific.vercel.app",
  aboutParagraphs: [
    "I'm a Software Engineer based in Kansas City, Missouri, with a passion for building polished products end-to-end. I currently work as a Full-Stack Engineer at Cherry, a charity-driven fashion marketplace, and as a Senior Mobile Engineer at Lens Inc, where I build the Umuhinzi farming app and support the Lens Music platform.",
    "I've collaborated with distributed teams of 5–15 engineers, delivered cross-platform mobile apps with 50K+ downloads, migrated a flagship EHR platform from PHP to React 19 with zero downtime, and architected backend services that cut response times by up to 45%. I'm a strong advocate for clean code, comprehensive testing, and AI-assisted development.",
    "Currently pursuing my Master's in Computer Science (Software Engineering) at Avila University.",
  ],
  stats: [
    { value: "6+", label: "Years Experience" },
    { value: "30+", label: "Projects Shipped" },
    { value: "100K+", label: "Users Reached" },
    { value: "10+", label: "Technologies" },
  ],
};

export const defaultExperience: Job[] = [
  {
    id: "cherry",
    role: "Full-Stack Engineer",
    company: "Cherry",
    period: "May 2026 — Present",
    location: "Remote",
    points: [
      "Engineering cherry, a charity-driven marketplace where people buy and sell pre-loved fashion and 100% of proceeds go to charities chosen by the community.",
      "Building and shipping features in the open-source Flutter MVP mobile app (iOS and Android) using MVVM view-models, a repository layer, and widget/unit tests; e.g. letting sellers open their own listings from their profile with full product, category and charity details.",
      "Working on the Node.js + TypeScript (Express, Firebase) backend: product, category, charity and order APIs, Stripe payment intents and webhooks, Sendcloud shipping, and Swagger-documented endpoints deployed on Google Cloud Run.",
      "Collaborating with a volunteer, remote-first team through pull requests, thorough code review, and regression-tested fixes.",
    ],
    links: [
      { label: "Website", url: "https://cherry.org.uk/" },
      { label: "Mobile app (GitHub)", url: "https://github.com/Cherry-CIC/MVP" },
      { label: "Backend (GitHub)", url: "https://github.com/Cherry-CIC/cherry-Backend" },
    ],
  },
  {
    id: "lens-inc",
    role: "Senior Mobile Engineer",
    company: "Lens Inc",
    period: "Jul 2026 — Present",
    location: "Remote",
    points: [
      "Senior engineer across Lens Inc's product portfolio: Umuhinzi, a Flutter + Firebase app for farmers and agribusinesses (live on the App Store), and Lens Music, a music distribution platform.",
      "Umuhinzi: delivered ticket-driven features including a loan-readiness score with a shareable certificate, profit-per-crop and per-season breakdowns, monthly and season-over-season financial trend charts, a pest and disease alert feed, and a cooperative and membership data model.",
      "Umuhinzi: hardened the platform with Firestore security rules and composite indexes, added post reporting and moderation, and merged the personalised home experience into the production feed.",
      "Lens Music: supporting a React/Vite client and NestJS/PostgreSQL API for release, track, contributor and lyrics management on the way to DDEX-based distribution.",
    ],
    links: [
      { label: "Lens Music", url: "https://music.lens.rw/" },
      { label: "Umuhinzi on the App Store", url: "https://apps.apple.com/rw/app/umuhinzi/id6762227442" },
      { label: "Lens on GitHub", url: "https://github.com/lens-ltd" },
    ],
  },
  {
    id: "wrs-health",
    role: "Full-Stack Developer",
    company: "WRS Health",
    period: "Sept 2025 — Jun 2026",
    location: "Goshen, New York",
    points: [
      "Migrated a flagship Electronic Health Record platform from PHP 5.0 to React 19 with zero downtime, using a micro-frontend architecture that preserved backward compatibility across legacy modules.",
      "Built HL7 and FHIR integration pipelines connecting the EHR to external clinical systems for standards-compliant exchange of patient records.",
      "Built reusable, accessible front-end component libraries and RESTful Node.js services.",
      "Led sprint planning, code review, and ticket triage for the frontend team.",
    ],
  },
  {
    id: "invisible",
    role: "Software Engineering Contractor",
    company: "Invisible Technologies Inc.",
    period: "June 2025 — Jan 2026",
    points: [
      "Contributed to platform development and internal tooling supporting enterprise AI operations for 80+ leading AI model providers, including LLM API integrations.",
      "Built data pipelines handling 100+ records daily with 99%+ accuracy.",
      "Reduced manual processing time by 35% with Python and TypeScript automation.",
    ],
  },
  {
    id: "andela",
    role: "Senior Mobile Developer",
    company: "Andela",
    period: "Oct 2024 — May 2025",
    points: [
      "Shipped React, React Native and Flutter apps serving 100K+ monthly active users.",
      "Optimized backend APIs (Node.js, Django, GraphQL), cutting response times by up to 45%.",
      "Reached 90%+ test coverage with comprehensive unit and integration testing.",
    ],
  },
  {
    id: "hexakomb",
    role: "Lead Flutter Developer",
    company: "HexaKomb Ltd",
    period: "Feb 2023 — Aug 2024",
    points: [
      "Led a fintech app for telco services and mobile money to 50K+ downloads and a 4.5+ store rating.",
      "Reduced app startup time from 4.5s to 1.8s; integrated OAuth 2.0, biometric login and MFA.",
    ],
    links: [
      {
        label: "Check out the app",
        url: "https://play.google.com/store/apps/details?id=com.hexakomb.nokanda&hl=en",
      },
    ],
  },
  {
    id: "qt-global",
    role: "Software Developer",
    company: "QT Global Software",
    period: "Oct 2023 — Apr 2024",
    location: "Kigali, Rwanda",
    points: [
      "Re-engineered the URS frontend into a micro-frontend architecture.",
      "Consolidated registry services into a central platform, reducing service request delivery times by ~35%.",
    ],
  },
  {
    id: "seven-x",
    role: "Senior Flutter Developer",
    company: "Seven X",
    period: "Nov 2021 — Jan 2023",
    points: [
      "Architected and maintained multiple Flutter apps from concept to production, including state management, CI/CD and release management across iOS and Android.",
      "Mentored junior developers and improved performance on low-end devices.",
    ],
  },
  {
    id: "liquid",
    role: "Android Developer (Contract)",
    company: "Liquid Intelligent Technologies",
    period: "2021 (9-month contract)",
    points: [
      "Built Android apps in Kotlin and Java with MVVM and Jetpack, using offline-first strategies with Room for low-bandwidth regions.",
    ],
  },
  {
    id: "rsa",
    role: "Full Stack Developer",
    company: "Rwanda Space Agency",
    period: "Dec 2019 — Feb 2021",
    location: "Kigali, Rwanda",
    points: [
      "Built a data collection platform with a custom form builder, saving institutions $30K+/year.",
      "Integrated GIS-based location services across five government platforms.",
    ],
  },
];

export const defaultProjects: Project[] = [
  {
    id: "umuhinzi",
    title: "Umuhinzi",
    description:
      "Flutter + Firebase app for farmers and agribusinesses: bookkeeping and cashflow, profit per crop and season, financial trends, pest alerts, loan-readiness scoring and cooperatives. Live on the App Store.",
    tags: ["Flutter", "Dart", "Firebase", "Firestore"],
    link: "https://apps.apple.com/rw/app/umuhinzi/id6762227442",
  },
  {
    id: "lens-music",
    title: "Lens Music",
    description:
      "Music distribution platform for managing releases, tracks, contributors, lyrics, labels and stores, with a React client and NestJS API.",
    tags: ["React", "NestJS", "PostgreSQL", "TypeScript"],
    link: "https://music.lens.rw/",
  },
  {
    id: "cherry",
    title: "Cherry",
    description:
      "Open-source marketplace that turns pre-loved fashion into charitable giving. Flutter mobile app on a Node.js/Firebase backend with Stripe payments and Sendcloud shipping.",
    tags: ["Flutter", "Node.js", "Firebase", "Stripe"],
    link: "https://cherry.org.uk/",
  },
  {
    id: "fintech",
    title: "Production Fintech Mobile App",
    description:
      "Cross-platform mobile app for secure financial transactions. 50K+ active users, 4.5+ rating, end-to-end encryption, PCI-DSS compliant payments.",
    tags: ["Flutter", "Dart", "Firebase", "OAuth 2.0"],
    link: "https://play.google.com/store/apps/details?id=com.hexakomb.nokanda&hl=en",
  },
  {
    id: "muse",
    title: "Muse of Research",
    description:
      "AI agent helping users discover scholarly articles across X, Telegram, and Discord using the Eliza framework.",
    tags: ["Python", "FastAPI", "PostgreSQL", "Eliza"],
    link: "https://x.com/MuseofResearch",
  },
  {
    id: "enterprise",
    title: "Enterprise Web Platform",
    description:
      "Scalable web app with role-based access control and real-time WebSocket features. Cut load times by 50% via query optimization.",
    tags: ["React", "Node.js", "WebSockets", "CI/CD"],
    link: "https://app.isokko.com/",
  },
  {
    id: "rdb-urs",
    title: "RDB URS",
    description:
      "Microservices platform for the Rwanda Development Board. React frontend, Spring Boot backend, with Python and Bash data migration scripts.",
    tags: ["React", "Spring Boot", "Microservices", "SQL"],
    link: "https://urs.rdb.rw/",
  },
];

export const defaultSkills: SkillGroup[] = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Dart", "Python", "Kotlin", "Java", "C++"],
  },
  {
    title: "Frontend & Mobile",
    items: ["React", "React Native", "Flutter", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    title: "Backend & APIs",
    items: ["Node.js", "Django", "GraphQL", "REST", "Laravel", "Microservices"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "PL/SQL", "Database Design"],
  },
  {
    title: "DevOps & Cloud",
    items: ["Git", "Docker", "CI/CD", "AWS", "GCP", "Agile/Scrum"],
  },
  {
    title: "Tools & Practices",
    items: ["Cursor", "Copilot", "Unit Testing", "Code Reviews", "GDPR"],
  },
];

export const defaultContent: SiteContent = {
  profile: defaultProfile,
  experience: defaultExperience,
  projects: defaultProjects,
  skills: defaultSkills,
};
