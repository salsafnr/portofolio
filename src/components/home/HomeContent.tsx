"use client"

import { motion, MotionConfig } from "framer-motion"
import {
  fadeUpVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from "@/components/home/animations"
import Certifications from "@/components/home/Certifications"
import ProjectsPreview from "@/components/home/ProjectsPreview"
import QuickFacts from "@/components/home/QuickFacts"
import WorkPreview from "@/components/home/WorkPreview"
import { homeIntroConfig } from "@/data/content"
import { BlogPostProps, ProjectProps, WorkItemProps } from "@/lib/types"

interface HomeContentProps {
  /** Kept optional only so page.tsx still compiles. The blog section is no longer shown. */
  blog?: BlogPostProps[]
  work: WorkItemProps[]
  projects: ProjectProps[]
}

/**
 * This component renders the main content of the home page, including the introduction section,
 * quick facts, achievements and certifications, work experience preview, and projects preview.
 * @param work - An array of work experience data to display in the work preview section.
 * @param projects - An array of project data to display in the projects preview section.
 */
export default function HomeContent({ work, projects }: HomeContentProps) {
  return (
    <MotionConfig reducedMotion="user">
      <section className="px-4 max-w-4xl mx-auto">
        {/* Intro Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUpVariants}
          viewport={{ once: true }}
          className="text-center mt-2"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Hi, I&#39;m {homeIntroConfig.shortName || homeIntroConfig.name}{" "}
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              className="inline-block"
            >
              👋
            </motion.span>
          </h1>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainerVariants}
            viewport={{ once: true }}
            className="space-y-4 max-w-3xl mx-auto mb-8"
          >
            {homeIntroConfig.introParagraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={staggerItemVariants}
                className="text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300 text-left"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>

        <QuickFacts />
        <WorkPreview work={work} />
        <ProjectsPreview projects={projects} />
        <Certifications />
      </section>
    </MotionConfig>
  )
}
