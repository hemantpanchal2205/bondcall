import SectionHead from "@/components/SectionHead";
import FeatureCard from "@/components/FeatureCard";
import Button from "@/components/Button";
import { safetyFeatures } from "@/lib/content";

export const metadata = { title: "Safety & Privacy — Bond Call" };

const principles = [
  { num: "01", title: "Nothing is stored", desc: "Voice and video are streamed live and never recorded. When a call ends, it's gone — for everyone, including us." },
  { num: "02", title: "You stay anonymous", desc: "No phone numbers, emails, or social handles are ever shared with the person you're talking to." },
  { num: "03", title: "Control is instant", desc: "Block, report, or leave any call in a single tap — no menus, no waiting, no explanations required." },
  { num: "04", title: "Moderation never sleeps", desc: "Automated systems and a human trust & safety team review reports around the clock." },
];

export default function SafetyPage() {
  return (
    <>
      <section className="pt-[160px] pb-[100px] max-lg:pt-[120px]">
        <div className="wrap">
          <SectionHead
            eyebrow="Safety & Privacy"
            title="Your safety isn't a setting. It's the foundation."
            desc="Every call on Bond Call is encrypted, moderated, and fully in your control."
          />
          <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5">
            {safetyFeatures.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-[120px]">
        <div className="wrap">
          <SectionHead eyebrow="Our Principles" title="How we protect every conversation." />
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-x-10 gap-y-10">
            {principles.map((p) => (
              <div key={p.num} className="flex gap-5">
                <span className="font-mono text-violet-2 text-sm shrink-0 pt-1">{p.num}</span>
                <div>
                  <h4 className="font-display text-lg mb-2">{p.title}</h4>
                  <p className="text-sm text-mist leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-[120px]">
        <div className="wrap">
          <div className="rounded-[32px] px-10 py-16 text-center bg-gradient-to-br from-violet/[0.16] to-azure/10 border border-edge-hi">
            <h2 className="font-display text-[clamp(24px,3vw,34px)] mb-4">
              Have a safety concern?
            </h2>
            <p className="text-mist mb-8 max-w-[480px] mx-auto">
              Our trust & safety team reviews every report. Reach out anytime
              — we take it seriously.
            </p>
            <Button href="/contact">Contact Trust & Safety</Button>
          </div>
        </div>
      </section>
    </>
  );
}
