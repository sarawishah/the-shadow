"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { siteContent, Language } from "@/content/siteContent";

const CONTACT = {
  phone: "+962790000157",
  whatsapp: "https://wa.me/962790000157",
  email: "info@shadowjo.com",
};

const brandName = "THE SHADOW";

function Icon({ name, className = "" }: { name: string; className?: string }) {
  const icons: Record<string, React.ReactElement> = {
    phone: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    whatsapp: (
      <svg fill="currentColor" viewBox="0 0 24 24" className={className}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
    mail: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    shield: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    camera: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    users: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    chart: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    clock: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    check: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  };
  return icons[name] || null;
}

function LangToggle({
  lang,
  onChange,
  className = "",
}: {
  lang: Language;
  onChange: (l: Language) => void;
  className?: string;
}) {
  return (
    <button
      onClick={() => onChange(lang === "en" ? "ar" : "en")}
      className={`flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/90 transition-all hover:border-[color:var(--color-accent)] hover:bg-white/10 ${className}`}
      aria-label="Toggle language"
    >
      <span>{lang === "en" ? "EN" : "ع"}</span>
    </button>
  );
}

export default function SimpleLandingPage() {
  const [lang, setLang] = useState<Language>("ar");
  const reduceMotion = useReducedMotion();
  const content = siteContent[lang];
  const rtl = lang === "ar";
  const containerClass = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";

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

  const fadeInUp = (delay = 0) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.2 },
    transition: { duration: reduceMotion ? 0 : 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  });

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    viewport: { once: false, amount: 0.1 },
  };

  const scaleIn = (delay = 0) => ({
    initial: { opacity: 0, scale: reduceMotion ? 1 : 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: false, amount: 0.2 },
    transition: { duration: reduceMotion ? 0 : 0.5, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <div key={lang} className="relative min-h-screen bg-[color:var(--color-bg)] text-[color:var(--color-text)]">
      {/* Header */}
      <header className="glass-header fixed left-0 right-0 top-0 z-50 shadow-2xl shadow-[color:var(--color-accent)]/20 backdrop-blur-xl">
        <div className={`${containerClass} flex items-center justify-between gap-4 py-3`}>
          {/* Logo */}
          <a href="#home" className={`flex items-center gap-3 ${rtl ? "flex-row-reverse" : ""}`}>
            <div className="relative h-16 w-16 sm:h-20 sm:w-20 overflow-hidden rounded-xl bg-gradient-to-br from-black/60 to-black/30 p-1.5 shadow-2xl ring-4 ring-[color:var(--color-accent)]/50 transition-all hover:scale-110 hover:ring-[color:var(--color-accent)]/80 hover:shadow-[0_0_30px_rgba(255,122,80,0.6)]">
              <img 
                src="/TheShadow.jpeg" 
                alt={brandName}
                className="h-full w-full object-cover object-center scale-150"
                style={{ objectPosition: '50% 35%' }}
              />
            </div>
            <div className="hidden flex-col gap-0.5 sm:flex">
              <p className="text-base font-bold uppercase tracking-wider text-[color:var(--color-accent)] sm:text-lg">
                {brandName}
              </p>
              <p className="text-xs text-white/60">
                {content.footer.tagline}
              </p>
            </div>
          </a>

          {/* Navigation - Hidden on mobile */}
          <nav className={`hidden items-center gap-1 lg:flex ${rtl ? "flex-row-reverse" : ""}`}>
            {[
              { id: "home", label: content.nav[0].label },
              { id: "services", label: content.nav[2].label },
              { id: "contact", label: content.nav[10].label },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-lg px-3 py-2 text-sm font-medium text-white/70 transition-all hover:bg-white/5 hover:text-[color:var(--color-accent)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right side actions */}
          <div className={`flex items-center gap-2 sm:gap-3 ${rtl ? "flex-row-reverse" : ""}`}>
            <LangToggle lang={lang} onChange={setLang} />
          </div>
        </div>
      </header>

      <main className="relative pt-20">
        {/* Hero Section */}
        <section id="home" className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,122,80,0.25),_transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(255,122,80,0.15),_transparent_50%)]" />
            {/* Simplified background elements for performance */}
            <motion.div
              className="absolute top-0 left-0 w-96 h-96 bg-[#ff7a50]/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-80 h-80 bg-[#ff7a50]/8 rounded-full blur-2xl"
              animate={{
                scale: [1.2, 0.9, 1.2],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
          </div>

          <div className={`${containerClass} relative z-10`}>
            <div className="flex flex-col items-center gap-8 text-center">
              <motion.div
                className="text-center relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                {/* Simplified background glow */}
                <motion.div
                  className="absolute inset-0 -z-10"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1.2, opacity: 0.3 }}
                  transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ff7a50]/20 via-transparent to-[#ff7a50]/20 blur-3xl" />
                </motion.div>
                
                {/* Simplified decorative elements */}
                <motion.div
                  className="absolute -top-4 -left-4 w-8 h-8 border-2 border-[#ff7a50]/30 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
                <motion.div
                  className="absolute -top-2 -right-2 w-6 h-6 border-2 border-white/20 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                />
                
                {/* Main hero content with logo and text */}
                <motion.div className="relative z-10 flex flex-col items-center gap-8">
                  {/* Logo and text container with better spacing */}
                  <div className={`flex items-center gap-12 ${rtl ? "flex-row-reverse" : ""}`}>
                    {/* Larger Animated Logo */}
                    <motion.div
                      className="relative"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 0.2,
                        type: "spring",
                        stiffness: 120
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <div className="relative h-28 w-28 sm:h-32 sm:w-32 overflow-hidden rounded-xl bg-gradient-to-br from-black/80 to-black/40 p-2 shadow-2xl ring-4 ring-[color:var(--color-accent)]/60">
                        <img 
                          src="/TheShadow.jpeg" 
                          alt={brandName}
                          className="h-full w-full object-cover object-center scale-150"
                          style={{ objectPosition: '50% 35%' }}
                        />
                        {/* Simplified logo glow */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-[#ff7a50]/15 to-transparent"
                          animate={{
                            opacity: [0.3, 0.6, 0.3]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                                ease: "easeInOut"
                          }}
                        />
                      </div>
                    </motion.div>

                    {/* Smaller animated text with better margins */}
                    <div className={`flex flex-col ${rtl ? "text-right" : "text-left"}`}>
                      <motion.h1
                        className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl mb-3"
                        style={{ 
                          fontFamily: 'var(--font-heading), "Cinzel", serif',
                          textShadow: '0 0 30px rgba(255,255,255,0.4), 0 0 60px rgba(255,122,80,0.3)'
                        }}
                        initial={{ opacity: 0, x: rtl ? 30 : -30, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: 0.4,
                          type: "spring",
                          stiffness: 100
                        }}
                        whileHover={{ 
                          scale: 1.05, 
                          textShadow: '0 0 40px rgba(255,255,255,0.6), 0 0 80px rgba(255,122,80,0.5)',
                          transition: { duration: 0.3 }
                        }}
                      >
                        <motion.span
                          className="inline-block"
                          whileHover={{
                            y: -3,
                            transition: { duration: 0.2 }
                          }}
                        >
                          {content.hero.headlinePart1}
                        </motion.span>
                      </motion.h1>
                      
                      <motion.h1
                        className="text-3xl font-black leading-tight text-[#ff7a50] sm:text-4xl lg:text-5xl"
                        style={{ 
                          fontFamily: 'var(--font-heading), "Cinzel", serif',
                          textShadow: '0 0 40px rgba(255,122,80,0.6), 0 0 80px rgba(255,122,80,0.3)'
                        }}
                        initial={{ opacity: 0, x: rtl ? -30 : 30, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: 0.6,
                          type: "spring",
                          stiffness: 100
                        }}
                        whileHover={{ 
                          scale: 1.05, 
                          textShadow: '0 0 50px rgba(255,122,80,0.8), 0 0 100px rgba(255,122,80,0.6)',
                          transition: { duration: 0.3 }
                        }}
                      >
                        <motion.span
                          className="inline-block"
                          whileHover={{
                            y: -3,
                            transition: { duration: 0.2 }
                          }}
                        >
                          {content.hero.headlinePart2}
                        </motion.span>
                      </motion.h1>
                    </div>
                  </div>
                </motion.div>
                
                {/* Simplified floating particles */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-[#ff7a50] rounded-full"
                    style={{
                      top: `${20 + i * 20}%`,
                      left: `${10 + i * 20}%`,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: [0, 0.8, 0],
                      y: [-15, 15, -15],
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      delay: i * 0.4,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,122,80,0.08),_transparent_70%)]" />
          
          <div className={`${containerClass} relative z-10`}>
            <motion.div
              className={`mb-16 text-center ${rtl ? "text-right" : "text-left"} sm:text-center`}
              {...fadeInUp()}
            >
              <h2 className="section-title mb-4 text-white">
                {content.security.title}
              </h2>
              <p className="mx-auto max-w-2xl text-base text-white/60 sm:text-lg">
                {content.security.subtitle}
              </p>
            </motion.div>

            <motion.div
              className="space-y-6 max-w-4xl mx-auto"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, amount: 0.1 }}
            >
              {/* First row - 3 cards */}
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {content.security.items.slice(0, 3).map((service, idx) => (
                <motion.div
                  key={service.title}
                  className="card group relative overflow-hidden p-6 transition-all duration-300 hover:border-[color:var(--color-accent)]/50"
                  variants={fadeInUp()}
                  whileHover={{ y: reduceMotion ? 0 : -8 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-accent)]/0 to-[color:var(--color-accent)]/0 opacity-0 transition-opacity duration-300 group-hover:from-[color:var(--color-accent)]/5 group-hover:to-transparent group-hover:opacity-100" />
                  
                  <div className="relative z-10">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--color-accent)]/10 text-[color:var(--color-accent)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[color:var(--color-accent)]/20">
                      <Icon name={idx === 0 ? "shield" : idx === 1 ? "users" : idx === 2 ? "camera" : idx === 3 ? "chart" : idx === 4 ? "clock" : "check"} className="h-6 w-6" />
                    </div>
                    
                    <h3 className="mb-3 text-xl font-semibold text-white">
                      {service.title}
                    </h3>
                    
                    <p className="text-sm leading-relaxed text-white/60">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
              </div>
              
              {/* Second row - 2 centered cards */}
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 max-w-2xl mx-auto">
                {content.security.items.slice(3, 5).map((service, idx) => (
                <motion.div
                  key={service.title}
                  className="card group relative overflow-hidden p-6 transition-all duration-300 hover:border-[color:var(--color-accent)]/50"
                  variants={fadeInUp()}
                  whileHover={{ y: reduceMotion ? 0 : -8 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-accent)]/0 to-[color:var(--color-accent)]/0 opacity-0 transition-opacity duration-300 group-hover:from-[color:var(--color-accent)]/5 group-hover:to-transparent group-hover:opacity-100" />
                  
                  <div className="relative z-10">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--color-accent)]/10 text-[color:var(--color-accent)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[color:var(--color-accent)]/20">
                      <Icon name={idx === 0 ? "chart" : "clock"} className="h-6 w-6" />
                    </div>
                    
                    <h3 className="mb-3 text-xl font-semibold text-white">
                      {service.title}
                    </h3>
                    
                    <p className="text-sm leading-relaxed text-white/60">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,122,80,0.15),_transparent_60%)]" />
          </div>

          <div className={`${containerClass} relative z-10`}>
            <motion.div
              className="mx-auto max-w-3xl text-center"
              {...fadeInUp()}
            >
              <h2 className="section-title mb-6 text-white">
                {content.contact.title}
              </h2>
              
              <p className="mb-10 text-base text-white/70 sm:text-lg">
                {content.contact.subtitle}
              </p>

              <motion.div
                className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                {...fadeInUp(0.2)}
              >
                <a
                  href={CONTACT.whatsapp}
                  className="btn-primary w-full sm:w-auto"
                >
                  <Icon name="whatsapp" className="h-5 w-5" />
                  {content.topBar.whatsappLabel}
                </a>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="btn-secondary w-full sm:w-auto"
                >
                  <Icon name="phone" className="h-5 w-5" />
                  {CONTACT.phone}
                </a>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="btn-outline w-full sm:w-auto"
                >
                  <Icon name="mail" className="h-5 w-5" />
                  {CONTACT.email}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[color:var(--color-surface)] py-8">
        <div className={`${containerClass} text-center`}>
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[color:var(--color-accent)]">
            {brandName}
          </p>
          <p className="text-xs text-white/40">
            {content.footer.tagline}
          </p>
          <p className="mt-4 text-xs text-white/30">
            © {new Date().getFullYear()} {brandName}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
