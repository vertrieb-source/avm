"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Car, Handshake, Euro } from "lucide-react"

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("kontakt")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative py-20 lg:py-32 hero-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Verkaufen Sie Ihr Auto <span className="text-primary">schnell & sicher</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
            Wir verbinden Autoverkäufer mit seriösen Händlern in ganz Österreich. Professionell, transparent und mit
            fairen Konditionen.
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center space-x-2 bg-card px-4 py-2 rounded-lg">
              <Car className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Kostenlose Bewertung</span>
            </div>
            <div className="flex items-center space-x-2 bg-card px-4 py-2 rounded-lg">
              <Handshake className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Seriöse Händler</span>
            </div>
            <div className="flex items-center space-x-2 bg-card px-4 py-2 rounded-lg">
              <Euro className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Nur 5% Provision</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4 h-auto"
          >
            Jetzt Auto verkaufen
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          {/* Trust Indicator */}
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-muted-foreground">
            <span>✓ 250+ Vermittlungen</span>
            <span>✓ 30+ Händler</span>
            <span>✓ Nur in Wien & Umgebung tätig seit 2025</span>
          </div>
        </div>
      </div>
    </section>
  )
}
