export default function SectionHead({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: React.ReactNode;
  desc?: string;
}) {
  return (
    <div className="max-w-[640px] mx-auto mb-16 text-center">
      <div className="text-[13px] font-semibold tracking-widest uppercase text-violet-2 mb-3.5">
        {eyebrow}
      </div>
      <h2 className="font-display text-[clamp(30px,3.6vw,44px)] leading-[1.12] mb-4 -tracking-[0.02em]">
        {title}
      </h2>
      {desc && <p className="text-mist text-base leading-relaxed">{desc}</p>}
    </div>
  );
}
