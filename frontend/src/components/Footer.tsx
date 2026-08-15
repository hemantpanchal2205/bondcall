import Link from "next/link";
import Logo from "./Logo";

const columns = [
  {
    title: "Product",
    links: [
      { href: "/features", label: "Features" },
      { href: "/how-it-works", label: "How It Works" },
      { href: "/pricing", label: "Pricing" },
      { href: "/safety", label: "Safety" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "#", label: "About" },
      { href: "#", label: "Careers" },
      { href: "#", label: "Press" },
      { href: "#", label: "Blog" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact" },
      { href: "#", label: "Help Center" },
      { href: "#", label: "Status" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "#", label: "Privacy Policy" },
      { href: "#", label: "Terms of Service" },
      { href: "#", label: "Cookie Policy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative z-[2] pt-20 pb-8 border-t border-edge">
      <div className="wrap">
        <div className="grid grid-cols-5 max-md:grid-cols-2 gap-10 mb-16">
          <div className="col-span-1 max-md:col-span-2">
            <Logo />
            <p className="text-mist text-[13.5px] leading-relaxed my-4 max-w-[260px]">
              A faster, more human way to meet new people — one real
              conversation at a time.
            </p>
            <div className="flex gap-3">
              {["𝕏", "◎", "in", "▶"].map((s, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-edge flex items-center justify-center hover:border-edge-hi hover:bg-glass transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h5 className="text-[12.5px] uppercase tracking-wider text-mist-dim mb-4.5">
                {col.title}
              </h5>
              {col.links.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="block text-sm text-mist hover:text-ink mb-3.5 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center pt-8 border-t border-edge flex-wrap gap-4">
          <p className="text-[12.5px] text-mist-dim">
            © 2026 Bond Call, Inc. All rights reserved.
          </p>
          <p className="text-[12.5px] text-mist-dim">
            Made for real conversations.
          </p>
        </div>
      </div>
    </footer>
  );
}
