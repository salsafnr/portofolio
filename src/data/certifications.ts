export type CredentialType = "Achievement" | "Certification" | "Bootcamp"

export interface Credential {
  title: string
  issuer: string
  date: string
  type: CredentialType
  url?: string
}

// Newest first.
export const credentials: Credential[] = [
  {
    title: "LLM & API Integration for Data Scientists",
    issuer: "Hacktiv8",
    date: "Sep 2026",
    type: "Bootcamp",
    url: "https://certificate-and-transcript.s3.ap-southeast-1.amazonaws.com/documents/a3afc82c-1b3b-4192-b48e-2ffb0bcf5f32/1790742441753-5c5222a6-f6e2-49bb-8eb5-0f0ad09f11cb.pdf",
  },
  {
    title: "Data Labeling",
    issuer: "Forage",
    date: "Sep 2026",
    type: "Certification",
    url: "https://www.theforage.com/completion-certificates/HgpPSsyQpzob6HEh9/Fnbjyox4Y4SciuEGF_HgpPSsyQpzob6HEh9_699fc491e31cdf0029004e11_1789522297866_completion_certificate.pdf",
  },
  {
    title: "Digital Transformation",
    issuer: "BCG",
    date: "Aug 2026",
    type: "Certification",
    url: "https://www.theforage.com/completion-certificates/SKZxezskWgmFjRvj9/cT6tMKSaMryk6PGaF_SKZxezskWgmFjRvj9_699fc491e31cdf0029004e11_1787042443831_completion_certificate.pdf",
  },
  {
    title: "Data Analytics",
    issuer: "Deloitte",
    date: "Feb 2026",
    type: "Certification",
    url: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_699fc491e31cdf0029004e11_1772164092875_completion_certificate.pdf",
  },
  {
    title: "Champion, Technology Development Team",
    issuer: "Indonesia Flying Robot Contest (KRTI)",
    date: "2024",
    type: "Achievement",
  },
  {
    title: "Grand Champion",
    issuer: "Indonesia Flying Robot Contest (KRTI)",
    date: "2023",
    type: "Achievement",
  },
]
