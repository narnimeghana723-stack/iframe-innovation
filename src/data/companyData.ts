import {
  Project,
  InnovationDomain,
  TeamMember,
  Milestone,
  Statistic,
  GalleryItem,
  Testimonial,
  PartnerLogo,
} from '../types';

export const COMPANY_INFO = {
  name: 'IFRAME',
  shortName: 'IFRAME',
  tagline: 'Engineering Impact Through Applied Technology & Research',
  foundedYear: '2021',
  email: 'contact@iframe.tech',
  pressEmail: 'press@iframe.tech',
  phone: '+1 (800) 582-9421',
  address: '450 Innovation Parkway, Suite 600',
  cityStateZip: 'Silicon Valley, CA 94025, United States',
  workingHours: 'Monday – Friday: 8:00 AM – 6:00 PM PST',
  socialLinks: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    twitter: 'https://x.com',
    youtube: 'https://youtube.com',
    instagram: 'https://instagram.com',
  },
};

export const HERO_STATS = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '25+', label: 'Proprietary Innovations' },
  { value: '10+', label: 'Technology Domains' },
  { value: '100+', label: 'Global Collaborators' },
];

export const ABOUT_CARDS = [
  {
    id: 'vision',
    title: 'Our Vision',
    description:
      'To pioneer foundational engineering architectures and intelligent systems that solve humanity’s critical industrial, environmental, and computational hurdles.',
    iconName: 'Compass',
    gradient: 'from-blue-600 to-cyan-500',
  },
  {
    id: 'mission',
    title: 'Our Mission',
    description:
      'Translate exploratory research into robust, production-ready platforms that drive tangible efficiency, resilience, and sustainable economic value.',
    iconName: 'Target',
    gradient: 'from-indigo-600 to-blue-500',
  },
  {
    id: 'values',
    title: 'Our Values',
    description:
      'Rigorous scientific integrity, relentless craftsmanship, open ecosystem collaboration, and human-centric responsibility in every deployment.',
    iconName: 'ShieldCheck',
    gradient: 'from-teal-600 to-cyan-600',
  },
  {
    id: 'impact',
    title: 'Our Impact',
    description:
      'Empowering enterprise partners, researchers, and emerging talent with technologies that eliminate operational bottlenecks across 12 countries.',
    iconName: 'Sparkles',
    gradient: 'from-blue-700 to-indigo-600',
  },
];

