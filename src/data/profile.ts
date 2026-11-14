/**
 * ============================================================
 *  ALL PORTFOLIO CONTENT LIVES HERE.
 *  To update the site, edit this file — no layout code needed.
 *
 *  • Empty string links ('') are hidden on the site automatically.
 *  • Images go in /public/images/... and are referenced as '/images/...'.
 *  • Newest items first in every list.
 *  • Keep public: professional email + public links only.
 *    No phone numbers, home address or private details.
 * ============================================================
 */

export const profile = {
  name: 'Mohtad Ahmed',
  fullName: 'Mohtad Ahmed Saeem',
  headline: 'Engineer, Software Developer & Technology Founder',
  // Rotating titles in the intro line
  roles: [
    'Engineer, Software Developer & Technology Founder',
    'Founder & CEO, UprintBD',
    'Full Stack Software Developer',
    'Part-time Lecturer, Dept. of CSE',
  ],
  tagline:
    'Building practical software products and connected systems at the intersection of software engineering, IoT, and applied AI.',
  about: [
    'I am an Electrical and Electronic Engineering graduate, software engineer, and technology founder from Bangladesh. I build practical software products and connected systems, with experience spanning cloud applications, IoT integration, applied AI, and product development.',
    'I am the Founder and CEO of UprintBD, a cloud-based self-service printing platform that connects users with Raspberry Pi-based printing kiosks. I developed the original platform software, the first-generation kiosk, device communication and the basic deployment infrastructure. Today UprintBD runs five outlets and serves students as well as institutional and corporate clients.',
    'Alongside that, I work as a Full Stack Software Developer at CSI Smart Tech on software and IoT-enabled systems, including garments production monitoring, and teach Electrical & Electronic Circuits part-time in the Department of CSE at the Institute of Global Management & Information System.',
    'I am particularly interested in secure and intelligent cyber-physical systems, Industrial IoT, and Edge AI.',
  ],
  location: 'Chittagong, Bangladesh',
  email: 'ahmedmohtad@gmail.com',
  avatar: '/images/profile.jpg',
  // Put a public CV (no referee contacts) in /public/resume/ and set e.g. '/resume/Mohtad_Ahmed_CV.pdf'
  resumeUrl: '',
  availability: 'Open to collaborations & interesting projects',
  languages: ['Bangla (Native)', 'English (Professional)'],
  hobbies: ['Photography', 'Reading books', 'Travelling'],
};

// Only GitHub and LinkedIn (plus email) are shown for now. Fill others in later if wanted.
export const socials = {
  github: 'https://github.com/mohtadahmed',
  linkedin: 'https://www.linkedin.com/in/mohtadahmed/',
  googleScholar: '',
  researchGate: '',
  orcid: '',
  instagram: '',
  facebook: '',
  x: '',
};

export type Experience = {
  role: string;
  org: string;
  orgShort?: string; // used in the "Now:" line on the intro
  orgUrl?: string;
  location: string;
  start: string;
  end: string;
  kind: 'Industry' | 'Teaching' | 'Startup' | 'Research';
  bullets: string[];
  tech?: string[];
};

