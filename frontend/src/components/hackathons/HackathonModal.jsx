import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Award,
  Image as ImageIcon,
  Grid,
  Maximize2,
  Calendar,
} from 'lucide-react';
import { optimizeCloudinaryUrl } from '../../data/hackathons';

export default function HackathonModal({
  isOpen,
  title = 'Hackathon Gallery',
  items = [],
  initialIndex = null,
  onClose,
}) {
  // selectedIndex === null -> Gallery Grid View
  // selectedIndex !== null -> Fullscreen Lightbox View
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  // Sync state whenever modal opens or initialIndex changes
  useEffect(() => {
    if (isOpen) {
      setSelectedIndex(initialIndex);
      setZoomLevel(1);
    } else {
      setSelectedIndex(null);
    }
  }, [isOpen, initialIndex]);

  const handleNext = useCallback(() => {
    if (items.length <= 1 || selectedIndex === null) return;
    setZoomLevel(1);
    setSelectedIndex((prev) => (prev + 1) % items.length);
  }, [items.length, selectedIndex]);

  const handlePrev = useCallback(() => {
    if (items.length <= 1 || selectedIndex === null) return;
    setZoomLevel(1);
    setSelectedIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length, selectedIndex]);

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.5, 3));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.5, 0.75));
  const handleResetZoom = () => setZoomLevel(1);

  // Global Keyboard Navigation (Escape to close, Arrow keys to navigate)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (selectedIndex !== null) {
          setSelectedIndex(null);
        } else {
          onClose();
        }
      } else if (selectedIndex !== null) {
        if (e.key === 'ArrowRight') handleNext();
        if (e.key === 'ArrowLeft') handlePrev();
        if (e.key === '+' || e.key === '=') handleZoomIn();
        if (e.key === '-') handleZoomOut();
        if (e.key === '0') handleResetZoom();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, selectedIndex, handleNext, handlePrev, onClose]);

  if (!isOpen) return null;

  const activeItem = selectedIndex !== null ? items[selectedIndex] : null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-6 overflow-y-auto"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        {/* Main Gallery Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-5xl max-h-[92vh] flex flex-col rounded-[24px] glass-panel border border-slate-700/60 shadow-2xl bg-slate-950/95 text-slate-100 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Gallery Header */}
          <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md shrink-0">
            <div className="flex items-center gap-3">
              {selectedIndex !== null ? (
                <button
                  type="button"
                  onClick={() => setSelectedIndex(null)}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-blue-400 border border-slate-700 transition-colors cursor-pointer"
                >
                  <Grid className="h-3.5 w-3.5" />
                  All Photos Grid
                </button>
              ) : (
                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <ImageIcon className="h-5 w-5" />
                </div>
              )}

              <div>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-tight">
                  {title}
                </h3>
                <p className="text-xs text-slate-400 font-medium">
                  {selectedIndex !== null
                    ? `Item ${selectedIndex + 1} of ${items.length}`
                    : `${items.length} ${items.length === 1 ? 'Photo' : 'Photos'} Total`}
                </p>
              </div>
            </div>

            {/* Right Controls: Zoom + Close Button */}
            <div className="flex items-center gap-2">
              {selectedIndex !== null && (
                <div className="hidden sm:flex items-center gap-1 rounded-full bg-slate-900 border border-slate-700/70 px-2 py-1 text-slate-300">
                  <button
                    type="button"
                    onClick={handleZoomOut}
                    disabled={zoomLevel <= 0.75}
                    className="p-1 rounded-full hover:bg-slate-800 disabled:opacity-40 transition-colors"
                    title="Zoom Out (-)"
                  >
                    <ZoomOut className="h-3.5 w-3.5" />
                  </button>
                  <span className="text-[11px] px-1 font-mono min-w-[36px] text-center">
                    {Math.round(zoomLevel * 100)}%
                  </span>
                  <button
                    type="button"
                    onClick={handleZoomIn}
                    disabled={zoomLevel >= 3}
                    className="p-1 rounded-full hover:bg-slate-800 disabled:opacity-40 transition-colors"
                    title="Zoom In (+)"
                  >
                    <ZoomIn className="h-3.5 w-3.5" />
                  </button>
                  {zoomLevel !== 1 && (
                    <button
                      type="button"
                      onClick={handleResetZoom}
                      className="p-1 rounded-full hover:bg-slate-800 transition-colors text-blue-400"
                      title="Reset Zoom (0)"
                    >
                      <RotateCcw className="h-3 w-3" />
                    </button>
                  )}
                </div>
              )}

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className="p-2.5 rounded-full bg-slate-900 border border-slate-700/80 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-600 transition-all shadow-md cursor-pointer shrink-0"
                aria-label="Close gallery"
                title="Close (Esc)"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Gallery Body */}
          <div className="relative flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-950/60">
            {selectedIndex === null ? (
              /* ================= 1. RESPONSIVE GALLERY GRID VIEW ================= */
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4"
              >
                {items.map((item, index) => {
                  const isCert = item.type === 'certificate';
                  const isCover = item.type === 'cover';
                  return (
                    <motion.button
                      key={item.id || index}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedIndex(index)}
                      className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/60 shadow-md hover:shadow-xl transition-all duration-300 text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <img
                        src={optimizeCloudinaryUrl(item.url, { width: 500, quality: 'auto' })}
                        alt={item.title || 'Gallery image'}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Type Badges */}
                      <div className="absolute top-2 left-2 pointer-events-none">
                        {isCert ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/90 text-amber-950 backdrop-blur-md shadow">
                            <Award className="h-3 w-3" /> Certificate
                          </span>
                        ) : isCover ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-500/90 text-white backdrop-blur-md shadow">
                            Cover
                          </span>
                        ) : null}
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                        <span className="text-xs font-semibold text-white truncate">
                          {item.title}
                        </span>
                        <span className="text-[11px] text-blue-400 flex items-center gap-1 mt-0.5">
                          <Maximize2 className="h-3 w-3" /> Open Fullscreen
                        </span>
                      </div>
                    </motion.button>
                  );
                })}
              </motion.div>
            ) : (
              /* ================= 2. LIGHTBOX PREVIEW VIEW ================= */
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="relative min-h-[62vh] flex flex-col items-center justify-center select-none"
              >
                {/* Previous Arrow */}
                {items.length > 1 && (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="absolute left-2 sm:left-4 z-30 p-2.5 sm:p-3 rounded-full bg-slate-900/80 border border-slate-700/80 text-white hover:bg-blue-600 hover:border-blue-500 transition-all shadow-xl backdrop-blur-md cursor-pointer"
                    title="Previous Image (Left Arrow)"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                )}

                {/* Main Image Canvas */}
                <div className="relative w-full h-full flex items-center justify-center overflow-auto p-2">
                  <img
                    src={optimizeCloudinaryUrl(activeItem.url, { width: 1600, quality: 'auto' })}
                    alt={activeItem.title || 'Full preview'}
                    loading="lazy"
                    style={{
                      transform: `scale(${zoomLevel})`,
                      transition: 'transform 0.2s ease-out',
                    }}
                    className="max-h-[66vh] max-w-[85vw] object-contain rounded-xl shadow-2xl"
                  />
                </div>

                {/* Next Arrow */}
                {items.length > 1 && (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="absolute right-2 sm:right-4 z-30 p-2.5 sm:p-3 rounded-full bg-slate-900/80 border border-slate-700/80 text-white hover:bg-blue-600 hover:border-blue-500 transition-all shadow-xl backdrop-blur-md cursor-pointer"
                    title="Next Image (Right Arrow)"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                )}
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
