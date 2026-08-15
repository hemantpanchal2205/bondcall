import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  size?: "md" | "sm";
  className?: string;
  onClick?: () => void;
};

export default function Button({
  href = "#",
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 whitespace-nowrap";
  const variants = {
    primary:
      "bg-bond-gradient text-white shadow-glow hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-8px_rgba(139,92,246,0.65)]",
    ghost:
      "bg-glass border border-edge text-ink hover:border-edge-hi hover:bg-glass-hi",
  };
  const sizes = {
    md: "px-[24px] py-3 text-sm",
    sm: "px-[20px] py-2.5 text-[13px]",
  };

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </Link>
  );
}
