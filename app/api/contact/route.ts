import nodemailer from 'nodemailer'
import { CONTACT_EMAIL } from '@/config/constant'

export const runtime = 'nodejs'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type Inquiry = {
  name: string
  email: string
  company: string
  projectType: string
  budget: string
  timeline: string
  preferredContact: string
  description: string
}

function field(body: Record<string, unknown>, key: keyof Inquiry, max: number) {
  const value = body[key]
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export async function POST(request: Request) {
  const { SMTP_USER, SMTP_PASS, SMTP_HOST = 'smtp.gmail.com', SMTP_PORT = '465' } = process.env
  if (!SMTP_USER || !SMTP_PASS) {
    console.error('Contact form: SMTP_USER / SMTP_PASS are not set')
    return Response.json({ error: 'Email service is not configured.' }, { status: 500 })
  }

  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'Invalid request.' }, { status: 400 })
  }

  // Honeypot: real visitors never see or fill this field.
  if (typeof body.website === 'string' && body.website.trim()) {
    return Response.json({ ok: true })
  }

  const inquiry: Inquiry = {
    name: field(body, 'name', 100),
    email: field(body, 'email', 200),
    company: field(body, 'company', 150),
    projectType: field(body, 'projectType', 100),
    budget: field(body, 'budget', 100),
    timeline: field(body, 'timeline', 100),
    preferredContact: field(body, 'preferredContact', 20),
    description: field(body, 'description', 5000),
  }

  if (!inquiry.name || !EMAIL_PATTERN.test(inquiry.email) || inquiry.description.length < 15) {
    return Response.json({ error: 'Please fill in your name, a valid email and project details.' }, { status: 400 })
  }

  const rows: [string, string][] = [
    ['Name', inquiry.name],
    ['Email', inquiry.email],
    ['Company', inquiry.company || 'N/A'],
    ['Project type', inquiry.projectType],
    ['Budget', inquiry.budget],
    ['Timeline', inquiry.timeline],
    ['Preferred contact', inquiry.preferredContact],
  ]
  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join('\n')}\n\nProject details:\n${inquiry.description}`
  const html = `<table cellpadding="6" style="font-family:sans-serif;font-size:14px">${rows
    .map(([k, v]) => `<tr><td style="color:#64748b">${k}</td><td><strong>${escapeHtml(v)}</strong></td></tr>`)
    .join('')}</table><p style="font-family:sans-serif;font-size:14px;white-space:pre-wrap">${escapeHtml(
    inquiry.description,
  )}</p>`

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  })

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${SMTP_USER}>`,
      to: process.env.CONTACT_TO_EMAIL || CONTACT_EMAIL,
      replyTo: { name: inquiry.name, address: inquiry.email },
      subject: `New inquiry: ${inquiry.projectType} — ${inquiry.name}`.replace(/[\r\n]+/g, ' '),
      text,
      html,
    })
  } catch (error) {
    console.error('Contact form: failed to send email', error)
    return Response.json({ error: 'Could not send your message. Please try again or email me directly.' }, { status: 502 })
  }

  return Response.json({ ok: true })
}
