'use client';

import React, { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==';

interface ImageWithFallbackProps extends Omit<ImageProps, 'src'> {
  src: string;
  alt: string;
}

/**
 * An image component that provides a fallback UI when the image fails to load.
 * Uses Next.js Image component with optimization when available, falls back to regular img tag for external URLs.
 */
export function ImageWithFallback({
  src,
  alt,
  className,
  ...props
}: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false);

  // Reset error state when src changes
  useEffect(() => {
    setDidError(false);
  }, [src]);

  const handleError = () => {
    setDidError(true);
  };

  if (didError) {
    return (
      <div
        className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      >
        <div className="flex items-center justify-center w-full h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={ERROR_IMG_SRC}
            alt="Error loading image"
            data-original-url={src}
          />
        </div>
      </div>
    );
  }

  // For external URLs, use regular img tag to support fallback behavior
  if (src.startsWith('http')) {
    return (
      /* eslint-disable-next-line @next/next/no-img-element */
      <img
        src={src}
        alt={alt}
        className={className}
        onError={handleError}
        {...(props as React.ImgHTMLAttributes<HTMLImageElement>)}
      />
    );
  }

  // For local images, use Next.js Image component
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      onError={handleError}
      {...props}
    />
  );
}
