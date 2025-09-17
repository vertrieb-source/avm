"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, Cookie } from "lucide-react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookie-consent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:max-w-md">
      <Card className="border shadow-lg">
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <Cookie className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h3 className="font-semibold text-sm text-foreground mb-2">Cookie-Einstellungen</h3>
              <p className="text-xs text-muted-foreground text-pretty mb-4">
                Wir verwenden Cookies, um Ihnen die beste Erfahrung auf unserer Website zu bieten. Weitere Informationen
                finden Sie in unserer{" "}
                <a href="/datenschutz" className="text-primary hover:underline">
                  Datenschutzerklärung
                </a>
                .
              </p>
              <div className="flex space-x-2">
                <Button
                  onClick={acceptCookies}
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs"
                >
                  Akzeptieren
                </Button>
                <Button onClick={declineCookies} variant="outline" size="sm" className="text-xs bg-transparent">
                  Ablehnen
                </Button>
              </div>
            </div>
            <Button onClick={declineCookies} variant="ghost" size="sm" className="p-1 h-auto">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
