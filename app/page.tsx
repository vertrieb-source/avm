import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { BenefitsSection } from "@/components/benefits-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

export const metadata = {
  title: "AVM - Professionelle Autovermittlung in Österreich | Ihr Auto verkaufen",
  description:
    "Verkaufen Sie Ihr Auto schnell und sicher über AVM. Wir verbinden Autoverkäufer mit seriösen Händlern in ganz Österreich. Kostenlose Bewertung, faire Preise, 5% Provision.",
  keywords: "Auto verkaufen, Autovermittlung, Österreich, Gebrauchtwagen, Autoverkauf, Autohändler",
  openGraph: {
    title: "AVM - Professionelle Autovermittlung in Österreich",
    description: "Verkaufen Sie Ihr Auto schnell und sicher über AVM. Kostenlose Bewertung, faire Preise.",
    type: "website",
    locale: "de_AT",
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <div className="section-divider" />
        <HowItWorksSection />
        <div className="section-divider" />
        <BenefitsSection />
        <div className="section-divider" />
        <AboutSection />
        <div className="section-divider" />
        <ContactSection />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
