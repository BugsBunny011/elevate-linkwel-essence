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

const homeElevatorFaqs: BlogFaq[] = [
  {
    q: "What is the minimum space needed for a home elevator in India?",
    a: "Most modern home elevators in India can fit in a shaft as compact as 1000 mm x 1000 mm (internal) for a 2–3 person cabin. Pneumatic vacuum lifts can be even smaller — around 800 mm diameter — while a comfortable 4-passenger MRL home lift typically needs about 1500 mm x 1400 mm of shaft space.",
  },
  {
    q: "How many floors can a home lift cover?",
    a: "A typical residential home elevator in India is engineered for 2 to 6 stops, covering ground + 5 floors comfortably. Traction MRL and hydraulic systems can handle G+5 or more with ease, while pneumatic vacuum lifts are usually best suited up to 3–4 stops.",
  },
  {
    q: "Is a machine room required for a home elevator?",
    a: "No. Modern home lifts are largely Machine Room Less (MRL). Traction MRL and pneumatic vacuum elevators do not need a separate machine room, while hydraulic home lifts only need a small power-pack cabinet that can sit in a utility area within ~10 m of the shaft.",
  },
  {
    q: "What is the maintenance cost of a home lift per year in India?",
    a: "Annual maintenance contracts (AMC) for residential elevators in India typically range from ₹15,000 to ₹45,000 per year, depending on the type of lift, number of stops and level of coverage (comprehensive vs non-comprehensive). Pneumatic and premium imported lifts can cost more due to specialized parts.",
  },
  {
    q: "Can a home elevator be added to an already constructed building?",
    a: "Yes. Pneumatic vacuum lifts and compact MRL home elevators are specifically designed for retrofit projects in existing villas, duplexes and bungalows. They need minimal civil work, can often be installed in a stairwell void or external shaft, and typically take 2–4 weeks to commission.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "home-elevator-buying-guide-india-2026",
    title: "Home Elevator Buying Guide India 2026",
    excerpt:
      "Planning to install home elevators in your residential project? Our 2026 guide covers types, costs, shaft requirements and safety norms for builders in Delhi, Noida and Gurgaon.",
    date: new Date().toISOString().slice(0, 10),
    readTime: "10 min read",
    author: "Linkwel Engineers Editorial",
    category: "Buying Guide",
    image: blogHomeElevatorGuide,
    imageAlt:
      "Home elevator installed in a luxury villa in Delhi NCR by Linkwel Engineers",
    keywords:
      "home elevator India 2026, home lift Delhi NCR, residential elevator cost India, villa lift manufacturers Delhi, home elevator buying guide India",
    authorBio:
      "Written by the Linkwel Engineers editorial team — elevator and crane manufacturers in New Delhi with 35+ years of experience.",
    faqs: homeElevatorFaqs,
    content: [
      {
        type: "p",
        text: "Home elevators have moved from being a luxury feature to a near-default specification in premium residential projects across Delhi NCR. In 2026, builders and developers in Delhi, Noida and Gurgaon are increasingly adding home lifts to villas, duplexes, builder floors and luxury independent houses — both to meet buyer expectations and to future-proof homes for ageing residents and accessibility.",
      },
      {
        type: "p",
        text: "This home elevator buying guide India 2026 is written specifically for builders, architects and developers who need to specify, budget and plan home lifts at the design stage itself. It covers the four main home lift technologies, realistic 2026 pricing, shaft and pit requirements, safety compliance and why a strong local manufacturing partner usually wins over a purely imported brand.",
      },
      {
        type: "h2",
        text: "Why Home Elevators Are Now a Standard Feature in Delhi NCR",
      },
      {
        type: "p",
        text: "Three structural shifts are driving demand for the home lift Delhi NCR market in 2026: taller plot-based villas (G+3 and G+4 are now common in DLF, Gurgaon sectors and Noida), an ageing demographic among end-buyers, and a clear pricing premium that homes with elevators command on resale. For developers, offering a home elevator is no longer a differentiator — its absence is now a deal-breaker in the premium segment.",
      },
      {
        type: "h2",
        text: "Types of Home Elevators Available in India",
      },
      {
        type: "p",
        text: "From a builder's perspective, the four most relevant home elevator technologies in India today are Hydraulic, Pneumatic (Vacuum), Traction MRL and Chain-driven systems. Each has a distinct cost, shaft, serviceability and aesthetic profile.",
      },
      {
        type: "h3",
        text: "1. Hydraulic Home Elevators",
      },
      {
        type: "ul",
        items: [
          "Pros: Very smooth ride, no overhead machine room needed, excellent for low-rise villas (G+3), strong load capacity, quiet operation.",
          "Cons: Requires a small hydraulic power pack room near the shaft, slightly slower than traction lifts, oil-based system needs periodic checks.",
          "Best for: Independent villas and bungalows where ride comfort and reliability matter more than top speed.",
        ],
      },
      {
        type: "h3",
        text: "2. Pneumatic (Vacuum) Home Elevators",
      },
      {
        type: "ul",
        items: [
          "Pros: Self-supported tube — no pit, no machine room, minimal civil work, ideal retrofit option for already constructed homes, panoramic 360° view.",
          "Cons: Limited capacity (typically 1–3 persons), shorter travel (usually up to 3–4 stops), higher equipment cost per stop.",
          "Best for: Retrofits, boutique villas and architects who want a sculptural, glass-tube lift as a design statement.",
        ],
      },
      {
        type: "h3",
        text: "3. Traction MRL (Machine Room Less) Home Elevators",
      },
      {
        type: "ul",
        items: [
          "Pros: Best energy efficiency thanks to gearless PMSM motors, no separate machine room, higher speeds, suitable for G+4 and above, lowest long-term running cost.",
          "Cons: Slightly higher upfront cost than chain-driven systems, servicing needs trained technicians inside the shaft.",
          "Best for: Most modern villas, duplex penthouses and luxury builder floors in Delhi, Noida and Gurgaon.",
        ],
      },
      {
        type: "h3",
        text: "4. Chain-driven Home Elevators",
      },
      {
        type: "ul",
        items: [
          "Pros: Compact, cost-effective, simple mechanics, easy to install in tight shafts.",
          "Cons: Noisier than traction or hydraulic, lower ride comfort, generally limited to small homes and low travel.",
          "Best for: Budget residential elevator cost India projects where the priority is basic vertical access at a low price point.",
        ],
      },
      {
        type: "h2",
        text: "How Much Does a Home Elevator Cost in India in 2026?",
      },
      {
        type: "p",
        text: "Realistic 2026 pricing for a fully installed home lift in Delhi NCR — including cabin, controller, doors, basic civil interface and commissioning — typically falls into three tiers. Final cost depends on number of floors, capacity, cabin finish, door type and brand.",
      },
      {
        type: "ul",
        items: [
          "Budget (chain-driven / basic hydraulic, 2–3 stops): ₹6 lakh to ₹10 lakh.",
          "Mid-range (traction MRL or quality hydraulic, 3–4 stops, standard finish): ₹10 lakh to ₹16 lakh.",
          "Premium (high-end MRL or pneumatic vacuum, 4+ stops, designer cabin, automatic doors, ARD and BMS integration): ₹16 lakh to ₹35 lakh and above.",
        ],
      },
      {
        type: "p",
        text: "For developers planning multiple units across a project, bulk procurement and standardized cabin design typically bring per-unit cost down by 10–18%. Working early with experienced villa lift manufacturers Delhi developers already trust avoids late-stage shaft redesigns that can quietly add lakhs to a single tower.",
      },
      {
        type: "h2",
        text: "Space and Shaft Requirements — Plan at the Drawing Stage",
      },
      {
        type: "p",
        text: "The single most expensive mistake builders make is finalising civil drawings without locking the elevator specification. Pit depth, overhead clearance and shaft size must be coordinated with the OEM at the design stage itself.",
      },
      {
        type: "ul",
        items: [
          "Shaft size: Compact home lifts start at ~1000 mm x 1000 mm internal; comfortable 4-passenger cabins need ~1500 mm x 1400 mm.",
          "Pit depth: 150 mm (pneumatic / pit-less designs) up to 600–1000 mm for traction and hydraulic systems.",
          "Overhead clearance: 2400 mm to 3500 mm depending on technology and speed.",
          "Power supply: Typically 3-phase, 415V, 5–7.5 HP for traction; pneumatic lifts often run on single-phase.",
          "Door & lobby: Plan minimum 900 mm clear opening and a comfortable arrival lobby on each floor.",
        ],
      },
      {
        type: "h2",
        text: "Safety Standards and Compliance in India",
      },
      {
        type: "p",
        text: "Home elevators in India must comply with the same core safety framework that governs commercial lifts: relevant Bureau of Indian Standards (BIS) codes, the National Building Code (NBC) 2016 and the applicable State Lift Act (Delhi, Haryana and Uttar Pradesh each have their own).",
      },
      {
        type: "ul",
        items: [
          "BIS-aligned manufacturing for cars, controllers, ropes, doors and safety gear.",
          "NBC 2016 compliance for shaft fire rating, ventilation and accessibility.",
          "State Lift Act registration, periodic inspection and licensed installation.",
          "Mandatory safety devices: ARD (Automatic Rescue Device), overspeed governor, door sensors, interlocks and emergency intercom.",
        ],
      },
      {
        type: "html",
        html: 'For broader policy and infrastructure context, public dashboards from <a href="https://www.ibef.org" target="_blank" rel="noopener noreferrer" class="text-accent underline underline-offset-2 hover:opacity-80">IBEF</a> and the <a href="https://mohua.gov.in" target="_blank" rel="noopener noreferrer" class="text-accent underline underline-offset-2 hover:opacity-80">Ministry of Housing & Urban Affairs</a> continue to highlight how rapidly India\'s residential construction and urban-mobility norms are evolving.',
      },
      {
        type: "h2",
        text: "Why Choose a Local Manufacturer Over an Imported Brand",
      },
      {
        type: "p",
        text: "Imported brands look attractive on a brochure, but the real cost of a home elevator is felt over the next 15–20 years of ownership. A local manufacturer almost always wins on the metrics that actually matter to a developer and to the eventual homeowner.",
      },
      {
        type: "ul",
        items: [
          "Service support: Local engineers can reach a Delhi, Noida or Gurgaon site within hours, not days.",
          "Spare parts availability: Indian-made components are stocked locally — no waiting weeks for an imported PCB or door operator.",
          "AMC economics: Annual maintenance contracts with Indian OEMs are typically 30–50% lower than imported equivalents.",
          "Customisation: Local manufacturers can match shaft sizes, cabin finishes and door configurations to your project drawings.",
          "Accountability: A single point of responsibility — manufacturer, installer and AMC partner all under one roof.",
        ],
      },
      {
        type: "p",
        text: "Linkwel Engineers, headquartered in New Delhi, designs and installs the full range of home, passenger, hospital, capsule, car and goods elevators across Delhi NCR. With more than three decades of engineering experience and dedicated service teams in Delhi, Noida and Gurgaon, we work with builders and developers from the drawing-stage shaft layout right through to long-term AMC.",
      },
      {
        type: "quote",
        text: "Specify the lift before you finalise the staircase — not after. The home elevator is no longer an accessory; it is a core part of the architecture.",
      },
    ],
  },
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
