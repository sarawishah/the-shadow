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
    headlinePart1: string;
    headlinePart2: string;
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
  security: {
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
      title: "THE SHADOW",
      description:
        "Security services across Jordan: CCTV design & installation, guarding for facilities, risk assessment, security consultations, and 911-linked alarm systems. Clean cabling, reliable recording, and rapid support.",
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
      { id: "services", label: "Security" },
      { id: "cctv", label: "CCTV" },
      { id: "packages", label: "Packages" },
      { id: "why", label: "Why Us" },
      { id: "coverage", label: "Coverage" },
      { id: "gallery", label: "Gallery" },
      { id: "proof", label: "Proof" },
      { id: "faqs", label: "FAQs" },
      { id: "contact", label: "Contact" },
    ],
    hero: {
      badge: "",
      headline: "THE SHADOW<br>YOUR UNSEEN POWER",
      headlinePart1: "THE SHADOW",
      headlinePart2: "YOUR UNSEEN POWER",
      subheadline: "",
      primaryCta: "",
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
        "THE SHADOW delivers end-to-end security: guarding, risk assessment, alarms, and CCTV systems across Jordan.",
      long:
        "From risk assessment and compliance planning to installation, configuration, training, and ongoing support, we deliver clean work with clear operating procedures and dependable response.",
      bullets: [
        "Licensed and compliant with Jordanian regulations",
        "Trained, vetted personnel and professional technicians",
        "Documented handover, user training, and clear SOPs",
        "Maintenance, upgrades, and rapid support",
      ],
      imageAlt: "THE SHADOW CCTV installation",
    },
    security: {
      title: "Security & Protection",
      subtitle: "Guarding, assessments, alarms, and surveillance—built around your site and risks.",
      items: [
        {
          id: "guarding",
          title: "Security & Protection for Facilities",
          description: "Guarding for residential complexes, homes, and commercial properties.",
          icon: "shield",
          href: "#service-guarding",
        },
        {
          id: "consultations",
          title: "Security Consultations",
          description: "Providing security consultations for your facilities with the highest standards.",
          icon: "command",
          href: "#service-consultations",
        },
        {
          id: "risk",
          title: "Risk Assessment Services",
          description: "Comprehensive assessment of threats and vulnerabilities with practical mitigation plan.",
          icon: "risk",
          href: "#service-risk",
        },
        {
          id: "alarms",
          title: "Safety & Alarm Systems Installation",
          description: "Design and installation of alarm systems and linking them to response and emergency procedures.",
          icon: "alarm",
          href: "#service-alarms",
        },
        {
          id: "cctv",
          title: "CCTV Cameras",
          description:
            "Design, supply, installation, configuration, and maintenance of CCTV systems.",
          icon: "camera",
          href: "#service-cctv",
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
          description: "A practical solution for small spaces and shops.",
          features: [
            "4 cameras (1080p / 2K)",
            "Up to 7 days recording (expandable)",
            "Remote viewing setup (mobile + desktop)",
            "Professional installation and clean cabling",
            "User training + 1-year warranty",
          ],
          ctaLabel: "Choose Starter – 4 Cameras",
        },
        {
          title: "Business",
          badge: "Most Popular",
          description: "Balanced coverage for offices and shops.",
          features: [
            "8 cameras (1080p / 2K / 4K)",
            "IP (NVR) or DVR options based on site",
            "Up to 14 days recording (expandable)",
            "App setup and secure user permissions",
            "Installation + training + 1-year warranty",
          ],
          ctaLabel: "Choose Business – 8 Cameras",
        },
        {
          title: "Pro",
          description: "For warehouses and large sites.",
          features: [
            "16 cameras (2K / 4K)",
            "Up to 30 days recording (expandable)",
            "PTZ options and specialty cameras for gates and fences",
            "Central monitoring and periodic checks",
            "On-site training + 1-year warranty",
          ],
          ctaLabel: "Choose Pro – 16 Cameras",
        },
        {
          title: "Custom",
          description: "Tailored systems for complex sites.",
          features: [
            "Site assessment required",
            "Custom camera count",
            "Mixed resolutions and camera types",
            "Access control + alarm integration",
            "Infrastructure planning (network, power, storage)",
            "Training, warranty, and support plans",
          ],
          ctaLabel: "Request Custom Design",
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
      subtitle: "",
      note: "",
      items: [],
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
      subtitle: "Equipment options are selected based on site requirements and compatibility.",
      items: ["Hikvision", "Dahua", "Uniview", "TP-Link (Networking)"],
    },
    gallery: {
      title: "Gallery",
      subtitle: "Installation snapshots and CCTV system details.",
      items: [
        {
          src: "https://images.unsplash.com/photo-1603791452906-bc2be0dbe3a9?auto=format&fit=crop&w=1400&q=80",
          alt: "CCTV camera installed on a building exterior",
        },
        {
          src: "https://images.unsplash.com/photo-1581091215367-59ab6b5a3a85?auto=format&fit=crop&w=1400&q=80",
          alt: "Security technician performing a site assessment",
        },
        {
          src: "https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=1400&q=80",
          alt: "Control room monitoring multiple CCTV screens",
        },
        {
          src: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=1400&q=80",
          alt: "Network cabling and rack equipment for surveillance",
        },
        {
          src: "https://images.unsplash.com/photo-1558008258-89d0d4b38e4f?auto=format&fit=crop&w=1400&q=80",
          alt: "Outdoor camera and perimeter security coverage",
        },
        {
          src: "https://images.unsplash.com/photo-1581091870630-3d0f7f68c2c3?auto=format&fit=crop&w=1400&q=80",
          alt: "Technician configuring CCTV equipment",
        },
      ],
    },
    faqs: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "Do you provide guarding services for facilities?",
          answer:
            "Yes. We provide trained on-site personnel for residential and commercial facilities, with shift planning and supervision options based on your needs.",
        },
        {
          question: "Do you offer risk assessment and security planning?",
          answer:
            "Yes. We assess threats, vulnerabilities, and site workflow, then provide a practical mitigation plan including procedures and recommended systems.",
        },
        {
          question: "Can you install 911-linked alarm systems?",
          answer:
            "Yes. We design and install alarm systems and configure monitoring/response workflows according to your site requirements.",
        },
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
      title: "Contact  THE SHADOW for Security and Protection ",
      subtitle: "",
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
      tagline: " YOUR UNSEEN POWER",
      quickLinks: "Quick Links",
      followUs: "Follow",
      copyright: "(c) 2026 THE SHADOW. All rights reserved.",
    },
  },
  ar: {
    meta: {
      title: "THE SHADOW",
      description:
        "خدمات أمنية في الأردن تشمل: كاميرات CCTV، حراسة المنشآت، تقديم المخاطر، الاستشارات الأمنية، وأنظمة الإنذار المرتبطة بـ 911. تركيب مرتب وتخزين موثوق ودعم سريع.",
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
      { id: "services", label: "الأمن والحماية" },
      { id: "cctv", label: "كاميرات CCTV" },
      { id: "packages", label: "الباقات" },
      { id: "why", label: "لماذا نحن" },
      { id: "coverage", label: "التغطية" },
      { id: "gallery", label: "المعرض" },
      { id: "proof", label: "آراء العملاء" },
      { id: "faqs", label: "الأسئلة" },
      { id: "contact", label: "تواصل" },
    ],
    hero: {
      badge: "",
      headline: "THE SHADOW<br>YOUR UNSEEN POWER",
      headlinePart1: "شركة الظل",
      headlinePart2: " للأمن والحماية",
      subheadline: "",
      primaryCta: "",
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
      short: "الظل يقدم حلول أمن متكاملة: حراسة، تقدير مخاطر، إنذار، وكاميرات CCTV في الأردن.",
      long:
        "من المعاينة وتقدير المخاطر وحتى التركيب والتهيئة والتسليم والتدريب والدعم، نوفر عملاً مرتباً وإجراءات تشغيل واضحة واستجابة موثوقة.",
      bullets: [
        "مرخصون وملتزمون باللوائح الأردنية",
        "كوادر مدربة ومُعتمدة وفنيون محترفون",
        "تسليم موثق وتدريب وإجراءات تشغيل واضحة",
        "صيانة وترقيات ودعم سريع",
      ],
      imageAlt: "تركيب أنظمة CCTV من الظل",
    },
    security: {
      title: "الأمن والحماية",
      subtitle: "حراسة وتقدير مخاطر وإنذار ومراقبة—مصممة حسب احتياج موقعك.",
      items: [
        {
          id: "guarding",
          title: "خدمات الأمن والحماية وحراسة المنشآت",
          description: "حراسة للمجمعات والمنازل والمنشآت التجارية .",
          icon: "shield",
          href: "#service-guarding",
        },
        {
          id: "consultations",
          title: "الاستشارات الأمنية",
          description: "تقديم الاستشارات الأمنية لمنشآتكم باعلى المعايير",
          icon: "command",
          href: "#service-consultations",
        },
        {
          id: "risk",
          title: "تقديم خدمة تقييم المخاطر",
          description: "تقييم شامل للتهديدات ونقاط الضعف مع خطة معالجة عملية.",
          icon: "risk",
          href: "#service-risk",
        },
        {
          id: "alarms",
          title: "تركيب أجهزة الأمان والإنذار",
          description: "تصميم وتركيب أنظمة إنذار وربطها بإجراءات الاستجابة والطوارئ.",
          icon: "alarm",
          href: "#service-alarms",
        },
        {
          id: "cctv",
          title: "كاميرات المراقبة",
          description: "تركيب كاميرات المراقبة عالية الجودة.",
          icon: "camera",
          href: "#service-cctv",
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
            "4 كاميرات (1080p / 2K)",
            "تسجيل حتى 7 أيام (قابل للزيادة)",
            "إعداد مشاهدة عن بُعد (هاتف + كمبيوتر)",
            "تركيب احترافي وتمديدات مرتبة",
            "تدريب المستخدم + ضمان سنة",
          ],
          ctaLabel: "اختر الأساسية – 4 كاميرات",
        },
        {
          title: "أعمال",
          badge: "الأكثر طلباً",
          description: "تغطية متوازنة للمكاتب والمتاجر.",
          features: [
            "8 كاميرات (1080p / 2K / 4K)",
            "خيارات IP (NVR) أو DVR حسب الموقع",
            "تسجيل حتى 14 يوم (قابل للزيادة)",
            "إعداد التطبيق وصلاحيات مستخدمين آمنة",
            "تركيب + تدريب + ضمان سنة",
          ],
          ctaLabel: "اختر الأعمال – 8 كاميرات",
        },
        {
          title: "احترافية",
          description: "للمستودعات والمواقع الكبيرة.",
          features: [
            "16 كاميرا (2K / 4K)",
            "تسجيل حتى 30 يوم (قابل للزيادة)",
            "خيارات PTZ وكاميرات متخصصة للبوابات والسور",
            "مراقبة مركزية وفحوصات دورية",
            "تدريب في الموقع + ضمان سنة",
          ],
          ctaLabel: "اختر الاحترافية – 16 كاميرا",
        },
        {
          title: "مخصصة",
          description: "حلول مفصلة للمواقع المعقدة.",
          features: [
            "تقييم موقع إلزامي",
            "عدد كاميرات مخصص",
            "أنواع كاميرات ودقات متعددة",
            "دمج التحكم بالدخول والإنذار",
            "تخطيط الشبكة والطاقة والتخزين",
            "تدريب وضمان وخيارات دعم وصيانة",
          ],
          ctaLabel: "طلب تصميم مخصص",
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
      subtitle: "",
      note: "",
      items: [],
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
      subtitle: "نختار الأجهزة حسب احتياج الموقع والتوافق الفني.",
      items: ["Hikvision", "Dahua", "Uniview", "TP-Link (شبكات)"],
    },
    gallery: {
      title: "المعرض",
      subtitle: "لقطات من التركيبات وتفاصيل الأنظمة.",
      items: [
        {
          src: "https://images.unsplash.com/photo-1603791452906-bc2be0dbe3a9?auto=format&fit=crop&w=1400&q=80",
          alt: "كاميرا مراقبة مثبتة على واجهة مبنى",
        },
        {
          src: "https://images.unsplash.com/photo-1581091215367-59ab6b5a3a85?auto=format&fit=crop&w=1400&q=80",
          alt: "فني أمن يقوم بمعاينة الموقع",
        },
        {
          src: "https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=1400&q=80",
          alt: "غرفة تحكم لمراقبة شاشات متعددة",
        },
        {
          src: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=1400&q=80",
          alt: "تمديدات شبكات وتجهيزات رف لمعدات المراقبة",
        },
        {
          src: "https://images.unsplash.com/photo-1558008258-89d0d4b38e4f?auto=format&fit=crop&w=1400&q=80",
          alt: "مراقبة محيط خارجية بكاميرات",
        },
        {
          src: "https://images.unsplash.com/photo-1581091870630-3d0f7f68c2c3?auto=format&fit=crop&w=1400&q=80",
          alt: "تهيئة وبرمجة معدات CCTV",
        },
      ],
    },
    faqs: {
      title: "الأسئلة الشائعة",
      items: [
        {
          question: "هل تقدمون خدمات حراسة للمنشآت؟",
          answer:
            "نعم. نوفر كوادر حراسة مدربة للمنشآت السكنية والتجارية مع خيارات ورديات وإشراف حسب الاحتياج.",
        },
        {
          question: "هل تقدمون تقدير مخاطر وخطة أمنية؟",
          answer:
            "نعم. نقيم التهديدات ونقاط الضعف وآلية العمل في الموقع، ثم نقدم خطة معالجة عملية تشمل الإجراءات والأنظمة المقترحة.",
        },
        {
          question: "هل يمكن تركيب أنظمة إنذار مرتبطة بـ 911؟",
          answer:
            "نعم. نصمم ونركب أنظمة الإنذار ونجهز آلية الاستجابة والمتابعة حسب احتياج الموقع.",
        },
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
      title: "تواصل  مع الظل للأمن والحماية ",
      subtitle: "",
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
      tagline: " YOUR UNSEEN POWER",
      quickLinks: "روابط سريعة",
      followUs: "تابعنا",
      copyright: "(c) 2026 الظل. جميع الحقوق محفوظة.",
    },
  },
};
