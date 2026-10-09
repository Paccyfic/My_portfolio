"""Builds public/Pacific_Ndahiro.pdf (the "Download CV" file). Run: python scripts/build_resume.py"""
from pathlib import Path
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import KeepTogether, ListFlowable, ListItem, Paragraph, SimpleDocTemplate, Spacer

OUT = Path(__file__).resolve().parent.parent / "public" / "Pacific_Ndahiro.pdf"
INK, BLUE, LINK = HexColor("#1a1a2e"), HexColor("#1f3864"), "#1155cc"

name = ParagraphStyle("name", fontName="Helvetica-Bold", fontSize=24, leading=28, alignment=TA_CENTER, textColor=INK)
contact = ParagraphStyle("contact", fontName="Helvetica", fontSize=8.8, leading=12, alignment=TA_CENTER)
h1 = ParagraphStyle("h1", fontName="Helvetica-Bold", fontSize=12.5, leading=15, textColor=INK, spaceBefore=11, spaceAfter=3)
role = ParagraphStyle("role", fontName="Helvetica-Bold", fontSize=10.5, leading=13, textColor=INK, spaceBefore=5)
meta = ParagraphStyle("meta", fontName="Helvetica", fontSize=9, leading=12, textColor=BLUE, spaceAfter=1)
body = ParagraphStyle("body", fontName="Helvetica", fontSize=9, leading=11.8)


def a(url, label):
    return f'<a href="{url}" color="{LINK}"><u>{label}</u></a>'


def bullets(items):
    return ListFlowable(
        [ListItem(Paragraph(t, body), leftIndent=14, bulletColor=INK) for t in items],
        bulletType="bullet", start="•", leftIndent=14, bulletFontSize=8,
    )


def job(title, org_line, points):
    return KeepTogether([Paragraph(title, role), Paragraph(org_line, meta), bullets(points)])


SUMMARY = (
    "Software Engineer with over 6 years of experience designing, building, and shipping production applications across "
    "web and mobile platforms. Currently a Full-Stack Engineer at Cherry and a Senior Mobile Engineer at Lens Inc, "
    "delivering Flutter, React, and Node.js products. Proven track record of scalable, high-performance solutions using "
    "modern JavaScript/TypeScript frameworks and cloud technologies, with a strong focus on clean architecture, "
    "comprehensive testing, and AI-assisted development. Thrives in collaborative, remote-first environments and works "
    "independently across time zones."
)

