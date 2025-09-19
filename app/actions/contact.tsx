"use server"

import { Resend } from "resend"
import { Buffer } from "buffer"
import fs from "fs";

const resend = new Resend("re_dhpVkk1m_9dFUUtWF5AETPofydTQ3g5xi")
const PIPEDRIVE_API_TOKEN = "01e9696a770b7018d9529509f74abe4c92a334cd";

async function sendLeadToPipedrive(formData: FormData) {
  const personName = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const brand = formData.get("brand") as string;
  const model = formData.get("model") as string;
  const year = formData.get("year") as string;
  const retail = parseFloat(formData.get("retail") as string);


  // 1. Person erstellen
  const personResponse = await fetch(`https://api.pipedrive.com/v1/persons?api_token=${PIPEDRIVE_API_TOKEN}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: personName,
      email: email,
      phone: phone,
    }),
  });
  const personData = await personResponse.json();
  if (!personData.success) throw new Error("Person konnte nicht erstellt werden");
  const personId = personData.data.id;

  // 2. Lead erstellen
  const leadResponse = await fetch(`https://api.pipedrive.com/v1/leads?api_token=${PIPEDRIVE_API_TOKEN}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: `Fahrzeuganfrage: ${brand} ${model} (${year})`,
      value: {
      amount: retail,
      currency: "EUR"
    },
      person_id: personId,
    }),
  });
  const leadData = await leadResponse.json();
  if (!leadData.success) throw new Error("Lead konnte nicht erstellt werden");

  return leadData;
}


export async function submitContactForm(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const phone = formData.get("phone") as string
    const email = formData.get("email") as string
    const brand = formData.get("brand") as string
    const model = formData.get("model") as string
    const year = formData.get("year") as string
    const mileage = formData.get("mileage") as string
    const retail = formData.get("retail") as string
    const message = formData.get("message") as string
    const photos = formData.getAll("photos") as File[]

    // Validate required fields
    if (!name || !phone || !email || !brand || !model || !year || !mileage || !retail) {
      return { success: false, error: "Bitte füllen Sie alle Pflichtfelder aus." }
    }

    // Validate that photos are uploaded (mandatory)
    if (photos.length === 0 || photos[0].size === 0) {
      return { success: false, error: "Bitte laden Sie mindestens ein Foto Ihres Fahrzeugs hoch." }
    }

    const attachments = await Promise.all(
      photos.map(async (photo, index) => {
        const arrayBuffer = await photo.arrayBuffer()
        const buffer = Buffer.from(arrayBuffer)

        return {
          filename: `fahrzeug-foto-${index + 1}.${photo.name.split(".").pop()}`,
          content: buffer,
        }
      }),
    )

    // Send notification email to business
    await resend.emails.send({
      from: "AVM Kontaktformular <noreply@avmbroker.com>",
      to: "vertrieb@avmbroker.com",
      subject: `Neue Fahrzeug-Anfrage: ${brand} ${model}`,
      attachments: attachments,
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
        <p><strong>Wunschpreis:</strong> ${retail} €</p>
        
        ${message ? `<h3>Zusätzliche Informationen:</h3><p>${message}</p>` : ""}
        
        <p><strong>Anzahl hochgeladener Fotos:</strong> ${photos.length} (siehe Anhänge)</p>
        
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
          <li><strong>Wunschpreis:</strong> ${retail} €</li>
          <li><strong>Fotos:</strong> ${photos.length} hochgeladen</li>
        </ul>
        
        <p>Bei Fragen erreichen Sie uns unter:</p>
        <p><strong>Telefon:</strong> +43 676 4344905<br>
        <strong>E-Mail:</strong> vertrieb@avmbroker.com</p>
        
        <p>Mit freundlichen Grüßen,<br>
        Ihr AVM e.U Team</p>

      `,
      attachments: [
    { name: "AGB.pdf", type: "application/pdf", data: "https://www.avmbroker.com/files/agb.pdf"},
    { name: "Musterformular.pdf", type: "application/pdf", data: "https://www.avmbroker.com/files/muster.pdf" },
  ],
    })
  await sendLeadToPipedrive(formData);
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
