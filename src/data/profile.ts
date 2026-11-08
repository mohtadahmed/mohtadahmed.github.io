/**
 * ============================================================
 *  ALL PORTFOLIO CONTENT LIVES HERE.
 *  To update the site, edit this file — no layout code needed.
 *
 *  • Empty string links ('') are hidden on the site automatically.
 *    Fill them in when you have the URL and they will appear.
 *  • Images go in /public/images/... and are referenced as
 *    '/images/...'. Placeholders live in /public/images/placeholders.
 *  • Newest items first in every list.
 * ============================================================
 */

export const profile = {
  name: 'Mohtad Ahmed',
  fullName: 'Mohtad Ahmed Saeem',
  headline: 'Software Engineer · EEE Researcher · Educator',
  // Rotating titles in the hero terminal
  roles: [
    'Full Stack Software Developer',
    'IoT & Industrial Automation Engineer',
    'Lecturer, Dept. of CSE',
    'Founder @ UprintBD',
    'Electrical & Electronic Engineer',
  ],
  tagline:
    'I build software that talks to hardware — real-time SCADA dashboards, MQTT-connected devices and cloud platforms that run on actual factory floors.',
  about: [
    'I am a Full Stack Software Developer working with Python (Django) and React, designing scalable platforms for smart automation and industrial systems. With a B.Sc. and M.Sc. in Electrical & Electronic Engineering, I sit comfortably at the boundary between code and circuits — working closely with hardware teams to bridge software with field-level devices and ensure reliable real-world deployments.',
    'At CSI Smart Tech I lead the development lifecycle of real-time SCADA monitoring systems that run in live RMG factory production, consulting directly with enterprise clients to translate physical workflows into software. As the founder of UprintBD, I designed a distributed, cloud-based self-service printing network with IoT kiosks — an idea recognised with the ICT Innovation Grant from the Government of Bangladesh.',
    'I also teach Electrical & Electronic Circuits as a Lecturer in the Department of CSE at IGMIS, and my research explores the convergence of IoT, AI and Embedded Systems for secure, intelligent and human-centred cyber-physical systems.',
  ],
  location: 'South Khulshi, Chittagong, Bangladesh',
  email: 'ahmedmohtad@gmail.com',
  phone: '+880 1521 327804',
  phoneHref: '+8801521327804',
  avatar: '/images/profile.jpg',
  // Put your CV PDF in /public/resume/ and set e.g. '/resume/Mohtad_Ahmed_CV.pdf'
  resumeUrl: '',
  availability: 'Open to research collaborations & interesting projects',
  languages: ['Bangla (Native)', 'English (Professional)'],
  hobbies: ['Photography', 'Reading books', 'Travelling'],
};

export const socials = {
  github: 'https://github.com/mohtadahmed',
  linkedin: 'https://www.linkedin.com/in/mohtadahmed/',
  gitlab: 'https://gitlab.com/mohtadahmed',
  googleScholar: '', // TODO
  researchGate: '', // TODO
  orcid: '', // TODO
  facebook: '', // TODO
  instagram: '', // TODO (great for photography)
  x: '', // TODO
};

export const stats = [
  { value: '4+', label: 'Years building software' },
  { value: '2', label: 'Degrees in EEE' },
  { value: '10+', label: 'Projects shipped' },
  { value: '6', label: 'Leadership roles' },
];

