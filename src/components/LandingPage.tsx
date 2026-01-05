"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { siteContent, Language } from "@/content/siteContent";

const CONTACT = {
  phone: "+962790000157",
  phoneDisplay: "+962 79 0000 157",
  whatsapp: "https://wa.me/962790000157",
  email: "info@shadowjo.com",
  website: "www.shadowjo.com",
  instagram: "https://www.instagram.com/shadow.j0/",
};

const mapEmbedUrl =
  "https://www.google.com/maps?q=Marj%20Al%20Hamam%20Jordan&output=embed";

type IconProps = {
  name: string;
  className?: string;
};

function Icon({ name, className }: IconProps) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "phone":
      return (
        <svg {...common}>
          <path d="M5 4h4l2 5-2 2a13 13 0 0 0 6 6l2-2 5 2v4a2 2 0 0 1-2 2c-9 0-16-7-16-16a2 2 0 0 1 2-2z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <path d="M4 6h16v12H4z" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      );
    case "map":
      return (
        <svg {...common}>
          <path d="M12 21s6-6 6-11a6 6 0 0 0-12 0c0 5 6 11 6 11z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 3" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg {...common}>
          <path d="M20 11a8 8 0 0 1-11.5 7l-4 1 1.2-3.8A8 8 0 1 1 20 11z" />
          <path d="M8.5 10.5c1.2 2 3 3.5 5.5 4.5l1.5-1.4 2 1.1-1 2c-2.8.4-6-1.2-8-3.2-2-2-3.6-5.2-3.2-8l2-1 1.1 2-1.4 1.5z" />
        </svg>
      );
    default:
      return null;
  }
}

function ServiceIcon({ name, className }: IconProps) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "alarm":
      return (
        <svg {...common}>
          <path d="M12 9a5 5 0 0 0-5 5v3h10v-3a5 5 0 0 0-5-5z" />
          <path d="M9 18v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1" />
          <path d="M12 4v2" />
          <path d="M4.5 8.5 6 10" />
          <path d="M19.5 8.5 18 10" />
        </svg>
      );
    case "install":
      return (
        <svg {...common}>
          <rect x="3" y="7" width="18" height="12" rx="2" />
          <circle cx="12" cy="13" r="3" />
          <path d="M8 7l2-3h4l2 3" />
          <path d="m7 15 2 2 4-4" />
        </svg>
      );
    case "ip":
      return (
        <svg {...common}>
          <circle cx="6" cy="12" r="2.5" />
          <circle cx="18" cy="6" r="2.5" />
          <circle cx="18" cy="18" r="2.5" />
          <path d="M8.5 11 15.5 7" />
          <path d="M8.5 13 15.5 17" />
        </svg>
      );
    case "dvr":
      return (
        <svg {...common}>
          <rect x="3" y="7" width="18" height="10" rx="2" />
          <path d="M7 17v2M17 17v2" />
          <circle cx="8" cy="12" r="1" />
          <circle cx="12" cy="12" r="1" />
          <circle cx="16" cy="12" r="1" />
        </svg>
      );
    case "ptz":
      return (
        <svg {...common}>
          <rect x="6" y="4" width="12" height="5" rx="2" />
          <circle cx="12" cy="14" r="4" />
          <path d="M12 2v2M12 18v2M4 14h2M18 14h2" />
        </svg>
      );
    case "intercom":
      return (
        <svg {...common}>
          <rect x="7" y="3" width="10" height="18" rx="2" />
          <circle cx="12" cy="14" r="1.5" />
          <path d="M12 7v3" />
        </svg>
      );
    case "network":
      return (
        <svg {...common}>
          <rect x="3" y="6" width="6" height="6" rx="1" />
          <rect x="9" y="9" width="6" height="6" rx="1" />
          <rect x="15" y="12" width="6" height="6" rx="1" />
          <path d="M9 9 6 6M15 12 12 9" />
        </svg>
      );
    case "maintenance":
      return (
        <svg {...common}>
          <path d="M14 6a4 4 0 0 0 4 4l-6 6-4-4 6-6z" />
          <path d="M5 19l3-3" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3 5 7v5c0 4.5 3 8.5 7 10 4-1.5 7-5.5 7-10V7l-7-4z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "vip":
      return (
        <svg {...common}>
          <circle cx="12" cy="7" r="3" />
          <path d="M4.5 21c1.5-3.5 5-5 7.5-5s6 1.5 7.5 5" />
          <path d="m6 12 2.5 2 2.5-4 2.5 4 2.5-2" />
        </svg>
      );
    case "event":
      return (
        <svg {...common}>
          <rect x="4" y="6" width="16" height="14" rx="2" />
          <path d="M8 3v4M16 3v4M4 10h16" />
        </svg>
      );
    case "patrol":
      return (
        <svg {...common}>
          <path d="M3 15h14l3 3v2H3z" />
          <path d="M6 15 9 9h7l2 6" />
          <circle cx="7.5" cy="20" r="1.5" />
          <circle cx="16.5" cy="20" r="1.5" />
        </svg>
      );
    case "camera":
      return (
        <svg {...common}>
          <rect x="3" y="7" width="18" height="12" rx="2" />
          <circle cx="12" cy="13" r="3" />
          <path d="M8 7l2-3h4l2 3" />
        </svg>
      );
    case "access":
      return (
        <svg {...common}>
          <circle cx="7" cy="14" r="3" />
          <path d="M10 14h11M16 14v4M19 14v2" />
        </svg>
      );
    case "risk":
      return (
        <svg {...common}>
          <path d="m12 3 9 16H3z" />
          <path d="M12 9v5M12 17h.01" />
        </svg>
      );
    case "command":
      return (
        <svg {...common}>
          <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
          <path d="M6 13v4a2 2 0 0 0 2 2h1" />
          <path d="M18 13v4a2 2 0 0 1-2 2h-1" />
          <path d="M9 19h6" />
        </svg>
      );
    default:
      return null;
  }
}

