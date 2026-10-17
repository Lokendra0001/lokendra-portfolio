/**
 * =========================================================================
 * DEVELOPER & PORTFOLIO CONFIGURATION CONSTANTS
 * =========================================================================
 * Update the values below with your personal details, contact info, and links.
 * All capital variables and objects in this file are used across the website.
 */

// ---------------------------------------------------------------------------
// 1. PERSONAL INFORMATION (Edit with your real details)
// ---------------------------------------------------------------------------
export const DEV_NAME = "Lokendra Rajpurohit";
export const DEV_INITIALS = "LR";
export const DEV_ROLE = "Full-Stack Developer & AI Automations";
export const DEV_LOCATION = "Surat, India (Available Worldwide / Remote)";
export const DEV_AVAILABILITY =
  "Currently available for selected freelance projects";

// ---------------------------------------------------------------------------
// 2. POSITIONING & BIO
// ---------------------------------------------------------------------------
export const DEV_POSITIONING =
  "I'm a Full-Stack Developer building modern websites, e-commerce experiences, and custom web applications. I work with modern web technologies, React/Next.js, Node.js, and Shopify to help businesses turn ideas into practical digital solutions.";

export const DEV_SHORT_BIO =
  "Crafting responsive business websites, bespoke Shopify storefronts, and resilient web applications.";

// ---------------------------------------------------------------------------
// 3. CONTACT DETAILS (Clients use these to reach you)
// ---------------------------------------------------------------------------
export const CONTACT_EMAIL = "rajpurohitlokendra62@gmail.com";
export const CONTACT_WHATSAPP = "919316816153"; // International format, digits only (country code + number)
export const CONTACT_PHONE = "+91 93168 16153";

// ---------------------------------------------------------------------------
// 4. SOCIAL PROFILES & RESUME
// ---------------------------------------------------------------------------
export const SOCIAL_GITHUB = "https://github.com/Lokendra0001";
export const SOCIAL_LINKEDIN = "https://www.linkedin.com/in/lokendrarajpurohit";
export const RESUME_URL = "/resume.pdf"; // Store resume in /public/resume.pdf or use hosted link
export const PROFILE_PHOTO = "/images/developer.jpg";

// ---------------------------------------------------------------------------
// 5. PRODUCTION SITE METADATA
// ---------------------------------------------------------------------------
export const SITE_URL = "https://lokendra-portfolio-six.vercel.app";
export const SITE_TITLE =
  "Lokendra Rajpurohit — Full-Stack Developer | Custom Websites, Shopify & Web Apps";
export const SITE_DESCRIPTION =
  "Professional Full-Stack Developer portfolio showcasing custom web applications, high-converting Shopify stores, and modern business websites.";

// ---------------------------------------------------------------------------
// 6. HERO SECTION CONFIGURATION
// ---------------------------------------------------------------------------
export const HERO_BADGE = "Available for selected freelance projects";
export const HERO_HEADLINE =
  "Websites and Web Applications Built for Real Business Needs.";
export const HERO_SUBTITLE =
  "I build responsive business websites, custom web applications, and Shopify storefronts with a focus on usability, performance, and maintainable code.";
export const HERO_TECH_STACK =
  "Full-Stack Developer · MERN · Next.js · Shopify · PostgreSQL · DevOps";

// ---------------------------------------------------------------------------
// 7. STRUCTURED CAPITAL OBJECTS
// ---------------------------------------------------------------------------
export const PERSONAL_DETAILS = {
  NAME: DEV_NAME,
  INITIALS: DEV_INITIALS,
  ROLE: DEV_ROLE,
  LOCATION: DEV_LOCATION,
  AVAILABILITY: DEV_AVAILABILITY,
  POSITIONING: DEV_POSITIONING,
  SHORT_BIO: DEV_SHORT_BIO,
  RESUME_URL: RESUME_URL,
  PROFILE_PHOTO: PROFILE_PHOTO,
} as const;

export const CONTACT_INFO = {
  EMAIL: CONTACT_EMAIL,
  WHATSAPP: CONTACT_WHATSAPP,
  PHONE: CONTACT_PHONE,
} as const;

export const SOCIAL_LINKS = {
  GITHUB: SOCIAL_GITHUB,
  LINKEDIN: SOCIAL_LINKEDIN,
} as const;

export const HERO_CONTENT = {
  BADGE: HERO_BADGE,
  HEADLINE: HERO_HEADLINE,
  SUBTITLE: HERO_SUBTITLE,
  TECH_STACK: HERO_TECH_STACK,
} as const;

export const PORTFOLIO_CONFIG = {
  PERSONAL: PERSONAL_DETAILS,
  CONTACT: CONTACT_INFO,
  SOCIAL: SOCIAL_LINKS,
  HERO: HERO_CONTENT,
  SITE_URL: SITE_URL,
  SITE_TITLE: SITE_TITLE,
  SITE_DESCRIPTION: SITE_DESCRIPTION,
} as const;
