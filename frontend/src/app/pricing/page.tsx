import SectionHead from "@/components/SectionHead";
import Button from "@/components/Button";
import Faq from "@/components/Faq";
import { pricingPlans } from "@/lib/content";

export const metadata = { title: "Pricing — Bond Call" };

const pricingFaq = [
  { q: "Can I cancel anytime?", a: "Yes — cancel your subscription anytime from inside the app. You'll keep your plan's benefits until the end of the billing period." },
  { q: "Do you offer refunds?", a: "We offer a 7-day money-back guarantee on all new paid subscriptions. Contact support to request one." },
  { q: "Is there a student discount?", a: "Yes, verified students get 30% off Plus and Pro plans. Verify your student status in Settings." },
];

export default function PricingPage() {
  return (
    <>
      <section className="pt-[160px] pb-[100px] max-lg:pt-[120px]">
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
                <Button href="#" variant={plan.popular ? "primary" : "ghost"} className="w-full">
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-[120px]">
        <div className="wrap">
          <SectionHead eyebrow="Billing FAQ" title="Questions about plans" />
          <Faq items={pricingFaq} />
        </div>
      </section>
    </>
  );
}