export const experience: Experience[] = [
  {
    role: 'Lecturer (Part-time) — Department of CSE',
    org: 'Institute of Global Management & Information System',
    orgShort: 'IGMIS',
    orgUrl: '',
    location: 'Chittagong, Bangladesh',
    start: 'Oct 2025',
    end: 'Present',
    kind: 'Teaching',
    bullets: [
      'Teach Electrical & Electronic Circuits using digital and simulation-based teaching methods.',
      'Facilitate practical laboratory experiments that connect theory with real applications.',
      'Mentor undergraduate students.',
    ],
  },
  {
    role: 'Full Stack Software Developer',
    org: 'CSI Smart Tech',
    orgShort: 'CSI Smart Tech',
    orgUrl: '',
    location: 'Dhaka, Bangladesh',
    start: 'Dec 2024',
    end: 'Present',
    kind: 'Industry',
    bullets: [
      'Design, develop and maintain production software with Python, Django, Django REST Framework, React and relational databases.',
      'Develop backend REST APIs, database structures and role-based access control.',
      'Build dashboards for real-time monitoring, reporting and operational management, including a garments production monitoring system.',
      'Develop and maintain MQTT-based communication for IoT devices.',
      'Deploy and maintain applications on Linux cloud servers (DigitalOcean, Nginx).',
      'Work with frontend developers, hardware engineers and business stakeholders in an Agile workflow.',
    ],
    tech: ['Python', 'Django', 'DRF', 'React', 'MQTT', 'Nginx', 'DigitalOcean'],
  },
  {
    role: 'Founder & CEO',
    org: 'UprintBD',
    orgShort: 'UprintBD',
    orgUrl: 'https://uprintbd.com',
    location: 'Chittagong, Bangladesh',
    start: 'Jun 2023',
    end: 'Present',
    kind: 'Startup',
    bullets: [
      'Founded the business and developed the initial product concept — a cloud-based self-service printing network.',
      'Built the original software platform, the first-generation Raspberry Pi kiosk, device communication and basic deployment infrastructure.',
      'Implemented file-processing and print-job workflows, payment options and security features across the platform.',
      'Now lead business operations — five outlets, corporate and university clients — while continuing to contribute to product development.',
    ],
    tech: ['Django', 'Raspberry Pi', 'MQTT', 'CUPS', 'DigitalOcean'],
  },
  // Stellar research affiliation — hidden until role and dates are confirmed.
];

/* ────────────────────────────── Products ────────────────────────────── */

export type Product = {
  name: string;
  role: string;
  status: string; // e.g. 'Live', 'Pilot'
  since: string;
  summary: string;
  url?: string;
  metrics?: { value: string; label: string }[];
  metricsNote?: string;
  deployments?: { group: string; items: string[] }[];
  features?: string[];
  stack?: string[];
  image?: string;
};

export const products: Product[] = [
  {
    name: 'UprintBD',
    role: 'Founder & CEO',
    status: 'Live',
    since: 'Founded Jun 2023',
    url: 'https://uprintbd.com',
    summary:
      'A cloud-based self-service printing platform. Users upload documents through the web, and Raspberry Pi-based kiosks at physical outlets print them — no operator needed. It grew out of my project “Distributed Cloud Printing Service”, which received the ICT Innovation Grant.',
    metrics: [
      { value: '1,280+', label: 'registered users' },
      { value: '5', label: 'outlets with kiosks' },
      { value: '~1,100', label: 'print jobs / month' },
    ],
    metricsNote: 'Founder-reported operating figures, Nov 2026. Monthly jobs vary.',
    deployments: [
      { group: 'Corporate', items: ['Factory Next Ltd, Dhaka', 'Stellar, Chittagong'] },
      {
        group: 'University of Chittagong',
        items: ['Shaheed Abdur Rab Hall', 'Shaheed Forhad Hossen Hall', 'Deshnetri Begum Khaleda Zia Hall', 'Faculty of Engineering'],
      },
    ],
    features: [
      'Django web platform on DigitalOcean',
      'Raspberry Pi kiosks in 3D-printed enclosures',
      'Server ↔ kiosk communication over HTTPS and MQTT',
      'CUPS plus a custom backend print queue',
      'bKash and manual payments',
      'Email-verified accounts and Google sign-in',
    ],
    stack: ['Django', 'Raspberry Pi', 'MQTT', 'CUPS', 'DigitalOcean', 'bKash'],
  },
  {
    name: 'Inventory Pro',
    role: 'Developer',
    status: 'Pilot',
    since: 'Launched Nov 2026',
    url: '',
    summary:
      'An inventory management product for businesses, covering stock, sales and day-to-day operations. Currently being pilot-tested by three businesses.',
    features: [
      'Product, category and stock management',
      'Sales tracking and invoice generation',
      'Company and account management',
      'Role-based access and user management',
    ],
  },
];

/* ────────────────────────────── Projects ────────────────────────────── */

export type ProjectCategory = 'Industrial IoT' | 'Web' | 'AI / ML' | 'Mobile' | 'Research';

