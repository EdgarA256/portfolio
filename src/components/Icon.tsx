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
  Mail,
  MessageCircle,
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
  mail: Mail,
  message: MessageCircle,
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

icons.linkedin = LinkedInIcon as unknown as LucideIcon;

type IconProps = {
  name: string;
  className?: string;
  strokeWidth?: number;
};

export function Icon({ name, className = "h-5 w-5", strokeWidth = 1.75 }: IconProps) {
  const Cmp = icons[name] ?? Leaf;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
