import {
  MessageCircleHeart,
  Pill,
  BrainCircuit,
  ClipboardCheck,
  HeartPulse,
  ShieldCheck,
  Briefcase,
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
  return <Icon className={className} aria-hidden />;
}
