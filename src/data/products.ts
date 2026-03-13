import passengerImg from "@/assets/product-passenger-elevator.jpg";
import homeImg from "@/assets/product-home-elevator.jpg";
import goodsImg from "@/assets/product-goods-elevator.jpg";
import hospitalImg from "@/assets/product-hospital-elevator.jpg";
import capsuleImg from "@/assets/product-capsule-elevator.jpg";
import carImg from "@/assets/product-car-elevator.jpg";

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
  metaTitle: string;
  metaDesc: string;
}

export const products: Product[] = [
  {
    slug: "passenger-elevators",
    title: "Passenger Elevators",
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
    metaTitle: "Passenger Elevators | Best Passenger Lift Manufacturers in India – Linkwel",
    metaDesc:
      "Linkwel Engineers - leading passenger lift manufacturers in India. Premium passenger elevators for commercial & residential buildings. Get a free quote today.",
  },
  {
    slug: "home-elevators",
    title: "Home Elevators",
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
    metaTitle: "Home Elevators | Best Home Lift Manufacturers in India – Linkwel Engineers",
    metaDesc:
      "Premium home elevators by Linkwel Engineers, India's trusted home lift manufacturer. Compact, elegant lifts for villas, bungalows & residences. Get a quote now.",
  },
  {
    slug: "goods-elevators",
    title: "Freight / Goods Elevators",
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
    metaTitle: "Goods Elevators | Freight Lift Manufacturers in India – Linkwel Engineers",
    metaDesc:
      "Industrial goods elevators & freight lifts by Linkwel Engineers. Heavy-duty lift manufacturer in India for warehouses, factories & logistics. Contact us today.",
  },
  {
    slug: "hospital-elevators",
    title: "Hospital Elevators",
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
    metaTitle: "Hospital Elevators | Medical Lift Manufacturers in India – Linkwel Engineers",
    metaDesc:
      "Specialised hospital elevators by Linkwel Engineers. Hygienic, spacious medical lifts for hospitals & healthcare facilities in India. Request a quote.",
  },
  {
    slug: "capsule-elevators",
    title: "Capsule / Glass Elevators",
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
    metaTitle: "Capsule Elevators | Glass Lift Manufacturers in India – Linkwel Engineers",
    metaDesc:
      "Premium capsule & glass elevators by Linkwel Engineers. Panoramic lifts for malls, hotels & commercial buildings in India. Get a custom design quote.",
  },
  {
    slug: "car-elevators",
    title: "Car Elevators",
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
      "Anti-skid platform surface",
    ],
    metaTitle: "Car Elevators | Automobile Lift Manufacturers in India – Linkwel Engineers",
    metaDesc:
      "Car elevators & automobile lifts by Linkwel Engineers, leading lift manufacturer in Delhi & India. Solutions for parking, showrooms & residences. Get a quote.",
  },
];