export type Experience = {
  role: string;
  org: string;
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
    role: 'Lecturer — Department of CSE',
    org: 'Institute of Global Management & Information System (IGMIS)',
    orgUrl: '',
    location: 'Chittagong, Bangladesh',
    start: 'Oct 2025',
    end: 'Present',
    kind: 'Teaching',
    bullets: [
      'Teach Electrical & Electronic Circuits using digital and simulation-based teaching methodologies.',
      'Facilitate hands-on laboratory experiments, bridging theoretical concepts with practical application.',
      'Provide academic mentoring and guidance to undergraduate students throughout their studies.',
    ],
  },
  {
    role: 'Full Stack Software Developer',
    org: 'CSI Smart Tech',
    orgUrl: '',
    location: 'Dhaka, Bangladesh',
    start: 'Dec 2024',
    end: 'Present',
    kind: 'Industry',
    bullets: [
      'Lead the software development lifecycle with Agile/Scrum — sprint planning, task delegation and issue tracking via ClickUp and internal ticketing.',
      'Design, deploy and maintain real-time SCADA monitoring systems for RMG factory automation, running in live production.',
      'Consult directly with enterprise clients across multiple factory sites to map end-to-end production workflows into software features.',
      'Architect backend services and real-time Role-Based Access Control (RBAC) dashboards with Python, Django, React and MySQL.',
      'Built and deployed a scalable Water Treatment Plant (WTP) monitoring system with real-time dashboards for operational oversight.',
      'Integrate MQTT-based IoT devices with centralised servers alongside hardware, frontend and factory technical teams; manage DigitalOcean VPS production environments.',
    ],
    tech: ['Python', 'Django', 'React', 'MySQL', 'MQTT', 'DigitalOcean', 'RBAC'],
  },
  {
    role: 'Founder & Lead Developer',
    org: 'UprintBD',
    orgUrl: 'https://uprintbd.com',
    location: 'Chittagong, Bangladesh',
    start: 'Jun 2022',
    end: 'Present',
    kind: 'Startup',
    bullets: [
      'Architected and deployed a distributed, cloud-based automated printing service offering self-service public access without operator intervention.',
      'Built a secure web platform with robust access control and automated service monitoring over cloud infrastructure.',
      'Designed the end-to-end system integrating custom IoT kiosks with a scalable backend — upload, get an OTP, and print on the go.',
    ],
    tech: ['Django', 'MySQL', 'IoT Kiosk', 'Cloud', 'Payments'],
  },
  {
    role: 'Research Associate',
    org: 'Stellar',
    orgUrl: '',
    location: 'Chittagong, Bangladesh',
    start: 'Jan 2021',
    end: 'Dec 2023',
    kind: 'Research',
    bullets: [
      'Researched flaws in existing printing systems across Bangladesh.',
      'Developed kiosk-based automated printing solutions for public access.',
      'Explored Unix-based printing systems with IoT-enabled printer integration.',
    ],
    tech: ['Linux / CUPS', 'IoT', 'Raspberry Pi'],
  },
];

export type Education = {
  degree: string;
  institution: string;
  start: string;
  end: string;
  result: string;
  note?: string;
};

export const education: Education[] = [
  {
    degree: 'M.Sc. in Electrical & Electronic Engineering',
    institution: 'University of Chittagong',
    start: 'Sep 2022',
    end: 'May 2024',
    result: 'CGPA 3.03 / 4.00',
    note: "Thesis: Alzheimer's Disease Detection & Classification using CNN · Masters' Honorarium Scholarship",
  },
  {
    degree: 'B.Sc. in Electrical & Electronic Engineering',
    institution: 'University of Chittagong',
    start: 'Jan 2017',
    end: 'Feb 2021',
    result: 'CGPA 3.04 / 4.00',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Chittagong College, Chittagong',
    start: '',
    end: '2015',
    result: 'GPA 5.00 / 5.00',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Nasirabad Govt. High School, Chittagong',
    start: '',
    end: '2013',
    result: 'GPA 5.00 / 5.00',
  },
];

export type ProjectCategory = 'Industrial IoT' | 'Web' | 'AI / ML' | 'Mobile' | 'Research';

export type Project = {
  title: string;
  category: ProjectCategory;
  period?: string;
  summary: string;
  highlights: string[];
  tech: string[];
  image: string;
  featured?: boolean;
  links: { live?: string; github?: string; caseStudy?: string; paper?: string };
};

