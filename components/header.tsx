"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image src="/assets/logo.png" alt="AVM Logo" width={120} height={40} className="h-10 w-auto" priority />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("so-funktionierts")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              So funktioniert's
            </button>
            <button
              onClick={() => scrollToSection("vorteile")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Vorteile
            </button>
            <button
              onClick={() => scrollToSection("ueber-uns")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Über uns
            </button>
            <button
              onClick={() => scrollToSection("kontakt")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Kontakt
            </button>
          </nav>

          {/* Contact Info & CTA */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>+43 676 4344905</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4" />
                <span>vertrieb@avmbroker.com</span>
              </div>
            </div>
            <Button
              onClick={() => scrollToSection("kontakt")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Jetzt Auto verkaufen
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
