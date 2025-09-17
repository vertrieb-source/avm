import { Card, CardContent } from "@/components/ui/card"
import { Upload, Search, Handshake, Euro } from "lucide-react"

const steps = [
  {
    icon: Upload,
    title: "Auto anmelden",
    description: "Füllen Sie unser einfaches Formular aus und laden Sie Fotos Ihres Fahrzeugs hoch.",
  },
  {
    icon: Search,
    title: "Händler finden",
    description: "Wir suchen passende, seriöse Autohändler in Ihrer Region für Ihr Fahrzeug.",
  },
  {
    icon: Handshake,
    title: "Verkauf abschließen",
    description: "Sie verhandeln direkt mit dem Händler und schließen den Kaufvertrag ab.",
  },
  {
    icon: Euro,
    title: "Provision zahlen",
    description: "Nach erfolgreichem Verkauf zahlen Sie uns eine faire Provision von nur 5%.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="so-funktionierts" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">So funktioniert's</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              In nur 4 einfachen Schritten verkaufen Sie Ihr Auto über unser bewährtes Vermittlungssystem.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="relative border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mb-4 mt-4">
                    <step.icon className="h-12 w-12 text-primary mx-auto" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground">
              <strong>Wichtig:</strong> Sie zahlen nur bei erfolgreichem Verkauf. Keine versteckten Kosten oder
              Vorabgebühren.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
