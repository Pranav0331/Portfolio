import { motion } from 'framer-motion';
import { Award, Calendar, ChevronRight } from 'lucide-react';

export default function HackathonTimeline({ hackathons, onSelectHackathon }) {
  return (
    <div className="relative space-y-6 pl-6 sm:pl-8">
      {/* Central Vertical Timeline Line */}
      <div className="timeline-line !left-2 sm:!left-3" aria-hidden="true" />

      {hackathons.map((item, index) => (
        <motion.article
          key={item.id}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="glass-card relative p-5 sm:p-6"
        >
          {/* Custom Animated Timeline Dot */}
          <span
            className="timeline-dot !-left-[calc(1.5rem+5px)] sm:!-left-[calc(2rem+5px)]"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-blue-500 uppercase tracking-wider">
                  {item.period}
                </span>
                <span className="text-xs text-themed-subtle">• {item.location}</span>
              </div>
              <h3 className="text-lg font-bold text-themed mt-0.5">{item.title}</h3>
            </div>

            <span className="inline-flex items-center gap-1.5 self-start sm:self-auto px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-500 border border-blue-500/20">
              <Award className="h-3.5 w-3.5" />
              {item.badge.text}
            </span>
          </div>

          <p className="mt-2.5 text-sm leading-relaxed text-themed-muted">
            {item.subtitle}
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t pt-3.5" style={{ borderColor: 'var(--glass-border)' }}>
            <div className="flex flex-wrap gap-1.5">
              {item.tech.slice(0, 4).map((t) => (
                <span key={t} className="glass-badge text-[11px]">
                  {t}
                </span>
              ))}
              {item.tech.length > 4 && (
                <span className="glass-badge text-[11px] opacity-75">
                  +{item.tech.length - 4} more
                </span>
              )}
            </div>

            <button
              onClick={() => onSelectHackathon && onSelectHackathon(item)}
              className="text-xs font-medium text-blue-500 hover:text-blue-600 flex items-center gap-1 transition-colors group"
            >
              Explore Details
              <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
