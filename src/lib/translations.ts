export type Lang = 'en' | 'de'

export type ProjectItem = Dictionary['projects']['items'][number]
export type ProjectLabels = Dictionary['projects']['labels']

export interface Dictionary {
  nav: {
    about: string
    skills: string
    experience: string
    projects: string
    contact: string
    resume: string
  }
  hero: {
    greeting: string
    name: string
    role: string
    tagline: string
    ctaPrimary: string
    ctaSecondary: string
    scroll: string
  }
  about: {
    title: string
    kicker: string
    paragraphs: string[]
    factsTitle: string
    facts: { label: string; value: string }[]
  }
  skills: {
    title: string
    kicker: string
    subtitle: string
    groups: { title: string; items: string[] }[]
  }
  experience: {
    title: string
    kicker: string
    items: {
      role: string
      org: string
      period: string
      description: string
      tags: string[]
    }[]
  }
  projects: {
    title: string
    kicker: string
    subtitle: string
    items: {
      title: string
      description: string
      tags: string[]
      status: string
      live?: boolean
      url?: string
      image?: string
      images?: string[]
      details?: {
        overview: string
        company: string
        location: string
        year: string
        role: string
        features: string[]
      }
    }[]
    viewCode: string
    liveDemo: string
    comingSoon: string
    detailsCta: string
    labels: {
      company: string
      location: string
      year: string
      role: string
      features: string
      visit: string
      close: string
    }
  }
  contact: {
    title: string
    kicker: string
    subtitle: string
    emailLabel: string
    githubLabel: string
    linkedinLabel: string
    copy: string
    copied: string
  }
  footer: {
    rights: string
    builtWith: string
  }
}