export type Project = {
  title: string;
  category: ProjectCategory;
  period?: string;
  summary: string;
  highlights: string[];
  tech: string[];
  image?: string;
  featured?: boolean;
  aiAssisted?: boolean; // shows a short transparency note
  links: { live?: string; github?: string; caseStudy?: string; paper?: string };
};

export const projects: Project[] = [
  {
    title: 'Garments Production Monitoring System',
    category: 'Industrial IoT',
    period: 'CSI Smart Tech',
    summary:
      'An IoT-enabled platform for monitoring and reporting garments production — factory and line operations, production planning, output tracking and management dashboards.',
    highlights: [
      'IoT devices reporting to backend services over MQTT',
      'Real-time production monitoring and reporting dashboards',
      'Role-based access for management and operations teams',
    ],
    tech: ['Django', 'DRF', 'React', 'MQTT', 'MySQL'],
    image: '',
    featured: true,
    links: {},
  },
  {
    title: 'KrishiBondhu — AI Farming for Bangladesh',
    category: 'Mobile',
    summary:
      'An Android app giving farmers localised guidance on crop selection, disease prevention and irrigation, with a hybrid online/offline engine.',
    highlights: [
      'Live guidance via the Google Gemini API, with a 12-month local database as offline fallback',
      'GPS and calendar mapping for region-specific advice',
      'Material 3 interface with infographic dashboards and success stories',
    ],
    tech: ['Android', 'Gemini API', 'Material 3', 'Offline-first'],
    image: '',
    featured: true,
    aiAssisted: true,
    links: { github: '', live: '' },
  },
  {
    title: "Alzheimer's Disease Detection & Classification using CNN",
    category: 'AI / ML',
    period: 'M.Sc. thesis',
    summary:
      'Deep learning on brain MRI from the ADNI dataset to classify Alzheimer’s disease, mild cognitive impairment and cognitively normal cases — in binary and multiclass settings.',
    highlights: [
      'Prepared and cleaned the ADNI dataset',
      'Built and evaluated CNN classifiers for binary and multiclass tasks',
      'Tested, debugged and validated the implementation',
    ],
    tech: ['Python', 'TensorFlow', 'CNN', 'ADNI'],
    image: '',
    featured: true,
    aiAssisted: true,
    links: { paper: '', github: '' },
  },
  {
    title: 'Smart Crop Recommendation System for Precision Agriculture',
    category: 'AI / ML',
    summary: 'An IoT and machine-learning system that recommends suitable crops to support precision agriculture.',
    highlights: [
      'Selected the problem and overall approach',
      'Prepared the dataset and adapted the model',
      'Integrated machine learning into the wider IoT system; ran experiments and validated results',
    ],
    tech: ['IoT', 'Machine Learning', 'Python'],
    image: '',
    featured: true,
    aiAssisted: true,
    links: { github: '' },
  },
  {
    title: 'Lung Cancer Detection & Prediction',
    category: 'AI / ML',
    summary: 'Machine learning on CT images from the IQ-OTH/NCCD dataset for lung cancer detection and prediction.',
    highlights: ['Prepared and cleaned the dataset', 'Ran experiments and evaluated models', 'Debugged and validated the implementation'],
    tech: ['Python', 'Machine Learning', 'Medical Imaging'],
    image: '',
    featured: true,
    aiAssisted: true,
    links: { github: '' },
  },
  {
    title: 'Ignite — Academic Result Management System',
    category: 'Web',
    summary:
      'A digital result management application for the EEE Department, University of Chittagong, replacing error-prone manual result processing.',
    highlights: ['Automated grading logic and administrative reporting', 'Relational database design', 'Multi-tier user permissions'],
    tech: ['Python', 'Django', 'JavaScript', 'jQuery', 'Bootstrap', 'MySQL'],
    image: '',
    featured: true,
    links: { github: '', live: '' },
  },
  {
    title: 'Blockchain-based Food Supply Chain',
    category: 'Research',
    period: '2019',
    summary: 'Poster on traceable food supply chains using blockchain — 2nd Runner-up at IEEE Day 2019.',
    highlights: [],
    tech: ['Blockchain'],
    links: { paper: '' },
  },
  {
    title: 'iExplain',
    category: 'Web',
    summary: 'An educational course-selling platform.',
    highlights: [],
    tech: ['HTML', 'CSS', 'Bootstrap'],
    links: { github: '', live: '' },
  },
  {
    title: 'Tick Your Pick',
    category: 'Web',
    summary: 'A football-player selection web app.',
    highlights: [],
    tech: ['HTML', 'CSS', 'JavaScript'],
    links: { github: '', live: '' },
  },
  {
    title: 'Info House',
    category: 'Web',
    summary: 'A news portal built on an external news API.',
    highlights: [],
    tech: ['HTML', 'CSS', 'JavaScript', 'REST API'],
    links: { github: '', live: '' },
  },
];

