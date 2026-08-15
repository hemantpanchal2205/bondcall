export default function Logo() {
  return (
    <div className="flex items-center gap-2.5 font-display font-bold text-[19px]">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="8" cy="14" r="6" fill="url(#lg1)" />
        <circle cx="20" cy="14" r="6" fill="url(#lg2)" fillOpacity="0.85" />
        <defs>
          <linearGradient id="lg1" x1="0" y1="0" x2="28" y2="28">
            <stop stopColor="#8B5CF6" />
            <stop offset="1" stopColor="#3B82F6" />
          </linearGradient>
          <linearGradient id="lg2" x1="0" y1="0" x2="28" y2="28">
            <stop stopColor="#3B82F6" />
            <stop offset="1" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
      </svg>
      Bond Call
    </div>
  );
}
