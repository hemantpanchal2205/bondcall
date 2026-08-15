export default function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-glass border border-edge rounded-[20px] p-7 transition-all duration-300 hover:border-edge-hi hover:bg-glass-hi hover:-translate-y-1">
      <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br from-violet/20 to-azure/20 border border-edge-hi mb-5 text-xl">
        {icon}
      </div>
      <h4 className="font-display text-base mb-2">{title}</h4>
      <p className="text-[13.5px] text-mist leading-relaxed">{desc}</p>
    </div>
  );
}
