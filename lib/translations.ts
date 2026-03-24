export type Locale = 'en' | 'ru' | 'uz'

export const translations = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      education: 'Education',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      available: 'Open to part-time / remote',
      bio: 'Based in Xorazm, Uzbekistan. I build fast, accessible, and polished web experiences using React and Next.js. 3 years of turning ideas into products.',
      viewWork: 'View Work',
      getInTouch: 'Get in Touch',
      scroll: 'scroll',
    },
    roles: ['Frontend Developer', 'React Specialist', 'Next.js Engineer', 'UI Craftsman'],
    about: {
      title: 'About',
      p1: "I'm a 24-year-old frontend developer from Xorazm, Uzbekistan. 4 years in tech, 3 of them building real products professionally.",
      p2: "What pulled me into frontend was simple — I could build something and immediately see it working. That instant feedback loop matched my creative drive perfectly. I've been here ever since.",
      p3: "Right now I'm building the website for Yangiariq IT-Park while going deeper into advanced frontend architecture. I believe knowing why things work is just as important as knowing how.",
      facts: {
        age: 'Age',
        experience: 'Experience',
        experienceValue: '3 years professional',
        location: 'Location',
        focus: 'Focus',
        status: 'Status',
        statusValue: 'Open to part-time / remote',
        outsideWork: 'Outside work',
        outsideWorkValue: 'Table tennis · CS2 · CoC · Puzzles',
      },
    },
    education: {
      title: 'Education',
      degree: "Bachelor's in Computer Engineering",
      specialization: 'Software Engineer',
      university: 'Tashkent University of Information Technologies named after Muhammad al-Khwarizmi — Urgench Branch',
      short: 'TUIT — Urgench Branch',
      location: 'Urgench, Uzbekistan',
      period: '2019 — 2023',
    },
    experience: {
      title: 'Experience',
      current: 'Current',
      tasks: [
        'Teaching web development to school students — from zero to junior-ready level',
        'Guiding students through real project development, code reviews, and best practices',
        'Preparing students for technical interviews and job placement',
      ],
    },
    skills: {
      title: 'Skills',
      advanced: 'Advanced',
      intermediate: 'Intermediate',
      categories: {
        frontend: 'Frontend',
        stateData: 'State & Data',
        styling: 'Styling',
        tools: 'Tools',
      },
    },
    projects: {
      title: 'Projects',
      status: {
        live: 'Live',
        wip: 'WIP',
        archived: 'Archived',
      },
      items: {
        clinic: {
          description:
            'Full-scale dental clinic management system that eliminated paper-based workflows entirely. Role-based access for Admin, Manager, and Dentist — covering patient records, per-tooth medical history, financial management, billing, file-based analysis archive, and appointment tracking.',
        },
        itpark: {
          description:
            'Official website for Yangiariq IT-Park — a government tech initiative in Uzbekistan. Leading the full frontend architecture and implementation for the public-facing platform.',
        },
      },
    },
    certificates: {
      title: 'Certificates',
      description:
        'A 9-course professional certificate covering React, HTML/CSS, JavaScript, UI/UX design principles, and modern frontend development practices.',
    },
    contact: {
      title: 'Contact',
      heading1: "Let's build",
      heading2: 'something great.',
      subtext:
        'Open to freelance projects, full-time opportunities, or just a good conversation about tech, table tennis, or CS2.',
      email: 'Email',
      form: {
        name: 'Your name',
        emailField: 'Your email',
        message: 'Message',
        send: 'Send Message',
        sending: 'Sending...',
        success: 'Message sent! I\'ll get back to you soon.',
        error: 'Something went wrong. Please try again or reach out directly.',
      },
    },
    footer: {
      rights: 'All rights reserved.',
    },
    errors: {
      tag: 'Something went wrong',
      heading: 'Unexpected error',
      message: 'An unexpected error occurred.',
      retry: 'Try again',
    },
  },

  ru: {
    nav: {
      about: 'Обо мне',
      experience: 'Опыт',
      education: 'Образование',
      skills: 'Навыки',
      projects: 'Проекты',
      contact: 'Контакты',
    },
    hero: {
      available: 'Открыт к part-time / удалённой работе',
      bio: 'Из Хорезма, Узбекистан. Создаю быстрые, доступные и качественные веб-продукты на React и Next.js. 3 года превращаю идеи в готовые решения.',
      viewWork: 'Мои работы',
      getInTouch: 'Связаться',
      scroll: 'листать',
    },
    roles: ['Frontend разработчик', 'React специалист', 'Next.js инженер', 'UI мастер'],
    about: {
      title: 'Обо мне',
      p1: 'Мне 24 года, я frontend разработчик из Хорезма, Узбекистан. 4 года в IT, из них 3 года профессионально создаю реальные продукты.',
      p2: 'Во frontend меня привлекло одно — я могу создать что-то и сразу это увидеть. Эта мгновенная отдача идеально совпала с моим творческим порывом. С тех пор я здесь.',
      p3: 'Сейчас разрабатываю сайт для Yangiariq IT-Park и углубляюсь в продвинутую архитектуру frontend. Считаю, что понимать «почему» так же важно, как знать «как».',
      facts: {
        age: 'Возраст',
        experience: 'Опыт',
        experienceValue: '3 года профессионально',
        location: 'Местоположение',
        focus: 'Специализация',
        status: 'Статус',
        statusValue: 'Открыт к part-time / удалённой работе',
        outsideWork: 'Вне работы',
        outsideWorkValue: 'Настольный теннис · CS2 · CoC · Головоломки',
      },
    },
    education: {
      title: 'Образование',
      degree: 'Бакалавр по направлению «Компьютерная инженерия»',
      specialization: 'Инженер-программист',
      university: 'Ташкентский университет информационных технологий им. Мухаммада ал-Хоразмий — Ургенчский филиал',
      short: 'ТУИТ — Ургенчский филиал',
      location: 'Ургенч, Узбекистан',
      period: '2019 — 2023',
    },
    experience: {
      title: 'Опыт',
      current: 'Текущее место',
      tasks: [
        'Обучаю школьников веб-разработке — с нуля до уровня junior',
        'Сопровождаю студентов через реальные проекты, code review и лучшие практики',
        'Готовлю студентов к техническим собеседованиям и трудоустройству',
      ],
    },
    skills: {
      title: 'Навыки',
      advanced: 'Продвинутый',
      intermediate: 'Средний',
      categories: {
        frontend: 'Frontend',
        stateData: 'Состояние и данные',
        styling: 'Стилизация',
        tools: 'Инструменты',
      },
    },
    projects: {
      title: 'Проекты',
      status: {
        live: 'Запущен',
        wip: 'В разработке',
        archived: 'Архив',
      },
      items: {
        clinic: {
          description:
            'Полноценная система управления стоматологической клиникой, полностью исключившая бумажный документооборот. Ролевой доступ для Администратора, Менеджера и Стоматолога — учёт пациентов, история болезней по каждому зубу, финансы, расчёты, архив анализов и запись на приём.',
        },
        itpark: {
          description:
            'Официальный сайт Yangiariq IT-Park — государственной технологической инициативы в Узбекистане. Руковожу полной frontend архитектурой и реализацией публичной платформы.',
        },
      },
    },
    certificates: {
      title: 'Сертификаты',
      description:
        'Профессиональный сертификат из 9 курсов, охватывающий React, HTML/CSS, JavaScript, принципы UI/UX дизайна и современные практики frontend разработки.',
    },
    contact: {
      title: 'Контакты',
      heading1: 'Давайте создадим',
      heading2: 'что-то крутое.',
      subtext:
        'Открыт к фриланс-проектам, полной занятости или просто хорошему разговору о технологиях, настольном теннисе или CS2.',
      email: 'Эл. почта',
      form: {
        name: 'Ваше имя',
        emailField: 'Ваш email',
        message: 'Сообщение',
        send: 'Отправить',
        sending: 'Отправка...',
        success: 'Сообщение отправлено! Я скоро свяжусь с вами.',
        error: 'Что-то пошло не так. Попробуйте ещё раз или напишите напрямую.',
      },
    },
    footer: {
      rights: 'Все права защищены.',
    },
    errors: {
      tag: 'Что-то пошло не так',
      heading: 'Непредвиденная ошибка',
      message: 'Произошла непредвиденная ошибка.',
      retry: 'Попробовать снова',
    },
  },

  uz: {
    nav: {
      about: 'Men haqimda',
      experience: 'Tajriba',
      education: 'Ta\'lim',
      skills: 'Ko\'nikmalar',
      projects: 'Loyihalar',
      contact: 'Aloqa',
    },
    hero: {
      available: 'Part-time / masofaviy ishga ochiqman',
      bio: 'Xorazm, O\'zbekiston. React va Next.js yordamida tez, qulay va sifatli veb-mahsulotlar yarataman. 3 yil davomida g\'oyalarni tayyor mahsulotga aylantiraman.',
      viewWork: 'Ishlarni ko\'rish',
      getInTouch: 'Bog\'lanish',
      scroll: 'pastga',
    },
    roles: ['Frontend Dasturchi', 'React Mutaxassisi', 'Next.js Muhandisi', 'UI Ustasi'],
    about: {
      title: 'Men haqimda',
      p1: '24 yoshli frontend dasturchiman, Xorazm, O\'zbekistondan. IT sohasida 4 yil, shundan 3 yilini professional darajada haqiqiy mahsulotlar yaratishga bag\'ishladim.',
      p2: 'Frontend ga meni bir narsa jalb qildi — biror narsa yasab, uni darhol ko\'rish imkoniyati. Bu tezkor fikr-mulohaza mening ijodiy ishtiyoqimga aynan mos tushdi. O\'shandan beri shu yo\'ldaman.',
      p3: 'Hozirda Yangiariq IT-Park uchun sayt yaratyapman va frontend arxitekturasini chuqurroq o\'rganyapman. \"Nima uchun\" ni tushunish \"qanday\" ni bilish kabi muhim deb hisoblayman.',
      facts: {
        age: 'Yosh',
        experience: 'Tajriba',
        experienceValue: '3 yil professional',
        location: 'Joylashuv',
        focus: 'Ixtisoslik',
        status: 'Holat',
        statusValue: 'Part-time / masofaviy ishga ochiqman',
        outsideWork: 'Ishdan tashqari',
        outsideWorkValue: 'Stol tennisi · CS2 · CoC · Bosh qotirmalar',
      },
    },
    education: {
      title: 'Ta\'lim',
      degree: "Kompyuter injiniringi yo'nalishi bo'yicha bakalavr",
      specialization: 'Muhandis dasturchi',
      university: "Muhammad al-Xorazmiy nomidagi Toshkent Axborot Texnologiyalari Universiteti — Urganch Filiali",
      short: 'TATU UF',
      location: "Urganch, O'zbekiston",
      period: '2019 — 2023',
    },
    experience: {
      title: 'Tajriba',
      current: 'Hozirgi ish joyi',
      tasks: [
        'Maktab o\'quvchilariga veb dasturlashni o\'rgataman — noldan junior darajasigacha',
        'Talabalarni haqiqiy loyihalar, kod tahlili va eng yaxshi amaliyotlar orqali yo\'naltiraman',
        'Talabalarni texnik intervyu va ishga joylashishga tayyorlayman',
      ],
    },
    skills: {
      title: 'Ko\'nikmalar',
      advanced: 'Yuqori daraja',
      intermediate: 'O\'rta daraja',
      categories: {
        frontend: 'Frontend',
        stateData: 'Holat va ma\'lumotlar',
        styling: 'Stillashtirish',
        tools: 'Vositalar',
      },
    },
    projects: {
      title: 'Loyihalar',
      status: {
        live: 'Faol',
        wip: 'Ishlanmoqda',
        archived: 'Arxiv',
      },
      items: {
        clinic: {
          description:
            'Tish klinikasi uchun to\'liq boshqaruv tizimi — qog\'oz hujjatlarni butunlay bartaraf etdi. Admin, Menejer va Stomatolog uchun rol asosida kirish: bemorlar, har bir tishning kasallik tarixi, moliya, hisob-kitob, tahlil arxivi va qabullarni boshqarish.',
        },
        itpark: {
          description:
            'Yangiariq IT-Park rasmiy sayti — O\'zbekistondagi davlat texnologiya tashabbusi. Ommaviy platformaning to\'liq frontend arxitekturasini yaratyapman.',
        },
      },
    },
    certificates: {
      title: 'Sertifikatlar',
      description:
        '9 ta kursdan iborat professional sertifikat: React, HTML/CSS, JavaScript, UI/UX dizayn tamoyillari va zamonaviy frontend ishlab chiqish amaliyotlari.',
    },
    contact: {
      title: 'Aloqa',
      heading1: 'Keling, birgalikda',
      heading2: 'ajoyib narsa yarataylik.',
      subtext:
        'Frilanс loyihalar, to\'liq bandlik yoki texnologiya, stol tennisi yoki CS2 haqida yaxshi suhbatga ochiqman.',
      email: 'Elektron pochta',
      form: {
        name: 'Ismingiz',
        emailField: 'Emailingiz',
        message: 'Xabar',
        send: 'Yuborish',
        sending: 'Yuborilmoqda...',
        success: 'Xabar yuborildi! Tez orada javob beraman.',
        error: 'Xatolik yuz berdi. Qayta urinib ko\'ring yoki to\'g\'ridan bog\'laning.',
      },
    },
    footer: {
      rights: 'Barcha huquqlar himoyalangan.',
    },
    errors: {
      tag: 'Xatolik yuz berdi',
      heading: 'Kutilmagan xato',
      message: 'Kutilmagan xato yuz berdi.',
      retry: 'Qayta urinish',
    },
  },
} as const

export type Translations = typeof translations.en