story = [
    Paragraph("Pacific Ndahiro", name),
    Paragraph(
        "11901 Wornall Road, Kansas City, MO 64145 | ndahiropacific@gmail.com | +14029041136 | "
        + a("https://www.ndahiropacific.vercel.app", "www.ndahiropacific.vercel.app"),
        contact,
    ),
    Paragraph("SUMMARY", h1),
    Paragraph(SUMMARY, body),
    Paragraph("EXPERIENCE", h1),
    job(
        "Full-Stack Engineer",
        "Cherry | May 2026 – Present | Remote &nbsp;(" + a("https://cherry.org.uk/", "cherry.org.uk") + ")",
        [
            "Engineering <b>cherry</b>, a charity-driven marketplace where people buy and sell pre-loved fashion and 100% of proceeds go to charities chosen by the community.",
            "Building and shipping features in the open-source Flutter MVP mobile app (iOS and Android) using MVVM view-models, a repository layer, and widget/unit tests, e.g. letting sellers open their own listings from their profile with full product, category and charity details. " + a("https://github.com/Cherry-CIC/MVP", "Mobile app"),
            "Working on the Node.js + TypeScript (Express, Firebase) backend: product, category, charity and order APIs, Stripe payment intents and webhooks, Sendcloud shipping, and Swagger-documented endpoints on Google Cloud Run. " + a("https://github.com/Cherry-CIC/cherry-Backend", "Backend"),
            "Collaborating with a volunteer, remote-first team through pull requests, thorough code review, and regression-tested fixes.",
        ],
    ),
    job(
        "Senior Mobile Engineer",
        "Lens Inc | Jul 2026 – Present | Remote &nbsp;(" + a("https://github.com/lens-ltd", "github.com/lens-ltd") + ")",
        [
            "Senior engineer across Lens Inc's products: <b>Umuhinzi</b>, a Flutter + Firebase app for farmers and agribusinesses (" + a("https://apps.apple.com/rw/app/umuhinzi/id6762227442", "App Store") + "), and <b>Lens Music</b>, a music distribution platform (" + a("https://music.lens.rw/", "music.lens.rw") + ").",
            "Umuhinzi: delivered ticket-driven features including a loan-readiness score with a shareable certificate, profit-per-crop and per-season breakdowns, monthly and season-over-season financial trend charts, a pest and disease alert feed, and a cooperative and membership data model.",
            "Umuhinzi: hardened the platform with Firestore security rules and composite indexes, added post reporting and moderation, and merged the personalised home experience into the production feed.",
            "Lens Music: supporting a React/Vite client and NestJS/PostgreSQL API for release, track, contributor and lyrics management on the way to DDEX-based distribution.",
        ],
    ),
    job(
        "Full-Stack Developer",
        "WRS Health | Sept 2025 – Jun 2026 | Goshen, New York",
        [
            "Migrated a flagship Electronic Health Record platform from PHP 5.0 to React 19 with zero downtime, by introducing a micro-frontend architecture that preserved backward compatibility across legacy modules.",
            "Built HL7 and FHIR integration pipelines connecting the EHR to external clinical systems, enabling standards compliant exchange of patient records.",
            "Built reusable, accessible front-end component libraries and RESTful Node.js services, improving delivery speed and consistency across the platform.",
            "Led sprint planning, code review, and ticket triage for the frontend team, improving delivery predictability across the sprint cycle.",
        ],
    ),
    job(
        "Software Engineering Contractor",
        "Invisible Technologies Inc. | June 2025 – Jan 2026",
        [
            "Contributed to platform development and internal tooling supporting enterprise AI operations serving 80+ leading AI model providers, including LLM API integrations.",
            "Built and maintained data processing pipelines handling 100+ records daily with 99%+ accuracy, with automated validation and quality control.",
            "Developed Python and TypeScript scripts to streamline data enrichment workflows, reducing manual processing time by 35%.",
            "Collaborated with distributed engineering teams across time zones; took part in code reviews and documented technical processes and user guides for onboarding.",
        ],
    ),
    job(
        "Senior Mobile Developer",
        "Andela | Oct 2024 – May 2025",
        [
            "Designed, developed, and shipped scalable web and mobile applications with distributed engineering teams of 5–15 developers.",
            "Built production-grade responsive websites using React serving 100K+ monthly active users, and cross-platform apps with React Native and Flutter featuring real-time sync and offline capabilities.",
            "Architected backend services using Node.js, Django, and GraphQL, reducing API response times by up to 45%.",
            "Established testing strategies achieving 90%+ code coverage; mentored junior developers and conducted code reviews.",
            "Documented technical architecture and API specifications, improving team onboarding efficiency by 60%.",
        ],
    ),
    job(
        "Lead Flutter Developer",
        "HexaKomb Ltd | Feb 2023 – Aug 2024 &nbsp;(" + a("https://play.google.com/store/apps/details?id=com.hexakomb.nokanda&hl=en", "Check out the app") + ")",
        [
            "Led end-to-end development of a fintech mobile application for Telco services and mobile money transactions, achieving 50K+ downloads and a 4.5+ app store rating.",
            "Implemented secure authentication including OAuth 2.0, biometric login, and multi-factor authentication; integrated third-party payment APIs with 99.9% uptime.",
            "Built pixel-perfect Flutter UI components (40% faster rendering) and cut app startup time from 4.5s to 1.8s; added error tracking and analytics with Sentry and Firebase.",
            "Used AI development tools to accelerate feature implementation and automated testing workflows.",
        ],
    ),
    job(
        "Software Developer",
        "QT Global Software | Oct 2023 – April 2024 | Kigali, Rwanda",
        [
            "Consolidated registry services into a central platform, reducing delivery times of service requests by an estimated 35%.",
            "Re-engineered the frontend application of URS into a micro-frontend to drive maintainability and team autonomy.",
        ],
    ),
    job(
        "Senior Flutter Developer",
        "Seven X | Nov 2021 – Jan 2023",
        [
            "Architected and maintained multiple Flutter applications from concept to production release with clean architecture and scalable patterns.",
            "Led state management strategy, CI/CD pipeline setup, and release management across iOS and Android; mentored junior Flutter developers.",
            "Drove performance optimization, reducing widget rebuild cycles and improving responsiveness on low-end devices.",
        ],
    ),
    job(
        "Android Developer (Contract)",
        "Liquid Intelligent Technologies | 2021 (9-month contract)",
        [
            "Developed Android applications in Kotlin and Java using MVVM and Jetpack, with offline-first data strategies on Room for low-bandwidth regions.",
            "Triaged bugs with QA and product teams, reduced crash rates through structured error handling and memory profiling, and contributed to the internal design system.",
        ],
    ),
    job(
        "Full Stack Developer",
        "Rwanda Space Agency (RSA) | Dec 2019 – Feb 2021 | Kigali, Rwanda",
        [
            "Developed a data collection platform with a custom form builder and advanced analytics, helping institutions save more than $30,000/year spent on external solutions.",
            "Integrated location-based services in five government platforms using GIS products.",
        ],
    ),
    Paragraph("EDUCATION", h1),
    Paragraph("Master of Computer Science – Software Engineering (In Progress)", role),
    Paragraph("Avila University | Kansas City, Missouri, USA | Nov 2025 – Present", meta),
    bullets(["Advanced coursework in software architecture, distributed systems, and cloud computing."]),
    Paragraph("Bachelor of Information Technology – Software Engineering", role),
    Paragraph("University of Rwanda | Sept 2020 – Sept 2024", meta),
    bullets(["Specialized in Software Engineering with Honours."]),
    Paragraph("TECHNICAL SKILLS", h1),
]

