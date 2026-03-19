import Link from "next/link";
import FadeIn from "./FadeIn";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  delay?: number;
}

export default function ServiceCard({
  icon,
  title,
  description,
  href,
  delay = 0,
}: ServiceCardProps) {
  return (
    <FadeIn delay={delay}>
      <Link
        href={href}
        className="group block bg-brand-gray-950 border border-brand-gray-800 rounded-lg p-6 md:p-8 h-full transition-all duration-300 hover:border-brand-green/30 hover:bg-brand-gray-900"
      >
        <div className="text-brand-green mb-4 transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
        <h3 className="font-heading text-xl font-bold text-white mb-3">
          {title}
        </h3>
        <p className="text-brand-gray-300 leading-relaxed text-sm">
          {description}
        </p>
        <span className="inline-flex items-center gap-1 text-brand-green text-sm font-semibold mt-4 group-hover:gap-2 transition-all duration-200">
          Learn more
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </Link>
    </FadeIn>
  );
}
