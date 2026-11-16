export type CredentialType = "Achievement" | "Certification" | "Bootcamp";

export interface Credential {
  title: string;
  issuer: string;
  date: string;
  type: CredentialType;
}

// Newest first.
export const credentials: Credential[] = [
  {
    title: "LLM & API Integration for Data Scientists",
    issuer: "Hacktiv8",
    date: "Sep 2026",
    type: "Bootcamp",
  },
  {
    title: "Data Labeling",
    issuer: "Forage",
    date: "Sep 2026",
    type: "Certification",
  },
  {
    title: "Digital Transformation",
    issuer: "BCG",
    date: "Aug 2026",
    type: "Certification",
  },
  {
    title: "Data Analytics",
    issuer: "Deloitte",
    date: "Feb 2026",
    type: "Certification",
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
];
