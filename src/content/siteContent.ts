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

type PackageItem = {
  title: string;
  description: string;
  badge?: string;
  features: string[];
  ctaLabel: string;
};

type HighlightItem = {
  title: string;
  description: string;
  icon: string;
};

type IndustryItem = {
  title: string;
  description: string;
};

type StatItem = {
  label: string;
  value?: number;
  suffix?: string;
  display?: string;
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
      cityLabel: string;
      propertyLabel: string;
      cameraLabel: string;
      preferenceLabel: string;
      propertyOptions: string[];
      cameraOptions: string[];
      preferenceOptions: string[];
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
  packages: {
    title: string;
    subtitle: string;
    note: string;
    items: PackageItem[];
  };
  highlights: {
    title: string;
    subtitle: string;
    items: HighlightItem[];
  };
  industries: {
    title: string;
    subtitle: string;
    items: IndustryItem[];
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
  brands: {
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
      title: "CCTV Systems in Jordan | Installation & Maintenance",
      description:
        "CCTV system design, supply, installation, and maintenance across Jordan. Clean cabling, reliable storage, and remote viewing setup.",
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
      { id: "packages", label: "Packages" },
      { id: "why", label: "Why Us" },
      { id: "coverage", label: "Coverage" },
      { id: "gallery", label: "Gallery" },
      { id: "proof", label: "Proof" },
      { id: "faqs", label: "FAQs" },
      { id: "contact", label: "Contact" },
    ],
    hero: {
      badge: "CCTV Systems & Security Solutions in Jordan",
      headline: "CCTV Systems That Actually Protect Your Business.",
      subheadline:
        "Design, supply, installation, configuration, and maintenance for homes, shops, warehouses, offices, and compounds.",
      primaryCta: "Get a Free Site Visit",
      secondaryCta: "WhatsApp Now",
      tertiaryCta: "View Packages",
      chips: ["HD/4K Options", "Remote Viewing", "Fast Installation"],
      quickQuote: {
        title: "Quick CCTV Quote",
        description:
          "Share your site size and we will recommend the right system.",
        nameLabel: "Full name",
        phoneLabel: "Phone number",
        cityLabel: "City",
        propertyLabel: "Property type",
        cameraLabel: "Number of cameras",
        preferenceLabel: "System preference",
        propertyOptions: [
          "Home",
          "Shop/Retail",
          "Warehouse",
          "Office",
          "Building/Compound",
        ],
        cameraOptions: ["4 cameras", "8 cameras", "16 cameras", "Custom"],
        preferenceOptions: ["DVR", "NVR", "Not sure"],
        button: "Get My Quote",
        note: "By submitting, you agree to be contacted by THE SHADOW.",
      },
    },
    about: {
      title: "About THE SHADOW",
      short:
        "THE SHADOW designs and installs CCTV systems built for real-world sites across Jordan.",
      long:
        "From site surveys to cabling, configuration, and handover, we deliver clean installations with reliable storage and clear monitoring workflows.",
      bullets: [
        "Licensed operations aligned with local regulations",
        "Trained installers and neat cabling",
        "Documented handover and user training",
        "Maintenance and upgrade plans",
      ],
      imageAlt: "THE SHADOW CCTV installation",
    },
    services: {
      title: "CCTV Services",
      subtitle: "Design, installation, and support for every CCTV requirement.",
      items: [
        {
          title: "CCTV Installation (Home/Business)",
          description:
            "Indoor and outdoor camera installation planned for full coverage.",
          icon: "install",
        },
        {
          title: "IP Cameras & NVR Systems",
          description: "High-definition IP systems with flexible management.",
          icon: "ip",
        },
        {
          title: "Analog (DVR) Systems",
          description: "Cost-effective DVR setups with dependable recording.",
          icon: "dvr",
        },
        {
          title: "PTZ Cameras (Zoom/Tracking)",
          description: "Zoom and tracking for critical zones and perimeters.",
          icon: "ptz",
        },
        {
          title: "Access Control (Door/Gate)",
          description: "Secure entry integration for doors and gates.",
          icon: "access",
        },
        {
          title: "Video Intercom",
          description: "Visual door communication for buildings and villas.",
          icon: "intercom",
        },
        {
          title: "Network & Cabling",
          description: "Structured wiring, trunking, and clean cable routes.",
          icon: "network",
        },
        {
          title: "Maintenance & Upgrades",
          description: "Health checks, firmware updates, and system upgrades.",
          icon: "maintenance",
        },
      ],
    },
    packages: {
      title: "CCTV Packages",
      subtitle: "Start with a package and customize after the site visit.",
      note: "Storage days, camera counts, and equipment are finalized after assessment.",
      items: [
        {
          title: "Starter",
          description: "A focused setup for small spaces and shops.",
          features: [
            "4 cameras (upgradeable)",
            "1080p/2K/4K options",
            "Remote viewing setup",
            "Recording storage configured per site",
            "Installation and handover",
          ],
          ctaLabel: "Get Starter Quote",
        },
        {
          title: "Business",
          badge: "Most Popular",
          description: "Balanced coverage for offices and retail.",
          features: [
            "8 cameras (configurable)",
            "IP or DVR options",
            "Mobile app setup",
            "Up to X days storage (configurable)",
            "Installation and warranty briefing",
          ],
          ctaLabel: "Get Business Quote",
        },
        {
          title: "Pro",
          description: "Large sites, warehouses, and multi-zone coverage.",
          features: [
            "16 cameras (configurable)",
            "PTZ and specialty options",
            "Central recording and monitoring",
            "Redundancy planning",
            "On-site training",
          ],
          ctaLabel: "Get Pro Quote",
        },
        {
          title: "Custom",
          description: "Tailored systems for complex sites.",
          features: [
            "Site assessment required",
            "Custom camera count",
            "Access control integration",
            "Cabling and infrastructure planning",
            "Support plan options",
          ],
          ctaLabel: "Request Custom Quote",
        },
      ],
    },
    highlights: {
      title: "What You Get",
      subtitle:
        "Practical features that keep your footage clear and accessible.",
      items: [
        {
          title: "Mobile Remote View",
          description: "Secure iOS and Android access with live view.",
          icon: "mobile",
        },
        {
          title: "Motion Alerts",
          description: "Configurable notifications for activity zones.",
          icon: "motion",
        },
        {
          title: "Night Vision",
          description: "Reliable coverage in low-light conditions.",
          icon: "night",
        },
        {
          title: "Smart Playback & Export",
          description: "Quick search, playback, and exporting clips.",
          icon: "playback",
        },
        {
          title: "Secure System Configuration",
          description: "Hardened setup with user permissions.",
          icon: "secure",
        },
        {
          title: "Cloud/Backup Options",
          description: "Optional backup workflows when required.",
          icon: "cloud",
        },
      ],
    },
    industries: {
      title: "Industries We Serve",
      subtitle: "CCTV systems tailored to real sites and use cases.",
      items: [
        {
          title: "Retail & Shops",
          description: "Cover entrances, cash points, and aisles.",
        },
        {
          title: "Warehouses & Logistics",
          description: "Monitor loading bays and storage zones.",
        },
        {
          title: "Offices & Corporate",
          description: "Secure lobbies, corridors, and access points.",
        },
        {
          title: "Residential Villas",
          description: "Perimeter and entry coverage with remote view.",
        },
        {
          title: "Buildings & Compounds",
          description: "Shared areas, parking, and gates.",
        },
        {
          title: "Schools & Clinics",
          description: "Safety monitoring with privacy considerations.",
        },
      ],
    },
    why: {
      title: "Why Choose THE SHADOW?",
      subtitle: "Clean installs, clear coverage plans, and dependable support.",
      bullets: [
        "Compliance with local regulations",
        "Professional site survey and coverage plan",
        "Clean cabling with labeling",
        "Secure configuration and documented handover",
        "Responsive maintenance options",
      ],
      promiseTitle: "Quality Promise",
      promiseText:
        "We deliver CCTV systems with tested recording, clear handover, and support you can rely on.",
      chips: ["Site Assessment", "Clean Cabling", "Rapid Support"],
    },
    coverage: {
      title: "Installation Coverage Across Jordan",
      subtitle: "We install and support CCTV systems across Jordan.",
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
      responseNote: "Same-day assessment when available.",
    },
    stats: {
      title: "Service Snapshot",
      subtitle: "Configurable metrics - replace with verified figures.",
      note: "Replace these placeholders with verified company numbers when available.",
      items: [
        { label: "Projects Delivered", display: "Configurable" },
        { label: "System Designs", display: "Site-based" },
        { label: "Coverage Cities", display: "Across Jordan" },
        { label: "Support Response", display: "Scheduled" },
      ],
    },
    process: {
      title: "How We Work",
      steps: [
        "Site Assessment",
        "Coverage Plan",
        "Installation",
        "Configuration & Testing",
        "Training & Support",
      ],
    },
    testimonials: {
      title: "Client Feedback",
      subtitle: "Clear communication and reliable CCTV coverage.",
      items: [
        {
          quote:
            "The team mapped coverage carefully and delivered a clean installation.",
          name: "Operations Manager",
          role: "Retail Group",
        },
        {
          quote:
            "Remote viewing setup was smooth and the system is easy to use.",
          name: "Facility Lead",
          role: "Office Building",
        },
        {
          quote:
            "They explained the storage plan and handled training professionally.",
          name: "Site Owner",
          role: "Warehouse",
        },
      ],
    },
    brands: {
      title: "Brands We Support",
      subtitle:
        "Replace these placeholders with confirmed brands or platforms you install.",
      items: [
        "Brand Placeholder",
        "Brand Placeholder",
        "Brand Placeholder",
        "Brand Placeholder",
      ],
    },
    gallery: {
      title: "Gallery",
      subtitle: "Installation snapshots and CCTV system details.",
      items: [
        { src: "/images/gallery/placeholder-1.svg", alt: "CCTV gallery placeholder" },
        { src: "/images/gallery/placeholder-2.svg", alt: "CCTV gallery placeholder" },
        { src: "/images/gallery/placeholder-3.svg", alt: "CCTV gallery placeholder" },
        { src: "/images/gallery/placeholder-4.svg", alt: "CCTV gallery placeholder" },
        { src: "/images/gallery/placeholder-5.svg", alt: "CCTV gallery placeholder" },
        { src: "/images/gallery/placeholder-6.svg", alt: "CCTV gallery placeholder" },
      ],
    },
    faqs: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "Which is better for my site: DVR or NVR?",
          answer:
            "It depends on your infrastructure and budget. We recommend the right option after assessment.",
        },
        {
          question: "How many days of recording will I get?",
          answer:
            "Storage duration depends on camera count and resolution. We calculate this with you.",
        },
        {
          question: "Can I view cameras from my phone?",
          answer:
            "Yes. We set up secure mobile and desktop access for live view and playback.",
        },
        {
          question: "Do you provide warranty and maintenance?",
          answer:
            "We offer warranty and maintenance options based on the project scope.",
        },
        {
          question: "Do you install in apartments, shops, and warehouses?",
          answer: "Yes. We handle installations for all site types.",
        },
        {
          question: "What camera resolution should I choose?",
          answer:
            "We recommend 1080p, 2K, or 4K based on distance, lighting, and detail needs.",
        },
        {
          question: "Do you hide cables or use trunking?",
          answer: "We use clean cabling routes and appropriate trunking.",
        },
        {
          question: "Can you integrate access control or intercom?",
          answer: "Yes, when compatible with the selected equipment.",
        },
        {
          question: "Do you offer periodic maintenance visits?",
          answer: "Yes. Scheduled maintenance plans are available.",
        },
        {
          question: "How do I get a quote?",
          answer:
            "Fill out the request form or contact us directly for a site visit.",
        },
      ],
    },
    cta: {
      title: "Secure your site today.",
      description: "Book a free site visit and get a tailored CCTV package.",
      primary: "Get a Free Site Visit",
      secondary: "WhatsApp Now",
    },
    contact: {
      title: "Contact THE SHADOW",
      subtitle: "CCTV design, installation, and maintenance across Jordan.",
      addressLabelEn: "Address (EN)",
      addressLabelAr: "Address (AR)",
      addressEn:
        "Marj Al Hamam - Al Salam Road - Idris Commercial Complex - 1st Floor, Office 2",
      addressAr:
        "مرج الحمام - طريق السلام - مجمع ادريس التجاري - الطابق الأول مكتب رقم 2",
      phoneLabel: "Phone / WhatsApp",
      emailLabel: "Email",
      websiteLabel: "Website",
      socialLabel: "Social",
      hoursLabel: "Working Hours",
      hoursPrimary: "Office: Sunday-Thursday, 9:00-17:00",
      hoursSecondary: "Installations scheduled by appointment",
      formTitle: "Request a CCTV Quote",
      formName: "Full name",
      formPhone: "Phone number",
      formEmail: "Email address",
      formCity: "City",
      formProperty: "Property type",
      formCameraCount: "Number of cameras",
      formPreference: "System preference",
      formMessage: "Site details",
      formVerification: "Anti-spam: What is 4 + 3?",
      formSubmit: "Send Request",
      formNote: "We respond quickly during working hours.",
      verificationAnswer: "7",
      mapTitle: "Find us on the map",
      propertyOptions: [
        "Home",
        "Shop/Retail",
        "Warehouse",
        "Office",
        "Building/Compound",
      ],
      cameraOptions: ["4 cameras", "8 cameras", "16 cameras", "Custom"],
      preferenceOptions: ["DVR", "NVR", "Not sure"],
      freeVisitTitle: "Free Site Visit",
      freeVisitDescription:
        "We assess coverage zones, cabling routes, and equipment needs.",
      freeVisitItems: [
        "On-site assessment",
        "Coverage plan",
        "Itemized quote",
      ],
    },
    footer: {
      tagline: "YOUR UNSEEN POWER",
      quickLinks: "Quick Links",
      followUs: "Follow",
      copyright: "(c) 2026 THE SHADOW. All rights reserved.",
    },
  },
  ar: {
    meta: {
      title: "أنظمة CCTV في الأردن | تركيب وصيانة",
      description:
        "تصميم وتوريد وتركيب وصيانة أنظمة CCTV في الأردن. تمديدات نظيفة، تخزين موثوق، وإعداد مشاهدة عن بُعد.",
    },
    topBar: {
      phoneLabel: "اتصل",
      whatsappLabel: "واتساب",
      emailLabel: "البريد",
      languageLabel: "اللغة",
    },
    nav: [
      { id: "home", label: "الرئيسية" },
      { id: "about", label: "من نحن" },
      { id: "services", label: "الخدمات" },
      { id: "packages", label: "الباقات" },
      { id: "why", label: "لماذا نحن" },
      { id: "coverage", label: "التغطية" },
      { id: "gallery", label: "المعرض" },
      { id: "proof", label: "آراء العملاء" },
      { id: "faqs", label: "الأسئلة" },
      { id: "contact", label: "تواصل" },
    ],
    hero: {
      badge: "أنظمة CCTV وحلول المراقبة في الأردن",
      headline: "أنظمة CCTV تحمي عملك بفعالية.",
      subheadline:
        "تصميم وتوريد وتركيب وتهيئة وصيانة للمنازل، والمحلات، والمستودعات، والمكاتب، والمجمعات.",
      primaryCta: "زيارة موقع مجانية",
      secondaryCta: "واتساب الآن",
      tertiaryCta: "عرض الباقات",
      chips: ["خيارات HD/4K", "مشاهدة عن بُعد", "تركيب سريع"],
      quickQuote: {
        title: "عرض سعر سريع",
        description: "شاركنا تفاصيل موقعك لنقترح النظام الأنسب.",
        nameLabel: "الاسم الكامل",
        phoneLabel: "رقم الهاتف",
        cityLabel: "المدينة",
        propertyLabel: "نوع الموقع",
        cameraLabel: "عدد الكاميرات",
        preferenceLabel: "نوع النظام",
        propertyOptions: ["منزل", "محل/تجزئة", "مستودع", "مكتب", "مبنى/مجمع"],
        cameraOptions: ["4 كاميرات", "8 كاميرات", "16 كاميرا", "تحديد لاحق"],
        preferenceOptions: ["DVR", "NVR", "غير متأكد"],
        button: "احصل على العرض",
        note: "بالإرسال، أنت توافق على أن نتواصل معك.",
      },
    },
    about: {
      title: "عن الظل",
      short: "الظل يصمم ويثبت أنظمة CCTV مبنية لمواقع واقعية في الأردن.",
      long:
        "من المعاينة وحتى التمديدات والتهيئة والتسليم، نوفر تركيباً مرتباً مع تخزين موثوق وتدريب واضح على الاستخدام.",
      bullets: [
        "التزام بالأنظمة المحلية",
        "فنيون مدربون وتمديدات مرتبة",
        "تسليم موثق وتدريب المستخدم",
        "خطط صيانة وترقيات",
      ],
      imageAlt: "تركيب أنظمة CCTV من الظل",
    },
    services: {
      title: "خدمات CCTV",
      subtitle: "حلول تصميم وتركيب وصيانة لكل احتياج.",
      items: [
        {
          title: "تركيب CCTV (منزل/أعمال)",
          description: "تركيب كاميرات داخلية وخارجية وفق خطة تغطية واضحة.",
          icon: "install",
        },
        {
          title: "كاميرات IP وأنظمة NVR",
          description: "حلول رقمية بدقة عالية وإدارة مرنة للتسجيل.",
          icon: "ip",
        },
        {
          title: "أنظمة تناظرية (DVR)",
          description: "أنظمة DVR اقتصادية مع تسجيل موثوق.",
          icon: "dvr",
        },
        {
          title: "كاميرات PTZ (تكبير وتتبع)",
          description: "تكبير بصري وتتبع للمناطق الحساسة.",
          icon: "ptz",
        },
        {
          title: "التحكم بالدخول (أبواب/بوابات)",
          description: "دمج آمن للتحكم في الدخول.",
          icon: "access",
        },
        {
          title: "انتركم فيديو",
          description: "اتصال مرئي آمن للمداخل والأبواب.",
          icon: "intercom",
        },
        {
          title: "شبكات وتمديدات",
          description: "تمديدات منظمة ومسارات كابلات نظيفة.",
          icon: "network",
        },
        {
          title: "صيانة وترقيات",
          description: "فحص دوري وتحديثات وتحسينات للنظام.",
          icon: "maintenance",
        },
      ],
    },
    packages: {
      title: "باقات CCTV",
      subtitle: "ابدأ بباقة ثم نخصصها بعد المعاينة.",
      note: "أيام التخزين وعدد الكاميرات والأجهزة تحدد بعد التقييم.",
      items: [
        {
          title: "أساسية",
          description: "حل عملي للمساحات الصغيرة والمحلات.",
          features: [
            "4 كاميرات (قابل للترقية)",
            "خيارات 1080p/2K/4K",
            "إعداد مشاهدة عن بُعد",
            "تخزين يحدد حسب الموقع",
            "تركيب وتسليم",
          ],
          ctaLabel: "عرض الباقة الأساسية",
        },
        {
          title: "أعمال",
          badge: "الأكثر طلباً",
          description: "تغطية متوازنة للمكاتب والمتاجر.",
          features: [
            "8 كاميرات (قابل للضبط)",
            "خيارات IP أو DVR",
            "إعداد تطبيق الهاتف",
            "تخزين حتى X أيام (قابل للتعديل)",
            "شرح الضمان والتسليم",
          ],
          ctaLabel: "عرض باقة الأعمال",
        },
        {
          title: "احترافية",
          description: "للمستودعات والمواقع الكبيرة.",
          features: [
            "16 كاميرا (قابل للضبط)",
            "خيارات PTZ وكاميرات متخصصة",
            "تسجيل ومراقبة مركزية",
            "خطة تكرار وحماية",
            "تدريب في الموقع",
          ],
          ctaLabel: "عرض الباقة الاحترافية",
        },
        {
          title: "مخصصة",
          description: "حلول مفصلة للمواقع المعقدة.",
          features: [
            "تقييم موقع إلزامي",
            "عدد كاميرات مخصص",
            "دمج التحكم بالدخول",
            "تخطيط التمديدات والبنية التحتية",
            "خيارات دعم وصيانة",
          ],
          ctaLabel: "طلب عرض مخصص",
        },
      ],
    },
    highlights: {
      title: "ماذا تحصل عليه",
      subtitle: "مزايا عملية تساعدك على متابعة موقعك بثقة.",
      items: [
        {
          title: "مشاهدة عن بُعد",
          description: "وصول آمن عبر iOS وAndroid.",
          icon: "mobile",
        },
        {
          title: "تنبيهات حركة",
          description: "إشعارات قابلة للضبط لمناطق النشاط.",
          icon: "motion",
        },
        {
          title: "رؤية ليلية",
          description: "تغطية واضحة في الإضاءة المنخفضة.",
          icon: "night",
        },
        {
          title: "تشغيل وتصدير ذكي",
          description: "بحث سريع وتصدير مقاطع الفيديو.",
          icon: "playback",
        },
        {
          title: "تهيئة آمنة للنظام",
          description: "إعداد محمي مع صلاحيات مستخدمين.",
          icon: "secure",
        },
        {
          title: "خيارات سحابة/نسخ احتياطي",
          description: "خيارات إضافية عند الحاجة.",
          icon: "cloud",
        },
      ],
    },
    industries: {
      title: "قطاعات نخدمها",
      subtitle: "أنظمة CCTV مصممة حسب طبيعة الاستخدام.",
      items: [
        {
          title: "متاجر وتجزئة",
          description: "تغطية المداخل ونقاط البيع والممرات.",
        },
        {
          title: "مستودعات ولوجستيات",
          description: "مراقبة الأرصفة ومناطق التخزين.",
        },
        {
          title: "مكاتب وشركات",
          description: "تأمين المداخل والممرات والمرافق.",
        },
        {
          title: "فلل سكنية",
          description: "تغطية السور والمداخل مع مشاهدة عن بُعد.",
        },
        {
          title: "مبانٍ ومجمعات",
          description: "مواقف السيارات والمناطق المشتركة.",
        },
        {
          title: "مدارس وعيادات",
          description: "مراقبة السلامة مع مراعاة الخصوصية.",
        },
      ],
    },
    why: {
      title: "لماذا الظل؟",
      subtitle: "تركيب مرتب، تغطية مدروسة، ودعم يعتمد عليه.",
      bullets: [
        "التزام باللوائح المحلية",
        "معاينة دقيقة وخطة تغطية واضحة",
        "تمديدات نظيفة مع ترقيم",
        "تهيئة آمنة وتسليم موثق",
        "خيارات صيانة واستجابة سريعة",
      ],
      promiseTitle: "وعد الجودة",
      promiseText:
        "نوفر أنظمة CCTV مع اختبار تسجيل واضح، وتسليم موثق، ودعم مستمر.",
      chips: ["معاينة موقع", "تمديدات نظيفة", "دعم سريع"],
    },
    coverage: {
      title: "تغطية التركيب في الأردن",
      subtitle: "نقوم بالتركيب والدعم في مختلف المدن.",
      regionsLabel: "مدن رئيسية",
      regions: [
        "عمان",
        "الزرقاء",
        "إربد",
        "العقبة",
        "السلط",
        "مادبا",
        "جرش",
        "الكرك",
      ],
      responseNote: "إمكانية المعاينة في نفس اليوم حسب التوفر.",
    },
    stats: {
      title: "لمحة عن الخدمة",
      subtitle: "قيم قابلة للتعديل - استبدلها بأرقام موثقة.",
      note: "هذه نصوص قابلة للتبديل حتى تتوفر أرقام دقيقة.",
      items: [
        { label: "مشاريع منفذة", display: "حسب الموقع" },
        { label: "تصاميم أنظمة", display: "قابل للضبط" },
        { label: "مدن مغطاة", display: "في جميع الأردن" },
        { label: "استجابة الدعم", display: "مجدولة" },
      ],
    },
    process: {
      title: "كيف نعمل",
      steps: [
        "معاينة الموقع",
        "خطة التغطية",
        "التركيب",
        "التهيئة والاختبار",
        "تدريب ودعم",
      ],
    },
    testimonials: {
      title: "آراء العملاء",
      subtitle: "تواصل واضح وتغطية CCTV يمكن الاعتماد عليها.",
      items: [
        {
          quote: "الفريق رسم خطة التغطية بدقة وسلم تركيباً مرتباً.",
          name: "مدير عمليات",
          role: "مجموعة متاجر",
        },
        {
          quote: "إعداد المشاهدة عن بُعد كان سلساً والنظام واضح.",
          name: "مسؤول مرافق",
          role: "مبنى مكاتب",
        },
        {
          quote: "شرحوا خطة التخزين وقدموا تدريباً احترافياً.",
          name: "مالك الموقع",
          role: "مستودع",
        },
      ],
    },
    brands: {
      title: "العلامات المدعومة",
      subtitle: "استبدل هذه العناصر بعلامات أو منصات مؤكدة.",
      items: ["علامة تجارية", "علامة تجارية", "علامة تجارية", "علامة تجارية"],
    },
    gallery: {
      title: "المعرض",
      subtitle: "لقطات من التركيبات وتفاصيل الأنظمة.",
      items: [
        { src: "/images/gallery/placeholder-1.svg", alt: "عنصر معرض CCTV" },
        { src: "/images/gallery/placeholder-2.svg", alt: "عنصر معرض CCTV" },
        { src: "/images/gallery/placeholder-3.svg", alt: "عنصر معرض CCTV" },
        { src: "/images/gallery/placeholder-4.svg", alt: "عنصر معرض CCTV" },
        { src: "/images/gallery/placeholder-5.svg", alt: "عنصر معرض CCTV" },
        { src: "/images/gallery/placeholder-6.svg", alt: "عنصر معرض CCTV" },
      ],
    },
    faqs: {
      title: "الأسئلة الشائعة",
      items: [
        {
          question: "ما الأفضل لموقعي: DVR أم NVR؟",
          answer:
            "يعتمد ذلك على البنية التحتية والميزانية. نوصي بالحل المناسب بعد المعاينة.",
        },
        {
          question: "كم يوماً من التسجيل سأحصل؟",
          answer: "مدة التخزين تعتمد على عدد الكاميرات والدقة. نحددها معك.",
        },
        {
          question: "هل يمكن مشاهدة الكاميرات من الهاتف؟",
          answer: "نعم، نوفر إعداد مشاهدة آمن عبر الهاتف والكمبيوتر.",
        },
        {
          question: "هل تقدمون ضماناً وصيانة؟",
          answer: "نوفر خيارات ضمان وصيانة حسب نطاق المشروع.",
        },
        {
          question: "هل تركبون في الشقق والمتاجر والمستودعات؟",
          answer: "نعم، نخدم مختلف أنواع المواقع.",
        },
        {
          question: "ما الدقة التي تنصحون بها؟",
          answer: "ننصح بدقة 1080p أو 2K أو 4K حسب المسافة والإضاءة.",
        },
        {
          question: "هل تُخفون الكابلات أو تستخدمون ترنك؟",
          answer: "نلتزم بتمديدات مرتبة واستخدام مجاري مناسبة.",
        },
        {
          question: "هل يمكن دمج التحكم بالدخول أو الانتركم؟",
          answer: "نعم عند توفر الأجهزة المناسبة.",
        },
        {
          question: "هل تقدمون زيارات صيانة دورية؟",
          answer: "نعم، تتوفر خطط صيانة مجدولة.",
        },
        {
          question: "كيف أحصل على عرض سعر؟",
          answer: "تواصل معنا أو املأ نموذج الطلب وسنعود إليك سريعاً.",
        },
      ],
    },
    cta: {
      title: "أمّن موقعك اليوم.",
      description: "احجز زيارة موقع مجانية واحصل على باقة CCTV مناسبة.",
      primary: "زيارة موقع مجانية",
      secondary: "واتساب الآن",
    },
    contact: {
      title: "تواصل مع الظل",
      subtitle: "تصميم وتركيب وصيانة CCTV في الأردن.",
      addressLabelEn: "Address (EN)",
      addressLabelAr: "العنوان (AR)",
      addressEn:
        "Marj Al Hamam - Al Salam Road - Idris Commercial Complex - 1st Floor, Office 2",
      addressAr:
        "مرج الحمام - طريق السلام - مجمع ادريس التجاري - الطابق الأول مكتب رقم 2",
      phoneLabel: "الهاتف / واتساب",
      emailLabel: "البريد الإلكتروني",
      websiteLabel: "الموقع الإلكتروني",
      socialLabel: "حسابات التواصل",
      hoursLabel: "ساعات العمل",
      hoursPrimary: "المكتب: الأحد-الخميس، 9:00-17:00",
      hoursSecondary: "التركيبات حسب الموعد",
      formTitle: "طلب عرض CCTV",
      formName: "الاسم الكامل",
      formPhone: "رقم الهاتف",
      formEmail: "البريد الإلكتروني",
      formCity: "المدينة",
      formProperty: "نوع الموقع",
      formCameraCount: "عدد الكاميرات",
      formPreference: "تفضيل النظام",
      formMessage: "تفاصيل الموقع",
      formVerification: "مكافحة السبام: كم الناتج 4 + 3؟",
      formSubmit: "إرسال الطلب",
      formNote: "نرد خلال ساعات العمل بأسرع وقت.",
      verificationAnswer: "7",
      mapTitle: "موقعنا على الخريطة",
      propertyOptions: ["منزل", "محل/تجزئة", "مستودع", "مكتب", "مبنى/مجمع"],
      cameraOptions: ["4 كاميرات", "8 كاميرات", "16 كاميرا", "تحديد لاحق"],
      preferenceOptions: ["DVR", "NVR", "غير متأكد"],
      freeVisitTitle: "زيارة موقع مجانية",
      freeVisitDescription:
        "نعاين نقاط التغطية ومسارات التمديد ونحدد الاحتياجات.",
      freeVisitItems: ["معاينة الموقع", "خطة تغطية", "عرض سعر مفصل"],
    },
    footer: {
      tagline: "قوتك غير المرئية",
      quickLinks: "روابط سريعة",
      followUs: "تابعنا",
      copyright: "(c) 2026 الظل. جميع الحقوق محفوظة.",
    },
  },
};