export const translations: Record<Lang, Dictionary> = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
      resume: 'Resume',
    },
    hero: {
      greeting: 'Hi, I am',
      name: 'Çlirim Sopa',
      role: 'Software Developer',
      tagline:
        'I build web and mobile applications with clean code, sustainable architecture, and a focus on user experience.',
      ctaPrimary: 'View projects',
      ctaSecondary: 'Get in touch',
      scroll: 'Scroll down',
    },
    about: {
      title: 'About me',
      kicker: 'Who I am',
      paragraphs: [
        "I'm a Software Developer with a degree in Computer Science and Engineering. I mainly work on full-stack development — from backend APIs to user interfaces, across web and mobile.",
        'Alongside development, I also have teaching experience — for 1 year I taught introductory programming to young students at Scantech Academy, helping them take their first steps into code.',
        "I especially care about building products that are sustainable, readable, and solve real problems — not just code that works, but code that makes sense.",
      ],
      factsTitle: 'At a glance',
      facts: [
        { label: 'Degree', value: 'Computer Science & Engineering' },
        { label: 'Focus', value: 'Full-Stack Development' },
        { label: 'Teaching', value: '1 year — Scantech Academy' },
        { label: 'Based in', value: 'Kosovo & Germany' },
      ],
    },
    skills: {
      title: 'Skills & Technologies',
      kicker: 'What I use',
      subtitle: 'The tools and technologies I work with every day to build sustainable products.',
      groups: [
        { title: 'Backend', items: ['C# / .NET', 'ASP.NET Core', 'REST API', 'SQL Server', 'Entity Framework'] },
        { title: 'Frontend', items: ['Angular', 'React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML / CSS'] },
        { title: 'Mobile', items: ['React Native', 'Expo'] },
        { title: 'Tools & Practices', items: ['Git / GitHub', 'VS Code', 'Postman', 'Agile / Scrum', 'Basic CI/CD'] },
      ],
    },
    experience: {
      title: 'Experience',
      kicker: 'My journey',
      items: [
        {
          role: 'Full-Stack Software Developer',
          org: 'Independent & freelance projects',
          period: '2023 — Present',
          description:
            'End-to-end development of web and mobile platforms — backend APIs with ASP.NET Core, interfaces with Angular/React, and mobile apps with React Native/Expo. Responsible for architecture, database design, and deployment.',
          tags: ['.NET', 'Angular', 'React Native', 'SQL Server'],
        },
        {
          role: 'Programming Instructor',
          org: 'Scantech Academy',
          period: '1 year (2025-2026)',
          description:
            'Taught programming fundamentals to young students — algorithmic thinking, first coding concepts, and problem solving, making the learning process clear and engaging.',
          tags: ['Teaching', 'Mentoring', 'Intro Programming'],
        },
      ],
    },
    projects: {
      title: 'Projects',
      kicker: 'My work',
      subtitle: "A few of the projects I've worked on. More details coming soon.",
      items: [
        {
          title: 'AM — Stock Management',
          description:
            'A stock and inventory management platform built for a client — product tracking, stock levels, and order management, with a full backend and an admin dashboard. Live and in real use.',
          tags: ['ASP.NET Core', 'Angular', 'PostgreSQL', 'Tailwind CSS', 'REST API'],
          status: 'Live',
          live: true,
          images: [
            '/projects/am-dashboard.png',
            '/projects/am-produktet.png',
            '/projects/am-financa.png',
            '/projects/am-njoftime.png',
          ],
          details: {
            overview:
              'AM — Stock Management is a full inventory and stock control platform I built for a client. It brings products, stock levels, suppliers and orders together in one place, with a secure admin dashboard for daily operations. I handled the whole product end to end — backend, database, interface and deployment.',
            company: 'AM',
            location: 'Kosovo',
            year: '2025',
            role: 'Full-Stack Developer',
            features: [
              'Product & inventory tracking',
              'Real-time stock levels and low-stock alerts',
              'Order and supplier management',
              'Admin dashboard with user roles',
              'Reports and data exports',
            ],
          },
        },
        {
          title: 'BlejeVet — E-Commerce Platform',
          description:
            'A full e-commerce platform for electronics — product catalog, search and filters, cart and checkout, and customer accounts. Built end to end and live for customers across Kosovo.',
          tags: ['Angular', 'ASP.NET Core', 'PostgreSQL', 'Tailwind CSS', 'E-commerce'],
          status: 'Live',
          live: true,
          url: 'https://www.bleje-vet.com',
          details: {
            overview:
              'BlejeVet is an online store for electronics and tech — devices for work, home and everyday use. I built the whole platform end to end: a product catalog with search, filtering and sorting, a shopping cart and checkout, customer accounts, and an admin side to manage products and orders. It runs on an ASP.NET Core backend with an Angular frontend and PostgreSQL, and is live for customers across Kosovo.',
            company: 'BlejeVet',
            location: 'Kosovo',
            year: '2026',
            role: 'Full-Stack Developer',
            features: [
              'Product catalog with categories and brands',
              'Search, filtering and sorting by price',
              'Shopping cart and checkout',
              'Customer accounts and order history',
              'Admin panel to manage products and orders',
              'Responsive design with fast delivery across Kosovo',
            ],
          },
        },
        {
          title: 'Project #3',
          description: 'Project description will be added soon — a tool or personal website.',
          tags: ['React', 'TypeScript', 'Tailwind'],
          status: 'Coming soon',
        },
      ],
      viewCode: 'Code',
      liveDemo: 'Demo',
      comingSoon: 'Details coming soon',
      detailsCta: 'View details',
      labels: {
        company: 'Client',
        location: 'Location',
        year: 'Year',
        role: 'Role',
        features: 'Key features',
        visit: 'Visit the site',
        close: 'Close',
      },
    },
    contact: {
      title: "Let's talk",
      kicker: 'Contact',
      subtitle: "I'm open to job opportunities, collaborations, or just a chat about technology.",
      emailLabel: 'Email',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
      copy: 'Copy email',
      copied: 'Copied!',
    },
    footer: {
      rights: 'All rights reserved.',
      builtWith: 'Solvey Labs',
    },
  },
  de: {
    nav: {
      about: 'Über mich',
      skills: 'Fähigkeiten',
      experience: 'Erfahrung',
      projects: 'Projekte',
      contact: 'Kontakt',
      resume: 'Lebenslauf',
    },
    hero: {
      greeting: 'Hallo, ich bin',
      name: 'Çlirim Sopa',
      role: 'Software Developer',
      tagline:
        'Ich entwickle Web- und Mobile-Anwendungen — von der ersten Idee bis zum Produkt, das wirklich genutzt wird. Ich mag sauberen, schlichten Code, der Bestand hat.',
      ctaPrimary: 'Projekte ansehen',
      ctaSecondary: 'Schreib mir',
      scroll: 'Nach unten',
    },
    about: {
      title: 'Über mich',
      kicker: 'Wer ich bin',
      paragraphs: [
        'Ich bin Software Developer mit einem Abschluss in Informatik und Ingenieurwesen. Ich arbeite über den gesamten Stack — von der Serverseite bis zu dem, was der Nutzer sieht und bedient, im Web wie auch mobil.',
        'Neben dem Programmieren habe ich ein Jahr lang unterrichtet. An der Scantech Academy habe ich jungen Schülern die ersten Schritte im Programmieren gezeigt — und dabei gemerkt: Wenn man etwas einfach erklärt, versteht man es selbst am besten.',
        'Was mich am meisten reizt, ist nicht einfach Code, der „funktioniert“, sondern Code, der Sinn ergibt: klar, wartbar und mit einem echten Problem dahinter.',
      ],
      factsTitle: 'Kurz zu mir',
      facts: [
        { label: 'Abschluss', value: 'Informatik & Ingenieurwesen' },
        { label: 'Schwerpunkt', value: 'Full-Stack-Entwicklung' },
        { label: 'Lehre', value: '1 Jahr an der Scantech Academy' },
        { label: 'Standort', value: 'Kosovo & Deutschland' },
      ],
    },
    skills: {
      title: 'Fähigkeiten & Technologien',
      kicker: 'Womit ich arbeite',
      subtitle:
        'Die Technologien, mit denen ich am häufigsten arbeite. Ich lerne ständig Neues dazu, aber diese hier kenne ich gut.',
      groups: [
        { title: 'Backend', items: ['C# / .NET', 'ASP.NET Core', 'REST API', 'SQL Server', 'Entity Framework'] },
        { title: 'Frontend', items: ['Angular', 'React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML / CSS'] },
        { title: 'Mobile', items: ['React Native', 'Expo'] },
        { title: 'Tools & Praxis', items: ['Git / GitHub', 'VS Code', 'Postman', 'Agile / Scrum', 'CI/CD-Grundlagen'] },
      ],
    },
    experience: {
      title: 'Erfahrung',
      kicker: 'Mein Weg',
      items: [
        {
          role: 'Full-Stack Software Developer',
          org: 'Eigene & Freelance-Projekte',
          period: '2023 — heute',
          description:
            'Ich habe Web- und Mobile-Plattformen von Grund auf entwickelt — Backend mit ASP.NET Core, Oberflächen mit Angular und React, Mobile-Apps mit React Native. Vom Datenbankdesign bis zum Deployment habe ich alles selbst betreut.',
          tags: ['.NET', 'Angular', 'React Native', 'SQL Server'],
        },
        {
          role: 'Programmier-Dozent',
          org: 'Scantech Academy',
          period: '1 Jahr (2025–2026)',
          description:
            'Ein Jahr lang habe ich jungen Schülern die ersten Schritte im Programmieren beigebracht — logisches Denken, das Herangehen an ein Problem und wie man eine Idee mit Code zum Leben erweckt. Den Unterricht habe ich einfach und unterhaltsam gehalten.',
          tags: ['Lehre', 'Mentoring', 'Einführung ins Programmieren'],
        },
      ],
    },
    projects: {
      title: 'Projekte',
      kicker: 'Meine Arbeit',
      subtitle: 'Einige der Dinge, die ich gebaut habe. Die vollständigen Details folgen in Kürze.',
      items: [
        {
          title: 'AM — Stock Management',
          description:
            'Eine Lager- und Bestandsverwaltung für einen Kunden — Produktverwaltung, Lagerbestände und Auftragsabwicklung, mit vollständigem Backend und Admin-Dashboard. Live und im echten Einsatz.',
          tags: ['ASP.NET Core', 'Angular', 'PostgreSQL', 'Tailwind CSS', 'REST API'],
          status: 'Live',
          live: true,
          images: [
            '/projects/am-dashboard.png',
            '/projects/am-produktet.png',
            '/projects/am-financa.png',
            '/projects/am-njoftime.png',
          ],
          details: {
            overview:
              'AM — Stock Management ist eine vollständige Lager- und Bestandsplattform, die ich für einen Kunden entwickelt habe. Sie bündelt Produkte, Lagerbestände, Lieferanten und Aufträge an einem Ort, mit einem sicheren Admin-Dashboard für den täglichen Betrieb. Das gesamte Produkt habe ich von A bis Z umgesetzt — Backend, Datenbank, Oberfläche und Deployment.',
            company: 'AM',
            location: 'Kosovo',
            year: '2025',
            role: 'Full-Stack-Entwickler',
            features: [
              'Produkt- und Bestandsverfolgung',
              'Lagerbestände in Echtzeit mit Warnungen',
              'Auftrags- und Lieferantenverwaltung',
              'Admin-Dashboard mit Benutzerrollen',
              'Berichte und Datenexporte',
            ],
          },
        },
        {
          title: 'BlejeVet — E-Commerce-Plattform',
          description:
            'Eine vollständige E-Commerce-Plattform für Elektronik — Produktkatalog, Suche und Filter, Warenkorb und Checkout sowie Kundenkonten. Von Grund auf entwickelt und live für Kunden in ganz Kosovo.',
          tags: ['Angular', 'ASP.NET Core', 'PostgreSQL', 'Tailwind CSS', 'E-Commerce'],
          status: 'Live',
          live: true,
          url: 'https://www.bleje-vet.com',
          details: {
            overview:
              'BlejeVet ist ein Online-Shop für Elektronik und Technik — Geräte für Arbeit, Zuhause und den Alltag. Ich habe die gesamte Plattform von A bis Z entwickelt: einen Produktkatalog mit Suche, Filtern und Sortierung, einen Warenkorb mit Checkout, Kundenkonten sowie einen Admin-Bereich zur Verwaltung von Produkten und Bestellungen. Sie läuft auf einem ASP.NET-Core-Backend mit Angular-Frontend und PostgreSQL und ist live für Kunden in ganz Kosovo.',
            company: 'BlejeVet',
            location: 'Kosovo',
            year: '2026',
            role: 'Full-Stack-Entwickler',
            features: [
              'Produktkatalog mit Kategorien und Marken',
              'Suche, Filter und Sortierung nach Preis',
              'Warenkorb und Checkout',
              'Kundenkonten und Bestellhistorie',
              'Admin-Bereich zur Verwaltung von Produkten und Bestellungen',
              'Responsives Design mit schneller Lieferung in ganz Kosovo',
            ],
          },
        },
        {
          title: 'Projekt #3',
          description: 'Beschreibung folgt in Kürze — ein Tool oder eine persönliche Website.',
          tags: ['React', 'TypeScript', 'Tailwind'],
          status: 'Bald',
        },
      ],
      viewCode: 'Code',
      liveDemo: 'Demo',
      comingSoon: 'Details folgen in Kürze',
      detailsCta: 'Details ansehen',
      labels: {
        company: 'Kunde',
        location: 'Standort',
        year: 'Jahr',
        role: 'Rolle',
        features: 'Wichtige Funktionen',
        visit: 'Zur Website',
        close: 'Schließen',
      },
    },
    contact: {
      title: 'Sprechen wir',
      kicker: 'Kontakt',
      subtitle:
        'Hast du ein Projekt im Kopf, suchst jemanden fürs Team oder möchtest einfach Ideen austauschen? Schreib mir gerne.',
      emailLabel: 'E-Mail',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
      copy: 'E-Mail kopieren',
      copied: 'Kopiert!',
    },
    footer: {
      rights: 'Alle Rechte vorbehalten.',
      builtWith: 'Solvey Labs',
    },
  },
}
