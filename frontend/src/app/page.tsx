import Button from "@/components/Button";
import PhoneMockup from "@/components/PhoneMockup";
import SectionHead from "@/components/SectionHead";
import FeatureCard from "@/components/FeatureCard";
import BondLine from "@/components/BondLine";
import Faq from "@/components/Faq";
import { features, steps, pricingPlans, testimonials, faqItems } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <header className="relative pt-[180px] pb-[100px] max-lg:pt-[140px] overflow-hidden">
        <div className="wrap grid grid-cols-[1.05fr_0.95fr] max-lg:grid-cols-1 gap-12 items-center">
          <div className="max-lg:text-center">
            <div className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full border border-edge bg-glass text-[12.5px] text-mist mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80] animate-pulse2" />
              Live now · 42,318 people online
            </div>
            <h1 className="font-display text-[clamp(40px,5.2vw,68px)] leading-[1.04] mb-6 -tracking-[0.02em]">
              Meet someone new,
              <br />
              on a{" "}
              <span className="bg-bond-text bg-clip-text text-transparent">
                real call
              </span>{" "}
              —<br />
              not a swipe.
            </h1>
            <p className="text-lg text-mist max-w-[480px] leading-relaxed mb-10 max-lg:mx-auto">
              Bond Call connects you instantly with real people over private,
              HD voice and video — no endless texting, no fake profiles. Just
              a genuine conversation, one tap away.
            </p>
            <div className="flex gap-4 mb-10 max-lg:justify-center max-lg:flex-wrap">
              <Button href="#download">↓ Download App</Button>
              <Button href="#demo" variant="ghost">
                ▶ Watch Demo
              </Button>
            </div>
            <div className="flex items-center gap-3.5 text-[13px] text-mist-dim max-lg:justify-center">
              <div className="flex">
                {[32, 47, 15, 5].map((id, i) => (
                  <img
                    key={id}
                    src={`https://i.pravatar.cc/64?img=${id}`}
                    alt=""
                    className="w-8 h-8 rounded-full border-2 border-void object-cover"
                    style={{ marginLeft: i === 0 ? 0 : -8 }}
                  />
                ))}
              </div>
              <span>
                Joined by <strong className="text-ink">2M+</strong> people
                this year
              </span>
            </div>
          </div>

          <PhoneMockup />
        </div>
      </header>

      {/* TRUSTED */}
      <section className="py-14 border-t border-b border-edge">
        <div className="wrap flex items-center justify-between gap-10 flex-wrap">
          <div className="text-[13px] text-mist-dim whitespace-nowrap">
            TRUSTED BY A GROWING GLOBAL COMMUNITY
          </div>
          <div className="flex gap-14 flex-wrap">
            {[
              ["2.4M+", "Active Users"],
              ["18M+", "Calls Connected"],
              ["4.9★", "App Store Rating"],
              ["190+", "Countries"],
            ].map(([num, label]) => (
              <div key={label}>
                <div className="font-mono text-[28px] font-medium bg-bond-text bg-clip-text text-transparent">
                  {num}
                </div>
                <div className="text-[12.5px] text-mist-dim mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-[120px] max-lg:py-[88px]">
        <div className="wrap">
          <SectionHead
            eyebrow="Features"
            title={
              <>
                Everything a great call needs.
                <br />
                Nothing it doesn&apos;t.
              </>
            }
            desc="Bond Call is built from the ground up for one thing: a fast, clear, private connection between two people."
          />
          <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5">
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      <BondLine />

      {/* HOW IT WORKS */}
      <section className="py-[120px] max-lg:py-[88px]">
        <div className="wrap">
          <SectionHead
            eyebrow="How It Works"
            title="From open app to open conversation."
            desc="Three steps stand between you and your next real conversation."
          />
          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-8 max-md:gap-12">
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
        </div>
      </section>

      {/* WHY CHOOSE - BENTO */}
      <section className="py-[120px] max-lg:py-[88px]">
        <div className="wrap">
          <SectionHead eyebrow="Why Bond Call" title="Built different, on purpose." />
          <div className="grid grid-cols-6 max-md:grid-cols-2 auto-rows-[180px] max-md:auto-rows-auto gap-5">
            <div className="col-span-3 row-span-2 max-md:col-span-2 max-md:min-h-[220px] bg-glass border border-edge rounded-[22px] p-7 flex flex-col justify-end relative overflow-hidden">
              <div className="absolute w-[200px] h-[200px] rounded-full blur-[60px] opacity-35 -top-16 -right-16 bg-bond-gradient" />
              <h4 className="font-display text-lg mb-2">No profiles to perform for</h4>
              <p className="text-[13.5px] text-mist leading-relaxed">
                There&apos;s no bio to write or photo grid to curate. You show
                up as you are and let the conversation speak.
              </p>
            </div>
            <div className="col-span-3 max-md:col-span-2 max-md:min-h-[180px] bg-glass border border-edge rounded-[22px] p-7 flex flex-col justify-end">
              <h4 className="font-display text-lg mb-2">Privacy-first by design</h4>
              <p className="text-[13.5px] text-mist leading-relaxed">Your phone number and identity never leave your device.</p>
            </div>
            <div className="col-span-2 max-md:col-span-2 max-md:min-h-[180px] bg-glass border border-edge rounded-[22px] p-7 flex flex-col justify-end">
              <h4 className="font-display text-lg mb-2">Report & block, instantly</h4>
              <p className="text-[13.5px] text-mist leading-relaxed">One tap ends any call and flags it for review.</p>
            </div>
            <div className="col-span-4 max-md:col-span-2 max-md:min-h-[180px] bg-glass border border-edge rounded-[22px] p-7 flex flex-col justify-end">
              <h4 className="font-display text-lg mb-2">Global, always-on community</h4>
              <p className="text-[13.5px] text-mist leading-relaxed">Someone is online right now in one of 190+ countries.</p>
            </div>
            <div className="col-span-3 max-md:col-span-2 max-md:min-h-[180px] bg-glass border border-edge rounded-[22px] p-7 flex flex-col justify-end">
              <h4 className="font-display text-lg mb-2">No endless texting</h4>
              <p className="text-[13.5px] text-mist leading-relaxed">Skip the small talk — meet the person, not the profile.</p>
            </div>
          </div>
        </div>
      </section>

      <BondLine flip />

      {/* PRICING */}
      <section id="pricing" className="py-[120px] max-lg:py-[88px]">
        <div className="wrap">
          <SectionHead
            eyebrow="Pricing"
            title="Start free. Upgrade when you're ready."
            desc="No hidden fees. Cancel your plan anytime, right from the app."
          />
          <div className="grid grid-cols-3 max-md:grid-cols-1 max-md:max-w-[400px] max-md:mx-auto gap-6 items-start">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-[24px] p-9 relative ${
                  plan.popular
                    ? "bg-gradient-to-br from-violet/[0.14] to-azure/[0.08] border border-violet/40 scale-[1.03]"
                    : "bg-glass border border-edge"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-7 bg-bond-gradient text-[11.5px] font-bold px-3 py-1.5 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <div className="text-[15px] text-mist mb-3">{plan.name}</div>
                <div className="font-display text-[42px] font-semibold mb-1">
                  {plan.price}
                  <span className="text-[15px] text-mist-dim font-normal font-body">
                    /month
                  </span>
                </div>
                <div className="text-[13.5px] text-mist mb-7">{plan.desc}</div>
                <ul className="mb-8">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2.5 text-sm py-2.5 border-b border-edge last:border-none"
                    >
                      <span className="text-green-400">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Button
                  href="#"
                  variant={plan.popular ? "primary" : "ghost"}
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-[120px] max-lg:py-[88px]">
        <div className="wrap">
          <SectionHead eyebrow="Testimonials" title="Real calls. Real people." />
          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-5">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-glass border border-edge rounded-[20px] p-7"
              >
                <div className="text-amber-400 text-[13px] mb-4 tracking-widest">
                  ★★★★★
                </div>
                <p className="text-[14.5px] leading-relaxed text-[#dcdce2] mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-[38px] h-[38px] rounded-full object-cover"
                  />
                  <div>
                    <div className="text-[13.5px] font-semibold">{t.name}</div>
                    <div className="text-xs text-mist-dim">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-[120px] max-lg:py-[88px]">
        <div className="wrap">
          <SectionHead eyebrow="FAQ" title="Good to know." />
          <Faq items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section id="download" className="py-[120px] max-lg:py-[88px]">
        <div className="wrap">
          <div className="rounded-[32px] px-10 py-20 text-center relative overflow-hidden bg-gradient-to-br from-violet/[0.16] to-azure/10 border border-edge-hi">
            <h2 className="font-display text-[clamp(28px,4vw,42px)] mb-4">
              Your next conversation
              <br />
              is one tap away.
            </h2>
            <p className="text-mist mb-9 text-base">
              Download Bond Call and meet someone new today.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button href="#">App Store</Button>
              <Button href="#" variant="ghost">
                Google Play
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
