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
      { name: 'SCSS / Sass', level: 'Intermediate' },
      { name: 'CSS Modules', level: 'Intermediate' },
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
  {
    category: 'Backend Basics',
    skills: [
      { name: 'Node.js', level: 'Intermediate' },
      { name: 'PostgreSQL', level: 'Intermediate' },
      { name: 'MongoDB', level: 'Intermediate' },
    ],
  },
]

export interface Project {
  number: string
  name: string
  description: string
  tech: string[]
  link: string
  status: 'Live' | 'WIP' | 'Archived'
}

export const projects: Project[] = [
  {
    number: '01',
    name: '3D Clinic',
    description:
      'Full-scale dental clinic management system with role-based access for Admin, Manager, and Dentist. Covers patient records, medical history, financial management, billing, and appointment tracking.',
    tech: ['React.js', 'React Query', 'TypeScript', 'REST API'],
    link: 'https://3dclinic.uz',
    status: 'Live',
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
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#contact', label: 'Contact' },
]

export const roles = [
  'Frontend Developer',
  'React Specialist',
  'Next.js Engineer',
  'UI Craftsman',
]
