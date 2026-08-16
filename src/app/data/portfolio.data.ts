export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: 'email' | 'phone' | 'github' | 'linkedin';
}

export interface ExperienceItem {
  title: string;
  institution: string;
  period: string;
  current?: boolean;
}

export interface EducationItem {
  title: string;
  institution: string;
  period: string;
  grade: string;
}

export interface SkillItem {
  name: string;
  iconClass: string;
  accent: string;
}

export interface ProjectLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  demoNote?: string;
  links?: ProjectLink[];
}

export const profile = {
  name: 'Hithen Jessu',
  initials: 'HJ',
  roles: ['Frontend Development', 'Backend Development', 'Angular'],
  tagline:
    'Passionate about crafting beautiful, responsive, and user-friendly web applications using modern technologies like Angular, TypeScript, and Bootstrap.',
  bio: 'MCA graduate with a strong foundation in computer science and a passion for building modern web applications. I enjoy working across the full stack — from designing clean UI to writing reliable backend logic. Always learning, always building.',
  location: 'Hyderabad, India',
  email: 'hithenjessu@gmail.com',
  phone: '7842923783',
  phoneDisplay: '+91 7842923783',
  resumePath: '/assets/Hithen_Jessu_Resume.pdf',
  photo: '/assets/lb.jpg',
  available: true
};

export const socials: SocialLink[] = [
  { id: 'email', label: 'Email', href: `mailto:${profile.email}`, icon: 'email' },
  { id: 'phone', label: 'Phone', href: `tel:${profile.phone}`, icon: 'phone' },
  { id: 'github', label: 'GitHub', href: 'https://github.com/HithenJ', icon: 'github' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/hithen-j/', icon: 'linkedin' }
];

export const experience: ExperienceItem[] = [
  {
    title: 'Web Developer',
    institution: 'CGXperts',
    period: 'February 2025 – Present',
    current: true
  }
];

export const education: EducationItem[] = [
  {
    title: 'Master of Computer Applications',
    institution: 'Nishitha Degree College, Nizamabad',
    period: '2023 – 2025',
    grade: '7.62 GPA'
  },
  {
    title: 'Bachelor of Computer Science',
    institution: 'Vijetha Degree College, Armoor',
    period: '2019 – 2022',
    grade: '7.28 GPA'
  },
  {
    title: 'Intermediate (MPC)',
    institution: 'Kshatriya Junior College, Armoor',
    period: '2017 – 2019',
    grade: '60.3%'
  },
  {
    title: 'High School',
    institution: 'Narendra High School, Armoor',
    period: '2016 – 2017',
    grade: '7.5 GPA'
  }
];

export const skills: SkillItem[] = [
  { name: 'HTML', iconClass: 'fab fa-html5', accent: '#e34c26' },
  { name: 'CSS3', iconClass: 'fab fa-css3-alt', accent: '#2965f1' },
  { name: 'JavaScript', iconClass: 'fab fa-js', accent: '#f0db4f' },
  { name: 'TypeScript', iconClass: 'fa-solid fa-code', accent: '#3178c6' },
  { name: 'Angular', iconClass: 'fab fa-angular', accent: '#dd0031' },
  { name: 'React', iconClass: 'fab fa-react', accent: '#61dafb' },
  { name: 'Bootstrap', iconClass: 'fab fa-bootstrap', accent: '#7952b3' },
  { name: 'Express.js', iconClass: 'fab fa-node-js', accent: '#3c873a' },
  { name: 'WordPress', iconClass: 'fab fa-wordpress', accent: '#21759b' },
  { name: 'SQL', iconClass: 'fa-solid fa-database', accent: '#00a4db' }
];

export const projects: ProjectItem[] = [
  {
    title: 'Employee Management System',
    description:
      'A comprehensive Angular web application developed as a college project for managing employee records with features like CRUD operations, search functionality, and responsive design.',
    tags: ['Angular', 'TypeScript', 'Bootstrap', 'College Project'],
    demoNote: 'For a demo, please get in touch.'
  },
  {
    title: 'Portfolio Website',
    description:
      'This personal site — a single-page Angular portfolio with a sharp dark UI, scroll-driven motion, and a data-driven layout.',
    tags: ['Angular', 'CSS3', 'Responsive']
  }
];
