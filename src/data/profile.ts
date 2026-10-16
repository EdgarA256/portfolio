export type NavLink = {
  label: string;
  href: string;
};

export type Interest = {
  title: string;
  description: string;
  icon: string;
};

export type SkillGroup = {
  title: string;
  note: string;
  items: string[];
};

export type Project = {
  title: string;
  description: string;
  category: string;
  date: string;
  image?: string;
  link?: string;
};

export type JourneyTheme = {
  title: string;
  description: string;
};

export type Opportunity = {
  title: string;
  description: string;
  icon: string;
};

export type Recommendation = {
  name: string;
  tagline: string;
  description: string;
  link: string;
  image: string;
  features: string[];
};

export const profile = {
  name: "Agaba Edgar Ruteisire",
  shortName: "Edgar",
  initials: "AER",
  wordmark: "Agaba Edgar",
  eyebrow: "Student · Accounting & Finance",
  role: "BSc.AF Student · Kabale University · Year Two",
  tagline: "Building clarity. Grounded in integrity. Shaping a future in finance.",
  email: "",
  whatsapp: "+256 789 268 084",
  phone: "+256 789 268 084",
  linkedin: "",
  location: "Kabale, Uganda",
  socials: [
    { label: "X / Twitter", href: "https://x.com/edgarrut5", icon: "twitter" },
    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61550744050874", icon: "facebook" },
    { label: "GitHub", href: "https://github.com/EdgarA256", icon: "github" },
  ],
  registrationNumber: "2025/A/KAF/1686/F",
  idNumber: "2501501686",
  faculty: "FEMS",
  portrait: "/images/edgar-portrait.jpg",
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Interests", href: "#interests" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export const aboutHighlights = [
  { label: "Current focus", value: "Accounting & Finance" },
  { label: "Academic home", value: "Kabale University" },
  { label: "Current stage", value: "Second year, BSc.AF" },
  { label: "Outlook", value: "Learning, growth, integrity, precision" },
];

export const education = {
  institution: "Kabale University",
  programme: "Bachelor of Science in Accounting and Finance",
  abbreviation: "BSc.AF",
  level: "Second year · Ongoing",
  summary:
    "The programme combines the principles of accounting — measuring, recording, and communicating financial information — with the tools of finance: investment, risk, capital, and value. It is the language of business and the foundation of sound decision-making.",
  future: [
    "Financial reporting & analysis",
    "Taxation & auditing",
    "Corporate finance",
    "Research projects",
    "Professional certifications",
  ],
};

export const interests: Interest[] = [
  {
    title: "Financial Reporting & Analysis",
    description:
      "Translating business activity into clear, reliable financial information that drives decisions.",
    icon: "chart",
  },
  {
    title: "Auditing & Assurance",
    description:
      "Ensuring accuracy, transparency, and trust in the numbers that organisations depend on.",
    icon: "microscope",
  },
  {
    title: "Investment & Capital Markets",
    description:
      "How capital moves, grows, and is allocated across markets, time, and opportunity.",
    icon: "trending-up",
  },
  {
    title: "Taxation & Regulatory Compliance",
    description:
      "The rules that govern financial systems and keep them accountable to stakeholders.",
    icon: "scale",
  },
  {
    title: "Corporate Finance & Valuation",
    description:
      "The decisions that shape how businesses create, manage, and measure value.",
    icon: "briefcase",
  },
  {
    title: "Risk Management & Internal Controls",
    description:
      "Identifying, measuring, and mitigating threats to financial stability and integrity.",
    icon: "shield",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Accounting Foundations",
    note: "Core principles being built through study and practice.",
    items: [
      "Bookkeeping and ledger management",
      "Financial statement preparation",
      "Recording and classifying transactions",
      "Understanding accounting standards",
    ],
  },
  {
    title: "Financial Tools & Analysis",
    note: "Working with data to support sound financial decisions.",
    items: [
      "Excel and spreadsheet modelling",
      "Ratio and trend analysis",
      "Budgeting and forecasting",
      "Data interpretation and presentation",
    ],
  },
  {
    title: "Research & Communication",
    note: "Gathering evidence and presenting it with clarity.",
    items: [
      "Academic research and referencing",
      "Report writing and documentation",
      "Presenting findings clearly",
      "Collaborative projects and teamwork",
    ],
  },
  {
    title: "Professional Growth",
    note: "The habits that build a career in accounting and finance.",
    items: [
      "Attention to detail",
      "Integrity and ethical awareness",
      "Time management and discipline",
      "Curiosity and self-directed learning",
    ],
  },
];

export const projects: Project[] = [];

export const afroduuka: Recommendation = {
  name: "AfroDuuka",
  tagline: "Business software, built for Africa",
  description:
    "AfroDuuka is a modern inventory and business management system designed for African retailers. It brings sales, stock, suppliers, and branches into one clear view — helping growing businesses run today's operations and plan for the next. As a finance student, I pay attention to tools that handle the numbers properly. AfroDuuka does exactly that.",
  link: "https://afroduuka-ui.onrender.com/",
  image: "/images/afroduuka.jpg",
  features: [
    "Real-time inventory tracking",
    "Automated WhatsApp alerts",
    "Profit & loss reports",
    "Multi-branch management",
  ],
};

export const journeyIntro =
  "This is where the story continues beyond the classroom — lessons learned, practical exposure, books and ideas, and the small milestones that mark a student's path. New entries will appear here as the journey unfolds.";

export const journeyThemes: JourneyTheme[] = [
  {
    title: "Lessons learned",
    description: "What study, practice, and failure have taught me so far.",
  },
  {
    title: "Practical exposure",
    description: "Time spent beyond lectures, applying concepts to real scenarios.",
  },
  {
    title: "Books & ideas",
    description: "The thinking that is shaping how I see accounting and finance.",
  },
  {
    title: "Industry observations",
    description: "What I notice about how businesses and financial systems interact.",
  },
  {
    title: "Milestones",
    description: "The moments that mark progress on this path.",
  },
];

export const opportunities: Opportunity[] = [
  {
    title: "Students & fellow learners",
    description: "Peers exploring similar questions who want to learn together.",
    icon: "users",
  },
  {
    title: "Mentors & educators",
    description: "People whose experience can guide a still-forming direction.",
    icon: "compass",
  },
  {
    title: "Accounting & finance professionals",
    description: "Practitioners doing the work I am preparing to join.",
    icon: "briefcase",
  },
  {
    title: "Firms & organisations",
    description: "Teams where financial insight creates real-world value.",
    icon: "building",
  },
  {
    title: "Internship & early-career providers",
    description: "Opportunities to learn by doing, in practice and beyond.",
    icon: "handshake",
  },
  {
    title: "Community initiatives",
    description: "Local efforts where financial literacy and opportunity meet.",
    icon: "globe",
  },
];

export const contact = {
  headline: "Let's build something valuable together.",
  invitation:
    "Whether you are a student, a mentor, a professional, or simply someone who values clarity and integrity in finance — I would be glad to hear from you.",
  availability:
    "Open to mentorship, collaboration, internships, and conversations about accounting, finance, and professional growth.",
};
