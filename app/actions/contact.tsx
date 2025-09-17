"use server"

import { z } from "zod"
import { Resend } from "resend"

const resend = new Resend("re_dhpVkk1m_9dFUUtWF5AETPofydTQ3g5xi")

const contactSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen haben"),
  phone: z.string().min(10, "Telefonnummer ungültig"),
  email: z.string().email("E-Mail-Adresse ungültig"),
  brand: z.string().min(1, "Marke ist erforderlich"),
  model: z.string().min(1, "Modell ist erforderlich"),
  year: z.string().min(4, "Baujahr ungültig"),
  mileage: z.string().min(1, "Kilometerstand ist erforderlich"),
  message: z.string().optional(),
  agbAccepted: z.boolean().refine((val) => val === true, "AGB müssen akzeptiert werden"),
  dsgvoAccepted: z.boolean().refine((val) => val === true, "Datenschutz muss akzeptiert werden"),
})

export async function submitContactForm(formData: FormData) {
  try {
    // Extract form data
    const data = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      brand: formData.get("brand") as string,
      model: formData.get("model") as string,
      year: formData.get("year") as string,
      mileage: formData.get("mileage") as string,
      message: formData.get("message") as string,
      agbAccepted: formData.get("agbAccepted") === "on",
      dsgvoAccepted: formData.get("dsgvoAccepted") === "on",
    }

    // Validate data
    const validatedData = contactSchema.parse(data)

    // Handle file uploads
    const files = formData.getAll("photos") as File[]
    const uploadedFiles = []

    for (const file of files) {
      if (file.size > 0) {
        // Validate file type and size
        if (!file.type.startsWith("image/")) {
          return { success: false, error: "Nur Bilddateien sind erlaubt" }
        }
        if (file.size > 10 * 1024 * 1024) {
          // 10MB limit
          return { success: false, error: "Dateien dürfen maximal 10MB groß sein" }
        }

        // In a real app, you would upload to cloud storage here
        // For now, we'll just store the file info
        uploadedFiles.push({
          name: file.name,
          size: file.size,
          type: file.type,
        })
      }
    }

    // Send email to AVM with customer inquiry
    try {
      await resend.emails.send({
        from: "info@noreply.avmbroker.com",
        to: "vertrieb@avmbroker.com",
        subject: `Neue Fahrzeug-Anfrage: ${validatedData.brand} ${validatedData.model}`,
        html: `
          <h2>Neue Fahrzeug-Verkaufsanfrage</h2>
          
          <h3>Kundendaten:</h3>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Telefon:</strong> ${validatedData.phone}</p>
          <p><strong>E-Mail:</strong> ${validatedData.email}</p>
          
          <h3>Fahrzeugdaten:</h3>
          <p><strong>Marke:</strong> ${validatedData.brand}</p>
          <p><strong>Modell:</strong> ${validatedData.model}</p>
          <p><strong>Baujahr:</strong> ${validatedData.year}</p>
          <p><strong>Kilometerstand:</strong> ${validatedData.mileage} km</p>
          
          ${validatedData.message ? `<h3>Zusätzliche Informationen:</h3><p>${validatedData.message}</p>` : ""}
          
          ${uploadedFiles.length > 0 ? `<h3>Hochgeladene Dateien:</h3><ul>${uploadedFiles.map((file) => `<li>${file.name} (${Math.round(file.size / 1024)} KB)</li>`).join("")}</ul>` : ""}
          
          <p><em>Diese Anfrage wurde über das Kontaktformular auf avmbroker.com gesendet.</em></p>
        `,
      })

      // Send confirmation email to customer
      await resend.emails.send({
        from: "info@noreply.avmbroker.com",
        to: validatedData.email,
        subject: "Bestätigung Ihrer Fahrzeug-Anfrage - AVM e.U",
        html: `
          <h2>Vielen Dank für Ihre Anfrage!</h2>
          
          <p>Liebe/r ${validatedData.name},</p>
          
          <p>wir haben Ihre Anfrage für Ihren <strong>${validatedData.brand} ${validatedData.model}</strong> (Baujahr ${validatedData.year}) erhalten und werden uns binnen 24 Stunden bei Ihnen melden.</p>
          
          <h3>Ihre Angaben im Überblick:</h3>
          <p><strong>Fahrzeug:</strong> ${validatedData.brand} ${validatedData.model}</p>
          <p><strong>Baujahr:</strong> ${validatedData.year}</p>
          <p><strong>Kilometerstand:</strong> ${validatedData.mileage} km</p>
          
          <p>Unser Team wird Ihr Fahrzeug bewerten und Ihnen die besten verfügbaren Angebote unterbreiten.</p>
          
          <p>Bei Fragen erreichen Sie uns unter:</p>
          <p><strong>Telefon:</strong> +43 676 4344905<br>
          <strong>E-Mail:</strong> vertrieb@avmbroker.com</p>
          
          <p>Mit freundlichen Grüßen,<br>
          Ihr AVM e.U Team</p>
          
          <hr>
          <p><small>AVM e.U - Ihr Partner für Fahrzeugvermittlung in Wien & Umgebung</small></p>
        `,
      })
    } catch (emailError) {
      console.error("Email sending failed:", emailError)
      // Continue with success response even if email fails
      // In production, you might want to handle this differently
    }

    return {
      success: true,
      message: "Vielen Dank für Ihre Anfrage! Wir melden uns binnen 24 Stunden bei Ihnen.",
      data: validatedData,
    }
  } catch (error) {
    console.error("Contact form error:", error)

    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: error.errors[0].message,
      }
    }

    return {
      success: false,
      error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.",
    }
  }
}
