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

export const profile = {
  name: "Agaba Edgar Ruteisire",
  shortName: "Edgar",
  initials: "AER",
  wordmark: "Agaba Edgar",
  eyebrow: "Student · Agriculture & Forestry",
  role: "BSc.AF Student · Kabale University · Year Two",
  tagline: "Growing knowledge. Rooted in purpose. Building a sustainable future.",
  email: "",
  whatsapp: "",
  linkedin: "",
  location: "Kabale, Uganda",
  socials: [] as { label: string; href: string; icon: string }[],
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
  { label: "Current focus", value: "Agriculture & Forestry" },
  { label: "Academic home", value: "Kabale University" },
  { label: "Current stage", value: "Second year, BSc.AF" },
  { label: "Outlook", value: "Learning, growth, sustainability, collaboration" },
];

export const education = {
  institution: "Kabale University",
  programme: "Bachelor of Science in Agriculture and Forestry",
  abbreviation: "BSc.AF",
  level: "Second year · Ongoing",
  summary:
    "The programme brings together the science of crop and livestock production with the management of forests, soils, and land resources. It is the study of living systems — how they grow, how they are sustained, and how people can work with them responsibly.",
  future: [
    "Relevant coursework",
    "Fieldwork and practical learning",
    "Research interests",
    "Academic projects",
    "Certifications",
  ],
};

export const interests: Interest[] = [
  {
    title: "Sustainable Agriculture",
    description:
      "Farming systems that protect soil, water, and biodiversity while producing reliable food.",
    icon: "sprout",
  },
  {
    title: "Forestry & Forest Conservation",
    description:
      "The stewardship of forests as living ecosystems, resources, and climate allies.",
    icon: "trees",
  },
  {
    title: "Environmental Sustainability",
    description:
      "Balancing human needs with the health of the natural systems we depend on.",
    icon: "leaf",
  },
  {
    title: "Soil & Land Resource Management",
    description:
      "Understanding and caring for the ground beneath us as the foundation of life.",
    icon: "mountain",
  },
  {
    title: "Food Security & Resilient Systems",
    description:
      "Building food systems that can withstand change and nourish communities.",
    icon: "wheat",
  },
  {
    title: "Biodiversity & Ecosystem Stewardship",
    description:
      "Protecting the variety of life that keeps ecosystems — and us — resilient.",
    icon: "bird",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Practical & Technical",
    note: "Hands-on foundations being built through study and practice.",
    items: [
      "Field and laboratory practice",
      "Crop and soil handling",
      "Forestry and land assessment",
      "Observation and data collection",
    ],
  },
  {
    title: "Digital & Research",
    note: "Tools for inquiry, analysis, and evidence-based thinking.",
    items: [
      "Academic research and referencing",
      "Data handling and spreadsheets",
      "Geospatial and mapping tools",
      "Literature review and synthesis",
    ],
  },
  {
    title: "Communication & Collaboration",
    note: "Working with others to share ideas and get things done.",
    items: [
      "Academic writing",
      "Teamwork and group projects",
      "Presenting ideas clearly",
      "Active listening and feedback",
    ],
  },
  {
    title: "Personal & Professional Growth",
    note: "The habits that carry learning forward.",
    items: [
      "Curiosity and self-directed learning",
      "Consistency and discipline",
      "Adaptability and resilience",
      "Openness to mentorship",
    ],
  },
];

export const projects: Project[] = [];

export const journeyIntro =
  "This is where the story continues beyond the classroom — lessons learned, field experiences, books and ideas, and the small milestones that mark a student's path. New entries will appear here as the journey unfolds.";

export const journeyThemes: JourneyTheme[] = [
  {
    title: "Lessons learned",
    description: "What study, practice, and failure have taught me so far.",
  },
  {
    title: "Field experiences",
    description: "Time spent outside lecture halls, working with land and people.",
  },
  {
    title: "Books & ideas",
    description: "The thinking that is shaping how I see agriculture and forestry.",
  },
  {
    title: "Sustainability observations",
    description: "What I notice about how communities and ecosystems interact.",
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
    title: "Agriculture & forestry professionals",
    description: "Practitioners doing the work I am preparing to join.",
    icon: "sprout",
  },
  {
    title: "Sustainability-focused organisations",
    description: "Teams turning environmental intent into real-world impact.",
    icon: "globe",
  },
  {
    title: "Internship & early-career providers",
    description: "Opportunities to learn by doing, in the field and beyond.",
    icon: "handshake",
  },
  {
    title: "Community & environmental initiatives",
    description: "Local efforts where contribution and learning go together.",
    icon: "leaf",
  },
];

export const contact = {
  headline: "Let's grow something meaningful together.",
  invitation:
    "Whether you are a student, a mentor, a professional, or simply someone who cares about land, food, and forests — I would be glad to hear from you. The best conversations often begin with a simple hello.",
  availability:
    "Open to mentorship, collaboration, fieldwork, internships, and conversations about agriculture, forestry, and sustainability.",
};
