import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

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
                AVM haftet nur für Vorsatz und grobe Fahrlässigkeit. Die Haftung für leichte Fahrlässigkeit ist
                ausgeschlossen, soweit nicht Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit oder
                aus der Verletzung wesentlicher Vertragspflichten resultieren.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">§ 7 Widerrufsrecht</h2>
              <p className="text-muted-foreground">
                Verbrauchern steht ein gesetzliches Widerrufsrecht zu. Die Widerrufsfrist beträgt vierzehn Tage ab
                Vertragsschluss. Detaillierte Informationen zum Widerrufsrecht werden separat zur Verfügung gestellt.
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
