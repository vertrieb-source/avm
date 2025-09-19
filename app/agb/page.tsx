import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "AVM - Datenschutz",
  keywords: "Auto verkaufen, Autovermittlung, Österreich, Gebrauchtwagen, Autoverkauf, Autohändler",
  icons: {
    icon: [
      { url: "/assets/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/assets/favicon.svg", type: "image/svg+xml" }
    ],
    shortcut: "/assets/favicon.ico",                 // legacy shortcut icon
    apple: "/assets/apple-touch-icon.png",           // iOS home screen icon
  },
  manifest: "/assets/site.webmanifest",
  openGraph: {
    title: "AVM - Professionelle Autovermittlung in Österreich",
    description: "Verkaufen Sie Ihr Auto schnell und sicher über AVM. Kostenlose Bewertung, faire Preise.",
    type: "website",
    locale: "de_AT",
  },
}

export default function AGBPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-3xl font-bold text-primary mb-8">Allgemeine Geschäftsbedingungen</h1>

          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-3">§ 1 Geltungsbereich</h2>
              <p className="text-muted-foreground">
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen der AVM e.U (nachfolgend
                "AVM") und ihren Kunden über die Vermittlung von Kraftfahrzeugen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">§ 2 Leistungen von AVM</h2>
              <div className="space-y-3">
                <p className="text-muted-foreground">AVM erbringt folgende Leistungen:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Vermittlung zwischen Fahrzeugverkäufern und Händlern</li>
                  <li>Bewertung und Begutachtung von Fahrzeugen</li>
                  <li>Abwicklung der Verkaufsverhandlungen</li>
                  <li>Unterstützung bei der Vertragsabwicklung</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">§ 3 Provision und Zahlungsbedingungen</h2>
              <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                <h3 className="font-semibold text-primary mb-2">Provisionsregelung:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <strong>Provision:</strong> 5% des Verkaufspreises (netto)
                  </li>
                  <li>
                    <strong>Mindestprovision:</strong> €200,00 (netto)
                  </li>
                  <li>
                    <strong>Fälligkeit:</strong> Bei erfolgreichem Vertragsabschluss
                  </li>
                  <li>
                    <strong>Zahlungsziel:</strong> 14 Tage nach Rechnungsstellung
                  </li>
                </ul>
              </div>
              <p className="text-muted-foreground mt-3">
                Die Provision wird nur bei erfolgreichem Verkauf des Fahrzeugs fällig. Alle Preise verstehen sich
                zuzüglich der gesetzlichen Mehrwertsteuer.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">§ 4 Pflichten des Verkäufers</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Vollständige und wahrheitsgemäße Angaben zum Fahrzeug</li>
                <li>Bereitstellung aller erforderlichen Dokumente</li>
                <li>Gewährleistung der Verkaufsberechtigung</li>
                <li>Zahlung der vereinbarten Provision bei erfolgreichem Verkauf</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">§ 5 Pflichten von AVM</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Sorgfältige Vermittlungstätigkeit</li>
                <li>Vertrauliche Behandlung aller Kundendaten</li>
                <li>Transparente Kommunikation über Verkaufsfortschritt</li>
                <li>Unterstützung bei der Vertragsabwicklung</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">§ 6 Haftung</h2>
              <p className="text-muted-foreground">
                Der Vermittler erbringt seine Leistungen ausschließlich digital, insbesondere durch Bewertung, Präsentation und Vermittlung von Fahrzeugen auf Grundlage der vom Verkäufer bereitgestellten Informationen und Unterlagen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">§ 7 Widerrufsbelehrung</h2>
              <p className="text-muted-foreground">
              <strong>Widerrufsrecht</strong>  
              <p>Sie haben das Recht, binnen 14 Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt 14 Tage ab dem Tag des Vertragsabschlusses (d. h. sobald Sie den Auftrag zur Fahrzeugvermittlung erteilt haben). 
              Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (AVM e.U., E-Mail: vertrieb@avmbroker.com) mittels einer klaren Erklärung (per E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren.
              Sie können dafür das Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.</p>


              <strong>Folgen des Widerrufs</strong>
              <p>Wenn Sie diesen Vertrag widerrufen, haben wir alle Zahlungen, die wir von Ihnen erhalten haben, unverzüglich und spätestens binnen 14 Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf eingegangen ist.</p>
              <strong>Besondere Hinweise:</strong>
              <p>Sie haben ausdrücklich zugestimmt, dass AVM vor Ablauf der Widerrufsfrist mit der Vermittlung beginnt. Dadurch erlischt Ihr Widerrufsrecht bei vollständiger Erfüllung unserer Dienstleistung, d. h. sobald AVM erfolgreich einen Käufer für Ihr Fahrzeug vermittelt hat.
              Sie zahlen im Erfolgsfall die vereinbarte Provision von 5 % des Verkaufspreises.</p>
              
              (Wenn Sie den Vertrag widerrufen wollen, füllen Sie bitte dieses Formular aus und senden es zurück an AVM e.U.)
              <a href="https://www.wko.at/wien/gewerbe-handwerk/berufsfotografie/muster-widerrufsformular.pdf">Muster-Widerrufsformular</a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">§ 8 Datenschutz</h2>
              <p className="text-muted-foreground">
                Die Verarbeitung personenbezogener Daten erfolgt gemäß unserer Datenschutzerklärung und den Bestimmungen
                der DSGVO.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">§ 9 Schlussbestimmungen</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  <strong>Anwendbares Recht:</strong> Es gilt österreichisches Recht.
                </p>
                <p>
                  <strong>Gerichtsstand:</strong> Ausschließlicher Gerichtsstand ist Wien.
                </p>
                <p>
                  <strong>Salvatorische Klausel:</strong> Sollten einzelne Bestimmungen unwirksam sein, bleibt die
                  Wirksamkeit der übrigen Bestimmungen unberührt.
                </p>
              </div>
            </section>

            <div className="mt-8 p-4 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                Stand: {new Date().toLocaleDateString("de-AT")}
                <br />
                AVM e.U
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
