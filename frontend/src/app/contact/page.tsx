import SectionHead from "@/components/SectionHead";

export const metadata = { title: "Contact — Bond Call" };

const channels = [
  { icon: "💬", title: "General Support", desc: "For account and app questions.", value: "support@bondcall.app" },
  { icon: "🛡️", title: "Trust & Safety", desc: "Report a safety concern.", value: "safety@bondcall.app" },
  { icon: "🤝", title: "Partnerships", desc: "Press, media, and business inquiries.", value: "partners@bondcall.app" },
];

export default function ContactPage() {
  return (
    <section className="pt-[160px] pb-[120px] max-lg:pt-[120px]">
      <div className="wrap">
        <SectionHead
          eyebrow="Contact"
          title="We'd love to hear from you."
          desc="Reach out for support, feedback, or anything else on your mind."
        />

        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-5 mb-20">
          {channels.map((c) => (
            <div key={c.title} className="bg-glass border border-edge rounded-[20px] p-7">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br from-violet/20 to-azure/20 border border-edge-hi mb-5 text-xl">
                {c.icon}
              </div>
              <h4 className="font-display text-base mb-2">{c.title}</h4>
              <p className="text-[13.5px] text-mist leading-relaxed mb-4">{c.desc}</p>
              <a href={`mailto:${c.value}`} className="text-[13.5px] text-violet-2 font-medium">
                {c.value}
              </a>
            </div>
          ))}
        </div>

        <div className="max-w-[640px] mx-auto bg-glass border border-edge rounded-[24px] p-10 max-sm:p-6">
          <h3 className="font-display text-xl mb-8">Send us a message</h3>
          <form className="flex flex-col gap-5">
            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-5">
              <div>
                <label htmlFor="name" className="block text-[13px] text-mist mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-surface2 border border-edge rounded-xl px-4 py-3 text-sm text-ink placeholder:text-mist-dim focus:outline-none focus:border-violet-2 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[13px] text-mist mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-surface2 border border-edge rounded-xl px-4 py-3 text-sm text-ink placeholder:text-mist-dim focus:outline-none focus:border-violet-2 transition-colors"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-[13px] text-mist mb-2">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What's this about?"
                className="w-full bg-surface2 border border-edge rounded-xl px-4 py-3 text-sm text-ink placeholder:text-mist-dim focus:outline-none focus:border-violet-2 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-[13px] text-mist mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us what's going on..."
                className="w-full bg-surface2 border border-edge rounded-xl px-4 py-3 text-sm text-ink placeholder:text-mist-dim focus:outline-none focus:border-violet-2 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full font-semibold bg-bond-gradient text-white shadow-glow hover:-translate-y-0.5 transition-all duration-200 px-6 py-3.5 text-sm mt-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
