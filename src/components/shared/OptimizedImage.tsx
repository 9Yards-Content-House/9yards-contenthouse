import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
  aspectRatio?: string;
}

/**
 * OptimizedImage component for performance-optimized image loading.
 * 
 * Features:
 * - Lazy loading by default (eager for priority images)
 * - Async decoding for non-priority images
 * - fetchPriority hints for LCP optimization
 * - Explicit dimensions to prevent CLS
 * - Responsive sizes attribute for proper srcset selection
 * 
 * Usage:
 * <OptimizedImage 
 *   src="/images/hero.jpg" 
 *   alt="Description" 
 *   priority  // for above-the-fold images
 * />
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  aspectRatio,
}: OptimizedImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : "auto"}
      sizes={sizes}
      className={cn(aspectRatio && `aspect-[${aspectRatio}]`, className)}
    />
  );
}

/**
 * HeroImage component specifically for above-the-fold hero sections.
 * Always uses eager loading and high fetch priority for LCP optimization.
 */
export function HeroImage({
  src,
  alt,
  className,
  sizes = "100vw",
}: Omit<OptimizedImageProps, "priority" | "width" | "height">) {
  return (
    <img
      src={src}
      alt={alt}
      loading="eager"
      decoding="sync"
      fetchPriority="high"
      sizes={sizes}
      className={className}
    />
  );
}

export default OptimizedImage;
