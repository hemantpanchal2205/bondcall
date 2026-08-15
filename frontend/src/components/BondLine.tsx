export default function BondLine({ flip = false }: { flip?: boolean }) {
  return (
    <div className="h-[60px] flex items-center justify-center opacity-60">
      <svg viewBox="0 0 400 24" className="w-full max-w-[400px] h-6">
        <path
          d={
            flip
              ? "M0 12 Q 50 24, 100 12 T 200 12 T 300 12 T 400 12"
              : "M0 12 Q 50 0, 100 12 T 200 12 T 300 12 T 400 12"
          }
          stroke="url(#bondline)"
          strokeWidth="1.5"
          fill="none"
        />
        <circle cx="0" cy="12" r="4" fill="#8B5CF6" />
        <circle cx="400" cy="12" r="4" fill="#3B82F6" />
        <defs>
          <linearGradient id="bondline">
            <stop stopColor="#8B5CF6" />
            <stop offset="1" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
