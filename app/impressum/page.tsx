import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
export const metadata = {
  title: "AVM - Impressum",
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

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-3xl font-bold text-primary mb-8">Impressum</h1>

          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-3">Angaben gemäß § 5 TMG</h2>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="font-semibold">AVM e.U</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Vertreten durch</h2>
              <p>Geschäftsführer: Josef M.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Kontakt</h2>
              <p>
                Telefon: +43 676 4344905
                <br />
                E-Mail: vertrieb@avmbroker.com
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Registereintrag</h2>
              <p>
                Eintragung im Firmenbuch
                <br />
                Registergericht: Handelsgericht Wien
                <br />
                Registernummer: auf Anfrage
                <br />
                UID-Nummer: auf Anfrage
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Gewerbeberechtigung</h2>
              <p>
                Gewerbe: Vermittlung von Kraftfahrzeugen
                <br />
                Gewerbebehörde: Magistrat der Stadt Wien
                <br />
                Anwendbare Rechtsvorschriften: Gewerbeordnung (GewO)
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Aufsichtsbehörde</h2>
              <p>
                Magistrat der Stadt Wien
                <br />
                Rathaus, 1010 Wien
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Haftungsausschluss</h2>

              <h3 className="text-lg font-medium mt-4 mb-2">Haftung für Inhalte</h3>
              <p className="text-muted-foreground">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>

              <h3 className="text-lg font-medium mt-4 mb-2">Haftung für Links</h3>
              <p className="text-muted-foreground">
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben.
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>

              <h3 className="text-lg font-medium mt-4 mb-2">Urheberrecht</h3>
              <p className="text-muted-foreground">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
                österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
                Autors bzw. Erstellers.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
