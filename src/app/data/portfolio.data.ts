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
  iconClass?: string;
  svg?: string;
  accent: string;
  category?: string;
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
  resumePath: '/assets/Hithen-Jessu_resume.pdf',
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
    period: 'February 2026 – October 2026',
    current: false
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
  { name: 'HTML', iconClass: 'fab fa-html5', accent: '#e34c26', category: 'Frontend' },
  { name: 'CSS3', iconClass: 'fab fa-css3-alt', accent: '#2965f1', category: 'Frontend' },
  { name: 'JavaScript', iconClass: 'fab fa-js', accent: '#f0db4f', category: 'Frontend' },
  { name: 'TypeScript', iconClass: 'fa-solid fa-code', accent: '#3178c6', category: 'Frontend' },
  { name: 'Angular', iconClass: 'fab fa-angular', accent: '#dd0031', category: 'Frameworks' },
  { name: 'React', iconClass: 'fab fa-react', accent: '#61dafb', category: 'Frameworks' },
  { name: 'Bootstrap', iconClass: 'fab fa-bootstrap', accent: '#7952b3', category: 'Frameworks' },
  { name: 'Express.js', iconClass: 'fab fa-node-js', accent: '#3c873a', category: 'Backend' },
  { name: 'WordPress', iconClass: 'fab fa-wordpress', accent: '#21759b', category: 'WordPress' },
  {
    name: 'Divi',
    accent: '#8b5cf6',
    category: 'WordPress',
    svg: `<svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l7 4.5-7 4.5z"/></svg>`
  },
  {
    name: 'Elementor',
    accent: '#92003b',
    category: 'WordPress',
    svg: `<svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M3 3h18v18H3V3zm3 3v12h3V6H6zm4.5 0v12h3V6h-3zm4.5 0v12h3V6h-3z"/></svg>`
  },
  {
    name: 'ChatGPT',
    accent: '#10a37f',
    category: 'AI Tools',
    svg: `<svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.5045 4.5045 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.47 4.47 0 0 1-.5355-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4997 4.4997 0 0 1-6.1408-1.6464zM2.3408 8.7156a4.4658 4.4658 0 0 1 2.3456-1.9727V12.26a.7854.7854 0 0 0 .3927.6813l5.8239 3.3638-2.02 1.1685a.0758.0758 0 0 1-.071 0l-4.8303-2.7913A4.4944 4.4944 0 0 1 2.3408 8.7156zm16.5963 3.8558L13.1038 9.2075l2.02-1.1638a.0758.0758 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6767 8.1042v-5.5163a.79.79 0 0 0-.4113-.6515zm2.1025-3.9316l-.142-.0852-4.7735-2.7582a.7712.7712 0 0 0-.7806 0L9.4956 9.1647V6.8323a.0804.0804 0 0 1 .0332-.0615l4.8303-2.7865a4.4997 4.4997 0 0 1 6.681 4.6657zm-12.0404-5.582a4.4755 4.4755 0 0 1 2.8764 1.0408l-.1419.0804-4.7783 2.7582a.7948.7948 0 0 0-.3927.6813v6.7369l-2.02-1.1686a.071.071 0 0 1-.038-.052V7.5404a4.5045 4.5045 0 0 1 4.4945-4.4944z"/></svg>`
  },
  {
    name: 'Claude',
    accent: '#d97706',
    category: 'AI Tools',
    svg: `<svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M4.04 15.65c-.24-.42-.09-.96.33-1.2l4.82-2.78L4.37 8.89c-.42-.24-.57-.78-.33-1.2.24-.42.78-.57 1.2-.33l4.82 2.78V4.57c0-.48.39-.87.87-.87s.87.39.87.87v5.57l4.82-2.78c.42-.24.96-.09 1.2.33.24.42.09.96-.33 1.2l-4.82 2.78 4.82 2.78c.42.24.57.78.33 1.2-.24.42-.78.57-1.2.33l-4.82-2.78v5.57c0 .48-.39.87-.87.87s-.87-.39-.87-.87v-5.57l-4.82 2.78c-.42.24-.96.09-1.2-.33z"/></svg>`
  },
  {
    name: 'Cursor',
    accent: '#6366f1',
    category: 'AI Tools',
    svg: `<svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9L4 7.5v9L12 21l8-4.5v-9L12 11z"/></svg>`
  },
  {
    name: 'Devin',
    accent: '#059669',
    category: 'AI Tools',
    svg: `<svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M3 4h10a7 7 0 0 1 7 7v2a7 7 0 0 1-7 7H3V4zm5 4v8h5a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3H8z"/></svg>`
  },
  {
    name: 'Codex',
    accent: '#3b82f6',
    category: 'AI Tools',
    svg: `<svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M8 6L2 12l6 6 1.4-1.4L4.8 12l4.6-4.6L8 6zm8 0l-1.4 1.4 4.6 4.6-4.6 4.6L16 18l6-6-6-6zM13.5 4h-3l-3 16h3l3-16z"/></svg>`
  },
  { name: 'SQL', iconClass: 'fa-solid fa-database', accent: '#00a4db', category: 'Backend' }
];

export const projects: ProjectItem[] = [
  {
    title: 'Employee Management System',
    description:
      'A comprehensive Angular web application developed as a college project for managing employee records with features like CRUD operations, search functionality, and responsive design.',
    tags: ['Angular', 'TypeScript', 'Bootstrap', 'College Project'],
    demoNote: 'For a demo, please get in touch.',
    links: [
      { label: 'GitHub', href: 'https://github.com/HithenJ', external: true }
    ]
  },
  {
    title: 'Portfolio Website',
    description:
      'This personal site — a single-page Angular portfolio with a sharp UI, scroll-driven motion, and a data-driven layout.',
    tags: ['Angular', 'CSS3', 'Responsive'],
    links: [
      { label: 'GitHub', href: 'https://github.com/HithenJ', external: true }
    ]
  }
];
