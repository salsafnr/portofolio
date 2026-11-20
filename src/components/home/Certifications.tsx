"use client"

import { motion } from "framer-motion"
import { FaExternalLinkAlt } from "react-icons/fa"
import {
  fadeUpVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from "@/components/home/animations"
import { credentials } from "@/data/certifications"

/**
 * List of achievements, certifications and bootcamps for the home page.
 */
export default function Certifications() {
  return (
    <section className="mt-12" aria-labelledby="credentials-heading">
      <motion.h2
        id="credentials-heading"
        initial="hidden"
        whileInView="visible"
        variants={fadeUpVariants}
        viewport={{ once: true }}
        className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100"
      >
        Achievements &amp; Certifications
      </motion.h2>

      <motion.ul
        initial="hidden"
        whileInView="visible"
        variants={staggerContainerVariants}
        viewport={{ once: true }}
        className="divide-y divide-gray-200 dark:divide-gray-700"
      >
        {credentials.map(credential => {
          const url = credential.url?.trim()

          return (
            <motion.li
              key={`${credential.title}-${credential.date}`}
              variants={staggerItemVariants}
              className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <div>
                {url ? (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-medium text-gray-900 dark:text-gray-100 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                  >
                    {credential.title}
                    <FaExternalLinkAlt className="h-3 w-3 shrink-0" aria-hidden="true" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                ) : (
                  <p className="font-medium text-gray-900 dark:text-gray-100">{credential.title}</p>
                )}
                <p className="text-sm text-gray-600 dark:text-gray-300">{credential.issuer}</p>
              </div>
              <p className="shrink-0 text-sm text-gray-500 dark:text-gray-400">
                {credential.type} · {credential.date}
              </p>
            </motion.li>
          )
        })}
      </motion.ul>
    </section>
  )
}
