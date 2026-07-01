import { Project, Service, SoftwareTool } from './types';

import ppImage from './assets/images/pp.png';
import img11 from './assets/images/images/image11.jpg';
import img10 from './assets/images/images/image10.jpg';
import img9 from './assets/images/images/image9.jpg';
import img8 from './assets/images/images/image8.jpg';
import img7 from './assets/images/images/image7.jpg';
import img6 from './assets/images/images/image6.jpg';
import img5 from './assets/images/images/image5.jpg';
import img4 from './assets/images/images/image4.jpg';
import img3 from './assets/images/images/image3.jpg';
import img2 from './assets/images/images/image2.jpg';
import img1 from './assets/images/images/image1.jpg';

export const CLIENT_INFO = {
  name: 'Iyasu Belachew',
  title: 'Architect & Multidisciplinary Designer',
  phone: '0934544825',
  email: 'Gudoarchitectsandengineersplc@gmail.com',
  socialProof: '21+ clients successfully served',
  hardware: 'High-Performance Architectural Workstation',
  experienceYears: '5+',
  location: 'Addis Ababa, Ethiopia',
  tagline: 'Designing structured landmarks & high-end bespoke interior spaces where form meets ultimate function.',
  bio: 'Architect and founder of Gudo Architects and Engineers Consultant Work PLC successfully delivers tailored, end-to-end consulting solutions to a diverse clientele. Blending structural engineering precision with creative vision, this professional oversees every phase of development—from initial concept to advanced technical documentation. Leveraging a powerful workstation equipped with industry-leading design and rendering software, they translate complex ideas into immersive, high-end realities. Known for a seamless integration of aesthetics, functionality, and rigorous technical analysis, this modern design consultant provides a comprehensive, stress-free approach to transforming architectural visions into functional, beautifully executed physical spaces',
  avatar: '/src/assets/images/pp.png'
};

