import SectionHead from "@/components/SectionHead";
import FeatureCard from "@/components/FeatureCard";
import Button from "@/components/Button";
import { features } from "@/lib/content";

export const metadata = { title: "Features — Bond Call" };

export default function FeaturesPage() {
  return (
    <section className="pt-[160px] pb-[120px] max-lg:pt-[120px]">
      <div className="wrap">
        <SectionHead
          eyebrow="Features"
          title="Every call, engineered to feel effortless."
          desc="From the first ring to the final second, Bond Call is tuned for clarity, speed, and privacy — on any network, anywhere."
        />
        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5 mb-20">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
        <div className="text-center">
          <Button href="#">↓ Try It Free</Button>
        </div>
      </div>
    </section>
  );
}