export const INNOVATION_DOMAINS: InnovationDomain[] = [
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    iconName: 'BrainCircuit',
    tagline: 'Predictive Neural Models & Cognitive Computing',
    description:
      'Architecting resilient deep learning pipelines, generative agents, and self-optimizing inference engines designed for enterprise scale.',
    technologies: ['Deep Learning', 'Transformers', 'Vision AI', 'Model Quantization', 'Vector DBs'],
    keyCapabilities: [
      'Multi-modal perceptual processing',
      'Real-time edge neural inference',
      'Continuous synthetic telemetry adaptation',
      'Explainable AI decision pipelines',
    ],
    colorGradient: 'from-blue-500/10 via-cyan-500/5 to-transparent',
    badge: 'Core Focus',
  },
  {
    id: 'iot',
    title: 'Internet of Things',
    iconName: 'Cpu',
    tagline: 'Edge Sensor Mesh & Telemetry Infrastructure',
    description:
      'Connecting distributed physical sensors and microcontrollers with ultra-low latency telemetry and autonomous edge compute.',
    technologies: ['MQTT / CoAP', 'Embedded C/Rust', 'LoRaWAN', 'Time-Series DBs', 'Firmware OTA'],
    keyCapabilities: [
      'Resilient low-power mesh networking',
      'Sub-10ms anomalous vibration analysis',
      'Cryptographically verified sensor attestation',
      'Fault-tolerant disconnected edge operation',
    ],
    colorGradient: 'from-cyan-500/10 via-teal-500/5 to-transparent',
    badge: 'Industrial Grade',
  },
  {
    id: 'software',
    title: 'Software Engineering',
    iconName: 'CodeXml',
    tagline: 'High-Throughput Distributed Micro-architectures',
    description:
      'Engineering mission-critical enterprise platforms with deterministic performance, immutable event streaming, and strict type safety.',
    technologies: ['TypeScript / Go / Rust', 'gRPC', 'Distributed Actors', 'Kafka Streams', 'PostgreSQL'],
    keyCapabilities: [
      'Zero-downtime rolling architecture',
      'Strict distributed transaction consensus',
      'High-density concurrent processing',
      'SOC2 and ISO27001 compliant primitives',
    ],
    colorGradient: 'from-indigo-500/10 via-blue-500/5 to-transparent',
    badge: 'Architecture',
  },
  {
    id: 'cloud',
    title: 'Cloud & Digital Solutions',
    iconName: 'CloudCog',
    tagline: 'Hybrid Infrastructure & Elastic Orchestration',
    description:
      'Orchestrating resilient multi-region cloud infrastructures with automated autoscaling, infrastructure-as-code, and zero-trust security.',
    technologies: ['Kubernetes', 'Terraform', 'Multi-Region Mesh', 'eBPF Observability', 'Serverless'],
    keyCapabilities: [
      'Dynamic workload orchestration',
      'Global low-latency edge caching',
      'Automated disaster recovery drills',
      'Real-time cloud cost intelligence',
    ],
    colorGradient: 'from-sky-500/10 via-indigo-500/5 to-transparent',
    badge: 'Enterprise Scalability',
  },
  {
    id: 'research',
    title: 'Research & Innovation',
    iconName: 'Microscope',
    tagline: 'Algorithmic Exploration & Applied Science',
    description:
      'Collaborating with tier-one academic institutes to explore quantum-resilient cryptography, novel materials modeling, and algorithmic efficiency.',
    technologies: ['Applied Math', 'Post-Quantum Crypto', 'Graph Neural Nets', 'Simulation Engines'],
    keyCapabilities: [
      'Peer-reviewed algorithmic benchmarks',
      'Patent-pending memory optimization',
      'Collaborative university research chairs',
      'Rapid prototype validation testbeds',
    ],
    colorGradient: 'from-teal-500/10 via-emerald-500/5 to-transparent',
    badge: 'R&D Labs',
  },
  {
    id: 'robotics',
    title: 'Automation & Robotics',
    iconName: 'Bot',
    tagline: 'Cyber-Physical Systems & Autonomous Motion',
    description:
      'Bridging digital intelligence and mechanical execution with robotic actuation, kinematic path planning, and autonomous fleet coordination.',
    technologies: ['ROS 2', 'LiDAR SLAM', 'Kinematic Controllers', 'Computer Vision', 'CAN Bus'],
    keyCapabilities: [
      'Dynamic spatial mapping in GPS-denied zones',
      'Sub-millimeter robotic arm precision',
      'Autonomous fleet collision avoidance',
      'Human-in-the-loop safety telemetry',
    ],
    colorGradient: 'from-blue-600/10 via-purple-500/5 to-transparent',
    badge: 'Cyber-Physical',
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'ai-analytics-platform',
    title: 'AI Analytics Platform',
    category: 'AI',
    tagline: 'Enterprise-wide predictive intelligence and anomaly detection engine',
    description:
      'A high-throughput machine learning inference engine that ingests over 250,000 events per second to predict industrial equipment fatigue and supply chain vulnerabilities.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    tags: ['Deep Learning', 'Real-Time Streaming', 'Python', 'React', 'Kafka'],
    clientOrDomain: 'Global Logistics & Manufacturing Enterprise',
    deliverables: [
      'Real-time visual diagnostic dashboard',
      'Autonomous alert dispatching pipeline',
      'Sub-50ms inference server cluster',
    ],
    metrics: [
      { label: 'Latency', value: '<42ms' },
      { label: 'False Positive Reduction', value: '78%' },
      { label: 'Data Ingestion', value: '250K ops/sec' },
    ],
    featured: true,
  },
  {
    id: 'smart-iot-monitoring',
    title: 'Smart IoT Monitoring',
    category: 'IoT',
    tagline: 'Industrial telemetry and environmental sensor mesh',
    description:
      'Autonomous edge mesh deployed across remote infrastructure facilities, delivering continuous vibration, temperature, and atmospheric telemetry over secure LoRaWAN channels.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    tags: ['LoRaWAN', 'Embedded Rust', 'Edge Compute', 'Time-Series DB', 'Solar Powered'],
    clientOrDomain: 'Renewable Power & Municipal Utilities',
    deliverables: [
      'Ruggedized edge sensor firmware',
      'Solar-backed ultra-low power hardware modules',
      'End-to-end encrypted telemetry protocol',
    ],
    metrics: [
      { label: 'Battery Lifespan', value: '5+ Years' },
      { label: 'Active Sensors', value: '4,200+' },
      { label: 'Packet Reliability', value: '99.98%' },
    ],
    featured: true,
  },
  {
    id: 'healthcare-technology-platform',
    title: 'Healthcare Technology Platform',
    category: 'Software',
    tagline: 'Decentralized diagnostic support and clinical data federation',
    description:
      'HIPAA-compliant diagnostic orchestration platform enabling medical research networks to federate clinical image processing without compromising patient privacy boundaries.',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    tags: ['Federated Learning', 'Zero-Trust', 'FastAPI', 'DICOM', 'PostgreSQL'],
    clientOrDomain: 'Academic Medical Consortia',
    deliverables: [
      'Federated diagnostic training node',
      'Zero-knowledge patient identifier vault',
      'High-resolution imaging viewer',
    ],
    metrics: [
      { label: 'Audit Compliance', value: '100% HIPAA' },
      { label: 'Hospitals Connected', value: '18 Sites' },
      { label: 'Diagnostic Speed', value: '3.4x Faster' },
    ],
    featured: true,
  },
  {
    id: 'intelligent-automation-system',
    title: 'Intelligent Automation System',
    category: 'Automation',
    tagline: 'Autonomous robotic dispatching and precision kinematic control',
    description:
      'Integrated control plane for autonomous mobile robots (AMRs) operating in dynamic warehouse environments, optimizing routing and charging schedules continuously.',
    image:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
    tags: ['ROS 2', 'SLAM Navigation', 'Go', 'Computer Vision', 'Fleet Control'],
    clientOrDomain: 'E-Commerce Fulfillment Centers',
    deliverables: [
      'Central fleet traffic controller',
      'Obstacle classification model',
      'Automatic docking and battery management',
    ],
    metrics: [
      { label: 'Throughput Increase', value: '+46%' },
      { label: 'Fleet Collision Rate', value: '0.00%' },
      { label: 'Uptime', value: '99.95%' },
    ],
    featured: false,
  },
  {
    id: 'cloud-based-business-platform',
    title: 'Cloud-Based Business Platform',
    category: 'Cloud',
    tagline: 'Elastic multi-tenant microservices for hyper-scale commerce',
    description:
      'Cloud-native transaction fabric handling global merchant settlements across 40 countries with multi-region active-active database clustering and automated disaster rollover.',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    tags: ['Kubernetes', 'Terraform', 'CockroachDB', 'gRPC', 'TypeScript'],
    clientOrDomain: 'FinTech & Global B2B Marketplace',
    deliverables: [
      'Multi-region deployment infrastructure',
      'Immutable cryptographic audit ledger',
      'Automated canary deployment pipeline',
    ],
    metrics: [
      { label: 'Global Latency', value: '<85ms' },
      { label: 'Peak TPS', value: '18,500' },
      { label: 'Yearly Uptime', value: '99.999%' },
    ],
    featured: false,
  },
  {
    id: 'sustainable-technology-solution',
    title: 'Sustainable Technology Solution',
    category: 'Software',
    tagline: 'Smart grid energy balancing and carbon transparency mesh',
    description:
      'An environmental accounting platform connecting solar installations, battery storage arrays, and commercial consumers to minimize carbon-intensive grid draws in real time.',
    image:
      'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=80',
    tags: ['CleanTech', 'Predictive Grid', 'Smart Meter API', 'React', 'Python'],
    clientOrDomain: 'Clean Energy Co-operatives',
    deliverables: [
      'Hourly carbon displacement monitor',
      'Automated battery load shifting schedule',
      'Regulator-ready verification exports',
    ],
    metrics: [
      { label: 'Peak Power Savings', value: '31%' },
      { label: 'CO2 Avoided', value: '14,200 Tons' },
      { label: 'Facilities Active', value: '85 Sites' },
    ],
    featured: true,
  },
];