export const SERVICES: Service[] = [
  {
    title: 'Architectural Design',
    description: 'Developing conceptually rich, functionally efficient, and visually stunning building envelopes and structures from scratch.',
    category: 'Core Design',
    details: ['Conceptual Schematics & Space Planning', '3D Massing & Exterior Envelopes', 'Permit and Construction Drawings', 'G+X Multi-story Developments']
  },
  {
    title: 'Interior Design',
    description: 'Curating warm, modern, and highly functional indoor environments with premium material choices, bespoke furniture, and smart lighting.',
    category: 'Core Design',
    details: ['Residential Living, Kitchen & Bed spaces', 'Commercial Offices & Creative Hubs', 'Hospitality, Cafes & Retail Receptions', 'Custom Parametric Accents & Ceilings']
  },
  {
    title: 'Landscape Design',
    description: 'Blurring the boundary between indoor spaces and natural outdoor contexts, creating peaceful landscapes and interactive plazas.',
    category: 'Core Design',
    details: ['Outdoor Cafe & Patio Layouts', 'Hardscape, Pathways & Water Features', 'Vegetation selection & Green walls', 'Urban plazas & Courtyards']
  },
  {
    title: 'Structure Analysis',
    description: 'Providing precise calculation sheets, structural safety metrics, concrete/steel detailing, and solid engineering drawings.',
    category: 'Technical Engineering',
    details: ['Structural Frame Design & Load Calculations', 'Reinforced Concrete Detailing', 'Foundation & Slab Analysis', 'Seismic & Wind Load Compliance']
  },
  {
    title: 'Electrical Design',
    description: 'Designing safe, modern, and energy-efficient electrical circuit diagrams and lighting maps.',
    category: 'Technical Engineering',
    details: ['Lighting Layouts & Control Schemes', 'Power Distribution Diagrams', 'Telecommunications & Low-Voltage Wiring', 'Energy Optimization & Circuit Loads']
  },
  {
    title: 'Sanitary Design',
    description: 'Engineering pristine, reliable water supply networks, drainage conduits, and high-efficiency sanitary fixtures mapping.',
    category: 'Technical Engineering',
    details: ['Potable Water Supply Piping', 'Wastewater & Rainwater Drainage Systems', 'Fixture Coordinates & Plumbing Diagrams', 'Septic & Vent Design']
  },
  {
    title: 'Supervision & Consulting',
    description: 'Providing rigorous on-site inspection and expert advisory services to ensure building compliance with blueprint fidelity.',
    category: 'Consulting & Docs',
    details: ['Construction Quality Inspections', 'Fidelity Checks with Revit Blueprints', 'Material Standards Verification', 'Contractor Guidance & Query Resolution']
  },
  {
    title: 'BOQ (Bill of Quantities) & Docs',
    description: 'Authoring highly accurate quantity take-offs, materials estimations, and robust procurement documentation to match budgets.',
    category: 'Consulting & Docs',
    details: ['Detailed Material Specifications', 'Accurate Quantity Estimations', 'Cost Breakdown Analyses (BOQ)', 'Technical Bid Submissions']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'G+4 Commercial Center Design',
    category: 'Architecture',
    subCategory: 'Commercial',
    image: 'src/assets/images/images/image11.jpg',
    description: 'A striking modern retail and office hub designed with high glass-to-concrete ratio, maximizing natural workspace illumination and structural elegance.',
    details: {
      location: 'Bole District, Addis Ababa',
      year: '2025',
      area: '1,850 sqm',
      scope: 'Full Architectural & Structural Design, BOQ'
    }
  },
  {
    id: 2,
    title: 'G+2 with Terrace Design',
    category: 'Architecture',
    subCategory: 'Residential',
    image: 'src/assets/images/images/image10.jpg',
    description: 'A luxurious contemporary villa focusing on expansive private outdoor terraces, floating overhangs, and elegant wood-clad columns.',
    details: {
      location: 'CMC Regency, Addis Ababa',
      year: '2024',
      area: '420 sqm',
      scope: 'Architectural, Interior & Landscape Design'
    }
  },
  {
    id: 3,
    title: 'G + Mezzanine Floor Church Design',
    category: 'Architecture',
    subCategory: 'Public/Cultural',
    image: 'src/assets/images/images/image4.jpg',
    description: 'A highly spiritual, minimalist assembly hall merging dramatic natural light shafts with pristine modern lines, elevated with a majestic mezzanine.',
    details: {
      location: 'Hawassa, Ethiopia',
      year: '2025',
      area: '1,200 sqm',
      scope: 'Architectural Design & Acoustic Detailing'
    }
  },
  {
    id: 4,
    title: 'Office Interior Design',
    category: 'Interior',
    subCategory: 'Interior',
    image: 'src/assets/images/images/image9.jpg',
    description: 'A tech-forward, open-plan workspace integrating wooden floor acoustics, hidden cabling, smart zoning, and collaborative breakout zones.',
    details: {
      location: 'Megenagna Corporate Hub',
      year: '2024',
      area: '310 sqm',
      scope: 'Bespoke Interior Planning, Lighting & Supervision'
    }
  },
  {
    id: 5,
    title: 'Living, Dining, and Kitchen Interior',
    category: 'Interior',
    subCategory: 'Interior',
    image: 'src/assets/images/images/image7.jpg',
    description: 'An open-concept residential suite featuring state-of-the-art marble kitchen counters, recess lighting, and custom linear fireplace accents.',
    details: {
      location: 'Lebu Estates, Addis Ababa',
      year: '2025',
      area: '180 sqm',
      scope: 'Bespoke Furniture, Lighting & Mechanical Integration'
    }
  },
  {
    id: 6,
    title: 'Child Bedroom Interior Design',
    category: 'Interior',
    subCategory: 'Interior',
    image: 'src/assets/images/images/image1.jpg',
    description: 'A playful yet clean and sophisticated bedroom design maximizing space with premium modular shelving and custom hidden study desks.',
    details: {
      location: 'CMC Regency, Addis Ababa',
      year: '2024',
      area: '32 sqm',
      scope: 'Space-optimizing Interior Design, Custom Joinery'
    }
  },
  {
    id: 7,
    title: 'Outdoor Cafe Design',
    category: 'Landscape',
    subCategory: 'Commercial/Landscape',
    image: 'src/assets/images/images/image6.jpg',
    description: 'An oasis in the city center integrating steel canopy frames, lush climbing vegetation, bespoke wooden seating grids, and elegant pathway lighting.',
    details: {
      location: 'Bole Atlas, Addis Ababa',
      year: '2025',
      area: '240 sqm',
      scope: 'Landscape Layout, Exterior Canopy Design'
    }
  },
  {
    id: 8,
    title: 'Cafe Design',
    category: 'Interior',
    subCategory: 'Interior',
    image: 'src/assets/images/images/image2.jpg',
    description: 'Industrial-chic espresso cafe utilizing raw concrete wall finishes, copper pipe details, and comfortable warm-toned leather banquette seating.',
    details: {
      location: 'Sarbet Area, Addis Ababa',
      year: '2024',
      area: '95 sqm',
      scope: 'Full Interior Layout, Branding Integration'
    }
  },
  {
    id: 9,
    title: 'Parametric Wall Design',
    category: 'Specialized',
    subCategory: 'Specialized',
    image: 'src/assets/images/images/image8.jpg',
    description: 'An advanced parametric wall paneling sculpture crafted with computational algorithms, transforming an executive boardroom into an organic masterpiece.',
    details: {
      location: 'HQ Conference Suite',
      year: '2024',
      area: '45 sqm wall surface',
      scope: 'Algorithmic 3D Modeling, CNC Fabrication Specs'
    }
  },
  {
    id: 10,
    title: 'Coffee House Interior Design',
    category: 'Interior',
    subCategory: 'Interior',
    image: 'src/assets/images/images/image5.jpg',
    description: 'A cozy sanctuary focusing on local organic materials, dark stained woods, warm clay textures, and focused spot-lighting for a relaxing mood.',
    details: {
      location: 'Kazanchis, Addis Ababa',
      year: '2023',
      area: '110 sqm',
      scope: 'Concept Design, Materials Curation'
    }
  },
  {
    id: 11,
    title: 'Taza Real Estate Reception Design',
    category: 'Interior',
    subCategory: 'Interior',
    image: 'src/assets/images/images/image3.jpg',
    description: 'A high-prestige reception area featuring a monolithic stone front desk, brass metallic accents, and a dynamic illuminated digital brand backing.',
    details: {
      location: 'Taza Real Estate Headquarters',
      year: '2025',
      area: '75 sqm',
      scope: 'Corporate Lobby Design & Custom Reception Millwork'
    }
  }
];

export const SOFTWARE_STACK: SoftwareTool[] = [
  // Heavy duty
  { name: 'Autodesk Revit', category: 'production', level: 'Expert (BIM Master)' },
  { name: 'AutoCAD', category: 'production', level: 'Expert (Drafting)' },
  { name: 'SketchUp Pro', category: 'production', level: 'Expert (Modeling)' },
  { name: 'D5 Render', category: 'rendering', level: 'Expert (Real-time Raytracing)' },
  { name: 'Twinmotion', category: 'rendering', level: 'Expert (Dynamic Environments)' },
  { name: 'Lumion', category: 'rendering', level: 'Expert (High-speed Visuals)' },
  { name: 'Adobe Creative Suite', category: 'rendering', level: 'Proficient (Post-production)' },
  { name: 'Workstation Core Hardware', category: 'hardware', level: 'Ryzen 9 / RTX Studio GPU High-Performance Rig' }
];