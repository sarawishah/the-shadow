export type Language = "en" | "ar";

type NavItem = {
  id: string;
  label: string;
};

type ServiceItem = {
  id: string;
  title: string;
  description: string;
  icon: string;
  href?: string;
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
  };
  about: {
    title: string;
    short: string;
    long: string;
    bullets: string[];
    imageAlt: string;
  };
  security: {
    title: string;
    subtitle: string;
    items: ServiceItem[];
  };
  // The following sections are kept for compatibility but intentionally minimal.
  cctvServices: {
    title: string;
    subtitle: string;
    items: ServiceItem[];
  };
  packages: {
    title: string;
    subtitle: string;
    note: string;
    items: { title: string; description: string; features: string[]; ctaLabel: string; badge?: string }[];
  };
  highlights: {
    title: string;
    subtitle: string;
    items: { title: string; description: string; icon: string }[];
  };
  industries: {
    title: string;
    subtitle: string;
    items: { title: string; description: string }[];
  };
  why: {
    title: string;
    subtitle: string;
    bullets: string[];
    promiseTitle: string;
    promiseText: string;
    chips: string[];
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
    items: { label: string; value?: number; suffix?: string; display?: string; isPlaceholder?: boolean }[];
  };
  process: {
    title: string;
    steps: string[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: { quote: string; name: string; role: string }[];
  };
  brands: {
    title: string;
    subtitle: string;
    items: string[];
  };
  gallery: {
    title: string;
    subtitle: string;
    items: { src: string; alt: string }[];
  };
  faqs: {
    title: string;
    items: { question: string; answer: string }[];
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
    formCity: string;
    formProperty: string;
    formCameraCount: string;
    formPreference: string;
    formMessage: string;
    formVerification: string;
    formSubmit: string;
    formNote: string;
    verificationAnswer: string;
    mapTitle: string;
    propertyOptions: string[];
    cameraOptions: string[];
    preferenceOptions: string[];
    freeVisitTitle: string;
    freeVisitDescription: string;
    freeVisitItems: string[];
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
      title: "THE SHADOW | Security Consulting & Risk Assessment",
      description: "Security consulting and risk assessment for facilities across Jordan.",
    },
    topBar: {
      phoneLabel: "Call",
      whatsappLabel: "",
      emailLabel: "Email",
      languageLabel: "Language",
    },
    nav: [
      { id: "home", label: "Home" },
      { id: "services", label: "Services" },
      { id: "contact", label: "Contact" },
    ],
    hero: {
      badge: "THE SHADOW",
      headline: "THE SHADOW Security & Protection",
      subheadline: "Security consulting for your facilities at the highest standards. Risk assessment service.",
      primaryCta: "Contact The Shadow",
      secondaryCta: "Request Consultation",
      tertiaryCta: "",
      chips: [],
    },
    about: {
      title: "About THE SHADOW",
      short: "Specialists in security consulting and risk assessment for facilities.",
      long: "We provide clear, actionable security guidance and practical risk assessments tailored to your site.",
      bullets: [
        "Practical, standards-based security consulting",
        "Risk assessment with mitigation steps",
        "Clear documentation and guidance",
        "Responsive support",
      ],
      imageAlt: "THE SHADOW security",
    },
    security: {
      title: "Security Services",
      subtitle: "Focused services that strengthen your facility.",
      items: [
        {
          id: "consulting",
          title: "Security consulting for your facilities",
          description: "Advisory support to elevate your security posture to the highest standards.",
          icon: "shield",
          href: "#contact",
        },
        {
          id: "risk",
          title: "Risk assessment service",
          description: "Comprehensive assessment with a clear mitigation plan.",
          icon: "chart",
          href: "#contact",
        },
      ],
    },
    cctvServices: {
      title: "Additional services",
      subtitle: "",
      items: [],
    },
    packages: {
      title: "Packages",
      subtitle: "",
      note: "",
      items: [],
    },
    highlights: {
      title: "",
      subtitle: "",
      items: [],
    },
    industries: {
      title: "",
      subtitle: "",
      items: [],
    },
    why: {
      title: "Why THE SHADOW?",
      subtitle: "Clear guidance and dependable support.",
      bullets: [
        "Standards-based recommendations",
        "Actionable mitigation steps",
        "Transparent communication",
      ],
      promiseTitle: "Quality promise",
      promiseText: "We deliver clear plans and dependable follow-up.",
      chips: ["Clarity", "Reliability", "Support"],
    },
    coverage: {
      title: "Where we work",
      subtitle: "Serving facilities across Jordan.",
      regionsLabel: "Key areas",
      regions: ["Amman", "Zarqa", "Irbid", "Aqaba", "Salt", "Madaba", "Jerash", "Karak"],
      responseNote: "Site visits scheduled promptly.",
    },
    stats: { title: "", subtitle: "", note: "", items: [] },
    process: {
      title: "How we work",
      steps: ["Site understanding", "Assessment", "Plan", "Follow-up"],
    },
    testimonials: { title: "", subtitle: "", items: [] },
    brands: { title: "", subtitle: "", items: [] },
    gallery: { title: "", subtitle: "", items: [] },
    faqs: {
      title: "FAQs",
      items: [
        {
          question: "Do you provide on-site consultations?",
          answer: "Yes. We tailor each visit to the facility needs.",
        },
        {
          question: "Can you deliver a mitigation plan?",
          answer: "Yes. Each assessment includes prioritized actions.",
        },
      ],
    },
    cta: {
      title: "Secure your site.",
      description: "Contact THE SHADOW for security consulting and risk assessment.",
      primary: "Contact The Shadow",
      secondary: "Email us",
    },
    contact: {
      title: "Contact THE SHADOW",
      subtitle: "Security consulting and risk assessment across Jordan.",
      addressLabelEn: "Address (EN)",
      addressLabelAr: "Address (AR)",
      addressEn: "Marj Al Hamam - Al Salam Road - Idris Commercial Complex - 1st Floor, Office 2",
      addressAr: "مرج الحمام - طريق السلام - مجمع ادريس التجاري - الطابق الأول مكتب رقم 2",
      phoneLabel: "Phone",
      emailLabel: "Email",
      websiteLabel: "Website",
      socialLabel: "Social",
      hoursLabel: "Working Hours",
      hoursPrimary: "Sunday-Thursday, 9:00-17:00",
      hoursSecondary: "Visits by appointment",
      formTitle: "Request a consultation",
      formName: "Full name",
      formPhone: "Phone number",
      formEmail: "Email address",
      formCity: "City",
      formProperty: "Site type",
      formCameraCount: "Details",
      formPreference: "Preference",
      formMessage: "Site details",
      formVerification: "Anti-spam: What is 4 + 3?",
      formSubmit: "Send request",
      formNote: "We respond promptly during working hours.",
      verificationAnswer: "7",
      mapTitle: "Find us on the map",
      propertyOptions: ["Home", "Office", "Warehouse", "Retail", "Other"],
      cameraOptions: ["Option 1", "Option 2", "Option 3", "Other"],
      preferenceOptions: ["Option A", "Option B", "Not sure"],
      freeVisitTitle: "Free site visit",
      freeVisitDescription: "We review your site and outline next steps.",
      freeVisitItems: ["Site visit", "Coverage plan", "Detailed proposal"],
    },
    footer: {
      tagline: "your unseen power",
      quickLinks: "Quick Links",
      followUs: "Follow",
      copyright: "(c) 2026 THE SHADOW. All rights reserved.",
    },
  },
  ar: {
    meta: {
      title: "شركة الظل للأمن والحماية | استشارات أمنية وتقييم مخاطر",
      description: "استشارات أمنية للمنشآت بأعلى المعايير وخدمة تقييم المخاطر في الأردن.",
    },
    topBar: {
      phoneLabel: "اتصل",
      whatsappLabel: "",
      emailLabel: "البريد",
      languageLabel: "اللغة",
    },
    nav: [
      { id: "home", label: "الرئيسية" },
      { id: "services", label: "الخدمات" },
      { id: "contact", label: "تواصل" },
    ],
    hero: {
      badge: "شركة الظل للأمن والحماية",
      headline: "شركة الظل للأمن والحماية",
      subheadline: "تقديم الاستشارات الأمنية لمنشآتكم بأعلى المعايير. تقديم خدمة تقييم المخاطر.",
      primaryCta: "تواصل مع الظل",
      secondaryCta: "اطلب استشارة",
      tertiaryCta: "",
      chips: [],
    },
    about: {
      title: "عن الظل",
      short: "متخصصون في الاستشارات الأمنية وتقييم المخاطر للمنشآت.",
      long: "نقدم إرشادات أمنية واضحة وتقييم مخاطر عملي مع خطوات معالجة محددة تناسب موقعكم.",
      bullets: [
        "استشارات مبنية على معايير واضحة",
        "تقييم مخاطر مع خطة معالجة",
        "توثيق وإرشاد قابل للتطبيق",
        "دعم سريع وواضح",
      ],
      imageAlt: "الظل للأمن والحماية",
    },
    security: {
      title: "الخدمات الأمنية",
      subtitle: "خدمات مركزة تعزز أمن منشأتك.",
      items: [
        {
          id: "consulting",
          title: "تقديم الاستشارات الأمنية لمنشآتكم بأعلى المعايير",
          description: "استشارات متخصصة لرفع جاهزية وأمن منشأتك.",
          icon: "shield",
          href: "#contact",
        },
        {
          id: "risk",
          title: "تقديم خدمة تقييم المخاطر",
          description: "تقييم شامل مع خطة معالجة واضحة وقابلة للتنفيذ.",
          icon: "chart",
          href: "#contact",
        },
      ],
    },
    cctvServices: {
      title: "خدمات إضافية",
      subtitle: "",
      items: [],
    },
    packages: {
      title: "باقات",
      subtitle: "",
      note: "",
      items: [],
    },
    highlights: { title: "", subtitle: "", items: [] },
    industries: { title: "", subtitle: "", items: [] },
    why: {
      title: "لماذا الظل؟",
      subtitle: "إرشاد واضح ودعم يعتمد عليه.",
      bullets: ["توصيات مبنية على معايير", "خطوات معالجة عملية", "تواصل شفاف"],
      promiseTitle: "وعد الجودة",
      promiseText: "نقدم خططاً واضحة ومتابعة موثوقة.",
      chips: ["وضوح", "موثوقية", "دعم"],
    },
    coverage: {
      title: "نطاق العمل",
      subtitle: "نخدم منشآتكم في مختلف أنحاء الأردن.",
      regionsLabel: "مدن رئيسية",
      regions: ["عمان", "الزرقاء", "إربد", "العقبة", "السلط", "مادبا", "جرش", "الكرك"],
      responseNote: "نرتب الزيارات سريعاً.",
    },
    stats: { title: "", subtitle: "", note: "", items: [] },
    process: {
      title: "كيف نعمل",
      steps: ["فهم الموقع", "تقييم", "خطة", "متابعة"],
    },
    testimonials: { title: "", subtitle: "", items: [] },
    brands: { title: "", subtitle: "", items: [] },
    gallery: { title: "", subtitle: "", items: [] },
    faqs: {
      title: "الأسئلة الشائعة",
      items: [
        {
          question: "هل تقدمون استشارات في الموقع؟",
          answer: "نعم، نزور الموقع ونضبط التوصيات حسب الحاجة.",
        },
        {
          question: "هل توفرون خطة معالجة للمخاطر؟",
          answer: "نعم، كل تقييم يتضمن أولويات وخطوات تنفيذية.",
        },
      ],
    },
    cta: {
      title: "أمّن موقعك.",
      description: "تواصل مع الظل للاستشارات الأمنية وتقييم المخاطر.",
      primary: "تواصل مع الظل",
      secondary: "راسلنا",
    },
    contact: {
      title: "تواصل مع الظل",
      subtitle: "استشارات أمنية وتقييم مخاطر في الأردن.",
      addressLabelEn: "Address (EN)",
      addressLabelAr: "العنوان",
      addressEn: "Marj Al Hamam - Al Salam Road - Idris Commercial Complex - 1st Floor, Office 2",
      addressAr: "مرج الحمام - طريق السلام - مجمع ادريس التجاري - الطابق الأول مكتب رقم 2",
      phoneLabel: "الهاتف",
      emailLabel: "البريد الإلكتروني",
      websiteLabel: "الموقع الإلكتروني",
      socialLabel: "التواصل",
      hoursLabel: "ساعات العمل",
      hoursPrimary: "الأحد-الخميس، 9:00-17:00",
      hoursSecondary: "الزيارات بالتنسيق المسبق",
      formTitle: "طلب استشارة",
      formName: "الاسم الكامل",
      formPhone: "رقم الهاتف",
      formEmail: "البريد الإلكتروني",
      formCity: "المدينة",
      formProperty: "نوع الموقع",
      formCameraCount: "تفاصيل إضافية",
      formPreference: "التفضيل",
      formMessage: "تفاصيل الموقع",
      formVerification: "مكافحة السبام: كم ناتج 4 + 3؟",
      formSubmit: "إرسال الطلب",
      formNote: "نرد بأسرع وقت خلال ساعات العمل.",
      verificationAnswer: "7",
      mapTitle: "موقعنا على الخريطة",
      propertyOptions: ["منزل", "مكتب", "مستودع", "متجر", "أخرى"],
      cameraOptions: ["خيار 1", "خيار 2", "خيار 3", "أخرى"],
      preferenceOptions: ["خيار أ", "خيار ب", "غير متأكد"],
      freeVisitTitle: "زيارة موقع مجانية",
      freeVisitDescription: "نراجع موقعك ونحدد الخطوات التالية.",
      freeVisitItems: ["زيارة الموقع", "خطة تغطية", "عرض تفصيلي"],
    },
    footer: {
      tagline: "your unseen power",
      quickLinks: "روابط سريعة",
      followUs: "تابعنا",
      copyright: "(c) 2026 الظل. جميع الحقوق محفوظة.",
    },
  },
};