export const projects: Project[] = [
  {
    title: 'UprintBD — Distributed Cloud Printing Service',
    category: 'Industrial IoT',
    period: '2022 — Present',
    summary:
      'A secure cloud printing network with self-service IoT kiosks: upload a document from anywhere, receive an OTP, and print at the nearest kiosk. Funded by the ICT Innovation Grant.',
    highlights: [
      'Web panel to upload and customise printable files',
      'Manual and automatic payment system',
      'Admin & outlet dashboards for monitoring',
      'Print on the go: Upload → OTP → Print',
    ],
    tech: ['Django', 'MySQL', 'Bootstrap', 'IoT Kiosk', 'Linux'],
    image: '/images/placeholders/project-1.svg',
    featured: true,
    links: { live: 'https://uprintbd.com', github: '', caseStudy: '' },
  },
  {
    title: 'Real-time SCADA Monitoring for RMG Factories',
    category: 'Industrial IoT',
    period: '2024 — Present',
    summary:
      'Production SCADA dashboards for ready-made-garment factory automation — live machine data over MQTT, role-based access and management reporting across multiple sites.',
    highlights: [
      'Real-time data flow from field devices to dashboards',
      'RBAC dashboards for management and floor teams',
      'Running in live production environments',
    ],
    tech: ['Django', 'React', 'MySQL', 'MQTT', 'DigitalOcean'],
    image: '/images/placeholders/project-2.svg',
    featured: true,
    links: { live: '', caseStudy: '' },
  },
  {
    title: 'Water Treatment Plant (WTP) Monitoring System',
    category: 'Industrial IoT',
    period: '2025',
    summary:
      'A scalable monitoring platform for factory water treatment plants with real-time dashboards that improve operational oversight.',
    highlights: ['Live sensor dashboards', 'Scalable backend architecture', 'Operational alerts & oversight'],
    tech: ['Django', 'React', 'MQTT', 'MySQL'],
    image: '/images/placeholders/project-3.svg',
    featured: true,
    links: { live: '', caseStudy: '' },
  },
  {
    title: 'KrishiBondhu — AI Farming Assistant for Bangladesh',
    category: 'Mobile',
    summary:
      'A context-aware Android app for farmers with a hybrid online/offline engine — real-time guidance via the Google Gemini API, falling back to a 12-month local database when the network drops.',
    highlights: [
      'GPS + calendar mapping for region-specific crop, disease and irrigation guidance',
      'Material 3 UI with infographic dashboards and success stories',
      'Asynchronous one-click refresh to optimise API calls',
    ],
    tech: ['Android', 'Gemini API', 'Material 3', 'Offline-first'],
    image: '/images/placeholders/project-4.svg',
    featured: true,
    links: { github: '', live: '' },
  },
  {
    title: 'Ignite — Academic Result Management System',
    category: 'Web',
    summary:
      'A digital result management system for the EEE Department, University of Chittagong, automating grading logic and administrative reporting.',
    highlights: [
      'Reduced manual errors, delays and data loss in result processing',
      'Complex relational schema with multi-tier user permissions',
      'Automated grading and reporting',
    ],
    tech: ['Python', 'Django', 'JavaScript', 'jQuery', 'Bootstrap', 'MySQL'],
    image: '/images/placeholders/project-5.svg',
    featured: true,
    links: { github: '', live: '' },
  },
  {
    title: "Alzheimer's Disease Detection & Classification using CNN",
    category: 'AI / ML',
    period: 'Jan 2022 — Feb 2024',
    summary:
      'M.Sc. thesis: a convolutional neural network for detecting and classifying Alzheimer’s disease from MRI scans.',
    highlights: [
      'Curated structured MRI datasets for robust training and evaluation',
      'Developed and optimised a CNN-based classifier',
      'Improved diagnostic efficiency via preprocessing and model optimisation',
    ],
    tech: ['Python', 'TensorFlow', 'CNN', 'Google Colab', 'Kaggle'],
    image: '/images/placeholders/project-6.svg',
    featured: true,
    links: { paper: '', github: '' },
  },
  {
    title: 'Blockchain-based Food Supply Chain',
    category: 'Research',
    period: 'Oct 2019',
    summary: 'Poster research on traceable food supply chains using blockchain — 2nd Runner-Up at IEEE Day 2019.',
    highlights: ['Supply-chain traceability model', 'Presented at IEEE Day 2019'],
    tech: ['Blockchain', 'Research'],
    image: '/images/placeholders/project-2.svg',
    links: { paper: '' },
  },
  {
    title: 'iExplain — EdTech Course Platform',
    category: 'Web',
    summary: 'A simple ed-tech course-selling platform.',
    highlights: [],
    tech: ['HTML', 'CSS', 'Bootstrap'],
    image: '/images/placeholders/project-3.svg',
    links: { github: '', live: '' },
  },
  {
    title: 'Tick Your Pick',
    category: 'Web',
    summary: 'Pick your best five football players — an interactive team-builder.',
    highlights: [],
    tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    image: '/images/placeholders/project-4.svg',
    links: { github: '', live: '' },
  },
  {
    title: 'Info House — News Portal',
    category: 'Web',
    summary: 'A news portal powered by an open news API.',
    highlights: [],
    tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'REST API'],
    image: '/images/placeholders/project-5.svg',
    links: { github: '', live: '' },
  },
];

