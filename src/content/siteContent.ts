export type Language = "en" | "ar";

type NavItem = {
  id: string;
  label: string;
};

type ServiceItem = {
  title: string;
  description: string;
  icon: string;
};

type StatItem = {
  label: string;
  value: number;
  suffix?: string;
  isPlaceholder?: boolean;
};

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

type FAQItem = {
  question: string;
  answer: string;
};

type GalleryItem = {
  src: string;
  alt: string;
};

type SiteContent = {
  meta: {
    title: string;
    description: string;
  };
  topBar: {
    phoneLabel: string;
    whatsappLabel: string;
    emailLabel: string;
    languageLabel: string;
  };
  nav: NavItem[];
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    tertiaryCta: string;
    chips: string[];
    quickQuote: {
      title: string;
      description: string;
      nameLabel: string;
      phoneLabel: string;
      serviceLabel: string;
      button: string;
      note: string;
    };
  };
  about: {
    title: string;
    short: string;
    long: string;
    bullets: string[];
    imageAlt: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: ServiceItem[];
  };
  why: {
    title: string;
    subtitle: string;
    bullets: string[];
    promiseTitle: string;
    promiseText: string;
  };
  coverage: {
    title: string;
    subtitle: string;
    regionsLabel: string;
    regions: string[];
    responseNote: string;
  };
  stats: {
    title: string;
    subtitle: string;
    note: string;
    items: StatItem[];
  };
  process: {
    title: string;
    steps: string[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: Testimonial[];
  };
  clients: {
    title: string;
    subtitle: string;
    items: string[];
  };
  gallery: {
    title: string;
    subtitle: string;
    items: GalleryItem[];
  };
  faqs: {
    title: string;
    items: FAQItem[];
  };
  cta: {
    title: string;
    description: string;
    primary: string;
    secondary: string;
  };
  contact: {
    title: string;
    subtitle: string;
    addressLabelEn: string;
    addressLabelAr: string;
    addressEn: string;
    addressAr: string;
    phoneLabel: string;
    emailLabel: string;
    websiteLabel: string;
    socialLabel: string;
    hoursLabel: string;
    hoursPrimary: string;
    hoursSecondary: string;
    formTitle: string;
    formName: string;
    formPhone: string;
    formEmail: string;
    formService: string;
    formMessage: string;
    formVerification: string;
    formSubmit: string;
    formNote: string;
    verificationAnswer: string;
    mapTitle: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    followUs: string;
    copyright: string;
  };
};

