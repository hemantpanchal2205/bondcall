import SectionHead from "@/components/SectionHead";
import Button from "@/components/Button";
import { steps } from "@/lib/content";

export const metadata = { title: "How It Works — Bond Call" };

export default function HowItWorksPage() {
  return (
    <section className="pt-[160px] pb-[120px] max-lg:pt-[120px]">
      <div className="wrap">
        <SectionHead
          eyebrow="How It Works"
          title="From open app to open conversation."
          desc="Three steps stand between you and your next real conversation."
        />
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-8 max-md:gap-12 mb-24">
          {steps.map((s) => (
            <div key={s.num}>
              <span className="font-mono text-[13px] text-violet-2 mb-4 block">
                {s.num}
              </span>
              <div className="h-[180px] rounded-[20px] bg-surface2 border border-edge mb-6 flex items-center justify-center text-4xl">
                {s.icon}
              </div>
              <h4 className="font-display text-lg mb-2.5">{s.title}</h4>
              <p className="text-sm text-mist leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="rounded-[32px] px-10 py-16 text-center bg-glass border border-edge">
          <h2 className="font-display text-[clamp(24px,3vw,34px)] mb-4">
            No profiles. No pressure. Just a call.
          </h2>
          <p className="text-mist mb-8 max-w-[520px] mx-auto">
            Bond Call was built on the idea that a two-minute conversation
            tells you more than a hundred photos ever could.
          </p>
          <Button href="#">↓ Download App</Button>
        </div>
      </div>
    </section>
  );
}
