import { IconType } from "react-icons"
import {
  FaMapMarkerAlt,
  FaBook,
  FaLanguage,
  FaGamepad,
  FaUniversity,
  FaSkiing,
  FaBuilding,
  FaTools,
  FaGithub,
  FaLinkedin,
  FaGoodreads,
  FaEnvelope,
  FaInstagram,
  FaReddit,
  FaDribbble,
  FaYoutube,
  FaStackOverflow,
} from "react-icons/fa"
import { FaBluesky, FaXTwitter } from "react-icons/fa6"
import { SocialPlatform } from "@/lib/types"

/**
 * Configuration for the home page intro section
 */
export const homeIntroConfig = {
  /**
   * Your full name (used in breadcrumbs, footer, and other places)
   */
  name: "Nur Alifah Salsabila",
  
  /**
   * Introduction paragraphs (can be multiple)
   */
  introParagraphs: [
    "I'm an Engineering Physics graduate from Universitas Gadjah Mada with hands-on experience in sensors, condition monitoring, and plant digitalization.",
    "At a cement manufacturer I work directly with technicians and engineers to build monitoring and record-keeping systems, from motor vibration dashboards to a soft sensor that runs inside the DCS.",
    "I'm looking for an application engineer or technical sales role.",
  ],

  /**
   * Quick facts displayed as chips below your introduction
   * Fill in the fields below. Leave empty ("") to hide a fact.
   */
  facts: {
    company: "PT Solusi Bangun Indonesia Tbk",
    education: "Universitas Gadjah Mada (Engineering Physics)",
    location: "Tuban, Indonesia",
    languages: "IDN, EN",
    role: "Electrical Instrument Technician",
  },

  /**
   * Additional custom facts to display below the predefined ones.
   * Add any extra facts you want to display with their icons.
   * You must use an icon from react-icons and provide its label.
   */
  additionalFacts: [] as { icon: string; label: string }[],

  /**
   * Number of work items to show in the preview sections on the home page.
   * Note that the actual number shown may be less if there aren't enough items.
   * If the actual number of items is larger than this, a "View All" link will be displayed.
   * This number must be a number greater than zero.
   */
  workItemsToShow: 3,

  /**
   * Number of projects to show in the preview sections on the home page.
   * Note that the actual number shown may be less if there aren't enough items.
   * If the actual number of items is larger than this, a "View All" link will be displayed.
   * This number must be a number greater than zero. We recommend keeping it low and
   * having a multiple of 2 for better grid layout (e.g., 2 or 4).
   */
  projectsToShow: 4,
}

/**
 * Configuration for pagination settings within the site.
 */
export const paginationConfig = {
  /**
   * Number of work items to show per page for "/work" and "/work?page=n" routes.
   * This number must be a number greater than zero.
   */
  workItemsPerPage: 6,

  /**
   * Number of projects to show per page for "/projects" and "/projects?page=n" routes.
   * This number must be a number greater than zero.
   */
  projectsPerPage: 6,
}

/**
 * Configuration for the footer
 */
export const footerConfig = {
  /**
   * Name displayed in the copyright notice
   */
  copyrightName: "Nur Alifah Salsabila",

  /**
   * Show version and attribution section
   * Set to true if you want to hide the "built by @alemoraru" attribution and version number.
   * By default, this is true to give credit to the template creator, but you can disable it if desired.
   */
  showVersionAndAttribution: true,

  /**
   * Social media links
   * Simply add your URLs below. Leave empty ("") to hide a social link.
   */
  socialLinks: {
    github: "http://github.com/salsafnr",
    linkedin: "https://linkedin.com/in/nur-alifah-salsabila",
    email: "salsabila.nrlf@gmail.com",
    goodreads: "/",
    instagram: "/",
    twitter: "/",
    reddit: "/",
    dribbble: "/",
    youtube: "/",
    bluesky: "/",
    stackoverflow: "/",
  } as Record<SocialPlatform, string>,
}

// USERS DO NOT NEED TO MODIFY BELOW THIS LINE
// YOU CAN, HOWEVER, EXTEND THE ICON MAPS IF NEEDED

/**
 * Internal mapping of predefined fact categories to their icons
 * This is used internally by the HomeContent component - users don't need to modify this
 */
export const factIconMap: Record<keyof typeof homeIntroConfig.facts, IconType> = {
  company: FaBuilding,
  education: FaUniversity,
  location: FaMapMarkerAlt,
  languages: FaLanguage,
  role: FaTools,
}

/**
 * Internal mapping of social platforms to their icons and labels
 * This is used internally by the Footer component - users don't need to modify this
 */
export const socialIconMap: Record<SocialPlatform, { icon: IconType; label: string }> = {
  github: { icon: FaGithub, label: "GitHub" },
  linkedin: { icon: FaLinkedin, label: "LinkedIn" },
  goodreads: { icon: FaGoodreads, label: "GoodReads" },
  instagram: { icon: FaInstagram, label: "Instagram" },
  twitter: { icon: FaXTwitter, label: "X" },
  reddit: { icon: FaReddit, label: "Reddit" },
  dribbble: { icon: FaDribbble, label: "Dribbble" },
  youtube: { icon: FaYoutube, label: "YouTube" },
  bluesky: { icon: FaBluesky, label: "Bluesky" },
  stackoverflow: { icon: FaStackOverflow, label: "Stack Overflow" },
  email: { icon: FaEnvelope, label: "Email" },
}
