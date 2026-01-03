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
      title: "THE SHADOW | CCTV Systems in Jordan",
      description:
        "CCTV system design, installation, and monitoring support across Jordan. Professional technicians, clean cabling, and reliable storage.",
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
      badge: "CCTV & Surveillance Systems in Jordan",
      headline: "CCTV Systems You Can Rely On.",
      subheadline:
        "Design, supply, installation, and monitoring support for CCTV and security systems across Jordan - built for clarity, compliance, and dependable coverage.",
      primaryCta: "Request a CCTV Quote",
      secondaryCta: "Call Now",
      tertiaryCta: "WhatsApp",
      chips: ["Professional Install", "Remote Access Setup", "Ongoing Support"],
      quickQuote: {
        title: "Quick CCTV Quote",
        description:
          "Tell us your site size and coverage goals and we will propose the right CCTV system.",
        nameLabel: "Full name",
        phoneLabel: "Phone number",
        serviceLabel: "CCTV service needed",
        button: "Send Request",
        note: "By submitting, you agree to be contacted by THE SHADOW.",
      },
    },
    about: {
      title: "About THE SHADOW",
      short:
        "THE SHADOW delivers CCTV and surveillance systems for businesses, facilities, and residences across Jordan.",
      long:
        "We handle site surveys, system design, installation, and structured handover. Our technicians focus on clean cabling, reliable storage, and simple monitoring workflows.",
      bullets: [
        "Licensed operations aligned with local regulations",
        "Trained technicians and clean installations",
        "Documented handover and user training",
        "Maintenance and support plans",
      ],
      imageAlt: "THE SHADOW CCTV monitoring room",
    },
    services: {
      title: "CCTV Solutions",
      subtitle:
        "End-to-end CCTV and security system services tailored for every site.",
      items: [
        {
          title: "Site Survey & System Design",
          description:
            "Coverage planning, camera placement, and infrastructure assessment.",
          icon: "risk",
        },
        {
          title: "CCTV Camera Installation",
          description:
            "Indoor and outdoor cameras installed for clarity and coverage.",
          icon: "camera",
        },
        {
          title: "Recording & Storage Setup",
          description: "NVR/DVR configuration with reliable retention.",
          icon: "command",
        },
        {
          title: "Remote Viewing & Mobile Access",
          description: "Secure access setup for mobile and desktop.",
          icon: "access",
        },
        {
          title: "Perimeter & Outdoor Coverage",
          description: "Weather-ready cameras and perimeter protection.",
          icon: "shield",
        },
        {
          title: "Maintenance & Health Checks",
          description: "Preventive maintenance, testing, and upgrades.",
          icon: "patrol",
        },
      ],
    },
    why: {
      title: "Why Choose THE SHADOW?",
      subtitle: "Clean installs, clear coverage plans, and dependable support.",
      bullets: [
        "Compliance with local regulations",
        "Trained technicians & safe cabling",
        "Documented coverage plans",
        "Tested recording and storage",
        "Ongoing support and maintenance",
      ],
      promiseTitle: "Quality Promise",
      promiseText:
        "We deliver compliant CCTV systems with documented handover, performance checks, and clear support plans.",
    },
    coverage: {
      title: "Coverage Across Jordan",
      subtitle: "Installations and support across Jordan.",
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
        "Deployment timing depends on site size, hardware availability, and installation scope.",
    },
    stats: {
      title: "CCTV Highlights",
      subtitle:
        "Placeholder metrics - replace with verified figures when available.",
      note:
        "These numbers are placeholders for presentation only. Update with verified company metrics.",
      items: [
        { label: "Sites Protected", value: 180, suffix: "+", isPlaceholder: true },
        { label: "Cameras Installed", value: 950, suffix: "+", isPlaceholder: true },
        { label: "Years of Experience", value: 12, suffix: "+", isPlaceholder: true },
        { label: "Cities Covered", value: 8, suffix: "+", isPlaceholder: true },
      ],
    },
    process: {
      title: "How We Work",
      steps: [
        "Site Survey",
        "Coverage Plan",
        "Installation",
        "Testing & Handover",
        "Maintenance & Support",
      ],
    },
    testimonials: {
      title: "Client Confidence",
      subtitle: "Clear coverage plans, clean installs, and reliable support.",
      items: [
        {
          quote:
            "The coverage plan was clear and the installation was clean and professional.",
          name: "Facility Manager",
          role: "Commercial Site",
        },
        {
          quote:
            "Remote viewing works smoothly and the storage setup is dependable.",
          name: "Operations Lead",
          role: "Warehouse",
        },
        {
          quote:
            "They delivered a full handover with testing and clear guidance.",
          name: "Site Owner",
          role: "Residential Compound",
        },
      ],
    },
    clients: {
      title: "Trusted By",
      subtitle: "Replace these placeholders with confirmed client logos.",
      items: [
        "Retail & Commercial",
        "Residential Compounds",
        "Warehouses",
        "Schools & Campuses",
        "Hospitality",
        "Healthcare",
      ],
    },
    gallery: {
      title: "Gallery",
      subtitle: "CCTV installations, control rooms, and system snapshots.",
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
          question: "Do you supply and install cameras?",
          answer:
            "Yes. We design the system, supply the hardware, and install cameras with proper coverage.",
        },
        {
          question: "Can I view cameras remotely?",
          answer:
            "Yes. We set up secure mobile and desktop access so you can view your system anywhere.",
        },
        {
          question: "Do you provide site surveys?",
          answer:
            "Yes. We assess the site and propose camera placement and coverage zones.",
        },
        {
          question: "What types of cameras do you install?",
          answer:
            "We recommend indoor, outdoor, fixed, or PTZ cameras based on site needs and lighting.",
        },
        {
          question: "How long does installation take?",
          answer:
            "Timing depends on site size and scope. We schedule installation promptly after survey.",
        },
        {
          question: "Do you offer maintenance?",
          answer:
            "Yes. We provide preventive maintenance, testing, and upgrade options.",
        },
        {
          question: "Can you integrate access control or alarms?",
          answer:
            "Yes, where compatible. We can integrate CCTV with access control or alarm systems.",
        },
        {
          question: "Do you handle storage and recording?",
          answer:
            "Yes. We configure NVR/DVR storage and retention based on your requirements.",
        },
        {
          question: "What areas do you cover?",
          answer:
            "We serve clients across Jordan, including Amman, Zarqa, Irbid, and Aqaba.",
        },
        {
          question: "How do I request a quote?",
          answer:
            "Use the quick quote form or contact us directly by phone, email, or WhatsApp.",
        },
      ],
    },
    cta: {
      title: "Upgrade your CCTV coverage today.",
      description:
        "Tell us your site layout and we will design a CCTV system with the right cameras, storage, and monitoring.",
      primary: "Request a CCTV Quote",
      secondary: "WhatsApp",
    },
    contact: {
      title: "Contact THE SHADOW CCTV",
      subtitle: "Reach us for CCTV design, installation, and support.",
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
      hoursPrimary: "Support Desk: Sunday-Thursday, 9:00-17:00",
      hoursSecondary: "Installations scheduled by appointment",
      formTitle: "Request a CCTV Quote",
      formName: "Full name",
      formPhone: "Phone number",
      formEmail: "Email address",
      formService: "CCTV service needed",
      formMessage: "Site details",
      formVerification: "Anti-spam: What is 4 + 3?",
      formSubmit: "Send Request",
      formNote: "We respond quickly during working hours and as soon as possible otherwise.",
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
      title: "الظل للأمن والحماية | أنظمة CCTV في الأردن",
      description:
        "تصميم وتركيب ودعم أنظمة كاميرات المراقبة في الأردن. فنيون محترفون، تمديدات نظيفة، وتخزين موثوق.",
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
      badge: "أنظمة كاميرات مراقبة في الأردن",
      headline: "أنظمة CCTV يمكنك الاعتماد عليها.",
      subheadline:
        "تصميم وتوريد وتركيب ودعم مراقبة لأنظمة CCTV في الأردن - مبنية على وضوح الصورة، والالتزام، وتغطية موثوقة.",
      primaryCta: "اطلب عرض CCTV",
      secondaryCta: "اتصل الآن",
      tertiaryCta: "واتساب",
      chips: ["تركيب احترافي", "وصول عن بُعد", "دعم مستمر"],
      quickQuote: {
        title: "عرض CCTV سريع",
        description: "شارك مساحة الموقع واحتياجات التغطية لنقترح النظام الأنسب.",
        nameLabel: "الاسم الكامل",
        phoneLabel: "رقم الهاتف",
        serviceLabel: "خدمة CCTV المطلوبة",
        button: "إرسال الطلب",
        note: "بالإرسال، أنت توافق على أن نتواصل معك.",
      },
    },
    about: {
      title: "عن الظل",
      short:
        "الظل توفر أنظمة كاميرات مراقبة للمنشآت والأعمال والمنازل في الأردن.",
      long:
        "نقوم بمعاينة الموقع وتصميم النظام والتركيب والتسليم المنظم. نركز على تمديدات نظيفة وتخزين موثوق وسهولة الاستخدام.",
      bullets: [
        "عمليات مرخصة ومتوافقة مع التشريعات",
        "فنيون مدرّبون وتركيبات نظيفة",
        "تسليم موثق وتدريب المستخدم",
        "خطط صيانة ودعم",
      ],
      imageAlt: "غرفة مراقبة CCTV لدى الظل",
    },
    services: {
      title: "حلول كاميرات المراقبة",
      subtitle: "خدمات متكاملة لأنظمة CCTV تناسب كل موقع.",
      items: [
        {
          title: "معاينة الموقع وتصميم النظام",
          description:
            "تخطيط التغطية وتحديد مواقع الكاميرات والبنية التحتية.",
          icon: "risk",
        },
        {
          title: "تركيب كاميرات المراقبة",
          description:
            "كاميرات داخلية وخارجية مع وضوح وتغطية مناسبة.",
          icon: "camera",
        },
        {
          title: "إعداد التسجيل والتخزين",
          description: "تهيئة NVR/DVR مع حفظ موثوق.",
          icon: "command",
        },
        {
          title: "المشاهدة عن بُعد",
          description: "إعداد وصول آمن للجوال والكمبيوتر.",
          icon: "access",
        },
        {
          title: "تغطية المحيط والخارج",
          description: "حلول للبيئات الخارجية وتغطية المحيط.",
          icon: "shield",
        },
        {
          title: "الصيانة والفحص الدوري",
          description: "صيانة وقائية واختبارات وترقيات.",
          icon: "patrol",
        },
      ],
    },
    why: {
      title: "لماذا تختار الظل؟",
      subtitle: "تركيبات نظيفة وخطط تغطية واضحة ودعم موثوق.",
      bullets: [
        "الالتزام بالتشريعات المحلية",
        "فنيون مدربون وتمديدات آمنة",
        "خطط تغطية موثقة",
        "اختبار التسجيل والتخزين",
        "دعم وصيانة مستمرة",
      ],
      promiseTitle: "وعد الجودة",
      promiseText:
        "نقدم أنظمة CCTV متوافقة مع الأنظمة مع تسليم موثق وفحوصات أداء وخطط دعم واضحة.",
    },
    coverage: {
      title: "التغطية في جميع أنحاء الأردن",
      subtitle: "تركيبات ودعم في مختلف مناطق المملكة.",
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
      responseNote:
        "يعتمد زمن التنفيذ على حجم الموقع وتوفر الأجهزة ونطاق التركيب.",
    },
    stats: {
      title: "مؤشرات CCTV",
      subtitle:
        "أرقام توضيحية فقط - يرجى تحديثها بأرقام مؤكدة عند توفرها.",
      note: "هذه أرقام توضيحية للعرض فقط. يرجى تحديثها بأرقام مؤكدة.",
      items: [
        { label: "مواقع محمية", value: 180, suffix: "+", isPlaceholder: true },
        { label: "كاميرات مركبة", value: 950, suffix: "+", isPlaceholder: true },
        { label: "سنوات خبرة", value: 12, suffix: "+", isPlaceholder: true },
        { label: "مدن مخدومة", value: 8, suffix: "+", isPlaceholder: true },
      ],
    },
    process: {
      title: "كيف نعمل",
      steps: [
        "معاينة الموقع",
        "خطة التغطية",
        "التركيب",
        "الاختبار والتسليم",
        "الصيانة والدعم",
      ],
    },
    testimonials: {
      title: "ثقة العملاء",
      subtitle: "خطط تغطية واضحة وتركيبات نظيفة ودعم موثوق.",
      items: [
        {
          quote: "خطة التغطية كانت واضحة والتركيب كان نظيفًا واحترافيًا.",
          name: "مدير منشأة",
          role: "قطاع تجاري",
        },
        {
          quote: "الوصول عن بُعد يعمل بسلاسة والتخزين ثابت.",
          name: "مدير عمليات",
          role: "مستودعات",
        },
        {
          quote: "تم التسليم مع اختبار كامل وإرشادات واضحة.",
          name: "مالك منشأة",
          role: "مجمع سكني",
        },
      ],
    },
    clients: {
      title: "موثوقون لدى",
      subtitle: "استبدل هذه العناصر بشعارات العملاء المعتمدة.",
      items: [
        "قطاع تجاري وتجزئة",
        "مجمعات سكنية",
        "مستودعات",
        "مدارس وجامعات",
        "ضيافة وفنادق",
        "مرافق صحية",
      ],
    },
    gallery: {
      title: "المعرض",
      subtitle: "تركيبات CCTV وغرف تحكم ولقطات من الأنظمة.",
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
          question: "هل توفرون وتقومون بتركيب الكاميرات؟",
          answer:
            "نعم. نصمم النظام ونوفر الأجهزة ونقوم بالتركيب مع تغطية مناسبة.",
        },
        {
          question: "هل يمكنني مشاهدة الكاميرات عن بُعد؟",
          answer: "نعم. نجهز وصولًا آمنًا للجوال والكمبيوتر.",
        },
        {
          question: "هل تقدمون معاينة للموقع؟",
          answer:
            "نعم. نعاين الموقع ونقترح مواقع الكاميرات ومناطق التغطية.",
        },
        {
          question: "ما أنواع الكاميرات التي تنصحون بها؟",
          answer:
            "نوصي بكاميرات داخلية أو خارجية وثابتة أو متحركة حسب احتياج الموقع والإضاءة.",
        },
        {
          question: "كم يستغرق التركيب؟",
          answer:
            "يعتمد على حجم الموقع ونطاق العمل. نحدد المدة بعد المعاينة.",
        },
        {
          question: "هل تقدمون الصيانة؟",
          answer: "نعم. نوفر صيانة وقائية واختبارات وخيارات ترقية.",
        },
        {
          question: "هل يمكن دمج النظام مع التحكم بالدخول أو الإنذار؟",
          answer:
            "نعم عند التوافق. يمكن دمج CCTV مع أنظمة الدخول أو الإنذار.",
        },
        {
          question: "هل توفرون التسجيل والتخزين؟",
          answer: "نعم. نقوم بإعداد التخزين والتسجيل وفق احتياجاتكم.",
        },
        {
          question: "ما المناطق التي تغطونها؟",
          answer:
            "نخدم العملاء في جميع أنحاء الأردن بما في ذلك عمّان والزرقاء وإربد والعقبة.",
        },
        {
          question: "كيف أطلب عرض سعر؟",
          answer:
            "يمكنك استخدام نموذج الطلب أو التواصل معنا عبر الهاتف أو البريد أو واتساب.",
        },
      ],
    },
    cta: {
      title: "طوّر تغطية كاميراتك اليوم.",
      description:
        "أخبرنا بتفاصيل الموقع لنصمم نظام CCTV مناسبًا بالكاميرات والتخزين والمراقبة.",
      primary: "اطلب عرض CCTV",
      secondary: "واتساب",
    },
    contact: {
      title: "تواصل مع الظل - CCTV",
      subtitle: "تواصل معنا لتصميم وتركيب ودعم أنظمة كاميرات المراقبة.",
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
      hoursPrimary: "الدعم الفني: الأحد-الخميس، 9:00-17:00",
      hoursSecondary: "التركيب حسب المواعيد",
      formTitle: "طلب عرض CCTV",
      formName: "الاسم الكامل",
      formPhone: "رقم الهاتف",
      formEmail: "البريد الإلكتروني",
      formService: "خدمة CCTV المطلوبة",
      formMessage: "تفاصيل الموقع",
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
