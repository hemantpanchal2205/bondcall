"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";

const links = [
  { href: "/features", label: "Features" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/safety", label: "Safety" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-20 max-md:px-12 max-sm:px-5 transition-all duration-300 ${scrolled
        ? "bg-void/70 backdrop-blur-xl border-b border-edge py-3.5"
        : "py-5"
        }`}
    >
      <Link href="/">
        <Logo />
      </Link>

      <div className="hidden lg:flex items-center gap-9 text-sm font-medium text-mist">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="hover:text-ink transition-colors">
            {l.label}
          </Link>
        ))}
      </div>

      <div className="hidden lg:flex items-center gap-4">
        <Button href="#" variant="ghost" size="sm">
          Sign In
        </Button>
        <Button href="#" variant="primary" size="sm">
          Get the App
        </Button>
      </div>

      <button
        className="lg:hidden text-ink text-2xl relative z-[110]"
        aria-label="Toggle menu"
        onClick={() => setOpen(!open)}
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-void/60 backdrop-blur-sm z-[105] transition-opacity duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setOpen(false)}
      />

      {/* Menu Panel */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-screen w-[280px] bg-void/95 backdrop-blur-xl border-l border-edge px-8 py-24 flex flex-col gap-6 z-[108] transform transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="text-ink text-lg font-medium"
          >
            {l.label}
          </Link>
        ))}
        <Button href="#" variant="primary" className="w-full mt-2">
          Get the App
        </Button>
      </div>
    </nav>
  );
}
