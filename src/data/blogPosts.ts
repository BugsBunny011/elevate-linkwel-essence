import blogIndiaInfra from "@/assets/blog-india-infra-2026.jpg";
import blogHomeElevatorGuide from "@/assets/blog-home-elevator-guide-2026.jpg";

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "html"; html: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export interface BlogFaq {
  q: string;
  a: string;
}

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
  content: BlogBlock[];
  faqs?: BlogFaq[];
  authorBio?: string;
}

const indiaPostFaqs: BlogFaq[] = [
  {
    q: "What is the cost of installing a passenger elevator in Delhi in 2026?",
    a: "In 2026, the cost of installing a passenger elevator in Delhi typically ranges from ₹6 lakh for a basic 4-passenger home lift to ₹35 lakh and above for high-speed MRL elevators in commercial high-rises. Final pricing depends on capacity, travel height, number of stops, finishes and whether the project requires custom shafts, ARD (Automatic Rescue Device) and BMS integration.",
  },
  {
    q: "Which EOT crane is best for a manufacturing plant in India?",
    a: "For most Indian manufacturing plants, a double girder EOT crane in the 5–20 ton range offers the best balance of span, hook height and duty cycle. Lighter assembly lines and workshops do well with single girder EOT cranes up to 10 tons, while heavy fabrication, steel and precast yards typically need double girder or goliath cranes engineered for higher CMAA/IS 3177 duty classes.",
  },
  {
    q: "How long does elevator installation take in a high-rise building?",
    a: "A standard passenger elevator in a G+20 to G+40 high-rise generally takes 30 to 60 days for mechanical and electrical installation, plus 7–15 days for testing, commissioning and statutory approvals. Larger towers with multiple lift banks are usually installed in parallel to keep the overall project timeline on track.",
  },
  {
    q: "What is the difference between a goliath crane and a gantry crane?",
    a: "Both run on rails at ground level, but a goliath crane has both legs supported on rails and is built for very heavy outdoor duty in shipyards, precast plants and infrastructure projects. A gantry crane is generally lighter, often semi-goliath (one end on a runway beam), and is used for medium-duty handling in workshops, warehouses and storage yards.",
  },
  {
    q: "Do lifts in India need BIS certification?",
    a: "Yes. Elevators installed in India are expected to comply with the relevant BIS standards (notably IS 14665 for electric traction lifts and IS 17900 series for safety) and with the National Building Code (NBC) 2016. State Lift Acts additionally require registration, periodic inspection and licensed installation by competent agencies.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "india-vertical-mobility-boom-2026",
    title:
      "India's Vertical Mobility Boom: Why 2026 Is a Landmark Year for Elevators & Cranes",
    excerpt:
      "From record high-rise launches in Delhi NCR to surging demand for EOT cranes in manufacturing, India's lift and crane industry is entering its strongest growth phase yet.",
    date: "2026-05-04",
    readTime: "9 min read",
    author: "Linkwel Engineers Editorial",
    category: "Industry Insights",
    image: blogIndiaInfra,
    imageAlt:
      "Elevator and EOT crane installation in a high-rise building in Delhi NCR by Linkwel Engineers",
    keywords:
      "elevator industry India 2026, lift manufacturers Delhi, EOT crane demand India, elevator installation Noida, industrial crane suppliers Gurgaon, goods lift manufacturers India, high rise construction Noida Gurgaon, vertical mobility India",
    authorBio:
      "This article is written by the editorial team at Linkwel Engineers — elevator and crane manufacturers based in New Delhi with over 35 years of experience in vertical mobility and material handling across India.",
    faqs: indiaPostFaqs,
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
        text: "Developers are also prioritising elevators that perform reliably during peak load hours, support EV-style regenerative drives, and integrate cleanly with building management systems. This is a strong signal for established lift manufacturers Delhi NCR depends on, especially those who can deliver both quality engineering and long-term service support locally.",
      },
      {
        type: "h2",
        text: "Market Outlook: A Decade of Double-Digit Growth",
      },
      {
        type: "p",
        text: "India's elevator market is projected to grow at a CAGR of approximately 12% through 2030, driven by rapid urbanization and the PM Gati Shakti infrastructure push. New metro corridors, airport expansions, smart-city projects and large logistics parks are all expanding the addressable market well beyond traditional residential demand.",
      },
      {
        type: "html",
        html: 'According to industry trackers and government dashboards, India is on track to remain one of the fastest-growing vertical-mobility markets in the world. Public sources such as <a href="https://www.ibef.org" target="_blank" rel="noopener noreferrer" class="text-accent underline underline-offset-2 hover:opacity-80">IBEF</a> highlight sustained capex in real estate and manufacturing, while urban policy updates from the <a href="https://mohua.gov.in" target="_blank" rel="noopener noreferrer" class="text-accent underline underline-offset-2 hover:opacity-80">Ministry of Housing & Urban Affairs</a> continue to reshape building norms in tier-1 and tier-2 cities alike.',
      },
      {
        type: "h2",
        text: "MRL vs Geared Elevators: When to Use Which",
      },
      {
        type: "p",
        text: "One of the most common questions buyers ask in 2026 is whether to specify a Machine Room Less (MRL) elevator or a conventional geared traction lift. Both are reliable when engineered well — the right answer depends on building type, travel, traffic and serviceability.",
      },
      {
        type: "h3",
        text: "MRL (Machine Room Less) Elevators",
      },
      {
        type: "ul",
        items: [
          "Pros: No separate machine room, lower civil cost, gearless PMSM motor, energy efficient, smoother ride, ideal for residential and mid-rise commercial buildings.",
          "Cons: Slightly higher equipment cost upfront, servicing requires trained technicians inside the shaft, and very heavy capacities or extreme travels may still favour geared systems.",
          "Best for: G+4 to G+30 residential towers, boutique offices, hotels and hospitals where shaft space is at a premium.",
        ],
      },
      {
        type: "h3",
        text: "Geared Traction Elevators",
      },
      {
        type: "ul",
        items: [
          "Pros: Proven workhorse for heavy-duty applications, easier serviceability with a dedicated machine room, well-suited to high-capacity goods and freight movement.",
          "Cons: Requires overhead machine room, higher energy consumption than gearless MRL, and typically lower top speeds than modern gearless systems.",
          "Best for: Industrial buildings, warehouses, large goods lifts and projects where a machine room is already part of the design.",
        ],
      },
      {
        type: "p",
        text: "For developers comparing options, working early with experienced goods lift manufacturers India trusts can prevent costly shaft redesigns later — particularly when travel height, pit depth or overhead clearances are constrained.",
      },
      {
        type: "h2",
        text: "BIS Standards and NBC 2016 Compliance",
      },
      {
        type: "p",
        text: "Safety is non-negotiable. Elevators in India are governed by Bureau of Indian Standards (BIS) codes — including IS 14665 for electric traction lifts, IS 15259 for hydraulic lifts and the IS 17900 series covering safety rules for the construction and installation of lifts. Alongside BIS, the National Building Code (NBC) 2016 prescribes lobby planning, fire-fighting lifts, evacuation lifts and accessibility requirements.",
      },
      {
        type: "ul",
        items: [
          "BIS-aligned manufacturing for cars, controllers, ropes and safety gear",
          "NBC 2016 compliance for fire lifts, stretcher lifts and evacuation lifts",
          "State Lift Act registration, periodic inspection and licensed installation",
          "Mandatory safety devices: ARD, overspeed governor, door sensors and interlocks",
        ],
      },
      {
        type: "p",
        text: "For builders specifying elevator installation Noida and Greater Noida projects, ensuring that both the OEM and the installer follow BIS + NBC + state Lift Act requirements is the single biggest factor in long-term safety and uptime.",
      },
      {
        type: "h2",
        text: "Industrial Cranes: Powering 'Make in India' Manufacturing",
      },
      {
        type: "p",
        text: "On the industrial side, a steady wave of new factories — from auto components and white goods to renewable-energy equipment — is driving sustained EOT crane demand India-wide. Material handling has moved from being an afterthought to a core productivity lever on the shop floor, and industrial crane suppliers Gurgaon and Delhi NCR depend on are seeing strong order books from across North India.",
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
