"use server"

import { Resend } from "resend"

const resend = new Resend("re_dhpVkk1m_9dFUUtWF5AETPofydTQ3g5xi")

export async function submitContactForm(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const phone = formData.get("phone") as string
    const email = formData.get("email") as string
    const brand = formData.get("brand") as string
    const model = formData.get("model") as string
    const year = formData.get("year") as string
    const mileage = formData.get("mileage") as string
    const message = formData.get("message") as string
    const photos = formData.getAll("photos") as File[]

    // Validate required fields
    if (!name || !phone || !email || !brand || !model || !year || !mileage) {
      return { success: false, error: "Bitte füllen Sie alle Pflichtfelder aus." }
    }

    // Validate that photos are uploaded (mandatory)
    if (photos.length === 0 || photos[0].size === 0) {
      return { success: false, error: "Bitte laden Sie mindestens ein Foto Ihres Fahrzeugs hoch." }
    }

    // Send notification email to business
    await resend.emails.send({
      from: "AVM Kontaktformular <noreply@avmbroker.com>",
      to: "vertrieb@avmbroker.com",
      subject: `Neue Fahrzeug-Anfrage: ${brand} ${model}`,
      html: `
        <h2>Neue Fahrzeug-Verkaufsanfrage</h2>
        
        <h3>Kundendaten:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        
        <h3>Fahrzeugdaten:</h3>
        <p><strong>Marke:</strong> ${brand}</p>
        <p><strong>Modell:</strong> ${model}</p>
        <p><strong>Baujahr:</strong> ${year}</p>
        <p><strong>Kilometerstand:</strong> ${mileage} km</p>
        
        ${message ? `<h3>Zusätzliche Informationen:</h3><p>${message}</p>` : ""}
        
        <p><strong>Anzahl hochgeladener Fotos:</strong> ${photos.length}</p>
        
        <hr>
        <p><em>Diese Anfrage wurde über das Kontaktformular auf avmbroker.com gesendet.</em></p>
      `,
    })

    // Send confirmation email to customer
    await resend.emails.send({
      from: "AVM e.U <noreply@avmbroker.com>",
      to: email,
      subject: "Bestätigung Ihrer Fahrzeug-Anfrage",
      html: `
        <h2>Vielen Dank für Ihre Anfrage!</h2>
        
        <p>Liebe/r ${name},</p>
        
        <p>wir haben Ihre Anfrage für Ihren <strong>${brand} ${model}</strong> (Baujahr ${year}) erhalten und werden uns binnen 24 Stunden bei Ihnen melden.</p>
        
        <p>Unsere Experten erstellen eine kostenlose Bewertung Ihres Fahrzeugs und finden den besten Käufer für Sie.</p>
        
        <h3>Ihre Anfrage im Überblick:</h3>
        <ul>
          <li><strong>Fahrzeug:</strong> ${brand} ${model}</li>
          <li><strong>Baujahr:</strong> ${year}</li>
          <li><strong>Kilometerstand:</strong> ${mileage} km</li>
          <li><strong>Fotos:</strong> ${photos.length} hochgeladen</li>
        </ul>
        
        <p>Bei Fragen erreichen Sie uns unter:</p>
        <p><strong>Telefon:</strong> +43 676 4344905<br>
        <strong>E-Mail:</strong> vertrieb@avmbroker.com</p>
        
        <p>Mit freundlichen Grüßen,<br>
        Ihr AVM e.U Team</p>
      `,
    })

    return {
      success: true,
      message: "Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns binnen 24 Stunden bei Ihnen.",
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return {
      success: false,
      error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt.",
    }
  }
}