export const research = {
  statement:
    'Exploring the convergence of IoT, AI and Embedded Systems to develop secure, intelligent and human-centred cyber-physical systems for automation and smart environments.',
  areas: [
    { title: 'Industrial IoT & SCADA', text: 'MQTT-based telemetry, real-time monitoring and control for factories.' },
    { title: 'Machine Learning', text: 'Deep learning for medical imaging and intelligent decision systems.' },
    { title: 'Embedded Systems', text: 'Microcontroller and SBC-based devices bridging sensors to the cloud.' },
    { title: 'Cyber-Physical Security', text: 'Access control and secure architectures for connected devices.' },
  ],
  // Add papers here as you publish. Empty list shows a “coming soon” note.
  publications: [] as { title: string; venue: string; year: string; authors: string; link?: string }[],
};

export type SkillGroup = { title: string; domain: 'software' | 'hardware' | 'tools'; items: string[] };

export const skills: SkillGroup[] = [
  { title: 'Languages', domain: 'software', items: ['Python', 'JavaScript', 'C', 'SQL', 'MATLAB', 'LaTeX'] },
  {
    title: 'Frameworks & Libraries',
    domain: 'software',
    items: ['Django', 'Django REST Framework', 'Flask', 'React.js', 'Tailwind CSS', 'Bootstrap', 'CoreUI Pro', 'jQuery'],
  },
  { title: 'Databases', domain: 'software', items: ['PostgreSQL', 'MySQL', 'SQLite'] },
  {
    title: 'Cloud & DevOps',
    domain: 'software',
    items: ['AWS', 'DigitalOcean VPS', 'Google Cloud', 'Nginx', 'Git', 'GitHub Actions', 'CI/CD', 'Linux (Ubuntu, Debian, Kali)'],
  },
  {
    title: 'Architecture',
    domain: 'software',
    items: ['System Architecture', 'RESTful APIs', 'ERP Logic', 'RBAC', 'MQTT IoT Protocols', 'Real-time Systems'],
  },
  { title: 'Microcontrollers & IoT', domain: 'hardware', items: ['Raspberry Pi', 'Arduino', 'ESP32 / ESP8266', 'MQTT', 'IoT Kiosks'] },
  { title: 'Electrical Design & Simulation', domain: 'hardware', items: ['PSpice', 'LTspice', 'DipTrace', 'Cisco Packet Tracer', 'MATLAB'] },
  { title: 'AI / Data', domain: 'tools', items: ['TensorFlow', 'CNN', 'Google Colab', 'Kaggle', 'Gemini API'] },
  { title: 'Design', domain: 'tools', items: ['Figma', 'Adobe XD', 'Illustrator', 'Photoshop'] },
  { title: 'Project Management', domain: 'tools', items: ['Agile', 'Scrum', 'ClickUp', 'Sprint Planning', 'Client Consultation'] },
];

export type AwardItem = { title: string; org: string; date: string; detail?: string; kind: 'grant' | 'award' | 'scholarship' | 'rank' };

