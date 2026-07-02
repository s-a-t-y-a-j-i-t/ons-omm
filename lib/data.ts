import type {
  ComplianceBadge,
  FAQ,
  Industry,
  ProcessStep,
  Project,
  Service,
  StatItem,
  Testimonial,
  TimelineItem,
  WhyChooseItem,
} from "@/types";

export const companyInfo = {
  name: "ONS Engineers Pvt. Ltd.",
  tagline: "Engineering Excellence Beyond Standards",
  subheading:
    "Precision-engineered HVAC, cleanroom, and BMS solutions — from concept to commissioning, built for industries where failure is not an option.",
  established: 2016,
  address: {
    street: "Purshottam Residency, Ramnagar Industrial Area",
    city: "Roorkee",
    state: "Uttarakhand",
    country: "India",
    full: "Purshottam Residency, Ramnagar Industrial Area, Roorkee, Uttarakhand, India",
  },
  emails: ["sainiompal@gmail.com", "Saini.pharma@gmail.com"],
  phones: ["+91 9012319602", "+91 9216275602"],
  social: {
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
};

export const heroStats: StatItem[] = [
  { label: "Years Experience", value: 10, suffix: "+" },
  { label: "Projects", value: 250, suffix: "+" },
  { label: "Engineers", value: 75, suffix: "+" },
  { label: "Countries", value: 12, suffix: "+" },
];

export const achievementStats: StatItem[] = [
  { label: "Years Experience", value: 10, suffix: "+" },
  { label: "Projects Completed", value: 250, suffix: "+" },
  { label: "Satisfied Clients", value: 180, suffix: "+" },
  { label: "Expert Engineers", value: 75, suffix: "+" },
  { label: "Cities Served", value: 45, suffix: "+" },
  { label: "Countries", value: 12, suffix: "+" },
];

export const timeline: TimelineItem[] = [
  {
    year: "2016",
    title: "Foundation",
    description:
      "ONS Engineers established with a vision to deliver world-class HVAC and cleanroom solutions.",
  },
  {
    year: "2018",
    title: "Pharma Expansion",
    description:
      "Expanded into pharmaceutical engineering with USFDA and WHO GMP compliant projects.",
  },
  {
    year: "2020",
    title: "BMS Integration",
    description:
      "Launched Building Management Systems division for smart industrial automation.",
  },
  {
    year: "2022",
    title: "International Reach",
    description:
      "Extended operations across 12 countries with turnkey project capabilities.",
  },
  {
    year: "2024",
    title: "Innovation Hub",
    description:
      "Invested in cutting-edge validation and commissioning technologies.",
  },
  {
    year: "2026",
    title: "Industry Leader",
    description:
      "Recognized as a premium engineering partner for Fortune 500 pharmaceutical companies.",
  },
];

export const services: Service[] = [
  {
    id: "hvac",
    title: "HVAC",
    description:
      "Precision-engineered climate control for pharmaceutical cleanrooms, industrial plants, and mission-critical facilities.",
    icon: "Wind",
  },
  {
    id: "cleanroom",
    title: "Cleanroom",
    description:
      "ISO-classified environments designed, built, and validated for sterile pharmaceutical and biotech manufacturing.",
    icon: "Shield",
  },
  {
    id: "bms",
    title: "BMS",
    description:
      "Intelligent building automation that maximizes energy efficiency while ensuring 24/7 operational reliability.",
    icon: "Cpu",
  },
  {
    id: "validation",
    title: "Validation",
    description:
      "Rigorous IQ/OQ/PQ protocols and documentation packages engineered for seamless regulatory audits.",
    icon: "CheckCircle",
  },
  {
    id: "testing",
    title: "Testing",
    description:
      "Rigorous performance testing and environmental monitoring for critical systems.",
    icon: "FlaskConical",
  },
  {
    id: "commissioning",
    title: "Commissioning",
    description:
      "End-to-end commissioning services ensuring systems meet design specifications.",
    icon: "Settings",
  },
  {
    id: "maintenance",
    title: "Maintenance",
    description:
      "Preventive and predictive maintenance programs for uninterrupted operations.",
    icon: "Wrench",
  },
  {
    id: "turnkey",
    title: "Turnkey Projects",
    description:
      "Complete project delivery from conceptualization to qualification documentation.",
    icon: "Building2",
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: "concept",
    title: "Conceptualization",
    description: "Understanding client requirements and defining project scope.",
    icon: "Lightbulb",
  },
  {
    id: "urs",
    title: "URS",
    description: "Developing User Requirement Specifications aligned with regulations.",
    icon: "FileText",
  },
  {
    id: "design",
    title: "System Design",
    description: "Engineering detailed system designs with 3D modeling and simulations.",
    icon: "PenTool",
  },
  {
    id: "execution",
    title: "Execution",
    description: "Professional installation with quality-controlled project management.",
    icon: "Hammer",
  },
  {
    id: "qualification",
    title: "Qualification Documentation",
    description: "Complete DQ/IQ/OQ documentation packages for regulatory compliance.",
    icon: "ClipboardCheck",
  },
  {
    id: "validation",
    title: "Validation",
    description: "Final validation and handover with comprehensive training support.",
    icon: "Award",
  },
];

export const industries: Industry[] = [
  { id: "pharma", name: "Pharmaceutical", icon: "Pill" },
  { id: "injectable", name: "Injectable", icon: "Syringe" },
  { id: "osd", name: "OSD", icon: "Pill" },
  { id: "api", name: "API", icon: "Atom" },
  { id: "lvp", name: "LVP", icon: "Droplets" },
  { id: "svp", name: "SVP", icon: "TestTube" },
  { id: "hormone", name: "Hormone", icon: "Dna" },
  { id: "cephalosporin", name: "Cephalosporin", icon: "Microscope" },
  { id: "penicillin", name: "Penicillin", icon: "Biohazard" },
  { id: "vaccination", name: "Vaccination", icon: "HeartPulse" },
  { id: "chemical", name: "Chemical", icon: "FlaskConical" },
  { id: "automobile", name: "Automobile", icon: "Car" },
  { id: "food", name: "Food", icon: "UtensilsCrossed" },
  { id: "packaging", name: "Packaging", icon: "Package" },
  { id: "polymer", name: "Polymer", icon: "Layers" },
  { id: "electronics", name: "Electronics", icon: "CircuitBoard" },
  { id: "solar", name: "Solar", icon: "Sun" },
  { id: "hotels", name: "Hotels", icon: "Hotel" },
  { id: "hospitals", name: "Hospitals", icon: "Hospital" },
  { id: "research", name: "Research Centers", icon: "BookOpen" },
  { id: "corporate", name: "Corporate Offices", icon: "Building" },
];

export const whyChooseUs: WhyChooseItem[] = [
  {
    id: "team",
    title: "Experienced Team",
    description:
      "75+ certified engineers with decades of combined expertise in critical engineering systems.",
    icon: "Users",
  },
  {
    id: "quality",
    title: "Quality Assurance",
    description:
      "Rigorous QA protocols ensuring every project meets international pharmaceutical standards.",
    icon: "BadgeCheck",
  },
  {
    id: "e2e",
    title: "End to End Solutions",
    description:
      "Complete project lifecycle management from design through validation and maintenance.",
    icon: "Workflow",
  },
  {
    id: "delivery",
    title: "Timely Delivery",
    description:
      "Proven track record of on-time project completion with zero compromise on quality.",
    icon: "Clock",
  },
  {
    id: "technology",
    title: "Latest Technology",
    description:
      "Cutting-edge engineering tools, BIM modeling, and smart automation integration.",
    icon: "Zap",
  },
  {
    id: "standards",
    title: "International Standards",
    description:
      "Full compliance with USFDA, WHO GMP, EU GMP, MHRA, and other global regulations.",
    icon: "Globe",
  },
];

export const complianceBadges: ComplianceBadge[] = [
  { id: "usfda", name: "USFDA", fullName: "U.S. Food & Drug Administration" },
  { id: "who", name: "WHO GMP", fullName: "World Health Organization GMP" },
  { id: "mhra", name: "MHRA", fullName: "Medicines & Healthcare Products Regulatory Agency" },
  { id: "ukmca", name: "UK MCA", fullName: "UK Medicines Control Agency" },
  { id: "eugmp", name: "EU GMP", fullName: "European Union Good Manufacturing Practice" },
  { id: "tga", name: "TGA", fullName: "Therapeutic Goods Administration" },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Sterile Injectable Facility",
    category: "Pharmaceutical",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1200&q=85&auto=format&fit=crop",
    description:
      "Complete HVAC and cleanroom solution for a Grade B injectable manufacturing facility with USFDA compliance.",
    location: "Hyderabad, India",
    year: "2025",
  },
  {
    id: "2",
    title: "API Manufacturing Plant",
    category: "API",
    image: "https://images.unsplash.com/photo-1532187863486-abf9db8811d6?w=1200&q=85&auto=format&fit=crop",
    description:
      "Turnkey engineering for API production with advanced air handling and containment systems.",
    location: "Ahmedabad, India",
    year: "2024",
  },
  {
    id: "3",
    title: "Vaccine Production Unit",
    category: "Vaccination",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200&q=85&auto=format&fit=crop",
    description:
      "ISO Class 7 cleanroom design and BMS integration for large-scale vaccine manufacturing.",
    location: "Pune, India",
    year: "2024",
  },
  {
    id: "4",
    title: "OSD Tablet Facility",
    category: "OSD",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=85&auto=format&fit=crop",
    description:
      "HVAC and dust control systems for high-volume oral solid dosage production lines.",
    location: "Baddi, India",
    year: "2023",
  },
  {
    id: "5",
    title: "Research Laboratory Complex",
    category: "Research",
    image: "https://images.unsplash.com/photo-1582719201952-260a58f1b9b0?w=1200&q=85&auto=format&fit=crop",
    description:
      "Precision climate control and validation for multi-disciplinary research laboratories.",
    location: "Bangalore, India",
    year: "2023",
  },
  {
    id: "6",
    title: "Hospital HVAC Retrofit",
    category: "Hospitals",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=85&auto=format&fit=crop",
    description:
      "Complete HVAC modernization for a 500-bed multi-specialty hospital with infection control.",
    location: "Delhi, India",
    year: "2025",
  },
];

