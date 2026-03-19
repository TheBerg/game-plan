import FadeIn from "./FadeIn";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${alignment} mb-12 md:mb-16`}>
      {eyebrow && (
        <FadeIn>
          <span className="inline-block text-brand-green text-sm font-semibold tracking-widest uppercase mb-4">
            {eyebrow}
          </span>
        </FadeIn>
      )}
      <FadeIn delay={0.1}>
        <h2
          className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight ${
            light ? "text-brand-dark" : "text-white"
          }`}
        >
          {title}
        </h2>
      </FadeIn>
      {description && (
        <FadeIn delay={0.2}>
          <p
            className={`mt-4 text-lg md:text-xl leading-relaxed ${
              light ? "text-brand-gray-600" : "text-brand-gray-300"
            }`}
          >
            {description}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
