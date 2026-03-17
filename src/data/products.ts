import passengerImg from "@/assets/product-passenger-elevator.jpg";
import homeImg from "@/assets/product-home-elevator.jpg";
import goodsImg from "@/assets/product-goods-elevator.jpg";
import hospitalImg from "@/assets/product-hospital-elevator.jpg";
import capsuleImg from "@/assets/product-capsule-elevator.jpg";
import carImg from "@/assets/product-car-elevator.jpg";
import eotCraneImg from "@/assets/product-eot-crane.jpg";
import singleGirderImg from "@/assets/product-single-girder-crane.jpg";
import doubleGirderImg from "@/assets/product-double-girder-crane.jpg";
import gantryCraneImg from "@/assets/product-gantry-crane.jpg";
import goliathCraneImg from "@/assets/product-goliath-crane.jpg";
import jibCraneImg from "@/assets/product-jib-crane.jpg";
import electricHoistImg from "@/assets/product-electric-hoist.jpg";

export type ProductCategory = "lifts" | "cranes";

export interface FAQ {
  question: string;
  answer: string;
}

export interface Product {
  slug: string;
  title: string;
  shortDesc: string;
  image: string;
  heroDesc: string;
  description: string;
  features: string[];
  specifications: { label: string; value: string }[];
  applications: string[];
  benefits: string[];
  safety: string[];
  industries?: string[];
  faqs: FAQ[];
  metaTitle: string;
  metaDesc: string;
  category: ProductCategory;
}

