import FadeIn from "./FadeIn";

interface CredentialBadgeProps {
  icon: React.ReactNode;
  label: string;
  sublabel?: string;
  delay?: number;
}

export default function CredentialBadge({
  icon,
  label,
  sublabel,
  delay = 0,
}: CredentialBadgeProps) {
  return (
    <FadeIn delay={delay}>
      <div className="flex items-center gap-3 px-4 py-3">
        <div className="text-brand-green shrink-0">{icon}</div>
        <div>
          <p className="text-white text-sm font-semibold leading-tight">
            {label}
          </p>
          {sublabel && (
            <p className="text-brand-gray-400 text-xs mt-0.5">{sublabel}</p>
          )}
        </div>
      </div>
    </FadeIn>
  );
}
