"use client";

import { useState } from "react";

export type FaqItem = { q: string; a: string };

export default function Faq({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-[760px] mx-auto">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q} className="border-b border-edge">
            <button
              className="w-full flex items-center justify-between py-6 px-1 text-left text-base font-medium"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              {item.q}
              <span
                className={`w-[22px] h-[22px] flex-shrink-0 transition-transform duration-300 text-mist ${
                  isOpen ? "rotate-45 text-violet-2" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              className="overflow-hidden transition-all duration-300"
              style={{ maxHeight: isOpen ? "200px" : "0px" }}
            >
              <p className="px-1 pb-6 text-[14.5px] text-mist leading-relaxed max-w-[640px]">
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