export const products: Product[] = [
  {
    slug: "passenger-elevators",
    title: "Passenger Elevators",
    category: "lifts",
    shortDesc:
      "Premium passenger lifts engineered for smooth, safe, and silent vertical transportation in commercial and residential buildings across India.",
    image: passengerImg,
    heroDesc:
      "As a leading passenger lift manufacturer in India, Linkwel Engineers delivers world-class elevator solutions that combine cutting-edge technology with elegant design.",
    description:
      "Our passenger elevators are designed to provide the highest standards of comfort, safety, and efficiency. Whether you need lifts for a high-rise office building, shopping mall, or residential complex, Linkwel Engineers offers customisable passenger elevator solutions that meet international quality standards. As one of the best elevator manufacturers in India, we ensure every lift is built with precision engineering and premium materials for decades of reliable service.",
    features: [
      "Gearless traction machine for ultra-smooth rides",
      "Energy-efficient VVVF drive technology",
      "Microprocessor-based intelligent control system",
      "Elegant cabin interiors with customisable finishes",
      "Advanced destination dispatch system",
      "Low noise operation below 50 dB",
      "High-speed travel up to 6 m/s",
      "Regenerative drive for energy savings up to 30%",
    ],
    specifications: [
      { label: "Capacity", value: "6 to 26 passengers (408–1800 kg)" },
      { label: "Speed", value: "1.0 m/s to 6.0 m/s" },
      { label: "Travel Height", value: "Up to 200 metres" },
      { label: "Drive System", value: "Gearless / Geared Traction" },
      { label: "Control", value: "Microprocessor-based with VVVF" },
      { label: "Door Type", value: "Centre / Side Opening, Automatic" },
      { label: "Power Supply", value: "3 Phase, 415V, 50 Hz" },
    ],
    applications: [
      "Commercial office buildings",
      "Shopping malls and retail centres",
      "Residential apartment complexes",
      "Hotels and hospitality venues",
      "Metro stations and airports",
      "Educational institutions",
    ],
    benefits: [
      "Smooth and comfortable ride quality",
      "Low energy consumption reduces operational costs",
      "Minimal maintenance requirements",
      "Quick installation with modular components",
      "Customisable aesthetics to match building interiors",
      "Long service life with premium components",
    ],
    safety: [
      "Automatic Rescue Device (ARD) for power failures",
      "Over-speed governor with safety gear",
      "Door interlock and light curtain sensors",
      "Emergency communication system",
      "Fire-rated landing doors",
      "Anti-nuisance call feature",
      "Seismic detection and response system",
    ],
    faqs: [
      { question: "Who are the best passenger lift manufacturers near me in Delhi?", answer: "Linkwel Engineers is a leading passenger lift manufacturer based in Delhi with over 35 years of experience. We serve clients across Delhi, Noida, Gurgaon, and all of India with premium passenger elevator solutions." },
      { question: "How much does a passenger elevator cost in India?", answer: "The cost of a passenger elevator depends on capacity, speed, travel height, and cabin finishes. Linkwel Engineers provides customised quotes based on your requirements. Contact us for a free consultation and competitive pricing." },
      { question: "What is the maintenance schedule for passenger lifts?", answer: "We recommend quarterly preventive maintenance for passenger elevators. Linkwel Engineers offers comprehensive Annual Maintenance Contracts (AMCs) to ensure your lift runs safely and efficiently year-round." },
      { question: "Which elevator manufacturers in India offer the best quality?", answer: "Linkwel Engineers is among the most trusted elevator manufacturers in India, known for premium quality, safety compliance, and reliable after-sales service across Delhi NCR and pan-India." },
    ],
    metaTitle: "Passenger Elevators | Lift Manufacturers in Delhi – Linkwel",
    metaDesc:
      "Linkwel Engineers - leading passenger lift manufacturers in Delhi & India. Premium passenger elevators for commercial & residential buildings. Get a free quote.",
  },
  {
    slug: "home-elevators",
    title: "Home Elevators",
    category: "lifts",
    shortDesc:
      "Elegant and compact home lifts designed for modern Indian residences, villas, and bungalows, blending luxury with convenience.",
    image: homeImg,
    heroDesc:
      "Transform your home with a premium home elevator from Linkwel Engineers, one of the most trusted home lift manufacturers in India.",
    description:
      "Our home elevators are specifically designed for private residences, offering a perfect blend of luxury, convenience, and space optimisation. Whether it's a villa, bungalow, or duplex apartment, our home lifts add value and accessibility to your living space. As a top home lift manufacturer, we offer compact designs that require minimal pit depth and headroom, making them ideal for both new constructions and existing homes.",
    features: [
      "Compact design requiring minimal shaft space",
      "Whisper-quiet operation for home environments",
      "Battery backup for uninterrupted operation",
      "Premium cabin finishes in wood, glass, and steel options",
      "Machine-room-less (MRL) technology",
      "Remote monitoring and diagnostics",
      "Automatic landing and door operations",
      "Child-safe and elderly-friendly controls",
    ],
    specifications: [
      { label: "Capacity", value: "2 to 6 passengers (250–480 kg)" },
      { label: "Speed", value: "0.3 m/s to 1.0 m/s" },
      { label: "Travel Height", value: "Up to 15 metres (5 stops)" },
      { label: "Drive System", value: "Hydraulic / MRL Traction" },
      { label: "Pit Depth", value: "As low as 50 mm" },
      { label: "Headroom", value: "Minimum 2500 mm" },
      { label: "Power Supply", value: "Single Phase, 220V, 50 Hz" },
    ],
    applications: [
      "Independent houses and villas",
      "Duplex and triplex apartments",
      "Bungalows and farmhouses",
      "Senior living residences",
      "Penthouse apartments",
    ],
    benefits: [
      "Adds significant property value",
      "Enables aging-in-place for elderly family members",
      "Minimal structural modifications required",
      "Low energy consumption, runs on single-phase power",
      "Elegant designs complement home interiors",
      "Quick installation within 3–5 days",
    ],
    safety: [
      "Emergency lowering in case of power failure",
      "Manual release for cabin evacuation",
      "Non-slip cabin flooring",
      "Soft-start and soft-stop technology",
      "Overload protection sensor",
      "Phone/intercom in cabin",
    ],
    faqs: [
      { question: "Can a home elevator be installed in an existing house?", answer: "Yes, Linkwel Engineers specialises in retrofitting home elevators into existing residences. Our compact designs require minimal pit depth (as low as 50 mm) and headroom, making them ideal for older homes and villas." },
      { question: "How much space is needed for a home lift?", answer: "A home elevator typically requires a shaft area as small as 4×4 feet. Our engineers conduct a free site survey to recommend the best configuration for your space." },
      { question: "Are home elevators safe for elderly and children?", answer: "Absolutely. Our home lifts feature child-safe controls, non-slip flooring, emergency lowering, and overload protection, making them perfectly safe for all family members." },
    ],
    metaTitle: "Home Elevators | Home Lift Manufacturers in India – Linkwel",
    metaDesc:
      "Premium home elevators by Linkwel Engineers, India's trusted home lift manufacturer. Compact, elegant lifts for villas & residences. Get a quote now.",
  },
  {
    slug: "goods-elevators",
    title: "Freight / Goods Elevators",
    category: "lifts",
    shortDesc:
      "Heavy-duty goods lifts built for industrial and commercial applications. Reliable freight elevator solutions from a top lift manufacturer in India.",
    image: goodsImg,
    heroDesc:
      "Linkwel Engineers manufactures robust freight and goods elevators designed for heavy loads, harsh environments, and non-stop industrial operations.",
    description:
      "Our freight and goods elevators are engineered to handle heavy loads efficiently and safely. Designed for warehouses, factories, logistics centres, and commercial establishments, these lifts are built with reinforced structures, heavy-duty components, and advanced safety systems. As a leading goods lift manufacturer in India, we provide customised solutions for every industrial requirement.",
    features: [
      "Heavy-duty reinforced cabin and structure",
      "High load capacity up to 10,000 kg",
      "Wide door openings for easy loading",
      "Anti-vibration and shock-resistant design",
      "Industrial-grade components for 24/7 operation",
      "Manual and automatic door options",
      "Corrosion-resistant cabin materials",
      "Variable speed drive for smooth cargo handling",
    ],
    specifications: [
      { label: "Capacity", value: "500 kg to 10,000 kg" },
      { label: "Speed", value: "0.25 m/s to 1.5 m/s" },
      { label: "Travel Height", value: "Up to 30 metres" },
      { label: "Drive System", value: "Geared Traction / Hydraulic" },
      { label: "Door Type", value: "Manual / Power-operated, Centre / Side" },
      { label: "Cabin Size", value: "Customisable as per load requirements" },
      { label: "Power Supply", value: "3 Phase, 415V, 50 Hz" },
    ],
    applications: [
      "Warehouses and distribution centres",
      "Manufacturing plants and factories",
      "Retail stores and supermarkets",
      "Logistics and shipping hubs",
      "Construction sites",
      "Cold storage facilities",
    ],
    benefits: [
      "Maximises operational efficiency",
      "Reduces manual labour and handling time",
      "Withstands heavy and continuous use",
      "Customisable to specific load and size requirements",
      "Low maintenance with industrial-grade components",
      "Compliance with IS standards",
    ],
    safety: [
      "Overload detection and alarm",
      "Safety gear with over-speed governor",
      "Emergency stop buttons on all floors",
      "Door interlocks on all landings",
      "Slack rope / chain detection",
      "Phase reversal and single-phasing protection",
    ],
    faqs: [
      { question: "What is the maximum load capacity of goods elevators?", answer: "Linkwel Engineers manufactures goods elevators with capacities ranging from 500 kg to 10,000 kg, fully customisable to your warehouse or factory requirements." },
      { question: "Are freight lifts suitable for 24/7 industrial use?", answer: "Yes, our goods elevators are built with industrial-grade components designed for continuous 24/7 operation in demanding factory and warehouse environments." },
      { question: "Where can I find goods lift manufacturers near me in Delhi?", answer: "Linkwel Engineers is based in Okhla, New Delhi, and serves clients across Delhi, Noida, Gurgaon, and pan-India. Contact us for a free site survey and quote." },
    ],
    metaTitle: "Goods Elevators | Freight Lift Manufacturers India – Linkwel",
    metaDesc:
      "Industrial goods elevators & freight lifts by Linkwel Engineers. Heavy-duty lift manufacturer in India for warehouses & factories. Contact us today.",
  },
  {
    slug: "hospital-elevators",
    title: "Hospital Elevators",
    category: "lifts",
    shortDesc:
      "Spacious, hygienic, and reliable hospital lifts engineered for smooth stretcher and bed transportation in healthcare facilities.",
    image: hospitalImg,
    heroDesc:
      "Linkwel Engineers delivers specialised hospital elevators designed for the critical demands of healthcare environments across India.",
    description:
      "Our hospital elevators are purpose-built for healthcare facilities, ensuring smooth, vibration-free transportation of patients on stretchers and beds. With extra-wide cabins, hygienic interiors, and priority call systems, these lifts meet the stringent requirements of hospitals, clinics, and medical centres. As a trusted elevator company in India, we understand that reliability in healthcare settings is non-negotiable.",
    features: [
      "Extra-wide and deep cabin for stretcher access",
      "Anti-bacterial stainless steel interiors",
      "Smooth, vibration-free ride for patient comfort",
      "Priority and emergency call functions",
      "Battery backup for uninterrupted service",
      "Hands-free operation options",
      "High-speed door operation for quick loading",
      "Ventilation and air purification system",
    ],
    specifications: [
      { label: "Capacity", value: "1350 kg to 2500 kg (Bed type)" },
      { label: "Speed", value: "1.0 m/s to 2.5 m/s" },
      { label: "Cabin Dimensions", value: "1500 × 2700 mm (W × D)" },
      { label: "Door Width", value: "1200 mm to 1400 mm" },
      { label: "Drive System", value: "Gearless Traction with VVVF" },
      { label: "Control", value: "Duplex / Group microprocessor" },
      { label: "Power Supply", value: "3 Phase, 415V, 50 Hz" },
    ],
    applications: [
      "Multi-speciality hospitals",
      "Nursing homes and clinics",
      "Diagnostic centres",
      "Rehabilitation facilities",
      "Pharmaceutical plants",
      "Research laboratories",
    ],
    benefits: [
      "Ensures safe and comfortable patient transportation",
      "Hygienic interiors reduce infection risk",
      "Priority operation during emergencies",
      "Compliant with hospital building codes",
      "Low noise operation for patient comfort",
      "24/7 reliability with minimal downtime",
    ],
    safety: [
      "Automatic Rescue Device (ARD)",
      "Fire-rated doors and cabin",
      "Emergency communication intercom",
      "Over-speed governor with safety gear",
      "Infrared door sensors to prevent trapping",
      "Battery backup for power failure evacuation",
      "Earthquake detection system",
    ],
    faqs: [
      { question: "What makes hospital elevators different from regular lifts?", answer: "Hospital elevators feature extra-wide cabins for stretcher access, anti-bacterial interiors, vibration-free rides, and priority call functions specifically designed for critical healthcare environments." },
      { question: "Do hospital lifts have battery backup?", answer: "Yes, all our hospital elevators come with battery backup and Automatic Rescue Device (ARD) to ensure uninterrupted patient transportation during power failures." },
      { question: "Which elevator manufacturers in India specialise in hospital lifts?", answer: "Linkwel Engineers is a trusted manufacturer of hospital elevators in India, serving healthcare facilities across Delhi, Noida, Gurgaon, and nationwide with specialised medical lift solutions." },
    ],
    metaTitle: "Hospital Elevators | Medical Lift Manufacturers – Linkwel",
    metaDesc:
      "Specialised hospital elevators by Linkwel Engineers. Hygienic, spacious medical lifts for hospitals & healthcare in India. Request a quote.",
  },
  {
    slug: "capsule-elevators",
    title: "Capsule / Glass Elevators",
    category: "lifts",
    shortDesc:
      "Stunning panoramic capsule lifts with full glass cabins, the perfect architectural statement for malls, hotels, and premium buildings.",
    image: capsuleImg,
    heroDesc:
      "Make a bold architectural statement with Linkwel Engineers' panoramic capsule elevators, designed for visual impact and premium experiences.",
    description:
      "Our capsule and glass elevators are designed to be architectural centrepieces, offering breathtaking panoramic views while providing smooth vertical transportation. Ideal for shopping malls, luxury hotels, corporate headquarters, and landmark buildings, these elevators combine engineering excellence with stunning aesthetics. As a leading capsule lift manufacturer in India, Linkwel Engineers creates custom designs that transform ordinary spaces into extraordinary experiences.",
    features: [
      "Full panoramic glass cabin with 270° views",
      "Customisable cabin shapes: round, semi-circular, square",
      "LED ambient lighting with colour options",
      "Architectural-grade glass and steel construction",
      "Weather-resistant design for outdoor installation",
      "Silent gearless traction system",
      "Smart destination control",
      "Anti-reflective and UV-protective glass",
    ],
    specifications: [
      { label: "Capacity", value: "6 to 20 passengers (480–1500 kg)" },
      { label: "Speed", value: "1.0 m/s to 4.0 m/s" },
      { label: "Travel Height", value: "Up to 100 metres" },
      { label: "Glass Type", value: "Laminated safety glass, UV-coated" },
      { label: "Cabin Shape", value: "Round / Semi-circular / Custom" },
      { label: "Drive System", value: "Gearless Traction" },
      { label: "Installation", value: "Indoor and outdoor compatible" },
    ],
    applications: [
      "Shopping malls and retail complexes",
      "Luxury hotels and resorts",
      "Corporate headquarters",
      "Convention centres and exhibition halls",
      "Airports and metro stations",
      "Landmark and tourist buildings",
    ],
    benefits: [
      "Creates a striking architectural focal point",
      "Enhances visitor experience with panoramic views",
      "Increases property prestige and value",
      "Customisable to match any architectural style",
      "Energy-efficient with regenerative drives",
      "Weather-resistant for outdoor applications",
    ],
    safety: [
      "Laminated safety glass, shatter-proof",
      "Automatic Rescue Device (ARD)",
      "Over-speed governor and safety gear",
      "Emergency lighting and communication",
      "Wind load resistance for outdoor models",
      "Fire-rated landing doors",
      "Seismic sensors",
    ],
    faqs: [
      { question: "Can capsule elevators be installed outdoors?", answer: "Yes, our capsule elevators feature weather-resistant and wind-load-rated designs, making them suitable for both indoor and outdoor installations in malls, hotels, and commercial buildings." },
      { question: "What glass is used in panoramic lifts?", answer: "We use laminated safety glass with UV-coating and anti-reflective properties, ensuring safety, clarity, and protection against sun exposure." },
      { question: "Where can I find glass lift manufacturers near me?", answer: "Linkwel Engineers manufactures premium capsule and glass elevators from our facility in Delhi, serving clients across Delhi NCR, Noida, Gurgaon, and all of India." },
    ],
    metaTitle: "Capsule Elevators | Glass Lift Manufacturers – Linkwel",
    metaDesc:
      "Premium capsule & glass elevators by Linkwel Engineers. Panoramic lifts for malls, hotels & buildings in India. Get a custom quote.",
  },
  {
    slug: "car-elevators",
    title: "Car Elevators",
    category: "lifts",
    shortDesc:
      "Robust automobile lifts for multi-level parking, showrooms, and residential complexes, engineered by a top lift manufacturer in Delhi.",
    image: carImg,
    heroDesc:
      "Linkwel Engineers designs and installs powerful car elevators that optimise parking space and provide seamless vehicle transportation.",
    description:
      "Our car elevators provide an efficient solution for vertical vehicle transportation in multi-level parking structures, automobile showrooms, and premium residential complexes. Engineered to handle heavy vehicle loads with precision, these lifts maximise parking capacity while minimising the building footprint. As a trusted lift manufacturer near you, Linkwel Engineers delivers custom car elevator solutions built for Indian conditions.",
    features: [
      "Heavy-duty platform for vehicles up to 5000 kg",
      "Wide platform with guide rails for safe loading",
      "Pit-mounted hydraulic or traction systems",
      "Turntable option for tight spaces",
      "Industrial-grade safety mechanisms",
      "Weather-proof design for open structures",
      "Traffic management integration",
      "Low-profile platform for minimal ramp requirements",
    ],
    specifications: [
      { label: "Capacity", value: "2000 kg to 5000 kg" },
      { label: "Platform Size", value: "2500 × 5500 mm (customisable)" },
      { label: "Speed", value: "0.15 m/s to 0.5 m/s" },
      { label: "Drive System", value: "Hydraulic / Traction" },
      { label: "Travel Height", value: "Up to 25 metres" },
      { label: "Door Type", value: "Automatic bi-parting / Rolling shutter" },
      { label: "Power Supply", value: "3 Phase, 415V, 50 Hz" },
    ],
    applications: [
      "Multi-level automated parking systems",
      "Automobile showrooms and service centres",
      "Residential basements and podiums",
      "Commercial parking complexes",
      "Car museums and exhibition spaces",
      "Underground parking structures",
    ],
    benefits: [
      "Maximises parking capacity in limited space",
      "Eliminates the need for long ramps",
      "Safe and scratch-free vehicle handling",
      "Reduces construction costs for parking",
      "Automated operation reduces manpower",
      "Customisable platform for SUVs and sedans",
    ],
    safety: [
      "Vehicle detection sensors on platform",
      "Overload protection system",
      "Emergency manual lowering",
      "Toe guards and safety barriers",
      "Hydraulic check valves to prevent free fall",
      "Warning lights and alarms during operation",
    ],
    faqs: [
      { question: "What is the capacity of car elevators?", answer: "Our car elevators support vehicles weighing up to 5000 kg with customisable platform sizes to accommodate sedans, SUVs, and larger vehicles." },
      { question: "Can car lifts be installed in existing buildings?", answer: "Yes, Linkwel Engineers specialises in retrofitting car elevators into existing parking structures and residential basements with minimal structural modifications." },
      { question: "Who are the best car lift manufacturers near me in Delhi?", answer: "Linkwel Engineers, based in Okhla, New Delhi, is a trusted car elevator manufacturer serving Delhi, Noida, Gurgaon, and across India." },
    ],
    metaTitle: "Car Elevators | Vehicle Lift Manufacturers Delhi – Linkwel",
    metaDesc:
      "Heavy-duty car elevators by Linkwel Engineers. Automobile lifts for parking & showrooms in India. Request a free quote today.",
  },
  // ===== CRANES =====
  {
    slug: "overhead-cranes",
    title: "Overhead Cranes (EOT Cranes)",
    category: "cranes",
    shortDesc:
      "Heavy-duty Electric Overhead Travelling cranes for factories, workshops, and warehouses. Trusted EOT crane manufacturers in India.",
    image: eotCraneImg,
    heroDesc:
      "Linkwel Engineers manufactures robust EOT cranes engineered for precision material handling in industrial environments across India.",
    description:
      "Our Electric Overhead Travelling (EOT) cranes are designed for efficient and safe material handling in factories, workshops, steel plants, and warehouses. Built with high-grade structural steel and precision-engineered components, our EOT cranes deliver reliable performance under demanding industrial conditions. As one of the leading EOT crane manufacturers in India, Linkwel Engineers provides single and double girder overhead cranes customised to your specific lifting requirements. Serving Delhi, Noida, Gurgaon and across India.",
    features: [
      "Single and double girder configurations",
      "High-grade structural steel construction",
      "Precision-machined wheels and gears",
      "Variable frequency drive (VFD) for smooth operation",
      "Long travel, cross travel, and hoist motions",
      "Anti-sway and load-limiting technology",
      "Low headroom designs for space optimisation",
      "Remote and pendant control options",
    ],
    specifications: [
      { label: "Capacity", value: "1 ton to 100 tons" },
      { label: "Span", value: "6 metres to 30 metres" },
      { label: "Lift Height", value: "Up to 20 metres" },
      { label: "Hoist Speed", value: "1 m/min to 12 m/min" },
      { label: "Travel Speed", value: "Up to 40 m/min" },
      { label: "Girder Type", value: "Single / Double Girder" },
      { label: "Power Supply", value: "3 Phase, 415V, 50 Hz" },
    ],
    applications: [
      "Manufacturing plants and factories",
      "Steel and metal processing units",
      "Warehouses and storage yards",
      "Power plants and substations",
      "Automobile assembly lines",
      "Heavy engineering workshops",
    ],
    industries: [
      "Steel plants",
      "Manufacturing & engineering",
      "Power plants",
      "Automobile industry",
      "Warehousing & logistics",
    ],
    benefits: [
      "High lifting capacity for heavy industrial loads",
      "Smooth and precise material handling",
      "Reduces manual labour and improves productivity",
      "Customisable span and capacity for any facility",
      "Long service life with minimal maintenance",
      "Compliant with IS and international standards",
    ],
    safety: [
      "Overload protection and limit switches",
      "Emergency stop on all controls",
      "Anti-collision systems for multi-crane setups",
      "Audible and visual warning alarms",
      "Fail-safe braking on all motions",
      "Regular load testing and certification",
    ],
    faqs: [
      { question: "What is an EOT crane and where is it used?", answer: "An EOT (Electric Overhead Travelling) crane is an overhead crane that runs on rails along the length of a factory. It's used in steel plants, manufacturing units, warehouses, and power plants for heavy material handling." },
      { question: "Who are the best EOT crane manufacturers in India?", answer: "Linkwel Engineers is a trusted EOT crane manufacturer in India with 35+ years of experience, serving industries across Delhi, Noida, Gurgaon, and nationwide." },
      { question: "What capacity EOT cranes does Linkwel manufacture?", answer: "We manufacture EOT cranes ranging from 1 ton to 100 tons, with customisable spans up to 30 metres to suit your factory or warehouse layout." },
      { question: "Where can I find crane manufacturers near me in Delhi?", answer: "Linkwel Engineers is based in Okhla, New Delhi, and is one of the leading crane manufacturers in Delhi NCR, serving clients in Delhi, Noida, Gurgaon, and across India." },
    ],
    metaTitle: "EOT Cranes | Overhead Crane Manufacturers India – Linkwel",
    metaDesc:
      "Heavy-duty EOT cranes by Linkwel Engineers, leading crane manufacturers in India. Overhead cranes for factories & warehouses. Get a quote.",
  },
  {
    slug: "single-girder-cranes",
    title: "Single Girder Cranes",
    category: "cranes",
    shortDesc:
      "Cost-effective single girder overhead cranes for light to medium-duty material handling in workshops and factories across India.",
    image: singleGirderImg,
    heroDesc:
      "Linkwel Engineers delivers efficient single girder cranes optimised for cost-effective lifting in factories, workshops, and production lines.",
    description:
      "Our single girder cranes are the ideal solution for light to medium-duty material handling needs. Designed with a single bridge beam, these cranes offer excellent performance at a lower cost compared to double girder variants. Perfect for workshops, production floors, and warehouses where headroom is a constraint. As experienced crane manufacturers in Delhi, Linkwel Engineers provides customised single girder cranes built for reliability and efficiency.",
    features: [
      "Lightweight yet robust single beam design",
      "Electric wire rope or chain hoist options",
      "Low headroom design maximises working space",
      "Smooth VFD-controlled operations",
      "Pendant or radio remote control",
      "Easy installation and low maintenance",
      "Compatible with existing runway structures",
      "Powder-coated finish for corrosion resistance",
    ],
    specifications: [
      { label: "Capacity", value: "1 ton to 20 tons" },
      { label: "Span", value: "6 metres to 25 metres" },
      { label: "Lift Height", value: "Up to 15 metres" },
      { label: "Hoist Speed", value: "2 m/min to 10 m/min" },
      { label: "Travel Speed", value: "Up to 30 m/min" },
      { label: "Hoist Type", value: "Electric Wire Rope / Chain" },
      { label: "Power Supply", value: "3 Phase, 415V, 50 Hz" },
    ],
    applications: [
      "Small to medium factories",
      "Production and assembly lines",
      "Maintenance workshops",
      "Warehouses with limited headroom",
      "Tool rooms and machine shops",
      "Loading and unloading bays",
    ],
    industries: [
      "Manufacturing",
      "Automotive workshops",
      "Warehousing",
      "Food processing",
      "Packaging industries",
    ],
    benefits: [
      "Lower initial investment than double girder cranes",
      "Space-efficient with low headroom design",
      "Quick installation and commissioning",
      "Reliable performance for everyday lifting",
      "Low operating and maintenance costs",
      "Ideal for retrofitting existing buildings",
    ],
    safety: [
      "Overload protection and limit switches",
      "Emergency stop buttons",
      "Fail-safe electromagnetic brakes",
      "Audible warning during crane travel",
      "Safety latches on hooks",
      "Regular load testing and certification",
    ],
    faqs: [
      { question: "What is the difference between single girder and double girder cranes?", answer: "Single girder cranes use one bridge beam and are ideal for lighter loads (up to 20 tons) with lower headroom. Double girder cranes use two beams for heavier loads and greater spans. Single girder cranes are more cost-effective for most workshop applications." },
      { question: "What is the maximum capacity of a single girder crane?", answer: "Linkwel Engineers manufactures single girder cranes with capacities from 1 ton to 20 tons, suitable for most light to medium industrial applications." },
      { question: "Where can I find single girder crane manufacturers near me?", answer: "Linkwel Engineers is a leading crane manufacturer based in Delhi, providing single girder cranes across Delhi, Noida, Gurgaon, and all major industrial hubs in India." },
    ],
    metaTitle: "Single Girder Cranes | Crane Manufacturers Delhi – Linkwel",
    metaDesc:
      "Cost-effective single girder overhead cranes by Linkwel Engineers. Leading crane manufacturers in Delhi & India for workshops & factories. Get a quote.",
  },
  {
    slug: "double-girder-cranes",
    title: "Double Girder Cranes",
    category: "cranes",
    shortDesc:
      "High-capacity double girder overhead cranes for heavy-duty industrial lifting in steel plants, power plants, and large factories.",
    image: doubleGirderImg,
    heroDesc:
      "Linkwel Engineers manufactures heavy-duty double girder cranes engineered for maximum lifting capacity and precision in demanding industrial environments.",
    description:
      "Our double girder cranes are designed for heavy-duty material handling where high capacity, long spans, and precise control are essential. With twin bridge beams and a crab-mounted hoist, these cranes offer superior lifting performance for steel plants, power plants, and large manufacturing facilities. As one of the top crane manufacturers in India, Linkwel Engineers builds double girder cranes with precision engineering and robust construction for decades of reliable service.",
    features: [
      "Twin bridge beams for maximum strength",
      "Crab-mounted hoist for heavy loads",
      "High lifting height with operator cabin option",
      "VFD-controlled precise speed regulation",
      "Anti-sway and load-limiting technology",
      "Maintenance walkway on bridge girders",
      "Heavy-duty end carriages with forged wheels",
      "Remote, pendant, or cabin control options",
    ],
    specifications: [
      { label: "Capacity", value: "10 tons to 200 tons" },
      { label: "Span", value: "10 metres to 35 metres" },
      { label: "Lift Height", value: "Up to 25 metres" },
      { label: "Hoist Speed", value: "1 m/min to 8 m/min" },
      { label: "Travel Speed", value: "Up to 40 m/min" },
      { label: "Control", value: "Pendant / Radio Remote / Cabin" },
      { label: "Power Supply", value: "3 Phase, 415V, 50 Hz" },
    ],
    applications: [
      "Steel plants and foundries",
      "Power plants and substations",
      "Heavy engineering and fabrication",
      "Shipbuilding yards",
      "Cement and mining industries",
      "Large manufacturing facilities",
    ],
    industries: [
      "Steel & metals",
      "Power generation",
      "Heavy engineering",
      "Mining & cement",
      "Shipbuilding",
    ],
    benefits: [
      "Superior load capacity for heavy industrial use",
      "Greater lifting height and span coverage",
      "Operator cabin option for precise control",
      "Built for continuous heavy-duty operation",
      "Maintenance walkway ensures easy servicing",
      "Compliant with IS 3177 and IS 807 standards",
    ],
    safety: [
      "Overload protection and limit switches",
      "Anti-collision systems for multiple cranes",
      "Emergency braking on all motions",
      "Storm anchoring for outdoor installations",
      "Load indicators and weighing systems",
      "Audible and visual warning systems",
    ],
    faqs: [
      { question: "When should I choose a double girder crane over single girder?", answer: "Choose a double girder crane when you need lifting capacity above 20 tons, longer spans, greater lifting heights, or an operator cabin. They're ideal for steel plants, power plants, and heavy manufacturing." },
      { question: "What is the maximum capacity of double girder cranes?", answer: "Linkwel Engineers manufactures double girder cranes with capacities from 10 tons to 200 tons, customised for your specific industrial requirements." },
      { question: "Who are the best double girder crane manufacturers in India?", answer: "Linkwel Engineers is among India's most trusted crane manufacturers, building double girder cranes for steel plants, power plants, and heavy industries across Delhi, Noida, Gurgaon, and nationwide." },
    ],
    metaTitle: "Double Girder Cranes | Crane Manufacturers India – Linkwel",
    metaDesc:
      "Heavy-duty double girder cranes by Linkwel Engineers. Leading crane manufacturers in India for steel plants & heavy industries. Contact us today.",
  },
  {
    slug: "gantry-cranes",
    title: "Gantry Cranes",
    category: "cranes",
    shortDesc:
      "Versatile gantry cranes for outdoor yards, shipyards, and construction sites. Leading gantry crane suppliers in India.",
    image: gantryCraneImg,
    heroDesc:
      "Linkwel Engineers delivers high-performance gantry cranes built for heavy lifting in outdoor and semi-outdoor industrial environments.",
    description:
      "Our gantry cranes are engineered for heavy-duty material handling in open yards, shipyards, construction sites, and logistics hubs. Available in full gantry and semi-gantry configurations, these cranes operate on ground-level rails, eliminating the need for overhead runway structures. As trusted gantry crane suppliers in India, Linkwel Engineers provides customised solutions that maximise productivity and safety. Serving Delhi, Noida, Gurgaon and across India.",
    features: [
      "Full gantry and semi-gantry configurations",
      "Rail-mounted or rubber-tyred mobility",
      "Weather-resistant outdoor design",
      "High wind load resistance",
      "Motorised or manual travel options",
      "Adjustable span and height",
      "Heavy-duty steel structure",
      "VFD-controlled smooth operations",
    ],
    specifications: [
      { label: "Capacity", value: "5 tons to 200 tons" },
      { label: "Span", value: "10 metres to 40 metres" },
      { label: "Lift Height", value: "Up to 25 metres" },
      { label: "Travel Type", value: "Rail-mounted / Rubber-tyred" },
      { label: "Hoist Speed", value: "1 m/min to 10 m/min" },
      { label: "Configuration", value: "Full Gantry / Semi-Gantry" },
      { label: "Power Supply", value: "3 Phase, 415V, 50 Hz" },
    ],
    applications: [
      "Shipyards and ports",
      "Construction sites",
      "Open storage yards",
      "Precast concrete plants",
      "Railway maintenance depots",
      "Heavy fabrication workshops",
    ],
    industries: [
      "Ports & shipping",
      "Construction",
      "Railways",
      "Precast concrete",
      "Heavy fabrication",
    ],
    benefits: [
      "No overhead runway structure needed",
      "Ideal for outdoor and open-area operations",
      "High lifting capacity and wide span coverage",
      "Customisable to site-specific requirements",
      "Robust construction for harsh environments",
      "Cost-effective alternative to overhead cranes",
    ],
    safety: [
      "Storm anchoring and wind speed monitoring",
      "Limit switches on all motions",
      "Emergency braking system",
      "Anti-collision and buffer stops",
      "Load indicators and overload protection",
      "Audible travel alarms",
    ],
    faqs: [
      { question: "What is the difference between gantry cranes and overhead cranes?", answer: "Gantry cranes run on ground-level rails with their own support legs, while overhead cranes run on elevated runway beams. Gantry cranes are ideal for outdoor operations where building a runway structure isn't feasible." },
      { question: "Can gantry cranes be used outdoors?", answer: "Yes, our gantry cranes are specifically designed for outdoor use with weather-resistant components, wind load resistance, and storm anchoring systems." },
      { question: "Where can I find gantry crane suppliers near me?", answer: "Linkwel Engineers is a leading gantry crane manufacturer based in Delhi, serving clients across Delhi, Noida, Gurgaon, and throughout India." },
    ],
    metaTitle: "Gantry Cranes | Gantry Crane Suppliers India – Linkwel",
    metaDesc:
      "High-performance gantry cranes by Linkwel Engineers, leading crane manufacturers in Delhi. Full & semi-gantry cranes for yards & construction. Contact us.",
  },
  {
    slug: "goliath-cranes",
    title: "Goliath Cranes",
    category: "cranes",
    shortDesc:
      "Extra-heavy-duty goliath cranes for shipyards, power plants, and large-scale infrastructure projects. Industrial crane manufacturers in India.",
    image: goliathCraneImg,
    heroDesc:
      "Linkwel Engineers builds massive goliath cranes engineered for the heaviest lifting requirements in shipyards, power plants, and mega infrastructure projects.",
    description:
      "Our goliath cranes are designed for the most demanding heavy-lifting applications where extreme capacity and large spans are required. These ground-running cranes feature massive steel structures capable of handling loads that exceed standard gantry crane capacities. Ideal for shipyards, power plants, and infrastructure projects, our goliath cranes are engineered with precision for maximum safety and reliability. As experienced industrial crane manufacturers in India, Linkwel Engineers delivers goliath crane solutions across Delhi, Noida, Gurgaon, and nationwide.",
    features: [
      "Extra-heavy-duty steel construction",
      "Capacities exceeding standard gantry cranes",
      "Large span coverage for open yards",
      "Rail-mounted with precision travel",
      "Operator cabin with full controls",
      "Storm-rated for outdoor installation",
      "Multiple hoist configurations",
      "Advanced load monitoring systems",
    ],
    specifications: [
      { label: "Capacity", value: "20 tons to 500 tons" },
      { label: "Span", value: "15 metres to 60 metres" },
      { label: "Lift Height", value: "Up to 30 metres" },
      { label: "Travel Type", value: "Rail-mounted" },
      { label: "Hoist Speed", value: "0.5 m/min to 8 m/min" },
      { label: "Control", value: "Operator Cabin / Radio Remote" },
      { label: "Power Supply", value: "3 Phase, 415V, 50 Hz" },
    ],
    applications: [
      "Shipyards and dock yards",
      "Power plant equipment handling",
      "Large infrastructure projects",
      "Precast yard operations",
      "Heavy steel fabrication",
      "Nuclear and defence installations",
    ],
    industries: [
      "Shipbuilding & marine",
      "Power generation",
      "Infrastructure & construction",
      "Defence",
      "Steel fabrication",
    ],
    benefits: [
      "Handles the heaviest industrial loads",
      "Massive span coverage without building support",
      "Built for extreme weather and harsh conditions",
      "Precision control for safe heavy lifting",
      "Long service life with robust engineering",
      "Compliant with international crane standards",
    ],
    safety: [
      "Storm anchoring and wind monitoring",
      "Anti-collision for multi-crane operations",
      "Emergency stop and braking systems",
      "Load weighing and overload protection",
      "Fail-safe mechanisms on all motions",
      "Comprehensive load testing and certification",
    ],
    faqs: [
      { question: "What is a goliath crane and how is it different from a gantry crane?", answer: "A goliath crane is an extra-heavy-duty version of a gantry crane, designed for much higher capacities (up to 500 tons) and larger spans. It's used in shipyards, power plants, and large infrastructure projects where extreme lifting is required." },
      { question: "What industries use goliath cranes?", answer: "Goliath cranes are used in shipbuilding, power generation, nuclear installations, defence projects, and large-scale infrastructure construction where heavy equipment and materials need to be lifted." },
      { question: "Who manufactures goliath cranes in India?", answer: "Linkwel Engineers is an experienced industrial crane manufacturer in India building goliath cranes for major infrastructure projects. We serve clients across Delhi NCR and nationwide." },
    ],
    metaTitle: "Goliath Cranes | Industrial Crane Manufacturers – Linkwel",
    metaDesc:
      "Extra-heavy-duty goliath cranes by Linkwel Engineers. Industrial crane manufacturers in India for shipyards, power plants & infrastructure. Get a quote.",
  },
  {
    slug: "jib-cranes",
    title: "Jib Cranes",
    category: "cranes",
    shortDesc:
      "Compact and efficient jib cranes for workstations, workshops, and loading bays. Reliable crane manufacturers in Delhi.",
    image: jibCraneImg,
    heroDesc:
      "Linkwel Engineers manufactures high-quality jib cranes perfect for localised lifting operations in workshops and production floors.",
    description:
      "Our jib cranes provide efficient and flexible material handling for individual workstations, assembly lines, and loading docks. Available in wall-mounted, pillar-mounted, and free-standing configurations, these cranes offer 180° to 360° rotation for maximum coverage. As experienced crane manufacturers in Delhi, Linkwel Engineers designs compact jib cranes that improve workflow and productivity without occupying valuable floor space. Serving Delhi, Noida, Gurgaon and across India.",
    features: [
      "Wall-mounted, pillar-mounted, and free-standing options",
      "180° to 360° rotation arc",
      "Manual or motorised slewing",
      "Electric chain hoist or wire rope hoist",
      "Compact footprint for tight spaces",
      "Articulating arm option for extended reach",
      "Hot-rolled steel boom construction",
      "Quick installation and low maintenance",
    ],
    specifications: [
      { label: "Capacity", value: "250 kg to 10 tons" },
      { label: "Arm Length", value: "2 metres to 8 metres" },
      { label: "Rotation", value: "180° to 360°" },
      { label: "Mounting", value: "Wall / Pillar / Free-standing" },
      { label: "Hoist Type", value: "Electric Chain / Wire Rope" },
      { label: "Slewing", value: "Manual / Motorised" },
      { label: "Power Supply", value: "3 Phase, 415V, 50 Hz" },
    ],
    applications: [
      "Individual workstations and assembly lines",
      "Loading and unloading bays",
      "Machine tool shops",
      "Maintenance workshops",
      "Small warehouses and stores",
      "Foundries and forging shops",
    ],
    industries: [
      "Manufacturing workshops",
      "Automotive service",
      "Machine shops",
      "Foundries",
      "Logistics bays",
    ],
    benefits: [
      "Space-efficient design for localised lifting",
      "Improves individual workstation productivity",
      "Easy to install with minimal structural modifications",
      "Low investment with high operational value",
      "Flexible rotation for complete area coverage",
      "Minimal maintenance requirements",
    ],
    safety: [
      "Hoist limit switches (upper and lower)",
      "Overload protection",
      "Emergency stop button",
      "Rotation limit stops",
      "Safety latches on hooks",
      "Regular inspection and load testing",
    ],
    faqs: [
      { question: "What is a jib crane used for?", answer: "Jib cranes are used for localised lifting at individual workstations, loading bays, and assembly lines. They offer 180° to 360° rotation, making them ideal for repetitive lifting tasks in workshops and factories." },
      { question: "What types of jib cranes are available?", answer: "Linkwel Engineers offers wall-mounted, pillar-mounted, and free-standing jib cranes with capacities from 250 kg to 10 tons, suitable for various industrial applications." },
      { question: "Where can I find jib crane manufacturers near me in Delhi?", answer: "Linkwel Engineers is a trusted jib crane manufacturer based in Delhi, serving clients across Delhi, Noida, Gurgaon, and all major cities in India." },
    ],
    metaTitle: "Jib Cranes | Crane Manufacturers in Delhi – Linkwel",
    metaDesc:
      "Compact jib cranes by Linkwel Engineers, trusted crane manufacturers in Delhi. Wall, pillar & free-standing jib cranes for workshops. Request a quote.",
  },
  {
    slug: "electric-hoists",
    title: "Electric Hoists",
    category: "cranes",
    shortDesc:
      "Reliable electric chain and wire rope hoists for precise lifting operations. Essential material handling equipment by leading manufacturers in India.",
    image: electricHoistImg,
    heroDesc:
      "Linkwel Engineers supplies high-performance electric hoists designed for safe, efficient, and precise lifting in industrial and commercial settings.",
    description:
      "Our electric hoists are essential components for any material handling system, providing reliable and precise lifting in factories, workshops, warehouses, and construction sites. Available in electric chain hoist and electric wire rope hoist configurations, these hoists are designed for durability, safety, and ease of operation. As experienced crane manufacturers in India, Linkwel Engineers provides electric hoists that integrate seamlessly with overhead cranes, monorails, and jib cranes. Serving Delhi, Noida, Gurgaon and across India.",
    features: [
      "Electric chain hoist and wire rope hoist options",
      "Compact and lightweight design",
      "Dual-speed lifting for precision control",
      "Enclosed gearing for dust-proof operation",
      "Low headroom designs available",
      "Easy integration with cranes and monorails",
      "Pendant or radio remote control",
      "IP55-rated motor for harsh environments",
    ],
    specifications: [
      { label: "Capacity", value: "250 kg to 20 tons" },
      { label: "Lift Height", value: "3 metres to 30 metres" },
      { label: "Hoist Speed", value: "1 m/min to 12 m/min" },
      { label: "Type", value: "Electric Chain / Wire Rope" },
      { label: "Duty Class", value: "M3 to M6 (FEM classification)" },
      { label: "Motor Protection", value: "IP55" },
      { label: "Power Supply", value: "3 Phase, 415V, 50 Hz" },
    ],
    applications: [
      "Overhead crane lifting mechanisms",
      "Monorail material handling systems",
      "Jib crane hoisting units",
      "Workshop and garage lifting",
      "Construction site material handling",
      "Assembly line lifting operations",
    ],
    industries: [
      "Manufacturing & engineering",
      "Construction",
      "Automotive",
      "Warehousing",
      "General industry",
    ],
    benefits: [
      "Versatile lifting solution for diverse applications",
      "Compact size minimises space requirements",
      "Dual-speed option for load positioning precision",
      "Low maintenance with enclosed gearing",
      "Cost-effective material handling solution",
      "Seamless integration with existing crane systems",
    ],
    safety: [
      "Upper and lower limit switches",
      "Overload clutch protection",
      "Fail-safe electromagnetic brakes",
      "Emergency stop button",
      "Safety latch on hook",
      "Thermal motor protection",
    ],
    faqs: [
      { question: "What is the difference between chain hoists and wire rope hoists?", answer: "Chain hoists are compact, lighter, and ideal for lower capacity lifting (up to 5 tons). Wire rope hoists handle heavier loads, offer higher lift heights, and are more suitable for continuous industrial use." },
      { question: "Can electric hoists be used with existing cranes?", answer: "Yes, our electric hoists are designed for easy integration with overhead cranes, jib cranes, monorails, and gantry cranes. Linkwel Engineers provides complete hoist and crane solutions." },
      { question: "Where can I buy electric hoists near me in Delhi?", answer: "Linkwel Engineers supplies high-quality electric hoists from our facility in Delhi, serving clients across Delhi, Noida, Gurgaon, and throughout India." },
    ],
    metaTitle: "Electric Hoists | Hoist Manufacturers India – Linkwel",
    metaDesc:
      "Reliable electric chain & wire rope hoists by Linkwel Engineers. Leading hoist manufacturers in India for factories & workshops. Get a quote.",
  },
];

export const liftProducts = products.filter((p) => p.category === "lifts");
export const craneProducts = products.filter((p) => p.category === "cranes");
