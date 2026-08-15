export default function PhoneMockup() {
  return (
    <div className="relative flex justify-center items-center h-[640px] max-lg:h-[560px] max-lg:mt-6">
      <div className="absolute z-[4] bg-surface/75 backdrop-blur-md border border-edge-hi rounded-2xl px-4 py-3 flex items-center gap-2.5 shadow-card animate-float top-[60px] -left-2.5 max-lg:left-2">
        <div className="w-8.5 h-8.5 rounded-[10px] flex items-center justify-center bg-green-400/15 text-base">
          🔒
        </div>
        <div>
          <div className="text-xs font-semibold">End-to-End Encrypted</div>
          <div className="text-[10.5px] text-mist">Every call, always</div>
        </div>
      </div>

      <div className="w-[290px] h-[590px] rounded-[44px] bg-gradient-to-br from-[#17141f] to-[#0a0a10] border border-edge-hi relative z-[3] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.7)] p-3 rotate-[-2deg]">
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[90px] h-[22px] bg-black rounded-full z-[5]" />
        <div className="w-full h-full rounded-[34px] overflow-hidden relative bg-[radial-gradient(120%_100%_at_50%_0%,#1c1830_0%,#0a0912_55%,#060509_100%)]">
          <div className="pt-13 px-5 pb-5 flex flex-col items-center h-full">
            <div className="text-[11px] tracking-wider text-mist uppercase mb-1.5">
              Video Call
            </div>
            <div className="font-mono text-[13px] text-green-400 mb-6">
              04:12
            </div>
            <div className="w-[120px] h-[120px] rounded-full p-[3px] bg-[conic-gradient(from_0deg,#8B5CF6,#3B82F6,#8B5CF6)] mb-4 animate-spin">
              <img
                src="https://i.pravatar.cc/200?img=44"
                alt="Caller"
                className="w-full h-full rounded-full object-cover border-[3px] border-[#0a0912]"
              />
            </div>
            <div className="font-display font-semibold text-lg mb-0.5">
              Maya, 24
            </div>
            <div className="text-xs text-mist mb-7">
              Los Angeles · Connected via Bond Call
            </div>
            <div className="flex items-center gap-[3px] h-8 mb-auto">
              {[0, 0.1, 0.2, 0.3, 0.15, 0.25, 0.05, 0.35].map((d, i) => (
                <span
                  key={i}
                  style={{ animationDelay: `${d}s` }}
                  className="w-[3px] rounded bg-gradient-to-b from-violet-2 to-azure-2 animate-wv"
                />
              ))}
            </div>
            <div className="flex gap-3.5 mt-5 pb-1.5">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-glass-hi border border-edge">
                🎙
              </div>
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-glass-hi border border-edge">
                📷
              </div>
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-red-500 shadow-[0_6px_20px_-4px_rgba(239,68,68,0.6)]">
                ✕
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute z-[4] bg-surface/75 backdrop-blur-md border border-edge-hi rounded-2xl px-4 py-3 flex items-center gap-2.5 shadow-card animate-float [animation-delay:1.5s] bottom-[110px] -right-6 max-lg:right-2">
        <div className="w-8.5 h-8.5 rounded-[10px] flex items-center justify-center bg-violet/20 text-base">
          ⚡
        </div>
        <div>
          <div className="text-xs font-semibold">Matched in 2.1s</div>
          <div className="text-[10.5px] text-mist">Fast, low-latency</div>
        </div>
      </div>
    </div>
  );
}
