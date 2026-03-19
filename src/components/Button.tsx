import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
}

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold tracking-wide uppercase rounded transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]";

  const variants = {
    primary:
      "bg-brand-green text-brand-dark hover:bg-brand-green-hover hover:shadow-[0_8px_30px_rgba(46,204,113,0.3)]",
    secondary:
      "bg-white/10 text-white hover:bg-white/20 hover:shadow-[0_8px_30px_rgba(255,255,255,0.08)] backdrop-blur-sm border border-white/10",
    outline:
      "bg-transparent text-brand-green border-2 border-brand-green hover:bg-brand-green hover:text-brand-dark hover:shadow-[0_8px_30px_rgba(46,204,113,0.2)]",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-sm",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