export const clients = [
  "Sun Pharma",
  "Cipla",
  "Dr. Reddy's",
  "Lupin",
  "Aurobindo",
  "Biocon",
  "Glenmark",
  "Torrent",
  "Alkem",
  "Mankind",
  "Cadila",
  "Wockhardt",
  "Abbott",
  "Pfizer",
  "GSK",
  "Novartis",
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Dr. Rajesh Kumar",
    role: "VP Engineering",
    company: "Leading Pharma Corp",
    quote:
      "ONS Engineers delivered our injectable facility ahead of schedule with impeccable quality. Their validation documentation exceeded USFDA audit requirements.",
    rating: 5,
  },
  {
    id: "2",
    name: "Priya Sharma",
    role: "Plant Head",
    company: "Global API Manufacturer",
    quote:
      "The team's expertise in cleanroom design and commissioning is unmatched. They transformed our vision into a world-class manufacturing facility.",
    rating: 5,
  },
  {
    id: "3",
    name: "Michael Chen",
    role: "Director Operations",
    company: "International Biotech",
    quote:
      "Working with ONS Engineers was a seamless experience. Their end-to-end approach and attention to regulatory compliance gave us complete confidence.",
    rating: 5,
  },
  {
    id: "4",
    name: "Anita Desai",
    role: "QA Manager",
    company: "Vaccine Producer",
    quote:
      "From URS to final validation, every deliverable was precise and professional. ONS Engineers is our go-to partner for critical engineering projects.",
    rating: 5,
  },
];

