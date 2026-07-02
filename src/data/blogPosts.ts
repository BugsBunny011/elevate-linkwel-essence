import blogIndiaInfra from "@/assets/blog-india-infra-2026.jpg";
import blogHomeElevatorGuide from "@/assets/blog-home-elevator-guide-2026.jpg";
import blogVillaHomeLift from "@/assets/blog-villa-home-lift-2026.jpg";
import blogLiftManufacturersIndia from "@/assets/blog-lift-manufacturers-india.jpg";


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
  /** Optional SEO meta title (<60 chars). Falls back to `${title} | Linkwel Engineers Blog`. */
  seoTitle?: string;
  /** Optional SEO meta description (<155 chars). Falls back to excerpt. */
  metaDesc?: string;
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
    a: "Most modern home elevators in India can fit in a shaft as compact as 1000 mm x 1000 mm (internal) for a 2–3 person cabin. Pneumatic vacuum lifts can be even smaller, around 800 mm diameter, while a comfortable 4-passenger MRL home lift typically needs about 1500 mm x 1400 mm of shaft space.",
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

const villaHomeLiftFaqs: BlogFaq[] = [
  {
    q: "What is the best home lift for a villa in Delhi?",
    a: "For most villas in Delhi, a compact traction MRL (Machine Room Less) home lift is the best fit. It needs no overhead machine room, handles G+3 and G+4 villas comfortably, runs on a standard 3-phase connection, and offers the smoothest ride for 3–6 passengers. For retrofits into already-constructed bungalows, a pneumatic vacuum lift is often a better choice because it needs almost no civil work.",
  },
  {
    q: "How much does a home elevator cost for a bungalow in India?",
    a: "In 2026, a home elevator for a bungalow in India typically costs between ₹8 lakh and ₹18 lakh for a 3–4 stop traction MRL or hydraulic lift with a quality cabin finish. Pneumatic vacuum lifts for 2–3 stops generally fall between ₹14 lakh and ₹22 lakh, while premium glass and designer cabins for luxury villas in Delhi NCR can go up to ₹30 lakh and above.",
  },
  {
    q: "Can I install a lift in an independent house in Delhi NCR after construction?",
    a: "Yes. Pneumatic vacuum lifts and compact MRL home elevators are specifically designed for retrofit projects in independent houses across Delhi, Noida and Gurgaon. They can be installed in a stairwell void, light well or external shaft with minimal civil work, and most retrofits are commissioned in 2–4 weeks.",
  },
  {
    q: "What is the smallest home lift for a 2 floor house?",
    a: "The smallest practical home lift for a 2 floor house in India is a pneumatic vacuum elevator with an internal diameter of about 800–950 mm, suitable for 1–2 passengers. Compact traction MRL home lifts start at roughly 1000 mm x 1000 mm internal shaft size and can carry 3 passengers comfortably across 2 stops.",
  },
  {
    q: "Is a home elevator suitable for a duplex or 3 floor house?",
    a: "Absolutely. A duplex house or a 3 floor independent house in Delhi NCR is the most common use case for residential lifts. A 3-stop traction MRL or hydraulic home elevator with a 320–400 kg capacity covers a duplex or G+2 villa perfectly, while G+3 and G+4 layouts benefit from a slightly higher-capacity MRL system with ARD and emergency intercom.",
  },
  {
    q: "Are glass elevators safe for homes in Delhi?",
    a: "Yes. A glass home elevator for Delhi villas uses toughened laminated safety glass, the same family of materials used in commercial capsule lifts, along with all standard safety devices: overspeed governor, door sensors, interlocks, ARD and emergency intercom. When manufactured and installed to BIS and NBC 2016 norms, a glass cabin is just as safe as a metal one and adds a strong architectural statement.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "lift-manufacturers-in-india-linkwel-engineers",
    title:
      "Lift Manufacturers in India: Why Linkwel Engineers Is the Trusted Choice for Elevators and EOT Cranes",
    seoTitle: "Lift Manufacturers in India | Linkwel Engineers",
    metaDesc:
      "Looking for trusted lift manufacturers in India? Linkwel Engineers delivers premium elevators, home lifts and EOT cranes across Delhi NCR since 1989.",
    excerpt:
      "A complete look at why Linkwel Engineers is one of the most trusted lift manufacturers in India for home elevators, passenger lifts and EOT cranes across Delhi NCR.",
    date: "2026-07-01",
    readTime: "9 min read",
    author: "Linkwel Engineers Editorial",
    category: "Company",
    image: blogLiftManufacturersIndia,
    imageAlt:
      "Premium elevator lobby in a modern commercial building in Delhi NCR manufactured by Linkwel Engineers",
    keywords:
      "lift manufacturers in India, elevator manufacturers in Delhi NCR, home lift manufacturers, EOT crane manufacturers, industrial crane manufacturers, passenger elevators India, home elevators Delhi, capsule elevators, gantry cranes, jib cranes, electric hoists, Linkwel Engineers",
    authorBio:
      "Written by the Linkwel Engineers editorial team, elevator and crane manufacturers in New Delhi with 35+ years of experience designing, installing and maintaining lifts and cranes across Delhi, Noida, Gurgaon and India.",
    faqs: [
      {
        q: "Who are the most trusted lift manufacturers in India?",
        a: "Linkwel Engineers is among the most trusted lift manufacturers in India, with 35+ years of experience, 500+ completed projects and a full range of passenger, home, hospital, capsule, goods and car elevators engineered for residential, commercial and industrial buildings across Delhi NCR and pan-India.",
      },
      {
        q: "Which company is best for home lifts in Delhi NCR?",
        a: "For villas, bungalows and independent houses in Delhi, Noida and Gurgaon, Linkwel Engineers is a preferred home lift manufacturer. We design compact, energy-efficient home elevators with premium finishes, low pit and low headroom options for 2, 3 and 4 floor homes.",
      },
      {
        q: "Does Linkwel Engineers manufacture EOT and industrial cranes?",
        a: "Yes. Linkwel Engineers is an established EOT crane and industrial crane manufacturer, supplying single girder, double girder, gantry, goliath, jib cranes and electric hoists for factories, warehouses, logistics hubs and manufacturing plants across India.",
      },
      {
        q: "Do you provide installation and Annual Maintenance Contracts (AMC)?",
        a: "Yes. We offer end-to-end services including consultation, design, manufacturing, installation, modernization and Annual Maintenance Contracts (AMC) for elevators and lifts, backed by a responsive after-sales support team across Delhi, Noida and Gurgaon.",
      },
      {
        q: "How many years of experience does Linkwel Engineers have?",
        a: "Linkwel Engineers has been in the lifting industry since 1989, giving us over 35 years of engineering experience across elevators, lifts and industrial cranes for residential, commercial and industrial clients.",
      },
    ],
    content: [
      {
        type: "p",
        text: "When searching for reliable lift manufacturers in India, choosing the right partner can make all the difference. Whether you are an industrial manufacturing plant owner, commercial real estate developer, residential builder, or villa owner, investing in high-quality lifts and cranes ensures safety, operational efficiency and long-term value. From modern home elevators to heavy-duty industrial cranes, the right lifting solution can enhance productivity and improve the overall functionality of your project.",
      },
      {
        type: "p",
        text: "Linkwel Engineers has been a trusted name in the lifting industry since 1989. As one of the leading elevator manufacturers in Delhi NCR, we specialize in designing, manufacturing, installing and maintaining premium elevators and cranes for residential, commercial and industrial applications. With over 35 years of experience, 500+ successfully completed projects and 500+ satisfied clients, we have built a reputation for engineering excellence, quality and customer satisfaction.",
      },
      {
        type: "h2",
        text: "Complete Lift and Crane Solutions Under One Roof",
      },
      {
        type: "p",
        text: "Unlike many manufacturers that focus on a single product line, Linkwel Engineers offers a comprehensive range of lifting and material handling solutions. As experienced lift manufacturers in India and industrial crane manufacturers, we provide products that meet the highest standards of quality, safety and performance.",
      },
      { type: "h3", text: "Our product portfolio includes" },
      {
        type: "ul",
        items: [
          "Passenger Elevators",
          "Home & Villa Elevators",
          "Goods & Freight Elevators",
          "Hospital Elevators",
          "Capsule & Glass Elevators",
          "Car Elevators",
          "EOT Cranes",
          "Single Girder Cranes",
          "Double Girder Cranes",
          "Gantry Cranes",
          "Goliath Cranes",
          "Jib Cranes",
          "Electric Hoists",
        ],
      },
      {
        type: "p",
        text: "Whether you are looking for trusted home lift manufacturers for a luxury villa or dependable EOT crane manufacturers for your industrial facility, Linkwel Engineers delivers customized solutions tailored to your specific requirements.",
      },
      {
        type: "h2",
        text: "Engineered for Safety, Reliability and Performance",
      },
      {
        type: "p",
        text: "Every lift and crane plays a vital role in ensuring smooth daily operations. Poor-quality equipment often results in downtime, expensive repairs and safety concerns. That is why Linkwel Engineers focuses on delivering products that combine advanced engineering with exceptional durability.",
      },
      {
        type: "p",
        text: "As one of the preferred elevator manufacturers in Delhi NCR, our elevators are designed to provide:",
      },
      {
        type: "ul",
        items: [
          "Smooth and quiet operation",
          "Maximum passenger safety",
          "Energy-efficient performance",
          "Low maintenance requirements",
          "Long service life",
        ],
      },
      {
        type: "p",
        text: "Similarly, our industrial cranes are built to handle demanding workloads, making us one of the trusted industrial crane manufacturers for factories, warehouses, logistics hubs and manufacturing plants across India.",
      },
      {
        type: "h2",
        text: "Why Linkwel Engineers Is Better Than Other Lift Manufacturers in India",
      },
      {
        type: "p",
        text: "Choosing a lift or crane manufacturer isn't just about comparing prices, it is about selecting a company that delivers quality, reliability and long-term support.",
      },
      { type: "h3", text: "35+ Years of Industry Expertise" },
      {
        type: "p",
        text: "With decades of experience, we understand the unique challenges faced by residential, commercial and industrial projects. Our engineering knowledge enables us to recommend the most suitable lifting solutions for every application.",
      },
      { type: "h3", text: "Customized Solutions for Every Project" },
      {
        type: "p",
        text: "Every building and facility has unique operational needs. We design customized elevators and cranes that fit your available space, usage requirements and budget.",
      },
      { type: "h3", text: "End-to-End Services" },
      {
        type: "p",
        text: "Unlike many suppliers, Linkwel Engineers provides complete solutions, from consultation and design to manufacturing, installation, modernization, repairs and Annual Maintenance Contracts (AMC).",
      },
      { type: "h3", text: "Advanced Manufacturing Standards" },
      {
        type: "p",
        text: "Our products are manufactured using premium-quality materials and advanced technology, ensuring superior reliability, precision and safety.",
      },
      { type: "h3", text: "Exceptional After-Sales Support" },
      {
        type: "p",
        text: "One of the biggest factors that differentiates us from other lift manufacturers in India is our commitment to customer service. Our experienced support team provides prompt maintenance and technical assistance to keep your equipment operating efficiently.",
      },
      {
        type: "h2",
        text: "Trusted by Residential, Commercial and Industrial Clients",
      },
      {
        type: "html",
        html: 'As experienced <a href="/products/home-elevators" class="text-accent underline hover:no-underline">home lift manufacturers</a>, we provide elegant, compact and energy-efficient elevators that improve convenience and accessibility for villas, bungalows and luxury residences.',
      },
      {
        type: "html",
        html: 'Commercial developers rely on our <a href="/products/passenger-elevators" class="text-accent underline hover:no-underline">passenger elevators</a>, <a href="/products/capsule-elevators" class="text-accent underline hover:no-underline">capsule elevators</a> and <a href="/products/car-elevators" class="text-accent underline hover:no-underline">car elevators</a> to enhance user experience while adding value to modern buildings.',
      },
      {
        type: "html",
        html: 'Industrial businesses trust Linkwel Engineers as reliable <a href="/products/overhead-cranes" class="text-accent underline hover:no-underline">EOT crane manufacturers</a> and industrial crane manufacturers, helping them improve material handling, increase workplace safety and maximize operational efficiency.',
      },
      {
        type: "p",
        text: "Whatever your industry, we deliver lifting solutions engineered for long-lasting performance.",
      },
      {
        type: "h2",
        text: "Invest in Quality That Delivers Long-Term Value",
      },
      {
        type: "p",
        text: "Choosing low-cost equipment may save money initially, but it often leads to higher maintenance expenses, frequent breakdowns and costly downtime.",
      },
      { type: "p", text: "When you choose Linkwel Engineers, you benefit from:" },
      {
        type: "ul",
        items: [
          "Industry-leading engineering expertise",
          "Premium-quality elevators and cranes",
          "Customized lifting solutions",
          "Professional installation",
          "Reliable Annual Maintenance Contracts (AMC)",
          "Responsive after-sales support",
          "Long-term operational efficiency",
        ],
      },
      {
        type: "p",
        text: "These advantages have made us a preferred choice among businesses searching for trusted lift manufacturers in India, reliable home lift manufacturers, experienced elevator manufacturers in Delhi NCR, leading EOT crane manufacturers and dependable industrial crane manufacturers.",
      },
      { type: "h2", text: "Partner with Linkwel Engineers" },
      {
        type: "p",
        text: "Whether you are constructing a residential villa, developing a commercial complex or managing an industrial manufacturing plant, Linkwel Engineers has the expertise and technology to deliver lifting solutions you can trust.",
      },
      {
        type: "p",
        text: "Our commitment to innovation, safety, customization and customer satisfaction sets us apart from other lift manufacturers in India. From elegant home elevators to heavy-duty industrial cranes, we provide products that are engineered for performance, built to last and supported by exceptional service.",
      },
      {
        type: "html",
        html: 'If you are looking for a trusted partner for elevators and cranes, choose Linkwel Engineers — your reliable lift manufacturers in India, home lift manufacturers, elevator manufacturers in Delhi NCR, EOT crane manufacturers and industrial crane manufacturers. <a href="/contact" class="text-accent underline hover:no-underline">Get in touch</a> to elevate your next project with quality, safety and engineering excellence.',
      },
    ],
  },
  {

    slug: "home-lift-for-villa-bungalow-delhi-ncr",
    title:
      "Home Lift for Villa & Bungalow in Delhi NCR: 2026 Buyer's Guide",
    seoTitle: "Home Lift for Villa & Bungalow Delhi NCR | Linkwel",
    metaDesc:
      "Compare home lift types, costs, shaft sizes and luxury options for villas, bungalows, duplexes and independent houses in Delhi NCR for 2026.",
    excerpt:
      "Planning a home lift for your villa, bungalow, duplex or independent house in Delhi NCR? Compare types, costs, shaft sizes and luxury options for 2, 3 and 4 floor homes.",
    date: "2026-05-15",
    readTime: "11 min read",
    author: "Linkwel Engineers Editorial",
    category: "Residential",
    image: blogVillaHomeLift,
    imageAlt:
      "Luxury glass home lift installed beside a marble staircase in a villa in Delhi NCR by Linkwel Engineers",
    keywords:
      "home lift for villa Delhi, home elevator for bungalow India, lift for independent house Delhi NCR, small home lift for 2 floors, home elevator for duplex house, residential lift for 3 floor house India, glass elevator for home Delhi, luxury home lift Delhi NCR",
    authorBio:
      "Written by the Linkwel Engineers editorial team, elevator and crane manufacturers in New Delhi with 35+ years of experience designing home lifts for villas, bungalows and independent houses across Delhi, Noida and Gurgaon.",
    faqs: villaHomeLiftFaqs,
    content: [
      {
        type: "p",
        text: "A home lift for a villa in Delhi is no longer a luxury statement, it is a practical upgrade that adds long-term value to any independent house in Delhi NCR. Whether you are building a new G+3 bungalow in South Delhi, retrofitting a duplex in Greater Kailash, or planning a luxury home lift for a farmhouse in Gurgaon, the right residential elevator can change how a family uses every floor of the house.",
      },
      {
        type: "p",
        text: "This 2026 buyer's guide is written specifically for homeowners and architects evaluating a home elevator for a bungalow in India. We cover the right lift for 2, 3 and 4 floor homes, realistic costs, glass and capsule options, shaft and pit requirements, and what makes a luxury home lift in Delhi NCR worth the investment.",
      },
      {
        type: "h2",
        text: "Why Villa and Bungalow Owners in Delhi NCR Are Installing Home Lifts",
      },
      {
        type: "p",
        text: "Independent houses in Delhi, Noida and Gurgaon are getting taller. With plot sizes under pressure and FAR norms allowing G+3 and G+4 builds in most colonies, families are using their roofs, top floors and basements far more actively. A home elevator for an independent house in Delhi NCR solves three real problems at once.",
      },
      {
        type: "ul",
        items: [
          "Accessibility for parents, grandparents and young children across all floors.",
          "Comfort: groceries, luggage and laundry move effortlessly between basement, kitchen and bedrooms.",
          "Resale value: villas with a home lift command a clear premium in DLF, Vasant Vihar, Sainik Farms, Noida Sectors 44/50/128 and Gurgaon Sectors 14/15/57.",
        ],
      },
      {
        type: "h2",
        text: "Choosing a Home Lift by Number of Floors",
      },
      {
        type: "h3",
        text: "Small Home Lift for 2 Floors (G+1)",
      },
      {
        type: "p",
        text: "For a 2 floor house, the priority is a small home lift that fits a tight shaft, needs minimal civil work and is genuinely affordable. Pneumatic vacuum lifts and compact chain-driven or MRL traction lifts are all viable. A 2-stop cabin sized for 2–3 passengers is usually enough, and the entire installation can often be completed in under 3 weeks.",
      },
      {
        type: "h3",
        text: "Home Elevator for a Duplex House",
      },
      {
        type: "p",
        text: "A home elevator for a duplex house is one of the most common requests we receive. Duplex apartments and duplex villas in Delhi NCR typically need a 2-stop lift with a slightly higher capacity, around 320 kg, so it can comfortably carry parents with a child or two adults with luggage. A traction MRL system gives the smoothest ride here and integrates cleanly with the duplex's main staircase.",
      },
      {
        type: "h3",
        text: "Residential Lift for a 3 Floor House in India",
      },
      {
        type: "p",
        text: "A residential lift for a 3 floor house in India (G+2 or G+3) is best served by a 3 or 4 stop traction MRL or hydraulic home elevator. At this travel height, a pneumatic vacuum lift starts to feel slow, while a properly engineered MRL lift offers fast, quiet, energy-efficient travel and can comfortably carry 4 passengers. This is also the sweet spot where a glass cabin becomes a real design upgrade.",
      },
      {
        type: "h3",
        text: "Lift for a G+3 or G+4 Bungalow",
      },
      {
        type: "p",
        text: "For taller bungalows and villas in Gurgaon and Noida, especially homes with a basement, ground, two upper floors and a terrace lounge, a 5 or 6 stop traction MRL lift with ARD (Automatic Rescue Device), emergency intercom and battery backup is the right specification. Capacity in the 400–500 kg range future-proofs the home for stretcher-style emergencies and elderly residents.",
      },
      {
        type: "h2",
        text: "Glass Elevator for Home in Delhi: Architecture Meets Engineering",
      },
      {
        type: "p",
        text: "A glass elevator for a home in Delhi is one of the strongest design moves a villa owner can make in 2026. A panoramic glass cabin running beside or inside a sweeping staircase turns vertical circulation into a sculptural element, daylight reaches deeper into the core of the house, and the lift itself becomes a focal point rather than a hidden service shaft.",
      },
      {
        type: "ul",
        items: [
          "Toughened laminated safety glass cabin and shaft cladding for full transparency.",
          "Slim stainless steel or brass-finished frames to match interior palettes.",
          "LED cove and spot lighting integrated into the ceiling for a jewellery-box effect at night.",
          "Whisper-quiet gearless PMSM drive so the lift never competes with the architecture.",
        ],
      },
      {
        type: "h2",
        text: "Luxury Home Lift Delhi NCR: What Premium Buyers Actually Pay For",
      },
      {
        type: "p",
        text: "A luxury home lift in Delhi NCR is less about the motor and more about the experience. Premium buyers in DLF Camellias, Magnolias, Aralias, Vasant Vihar, Jor Bagh and the new luxury townships of Gurgaon Sectors 60–62 are specifying lifts as a complete interior product, not as a machine.",
      },
      {
        type: "ul",
        items: [
          "Designer cabins in burl wood, brushed brass, mirror-polished stainless steel, leather or fluted glass.",
          "Automatic landing doors with frameless glass and concealed operators.",
          "Touchless calls, smart phone integration and personalised lighting scenes.",
          "Silent gearless drives, regenerative VVVF controllers and energy-efficient LED lighting.",
          "ARD, fireman's switch, intercom, CCTV and BMS integration as standard.",
        ],
      },
      {
        type: "h2",
        text: "How Much Does a Home Lift Cost for a Villa in 2026?",
      },
      {
        type: "p",
        text: "Realistic 2026 pricing for a fully installed home lift in a Delhi NCR villa or bungalow, including cabin, controller, doors, basic civil interface and commissioning. Final cost depends on number of floors, capacity, cabin finish, door type and brand.",
      },
      {
        type: "ul",
        items: [
          "Small home lift for 2 floors (chain-driven or basic MRL, 2 stops): ₹6 lakh to ₹10 lakh.",
          "Home elevator for duplex house (traction MRL or hydraulic, 2–3 stops, standard finish): ₹9 lakh to ₹15 lakh.",
          "Residential lift for 3 floor house India (MRL, 3–4 stops, premium finish): ₹12 lakh to ₹20 lakh.",
          "Glass elevator for home Delhi (panoramic cabin, 3–5 stops): ₹15 lakh to ₹25 lakh.",
          "Luxury home lift Delhi NCR (designer cabin, automatic doors, ARD, BMS): ₹20 lakh to ₹35 lakh and above.",
        ],
      },
      {
        type: "h2",
        text: "Shaft, Pit and Power Requirements at a Glance",
      },
      {
        type: "p",
        text: "Locking the lift specification before civil drawings are finalised is the single most important step. These are realistic planning numbers for a typical home elevator for a bungalow in India.",
      },
      {
        type: "ul",
        items: [
          "Shaft size: 1000 mm x 1000 mm (compact) to 1500 mm x 1400 mm (4-passenger luxury cabin).",
          "Pit depth: 150 mm for pneumatic, 600–1000 mm for traction and hydraulic.",
          "Overhead clearance: 2400 mm to 3500 mm depending on technology and speed.",
          "Power supply: 3-phase, 415V, 5–7.5 HP for traction; single-phase often enough for pneumatic.",
          "Doors: 700–900 mm clear opening, automatic for premium villas.",
        ],
      },
      {
        type: "h2",
        text: "Retrofitting a Lift Into an Already-Built Independent House",
      },
      {
        type: "p",
        text: "A common question from homeowners across Delhi NCR is whether a lift can be added to an independent house that is already constructed. The answer is yes, and the two best technologies for this are pneumatic vacuum lifts (no pit, no machine room, self-supported tube) and compact MRL home lifts placed in a stairwell void or external shaft. Retrofits typically need 2–4 weeks of site work.",
      },
      {
        type: "h2",
        text: "Safety and Compliance for Home Elevators in India",
      },
      {
        type: "p",
        text: "Even though it sits inside a private home, a residential elevator must follow the same safety framework as a commercial lift: relevant BIS codes, the National Building Code (NBC) 2016, and the applicable State Lift Act for Delhi, Haryana or Uttar Pradesh.",
      },
      {
        type: "ul",
        items: [
          "BIS-aligned manufacturing for cars, controllers, ropes and safety gear.",
          "NBC 2016 compliance for shaft fire rating, ventilation and accessibility.",
          "State Lift Act registration, periodic inspection and licensed installation.",
          "Mandatory devices: ARD, overspeed governor, door sensors, interlocks and emergency intercom.",
        ],
      },
      {
        type: "html",
        html: 'For broader policy and urban-mobility context, public dashboards from <a href="https://www.ibef.org" target="_blank" rel="noopener noreferrer" class="text-accent underline underline-offset-2 hover:opacity-80">IBEF</a> and the <a href="https://mohua.gov.in" target="_blank" rel="noopener noreferrer" class="text-accent underline underline-offset-2 hover:opacity-80">Ministry of Housing & Urban Affairs</a> show how rapidly India\'s residential and accessibility norms are evolving.',
      },
      {
        type: "h2",
        text: "Why a Local Manufacturer Wins for Villa Home Lifts",
      },
      {
        type: "p",
        text: "A home lift is a 15–20 year ownership decision. Local manufacturing partners almost always win on the metrics that matter to a villa owner: faster service response in Delhi, Noida and Gurgaon, locally stocked spares, lower AMC costs, and the ability to customise the cabin to match the home's interior.",
      },
      {
        type: "html",
        html: 'Linkwel Engineers, headquartered in New Delhi, designs and installs the full range of <a href="/products/home-elevators" class="text-accent underline underline-offset-2 hover:opacity-80">home elevators</a>, including compact MRL, hydraulic, pneumatic and panoramic <a href="/products/capsule-elevators" class="text-accent underline underline-offset-2 hover:opacity-80">capsule lifts</a> for villas and bungalows across Delhi NCR. With more than three decades of engineering experience and dedicated <a href="/services" class="text-accent underline underline-offset-2 hover:opacity-80">service teams</a> in <a href="/delhi" class="text-accent underline underline-offset-2 hover:opacity-80">Delhi</a>, <a href="/noida" class="text-accent underline underline-offset-2 hover:opacity-80">Noida</a> and <a href="/gurgaon" class="text-accent underline underline-offset-2 hover:opacity-80">Gurgaon</a>, we partner with homeowners and architects from shaft layout through long-term AMC. Read our broader <a href="/blog/home-elevator-buying-guide-india-2026" class="text-accent underline underline-offset-2 hover:opacity-80">home elevator buying guide India 2026</a>, or <a href="/contact" class="text-accent underline underline-offset-2 hover:opacity-80">get in touch</a> for a villa consultation.',
      },
      {
        type: "quote",
        text: "A home lift is not a machine you bolt onto a villa. Specified early, it becomes part of the architecture, and quietly transforms how the family lives in the house for the next twenty years.",
      },
    ],
  },
  {
    slug: "home-elevator-buying-guide-india-2026",
    title: "Home Elevator Buying Guide India 2026",
    seoTitle: "Home Elevator Buying Guide India 2026 | Linkwel",
    metaDesc:
      "Our 2026 guide to home elevators in India covers types, costs, shaft requirements and safety norms for builders in Delhi, Noida and Gurgaon.",
    excerpt:
      "Planning to install home elevators in your residential project? Our 2026 guide covers types, costs, shaft requirements and safety norms for builders in Delhi, Noida and Gurgaon.",
    date: "2026-05-06",
    readTime: "10 min read",
    author: "Linkwel Engineers Editorial",
    category: "Buying Guide",
    image: blogHomeElevatorGuide,
    imageAlt:
      "Home elevator installed in a luxury villa in Delhi NCR by Linkwel Engineers",
    keywords:
      "home elevator India 2026, home lift Delhi NCR, residential elevator cost India, villa lift manufacturers Delhi, home elevator buying guide India",
    authorBio:
      "Written by the Linkwel Engineers editorial team, elevator and crane manufacturers in New Delhi with 35+ years of experience.",
    faqs: homeElevatorFaqs,
    content: [
      {
        type: "p",
        text: "Home elevators have moved from being a luxury feature to a near-default specification in premium residential projects across Delhi NCR. In 2026, builders and developers in Delhi, Noida and Gurgaon are increasingly adding home lifts to villas, duplexes, builder floors and luxury independent houses, both to meet buyer expectations and to future-proof homes for ageing residents and accessibility.",
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
        text: "Three structural shifts are driving demand for the home lift Delhi NCR market in 2026: taller plot-based villas (G+3 and G+4 are now common in DLF, Gurgaon sectors and Noida), an ageing demographic among end-buyers, and a clear pricing premium that homes with elevators command on resale. For developers, offering a home elevator is no longer a differentiator, its absence is now a deal-breaker in the premium segment.",
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
          "Pros: Self-supported tube, no pit, no machine room, minimal civil work, ideal retrofit option for already constructed homes, panoramic 360° view.",
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
        text: "Realistic 2026 pricing for a fully installed home lift in Delhi NCR, including cabin, controller, doors, basic civil interface and commissioning, typically falls into three tiers. Final cost depends on number of floors, capacity, cabin finish, door type and brand.",
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
        text: "Space and Shaft Requirements, Plan at the Drawing Stage",
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
          "Spare parts availability: Indian-made components are stocked locally, no waiting weeks for an imported PCB or door operator.",
          "AMC economics: Annual maintenance contracts with Indian OEMs are typically 30–50% lower than imported equivalents.",
          "Customisation: Local manufacturers can match shaft sizes, cabin finishes and door configurations to your project drawings.",
          "Accountability: A single point of responsibility, manufacturer, installer and AMC partner all under one roof.",
        ],
      },
      {
        type: "html",
        html: 'Linkwel Engineers, headquartered in New Delhi, designs and installs the full range of <a href="/products/home-elevators" class="text-accent underline underline-offset-2 hover:opacity-80">home elevators</a>, <a href="/products/passenger-elevators" class="text-accent underline underline-offset-2 hover:opacity-80">passenger elevators</a>, <a href="/products/hospital-elevators" class="text-accent underline underline-offset-2 hover:opacity-80">hospital elevators</a>, <a href="/products/capsule-elevators" class="text-accent underline underline-offset-2 hover:opacity-80">capsule elevators</a>, car and <a href="/products/goods-elevators" class="text-accent underline underline-offset-2 hover:opacity-80">goods elevators</a> across Delhi NCR. With more than three decades of engineering experience and dedicated <a href="/services" class="text-accent underline underline-offset-2 hover:opacity-80">service teams</a> in Delhi, Noida and Gurgaon, we work with builders and developers from the drawing-stage shaft layout right through to long-term AMC. For market context, see our companion piece on <a href="/blog/india-vertical-mobility-boom-2026" class="text-accent underline underline-offset-2 hover:opacity-80">India\'s vertical mobility boom in 2026</a>, or <a href="/contact" class="text-accent underline underline-offset-2 hover:opacity-80">get in touch</a> for a project consultation.',
      },
      {
        type: "quote",
        text: "Specify the lift before you finalise the staircase, not after. The home elevator is no longer an accessory; it is a core part of the architecture.",
      },
    ],
  },
  {
    slug: "india-vertical-mobility-boom-2026",
    title:
      "India's Vertical Mobility Boom: Why 2026 Is a Landmark Year for Elevators & Cranes",
    seoTitle: "India's Vertical Mobility Boom 2026 | Linkwel Blog",
    metaDesc:
      "From high-rise launches in Delhi NCR to surging EOT crane demand, India's lift and crane industry enters its strongest growth phase in 2026.",
    excerpt:
      "From record high-rise launches in Delhi NCR to surging demand for EOT cranes in manufacturing, India's lift and crane industry is entering its strongest growth phase yet.",
    date: "2026-04-24",
    readTime: "9 min read",
    author: "Linkwel Engineers Editorial",
    category: "Industry Insights",
    image: blogIndiaInfra,
    imageAlt:
      "Elevator and EOT crane installation in a high-rise building in Delhi NCR by Linkwel Engineers",
    keywords:
      "elevator industry India 2026, lift manufacturers Delhi, EOT crane demand India, elevator installation Noida, industrial crane suppliers Gurgaon, goods lift manufacturers India, high rise construction Noida Gurgaon, vertical mobility India",
    authorBio:
      "This article is written by the editorial team at Linkwel Engineers, elevator and crane manufacturers based in New Delhi with over 35 years of experience in vertical mobility and material handling across India.",
    faqs: indiaPostFaqs,
    content: [
      {
        type: "p",
        text: "India's skyline is rising faster than ever, and so is the demand for safer, smarter and greener vertical mobility. As Delhi, Noida and Gurgaon continue to anchor one of the world's most active real-estate corridors, 2026 is shaping up to be a landmark year for both the elevator and industrial crane sectors.",
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
        type: "html",
        html: 'Developers are also prioritising <a href="/products/passenger-elevators" class="text-accent underline underline-offset-2 hover:opacity-80">passenger elevators</a> that perform reliably during peak load hours, support EV-style regenerative drives, and integrate cleanly with building management systems. This is a strong signal for established <a href="/products/lifts" class="text-accent underline underline-offset-2 hover:opacity-80">lift manufacturers Delhi NCR</a> depends on, especially those who can deliver both quality engineering and long-term <a href="/services" class="text-accent underline underline-offset-2 hover:opacity-80">service support</a> locally.',
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
        text: "One of the most common questions buyers ask in 2026 is whether to specify a Machine Room Less (MRL) elevator or a conventional geared traction lift. Both are reliable when engineered well, the right answer depends on building type, travel, traffic and serviceability.",
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
        text: "For developers comparing options, working early with experienced goods lift manufacturers India trusts can prevent costly shaft redesigns later, particularly when travel height, pit depth or overhead clearances are constrained.",
      },
      {
        type: "h2",
        text: "BIS Standards and NBC 2016 Compliance",
      },
      {
        type: "p",
        text: "Safety is non-negotiable. Elevators in India are governed by Bureau of Indian Standards (BIS) codes, including IS 14665 for electric traction lifts, IS 15259 for hydraulic lifts and the IS 17900 series covering safety rules for the construction and installation of lifts. Alongside BIS, the National Building Code (NBC) 2016 prescribes lobby planning, fire-fighting lifts, evacuation lifts and accessibility requirements.",
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
        type: "html",
        html: 'On the industrial side, a steady wave of new factories, from auto components and white goods to renewable-energy equipment, is driving sustained <a href="/products/eot-cranes" class="text-accent underline underline-offset-2 hover:opacity-80">EOT crane</a> demand India-wide. Material handling has moved from being an afterthought to a core productivity lever on the shop floor, and <a href="/products/cranes" class="text-accent underline underline-offset-2 hover:opacity-80">industrial crane suppliers</a> Gurgaon and Delhi NCR depend on are seeing strong order books from across North India.',
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
        text: "Across both lifts and cranes, three themes stand out in 2026: stricter safety codes, sustainability, and predictive maintenance. Energy-efficient gearless machines, LED cabin lighting, regenerative drives and IoT-based remote monitoring are no longer 'premium' features, they are becoming the new baseline.",
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
        type: "html",
        html: 'With more than three decades of engineering experience, Linkwel Engineers manufactures and installs a complete range of <a href="/products/lifts" class="text-accent underline underline-offset-2 hover:opacity-80">elevators</a> (passenger, home, hospital, capsule, car and goods) along with <a href="/products/cranes" class="text-accent underline underline-offset-2 hover:opacity-80">cranes</a> (EOT, single girder, double girder, goliath, gantry and jib). Our teams across Delhi, Noida and Gurgaon support every project from design and installation to <a href="/services" class="text-accent underline underline-offset-2 hover:opacity-80">modernization and AMC</a>. Planning a build? <a href="/contact" class="text-accent underline underline-offset-2 hover:opacity-80">Talk to our engineers</a> or read our <a href="/blog/home-elevator-buying-guide-india-2026" class="text-accent underline underline-offset-2 hover:opacity-80">home elevator buying guide for 2026</a>.',
      },
    ],
  },
];

export const getPostBySlug = (slug: string) =>
  blogPosts.find((p) => p.slug === slug);