function HighlightIcon({ name, className }: IconProps) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "mobile":
      return (
        <svg {...common}>
          <rect x="7" y="2.5" width="10" height="19" rx="2" />
          <path d="M11 18.5h2" />
        </svg>
      );
    case "motion":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
          <path d="M3 12a9 9 0 0 1 9-9" />
          <path d="M21 12a9 9 0 0 0-9-9" />
        </svg>
      );
    case "night":
      return (
        <svg {...common}>
          <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.5 6.5 0 0 0 21 12.8z" />
        </svg>
      );
    case "playback":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4l3 2" />
        </svg>
      );
    case "secure":
      return (
        <svg {...common}>
          <path d="M12 3 5 7v5c0 4.5 3 8.5 7 10 4-1.5 7-5.5 7-10V7l-7-4z" />
          <rect x="9" y="11" width="6" height="5" rx="1" />
          <path d="M10.5 11V9a1.5 1.5 0 0 1 3 0v2" />
        </svg>
      );
    case "cloud":
      return (
        <svg {...common}>
          <path d="M7 18h10a4 4 0 0 0 0-8 5 5 0 0 0-9-2A4 4 0 0 0 7 18z" />
        </svg>
      );
    default:
      return null;
  }
}

type CounterProps = {
  value: number;
  suffix?: string;
  reducedMotion: boolean;
};

function Counter({ value, suffix, reducedMotion }: CounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    if (reducedMotion) {
      setDisplay(value);
      return;
    }
    let start = 0;
    const duration = 1200;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const nextValue = Math.floor(progress * (value - start) + start);
      setDisplay(nextValue);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, reducedMotion, value]);

  return (
    <span ref={ref} className="text-3xl font-semibold text-white md:text-4xl">
      {display}
      {suffix}
    </span>
  );
}

type LangToggleProps = {
  lang: Language;
  onChange: (lang: Language) => void;
  className?: string;
};

