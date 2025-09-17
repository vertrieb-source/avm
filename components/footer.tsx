import Image from "next/image"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <Image src="/assets/logo.png" alt="AVM Logo" width={120} height={40} className="h-10 w-auto mb-4" />
              <p className="text-sm text-muted-foreground text-pretty mb-4">
                AVM ist Ihr vertrauensvoller Partner für den Autoverkauf in Österreich. Wir verbinden Verkäufer mit
                seriösen Händlern und sorgen für faire, transparente Geschäfte.
              </p>
              <p className="text-xs text-muted-foreground">© 2025 AVM Autovermittlung GmbH. Alle Rechte vorbehalten.</p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/#home" className="text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/#so-funktionierts" className="text-muted-foreground hover:text-primary transition-colors">
                    So funktioniert's
                  </a>
                </li>
                <li>
                  <a href="/#vorteile" className="text-muted-foreground hover:text-primary transition-colors">
                    Vorteile
                  </a>
                </li>
                <li>
                  <a href="/#ueber-uns" className="text-muted-foreground hover:text-primary transition-colors">
                    Über uns
                  </a>
                </li>
                <li>
                  <a href="/#kontakt" className="text-muted-foreground hover:text-primary transition-colors">
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Rechtliches</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/impressum" className="text-muted-foreground hover:text-primary transition-colors">
                    Impressum
                  </Link>
                </li>
                <li>
                  <Link href="/agb" className="text-muted-foreground hover:text-primary transition-colors">
                    AGB
                  </Link>
                </li>
                <li>
                  <Link href="/datenschutz" className="text-muted-foreground hover:text-primary transition-colors">
                    Datenschutz
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Separator />

        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs text-muted-foreground">
              AVM Autovermittlung GmbH | UID: auf Anfrage | FN: auf Anfrage
            </p>
            <p className="text-xs text-muted-foreground">Entwickelt mit ❤️ für österreichische Autoverkäufer</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
