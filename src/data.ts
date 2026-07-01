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
  bio: 'Architect and founder of Gudo Architects and Engineers Consultant Work PLC successfully delivers tailored, end-to-end consulting solutions to a diverse clientele. Blending structural engineering precision with creative vision, this professional oversees every phase of development—from initial concept to advanced technical documentation. Leveraging a powerful workstation equipped with industry-leading design and rendering software, they translate complex ideas into immersive, high-end realities. Known for a seamless integration of aesthetics, functionality, and rigorous technical analysis, this modern design consultant provides a comprehensive, stress-free approach to transforming architectural visions into functional, beautifully executed physical spaces.',
  avatar: ppImage
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
    title: 'G+4 commercial ceneter design',
    category: 'Architecture',
    subCategory: 'Commercial',
    image: img10, // Courtyard building layout with bronze vehicle
    description: 'A striking modern mixed-use development featuring twin mid-rise wings, structural exterior louvers for optimized solar control, and an open brick courtyard layout.',
    details: {
      location: 'Bishoftu, Oromia, Ethiopia',
      year: '2025',
      area: '1,850 sqm',
      scope: 'Full Architectural & Structural Design, BOQ'
    }
  },
  {
    id: 2,
    title: 'G+2 with terrace design',
    category: 'Architecture',
    subCategory: 'Residential',
    image: img9, // Multi-story modern villa with white facade frame
    description: 'An ultra-modern residential design blending exposed stone cladding textures, crisp white cantilevered frames, expansive glazing, and integrated ground-level parking.',
    details: {
      location: 'Bishoftu, Oromia, Ethiopia',
      year: '2024',
      area: '420 sqm',
      scope: 'Architectural, Interior & Landscape Design'
    }
  },
  {
    id: 3,
    title: 'G + mezzanine floor Church design',
    category: 'Architecture',
    subCategory: 'Public/Cultural',
    image: img3, // Megapharistos Church render
    description: 'A structural assembly sanctuary showcasing a clean monolithic light stone facade, a prominent architectural cross, an energetic red roof profile, and expansive entry stairs.',
    details: {
      location: 'Shakiso, Oromia, Ethiopia',
      year: '2025',
      area: '1,200 sqm',
      scope: 'Architectural Design & Acoustic Detailing'
    }
  },
  {
    id: 4,
    title: 'Office interior design',
    category: 'Interior',
    subCategory: 'Interior',
    image: img8, // Office workspace with iMac and custom wooden shelving
    description: 'A high-end corporate workspace maximizing productivity with a custom marble-finished executive desk, ambient concealed lighting, and built-in premium timber bookshelves.',
    details: {
      location: 'Megenagna, Addis Ababa, Ethiopia',
      year: '2024',
      area: '310 sqm',
      scope: 'Bespoke Interior Planning, Lighting & Supervision'
    }
  },
  {
    id: 5,
    title: 'Living, dining and kitchen interior design',
    category: 'Interior',
    subCategory: 'Interior',
    image: img6, // Luxury living room layout
    description: 'An open-concept residential suite featuring a custom wood-slatted media backdrop, elegant cream lounge furniture, premium lighting layout, and an integrated kitchen space.',
    details: {
      location: 'Addis Ababa, Ethiopia',
      year: '2025',
      area: '180 sqm',
      scope: 'Bespoke Furniture, Lighting & Mechanical Integration'
    }
  },
  {
    id: 6,
    title: 'Child Bed room interior design',
    category: 'Interior',
    subCategory: 'Interior',
    image: img11, // Pink bedroom with bunk bed and study nook
    description: 'A space-optimized bedroom painted in a soft pastel pink palette, showcasing a custom integrated timber bunk bed system, high-gloss marble floors, and a functional study desk.',
    details: {
      location: 'Addis Ababa, Ethiopia',
      year: '2024',
      area: '32 sqm',
      scope: 'Space-optimizing Interior Design, Custom Joinery'
    }
  },
  {
    id: 7,
    title: 'Outdoor cafe design',
    category: 'Landscape',
    subCategory: 'Commercial/Landscape',
    image: img5,
    description: 'A premium commercial outdoor lounge integrating structural timber decking, hanging string light accents, custom planters with lush greenery, and an artistic central feature tree.',
    details: {
      location: 'Bishoftu, Oromia, Ethiopia',
      year: '2025',
      area: '240 sqm',
      scope: 'Landscape Layout, Exterior Canopy Design'
    }
  },
  {
    id: 8,
    title: 'Cafe design',
    category: 'Interior',
    subCategory: 'Interior',
    image: img1, // Burger house interior with neon sign
    description: 'A lively, high-energy dining space utilizing bold red acoustic walls, custom overhead ring lighting structures, warm timber tables, and a living green wall with integrated neon branding.',
    details: {
      location: 'Bole Mikael, Addis Ababa, Ethiopia',
      year: '2024',
      area: '95 sqm',
      scope: 'Full Interior Layout, Branding Integration'
    }
  },
  {
    id: 9,
    title: 'Parametric wall design',
    category: 'Specialized',
    subCategory: 'Specialized',
    image: img7,
    description: 'Advanced interior feature walls incorporating computational geometric paneling to create fluid, organic movement within upscale commercial lobbies.',
    details: {
      location: 'Addis Ababa, Ethiopia',
      year: '2024',
      area: '45 sqm wall surface',
      scope: 'Algorithmic 3D Modeling, CNC Fabrication Specs'
    }
  },
  {
    id: 10,
    title: 'Coffee house interior design',
    category: 'Interior',
    subCategory: 'Interior',
    image: img4, // Cafe interior with people sitting down
    description: 'A warm, atmospheric community hub highlighting custom open shelving for potted flora, delicate wireframe pendant globes, and a beautifully framed architectural viewing arch.',
    details: {
      location: 'Samit 72, Addis Ababa, Ethiopia',
      year: '2023',
      area: '110 sqm',
      scope: 'Concept Design, Materials Curation'
    }
  },
  {
    id: 11,
    title: 'Taza real Estate reception design',
    category: 'Interior',
    subCategory: 'Interior',
    image: img2, // Taza real estate reception lobby
    description: 'A minimalist, high-end corporate entrance lobby showcasing a monolithic front desk with clean wood accents, modern linear ceiling slots, and custom backlit branding.',
    details: {
      location: 'Addis Ababa, Ethiopia',
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