export const features = [
  { icon: "🎧", title: "HD Voice Calls", desc: "Studio-grade audio clarity, even on average connections." },
  { icon: "📹", title: "HD Video Calls", desc: "1080p video that stays sharp as your network shifts." },
  { icon: "⚡", title: "Fast Matching", desc: "Our engine connects you with someone new in seconds." },
  { icon: "🔐", title: "Secure & Private", desc: "No numbers, no usernames exchanged. Your identity stays yours." },
  { icon: "🎚️", title: "High Quality Audio", desc: "Adaptive noise suppression tuned for real conversations." },
  { icon: "✨", title: "Crystal Clear Video", desc: "Smart bitrate scaling keeps faces sharp, not pixelated." },
  { icon: "🛡️", title: "End-to-End Encryption", desc: "Every call is encrypted in transit — always, by default." },
  { icon: "📶", title: "Low Latency", desc: "Sub-100ms connections so conversations feel natural." },
];

export const safetyFeatures = [
  { icon: "🔐", title: "End-to-End Encryption", desc: "No one — not even us — can listen in on your calls." },
  { icon: "🚫", title: "Instant Block & Report", desc: "Leave any call in one tap. Reports are reviewed within hours." },
  { icon: "🕵️", title: "No Number Sharing", desc: "Your phone number and contacts never touch the platform." },
  { icon: "🤖", title: "AI-Assisted Moderation", desc: "Automated systems flag abusive behavior in real time." },
];

export const steps = [
  {
    num: "01 — Set your vibe",
    icon: "🎯",
    title: "Choose what you're looking for",
    desc: "Pick voice or video, set your interests and language, and let Bond Call know who you'd like to meet.",
  },
  {
    num: "02 — Get matched",
    icon: "🔗",
    title: "We find someone in seconds",
    desc: "Our matching engine pairs you with a real, online person who fits — no browsing, no waiting.",
  },
  {
    num: "03 — Just talk",
    icon: "💬",
    title: "Start the call instantly",
    desc: "Jump straight into a private, encrypted call. End it anytime, no explanations needed.",
  },
];

export const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    desc: "For casual, everyday connecting.",
    features: ["10 calls / day", "HD voice calls", "Standard matching", "Basic filters"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Plus",
    price: "$9",
    desc: "For people who call often.",
    features: [
      "Unlimited calls",
      "HD voice + video",
      "Priority matching",
      "Advanced filters",
      "No ads",
    ],
    cta: "Go Plus",
    popular: true,
  },
  {
    name: "Pro",
    price: "$19",
    desc: "For the ultimate experience.",
    features: [
      "Everything in Plus",
      "4K video quality",
      "Instant matching",
      "Verified badge",
      "Priority support",
    ],
    cta: "Go Pro",
    popular: false,
  },
];

export const testimonials = [
  {
    name: "Jordan K.",
    location: "Austin, TX",
    avatar: "https://i.pravatar.cc/80?img=12",
    quote:
      "I was tired of swiping and texting for weeks before ever hearing someone's voice. Bond Call skips straight to the part that matters.",
  },
  {
    name: "Priya S.",
    location: "London, UK",
    avatar: "https://i.pravatar.cc/80?img=33",
    quote:
      "The call quality genuinely feels premium. Video is sharp even on hotel wifi, and matching is nearly instant.",
  },
  {
    name: "Marco D.",
    location: "Milan, Italy",
    avatar: "https://i.pravatar.cc/80?img=68",
    quote:
      "I like that I can just leave a call with no drama if it's not clicking. It feels respectful in a way other apps don't.",
  },
];

export const faqItems = [
  {
    q: "Is Bond Call free to use?",
    a: "Yes. The Free plan gives you 10 calls a day with full HD voice quality. You can upgrade to Plus or Pro anytime for unlimited calling.",
  },
  {
    q: "Does the other person see my phone number?",
    a: "Never. Calls run entirely through Bond Call's encrypted infrastructure — your number and contacts stay private on your device.",
  },
  {
    q: "Can I choose who I talk to?",
    a: "You can set filters like language, region, and interests. Our matching engine uses these to pair you with someone suitable.",
  },
  {
    q: "What happens if someone is abusive?",
    a: "You can end and report a call in one tap. Our moderation team and automated systems review reports quickly and take action.",
  },
  {
    q: "Is my video ever recorded?",
    a: "No. Calls are not recorded or stored. Video and audio are streamed live, end-to-end encrypted, and discarded after the call ends.",
  },
];
