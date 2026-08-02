import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, Image as ImageIcon, Scroll, Info } from 'lucide-react';
import { optimizeCloudinaryUrl } from '../../data/hackathons';
import SmartProjectImage from '../ui/SmartProjectImage';

export default function HackathonCard({ hackathon, onOpenDetails, onOpenMedia }) {
  const {
    title,
    period,
    badge,
    coverImage,
    description,
    tech,
    gallery = [],
    certificate,
  } = hackathon;

  const optimizedCover = optimizeCloudinaryUrl(coverImage, { width: 600, quality: 'auto' });

  // Compile media items array for gallery viewer (Cover -> Gallery -> Certificate)
  const allMediaItems = [
    {
      id: `${hackathon.id}-cover`,
      url: coverImage,
      title: `${title} - Cover Photo`,
      caption: description,
      type: 'cover',
    },
    ...gallery.map((g) => ({ ...g, type: 'image' })),
    ...(certificate
      ? [
          {
            id: `${hackathon.id}-cert`,
            url: certificate.url,
            title: certificate.title,
            caption: `Certificate issued by ${certificate.issuer} (${certificate.date})`,
            type: 'certificate',
          },
        ]
      : []),
  ];

  const getBadgeStyle = (type) => {
    switch (type) {
      case 'winner':
         return 'bg-slate-800/90 text-white border-slate-700';
      case 'runnerup':
          return 'bg-slate-800/90 text-white border-slate-700';
      case 'finalist':
          return 'bg-slate-800/90 text-white border-slate-700';
      default:
          return 'bg-slate-800/90 text-white border-slate-700';
    }
  };

  const visibleTech = tech.slice(0, 4);
  const extraTechCount = tech.length - 4;

  const previewGallery = gallery.slice(0, 3);
  const extraGalleryCount = gallery.length - 3;

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35 }}
      className="glass-panel group relative flex flex-col h-full overflow-hidden rounded-[22px] border border-slate-700/30 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 bg-themed/90"
    >
      {/* Cover Image Container (Fixed height: 195px with Smart non-cropped presentation) */}
      <div className="relative h-[195px] w-full overflow-hidden bg-slate-900/50">
        <SmartProjectImage
          src={optimizedCover}
          alt={`${title} Cover`}
          containerClassName="h-[195px] w-full"
          imageClassName="transition-transform duration-500 group-hover:scale-105"
        />

        {/* Top Badges: Status & Date */}
        <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between gap-2 pointer-events-none">
          <span
            className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border backdrop-blur-md shadow-md pointer-events-auto ${getBadgeStyle(
              badge.type
            )}`}
          >
            <Award className="h-3 w-3 shrink-0" />
            {badge.text}
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-200 bg-slate-950/75 backdrop-blur-md px-2 py-0.5 rounded-full border border-slate-700/60">
            <Calendar className="h-3 w-3 text-blue-400 shrink-0" />
            {period}
          </span>
        </div>

        {/* Small Certificate Indicator Chip */}
        {certificate && (
          <div className="absolute bottom-3 left-3 z-20">
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-300 bg-slate-950/80 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-amber-500/40">
              <Scroll className="h-3 w-3 text-amber-400" />1 Certificate
            </span>
          </div>
        )}
      </div>

      {/* Card Content Body */}
      <div className="flex flex-1 flex-col p-4 sm:p-4.5 space-y-3">
        {/* Title */}
        <div>
          <h2 className="text-[24px] font-bold leading-tight tracking-tight text-themed group-hover:text-blue-500 transition-colors">
            {title}
          </h2>
        </div>

        {/* Full description without truncation */}
        <p className="text-xs leading-relaxed text-themed-muted">
          {description}
        </p>

        {/* Compact Tech Tags */}
        <div className="flex flex-wrap items-center gap-1">
          {visibleTech.map((t) => (
            <span key={t} className="glass-badge text-[10px] py-0.5 px-2">
              {t}
            </span>
          ))}
          {extraTechCount > 0 && (
            <span className="glass-badge text-[10px] py-0.5 px-1.5 opacity-80">
              +{extraTechCount}
            </span>
          )}
        </div>

        {/* Small Gallery Thumbnails */}
        {gallery && gallery.length > 0 && (
          <div className="grid grid-cols-3 gap-1.5 pt-1">
            {previewGallery.map((imgItem, idx) => {
              const isLast = idx === 2 && extraGalleryCount > 0;
              return (
                <button
                  key={imgItem.id}
                  type="button"
                  onClick={() => onOpenMedia(allMediaItems, null, title)}
                  className="relative group/thumb h-12 w-full overflow-hidden rounded-lg bg-slate-950/40 border border-slate-700/30 cursor-pointer"
                >
                  <img
                    src={optimizeCloudinaryUrl(imgItem.url, { width: 250, quality: 'auto' })}
                    alt={imgItem.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover/thumb:scale-110"
                  />
                  {isLast ? (
                    <div className="absolute inset-0 bg-slate-950/80 flex items-center justify-center text-white text-[11px] font-bold">
                      +{extraGalleryCount + 1}
                    </div>
                  ) : (
                    <div className="absolute inset-0 bg-blue-900/30 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center">
                      <ExternalLink className="h-3 w-3 text-white" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Buttons Row */}
        <div className="flex items-center gap-2 border-t pt-3 mt-auto" style={{ borderColor: 'var(--glass-border)' }}>
          <button
            type="button"
            onClick={() => onOpenDetails(hackathon)}
            className="glass-btn-primary flex-1 text-xs py-2 px-3 flex items-center justify-center gap-1.5 rounded-xl font-semibold shadow-sm hover:shadow cursor-pointer"
          >
            <Info className="h-3.5 w-3.5" />
            View Details
          </button>
          <button
            type="button"
            onClick={() => onOpenMedia(allMediaItems, null, title)}
            className="glass-btn flex-1 text-xs py-2 px-3 flex items-center justify-center gap-1.5 rounded-xl font-medium cursor-pointer"
          >
            <ImageIcon className="h-3.5 w-3.5" />
            View Gallery
          </button>
        </div>
      </div>
    </motion.article>
  );
}