export const awards: AwardItem[] = [
  {
    title: 'ICT Innovation Grant',
    org: 'Ministry of ICT, Government of Bangladesh',
    date: 'Jul 2023',
    detail: 'Awarded for “A Distributed Cloud Printing Service” — the idea behind UprintBD.',
    kind: 'grant',
  },
  {
    title: 'Champion — Project Showcasing',
    org: 'EEE Fest 2023, Dept. of EEE, University of Chittagong',
    date: 'Feb 2023',
    kind: 'award',
  },
  {
    title: 'Runner-Up — Startup Idea Competition',
    org: 'EEE Fest 2023, Dept. of EEE, University of Chittagong',
    date: 'Feb 2023',
    kind: 'award',
  },
  {
    title: "Masters' Honorarium Scholarship",
    org: 'University of Chittagong',
    date: 'Mar 2021',
    detail: 'Scholarship with stipend.',
    kind: 'scholarship',
  },
  {
    title: '2nd Runner-Up — Poster Presentation',
    org: 'IEEE Day 2019, IEEE Student Branch, University of Chittagong',
    date: 'Oct 2019',
    detail: 'Title: Blockchain based Food Supply Chain.',
    kind: 'award',
  },
  {
    title: '62nd — Open Category, Online Physics Brawl',
    org: 'Faculty of Mathematics and Physics, Charles University',
    date: '', // TODO: add year
    kind: 'rank',
  },
];

export type Leadership = { role: string; org: string; start: string; end: string; logo?: string; detail?: string };

export const leadership: Leadership[] = [
  {
    role: 'Chairperson',
    org: 'IEEE Student Branch, University of Chittagong',
    start: 'Mar 2021',
    end: 'Jun 2022',
    logo: '/images/logos/ieee-sb-cu.jpg',
  },
  {
    role: 'Ambassador',
    org: 'IEEEXtreme 15.0',
    start: 'Mar 2021',
    end: 'Oct 2021',
  },
  {
    role: 'General Secretary',
    org: 'Chittagong University Robotics & Innovation Club (CURI)',
    start: 'Apr 2019',
    end: 'Nov 2021',
    logo: '/images/logos/curi.png',
  },
  {
    role: 'Regional Coordinator',
    org: 'Bangladesh Olympiad on Astronomy and Astrophysics',
    start: 'Sep 2019',
    end: 'Feb 2022',
    logo: '/images/logos/bdoaa.png',
  },
  {
    role: 'Academic Team Member',
    org: 'Bangladesh National Physics Olympiad',
    start: 'Mar 2019',
    end: 'Feb 2024',
    logo: '/images/logos/bdpho.png',
  },
  {
    role: 'Working Committee Member',
    org: 'Dream Foundation, Bangladesh',
    start: 'Oct 2018',
    end: 'Sep 2019',
    logo: '/images/logos/dream-foundation.jpg',
  },
];

export const volunteering = [
  { role: 'Team Leader & Organizer', org: 'Engineering Day 2019 & 2022, Faculty of Engineering, University of Chittagong', date: '2019, 2022' },
  { role: 'Volunteer', org: 'Bangladesh Physics Olympiad — National & Chittagong Divisional Rounds', date: '' },
  { role: 'Volunteer', org: 'APECE Project Competition 2017, Dept. of EEE, University of Chittagong', date: '2017' },
];

export const training = [
  {
    title: 'Industrial Control Technology on Instrumentation & Electrical Engineering',
    org: 'Ghorashal Training Center, Bangladesh Power Development Board',
    date: 'Oct 2021 — Nov 2021',
    detail: 'Power plant control systems and operational procedures.',
  },
  {
    title: 'Telephone Communication System',
    org: 'Chittagong University Telephone Exchange Center',
    date: 'Mar 2020',
    detail: 'Hands-on exposure to telephone exchange operations, with a technical report.',
  },
];

// Add online courses / certificates here: { title, issuer, date, link }
export const certifications: { title: string; issuer: string; date: string; link?: string }[] = [];
