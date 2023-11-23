"use server"

import { headers } from "next/headers"

export const formSubmission = async (prevState: any, formData: FormData) => {
  const email = formData.get("email")
  const name = formData.get("name")
  const message = formData.get("message")
  const subject = formData.get("subject")

  const errors: any = {
    email: false,
    name: false,
    message: false,
    subject: false,
  }

  if (!email) errors.email = true
  if (!name) errors.name = true
  if (!message) errors.message = true
  if (!subject) errors.subject = true

  if (!errors.email && !errors.name && !errors.message) {
    const host = headers().get("host")
    const protocol = process?.env.NODE_ENV === "development" ? "http" : "https"
    const url = `${protocol}://${host}/api/contact`

    await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email,
        name,
        message,
        subject,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((err) => {
      console.log(err)
    })

    return {
      ...prevState,
      errors,
    }
  }

  return {
    ...prevState,
    errors,
  }
}