export const ACHIEVEMENTS_STATS: Statistic[] = [
  {
    id: 'projects',
    value: 50,
    suffix: '+',
    label: 'Projects Completed',
    sublabel: 'Delivered for global enterprises and universities',
  },
  {
    id: 'innovations',
    value: 25,
    suffix: '+',
    label: 'Innovations & Patents',
    sublabel: 'Registered algorithms, architectures, and hardware designs',
  },
  {
    id: 'collaborations',
    value: 15,
    suffix: '+',
    label: 'Industry Collaborations',
    sublabel: 'Strategic enterprise and research partnerships',
  },
  {
    id: 'awards',
    value: 10,
    suffix: '+',
    label: 'Awards & Recognitions',
    sublabel: 'International tech innovation & engineering prizes',
  },
  {
    id: 'members',
    value: 100,
    suffix: '+',
    label: 'Community Members',
    sublabel: 'Contributing engineers, researchers, and fellows',
  },
];

export const MILESTONES: Milestone[] = [
  {
    year: '2021',
    quarter: 'Q2',
    title: 'Company Foundation',
    description:
      'Established by a group of systems engineers and machine learning researchers with a shared vision for applied deep technology.',
    highlight: 'Seed research lab founded in Silicon Valley',
  },
  {
    year: '2022',
    quarter: 'Q4',
    title: 'First Commercial Deployment',
    description:
      'Launched our flagship real-time IoT monitoring sensor mesh across 500 municipal clean-water monitoring locations.',
    highlight: 'Field test reliability rated at 99.98%',
  },
  {
    year: '2023',
    quarter: 'Q3',
    title: 'DeepTech Patent Grant & Global Rollout',
    description:
      'Secured algorithmic patents for distributed low-latency sensor synchronization and expanded operations to international enterprise partners.',
    highlight: 'Crossed 10+ countries of active deployment',
  },
  {
    year: '2024',
    quarter: 'Q1',
    title: 'AI Lab Expansion & Research Consortia',
    description:
      'Inaugurated our dedicated AI Systems Lab in partnership with premier engineering universities for next-gen transformer optimization.',
    highlight: 'Published 8 peer-reviewed conference papers',
  },
  {
    year: '2025',
    quarter: 'Q3',
    title: 'Industry Excellence Award',
    description:
      'Honored with the Global CleanTech & Industrial Robotics Innovation Trophy for automated factory logistics.',
    highlight: 'Celebrated 45th enterprise client milestone',
  },
  {
    year: '2026',
    quarter: 'Q1',
    title: 'Autonomous Edge Mesh Launch',
    description:
      'Unveiling our hybrid cyber-physical operating system uniting edge sensors, robotics, and cloud telemetry.',
    highlight: 'Present day: Shaping the next decade of technology',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'marcus-vance',
    name: 'Dr. Marcus Vance',
    role: 'Founder & CEO',
    department: 'Executive Leadership',
    bio: 'Former principal systems architect with 18+ years leading deep-tech teams at top-tier research institutes and Silicon Valley enterprises.',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    socials: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      twitter: 'https://x.com',
      email: 'm.vance@iframe.tech',
    },
  },
  {
    id: 'elena-rostova',
    name: 'Elena Rostova, Ph.D.',
    role: 'Chief Technology Officer',
    department: 'Engineering & Architecture',
    bio: 'Specialist in distributed consensus protocols and resilient cloud orchestration. Directs our technical roadmap and core infrastructure systems.',
    avatar:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    socials: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      email: 'e.rostova@iframe.tech',
    },
  },
  {
    id: 'adrian-chen',
    name: 'Adrian Chen',
    role: 'Lead Developer',
    department: 'Software Engineering',
    bio: 'Full-stack systems developer specialized in ultra-low latency event loops, real-time telemetry pipelines, and responsive web platforms.',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    socials: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      twitter: 'https://x.com',
    },
  },
  {
    id: 'priya-nair',
    name: 'Dr. Priya Nair',
    role: 'AI Engineer & Research Scientist',
    department: 'Artificial Intelligence',
    bio: 'Focuses on model quantization, reinforcement learning for robotics, and lightweight vision transformers for low-power edge nodes.',
    avatar:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    socials: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      twitter: 'https://x.com',
    },
  },
  {
    id: 'julian-mercier',
    name: 'Julian Mercier',
    role: 'Product Designer',
    department: 'Product & Human Factors',
    bio: 'Passionate about translating complex algorithmic outputs and dense telemetry streams into clear, accessible, and elegant visual interfaces.',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://x.com',
    },
  },
  {
    id: 'talia-al-mansoor',
    name: 'Talia Al-Mansoor',
    role: 'Research Lead & Cyber-Physical Systems',
    department: 'Applied Robotics & Sensors',
    bio: 'Directs physical prototyping, sensor attestation testing, and autonomous robotic kinematic calibration in our advanced research workshop.',
    avatar:
      'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=800&q=80',
    socials: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      email: 't.almansoor@iframe.tech',
    },
  },
];

