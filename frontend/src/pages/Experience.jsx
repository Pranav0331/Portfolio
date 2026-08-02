import { motion } from 'framer-motion';
import PageMeta from '../components/layout/seo/PageMeta';
import CertificationCard from '../components/experience/CertificationCard';
import {
  internships,
  certifications,
  learningJourney,
  experienceAchievements,
} from '../data/experience';

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.4 },
};

export default function Experience() {
  return (
    <>
      <PageMeta
        title="Experience | Pranav Mathur"
        description="Internships, certifications, and learning journey of Pranav Mathur."
      />
      <section className="page-container space-y-10">
        <motion.div {...fadeIn} className="glass-card p-6 sm:p-8">
          <h1 className="page-title">Experience</h1>
          <p className="page-subtitle">
            Professional experience, certifications, and the path that shaped my development skills.
          </p>
        </motion.div>

        <motion.div {...fadeIn}>
          <h2 className="section-title mb-4">Internships</h2>
          <div className="space-y-4">
            {internships.map((job) => (
              <article key={job.company} className="glass-card p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-medium text-themed">{job.role}</h3>
                  <span className="text-sm text-themed-subtle">{job.period}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-blue-400">
                  {job.company}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-themed-muted">
                  {job.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {job.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-themed-muted"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeIn}>
          <div className="flex items-center justify-between mb-5">
            <h2 className="section-title mb-0">Certifications</h2>
            <span className="text-xs text-themed-subtle font-medium">
              {certifications.length} Verified Credentials
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard
                key={cert.id || cert.name}
                certification={cert}
                certificate={cert}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeIn}>
          <h2 className="section-title mb-4">Learning Journey</h2>
          <div className="relative space-y-4">
            {learningJourney.map((phase, index) => (
              <article key={phase.phase} className="glass-card relative p-5 pl-8">
                <span className="timeline-dot !-left-[calc(1.25rem+5px)]" aria-hidden="true" />
                {index < learningJourney.length - 1 && (
                  <span
                    className="absolute left-5 top-8 h-[calc(100%+1rem)] w-px bg-gradient-to-b from-blue-500/30 to-transparent"
                    aria-hidden="true"
                  />
                )}
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-medium text-themed">{phase.phase}</h3>
                  <span className="shrink-0 text-xs text-themed-subtle">{phase.period}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {phase.topics.map((topic) => (
                    <span key={topic} className="glass-badge">
                      {topic}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </motion.div>

        {/* <motion.div {...fadeIn}>
          <h2 className="section-title mb-4">Achievements</h2>
          <ul className="glass-card space-y-3 p-6">
            {experienceAchievements.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-themed-muted"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div> */}
      </section>
    </>
  );
}
