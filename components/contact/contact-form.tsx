'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { CheckCircle2, Loader2, Send } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

const projectTypes = [
  'Business Website',
  'Shopify Store',
  'MERN Web Application',
  'Admin Dashboard',
  'Existing Website Improvements',
  'Other',
]

const budgetRanges = [
  'Under ₹15,000',
  '₹15,000 – ₹35,000',
  '₹35,000 – ₹75,000',
  '₹75,000 – ₹1,50,000',
  '₹1,50,000+',
  'Flexible / To be discussed',
]

const timelines = [
  'Immediate / ASAP (< 1 week)',
  'Fast-Track Sprint (1–2 weeks)',
  'Standard Delivery (2–4 weeks)',
  '1–2 Months',
  'Flexible Milestone Planning',
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
    budget: '₹15,000 – ₹35,000',
    timeline: 'Fast-Track Sprint (1–2 weeks)',
    preferredContact: 'email' as 'email' | 'whatsapp',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [serverError, setServerError] = useState('')
  const [honeypot, setHoneypot] = useState('')

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === 'sending' || !validate()) return
    setStatus('sending')
    setServerError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, website: honeypot }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => null)
        throw new Error(data?.error || 'Could not send your message.')
      }
      setStatus('sent')
    } catch (err) {
      setServerError(err instanceof Error ? err.message : 'Could not send your message.')
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-xs" role="status">
        <div className="flex items-center gap-3 text-primary">
          <CheckCircle2 className="size-6 shrink-0" aria-hidden="true" />
          <h3 className="font-display text-xl font-semibold text-foreground">Message sent</h3>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Thank you, <strong className="text-foreground">{formData.name}</strong>. Your inquiry is in my inbox — I
          usually reply within 1–2 business days at <strong className="text-foreground">{formData.email}</strong>.
        </p>
        <button
          type="button"
          onClick={() => {
            setFormData({ ...formData, description: '' })
            setStatus('idle')
          }}
          className="mt-6 text-xs text-primary underline underline-offset-4 hover:text-primary/80"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-xs">
      {/* Honeypot for bots — hidden from people and assistive tech */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

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

      {status === 'error' && (
        <p role="alert" className="mt-6 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {serverError}{' '}
          {siteConfig.contact.email && (
            <>
              You can also email me at{' '}
              <a href={`mailto:${siteConfig.contact.email}`} className="font-medium underline underline-offset-4">
                {siteConfig.contact.email}
              </a>
              .
            </>
          )}
        </p>
      )}

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-t border-border pt-6">
        <p className="text-xs text-muted-foreground">
          No spam or tracking cookies. Direct communication only.
        </p>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors focus-visible:outline-2 focus-visible:outline-ring disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === 'sending' ? (
            <>
              Sending… <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            </>
          ) : (
            <>
              Send Inquiry <Send className="size-4" aria-hidden="true" />
            </>
          )}
        </button>
      </div>
    </form>
  )
}
