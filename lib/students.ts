export interface StudentCertificate {
  name: string
  issuer: string
  year?: string
  link?: string
  type: 'it' | 'language'
}

export interface StudentProject {
  name: string
  url: string
  tech: string[]
}

export interface StudentStartup {
  name: string
  url: string
  tech?: string[]
}

export interface Student {
  /** translation key under `students.items` */
  id: string
  number: string
  name: string
  age?: number
  school?: string
  /** school year, e.g. 9 */
  grade?: number
  location?: string
  years?: number
  /** ISO-ish codes resolved through `students.labels.langNames` */
  languages?: Array<'uz' | 'ru' | 'en'>
  portfolio: string
  stack: string[]
  projects?: StudentProject[]
  certificates: StudentCertificate[]
  startup?: StudentStartup
}

export const students: Student[] = [
  {
    id: 'ilyosbek',
    number: '01',
    name: 'Bahromov Ilyosbek',
    age: 16,
    school: '№3',
    grade: 9,
    years: 2,
    portfolio: 'https://islomovic.uz',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Sass', 'Backend', 'Git & GitHub'],
    certificates: [
      {
        name: 'Advanced Git and GitHub Features',
        issuer: 'Packt · Coursera',
        year: '2025',
        link: 'https://coursera.org/share/0aa24d81a933158a4e3676298c16b757',
        type: 'it',
      },
      {
        name: 'Intermediate Git and GitHub Workflow',
        issuer: 'Packt · Coursera',
        year: '2025',
        link: 'https://coursera.org/share/dfa2fa51fa851a0ad9eac2902091b553',
        type: 'it',
      },
    ],
    startup: {
      name: 'Usta Topamiz',
      url: 'https://findmaster.uz',
    },
  },
  {
    id: 'jorabek',
    number: '02',
    name: 'Abdullayev Jo\'rabek',
    age: 16,
    school: '№3',
    grade: 9,
    years: 2,
    portfolio: 'https://mansurbekovich.uz',
    stack: ['HTML', 'CSS', 'JavaScript', 'SCSS', 'Tailwind', 'React', 'Git', 'Figma'],
    projects: [
      { name: 'First Project', url: 'https://first-project-8flm.vercel.app/', tech: ['HTML', 'CSS'] },
      { name: 'Boldo', url: 'https://boldo-bice.vercel.app/', tech: ['HTML', 'CSS'] },
      { name: 'Monito', url: 'https://monito-ten.vercel.app/', tech: ['HTML', 'CSS'] },
      { name: 'Blog Title', url: 'https://blog-title-three.vercel.app/', tech: ['HTML', 'CSS'] },
      { name: 'Designer', url: 'https://designer-nine-beryl.vercel.app/', tech: ['HTML', 'CSS'] },
      {
        name: 'Liquid Glass',
        url: 'https://liquid-glass-kappa.vercel.app/',
        tech: ['HTML', 'CSS', 'JavaScript'],
      },
    ],
    certificates: [
      {
        name: 'Google IT Support — Specialization',
        issuer: 'Google · Coursera',
        link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/PN7QUSXFVRCX',
        type: 'it',
      },
      {
        name: 'Google UX Design — Specialization',
        issuer: 'Google · Coursera',
        link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/RH8HIBUAZWJE',
        type: 'it',
      },
      {
        name: 'Technical Support Fundamentals',
        issuer: 'Google · Coursera',
        link: 'https://www.coursera.org/account/accomplishments/certificate/AM508LP0ALTB',
        type: 'it',
      },
      {
        name: 'The Bits and Bytes of Computer Networking',
        issuer: 'Google · Coursera',
        link: 'https://www.coursera.org/account/accomplishments/certificate/V7DHHCYKN3LQ',
        type: 'it',
      },
      {
        name: 'Operating Systems and You',
        issuer: 'Google · Coursera',
        link: 'https://www.coursera.org/account/accomplishments/certificate/7TSFQZJ6SSXI',
        type: 'it',
      },
      {
        name: 'System Administration and IT Infrastructure',
        issuer: 'Google · Coursera',
        link: 'https://www.coursera.org/account/accomplishments/certificate/UT5W324DUAGG',
        type: 'it',
      },
      {
        name: 'IT Security: Defense Against Digital Dark Arts',
        issuer: 'Google · Coursera',
        link: 'https://www.coursera.org/account/accomplishments/certificate/V0FT3ONWY4LL',
        type: 'it',
      },
      {
        name: 'Foundations of User Experience Design',
        issuer: 'Google · Coursera',
        link: 'https://www.coursera.org/account/accomplishments/certificate/0F3QQQ6FWSLO',
        type: 'it',
      },
      {
        name: 'Start the UX Design Process',
        issuer: 'Google · Coursera',
        link: 'https://www.coursera.org/account/accomplishments/certificate/1LPPSTWI8QQQ',
        type: 'it',
      },
      {
        name: 'Build Wireframes and Low-Fidelity Prototypes',
        issuer: 'Google · Coursera',
        link: 'https://www.coursera.org/account/accomplishments/certificate/2IR8825PSDSM',
        type: 'it',
      },
      {
        name: 'Conduct UX Research and Test Early Concepts',
        issuer: 'Google · Coursera',
        link: 'https://www.coursera.org/account/accomplishments/certificate/WXM5IWE9PVRA',
        type: 'it',
      },
    ],
    startup: {
      name: 'Navbat',
      url: 'https://github.com/mansurbekov1c/smart_queue',
      tech: ['React Native', 'Expo', 'Supabase'],
    },
  },
  {
    id: 'alobek',
    number: '03',
    name: 'Olimboyev A\'lobek',
    age: 16,
    school: '№3',
    grade: 9,
    years: 2,
    portfolio: 'https://oybekovic.uz',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'SCSS / Sass', 'Git & GitHub'],
    projects: [
      { name: 'Hisobim', url: 'https://hisobim-website.vercel.app/', tech: ['HTML', 'CSS', 'JavaScript'] },
      { name: 'DAK Quiz', url: 'https://dak-quiz.vercel.app/', tech: ['HTML', 'CSS', 'JavaScript'] },
      { name: 'TechNova', url: 'https://technova-77.vercel.app/', tech: ['HTML', 'CSS', 'JavaScript'] },
      { name: 'Astro Gaming', url: 'https://astro-gaming-project.vercel.app/', tech: ['HTML', 'Tailwind', 'JavaScript'] },
      { name: 'Nature Conservation', url: 'https://nature-conservation.vercel.app/', tech: ['HTML', 'CSS'] },
    ],
    certificates: [
      {
        name: 'JavaScript for Beginners',
        issuer: 'UC Davis · Coursera',
        link: 'https://www.coursera.org/account/accomplishments/certificate/CV4LJU8FZYXO',
        type: 'it',
      },
      {
        name: 'Introduction to Generative AI',
        issuer: 'Google Cloud · Coursera',
        link: 'https://www.coursera.org/account/accomplishments/certificate/5ZNVQXPFEJGR',
        type: 'it',
      },
      {
        name: 'Build AI Apps with ChatGPT, Dall-E, and GPT-4',
        issuer: 'Scrimba · Coursera',
        link: 'https://www.coursera.org/account/accomplishments/certificate/MRWTW2IWI571',
        type: 'it',
      },
      {
        name: 'Advanced Git and GitHub Features',
        issuer: 'Packt · Coursera',
        link: 'https://www.coursera.org/account/accomplishments/certificate/PKVYRTGNWOW0',
        type: 'it',
      },
      {
        name: 'Intermediate Git and GitHub Workflow',
        issuer: 'Packt · Coursera',
        link: 'https://www.coursera.org/account/accomplishments/certificate/D2DP196LC54G',
        type: 'it',
      },
      {
        name: 'Small Business Marketing Using YouTube',
        issuer: 'Coursera',
        link: 'https://www.coursera.org/account/accomplishments/certificate/H3VT8X9QBKMK',
        type: 'it',
      },
    ],
  },
  {
    id: 'madina',
    number: '04',
    name: 'Qalandarova Madina',
    age: 16,
    school: '№3',
    grade: 9,
    years: 2,
    portfolio: 'https://qalandarova.uz',
    stack: ['HTML & CSS', 'JavaScript', 'Cybersecurity', 'Pen Testing', 'Backend basics', 'Git'],
    certificates: [
      {
        name: 'Build AI Apps with ChatGPT, Dall-E, and GPT-4',
        issuer: 'Scrimba · Coursera',
        year: '2026',
        link: 'https://coursera.org/share/568db34194c9e59d3f9b656fa72e5603',
        type: 'it',
      },
      {
        name: 'Introduction to Generative AI',
        issuer: 'Google Cloud · Coursera',
        year: '2026',
        link: 'https://coursera.org/share/67780344e5be68663fb6af27494c2b43',
        type: 'it',
      },
    ],
  },
  {
    id: 'gulirano',
    number: '05',
    name: 'Jumanazarova Gulira\'no',
    age: 16,
    school: '№3',
    grade: 9,
    years: 2,
    portfolio: 'https://jumanazarova.uz',
    stack: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Git & GitHub', 'Figma'],
    certificates: [
      {
        name: 'Introduction to Generative AI',
        issuer: 'Google Cloud · Coursera',
        year: '2026',
        link: 'https://coursera.org/share/5aebfc0425f5363b16ea9ebe2100d8bc',
        type: 'it',
      },
    ],
  },
  {
    id: 'shabnam',
    number: '06',
    name: 'Matqurbonova Shabnam',
    age: 16,
    school: '№3',
    grade: 9,
    years: 2,
    portfolio: 'https://matqurbonova.uz',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Responsive Design', 'Figma'],
    certificates: [
      {
        name: 'JavaScript',
        issuer: 'Coursera',
        link: 'https://coursera.org/verify/specialization/TXWKPC82219J',
        type: 'it',
      },
      {
        name: 'Git & GitHub',
        issuer: 'Coursera',
        link: 'https://coursera.org/verify/specialization/EUHE9UY8IGJW',
        type: 'it',
      },
    ],
  },
  {
    id: 'muxlisa',
    number: '07',
    name: 'Sapaeva Muxlisa',
    age: 17,
    school: '№36',
    grade: 10,
    languages: ['uz', 'ru', 'en'],
    portfolio: 'https://sapayeva.uz',
    stack: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'Git'],
    certificates: [
      {
        name: 'IT Study — course certificate',
        issuer: 'ITStudy',
        link: 'https://itstudy.uz/certificate?id=659d4a9f-d755-4615-08ab-08dd73ce8361',
        type: 'it',
      },
      {
        name: 'Coursera — course certificate',
        issuer: 'Coursera',
        link: 'https://www.coursera.org/account/accomplishments/certificate/1SCSUGM66PT0',
        type: 'it',
      },
    ],
  },
]