export const WHY_CHOOSE_US = [
  {
    id: 'innovation-first',
    title: 'Innovation First',
    description:
      'We do not stop at theoretical papers—we turn frontier algorithmic breakthroughs into reliable, test-driven industrial software and hardware solutions.',
    iconName: 'Lightbulb',
    stats: '25+ Patents & Prototypes',
  },
  {
    id: 'tech-expertise',
    title: 'Technology Expertise',
    description:
      'Our team pairs deep academic research backgrounds with battle-tested systems engineering rigor, ensuring enterprise-grade stability from day zero.',
    iconName: 'Layers',
    stats: '15+ Years Domain Mastery',
  },
  {
    id: 'real-world-impact',
    title: 'Real-World Impact',
    description:
      'Every project is measured against concrete outcomes: operational cost reduction, lower carbon footprints, enhanced safety, and amplified workforce efficiency.',
    iconName: 'TrendingUp',
    stats: '100% Measurable Outcomes',
  },
  {
    id: 'collaborative-approach',
    title: 'Collaborative Approach',
    description:
      'We treat clients, student researchers, and industry partners as co-architects, maintaining total transparency through open standups and shared code repositories.',
    iconName: 'Users',
    stats: '40+ Institutional Partners',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Advanced AI Systems Laboratory',
    category: 'Lab & Research',
    imageUrl:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
    description: 'Hardware testbench analyzing multi-node GPU inference clusters and thermal profiles.',
    location: 'Innovation Lab 2, Silicon Valley',
  },
  {
    id: 'g2',
    title: 'Autonomous Robotics Prototyping',
    category: 'Robotics',
    imageUrl:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1000&q=80',
    description: 'Kinematic calibration testing for autonomous warehouse mobile robots.',
    location: 'Cyber-Physical Engineering Bay',
  },
  {
    id: 'g3',
    title: 'Global Hackathon & Student Fellowship',
    category: 'Workshops',
    imageUrl:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80',
    description: 'Hosting 120 aspiring engineers for our annual 48-hour applied AI hackathon challenge.',
    location: 'Auditorium Hall A',
  },
  {
    id: 'g4',
    title: 'Clean Energy IoT Field Calibration',
    category: 'Field Deployment',
    imageUrl:
      'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1000&q=80',
    description: 'Deploying solar-powered environmental sensor nodes for continuous grid telemetry.',
    location: 'Mojave Solar Array Site',
  },
  {
    id: 'g5',
    title: 'Engineering Sprint Review',
    category: 'Team & Culture',
    imageUrl:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
    description: 'Weekly multi-disciplinary architecture whiteboard and code review sessions.',
    location: 'Engineering Commons',
  },
  {
    id: 'g6',
    title: 'Annual Tech Innovation Showcase',
    category: 'Events',
    imageUrl:
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80',
    description: 'Demonstrating real-time predictive analytics to enterprise partners and researchers.',
    location: 'San Francisco Tech Expo',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote:
      'Novatech transformed our distributed logistics network. Their predictive maintenance models reduced equipment downtime by over 34% within the first four months of rollout.',
    author: 'Sarah Jenkins',
    role: 'VP of Global Operations',
    organization: 'Apex Logistics Corporation',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    id: 't2',
    quote:
      'The scientific integrity and engineering craftsmanship the Novatech team brings to complex problems is unmatched. They don’t just write software; they solve fundamental physical challenges.',
    author: 'Prof. David K. Thorne',
    role: 'Director of Cybernetics Laboratory',
    organization: 'Pacific Institute of Technology',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    id: 't3',
    quote:
      'Their IoT telemetry stack has operated without a single missed packet across extreme weather environments. Novatech set a new gold standard for industrial reliability in our smart grid.',
    author: 'Amara Nwosu',
    role: 'Chief Innovation Officer',
    organization: 'Aura Energy Systems',
    avatar:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
];

export const PARTNERS: PartnerLogo[] = [
  { id: 'p1', name: 'Apex Dynamics', category: 'Enterprise Tech', tagline: 'Autonomous Systems' },
  { id: 'p2', name: 'Vertex Cloud', category: 'Infrastructure', tagline: 'Distributed Cloud' },
  { id: 'p3', name: 'NeuroSys Labs', category: 'AI Research', tagline: 'Cognitive Computing' },
  { id: 'p4', name: 'QuantumScale', category: 'Data Solutions', tagline: 'High-Throughput Analytics' },
  { id: 'p5', name: 'BioTech Alliance', category: 'Healthcare', tagline: 'Medical Informatics' },
  { id: 'p6', name: 'Horizon Energy', category: 'CleanTech', tagline: 'Smart Grid Grids' },
];
