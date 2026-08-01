import { motion } from 'framer-motion';
import PageMeta from '../components/layout/seo/PageMeta';
import { skills, education, achievements, careerGoals } from '../data/about';
import { timeline } from '../data/timeline';

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.4 },
};

export default function About() {
  return (
    <>
      <PageMeta
        title="About | Pranav Mathur"
        description="Learn about Pranav Mathur's education, skills, achievements, and career goals."
      />
      <section className="page-container space-y-10">
        <motion.div {...fadeIn} className="glass-card p-6 sm:p-8">
          <h1 className="page-title">About Me</h1>
          <p className="page-subtitle mt-4 max-w-3xl">
            Software Engineering student passionate about Full-Stack Development, problem-solving, and building modern web applications. Experienced with React, Node.js, MongoDB, and JavaScript, with a strong foundation in Data Structures & Algorithms. Currently seeking opportunities to apply technical skills and contribute to impactful software products.
          </p>
        </motion.div>

        <motion.div {...fadeIn}>
          <h2 className="section-title mb-4">Education</h2>
          <article className="glass-card p-6">
            <h3 className="text-lg font-medium text-themed">{education.degree}</h3>
            <p className="mt-1 text-sm text-blue-600 dark:text-blue-400">{education.institution}</p>
            <p className="mt-1 text-sm text-themed-subtle">{education.period}</p>
            <p className="mt-3 text-sm leading-relaxed text-themed-muted">
              {education.details}
            </p>
          </article>
        </motion.div>

        <motion.div {...fadeIn}>
          <h2 className="section-title mb-4">Skills</h2>
          <div className="glass-card p-6">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="glass-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div {...fadeIn}>
          <h2 className="section-title mb-4">Achievements</h2>
          <ul className="glass-card space-y-3 p-6">
            {achievements.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-themed-muted"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div {...fadeIn}>
          <h2 className="section-title mb-4">Career Goals</h2>
          <div className="glass-card p-6">
            <p className="max-w-3xl leading-relaxed text-themed-muted">
              {careerGoals}
            </p>
          </div>
        </motion.div>

        <motion.div {...fadeIn}>
          <h2 className="section-title mb-4">Timeline</h2>
          <div className="glass-card p-6">
            <div className="relative space-y-8 pl-6">
              <div className="timeline-line" aria-hidden="true" />
              {timeline.map((item) => (
                <div key={item.year} className="relative pl-6">
                {/* <div key={item.year} className="relative"> */}
                  <span className="timeline-dot" aria-hidden="true" />
                  <p className="text-sm font-medium text-blue-400">{item.year}</p>
                  <h3 className="mt-1 font-medium text-themed">{item.title}</h3>
                  <p className="mt-1 text-sm text-themed-muted">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