function LangToggle({ lang, onChange, className }: LangToggleProps) {
  return (
    <div className={`flex items-center gap-2 ${className || ""}`.trim()}>
      <button
        type="button"
        onClick={() => onChange("en")}
        className={`text-xs uppercase tracking-[0.2em] transition ${
          lang === "en" ? "text-white" : "text-white/50"
        }`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <span className="text-white/20">|</span>
      <button
        type="button"
        onClick={() => onChange("ar")}
        className={`text-xs uppercase tracking-[0.2em] transition ${
          lang === "ar" ? "text-white" : "text-white/50"
        }`}
        aria-pressed={lang === "ar"}
      >
        العربية
      </button>
    </div>
  );
}

function MapGraphic({ lang }: { lang: Language }) {
  const labels =
    lang === "ar"
      ? { amman: "عمّان", madaba: "مادبا", aqaba: "العقبة" }
      : { amman: "Amman", madaba: "Madaba", aqaba: "Aqaba" };
  return (
    <svg
      viewBox="0 0 360 480"
      className="h-full w-full max-w-sm text-white/80"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <path
        d="M120 30 230 70 290 170 265 250 300 360 225 430 130 410 80 320 55 230 85 140z"
        fill="rgba(255,255,255,0.04)"
      />
      <circle cx="190" cy="190" r="6" fill="#DF8063" />
      <circle cx="160" cy="250" r="5" fill="#DF8063" opacity="0.7" />
      <circle cx="210" cy="310" r="5" fill="#DF8063" opacity="0.7" />
      <path
        d="M190 190v60M190 250h-30M190 250h25"
        stroke="rgba(223,128,99,0.6)"
        strokeDasharray="4 6"
      />
      <text x="200" y="180" fontSize="12" fill="#EAEAEA">
        {labels.amman}
      </text>
      <text x="130" y="265" fontSize="12" fill="#EAEAEA">
        {labels.madaba}
      </text>
      <text x="220" y="330" fontSize="12" fill="#EAEAEA">
        {labels.aqaba}
      </text>
    </svg>
  );
}

export default function LandingPage() {
  const [lang, setLang] = useState<Language>("en");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState<string | null>(null);
  const [formContext, setFormContext] = useState<"quick-quote" | "contact" | null>(
    null
  );
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const logoOffset = useTransform(scrollY, [0, 300], [0, -20]);
  const content = siteContent[lang];
  const rtl = lang === "ar";
  const containerClass = "mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8";

  useEffect(() => {
    const stored = window.localStorage.getItem("shadow-lang");
    if (stored === "en" || stored === "ar") {
      setLang(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dir = rtl ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    window.localStorage.setItem("shadow-lang", lang);
  }, [lang, rtl]);

  useEffect(() => {
    const shouldLock = lightboxIndex !== null;
    document.body.style.overflow = shouldLock ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightboxIndex(null);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [lightboxIndex]);

  const reveal = (delay = 0) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: reduceMotion ? 0 : 0.6, delay },
  });

  const galleryItem =
    lightboxIndex !== null ? content.gallery.items[lightboxIndex] : null;

  const sendMail = (subject: string, body: string) => {
    const mailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  const handleQuickQuoteSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (data.get("company")) return;
    setFormError(null);
    setFormSuccess(null);
    setFormContext("quick-quote");
    const body = [
      content.hero.quickQuote.title,
      `${content.hero.quickQuote.nameLabel}: ${data.get("name")}`,
      `${content.hero.quickQuote.phoneLabel}: ${data.get("phone")}`,
      `${content.hero.quickQuote.cityLabel}: ${data.get("city")}`,
      `${content.hero.quickQuote.propertyLabel}: ${data.get("property")}`,
      `${content.hero.quickQuote.cameraLabel}: ${data.get("cameraCount")}`,
      `${content.hero.quickQuote.preferenceLabel}: ${data.get("preference")}`,
      `Language: ${data.get("lang") || lang}`,
    ].join("\n");
    sendMail(content.hero.quickQuote.title, body);
    setFormSuccess(
      lang === "ar"
        ? "تم فتح مسودة البريد الإلكتروني. يرجى الإرسال لإكمال الطلب."
        : "Email draft opened. Please send it to complete your request."
    );
    form.reset();
  };

  const handleContactSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (data.get("company")) return;
    setFormError(null);
    setFormSuccess(null);
    setFormContext("contact");
    const body = [
      `${content.contact.formName}: ${data.get("name")}`,
      `${content.contact.formPhone}: ${data.get("phone")}`,
      `${content.contact.formEmail}: ${data.get("email")}`,
      `${content.contact.formCity}: ${data.get("city")}`,
      `${content.contact.formProperty}: ${data.get("property")}`,
      `${content.contact.formCameraCount}: ${data.get("cameraCount")}`,
      `${content.contact.formPreference}: ${data.get("preference")}`,
      `${content.contact.formMessage}: ${data.get("message")}`,
      `Language: ${data.get("lang") || lang}`,
    ].join("\n");
    sendMail(content.contact.formTitle, body);
    setFormSuccess(
      lang === "ar"
        ? "تم فتح مسودة البريد الإلكتروني. يرجى الإرسال لإكمال الطلب."
        : "Email draft opened. Please send it to complete your request."
    );
    form.reset();
  };

  const brandName = lang === "ar" ? "الظل للأمن والحماية" : "THE SHADOW";
  const logoAlt = lang === "ar" ? "شعار الظل" : "THE SHADOW logo";
  const closeLabel = lang === "ar" ? "إغلاق" : "Close";

  const serviceDetails = {
    en: {
      guarding: {
        title: "Security & Protection for Facilities",
        summary:
          "On-site protection and guarding services designed for daily operations, visitors, and incident prevention.",
        bullets: [
          "Trained and vetted personnel",
          "Shift planning (day/night) and reporting",
          "Entry/visitor control procedures",
          "Coordination with CCTV and alarm response",
        ],
      },
      consultations: {
        title: "Security Consultations",
        summary:
          "Expert guidance to reduce risk, improve coverage planning, and align with regulations and best practice.",
        bullets: [
          "Surveillance planning and camera placement",
          "Policies, SOPs, and escalation workflows",
          "Compliance-focused recommendations",
          "Budget-friendly phased upgrade plans",
        ],
      },
      risk: {
        title: "Risk Assessment Services",
        summary:
          "A practical evaluation of threats and vulnerabilities with a clear mitigation plan.",
        bullets: [
          "Site walk-through and threat mapping",
          "Vulnerability findings and priorities",
          "Mitigation plan and implementation roadmap",
          "Security system recommendations",
        ],
      },
      alarms: {
        title: "Safety & 911-Linked Alarm Systems",
        summary:
          "Alarm design and installation with monitoring/response workflows built for your facility.",
        bullets: [
          "Alarm system design and installation",
          "Zoning and sensor placement",
          "Emergency response workflow setup",
          "Testing and user training",
        ],
      },
      cctv: {
        title: "CCTV Cameras",
        summary:
          "End-to-end CCTV delivery: design, supply, installation, configuration, and maintenance.",
        bullets: [
          "1080p / 2K / 4K options",
          "Recording storage planning (7/14/30 days)",
          "Secure remote viewing and user roles",
          "Clean cabling, handover, and warranty",
        ],
      },
    },
    ar: {
      guarding: {
        title: "خدمات الأمن والحماية وحراسة المنشآت",
        summary:
          "حراسة وتنظيم عمليات الموقع واستقبال الزوار والحد من المخاطر بطريقة احترافية.",
        bullets: [
          "كوادر مدربة ومُعتمدة",
          "تنظيم ورديات وتقارير دورية",
          "إجراءات دخول وزوار",
          "تنسيق مع كاميرات CCTV وأنظمة الإنذار",
        ],
      },
      consultations: {
        title: "الاستشارات الأمنية",
        summary:
          "استشارة عملية لتقليل المخاطر وتحسين خطة المراقبة والالتزام باللوائح.",
        bullets: [
          "تخطيط توزيع الكاميرات ونقاط التغطية",
          "إجراءات تشغيل وتصعيد واضحة",
          "توصيات تراعي الأنظمة",
          "خطة تطوير مرحلية حسب الميزانية",
        ],
      },
      risk: {
        title: "تقديم خدمة تقدير المخاطر",
        summary:
          "تقييم شامل للتهديدات ونقاط الضعف مع خطة معالجة واضحة وقابلة للتطبيق.",
        bullets: [
          "معاينة الموقع وتحليل التهديدات",
          "تحديد نقاط الضعف والأولويات",
          "خطة معالجة وجدول تنفيذ",
          "توصيات الأنظمة والإجراءات",
        ],
      },
      alarms: {
        title: "تركيب أجهزة الأمان والإنذار المرتبطة ب٩١١",
        summary:
          "تصميم وتركيب أنظمة إنذار مع آلية متابعة واستجابة تناسب طبيعة الموقع.",
        bullets: [
          "تصميم وتركيب أنظمة الإنذار",
          "تقسيم مناطق وحساسات",
          "تجهيز آلية الاستجابة والمتابعة",
          "اختبار وتدريب المستخدم",
        ],
      },
      cctv: {
        title: "كاميرات المراقبة",
        summary:
          "حلول CCTV كاملة: تصميم وتوريد وتركيب وتهيئة وصيانة.",
        bullets: [
          "خيارات 1080p / 2K / 4K",
          "خطة تخزين (7/14/30 يوم)",
          "مشاهدة عن بُعد وصلاحيات مستخدمين",
          "تمديدات مرتبة وتسليم وضمان",
        ],
      },
    },
  } as const;

  const activeDetails = serviceDetails[lang];
  const galleryFallbackSrc = "/assets/logo-render-2.jpeg";

  return (
    <div className="relative">
      <header className="glass-header sticky top-0 z-50">
        <div
          className={`${containerClass} flex flex-col gap-3 py-3 sm:flex-row sm:items-center sm:justify-between`}
        >
          <div
            className={`flex items-center gap-3 ${rtl ? "flex-row-reverse" : ""}`}
          >
            <Image
              src="/assets/logo-render-1.jpeg"
              alt={logoAlt}
              width={40}
              height={40}
              className="h-9 w-9 rounded-full object-cover sm:h-10 sm:w-10"
              priority
            />
            <div
              className={`flex flex-col ${rtl ? "items-end text-right" : "items-start text-left"}`}
            >
              <p className="text-[0.6rem] uppercase tracking-[0.25em] text-white/60 sm:text-xs sm:tracking-[0.3em]">
                {brandName}
              </p>
              <p className="text-[0.55rem] leading-tight text-white/40 sm:text-[0.65rem]">
                {content.footer.tagline}
              </p>
            </div>
          </div>

          <div
            className={`flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end ${
              rtl ? "sm:flex-row-reverse" : ""
            }`}
          >
            <a
              href="#contact"
              className="btn-primary w-full !px-5 !py-2 !text-xs sm:w-auto"
            >
              {content.hero.primaryCta}
            </a>
            <a
              href={CONTACT.whatsapp}
              className={`icon-button !p-2 text-[color:var(--color-accent)] ${
                rtl ? "self-end sm:self-auto" : "self-start sm:self-auto"
              }`}
              aria-label={content.topBar.whatsappLabel}
            >
              <Icon name="whatsapp" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <section
          id="home"
          className="relative overflow-hidden pb-20 pt-28 lg:pb-28 lg:pt-36"
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(223,128,99,0.18),_transparent_55%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(255,255,255,0.04),_transparent_35%)]" />
          </div>
          <div className={`${containerClass} relative z-10`}>
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div
                className={`flex flex-col gap-6 ${
                  rtl ? "text-right items-end" : "text-left items-start"
                }`}
              >
                <span className="chip">{content.hero.badge}</span>
                <motion.div
                  className="relative h-32 w-32 sm:h-40 sm:w-40"
                  initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: reduceMotion ? 0 : 0.8 }}
                  style={{ y: reduceMotion ? 0 : logoOffset }}
                >
                  <div className="absolute inset-0 rounded-full bg-black/40 blur-2xl glow-ring" />
                  <Image
                    src="/assets/logo-render-2.jpeg"
                    alt={logoAlt}
                    fill
                    className="rounded-full object-cover shadow-2xl"
                    sizes="(min-width: 1024px) 160px, 128px"
                    priority
                  />
                  <div className="spotlight-sweep" />
                </motion.div>
                <motion.h1
                  className="section-title text-white"
                  {...reveal()}
                >
                  {content.hero.headline}
                </motion.h1>
                <motion.p
                  className="max-w-xl text-base text-white/70 md:text-lg"
                  {...reveal(0.1)}
                >
                  {content.hero.subheadline}
                </motion.p>
                <motion.div
                  className={`flex flex-col gap-4 sm:flex-row ${
                    rtl ? "items-end sm:justify-end" : "items-start sm:justify-start"
                  }`}
                  {...reveal(0.2)}
                >
                  <a href="#contact" className="btn-primary w-full sm:w-auto">
                    {content.hero.primaryCta}
                  </a>
                  <a href={CONTACT.whatsapp} className="btn-secondary w-full sm:w-auto">
                    {content.hero.secondaryCta}
                  </a>
                  <a href="#packages" className="btn-outline w-full sm:w-auto">
                    {content.hero.tertiaryCta}
                  </a>
                </motion.div>
                <motion.div
                  className={`flex flex-wrap gap-3 ${
                    rtl ? "justify-end" : "justify-start"
                  }`}
                  {...reveal(0.3)}
                >
                  {content.hero.chips.map((chip) => (
                    <span key={chip} className="chip">
                      {chip}
                    </span>
                  ))}
                </motion.div>
              </div>

              <motion.div className="card p-8" {...reveal(0.1)}>
                <div
                  className={`flex flex-col gap-4 ${
                    rtl ? "text-right" : "text-left"
                  }`}
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                      {content.hero.quickQuote.title}
                    </p>
                    <h3 className="mt-2 text-2xl text-white">
                      {content.hero.quickQuote.description}
                    </h3>
                  </div>
                  <form
                    className="grid gap-4 sm:grid-cols-2"
                    onSubmit={handleQuickQuoteSubmit}
                  >
                    <input type="hidden" name="lang" value={lang} />
                    <input
                      type="text"
                      name="company"
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                    <label className="text-xs uppercase tracking-[0.2em] text-white/50">
                      {content.hero.quickQuote.nameLabel}
                      <input
                        name="name"
                        required
                        className="input-field mt-2"
                        placeholder={content.hero.quickQuote.nameLabel}
                      />
                    </label>
                    <label className="text-xs uppercase tracking-[0.2em] text-white/50">
                      {content.hero.quickQuote.phoneLabel}
                      <input
                        name="phone"
                        required
                        className="input-field mt-2"
                        placeholder={content.hero.quickQuote.phoneLabel}
                      />
                    </label>
                    <label className="text-xs uppercase tracking-[0.2em] text-white/50">
                      {content.hero.quickQuote.cityLabel}
                      <input
                        name="city"
                        required
                        className="input-field mt-2"
                        placeholder={content.hero.quickQuote.cityLabel}
                      />
                    </label>
                    <label className="text-xs uppercase tracking-[0.2em] text-white/50">
                      {content.hero.quickQuote.propertyLabel}
                      <select
                        name="property"
                        className="input-field mt-2"
                        defaultValue=""
                        required
                      >
                        <option value="" disabled>
                          {content.hero.quickQuote.propertyLabel}
                        </option>
                        {content.hero.quickQuote.propertyOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className="text-xs uppercase tracking-[0.2em] text-white/50">
                      {content.hero.quickQuote.cameraLabel}
                      <select
                        name="cameraCount"
                        className="input-field mt-2"
                        defaultValue=""
                        required
                      >
                        <option value="" disabled>
                          {content.hero.quickQuote.cameraLabel}
                        </option>
                        {content.hero.quickQuote.cameraOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className="text-xs uppercase tracking-[0.2em] text-white/50">
                      {content.hero.quickQuote.preferenceLabel}
                      <select
                        name="preference"
                        className="input-field mt-2"
                        defaultValue=""
                        required
                      >
                        <option value="" disabled>
                          {content.hero.quickQuote.preferenceLabel}
                        </option>
                        {content.hero.quickQuote.preferenceOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </label>
                    {formContext === "quick-quote" && formError && (
                      <p className="text-xs text-[color:var(--color-accent)] sm:col-span-2">
                        {formError}
                      </p>
                    )}
                    {formContext === "quick-quote" && formSuccess && (
                      <p className="text-xs text-white/70 sm:col-span-2">{formSuccess}</p>
                    )}
                    <button type="submit" className="btn-primary w-full sm:col-span-2">
                      {content.hero.quickQuote.button}
                    </button>
                    <p className="text-xs text-white/50 sm:col-span-2">
                      {content.hero.quickQuote.note}
                    </p>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className={`${containerClass} grid gap-10 lg:grid-cols-2`}>
            <motion.div
              className={`flex items-center justify-center ${
                rtl ? "order-2 lg:order-1" : ""
              }`}
              {...reveal()}
            >
              <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10">
                <Image
                  src="/assets/logo-render-3.jpeg"
                  alt={content.about.imageAlt}
                  width={520}
                  height={520}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(223,128,99,0.2),_transparent_60%)]" />
              </div>
            </motion.div>
            <motion.div
              className={`flex flex-col gap-6 ${
                rtl ? "text-right items-end" : "text-left items-start"
              }`}
              {...reveal(0.1)}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                {content.about.title}
              </p>
              <h2 className="section-title text-white">{content.about.short}</h2>
              <p className="text-base text-white/70">{content.about.long}</p>
              <ul className="grid gap-3 text-sm text-white/70">
                {content.about.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--color-accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>
        <section id="services" className="section">
          <div className={containerClass}>
            <motion.div
              className={`flex flex-col gap-4 ${
                rtl ? "text-right items-end" : "text-left items-start"
              }`}
              {...reveal()}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                {content.security.title}
              </p>
              <h2 className="section-title text-white">
                {content.security.subtitle}
              </h2>
            </motion.div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {content.security.items.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="card card-hover group flex h-full flex-col gap-4 p-6"
                  {...reveal(0.05 * index)}
                >
                  <div className="flex items-center justify-between">
                    <ServiceIcon
                      name={service.icon}
                      className="h-9 w-9 text-[color:var(--color-accent)] transition group-hover:drop-shadow-[0_0_12px_rgba(223,128,99,0.6)]"
                    />
                    <span className="text-xs uppercase tracking-[0.3em] text-white/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-lg text-white">{service.title}</h3>
                  <p className="text-sm text-white/60">{service.description}</p>
                  <a
                    href={service.href || "#contact"}
                    className="mt-auto inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[color:var(--color-accent)] transition group-hover:translate-x-1"
                  >
                    {lang === "ar" ? "اعرف المزيد" : "Learn More"}
                    <span aria-hidden="true">-&gt;</span>
                  </a>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {content.security.items.map((service, index) => {
                const detail = activeDetails[service.id as keyof typeof activeDetails];
                if (!detail) return null;
                return (
                  <motion.div
                    key={service.id}
                    id={`service-${service.id}`}
                    className="card p-6"
                    {...reveal(0.03 * index)}
                  >
                    <div className={`flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between ${rtl ? "sm:flex-row-reverse" : ""}`}>
                      <div className={`flex items-center gap-3 ${rtl ? "flex-row-reverse" : ""}`}>
                        <ServiceIcon
                          name={service.icon}
                          className="mt-0.5 h-8 w-8 text-[color:var(--color-accent)]"
                        />
                        <h3 className="text-lg text-white">{detail.title}</h3>
                      </div>
                      <a
                        href="#contact"
                        className="btn-outline w-full sm:w-auto"
                      >
                        {lang === "ar" ? "اطلب استشارة" : "Request a Consultation"}
                      </a>
                    </div>
                    <p className={`mt-4 text-sm text-white/70 ${rtl ? "text-right" : "text-left"}`}>
                      {detail.summary}
                    </p>
                    <ul className={`mt-4 grid gap-2 text-sm text-white/60 ${rtl ? "text-right" : "text-left"}`}>
                      {detail.bullets.map((item) => (
                        <li key={item} className={`flex items-start gap-2 ${rtl ? "flex-row-reverse" : ""}`}>
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="cctv" className="section">
          <div className={containerClass}>
            <motion.div
              className={`flex flex-col gap-4 ${rtl ? "text-right items-end" : "text-left items-start"}`}
              {...reveal()}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                {content.cctvServices.title}
              </p>
              <h2 className="section-title text-white">{content.cctvServices.subtitle}</h2>
            </motion.div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {content.cctvServices.items.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="card card-hover group flex h-full flex-col gap-4 p-6"
                  {...reveal(0.05 * index)}
                >
                  <div className="flex items-center justify-between">
                    <ServiceIcon
                      name={service.icon}
                      className="h-9 w-9 text-[color:var(--color-accent)] transition group-hover:drop-shadow-[0_0_12px_rgba(223,128,99,0.6)]"
                    />
                    <span className="text-xs uppercase tracking-[0.3em] text-white/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-lg text-white">{service.title}</h3>
                  <p className="text-sm text-white/60">{service.description}</p>
                  <a
                    href="#packages"
                    className="mt-auto inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[color:var(--color-accent)] transition group-hover:translate-x-1"
                  >
                    {lang === "ar" ? "عرض الباقات" : "View Packages"}
                    <span aria-hidden="true">-&gt;</span>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="packages" className="section">
          <div className={containerClass}>
            <motion.div
              className={`flex flex-col gap-4 ${
                rtl ? "text-right items-end" : "text-left items-start"
              }`}
              {...reveal()}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                {content.packages.title}
              </p>
              <h2 className="section-title text-white">
                {content.packages.subtitle}
              </h2>
            </motion.div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {content.packages.items.map((pkg, index) => {
                const featured = Boolean(pkg.badge);
                return (
                  <motion.div
                    key={pkg.title}
                    className={`card card-hover flex h-full flex-col gap-4 p-6 ${
                      featured
                        ? "border-[color:var(--color-accent)] shadow-[0_24px_70px_rgba(223,128,99,0.18)]"
                        : ""
                    }`}
                    {...reveal(0.05 * index)}
                  >
                    {pkg.badge && (
                      <span className="chip border-[color:var(--color-accent)] text-[color:var(--color-accent)]">
                        {pkg.badge}
                      </span>
                    )}
                    <h3 className="text-xl text-white">{pkg.title}</h3>
                    <p className="text-sm text-white/70">{pkg.description}</p>
                    <ul className="grid gap-2 text-sm text-white/60">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#contact"
                      className={featured ? "btn-primary w-full" : "btn-outline w-full"}
                    >
                      {pkg.ctaLabel}
                    </a>
                  </motion.div>
                );
              })}
            </div>
            <p className="mt-6 text-xs text-white/40">{content.packages.note}</p>
          </div>
        </section>

        <section id="highlights" className="section">
          <div className={containerClass}>
            <motion.div
              className={`flex flex-col gap-4 ${
                rtl ? "text-right items-end" : "text-left items-start"
              }`}
              {...reveal()}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                {content.highlights.title}
              </p>
              <h2 className="section-title text-white">
                {content.highlights.subtitle}
              </h2>
            </motion.div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {content.highlights.items.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="card card-hover flex h-full flex-col gap-4 p-6"
                  {...reveal(0.05 * index)}
                >
                  <HighlightIcon
                    name={item.icon}
                    className="h-9 w-9 text-[color:var(--color-accent)]"
                  />
                  <h3 className="text-lg text-white">{item.title}</h3>
                  <p className="text-sm text-white/60">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="industries" className="section">
          <div className={containerClass}>
            <motion.div
              className={`flex flex-col gap-4 ${
                rtl ? "text-right items-end" : "text-left items-start"
              }`}
              {...reveal()}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                {content.industries.title}
              </p>
              <h2 className="section-title text-white">
                {content.industries.subtitle}
              </h2>
            </motion.div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {content.industries.items.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="card flex h-full flex-col gap-3 p-6"
                  {...reveal(0.05 * index)}
                >
                  <h3 className="text-lg text-white">{item.title}</h3>
                  <p className="text-sm text-white/60">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="section">
          <div className={`${containerClass} grid gap-10 lg:grid-cols-[1.1fr_0.9fr]`}>
            <motion.div
              className={`flex flex-col gap-5 ${
                rtl ? "text-right items-end" : "text-left items-start"
              }`}
              {...reveal()}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                {content.why.title}
              </p>
              <h2 className="section-title text-white">{content.why.subtitle}</h2>
              <ul className="grid gap-3 text-sm text-white/70">
                {content.why.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--color-accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div className="card p-8" {...reveal(0.1)}>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                {content.why.promiseTitle}
              </p>
              <h3 className="mt-4 text-2xl text-white">
                {content.why.promiseText}
              </h3>
              <div className="mt-6 flex flex-wrap gap-3">
                {content.why.chips.map((chip) => (
                  <span key={chip} className="chip">
                    {chip}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="coverage" className="section">
          <div className={`${containerClass} grid gap-10 lg:grid-cols-2`}>
            <motion.div
              className={`flex flex-col gap-6 ${
                rtl ? "text-right items-end" : "text-left items-start"
              }`}
              {...reveal()}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                {content.coverage.title}
              </p>
              <h2 className="section-title text-white">
                {content.coverage.subtitle}
              </h2>
              <div className="flex flex-wrap gap-3">
                {content.coverage.regions.map((region) => (
                  <span key={region} className="chip">
                    {region}
                  </span>
                ))}
              </div>
              <p className="text-sm text-white/60">
                {content.coverage.responseNote}
              </p>
            </motion.div>
            <motion.div className="card flex items-center justify-center p-8" {...reveal(0.1)}>
              <MapGraphic lang={lang} />
            </motion.div>
          </div>
        </section>
        {content.stats.items.length > 0 && (
          <section className="section">
            <div className={containerClass}>
              <motion.div
                className={`flex flex-col gap-4 ${
                  rtl ? "text-right items-end" : "text-left items-start"
                }`}
                {...reveal()}
              >
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                  {content.stats.title}
                </p>
                <h2 className="section-title text-white">{content.stats.subtitle}</h2>
              </motion.div>
              <div className="mt-10 grid gap-6 md:grid-cols-4">
                {content.stats.items.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="card flex flex-col gap-3 p-6 text-center"
                    {...reveal(0.05 * index)}
                  >
                    {stat.display ? (
                      <span className="text-xl font-semibold text-white md:text-2xl">
                        {stat.display}
                      </span>
                    ) : stat.value !== undefined ? (
                      <Counter
                        value={stat.value}
                        suffix={stat.suffix}
                        reducedMotion={Boolean(reduceMotion)}
                      />
                    ) : null}
                    <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
              <p className="mt-6 text-xs text-white/40">{content.stats.note}</p>
            </div>
          </section>
        )}

        <section className="section">
          <div className={containerClass}>
            <motion.div
              className={`flex flex-col gap-4 ${
                rtl ? "text-right items-end" : "text-left items-start"
              }`}
              {...reveal()}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                {content.process.title}
              </p>
            </motion.div>
            <div className="mt-8 grid gap-6 md:grid-cols-5">
              {content.process.steps.map((step, index) => (
                <motion.div
                  key={step}
                  className="card flex flex-col gap-3 p-6"
                  {...reveal(0.05 * index)}
                >
                  <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-white">{step}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="proof" className="section">
          <div className={containerClass}>
            <motion.div
              className={`flex flex-col gap-4 ${
                rtl ? "text-right items-end" : "text-left items-start"
              }`}
              {...reveal()}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                {content.testimonials.title}
              </p>
              <h2 className="section-title text-white">
                {content.testimonials.subtitle}
              </h2>
            </motion.div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {content.testimonials.items.map((testimonial, index) => (
                <motion.div
                  key={testimonial.quote}
                  className="card flex h-full flex-col gap-4 p-6"
                  {...reveal(0.05 * index)}
                >
                  <p className="text-sm text-white/70">“{testimonial.quote}”</p>
                  <div className="mt-auto">
                    <p className="text-sm text-white">{testimonial.name}</p>
                    <p className="text-xs text-white/50">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className={`mt-16 flex flex-col gap-4 ${
                rtl ? "text-right items-end" : "text-left items-start"
              }`}
              {...reveal(0.1)}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                {content.brands.title}
              </p>
              <p className="text-sm text-white/60">{content.brands.subtitle}</p>
              <div className="mt-4 grid gap-4 md:grid-cols-4">
                {content.brands.items.map((brand) => (
                  <div key={brand} className="card p-5 text-center">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                      {brand}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        <section id="gallery" className="section">
          <div className={containerClass}>
            <motion.div
              className={`flex flex-col gap-4 ${
                rtl ? "text-right items-end" : "text-left items-start"
              }`}
              {...reveal()}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                {content.gallery.title}
              </p>
              <h2 className="section-title text-white">
                {content.gallery.subtitle}
              </h2>
            </motion.div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {content.gallery.items.map((item, index) => (
                <motion.button
                  key={item.src}
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  className="group relative overflow-hidden rounded-2xl border border-white/10"
                  {...reveal(0.05 * index)}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    onError={(event) => {
                      const img = event.currentTarget;
                      if (img.src.includes(galleryFallbackSrc)) return;
                      img.src = galleryFallbackSrc;
                    }}
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 transition group-hover:opacity-100" />
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        <section id="faqs" className="section">
          <div className={containerClass}>
            <motion.div
              className={`flex flex-col gap-4 ${
                rtl ? "text-right items-end" : "text-left items-start"
              }`}
              {...reveal()}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                {content.faqs.title}
              </p>
            </motion.div>
            <div className="mt-8 grid gap-4">
              {content.faqs.items.map((faq, index) => (
                <motion.details
                  key={faq.question}
                  className="card p-6"
                  {...reveal(0.03 * index)}
                >
                  <summary className="cursor-pointer text-sm font-semibold text-white">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm text-white/70">{faq.answer}</p>
                </motion.details>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className={containerClass}>
            <motion.div
              className="card flex flex-col gap-6 border border-[color:rgba(223,128,99,0.3)] bg-[radial-gradient(circle_at_top,_rgba(223,128,99,0.25),_rgba(0,0,0,0.7))] p-10 md:flex-row md:items-center md:justify-between"
              {...reveal()}
            >
              <div
                className={`flex flex-col gap-3 ${
                  rtl ? "text-right" : "text-left"
                }`}
              >
                <h2 className="text-2xl text-white">{content.cta.title}</h2>
                <p className="text-sm text-white/70">{content.cta.description}</p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a href="#contact" className="btn-primary w-full sm:w-auto">
                  {content.cta.primary}
                </a>
                <a href={CONTACT.whatsapp} className="btn-outline w-full sm:w-auto">
                  {content.cta.secondary}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className={`${containerClass} grid gap-10 lg:grid-cols-2`}>
            <motion.div
              className={`flex flex-col gap-6 ${
                rtl ? "text-right items-end" : "text-left items-start"
              }`}
              {...reveal()}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                {content.contact.title}
              </p>
              <h2 className="section-title text-white">
                {content.contact.subtitle}
              </h2>
              <div className="grid gap-4 text-sm text-white/70">
                <div className="flex items-start gap-3">
                  <Icon name="map" className="mt-1 h-5 w-5 text-white/60" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                      {content.contact.addressLabelEn}
                    </p>
                    <p>{content.contact.addressEn}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/50">
                      {content.contact.addressLabelAr}
                    </p>
                    <p>{content.contact.addressAr}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="phone" className="mt-1 h-5 w-5 text-white/60" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                      {content.contact.phoneLabel}
                    </p>
                    <a
                      href={`tel:${CONTACT.phone}`}
                      className="block transition hover:text-white"
                    >
                      {CONTACT.phoneDisplay}
                    </a>
                    <a
                      href={CONTACT.whatsapp}
                      className="block transition hover:text-white"
                    >
                      {content.topBar.whatsappLabel}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="mail" className="mt-1 h-5 w-5 text-white/60" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                      {content.contact.emailLabel}
                    </p>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="transition hover:text-white"
                    >
                      {CONTACT.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="clock" className="mt-1 h-5 w-5 text-white/60" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                      {content.contact.hoursLabel}
                    </p>
                    <p>{content.contact.hoursPrimary}</p>
                    <p>{content.contact.hoursSecondary}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="map" className="mt-1 h-5 w-5 text-white/60" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                      {content.contact.websiteLabel}
                    </p>
                    <a
                      href="https://shadowjo.com"
                      className="transition hover:text-white"
                    >
                      {CONTACT.website}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="whatsapp" className="mt-1 h-5 w-5 text-white/60" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                      {content.contact.socialLabel}
                    </p>
                    <a
                      href={CONTACT.instagram}
                      className="transition hover:text-white"
                    >
                      @shadow.jo
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full overflow-hidden rounded-2xl border border-white/10">
                <iframe
                  title={content.contact.mapTitle}
                  src={mapEmbedUrl}
                  className="h-64 w-full"
                  loading="lazy"
                />
              </div>
            </motion.div>

            <motion.div className="flex flex-col gap-6" {...reveal(0.1)}>
              <div className="card p-6">
                <div
                  className={`flex flex-col gap-3 ${
                    rtl ? "text-right" : "text-left"
                  }`}
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                    {content.contact.freeVisitTitle}
                  </p>
                  <p className="text-sm text-white/70">
                    {content.contact.freeVisitDescription}
                  </p>
                  <ul className="grid gap-2 text-sm text-white/60">
                    {content.contact.freeVisitItems.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="card p-8">
                <div
                  className={`flex flex-col gap-4 ${
                    rtl ? "text-right" : "text-left"
                  }`}
                >
                  <h3 className="text-2xl text-white">
                    {content.contact.formTitle}
                  </h3>
                  <form
                    className="grid gap-4 sm:grid-cols-2"
                    onSubmit={handleContactSubmit}
                  >
                    <input type="hidden" name="lang" value={lang} />
                    <input
                      type="text"
                      name="company"
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                    <label className="text-xs uppercase tracking-[0.2em] text-white/50">
                      {content.contact.formName}
                      <input
                        name="name"
                        required
                        className="input-field mt-2"
                        placeholder={content.contact.formName}
                      />
                    </label>
                    <label className="text-xs uppercase tracking-[0.2em] text-white/50">
                      {content.contact.formPhone}
                      <input
                        name="phone"
                        required
                        className="input-field mt-2"
                        placeholder={content.contact.formPhone}
                      />
                    </label>
                    <label className="text-xs uppercase tracking-[0.2em] text-white/50">
                      {content.contact.formEmail}
                      <input
                        name="email"
                        type="email"
                        required
                        className="input-field mt-2"
                        placeholder={content.contact.formEmail}
                      />
                    </label>
                    <label className="text-xs uppercase tracking-[0.2em] text-white/50">
                      {content.contact.formCity}
                      <input
                        name="city"
                        required
                        className="input-field mt-2"
                        placeholder={content.contact.formCity}
                      />
                    </label>
                    <label className="text-xs uppercase tracking-[0.2em] text-white/50">
                      {content.contact.formProperty}
                      <select
                        name="property"
                        className="input-field mt-2"
                        defaultValue=""
                        required
                      >
                        <option value="" disabled>
                          {content.contact.formProperty}
                        </option>
                        {content.contact.propertyOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className="text-xs uppercase tracking-[0.2em] text-white/50">
                      {content.contact.formCameraCount}
                      <select
                        name="cameraCount"
                        className="input-field mt-2"
                        defaultValue=""
                        required
                      >
                        <option value="" disabled>
                          {content.contact.formCameraCount}
                        </option>
                        {content.contact.cameraOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className="text-xs uppercase tracking-[0.2em] text-white/50">
                      {content.contact.formPreference}
                      <select
                        name="preference"
                        className="input-field mt-2"
                        defaultValue=""
                        required
                      >
                        <option value="" disabled>
                          {content.contact.formPreference}
                        </option>
                        {content.contact.preferenceOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className="text-xs uppercase tracking-[0.2em] text-white/50 sm:col-span-2">
                      {content.contact.formMessage}
                      <textarea
                        name="message"
                        rows={4}
                        className="input-field mt-2"
                        placeholder={content.contact.formMessage}
                      />
                    </label>
                    {formContext === "contact" && formError && (
                      <p className="text-xs text-[color:var(--color-accent)] sm:col-span-2">
                        {formError}
                      </p>
                    )}
                    {formContext === "contact" && formSuccess && (
                      <p className="text-xs text-white/70 sm:col-span-2">
                        {formSuccess}
                      </p>
                    )}
                    <button type="submit" className="btn-primary w-full sm:col-span-2">
                      {content.contact.formSubmit}
                    </button>
                    <p className="text-xs text-white/50 sm:col-span-2">
                      {content.contact.formNote}
                    </p>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className={`${containerClass} grid gap-8 md:grid-cols-3`}>
          <div className={`flex flex-col gap-4 ${rtl ? "text-right" : "text-left"}`}>
            <div className={`flex items-center gap-3 ${rtl ? "flex-row-reverse" : ""}`}>
              <Image
                src="/assets/logo-render-1.jpeg"
                alt={logoAlt}
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <p className="text-sm tracking-[0.3em] text-white/60">
                  {brandName}
                </p>
                <p className="text-xs text-white/40">{content.footer.tagline}</p>
              </div>
            </div>
            <p className="text-xs text-white/50">{content.footer.copyright}</p>
          </div>
          <div className="flex flex-col gap-3 text-sm text-white/60">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">
              {content.footer.quickLinks}
            </p>
            {content.nav.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3 text-sm text-white/60">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">
              {content.footer.followUs}
            </p>
            <a href={CONTACT.instagram} className="transition hover:text-white">
              @shadow.jo
            </a>
            <a href={`mailto:${CONTACT.email}`} className="transition hover:text-white">
              {CONTACT.email}
            </a>
            <a href={`tel:${CONTACT.phone}`} className="transition hover:text-white">
              {CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      </footer>

      <a
        href={CONTACT.whatsapp}
        className={`fixed bottom-6 z-[70] flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/80 text-[color:var(--color-accent)] shadow-lg backdrop-blur transition hover:border-[color:var(--color-accent)] hover:shadow-[0_0_24px_rgba(223,128,99,0.5)] ${
          rtl ? "left-6" : "right-6"
        }`}
        aria-label={content.topBar.whatsappLabel}
      >
        <Icon name="whatsapp" className="h-5 w-5" />
      </a>

      {galleryItem && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-6"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute right-6 top-6 btn-outline"
          >
            {closeLabel}
          </button>
          <div
            className="w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={galleryItem.src}
              alt={galleryItem.alt}
              onError={(event) => {
                const img = event.currentTarget;
                if (img.src.includes(galleryFallbackSrc)) return;
                img.src = galleryFallbackSrc;
              }}
              className="w-full object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
}