export const dashboardStats = [
  { label: "Project Success Rate", value: 99, suffix: "%" },
  { label: "On-Time Delivery", value: 97, suffix: "%" },
  { label: "Client Retention", value: 94, suffix: "%" },
  { label: "Regulatory Compliance", value: 100, suffix: "%" },
];

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "What industries does ONS Engineers serve?",
    answer:
      "We serve pharmaceutical, chemical, food, automobile, electronics, solar, hospitality, healthcare, and corporate sectors with specialized HVAC, cleanroom, and BMS solutions tailored to each industry's unique requirements.",
  },
  {
    id: "2",
    question: "Do you provide turnkey project solutions?",
    answer:
      "Yes, we offer complete turnkey solutions encompassing conceptualization, URS development, system design, execution, qualification documentation, and validation — delivering fully operational facilities ready for production.",
  },
  {
    id: "3",
    question: "What regulatory standards do you comply with?",
    answer:
      "Our projects comply with USFDA, WHO GMP, MHRA, UK MCA, EU GMP, TGA, and ISO standards. We ensure all documentation and validation protocols meet international audit requirements.",
  },
  {
    id: "4",
    question: "How long does a typical cleanroom project take?",
    answer:
      "Project timelines vary based on scope and complexity. A standard ISO Class 7 cleanroom typically takes 6-12 months from design to validation. We provide detailed project schedules during the conceptualization phase.",
  },
  {
    id: "5",
    question: "Do you offer post-installation maintenance?",
    answer:
      "Absolutely. We provide comprehensive preventive and predictive maintenance programs, 24/7 support, and annual re-qualification services to ensure your systems operate at peak performance.",
  },
  {
    id: "6",
    question: "Can you work on international projects?",
    answer:
      "Yes, we have successfully executed projects across 12 countries. Our team is experienced in international regulatory requirements and can deploy resources globally for project execution.",
  },
];

export const coreValues = [
  { title: "Integrity", description: "Unwavering ethical standards in every engagement" },
  { title: "Innovation", description: "Pioneering engineering solutions for tomorrow" },
  { title: "Excellence", description: "Surpassing expectations in quality and delivery" },
  { title: "Partnership", description: "Building lasting relationships through trust" },
];

export const mission =
  "To engineer mission-critical environments that empower industries to operate with absolute precision — delivering systems that exceed regulatory standards, optimize performance, and stand the test of time.";

export const vision =
  "To be the global benchmark for pharmaceutical and industrial engineering — where innovation, integrity, and flawless execution define every project we undertake.";
