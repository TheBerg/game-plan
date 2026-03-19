import FadeIn from "./FadeIn";

interface TestimonialCardProps {
  quote: string;
  author: string;
  delay?: number;
}

export default function TestimonialCard({
  quote,
  author,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <FadeIn delay={delay}>
      <div className="bg-brand-gray-950 border border-brand-gray-800 rounded-lg p-6 md:p-8 h-full flex flex-col">
        <svg
          className="w-8 h-8 text-brand-green/40 mb-4 shrink-0"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
        </svg>
        <blockquote className="text-brand-gray-200 leading-relaxed flex-1 text-base md:text-lg">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <cite className="mt-4 pt-4 border-t border-brand-gray-800 text-brand-green font-semibold not-italic text-sm tracking-wide">
          — {author}
        </cite>
      </div>
    </FadeIn>
  );
}
