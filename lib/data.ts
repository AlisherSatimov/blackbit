export type SkillLevel = 'Advanced' | 'Intermediate'

export interface Skill {
  name: string
  level: SkillLevel
}

export interface SkillGroup {
  category: string
  skills: Skill[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js', level: 'Advanced' },
      { name: 'Next.js', level: 'Advanced' },
      { name: 'TypeScript', level: 'Advanced' },
      { name: 'JavaScript', level: 'Advanced' },
      { name: 'HTML5 / CSS3', level: 'Advanced' },
    ],
  },
  {
    category: 'State & Data',
    skills: [
      { name: 'Redux', level: 'Intermediate' },
      { name: 'Zustand', level: 'Intermediate' },
      { name: 'React Query', level: 'Intermediate' },
    ],
  },
  {
    category: 'Styling',
    skills: [
      { name: 'Tailwind CSS', level: 'Advanced' },
      { name: 'SCSS / Sass', level: 'Advanced' },
      { name: 'CSS Modules', level: 'Advanced' },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', level: 'Advanced' },
      { name: 'Docker', level: 'Intermediate' },
      { name: 'Figma', level: 'Intermediate' },
    ],
  },
]

export interface Experience {
  company: string
  role: string
  period: string
  current: boolean
  tasks: string[]
  tech: string[]
}

export const experiences: Experience[] = [
  {
    company: 'Raqamli Ta\'limni Rivojlantirish Markazi',
    role: 'IT Mentor & Frontend Developer',
    period: 'Sep 2024 — Present',
    current: true,
    tasks: [
      'Teaching web development to school students — from zero to junior-ready level',
      'Guiding students through real project development, code reviews, and best practices',
      'Preparing students for technical interviews and job placement',
    ],
    tech: ['React.js', 'JavaScript', 'HTML/CSS', 'Git'],
  },
  {
    company: 'Freelance',
    role: 'Frontend Developer & Project Manager — 3D Clinic',
    period: 'Apr 2025 — Jul 2025',
    current: false,
    tasks: [
      'Built a full-scale dental clinic management system from scratch for a paying client',
      'Designed role-based access control for Admin, Manager, and Dentist — covering patient records, per-tooth medical history, financials, billing, and appointments',
      'Delivered a production-ready application currently live at 3dclinic.uz',
    ],
    tech: ['React.js', 'TypeScript', 'React Query', 'REST API'],
  },
]

export interface Project {
  number: string
  name: string
  description: string
  tech: string[]
  link?: string
  status: 'Live' | 'WIP' | 'Archived'
  image?: string
}

export const projects: Project[] = [
  {
    number: '01',
    name: '3D Clinic',
    description:
      'Full-scale dental clinic management system that eliminated paper-based workflows entirely. Role-based access for Admin, Manager, and Dentist — covering patient records, per-tooth medical history, financial management, billing, file-based analysis archive, and appointment tracking.',
    tech: ['React.js', 'React Query', 'TypeScript', 'REST API'],
    link: 'https://3dclinic.uz',
    status: 'Live',
    image: '/3dclinic-preview.jpg',
  },
  {
    number: '02',
    name: 'Yangiariq IT-Park',
    description:
      'Official website for Yangiariq IT-Park — a government tech initiative in Uzbekistan. Leading the full frontend architecture and implementation for the public-facing platform.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    status: 'WIP',
  },
  {
    number: '03',
    name: 'blackbit.dev',
    description:
      'Personal portfolio built from scratch — custom canvas particle system with spring physics and wave animation, scroll-driven transitions, dark/light mode, multilingual support (EN/RU/UZ), and a Lighthouse performance score of 99 on mobile.',
    tech: ['Next.js', 'TypeScript', 'Framer Motion', 'Canvas API', 'Tailwind CSS'],
    link: 'https://blackbit.dev',
    status: 'Live',
    image: '/blackbit-preview.png',
  },
]

export interface Certificate {
  name: string
  issuer: string
  platform: string
  year: string
  link: string
  description: string
}

export const certificates: Certificate[] = [
  {
    name: 'Meta Frontend Developer Professional Certificate',
    issuer: 'Meta',
    platform: 'Coursera',
    year: '2024',
    link: 'https://www.coursera.org/account/accomplishments/specialization/XV0YWQQY105M',
    description:
      'A 9-course professional certificate covering React, HTML/CSS, JavaScript, UI/UX design principles, and modern frontend development practices.',
  },
]

export interface ContactLink {
  label: string
  handle: string
  href: string
  external: boolean
}

export const contactLinks: ContactLink[] = [
  {
    label: 'GitHub',
    handle: '@AlisherSatimov',
    href: 'https://github.com/AlisherSatimov',
    external: true,
  },
  {
    label: 'LinkedIn',
    handle: 'alishersatimov',
    href: 'https://www.linkedin.com/in/alishersatimov/',
    external: true,
  },
  {
    label: 'Telegram',
    handle: '@Alisher_Satimov',
    href: 'https://t.me/Alisher_Satimov',
    external: true,
  },
]

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export const roles = [
  'Frontend Developer',
  'React Specialist',
  'Next.js Engineer',
  'UI Craftsman',
]