export const aiAssistedNote =
  'Implemented with substantial help from AI coding tools. My work: problem framing, data preparation, integration, experiments, debugging and validation.';

/* ────────────────────────────── Research ────────────────────────────── */

export const research = {
  title: 'Secure & Intelligent Cyber-Physical Systems',
  statement:
    'I want to build secure, intelligent and practical systems that connect software to the physical world — and that can be deployed, not just demonstrated.',
  areas: [
    { title: 'Industrial IoT & OT Security', text: 'Industrial and operational-technology systems, secure device-to-cloud communication, and resilience.' },
    { title: 'Edge AI & AIoT', text: 'Embedded intelligence on connected devices, including AIoT for precision agriculture.' },
    { title: 'Anomaly & Intrusion Detection', text: 'AI-based detection of faults and attacks in cyber-physical systems.' },
    { title: 'Digital Twins & Smart Manufacturing', text: 'Intelligent monitoring and modelling of production systems.' },
  ],
  broader: [
    'Software Engineering',
    'Systems Engineering',
    'Artificial Intelligence',
    'Robotics & Automation',
    'Embedded Systems',
    'Product Development',
    'Sustainable Technology',
  ],
  // Only list work that has actually been published.
  publications: [] as { title: string; venue: string; year: string; authors: string; link?: string }[],
};

/* ────────────────────────────── Skills ────────────────────────────── */

export type SkillGroup = { title: string; items: string[] };

export const skills: SkillGroup[] = [
  { title: 'Languages', items: ['Python', 'JavaScript', 'C', 'SQL', 'MATLAB', 'LaTeX'] },
  { title: 'Backend', items: ['Django', 'Django REST Framework', 'Flask', 'REST APIs', 'Database design', 'Role-based access control'] },
  { title: 'Frontend', items: ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'jQuery'] },
  { title: 'Databases', items: ['PostgreSQL', 'MySQL', 'SQLite'] },
  { title: 'IoT & Embedded', items: ['MQTT', 'Raspberry Pi', 'Arduino', 'ESP', 'Device-to-server communication', 'CUPS'] },
  { title: 'AI / ML', items: ['CNNs', 'Image classification', 'Medical image analysis', 'Dataset preparation', 'Model evaluation', 'AI API integration'] },
  { title: 'Cloud & DevOps', items: ['DigitalOcean', 'AWS', 'Google Cloud', 'Linux (Ubuntu)', 'Nginx', 'GitHub Actions', 'VPS deployment'] },
  { title: 'Engineering tools', items: ['MATLAB', 'PSpice', 'LTspice', 'DipTrace', 'Cisco Packet Tracer'] },
  { title: 'Other tools', items: ['Git', 'GitHub', 'Google Colab', 'Kaggle', 'Figma', 'Adobe XD', 'Illustrator', 'Photoshop'] },
];

/* ────────────────────────────── Education ────────────────────────────── */

export type Education = {
  degree: string;
  institution: string;
  years: string;
  result: string;
  note?: string;
};

