import blogIndiaInfra from "@/assets/blog-india-infra-2026.jpg";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  readTime: string;
  author: string;
  category: string;
  image: string;
  imageAlt: string;
  keywords: string;
  /** Body as an array of section blocks (rendered as JSX). */
  content: Array<
    | { type: "p"; text: string }
    | { type: "h2"; text: string }
    | { type: "h3"; text: string }
    | { type: "ul"; items: string[] }
    | { type: "quote"; text: string }
  >;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "india-vertical-mobility-boom-2026",
    title:
      "India's Vertical Mobility Boom: Why 2026 Is a Landmark Year for Elevators & Cranes",
    excerpt:
      "From record high-rise launches in Delhi NCR to surging demand for EOT cranes in manufacturing, India's lift and crane industry is entering its strongest growth phase yet.",
    date: "2026-05-04",
    readTime: "6 min read",
    author: "Linkwel Engineers Editorial",
    category: "Industry Insights",
    image: blogIndiaInfra,
    imageAlt:
      "Modern high-rise tower under construction in India with cranes installing elevators",
    keywords:
      "elevator industry India 2026, lift manufacturers Delhi, EOT crane demand India, high rise construction Noida Gurgaon, vertical mobility India, industrial cranes Delhi NCR",
    content: [
      {
        type: "p",
        text: "India's skyline is rising faster than ever — and so is the demand for safer, smarter and greener vertical mobility. As Delhi, Noida and Gurgaon continue to anchor one of the world's most active real-estate corridors, 2026 is shaping up to be a landmark year for both the elevator and industrial crane sectors.",
      },
      {
        type: "h2",
        text: "A Record Year for High-Rise Launches in Delhi NCR",
      },
      {
        type: "p",
        text: "Premium residential towers in Noida, Greater Noida and Gurgaon are increasingly crossing the 40-floor mark, with several mixed-use developments now planned beyond G+60. This shift is fuelling a structural increase in demand for high-speed passenger elevators, MRL (machine-room-less) lifts and intelligent destination-control systems.",
      },
      {
        type: "p",
        text: "Developers are also prioritising elevators that perform reliably during peak load hours, support EV-style regenerative drives, and integrate cleanly with building management systems. This is a strong signal for Indian manufacturers who can deliver both quality engineering and long-term service support locally.",
      },
      {
        type: "h2",
        text: "Industrial Cranes: Powering 'Make in India' Manufacturing",
      },
      {
        type: "p",
        text: "On the industrial side, a steady wave of new factories — from auto components and white goods to renewable-energy equipment — is driving sustained demand for EOT cranes, goliath cranes, jib cranes and electric hoists. Material handling has moved from being an afterthought to a core productivity lever on the shop floor.",
      },
      {
        type: "ul",
        items: [
          "Higher duty-cycle EOT cranes for round-the-clock production lines",
          "Single and double girder cranes engineered for longer spans and heavier loads",
          "Goliath cranes for outdoor yards, precast plants and infrastructure projects",
          "Compact jib cranes and electric hoists for workstation-level handling",
        ],
      },
      {
        type: "h2",
        text: "Safety, Sustainability and Smart Maintenance",
      },
      {
        type: "p",
        text: "Across both lifts and cranes, three themes stand out in 2026: stricter safety codes, sustainability, and predictive maintenance. Energy-efficient gearless machines, LED cabin lighting, regenerative drives and IoT-based remote monitoring are no longer 'premium' features — they are becoming the new baseline.",
      },
      {
        type: "quote",
        text: "The next decade of Indian infrastructure will be defined not just by how high we build, but by how safely and sustainably we move people and materials within it.",
      },
      {
        type: "h2",
        text: "What This Means for Builders, Architects and Plant Owners",
      },
      {
        type: "p",
        text: "Whether you are planning a residential tower in Noida, a hospital in Delhi, a logistics park in Gurgaon or a manufacturing line anywhere in North India, choosing the right vertical mobility and material-handling partner has never mattered more. The right specification at the design stage saves years of operational cost and downtime later.",
      },
      {
        type: "h3",
        text: "How Linkwel Engineers Is Building for This Moment",
      },
      {
        type: "p",
        text: "With more than three decades of engineering experience, Linkwel Engineers manufactures and installs a complete range of passenger, home, hospital, capsule, car and goods elevators along with EOT, single girder, double girder, goliath, gantry and jib cranes. Our teams across Delhi, Noida and Gurgaon support every project from design and installation to modernization and AMC — because sky truly is the limit.",
      },
    ],
  },
];

export const getPostBySlug = (slug: string) =>
  blogPosts.find((p) => p.slug === slug);