export const siteContent: Record<Language, SiteContent> = {
  en: {
    meta: {
      title: "THE SHADOW | Security & Protection in Jordan",
      description:
        "Licensed Jordanian security and protection services for facilities, events, VIPs, and businesses. Professional teams, clear SOPs, and rapid coordination.",
    },
    topBar: {
      phoneLabel: "Call",
      whatsappLabel: "WhatsApp",
      emailLabel: "Email",
      languageLabel: "Language",
    },
    nav: [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "services", label: "Services" },
      { id: "why", label: "Why Us" },
      { id: "coverage", label: "Coverage" },
      { id: "gallery", label: "Gallery" },
      { id: "clients", label: "Clients" },
      { id: "faqs", label: "FAQs" },
      { id: "contact", label: "Contact" },
    ],
    hero: {
      badge: "Licensed Jordanian Security Services",
      headline: "Security & Protection You Can Trust.",
      subheadline:
        "Licensed Jordanian security services for facilities, events, VIPs, and businesses — built on discipline, discretion, and rapid response.",
      primaryCta: "Request a Quote",
      secondaryCta: "Call Now",
      tertiaryCta: "WhatsApp",
      chips: ["24/7 Operations", "Trained Personnel", "Rapid Response"],
      quickQuote: {
        title: "Quick Quote",
        description:
          "Share your needs and our team will coordinate a response quickly.",
        nameLabel: "Full name",
        phoneLabel: "Phone number",
        serviceLabel: "Service needed",
        button: "Send Request",
        note: "By submitting, you agree to be contacted by THE SHADOW.",
      },
    },
    about: {
      title: "About THE SHADOW",
      short:
        "THE SHADOW is a Jordan-based security and protection company delivering disciplined, discreet coverage for facilities, events, and VIPs.",
      long:
        "We operate with clear SOPs, on-site supervision, and consistent reporting. Our teams are trained to maintain respectful conduct, confidentiality, and rapid coordination across every assignment.",
      bullets: [
        "Licensed operations aligned with local regulations",
        "Professional screening and ongoing training",
        "Site supervisors and structured reporting",
        "Discreet, respectful, and service-first approach",
      ],
      imageAlt: "THE SHADOW security team on duty",
    },
    services: {
      title: "Core Services",
      subtitle:
        "Integrated protection services designed for sites, events, and high-profile assignments.",
      items: [
        {
          title: "Manned Guarding",
          description:
            "Licensed guards for facilities, compounds, and businesses with clear SOPs.",
          icon: "shield",
        },
        {
          title: "VIP / Close Protection",
          description:
            "Discreet close protection and secure logistics for principals.",
          icon: "vip",
        },
        {
          title: "Event Security & Crowd Control",
          description:
            "Planning, screening, and crowd flow management for events.",
          icon: "event",
        },
        {
          title: "Mobile Patrols",
          description:
            "Patrol routes with incident logging and rapid coordination.",
          icon: "patrol",
        },
        {
          title: "CCTV & Surveillance Support",
          description:
            "Operational oversight and monitoring support for existing systems.",
          icon: "camera",
        },
        {
          title: "Access Control & Perimeter",
          description:
            "Entry management, badge checks, and perimeter patrols.",
          icon: "access",
        },
        {
          title: "Risk Assessment & Planning",
          description:
            "Site surveys, vulnerability assessment, and tailored security plans.",
          icon: "risk",
        },
        {
          title: "24/7 Coordination",
          description:
            "Central coordination, supervision, and reporting for deployments.",
          icon: "command",
        },
      ],
    },
    why: {
      title: "Why Choose THE SHADOW?",
      subtitle:
        "Professional, compliant, and accountable security coverage for every environment.",
      bullets: [
        "Compliance with local regulations",
        "Professional screening & training",
        "Site supervisors + reporting",
        "Clear SOPs and escalation",
        "Discreet, respectful conduct",
      ],
      promiseTitle: "Quality Promise",
      promiseText:
        "We deliver licensed, compliant services with measurable supervision, transparent reporting, and a focus on rapid coordination.",
    },
    coverage: {
      title: "Coverage Across Jordan",
      subtitle:
        "Coordinated teams positioned to serve facilities and events throughout Jordan.",
      regionsLabel: "Key areas",
      regions: [
        "Amman",
        "Zarqa",
        "Irbid",
        "Aqaba",
        "Salt",
        "Madaba",
        "Jerash",
        "Karak",
      ],
      responseNote:
        "Response is coordinated based on site needs, risk level, and deployment scope.",
    },
    stats: {
      title: "Operational Highlights",
      subtitle:
        "Placeholder metrics — replace with verified figures when available.",
      note:
        "These numbers are placeholders for presentation only. Update with verified company metrics.",
      items: [
        { label: "Sites Secured", value: 120, suffix: "+", isPlaceholder: true },
        { label: "Trained Guards", value: 260, suffix: "+", isPlaceholder: true },
        { label: "Years of Experience", value: 12, suffix: "+", isPlaceholder: true },
        { label: "24/7 Coverage", value: 24, suffix: "/7", isPlaceholder: true },
      ],
    },
    process: {
      title: "How We Work",
      steps: [
        "Site Assessment",
        "Security Plan",
        "Deployment",
        "Supervision & Reporting",
        "Continuous Improvement",
      ],
    },
    testimonials: {
      title: "Client Confidence",
      subtitle:
        "Professional coverage with respectful conduct and clear reporting.",
      items: [
        {
          quote:
            "Their team was professional, discreet, and well supervised from day one.",
          name: "Facility Manager",
          role: "Commercial Site",
        },
        {
          quote:
            "Rapid coordination and clear reporting gave us confidence during our event.",
          name: "Event Organizer",
          role: "Corporate Event",
        },
        {
          quote:
            "Structured coverage and respectful guards made a real difference.",
          name: "Operations Lead",
          role: "Hospitality Venue",
        },
      ],
    },
    clients: {
      title: "Trusted By",
      subtitle: "Replace these placeholders with confirmed client logos.",
      items: [
        "Commercial Facilities",
        "Retail & Malls",
        "Residential Compounds",
        "Corporate Events",
        "Hospitality",
        "VIP & Executive",
      ],
    },
    gallery: {
      title: "Gallery",
      subtitle: "Instagram-inspired snapshots from operations and events.",
      items: [
        { src: "/images/gallery/placeholder-1.svg", alt: "Gallery placeholder" },
        { src: "/images/gallery/placeholder-2.svg", alt: "Gallery placeholder" },
        { src: "/images/gallery/placeholder-3.svg", alt: "Gallery placeholder" },
        { src: "/images/gallery/placeholder-4.svg", alt: "Gallery placeholder" },
        { src: "/images/gallery/placeholder-5.svg", alt: "Gallery placeholder" },
        { src: "/images/gallery/placeholder-6.svg", alt: "Gallery placeholder" },
      ],
    },
    faqs: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "Are you licensed?",
          answer:
            "Yes. Our operations are licensed and aligned with local regulations for security services in Jordan.",
        },
        {
          question: "Do you offer event security?",
          answer:
            "Yes. We handle event security, crowd flow management, and on-site coordination.",
        },
        {
          question: "How fast can you deploy guards?",
          answer:
            "Deployment speed depends on site requirements and staffing availability. We coordinate promptly after assessment.",
        },
        {
          question: "How do you train personnel?",
          answer:
            "Personnel are screened and trained for discipline, SOPs, and respectful conduct with ongoing supervision.",
        },
        {
          question: "Do you provide site supervisors?",
          answer:
            "Yes. Supervisors oversee teams, ensure compliance, and deliver structured updates in regular reports.",
        },
        {
          question: "How do I request a quote?",
          answer:
            "Use the quick quote form or contact us directly by phone, email, or WhatsApp.",
        },
        {
          question: "What areas do you cover?",
          answer:
            "We serve clients across Jordan, including Amman, Zarqa, Irbid, and Aqaba.",
        },
        {
          question: "What industries do you serve?",
          answer:
            "Commercial facilities, residential compounds, hospitality, retail, and events.",
        },
        {
          question: "Do you provide mobile patrols?",
          answer:
            "Yes. Mobile patrols are available with incident reporting and rapid coordination.",
        },
        {
          question: "Do you support CCTV systems?",
          answer:
            "We provide operational oversight and monitoring support for existing systems.",
        },
      ],
    },
    cta: {
      title: "Secure your site today.",
      description:
        "Tell us what you need and we will build a compliant, supervised security plan.",
      primary: "Request a Quote",
      secondary: "WhatsApp",
    },
    contact: {
      title: "Contact THE SHADOW",
      subtitle: "Reach us anytime for rapid coordination and professional coverage.",
      addressLabelEn: "Address (EN)",
      addressLabelAr: "العنوان",
      addressEn:
        "Marj Al Hamam - Al Salam Road - Idris Commercial Complex - 1st Floor, Office 2",
      addressAr: "مرج الحمام - طريق السلام - مجمع ادريس التجاري - الطابق الأول مكتب رقم 2",
      phoneLabel: "Phone / WhatsApp",
      emailLabel: "Email",
      websiteLabel: "Website",
      socialLabel: "Social",
      hoursLabel: "Working Hours",
      hoursPrimary: "Operations Desk: 24/7",
      hoursSecondary: "Office: Sunday–Thursday, 9:00–17:00",
      formTitle: "Request a Quote",
      formName: "Full name",
      formPhone: "Phone number",
      formEmail: "Email address",
      formService: "Service needed",
      formMessage: "Message",
      formVerification: "Anti-spam: What is 4 + 3?",
      formSubmit: "Send Request",
      formNote: "We respond quickly during operations hours and as soon as possible otherwise.",
      verificationAnswer: "7",
      mapTitle: "Find us on the map",
    },
    footer: {
      tagline: "YOUR UNSEEN POWER",
      quickLinks: "Quick Links",
      followUs: "Follow",
      copyright: "© 2026 THE SHADOW. All rights reserved.",
    },
  },
  ar: {
    meta: {
      title: "الظل للأمن والحماية | خدمات أمنية في الأردن",
      description:
        "خدمات أمن وحماية أردنية مرخصة للمنشآت والفعاليات وكبار الشخصيات والأعمال. كوادر محترفة وإجراءات واضحة وتنسيق سريع.",
    },
    topBar: {
      phoneLabel: "اتصال",
      whatsappLabel: "واتساب",
      emailLabel: "البريد",
      languageLabel: "اللغة",
    },
    nav: [
      { id: "home", label: "الرئيسية" },
      { id: "about", label: "من نحن" },
      { id: "services", label: "الخدمات" },
      { id: "why", label: "لماذا نحن" },
      { id: "coverage", label: "التغطية" },
      { id: "gallery", label: "المعرض" },
      { id: "clients", label: "العملاء" },
      { id: "faqs", label: "الأسئلة" },
      { id: "contact", label: "تواصل" },
    ],
    hero: {
      badge: "خدمات أمن وحماية أردنية مرخصة",
      headline: "أمن وحماية يمكنك الوثوق بها.",
      subheadline:
        "خدمات أمن وحماية أردنية مرخصة للمنشآت والفعاليات وكبار الشخصيات والأعمال — مبنية على الانضباط والسرية وسرعة الاستجابة.",
      primaryCta: "اطلب عرض سعر",
      secondaryCta: "اتصل الآن",
      tertiaryCta: "واتساب",
      chips: ["عمليات على مدار الساعة", "كوادر مدرّبة", "استجابة سريعة"],
      quickQuote: {
        title: "عرض سعر سريع",
        description: "شارك احتياجاتك وسننسق استجابة بسرعة.",
        nameLabel: "الاسم الكامل",
        phoneLabel: "رقم الهاتف",
        serviceLabel: "الخدمة المطلوبة",
        button: "إرسال الطلب",
        note: "بالإرسال، أنت توافق على أن نتواصل معك.",
      },
    },
    about: {
      title: "عن الظل",
      short:
        "الظل للأمن والحماية شركة أردنية تقدم تغطية أمنية منضبطة وسرية للمنشآت والفعاليات وكبار الشخصيات.",
      long:
        "نعمل وفق إجراءات تشغيل معيارية واضحة، مع إشراف ميداني وتقارير دورية. نركز على الالتزام بالأنظمة، والاحترافية، والسلوك اللائق، مع تنسيق سريع عند الحاجة.",
      bullets: [
        "عمليات مرخصة ومتوافقة مع التشريعات",
        "فحص وتدريب مهني مستمر",
        "مشرفون ميدانيون وتقارير منظمة",
        "سلوك محترم وسرية عالية",
      ],
      imageAlt: "فريق الظل الأمني أثناء العمل",
    },
    services: {
      title: "الخدمات الأساسية",
      subtitle:
        "حلول حماية متكاملة مصممة للمواقع والفعاليات والمهام الحساسة.",
      items: [
        {
          title: "حراسة مواقع ثابتة",
          description:
            "حراس مرخصون للمنشآت والمجمعات والأعمال بإجراءات تشغيل واضحة.",
          icon: "shield",
        },
        {
          title: "حماية لصيقة لكبار الشخصيات",
          description: "حماية ميدانية متحفظة وتنظيم الحركة بأمان.",
          icon: "vip",
        },
        {
          title: "أمن الفعاليات وضبط الحشود",
          description: "تخطيط وتفتيش وتنظيم تدفق الحضور للفعاليات.",
          icon: "event",
        },
        {
          title: "دوريات متحركة",
          description: "مسارات دورية مع توثيق الحوادث وتنسيق سريع.",
          icon: "patrol",
        },
        {
          title: "دعم أنظمة المراقبة",
          description: "مساندة تشغيلية ومتابعة للأنظمة القائمة.",
          icon: "camera",
        },
        {
          title: "ضبط الدخول وحماية المحيط",
          description: "إدارة المداخل والتحقق من الهويات ودوريات المحيط.",
          icon: "access",
        },
        {
          title: "تقييم المخاطر والتخطيط الأمني",
          description: "معاينة المواقع وتحليل الثغرات وخطط مخصصة.",
          icon: "risk",
        },
        {
          title: "تنسيق 24/7",
          description: "تنسيق مركزي وإشراف وتقارير لجميع المواقع.",
          icon: "command",
        },
      ],
    },
    why: {
      title: "لماذا تختار الظل؟",
      subtitle: "تغطية أمنية محترفة ومتوافقة مع الأنظمة ويمكن قياسها.",
      bullets: [
        "الالتزام بالتشريعات المحلية",
        "فحص وتدريب مهني",
        "مشرفون ميدانيون وتقارير",
        "إجراءات تشغيل وتصعيد واضحة",
        "سلوك محترم وسري",
      ],
      promiseTitle: "وعد الجودة",
      promiseText:
        "نعدكم بخدمة مرخصة ومتوافقة مع الأنظمة، بإشراف قابل للقياس وتقارير شفافة وتركيز على سرعة التنسيق.",
    },
    coverage: {
      title: "التغطية في جميع أنحاء الأردن",
      subtitle: "فرق منسقة لخدمة المواقع والفعاليات في مختلف مناطق المملكة.",
      regionsLabel: "مناطق رئيسية",
      regions: [
        "عمّان",
        "الزرقاء",
        "إربد",
        "العقبة",
        "السلط",
        "مادبا",
        "جرش",
        "الكرك",
      ],
      responseNote: "تتم الاستجابة حسب احتياجات الموقع ومستوى المخاطر ونطاق الانتشار.",
    },
    stats: {
      title: "مؤشرات تشغيلية",
      subtitle:
        "أرقام توضيحية فقط — يرجى تحديثها بأرقام مؤكدة عند توفرها.",
      note: "هذه أرقام توضيحية للعرض فقط. يرجى تحديثها بأرقام مؤكدة.",
      items: [
        { label: "مواقع مؤمنة", value: 120, suffix: "+", isPlaceholder: true },
        { label: "حراس مدربون", value: 260, suffix: "+", isPlaceholder: true },
        { label: "سنوات خبرة", value: 12, suffix: "+", isPlaceholder: true },
        { label: "تغطية 24/7", value: 24, suffix: "/7", isPlaceholder: true },
      ],
    },
    process: {
      title: "كيف نعمل",
      steps: [
        "معاينة الموقع",
        "خطة أمنية",
        "نشر الكوادر",
        "الإشراف والتقارير",
        "تحسين مستمر",
      ],
    },
    testimonials: {
      title: "ثقة العملاء",
      subtitle: "تغطية منظمة وسلوك محترم وتقارير واضحة.",
      items: [
        {
          quote: "فريق محترف وسري مع إشراف واضح منذ البداية.",
          name: "مدير منشأة",
          role: "موقع تجاري",
        },
        {
          quote: "التنسيق السريع والتقارير أعطتنا راحة بال أثناء الفعالية.",
          name: "منظم فعالية",
          role: "فعالية مؤسسية",
        },
        {
          quote: "تغطية منظمة وسلوك محترم أحدثا فرقًا واضحًا.",
          name: "مدير عمليات",
          role: "منشأة ضيافة",
        },
      ],
    },
    clients: {
      title: "موثوقون لدى",
      subtitle: "استبدل هذه العناصر بشعارات العملاء المعتمدة.",
      items: [
        "منشآت تجارية",
        "مراكز تسوق",
        "مجمعات سكنية",
        "فعاليات مؤسسية",
        "ضيافة وفنادق",
        "كبار الشخصيات",
      ],
    },
    gallery: {
      title: "المعرض",
      subtitle: "لقطات مستوحاة من إنستغرام للعمليات والفعاليات.",
      items: [
        { src: "/images/gallery/placeholder-1.svg", alt: "صورة معرض" },
        { src: "/images/gallery/placeholder-2.svg", alt: "صورة معرض" },
        { src: "/images/gallery/placeholder-3.svg", alt: "صورة معرض" },
        { src: "/images/gallery/placeholder-4.svg", alt: "صورة معرض" },
        { src: "/images/gallery/placeholder-5.svg", alt: "صورة معرض" },
        { src: "/images/gallery/placeholder-6.svg", alt: "صورة معرض" },
      ],
    },
    faqs: {
      title: "الأسئلة الشائعة",
      items: [
        {
          question: "هل أنتم مرخصون؟",
          answer:
            "نعم. عملياتنا مرخصة ومتوافقة مع الأنظمة المحلية لخدمات الأمن في الأردن.",
        },
        {
          question: "هل تقدمون أمن الفعاليات؟",
          answer:
            "نعم. نقدم أمن الفعاليات وضبط الحشود والتنسيق الميداني.",
        },
        {
          question: "ما مدى سرعة نشر الحراس؟",
          answer:
            "تعتمد سرعة النشر على احتياجات الموقع وتوفر الكوادر. ننسق بسرعة بعد المعاينة.",
        },
        {
          question: "كيف تدربون الكوادر؟",
          answer:
            "يتم فحص الكوادر وتدريبهم على الانضباط وإجراءات التشغيل والسلوك اللائق مع إشراف مستمر.",
        },
        {
          question: "هل توفرون مشرفين ميدانيين؟",
          answer:
            "نعم. المشرفون يتابعون الالتزام ويقدمون تقارير دورية.",
        },
        {
          question: "كيف أطلب عرض سعر؟",
          answer:
            "يمكنك استخدام نموذج الطلب أو التواصل معنا عبر الهاتف أو البريد أو واتساب.",
        },
        {
          question: "ما المناطق التي تغطونها؟",
          answer:
            "نخدم العملاء في جميع أنحاء الأردن بما في ذلك عمّان والزرقاء وإربد والعقبة.",
        },
        {
          question: "ما القطاعات التي تخدمونها؟",
          answer:
            "المنشآت التجارية والمجمعات السكنية والضيافة والمتاجر والفعاليات.",
        },
        {
          question: "هل تقدمون دوريات متحركة؟",
          answer:
            "نعم. نوفر دوريات متحركة مع توثيق الحوادث والتنسيق السريع.",
        },
        {
          question: "هل تدعمون أنظمة المراقبة؟",
          answer:
            "نقدم متابعة تشغيلية ومساندة لأنظمة المراقبة القائمة.",
        },
      ],
    },
    cta: {
      title: "أمّن موقعك اليوم.",
      description: "أخبرنا باحتياجاتك لنضع خطة أمنية مرخصة ومشرفة.",
      primary: "اطلب عرض سعر",
      secondary: "واتساب",
    },
    contact: {
      title: "تواصل مع الظل",
      subtitle: "نحن هنا للتنسيق السريع والتغطية الاحترافية.",
      addressLabelEn: "Address (EN)",
      addressLabelAr: "العنوان",
      addressEn:
        "Marj Al Hamam - Al Salam Road - Idris Commercial Complex - 1st Floor, Office 2",
      addressAr: "مرج الحمام - طريق السلام - مجمع ادريس التجاري - الطابق الأول مكتب رقم 2",
      phoneLabel: "الهاتف / واتساب",
      emailLabel: "البريد الإلكتروني",
      websiteLabel: "الموقع الإلكتروني",
      socialLabel: "التواصل الاجتماعي",
      hoursLabel: "ساعات العمل",
      hoursPrimary: "غرفة العمليات: على مدار الساعة",
      hoursSecondary: "الدوام المكتبي: الأحد–الخميس، 9:00–17:00",
      formTitle: "طلب عرض سعر",
      formName: "الاسم الكامل",
      formPhone: "رقم الهاتف",
      formEmail: "البريد الإلكتروني",
      formService: "الخدمة المطلوبة",
      formMessage: "تفاصيل الطلب",
      formVerification: "مكافحة الرسائل: كم يساوي 4 + 3؟",
      formSubmit: "إرسال الطلب",
      formNote: "سنرد بسرعة خلال ساعات العمل وبأقرب وقت ممكن.",
      verificationAnswer: "7",
      mapTitle: "موقعنا على الخريطة",
    },
    footer: {
      tagline: "قوتك غير المرئية",
      quickLinks: "روابط سريعة",
      followUs: "تابعنا",
      copyright: "© 2026 الظل للأمن والحماية. جميع الحقوق محفوظة.",
    },
  },
};
