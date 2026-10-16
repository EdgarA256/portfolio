import {
  Sprout,
  Trees,
  Leaf,
  Mountain,
  Wheat,
  Bird,
  Users,
  Compass,
  Globe,
  Handshake,
  FlaskConical,
  BookOpen,
  PenLine,
  Microscope,
  ChartNoAxesColumn,
  TrendingUp,
  Scale,
  Briefcase,
  Shield,
  Building2,
  Mail,
  MessageCircle,
  Phone,
  ArrowUp,
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  Quote,
  MapPin,
  ExternalLink,
  GraduationCap,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  sprout: Sprout,
  trees: Trees,
  leaf: Leaf,
  mountain: Mountain,
  wheat: Wheat,
  bird: Bird,
  users: Users,
  compass: Compass,
  globe: Globe,
  handshake: Handshake,
  flask: FlaskConical,
  book: BookOpen,
  pen: PenLine,
  microscope: Microscope,
  chart: ChartNoAxesColumn,
  "trending-up": TrendingUp,
  scale: Scale,
  briefcase: Briefcase,
  shield: Shield,
  building: Building2,
  mail: Mail,
  message: MessageCircle,
  phone: Phone,
  "arrow-up": ArrowUp,
  "arrow-right": ArrowRight,
  "arrow-up-right": ArrowUpRight,
  menu: Menu,
  x: X,
  quote: Quote,
  "map-pin": MapPin,
  "external-link": ExternalLink,
  "graduation-cap": GraduationCap,
  "chevron-right": ChevronRight,
};

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V8h4v1.5A5.5 5.5 0 0 1 16 8z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M4 4l16 16" />
      <path d="M20 4L4 20" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

icons.linkedin = LinkedInIcon as unknown as LucideIcon;
icons.github = GitHubIcon as unknown as LucideIcon;
icons.twitter = XIcon as unknown as LucideIcon;
icons.facebook = FacebookIcon as unknown as LucideIcon;

type IconProps = {
  name: string;
  className?: string;
  strokeWidth?: number;
};

export function Icon({ name, className = "h-5 w-5", strokeWidth = 1.75 }: IconProps) {
  const Cmp = icons[name] ?? Leaf;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