export const education: Education[] = [
  {
    degree: 'M.Sc. Engineering in Electrical & Electronic Engineering',
    institution: 'University of Chittagong',
    years: '2022 — 2024',
    result: 'CGPA 3.03 / 4.00',
    note: "Thesis: Alzheimer's Disease Detection & Classification using CNNs (thesis grade A).",
  },
  {
    degree: 'B.Sc. Engineering in Electrical & Electronic Engineering',
    institution: 'University of Chittagong',
    years: '2017 — 2023',
    result: 'CGPA 3.04 / 4.00',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Chittagong College, Chittagong',
    years: '2015',
    result: 'GPA 5.00 / 5.00',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Nasirabad Govt. High School, Chittagong',
    years: '2013',
    result: 'GPA 5.00 / 5.00',
  },
];

/* ────────────────────────────── Awards ────────────────────────────── */

export type AwardItem = { title: string; org: string; date: string; detail?: string };

export const awards: AwardItem[] = [
  {
    title: 'ICT Innovation Grant',
    org: 'Ministry of ICT, Government of Bangladesh',
    date: 'Jun 2023',
    detail: 'Awarded to me for the project “Distributed Cloud Printing Service” (FY 2022–23), which became UprintBD.',
  },
  { title: 'Champion — Project Showcasing', org: 'EEE Fest, Dept. of EEE, University of Chittagong', date: '2023' },
  { title: 'Runner-up — Startup Idea Competition', org: 'EEE Fest, Dept. of EEE, University of Chittagong', date: '2023' },
  { title: "Master's Honorarium Scholarship", org: 'University of Chittagong', date: '2021' },
  {
    title: '2nd Runner-up — Poster Presentation',
    org: 'IEEE Day, IEEE Student Branch, University of Chittagong',
    date: 'Oct 2019',
    detail: '“Blockchain Based Food Supply Chain”.',
  },
  { title: '62nd place — Open Category, Physics Brawl', org: 'Faculty of Mathematics and Physics, Charles University', date: '' },
];

/* ──────────────────────── Leadership & activities ──────────────────────── */

export type Leadership = { role: string; org: string; start: string; end: string; logo?: string };

export const leadership: Leadership[] = [
  { role: 'Chairperson', org: 'IEEE Student Branch, University of Chittagong', start: 'Mar 2021', end: 'Jun 2022', logo: '/images/logos/ieee-sb-cu.jpg' },
  { role: 'Ambassador', org: 'IEEEXtreme 15.0', start: 'Mar 2021', end: 'Oct 2021' },
  { role: 'General Secretary', org: 'Chittagong University Robotics & Innovation Club', start: 'Apr 2019', end: 'Nov 2021', logo: '/images/logos/curi.png' },
  { role: 'Regional Coordinator', org: 'Bangladesh Olympiad on Astronomy and Astrophysics', start: 'Sep 2019', end: 'Feb 2022', logo: '/images/logos/bdoaa.png' },
  { role: 'Academic Team Member', org: 'Bangladesh National Physics Olympiad', start: 'Mar 2019', end: 'Feb 2024', logo: '/images/logos/bdpho.png' },
  { role: 'Working Committee Member', org: 'Dream Foundation, Bangladesh', start: 'Oct 2018', end: 'Sep 2019', logo: '/images/logos/dream-foundation.jpg' },
];

export const volunteering = [
  { role: 'Team Leader & Organizer', org: 'Engineering Day 2019 & 2022, Faculty of Engineering, University of Chittagong', date: '2019, 2022' },
  { role: 'Volunteer', org: 'Bangladesh Physics Olympiad — national and divisional rounds', date: '' },
  { role: 'Volunteer', org: 'APECE Project Competition 2017', date: '2017' },
];

export const training = [
  {
    title: 'Industrial Control Technology on Electrical Engineering & Instrumentation',
    org: 'Ghorashal Training Center, Bangladesh Power Development Board',
    date: 'Oct — Nov 2021',
  },
  {
    title: 'Telephone Communication Systems',
    org: 'Chittagong University Telephone Exchange Center',
    date: 'Mar 2020',
  },
];

// Add online courses / certificates here: { title, issuer, date, link }
export const certifications: { title: string; issuer: string; date: string; link?: string }[] = [];
