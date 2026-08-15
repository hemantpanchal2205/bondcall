import SectionHead from "@/components/SectionHead";
import Faq from "@/components/Faq";
import Button from "@/components/Button";
import { faqItems } from "@/lib/content";

export const metadata = { title: "FAQ — Bond Call" };

const moreFaq = [
  { q: "What devices does Bond Call support?", a: "Bond Call is available on iOS 15+ and Android 10+. A desktop companion app is coming soon." },
  { q: "Can I use Bond Call outside my country?", a: "Yes — Bond Call works in 190+ countries. Some matching filters may vary by region." },
  { q: "How do I delete my account?", a: "Go to Settings → Account → Delete Account. This permanently removes your profile and data within 30 days." },
];

export default function FaqPage() {
  return (
    <section className="pt-[160px] pb-[120px] max-lg:pt-[120px]">
      <div className="wrap">
        <SectionHead eyebrow="FAQ" title="Good to know." desc="Everything you need to know before your first call." />
        <Faq items={[...faqItems, ...moreFaq]} />
        <div className="text-center mt-16">
          <p className="text-mist text-sm mb-5">Still have questions?</p>
          <Button href="/contact">Contact Support</Button>
        </div>
      </div>
    </section>
  );
}
