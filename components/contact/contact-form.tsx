'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { ArrowRight, CheckCircle2, Mail, MessageCircle, Send } from 'lucide-react'
import { buildMailto, buildWhatsAppLink, isConfigured, siteConfig } from '@/lib/site-config'

const projectTypes = [
  'Business Website',
  'Shopify Store',
  'MERN Web Application',
  'Admin Dashboard',
  'Existing Website Improvements',
  'Other',
]

const budgetRanges = [
  'Under $500',
  '$500 - $1,500',
  '$1,500 - $3,000',
  '$3,000+',
  'Flexible / Not Sure',
]

const timelines = [
  'Immediately (1-2 weeks)',
  'Within a month',
  '1-3 months',
  'Flexible planning',
]

export function ContactForm() {
  const searchParams = useSearchParams()
  const initialType = searchParams.get('type') || 'Business Website'

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: projectTypes.includes(initialType) ? initialType : 'Business Website',
    description: '',
    budget: '$500 - $1,500',
    timeline: 'Within a month',
    preferredContact: 'email' as 'email' | 'whatsapp',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!formData.name.trim()) errs.name = 'Please provide your name.'
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.'
    }
    if (!formData.description.trim() || formData.description.trim().length < 15) {
      errs.description = 'Please describe your project (minimum 15 characters).'
    }
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
  }

  const emailSubject = `Inquiry: ${formData.projectType} — ${formData.name}`
  const messageBody = `Hi ${siteConfig.name},

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'N/A'}
Project Type: ${formData.projectType}
Budget Range: ${formData.budget}
Estimated Timeline: ${formData.timeline}
Preferred Contact: ${formData.preferredContact}

Project Details:
${formData.description}
`

  const mailtoLink = buildMailto(emailSubject, messageBody) ?? `mailto:?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(messageBody)}`
  const whatsAppLink = buildWhatsAppLink(messageBody) ?? `https://wa.me/?text=${encodeURIComponent(messageBody)}`

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-xs">
        <div className="flex items-center gap-3 text-primary">
          <CheckCircle2 className="size-6 shrink-0" />
          <h3 className="font-display text-xl font-semibold text-foreground">Inquiry Prepared</h3>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Thank you, <strong className="text-foreground">{formData.name}</strong>. Since this is an independent portfolio without third-party tracking cookies, you can dispatch your inquiry directly using your preferred platform:
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={mailtoLink}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <Mail className="size-4" /> Send via Email Client
          </a>
          <a
            href={whatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary px-5 py-3 text-sm font-medium text-secondary-foreground hover:bg-accent transition-colors"
          >
            <MessageCircle className="size-4" /> Send via WhatsApp
          </a>
        </div>

        <div className="mt-8 rounded-xl border border-border bg-surface p-4">
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Prepared Summary:</p>
          <pre className="mt-2 max-h-48 overflow-y-auto whitespace-pre-wrap font-mono text-xs text-foreground/80">
            {messageBody}
          </pre>
        </div>

        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-xs text-primary underline underline-offset-4 hover:text-primary/80"
        >
          ← Edit inquiry details
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-xs">
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Your Name <span className="text-primary">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="John Doe"
            className="mt-2 h-11 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-xs text-destructive">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Email Address <span className="text-primary">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="john@example.com"
            className="mt-2 h-11 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-destructive">
              {errors.email}
            </p>
          )}
        </div>

        {/* Company / Business Name */}
        <div>
          <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Company / Business Name <span className="text-xs text-muted-foreground font-normal">(optional)</span>
          </label>
          <input
            id="company"
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="e.g. Salon, Brand, Startup"
            className="mt-2 h-11 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
          />
        </div>

        {/* Project Type */}
        <div>
          <label htmlFor="projectType" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Project Type
          </label>
          <select
            id="projectType"
            value={formData.projectType}
            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
            className="mt-2 h-11 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground focus:border-primary focus:outline-none"
          >
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        {/* Budget */}
        <div>
          <label htmlFor="budget" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Estimated Budget Range
          </label>
          <select
            id="budget"
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            className="mt-2 h-11 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground focus:border-primary focus:outline-none"
          >
            {budgetRanges.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        {/* Timeline */}
        <div>
          <label htmlFor="timeline" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Target Timeline
          </label>
          <select
            id="timeline"
            value={formData.timeline}
            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
            className="mt-2 h-11 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground focus:border-primary focus:outline-none"
          >
            {timelines.map((tl) => (
              <option key={tl} value={tl}>
                {tl}
              </option>
            ))}
          </select>
        </div>

        {/* Description */}
        <div className="sm:col-span-2">
          <label htmlFor="description" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Project Details & Goals <span className="text-primary">*</span>
          </label>
          <textarea
            id="description"
            rows={4}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Tell me about what you are planning to build, target audience, must-have features, or links to references..."
            className="mt-2 w-full rounded-lg border border-border bg-background p-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
            aria-invalid={Boolean(errors.description)}
            aria-describedby={errors.description ? 'desc-error' : undefined}
          />
          {errors.description && (
            <p id="desc-error" className="mt-1 text-xs text-destructive">
              {errors.description}
            </p>
          )}
        </div>

        {/* Preferred Contact Method */}
        <div className="sm:col-span-2">
          <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Preferred Follow-up Method
          </span>
          <div className="mt-2 flex gap-6 text-sm text-foreground">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="preferredContact"
                value="email"
                checked={formData.preferredContact === 'email'}
                onChange={() => setFormData({ ...formData, preferredContact: 'email' })}
                className="text-primary focus:ring-primary"
              />
              Email
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="preferredContact"
                value="whatsapp"
                checked={formData.preferredContact === 'whatsapp'}
                onChange={() => setFormData({ ...formData, preferredContact: 'whatsapp' })}
                className="text-primary focus:ring-primary"
              />
              WhatsApp
            </label>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-t border-border pt-6">
        <p className="text-xs text-muted-foreground">
          No spam or tracking cookies. Direct communication only.
        </p>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors focus-visible:outline-2 focus-visible:outline-ring"
        >
          Review & Send Inquiry <Send className="size-4" aria-hidden="true" />
        </button>
      </div>
    </form>
  )
}
