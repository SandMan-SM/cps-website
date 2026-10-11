import {
  MessageCircleHeart,
  Pill,
  BrainCircuit,
  ClipboardCheck,
  HeartPulse,
  ShieldCheck,
  Briefcase,
  House,
  Scale,
  Landmark,
  Users,
  GraduationCap,
  Search,
  HeartHandshake,
  Laptop,
  MapPin,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  MessageCircleHeart,
  Pill,
  BrainCircuit,
  ClipboardCheck,
  HeartPulse,
  ShieldCheck,
  Briefcase,
  House,
  Scale,
  Landmark,
  Users,
  GraduationCap,
  Search,
  HeartHandshake,
  Laptop,
  MapPin,
  Sparkles,
};

export function getServiceIcon(name: string): LucideIcon {
  return icons[name] ?? MessageCircleHeart;
}

export default function ServiceIcon({
  name,
  className = "h-6 w-6",
}: {
  name: string;
  className?: string;
}) {
  const Icon = getServiceIcon(name);
  return <Icon className={className} aria-hidden={true} />;
}
