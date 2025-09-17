import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

const achievements = [
  "250+ erfolgreiche Vermittlungen",
  "30+ geprüfte Händlerpartner",
  "98% Kundenzufriedenheit",
  "Nur in Wien & Umgebung tätig seit 2025",
]

export function AboutSection() {
  return (
    <section id="ueber-uns" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Vertrauen Sie auf unsere Erfahrung
              </h2>

              <p className="text-lg text-muted-foreground mb-6 text-pretty">
                AVM ist Ihr verlässlicher Partner für den Autoverkauf in Wien und Umgebung. Seit 2025 verbinden wir
                erfolgreich Autoverkäufer mit seriösen Händlern und sorgen für faire, transparente Geschäfte.
              </p>

              <p className="text-muted-foreground mb-8 text-pretty">
                Unser Team aus Automotive-Experten kennt den Wiener Markt genau und weiß, wie Sie den besten Preis für
                Ihr Fahrzeug erzielen. Vertrauen Sie auf unsere Erfahrung und unser bewährtes Netzwerk.
              </p>

              {/* Achievements */}
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground font-medium">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <Card className="border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <div className="text-center">
                      <Image
                        src="/assets/logo.png"
                        alt="AVM Logo"
                        width={200}
                        height={80}
                        className="mx-auto mb-4 opacity-80"
                      />
                      <p className="text-lg font-semibold text-primary">Ihr vertrauensvoller Partner</p>
                      <p className="text-sm text-muted-foreground mt-2">für den Autoverkauf in Wien & Umgebung</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -right-6 bg-card border shadow-lg rounded-lg p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-xs text-muted-foreground">Zufriedenheit</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
