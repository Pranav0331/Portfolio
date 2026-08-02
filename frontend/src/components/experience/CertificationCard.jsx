import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, Eye, Building2 } from 'lucide-react';

export default function CertificationCard({ certification, certificate, index = 0 }) {
  const cert = certification || certificate || {};
  const name = cert.name || cert.title || '';
  const issuer = cert.issuer || '';
  const year = cert.year || cert.date || '';
  const certificateUrl = cert.certificateUrl || cert.url || '';

  const hasCertificateUrl = Boolean(
    typeof certificateUrl === 'string' && certificateUrl.trim() !== ''
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, delay: index * 0.07 }}
      className="glass-panel group relative flex flex-col h-full rounded-[18px] border border-slate-700/30 p-4 sm:p-4.5 shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-blue-500/5 transition-all duration-300 bg-themed/90"
    >
      {/* Top Header: Badge Icon & Year */}
      <div className="flex items-center justify-between gap-2.5 mb-2.5">
        <div className="flex items-center justify-center h-8.5 w-8.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-105 group-hover:bg-blue-500/20 transition-all duration-300">
          <Award className="h-4.5 w-4.5 shrink-0" />
        </div>
        {year && (
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-300 bg-slate-900/60 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-slate-700/60">
            <Calendar className="h-3 w-3 text-blue-400 shrink-0" />
            {year}
          </span>
        )}
      </div>

      {/* Main Details */}
      <div className="space-y-1 mb-3">
        <h3 className="text-base sm:text-[17px] font-bold tracking-tight text-themed group-hover:text-blue-400 transition-colors leading-snug">
          {name}
        </h3>
        {issuer && (
          <div className="flex items-center gap-1.5 text-xs font-medium text-themed-muted">
            <Building2 className="h-3.5 w-3.5 text-blue-500/80 shrink-0" />
            <span>{issuer}</span>
          </div>
        )}
      </div>

      {/* View Certificate Button (Rendered conditionally if certificateUrl exists) */}
      {hasCertificateUrl && (
        <div className="mt-auto pt-3 border-t" style={{ borderColor: 'var(--glass-border)' }}>
          <a
            href={certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-btn-primary group/btn flex w-full items-center justify-center gap-1.5 rounded-xl py-2 px-3.5 text-xs font-semibold shadow-sm hover:shadow-md hover:shadow-blue-500/20 active:scale-[0.98] transition-all duration-300 cursor-pointer"
          >
            <Eye className="h-3.5 w-3.5 text-blue-400 group-hover/btn:text-blue-300 transition-colors shrink-0" />
            <span>View Certificate</span>
            <ExternalLink className="h-3 w-3 opacity-75 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all shrink-0" />
          </a>
        </div>
      )}
    </motion.article>
  );
}
