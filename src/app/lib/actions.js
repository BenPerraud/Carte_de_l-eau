'use client'

import { Resend } from "resend"
import EmailContact from "../../../react-email-starter/emails/EmailContact"

export const sendEmail = async (prevState, formData) => {
  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: email,
      to: "benjaminperraud@outlook.fr",
      subject: "Contact Carte de l'eau",
      react: EmailContact({ name, email, message })
    })
    return {
      error: null,
      success: true
    }
  } catch (error) {
    console.log(error)
    return {
      error: (error).message,
      success: false
    }
  }
}

