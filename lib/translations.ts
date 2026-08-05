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
      downloadCV: 'Download CV',
      scroll: 'scroll',
    },
    roles: ['Frontend Developer', 'React Specialist', 'Next.js Engineer', 'UI Craftsman'],
    about: {
      title: 'About',
      p1: "I'm a 24-year-old frontend developer from Xorazm, Uzbekistan. 3 years of professional experience building real products.",
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
      results: 'My Results',
      tasks: [
        'Teaching web development to school students — from zero to junior-ready level',
        'Guiding students through real project development, code reviews, and best practices',
        'Preparing students for technical interviews and job placement',
      ],
      freelance: 'Freelance',
      freelanceTasks: [
        'Led the project end-to-end — client negotiations, requirements gathering, technical specification, and delivery planning',
        'Built a full-scale dental clinic management system from scratch, covering patient records, per-tooth medical history, financials, billing, and appointments',
        'Designed and implemented role-based access control for Admin, Manager, and Dentist roles',
        'Delivered a production-ready application currently live at 3dclinic.uz',
      ],
    },
    students: {
      title: 'My Students',
      subtitle:
        'School students I mentor — each one owns a live portfolio site they designed and built themselves.',
      labels: {
        school: 'School',
        grade: 'Grade',
        age: 'Age',
        location: 'Location',
        experience: 'Experience',
        years: 'years',
        stack: 'Stack',
        projects: 'Projects',
        certificates: 'Certificates',
        languages: 'Languages',
        startup: 'Own startup',
        portfolio: 'Visit portfolio',
        it: 'IT',
        language: 'Language',
        showMore: 'More certificates',
        showLess: 'Show less',
        close: 'Close',
        langNames: {
          uz: 'Uzbek',
          ru: 'Russian',
          en: 'English',
        },
      },
      items: {
        ilyosbek: {
          bio: 'Full-stack oriented student — started with HTML and CSS, moved on to JavaScript and server-side logic. Built his personal portfolio from scratch, in three languages, with its own snake game built in.',
          startupDescription:
            'A marketplace connecting people with trusted tradespeople across Uzbekistan — search by trade and region, with booking handled on the site. Built and launched on his own.',
        },
        jorabek: {
          bio: 'Started coding at 14 and has shipped the most of the group — six live sites, each written from scratch and deployed, plus eleven Google certificates covering IT support and UX design. Now moving from layouts into React.',
          startupDescription:
            'A smart queue app for Uzbekistan with separate customer and admin roles and live queue status, built on a Supabase backend. His first real mobile product.',
        },
        alobek: {
          bio: 'Frontend developer with five live projects behind him — from a landing page to a quiz app and a personal finance tracker. Six Coursera certificates covering JavaScript, generative AI, and Git.',
        },
        madina: {
          bio: 'The one student combining two directions at once — frontend and cybersecurity. Writes interfaces, and studies penetration testing and vulnerability assessment alongside them.',
        },
        gulirano: {
          bio: 'Studying IT and cybersecurity, moving toward React and Tailwind. Designed and built her own portfolio, with a certificate in generative AI from Google Cloud.',
        },
        shabnam: {
          bio: 'Frontend developer who thinks in problem–solution–result: her portfolio explains every project that way. Certified in JavaScript and Git, currently working through React.',
        },
        muxlisa: {
          bio: '10th-grade student, born in 2008, working in Uzbek, Russian, and English. Focused on JavaScript and modern layout, with certificates from ITStudy and Coursera.',
        },
      },
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
        lcts: {
          description:
            'Exam platform for language learning centers — a full IELTS-style mock test covering Listening, Reading, Writing, and Speaking. Rotating access codes replace fixed exam days, built-in proctoring keeps the session honest, and the Speaking mock plays generated question audio while recording each answer separately. Centers run students, groups, and level progression from a single admin panel.',
        },
        clinic: {
          description:
            'Full-scale dental clinic management system that eliminated paper-based workflows entirely. Role-based access for Admin, Manager, and Dentist — covering patient records, per-tooth medical history, financial management, billing, file-based analysis archive, and appointment tracking.',
        },
        itpark: {
          description:
            'Official website for Yangiariq IT-Park — a government tech initiative in Uzbekistan. Leading the full frontend architecture and implementation for the public-facing platform.',
        },
        portfolio: {
          description:
            'Personal portfolio built from scratch — custom canvas particle system with spring physics and wave animation, scroll-driven transitions, dark/light mode, multilingual support (EN/RU/UZ), and a Lighthouse performance score of 99 on mobile.',
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
        retry: 'Try again',
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
      downloadCV: 'Скачать CV',
      scroll: 'листать',
    },
    roles: ['Frontend разработчик', 'React специалист', 'Next.js инженер', 'UI мастер'],
    about: {
      title: 'Обо мне',
      p1: 'Мне 24 года, я frontend разработчик из Хорезма, Узбекистан. 3 года профессионального опыта в создании реальных продуктов.',
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
      results: 'Мои результаты',
      tasks: [
        'Обучаю школьников веб-разработке — с нуля до уровня junior',
        'Сопровождаю студентов через реальные проекты, code review и лучшие практики',
        'Готовлю студентов к техническим собеседованиям и трудоустройству',
      ],
      freelance: 'Фриланс',
      freelanceTasks: [
        'Вёл проект от начала до конца — переговоры с клиентом, сбор требований, составление ТЗ и планирование сдачи',
        'Разработал с нуля полноценную систему управления клиникой: учёт пациентов, история болезней по зубам, финансы, расчёты и запись на приём',
        'Реализовал ролевой доступ для Администратора, Менеджера и Стоматолога',
        'Сдал production-ready приложение, работающее на 3dclinic.uz',
      ],
    },
    students: {
      title: 'Мои ученики',
      subtitle:
        'Школьники, которых я обучаю — у каждого свой рабочий сайт-портфолио, спроектированный и написанный им самим.',
      labels: {
        school: 'Школа',
        grade: 'Класс',
        age: 'Возраст',
        location: 'Регион',
        experience: 'Опыт',
        years: 'года',
        stack: 'Стек',
        projects: 'Проекты',
        certificates: 'Сертификаты',
        languages: 'Языки',
        startup: 'Собственный стартап',
        portfolio: 'Открыть портфолио',
        it: 'IT',
        language: 'Язык',
        showMore: 'Ещё сертификаты',
        showLess: 'Свернуть',
        close: 'Закрыть',
        langNames: {
          uz: 'Узбекский',
          ru: 'Русский',
          en: 'Английский',
        },
      },
      items: {
        ilyosbek: {
          bio: 'Ученик с уклоном во full-stack — начал с HTML и CSS, дошёл до JavaScript и серверной логики. Своё портфолио написал с нуля, на трёх языках, со встроенной игрой «Змейка».',
          startupDescription:
            'Площадка, которая связывает людей с проверенными мастерами по всему Узбекистану — поиск по профессии и региону, запись прямо на сайте. Сделал и запустил сам.',
        },
        jorabek: {
          bio: 'Начал программировать в 14 и выпустил больше всех в группе — шесть работающих сайтов, каждый написан с нуля и задеплоен, плюс одиннадцать сертификатов Google по IT-поддержке и UX-дизайну. Сейчас переходит от вёрстки к React.',
          startupDescription:
            'Приложение умной очереди для Узбекистана: отдельные роли клиента и админа, статус очереди в реальном времени, бэкенд на Supabase. Его первый настоящий мобильный продукт.',
        },
        alobek: {
          bio: 'Frontend-разработчик с пятью работающими проектами — от лендинга до приложения-викторины и трекера личных финансов. Шесть сертификатов Coursera: JavaScript, генеративный ИИ и Git.',
        },
        madina: {
          bio: 'Единственная в группе, кто совмещает два направления сразу — frontend и кибербезопасность. Пишет интерфейсы и параллельно изучает пентест и поиск уязвимостей.',
        },
        gulirano: {
          bio: 'Учится по направлению IT и кибербезопасности, движется в сторону React и Tailwind. Своё портфолио спроектировала и написала сама, есть сертификат Google Cloud по генеративному ИИ.',
        },
        shabnam: {
          bio: 'Frontend-разработчик, мыслящий схемой «проблема — решение — результат»: именно так описан каждый проект в её портфолио. Есть сертификаты по JavaScript и Git, сейчас осваивает React.',
        },
        muxlisa: {
          bio: 'Ученица 10 класса, 2008 года рождения, свободно работает на узбекском, русском и английском. Сосредоточена на JavaScript и современной вёрстке, есть сертификаты ITStudy и Coursera.',
        },
      },
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
        lcts: {
          description:
            'Платформа для языковых учебных центров — полноценный пробный экзамен в формате IELTS: Listening, Reading, Writing и Speaking. Вместо фиксированного дня экзамена — сменяющиеся коды доступа, встроенная защита от списывания следит за сессией, а в Speaking система озвучивает вопросы и записывает каждый ответ отдельно. Центры ведут учеников, группы и переход по уровням в одной админ-панели.',
        },
        clinic: {
          description:
            'Полноценная система управления стоматологической клиникой, полностью исключившая бумажный документооборот. Ролевой доступ для Администратора, Менеджера и Стоматолога — учёт пациентов, история болезней по каждому зубу, финансы, расчёты, архив анализов и запись на приём.',
        },
        itpark: {
          description:
            'Официальный сайт Yangiariq IT-Park — государственной технологической инициативы в Узбекистане. Руковожу полной frontend архитектурой и реализацией публичной платформы.',
        },
        portfolio: {
          description:
            'Личное портфолио, созданное с нуля — кастомная система частиц на Canvas с пружинной физикой и волновой анимацией, плавные переходы при скролле, тёмная/светлая тема, поддержка трёх языков (EN/RU/UZ) и Lighthouse 99 на мобильных.',
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
        retry: 'Попробовать снова',
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
      downloadCV: 'CV yuklash',
      scroll: 'pastga',
    },
    roles: ['Frontend Dasturchi', 'React Mutaxassisi', 'Next.js Muhandisi', 'UI Ustasi'],
    about: {
      title: 'Men haqimda',
      p1: '24 yoshli frontend dasturchiman, Xorazm, O\'zbekistondan. 3 yillik professional tajriba, haqiqiy mahsulotlar yaratishga bag\'ishlangan.',
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
      results: 'Natijalarim',
      tasks: [
        'Maktab o\'quvchilariga veb dasturlashni o\'rgataman — noldan junior darajasigacha',
        'Talabalarni haqiqiy loyihalar, kod tahlili va eng yaxshi amaliyotlar orqali yo\'naltiraman',
        'Talabalarni texnik intervyu va ishga joylashishga tayyorlayman',
      ],
      freelance: 'Frilanser',
      freelanceTasks: [
        'Loyihani boshidan oxirigacha boshqardim — mijoz bilan muzokara, talablarni yig\'ish, TZ tuzish va yetkazib berish rejasi',
        'Tish klinikasi uchun to\'liq boshqaruv tizimini noldan yaratdim — bemorlar, tishlar tarixi, moliya, hisob-kitob va qabullar',
        'Admin, Menejer va Stomatolog uchun rol asosida kirish tizimini ishlab chiqdim',
        'Hozir 3dclinic.uz da ishlab turgan production darajasidagi ilovani topshirdim',
      ],
    },
    students: {
      title: 'O\'quvchilarim',
      subtitle:
        'Men o\'qitayotgan maktab o\'quvchilari — har birining o\'zi loyihalab, o\'zi yozgan ishlab turgan portfolio sayti bor.',
      labels: {
        school: 'Maktab',
        grade: 'Sinf',
        age: 'Yoshi',
        location: 'Hudud',
        experience: 'Tajriba',
        years: 'yil',
        stack: 'Texnologiyalar',
        projects: 'Loyihalar',
        certificates: 'Sertifikatlar',
        languages: 'Tillar',
        startup: 'Shaxsiy startapi',
        portfolio: 'Portfolioni ochish',
        it: 'IT',
        language: 'Til',
        showMore: 'Yana sertifikatlar',
        showLess: 'Yopish',
        close: 'Yopish',
        langNames: {
          uz: 'O\'zbek',
          ru: 'Rus',
          en: 'Ingliz',
        },
      },
      items: {
        ilyosbek: {
          bio: 'Full-stack yo\'nalishidagi o\'quvchi — HTML va CSS dan boshlab, JavaScript va server mantiqigacha yetdi. Shaxsiy portfoliosini noldan, uch tilda yozgan, ichiga o\'zi qilgan "Ilon" o\'yinini ham joylagan.',
          startupDescription:
            'O\'zbekiston bo\'ylab ishonchli ustalarni odamlar bilan bog\'laydigan platforma — kasb va viloyat bo\'yicha qidiruv, bron qilish saytning o\'zida. O\'zi qurib, o\'zi ishga tushirgan.',
        },
        jorabek: {
          bio: '14 yoshida kod yozishni boshlagan va guruhda eng ko\'p ish chiqargan — oltita ishlab turgan sayt, har biri noldan yozilib deploy qilingan, ustiga IT support va UX dizayn bo\'yicha o\'n bitta Google sertifikati. Hozir vyorstkadan React ga o\'tyapti.',
          startupDescription:
            'O\'zbekiston uchun aqlli navbat ilovasi: mijoz va admin rollari alohida, navbat holati jonli ko\'rinadi, backend Supabase\'da. Uning birinchi jiddiy mobil mahsuloti.',
        },
        alobek: {
          bio: 'Beshta ishlab turgan loyihasi bor frontend dasturchi — landing sahifadan tortib viktorina ilovasi va shaxsiy moliya hisobigacha. JavaScript, generativ sun\'iy intellekt va Git bo\'yicha oltita Coursera sertifikati.',
        },
        madina: {
          bio: 'Guruhdagi yagona o\'quvchi ikkita yo\'nalishni birga olib boradi — frontend va kiberxavfsizlik. Interfeys yozadi, yonida penetration testing va zaifliklarni aniqlashni o\'rganadi.',
        },
        gulirano: {
          bio: 'IT va kiberxavfsizlik yo\'nalishida o\'qiydi, React va Tailwind tomon ketyapti. Portfoliosini o\'zi loyihalab, o\'zi yozgan; Google Cloud\'dan generativ sun\'iy intellekt sertifikati bor.',
        },
        shabnam: {
          bio: '"Muammo — yechim — natija" tarzida fikrlaydigan frontend dasturchi: portfoliosidagi har bir loyiha aynan shunday tushuntirilgan. JavaScript va Git sertifikatlari bor, hozir React\'ni o\'zlashtiryapti.',
        },
        muxlisa: {
          bio: '10-sinf o\'quvchisi, 2008-yilda tug\'ilgan, o\'zbek, rus va ingliz tillarida erkin ishlaydi. JavaScript va zamonaviy vyorstkaga yo\'naltirilgan; ITStudy va Coursera sertifikatlari bor.',
        },
      },
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
        lcts: {
          description:
            'Til o\'quv markazlari uchun imtihon platformasi — IELTS formatidagi to\'liq mock test: Listening, Reading, Writing va Speaking. Belgilangan imtihon kuni o\'rniga almashib turadigan kirish kodlari, sessiyani kuzatuvchi ichki nazorat tizimi, Speaking bo\'limida esa savollar ovoz bilan beriladi va har bir javob alohida yoziladi. Markazlar o\'quvchilar, guruhlar va daraja bosqichlarini yagona admin paneldan boshqaradi.',
        },
        clinic: {
          description:
            'Tish klinikasi uchun to\'liq boshqaruv tizimi — qog\'oz hujjatlarni butunlay bartaraf etdi. Admin, Menejer va Stomatolog uchun rol asosida kirish: bemorlar, har bir tishning kasallik tarixi, moliya, hisob-kitob, tahlil arxivi va qabullarni boshqarish.',
        },
        itpark: {
          description:
            'Yangiariq IT-Park rasmiy sayti — O\'zbekistondagi davlat texnologiya tashabbusi. Ommaviy platformaning to\'liq frontend arxitekturasini yaratyapman.',
        },
        portfolio: {
          description:
            'Noldan qurilgan shaxsiy portfolio — Canvas\'da o\'z-o\'zimdan yozilgan zarralar tizimi (spring fizikasi va to\'lqin animatsiyasi), silliq scroll effektlari, qorong\'u/yorug\' rejim, ko\'p tillilik (EN/RU/UZ) va mobilda Lighthouse 99 ball.',
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
        retry: 'Qayta urinish',
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
