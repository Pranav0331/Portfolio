import { useState } from 'react';

/**
 * SmartProjectImage Component
 * Displays cover images without cropping faces, certificates, badges, or text.
 * Uses object-contain with a soft blurred ambient background layer so empty bars are eliminated.
 */
export default function SmartProjectImage({
  src,
  alt = '',
  containerClassName = 'h-[195px] w-full',
  imageClassName = '',
  fitMode = 'auto', // 'auto' | 'contain' | 'cover'
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-slate-950 flex items-center justify-center ${containerClassName}`}>
      {/* Ambient Blurred Background Layer (Eliminates empty bars with matching image colors) */}
      {src && (
        <img
          src={src}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover blur-xl opacity-35 scale-110 pointer-events-none select-none"
        />
      )}

      {/* Main Image Layer (Preserves full image with object-contain & centered alignment) */}
      {src && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          className={`relative z-10 max-h-full max-w-full object-contain mx-auto my-auto transition-all duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${imageClassName}`}
        />
      )}

      {/* Subtle Ambient Vignette Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/75 via-transparent to-slate-950/20 pointer-events-none" />
    </div>
  );
}
