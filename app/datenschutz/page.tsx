import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "AVM - Datenschutz",
  keywords: "Auto verkaufen, Autovermittlung, Österreich, Gebrauchtwagen, Autoverkauf, Autohändler",
  icons: {
    icon: "/assets/favicon.png", // oder /favicon.svg
  },
  openGraph: {
    title: "AVM - Professionelle Autovermittlung in Österreich",
    description: "Verkaufen Sie Ihr Auto schnell und sicher über AVM. Kostenlose Bewertung, faire Preise.",
    type: "website",
    locale: "de_AT",
  },
}

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-3xl font-bold text-primary mb-8">Datenschutzerklärung</h1>

          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-3">1. Datenschutz auf einen Blick</h2>
              <h3 className="text-lg font-medium mb-2">Allgemeine Hinweise</h3>
              <p className="text-muted-foreground">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
                passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
                persönlich identifiziert werden können.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2. Verantwortliche Stelle</h2>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="font-semibold">AVM e.U</p>
                <p>
                  Musterstraße 123
                  <br />
                  1010 Wien
                  <br />
                  Österreich
                </p>
                <p className="mt-2">
                  Telefon: +43 676 4344905
                  <br />
                  E-Mail: vertrieb@avmbroker.com
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">3. Datenerfassung auf dieser Website</h2>

              <h3 className="text-lg font-medium mb-2">Kontaktformular</h3>
              <p className="text-muted-foreground mb-3">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
                inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall
                von Anschlussfragen bei uns gespeichert.
              </p>

              <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                <h4 className="font-semibold text-primary mb-2">Erfasste Daten:</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Name und Kontaktdaten</li>
                  <li>• Fahrzeugdaten (Marke, Modell, Baujahr, etc.)</li>
                  <li>• Hochgeladene Fahrzeugbilder</li>
                  <li>• Gewünschter Verkaufspreis</li>
                  <li>• Zusätzliche Informationen zum Fahrzeug</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">4. Rechtsgrundlage der Verarbeitung</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  <strong>Art. 6 Abs. 1 lit. a DSGVO:</strong> Einwilligung für die Verarbeitung von Kontaktdaten
                </p>
                <p>
                  <strong>Art. 6 Abs. 1 lit. b DSGVO:</strong> Vertragserfüllung und vorvertragliche Maßnahmen
                </p>
                <p>
                  <strong>Art. 6 Abs. 1 lit. f DSGVO:</strong> Berechtigte Interessen zur Geschäftsanbahnung
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">5. Speicherdauer</h2>
              <p className="text-muted-foreground">
                Ihre Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr
                erforderlich sind. Für Kontaktdaten aus dem Kontaktformular ist dies der Fall, wenn die jeweilige
                Konversation mit Ihnen beendet ist. Geschäftsdaten werden gemäß den gesetzlichen Aufbewahrungsfristen
                gespeichert.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">6. Ihre Rechte</h2>
              <div className="space-y-3">
                <p className="text-muted-foreground">Sie haben jederzeit das Recht:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten</li>
                  <li>Berichtigung unrichtiger personenbezogener Daten zu verlangen</li>
                  <li>Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
                  <li>Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen</li>
                  <li>Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen</li>
                  <li>Datenübertragbarkeit zu verlangen</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">7. Cookies</h2>
              <p className="text-muted-foreground">
                Diese Website verwendet Cookies zur Verbesserung der Nutzererfahrung. Durch die weitere Nutzung der
                Website stimmen Sie der Verwendung von Cookies zu. Detaillierte Informationen finden Sie in unserem
                Cookie-Banner.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">8. SSL-Verschlüsselung</h2>
              <p className="text-muted-foreground">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine
                SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des
                Browsers von "http://" auf "https://" wechselt.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">9. Beschwerderecht</h2>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-muted-foreground">
                  Sie haben das Recht, sich bei der zuständigen Aufsichtsbehörde zu beschweren:
                </p>
                <p className="mt-2 font-medium">
                  Österreichische Datenschutzbehörde
                  <br />
                  Barichgasse 40-42
                  <br />
                  1030 Wien
                  <br />
                  E-Mail: dsb@dsb.gv.at
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
