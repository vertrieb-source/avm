import { Card, CardContent } from "@/components/ui/card"
import { Shield, Clock, Users, TrendingUp, Award, MapPin } from "lucide-react"

const benefits = [
  {
    icon: Shield,
    title: "Sicherheit & Vertrauen",
    description: "Alle Händler werden von uns geprüft und verifiziert. Ihre Daten sind bei uns sicher.",
  },
  {
    icon: Clock,
    title: "Schnelle Abwicklung",
    description: "Durchschnittlich finden wir binnen 48 Stunden einen passenden Käufer für Ihr Fahrzeug.",
  },
  {
    icon: Users,
    title: "Großes Händlernetzwerk",
    description: "Über 500 geprüfte Autohändler in ganz Österreich sind Teil unseres Netzwerks.",
  },
  {
    icon: TrendingUp,
    title: "Faire Preise",
    description: "Durch unser Netzwerk erzielen Sie oft bessere Preise als beim Direktverkauf.",
  },
  {
    icon: Award,
    title: "Kostenlose Bewertung",
    description: "Wir erstellen eine professionelle Fahrzeugbewertung völlig kostenfrei für Sie.",
  },
  {
    icon: MapPin,
    title: "Österreichweit",
    description: "Von Wien bis Vorarlberg - wir vermitteln in allen Bundesländern Österreichs.",
  },
]

export function BenefitsSection() {
  return (
    <section id="vorteile" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Ihre Vorteile mit AVM</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Warum über 1.000 Kunden bereits erfolgreich ihr Auto über AVM verkauft haben.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow h-full">
                <CardContent className="p-6">
                  {/* Icon */}
                  <div className="mb-4">
                    <benefit.icon className="h-10 w-10 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
