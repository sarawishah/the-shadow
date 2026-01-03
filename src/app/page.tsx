import LandingPage from "@/components/LandingPage";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SecuritySystemSupplier",
  name: "THE SHADOW",
  alternateName: "الظل للأمن والحماية",
  url: "https://shadowjo.com",
  description:
    "CCTV system design, installation, and monitoring support across Jordan.",
  logo: "https://shadowjo.com/assets/logo-render-2.jpeg",
  image: "https://shadowjo.com/assets/logo-render-2.jpeg",
  telephone: "+962790000157",
  email: "info@shadowjo.com",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Marj Al Hamam - Al Salam Road - Idris Commercial Complex - 1st Floor, Office 2",
    addressLocality: "Amman",
    addressCountry: "JO",
  },
  areaServed: "JO",
  sameAs: ["https://www.instagram.com/shadow.j0/"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingPage />
    </>
  );
}
