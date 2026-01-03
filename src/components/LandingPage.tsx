"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const logoOffset = useTransform(scrollY, [0, 300], [0, -20]);
  const content = siteContent[lang];
  const rtl = lang === "ar";
  const containerClass = "mx-auto w-full max-w-6xl px-6";

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
    const shouldLock = menuOpen || lightboxIndex !== null;
    document.body.style.overflow = shouldLock ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, lightboxIndex]);

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

  const handleQuickQuoteSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (data.get("company")) return;
    const name = data.get("name");
    const phone = data.get("phone");
    const service = data.get("service");
    const body = [
      content.hero.quickQuote.title,
      `${content.hero.quickQuote.nameLabel}: ${name}`,
      `${content.hero.quickQuote.phoneLabel}: ${phone}`,
      `${content.hero.quickQuote.serviceLabel}: ${service}`,
    ].join("\n");
    sendMail(content.hero.quickQuote.title, body);
    form.reset();
  };

  const handleContactSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (data.get("company")) return;
    const verification = String(data.get("verification") || "").trim();
    if (verification !== content.contact.verificationAnswer) {
      setFormError(
        lang === "ar"
          ? "يرجى الإجابة بشكل صحيح على سؤال التحقق."
          : "Please answer the verification question correctly."
      );
      return;
    }
    setFormError(null);
    const body = [
      `${content.contact.formName}: ${data.get("name")}`,
      `${content.contact.formPhone}: ${data.get("phone")}`,
      `${content.contact.formEmail}: ${data.get("email")}`,
      `${content.contact.formService}: ${data.get("service")}`,
      `${content.contact.formMessage}: ${data.get("message")}`,
    ].join("\n");
    sendMail(content.contact.formTitle, body);
    form.reset();
  };

  const quickServiceOptions = useMemo(
    () => content.services.items.map((service) => service.title),
    [content.services.items]
  );
  const promiseChips =
    lang === "ar"
      ? ["مرخص", "متوافق", "خاضع للإشراف"]
      : ["Licensed", "Compliant", "Supervised"];
  const brandName = lang === "ar" ? "الظل للأمن والحماية" : "THE SHADOW";
  const logoAlt = lang === "ar" ? "شعار الظل" : "THE SHADOW logo";
  const menuLabel = lang === "ar" ? "القائمة" : "Menu";
  const closeLabel = lang === "ar" ? "إغلاق" : "Close";

  return (
    <div className="relative">
      <div className="hidden md:block border-b border-white/5 text-xs text-white/70">
        <div
          className={`${containerClass} flex items-center justify-between py-2`}
        >
          <div
            className={`flex items-center gap-6 ${
              rtl ? "flex-row-reverse" : ""
            }`}
          >
            <a
              href={`tel:${CONTACT.phone}`}
              className="flex items-center gap-2 transition hover:text-white"
            >
              <Icon name="phone" className="h-4 w-4" />
              <span>{CONTACT.phoneDisplay}</span>
            </a>
            <a
              href={CONTACT.whatsapp}
              className="flex items-center gap-2 transition hover:text-white"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              <span>{content.topBar.whatsappLabel}</span>
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-2 transition hover:text-white"
            >
              <Icon name="mail" className="h-4 w-4" />
              <span>{CONTACT.email}</span>
            </a>
          </div>
          <LangToggle lang={lang} onChange={setLang} />
        </div>
      </div>

      <header className="glass-header sticky top-0 z-50">
        <div
          className={`${containerClass} flex items-center justify-between py-4`}
        >
          <div
            className={`flex items-center gap-3 ${rtl ? "flex-row-reverse" : ""}`}
          >
            <Image
              src="/assets/logo-render-1.jpeg"
              alt={logoAlt}
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover"
              priority
            />
            <div>
              <p className="text-sm tracking-[0.3em] text-white/60">
                {brandName}
              </p>
              <p className="text-xs text-white/40">{content.footer.tagline}</p>
            </div>
          </div>

          <nav
            className={`hidden xl:flex items-center gap-6 text-xs uppercase tracking-[0.3em] text-white/70 ${
              rtl ? "flex-row-reverse" : ""
            }`}
            aria-label="Primary"
          >
            {content.nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#contact" className="btn-primary hidden md:inline-flex">
              {content.hero.primaryCta}
            </a>
            <a
              href={CONTACT.whatsapp}
              className="icon-button text-[color:var(--color-accent)]"
              aria-label={content.topBar.whatsappLabel}
            >
              <Icon name="whatsapp" className="h-5 w-5" />
            </a>
            <button
              type="button"
              className="xl:hidden btn-outline"
              aria-label={menuOpen ? closeLabel : menuLabel}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? closeLabel : menuLabel}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="xl:hidden border-t border-white/10 bg-black/90">
            <div className={`${containerClass} py-6`}>
              <nav className="flex flex-col gap-4 text-sm uppercase tracking-[0.3em] text-white/70">
                {content.nav.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setMenuOpen(false)}
                    className="transition hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="mt-6 flex items-center justify-between">
                <LangToggle lang={lang} onChange={setLang} />
                <a href="#contact" className="btn-primary">
                  {content.hero.primaryCta}
                </a>
              </div>
            </div>
          </div>
        )}
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
                  className={`flex flex-wrap gap-4 ${
                    rtl ? "justify-end" : "justify-start"
                  }`}
                  {...reveal(0.2)}
                >
                  <a href="#contact" className="btn-primary">
                    {content.hero.primaryCta}
                  </a>
                  <a href={`tel:${CONTACT.phone}`} className="btn-secondary">
                    {content.hero.secondaryCta}
                  </a>
                  <a href={CONTACT.whatsapp} className="btn-outline">
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
                  <form className="grid gap-4" onSubmit={handleQuickQuoteSubmit}>
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
                      {content.hero.quickQuote.serviceLabel}
                      <select
                        name="service"
                        className="input-field mt-2"
                        defaultValue=""
                        required
                      >
                        <option value="" disabled>
                          {content.hero.quickQuote.serviceLabel}
                        </option>
                        {quickServiceOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </label>
                    <button type="submit" className="btn-primary">
                      {content.hero.quickQuote.button}
                    </button>
                    <p className="text-xs text-white/50">
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
                {content.services.title}
              </p>
              <h2 className="section-title text-white">
                {content.services.subtitle}
              </h2>
            </motion.div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {content.services.items.map((service, index) => (
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
                  <span className="mt-auto inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[color:var(--color-accent)] transition group-hover:translate-x-1">
                    {lang === "ar" ? "اعرف المزيد" : "Learn More"}
                    <span aria-hidden="true">→</span>
                  </span>
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
                {promiseChips.map((chip) => (
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
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                    reducedMotion={Boolean(reduceMotion)}
                  />
                  <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
            <p className="mt-6 text-xs text-white/40">{content.stats.note}</p>
          </div>
        </section>

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

        <section id="clients" className="section">
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
                {content.clients.title}
              </p>
              <p className="text-sm text-white/60">{content.clients.subtitle}</p>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {content.clients.items.map((client) => (
                  <div key={client} className="card p-5 text-center">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                      {client}
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
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="btn-primary">
                  {content.cta.primary}
                </a>
                <a href={CONTACT.whatsapp} className="btn-outline">
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

            <motion.div className="card p-8" {...reveal(0.1)}>
              <div
                className={`flex flex-col gap-4 ${
                  rtl ? "text-right" : "text-left"
                }`}
              >
                <h3 className="text-2xl text-white">
                  {content.contact.formTitle}
                </h3>
                <form className="grid gap-4" onSubmit={handleContactSubmit}>
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
                    {content.contact.formService}
                    <select
                      name="service"
                      className="input-field mt-2"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        {content.contact.formService}
                      </option>
                      {quickServiceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="text-xs uppercase tracking-[0.2em] text-white/50">
                    {content.contact.formMessage}
                    <textarea
                      name="message"
                      rows={4}
                      className="input-field mt-2"
                      placeholder={content.contact.formMessage}
                    />
                  </label>
                  <label className="text-xs uppercase tracking-[0.2em] text-white/50">
                    {content.contact.formVerification}
                    <input
                      name="verification"
                      required
                      className="input-field mt-2"
                      placeholder={content.contact.formVerification}
                    />
                  </label>
                  {formError && (
                    <p className="text-xs text-[color:var(--color-accent)]">
                      {formError}
                    </p>
                  )}
                  <button type="submit" className="btn-primary">
                    {content.contact.formSubmit}
                  </button>
                  <p className="text-xs text-white/50">
                    {content.contact.formNote}
                  </p>
                </form>
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
              className="w-full object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
}
