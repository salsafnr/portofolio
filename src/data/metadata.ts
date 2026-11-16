import type { SiteMetadata } from "@/lib/types"
import type { Metadata } from "next"

/**
 * Site metadata configuration
 * Customize this file with your own information for SEO and social media sharing
 */
export const siteMetadata = {
  theme: "blue",
  title: "Nur Alifah Salsabila | Engineering Physics Graduate",
  description:
    "Portfolio of Nur Alifah Salsabila, an Engineering Physics graduate working on sensors, condition monitoring, and plant digitalization in cement manufacturing.",
  keywords: [
    "Nur Alifah Salsabila", "Engineering Physics", "Gadjah Mada University", "UGM", "Universitas Gadjah Mada",
    "Condition Monitoring", "Vibration Monitoring",
    "Plant Digitalization", "Data Engineer", "Data Analyst",
    "Instrumentation",
    "Application Engineer", "Instrument Engineer", "Electrical Engineer",
  ],
  author: {
    name: "Nur Alifah Salsabila",
    url: "https://YOUR-DOMAIN-HERE", // TODO: your deployed URL
  },
  siteUrl: "https://YOUR-DOMAIN-HERE", // TODO: must match your real domain
  social: {
    instagram: "salsalfnr", // CV has none
  },
  ogImage: null, // use the auto-generated Open Graph image
}

/**
 * Generate the complete metadata object for Next.js
 * This is used in layout.tsx
 */
export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: [{ name: siteMetadata.author.name, url: siteMetadata.author.url }],
  creator: siteMetadata.author.name,
  publisher: siteMetadata.author.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icons/favicon.ico",
    shortcut: "/icons/favicon.ico",
    apple: "/icons/favicon.ico",
  },
  metadataBase: new URL(siteMetadata.siteUrl),
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/rss.xml",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    ...(siteMetadata.ogImage && {
      images: [
        {
          url: siteMetadata.ogImage,
          width: 1200,
          height: 630,
          alt: siteMetadata.title,
        },
      ],
    }),
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    creator: siteMetadata.social.twitter,
    ...(siteMetadata.ogImage && { images: [siteMetadata.ogImage] }),
  },
  category: "technology",
}
