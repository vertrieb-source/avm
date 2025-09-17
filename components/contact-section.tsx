"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, Phone, Mail, X, ImageIcon } from "lucide-react"
import { submitContactForm } from "@/app/actions/contact"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    brand: "",
    model: "",
    year: "",
    mileage: "",
    message: "",
    agbAccepted: false,
    dsgvoAccepted: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    const validFiles = files.filter((file) => {
      if (!file.type.startsWith("image/")) {
        setSubmitMessage({ type: "error", text: "Nur Bilddateien sind erlaubt" })
        return false
      }
      if (file.size > 10 * 1024 * 1024) {
        setSubmitMessage({ type: "error", text: "Dateien dürfen maximal 10MB groß sein" })
        return false
      }
      return true
    })

    setSelectedFiles((prev) => [...prev, ...validFiles].slice(0, 10)) // Max 10 files
    setSubmitMessage(null)
  }

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage(null)

    try {
      const formData = new FormData(e.currentTarget)

      // Add selected files to form data
      selectedFiles.forEach((file) => {
        formData.append("photos", file)
      })

      const result = await submitContactForm(formData)

      if (result.success) {
        setSubmitMessage({ type: "success", text: result.message })
        // Reset form
        e.currentTarget.reset()
        setSelectedFiles([])
      } else {
        setSubmitMessage({ type: "error", text: result.error })
      }
    } catch (error) {
      setSubmitMessage({
        type: "error",
        text: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="kontakt" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Jetzt Auto verkaufen</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Füllen Sie das Formular aus und wir finden den besten Käufer für Ihr Fahrzeug.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Fahrzeug-Informationen</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {submitMessage && (
                      <div
                        className={`p-4 rounded-lg ${
                          submitMessage.type === "success"
                            ? "bg-green-50 text-green-800 border border-green-200"
                            : "bg-red-50 text-red-800 border border-red-200"
                        }`}
                      >
                        {submitMessage.text}
                      </div>
                    )}

                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Telefonnummer *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">E-Mail-Adresse *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>

                    {/* Vehicle Information */}
                    <div className="border-t pt-6">
                      <h3 className="text-lg font-semibold text-foreground mb-4">Fahrzeugdaten</h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="brand">Marke *</Label>
                          <Input
                            id="brand"
                            name="brand"
                            value={formData.brand}
                            onChange={(e) => handleInputChange("brand", e.target.value)}
                            required
                            className="mt-1"
                            placeholder="z.B. BMW, Audi, VW"
                          />
                        </div>
                        <div>
                          <Label htmlFor="model">Modell *</Label>
                          <Input
                            id="model"
                            name="model"
                            value={formData.model}
                            onChange={(e) => handleInputChange("model", e.target.value)}
                            required
                            className="mt-1"
                            placeholder="z.B. 3er, A4, Golf"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                          <Label htmlFor="year">Baujahr *</Label>
                          <Input
                            id="year"
                            name="year"
                            type="number"
                            min="1990"
                            max="2024"
                            value={formData.year}
                            onChange={(e) => handleInputChange("year", e.target.value)}
                            required
                            className="mt-1"
                            placeholder="z.B. 2020"
                          />
                        </div>
                        <div>
                          <Label htmlFor="mileage">Kilometerstand *</Label>
                          <Input
                            id="mileage"
                            name="mileage"
                            type="number"
                            value={formData.mileage}
                            onChange={(e) => handleInputChange("mileage", e.target.value)}
                            required
                            className="mt-1"
                            placeholder="z.B. 50000"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="photos">Fahrzeugfotos</Label>
                      <div
                        className="mt-1 border-2 border-dashed border-border rounded-lg p-6 text-center cursor-pointer hover:border-primary/50 transition-colors"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">
                          Ziehen Sie Fotos hierher oder klicken Sie zum Auswählen
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Empfohlen: Außen- und Innenaufnahmen, max. 10 Fotos, je max. 10MB
                        </p>
                        <input
                          ref={fileInputRef}
                          type="file"
                          multiple
                          accept="image/*"
                          onChange={handleFileSelect}
                          className="hidden"
                        />
                      </div>

                      {selectedFiles.length > 0 && (
                        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3">
                          {selectedFiles.map((file, index) => (
                            <div key={index} className="relative group">
                              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center border">
                                <ImageIcon className="h-8 w-8 text-gray-400" />
                              </div>
                              <button
                                type="button"
                                onClick={() => removeFile(index)}
                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <X className="h-3 w-3" />
                              </button>
                              <p className="text-xs text-center mt-1 truncate">{file.name}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Additional Message */}
                    <div>
                      <Label htmlFor="message">Zusätzliche Informationen</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="mt-1"
                        rows={4}
                        placeholder="Besonderheiten, Schäden, Extras, etc."
                      />
                    </div>

                    {/* Legal Checkboxes */}
                    <div className="space-y-4 border-t pt-6">
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="agb"
                          name="agbAccepted"
                          checked={formData.agbAccepted}
                          onCheckedChange={(checked) => handleInputChange("agbAccepted", checked as boolean)}
                          required
                        />
                        <Label htmlFor="agb" className="text-sm text-pretty">
                          Ich akzeptiere die{" "}
                          <a href="/agb" className="text-primary hover:underline">
                            Allgemeinen Geschäftsbedingungen
                          </a>{" "}
                          einschließlich der 5% Provision bei erfolgreichem Verkauf. *
                        </Label>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="dsgvo"
                          name="dsgvoAccepted"
                          checked={formData.dsgvoAccepted}
                          onCheckedChange={(checked) => handleInputChange("dsgvoAccepted", checked as boolean)}
                          required
                        />
                        <Label htmlFor="dsgvo" className="text-sm text-pretty">
                          Ich stimme der Verarbeitung meiner Daten gemäß{" "}
                          <a href="/datenschutz" className="text-primary hover:underline">
                            Datenschutzerklärung
                          </a>{" "}
                          zu. *
                        </Label>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      disabled={isSubmitting || !formData.agbAccepted || !formData.dsgvoAccepted}
                    >
                      {isSubmitting ? "Wird gesendet..." : "Kostenlose Bewertung anfordern"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Kontakt</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Telefon</p>
                      <p className="text-sm text-muted-foreground">+43 676 4344905</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">E-Mail</p>
                      <p className="text-sm text-muted-foreground">vertrieb@avmbroker.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-primary/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">Schnelle Antwort garantiert</h3>
                  <p className="text-sm text-muted-foreground text-pretty">
                    Wir melden uns binnen 24 Stunden bei Ihnen und erstellen eine kostenlose Bewertung Ihres Fahrzeugs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