for label, text in [
    ("Languages", "JavaScript, TypeScript, Python, Dart, Kotlin, Java, C++, C#"),
    ("Frontend", "React, React Native, Flutter, HTML5, CSS3, AngularJS, NextJs, PHP, Responsive Design, Accessibility, UI Component Libraries"),
    ("Backend &amp; APIs", "Node.js, Django, GraphQL, RESTful APIs (JSON), Event-Driven Architecture, Microservices, Laravel"),
    ("AI Integration", "LLM API Integration (OpenAI, Anthropic), Prompt Engineering, AI-Assisted Development (Copilot, Cursor)"),
    ("Cloud &amp; DevOps", "AWS, GCP, Docker, Kubernetes, CI/CD (GitHub Actions), Git/GitHub, Agile/Scrum, Jira"),
    ("Databases", "PostgreSQL, MongoDB, MySQL, Redis, PL/SQL, DB Design &amp; Optimization"),
    ("Quality", "Unit &amp; Integration Testing, Code Reviews, Performance Optimization, Technical Documentation"),
    ("Design Tools", "Figma, Photoshop, Wireframing, PSD-to-Web Conversion"),
]:
    story.append(Paragraph(f"<b>{label}:</b> {text}", body))

story += [
    Paragraph("KEY PROJECTS &amp; ACHIEVEMENTS", h1),
    Paragraph("Umuhinzi (Lens Inc)", role),
    bullets(["Flutter + Firebase app for farmers: cashflow and bookkeeping, profit per crop and season, financial trends, pest alerts, loan-readiness scoring and cooperatives. " + a("https://apps.apple.com/rw/app/umuhinzi/id6762227442", "App Store")]),
    Paragraph("Lens Music (Lens Inc)", role),
    bullets(["Music distribution platform for releases, tracks, contributors, lyrics, labels and stores (React, NestJS, PostgreSQL). " + a("https://music.lens.rw/", "Visit")]),
    Paragraph("Cherry", role),
    bullets(["Open-source mobile marketplace turning pre-loved fashion into charitable giving (Flutter, Node.js, Firebase, Stripe). " + a("https://cherry.org.uk/", "Visit")]),
    Paragraph("Production Fintech Mobile Application", role),
    bullets([
        "Architected and delivered a cross-platform mobile app handling secure financial transactions with 50K+ active users and a 4.5+ rating on Google Play and the App Store. " + a("https://play.google.com/store/apps/details?id=com.hexakomb.nokanda&hl=en", "Check out the app"),
        "Implemented end-to-end encryption and PCI-DSS compliant payment processing.",
    ]),
    Paragraph("Muse of Research", role),
    bullets(["Built an AI agent helping users find scholarly articles across X, Telegram, and Discord using the Eliza framework, Python, FastAPI, and PostgreSQL. " + a("https://x.com/MuseofResearch", "Interact on X")]),
    Paragraph("Enterprise Web Application Platform", role),
    bullets([
        "Built scalable web applications with complex role-based access control and real-time features using WebSockets.",
        "Optimized database queries, reducing load times by 50%, and established CI/CD pipelines that cut release time from days to hours.",
    ]),
    Paragraph("RDB URS", role),
    bullets(["Microservices-based platform for the Rwanda Development Board with a React frontend and Java Spring Boot backend, plus Python, TypeScript, Bash, and SQL scripts for data migration and government service integration. " + a("https://urs.rdb.rw/", "Visit")]),
    Paragraph("CERTIFICATIONS", h1),
    bullets([
        "AWS Certified Solutions Architect – Associate (Amazon Web Services)",
        "OpenJS Node.js Application Developer (JSNAD) – Linux Foundation",
        "Google IT Support Professional Certificate – Google/Coursera",
        "Legacy JavaScript Algorithms and Data Structures – freeCodeCamp (Oct 2023)",
        "Software Engineering Certificate of Trainee Completion – ATLP (Andela Technical Leadership Program)",
        "Duolingo English Certificate – Duolingo",
    ]),
    Paragraph("PROFESSIONAL COMPETENCIES", h1),
    bullets([
        "<b>Production System Ownership:</b> Proven experience shipping, monitoring, and maintaining production applications with real business impact.",
        "<b>Rapid Technology Adoption:</b> Successfully mastered multiple frameworks and languages; quick to learn and apply new technologies effectively.",
        "<b>Remote Collaboration:</b> 5+ years working with distributed teams across time zones with clear, documented communication.",
        "<b>Problem-Solving:</b> Pragmatic approach to technical challenges, balancing speed of delivery with code quality and maintainability.",
        "<b>AI-Augmented Development:</b> Experienced using modern AI tools to accelerate coding, debugging, and testing.",
        "<b>Product Mindset:</b> Strong understanding of user needs and business objectives; ability to translate requirements into technical solutions.",
    ]),
]

SimpleDocTemplate(
    str(OUT), pagesize=letter, title="Pacific Ndahiro - Resume", author="Pacific Ndahiro",
    leftMargin=0.75 * inch, rightMargin=0.75 * inch, topMargin=0.6 * inch, bottomMargin=0.6 * inch,
).build(story)
print("wrote", OUT)
