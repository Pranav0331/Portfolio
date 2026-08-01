import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Award,
  Calendar,
  MapPin,
  CheckCircle2,
  Image as ImageIcon,
  ExternalLink,
  Layers,
  Sparkles,
} from 'lucide-react';
import { optimizeCloudinaryUrl } from '../../data/hackathons';
import SmartProjectImage from '../ui/SmartProjectImage';

export default function HackathonDetailsModal({ isOpen, hackathon, onClose, onOpenMedia }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !hackathon) return null;

  const {
    title,
    subtitle,
    period,
    location,
    badge,
    coverImage,
    description,
    longDescription,
    highlights,
    tech,
    gallery,
    certificate,
  } = hackathon;

  // Build media list for fullscreen gallery viewer
  const allMediaItems = [
    {
      id: `${hackathon.id}-cover`,
      url: coverImage,
      title: `${title} - Cover Image`,
      caption: description,
      type: 'cover',
    },
    ...gallery.map((g) => ({ ...g, type: 'image' })),
    {
      id: `${hackathon.id}-cert`,
      url: certificate.url,
      title: certificate.title,
      caption: `Certificate issued by ${certificate.issuer} (${certificate.date})`,
      type: 'certificate',
    },
  ];

  const getBadgeStyle = (type) => {
    switch (type) {
      case 'winner':
        return 'bg-amber-500/15 text-amber-600 dark:text-amber-300 border-amber-500/30';
      case 'runnerup':
        return 'bg-sky-500/15 text-sky-600 dark:text-sky-300 border-sky-500/30';
      case 'finalist':
        return 'bg-purple-500/15 text-purple-600 dark:text-purple-300 border-purple-500/30';
      default:
        return 'bg-blue-500/15 text-blue-600 dark:text-blue-300 border-blue-500/30';
    }
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[24px] glass-panel border border-slate-700/40 shadow-2xl bg-themed p-5 sm:p-8 space-y-6"
        >
          {/* Header Bar */}
          <div className="flex items-start justify-between gap-4 border-b pb-4" style={{ borderColor: 'var(--glass-border)' }}>
            <div className="space-y-1.5 pr-6">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-semibold border ${getBadgeStyle(
                    badge.type
                  )}`}
                >
                  <Award className="h-3.5 w-3.5" />
                  {badge.text}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-themed-subtle">
                  <Calendar className="h-3.5 w-3.5 text-blue-500" />
                  {period}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-themed-subtle">
                  <MapPin className="h-3.5 w-3.5 text-blue-500" />
                  {location}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-themed tracking-tight">
                {title}
              </h2>
              <p className="text-sm font-medium text-blue-500 dark:text-blue-400">
                {subtitle}
              </p>
            </div>

            <button
              onClick={onClose}
              className="glass-icon-btn shrink-0 p-2 text-themed-subtle hover:text-themed cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Banner Cover Image with Smart Non-cropped display */}
          <div className="relative h-56 sm:h-72 w-full overflow-hidden rounded-2xl bg-slate-900/50">
            <SmartProjectImage
              src={optimizeCloudinaryUrl(coverImage, { width: 1200, quality: 'auto' })}
              alt={title}
              containerClassName="h-56 sm:h-72 w-full rounded-2xl"
            />
            <button
              onClick={() => onOpenMedia(allMediaItems, 0, title)}
              className="absolute bottom-3 right-3 z-20 glass-btn !py-1.5 !px-3 text-xs bg-slate-950/70 border-slate-700/60 text-white hover:bg-blue-600 transition-all shadow-lg flex items-center gap-1.5 cursor-pointer"
            >
              <ImageIcon className="h-3.5 w-3.5" />
              View Full Image
            </button>
          </div>

          {/* Full Description & Context */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-themed-subtle flex items-center gap-1.5">
              <Sparkles className="h-4 w-4 text-blue-500" />
              About & Problem Statement
            </h3>
            <p className="text-sm leading-relaxed text-themed-muted">
              {longDescription || description}
            </p>
          </div>

          {/* Key Achievements */}
          {highlights && highlights.length > 0 && (
            <div className="space-y-3 border-t pt-5" style={{ borderColor: 'var(--glass-border)' }}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-themed-subtle">
                Key Highlights & Achievements
              </h3>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl glass-panel text-xs text-themed-muted"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Stack */}
          <div className="space-y-3 border-t pt-5" style={{ borderColor: 'var(--glass-border)' }}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-themed-subtle flex items-center gap-1.5">
              <Layers className="h-4 w-4 text-blue-500" />
              Technologies & Tools Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {tech.map((t) => (
                <span key={t} className="glass-badge py-1 px-3 text-xs font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Certificate Section */}
          {certificate && (
            <div className="space-y-3 border-t pt-5" style={{ borderColor: 'var(--glass-border)' }}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-themed-subtle flex items-center gap-1.5">
                <Award className="h-4 w-4 text-amber-500" />
                Verified Certificate
              </h3>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl glass-panel border-amber-500/20 bg-amber-500/5">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-amber-500/20 text-amber-500">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-themed">{certificate.title}</h4>
                    <p className="text-xs text-themed-subtle">
                      Issued by {certificate.issuer} • {certificate.date}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => onOpenMedia(allMediaItems, allMediaItems.length - 1, title)}
                  className="glass-btn-primary text-xs py-2 px-4 whitespace-nowrap w-full sm:w-auto cursor-pointer"
                >
                  <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                  View Full Certificate
                </button>
              </div>
            </div>
          )}

          {/* Event Gallery */}
          {gallery && gallery.length > 0 && (
            <div className="space-y-3 border-t pt-5" style={{ borderColor: 'var(--glass-border)' }}>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-themed-subtle flex items-center gap-1.5">
                  <ImageIcon className="h-4 w-4 text-blue-500" />
                  Event Gallery ({gallery.length})
                </h3>
                <span className="text-xs text-themed-subtle">Click photo for gallery view</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {gallery.map((imgItem, idx) => (
                  <button
                    key={imgItem.id}
                    onClick={() => onOpenMedia(allMediaItems, idx + 1, title)}
                    className="group relative h-28 w-full overflow-hidden rounded-xl bg-slate-900/50 border border-slate-700/30 cursor-pointer"
                  >
                    <img
                      src={optimizeCloudinaryUrl(imgItem.url, { width: 400, quality: 'auto' })}
                      alt={imgItem.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2 text-center text-white text-xs font-medium">
                      {imgItem.title}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
