import { cn } from '@/app/lib/utils';
import { ReactNode } from 'react';

export interface RotatedCardProps {
  children: ReactNode;
  rotation?: string;
  variant?: 'dark' | 'light' | 'red';
  borderColor?: 'white' | 'black' | 'red';
  className?: string;
}

// Move styles outside component to prevent recreation
const VARIANT_STYLES = {
  dark: 'bg-black text-white',
  light: 'bg-white text-black',
  red: 'bg-red-500 text-white',
} as const;

const BORDER_STYLES = {
  white: 'border-white',
  black: 'border-black',
  red: 'border-red-500',
} as const;

/**
 * Reusable card component with rotation transform and neo-brutalist borders.
 * Used for callouts, quotes, and highlighted content throughout the site.
 */
export function RotatedCard({ 
  children, 
  rotation = '', 
  variant = 'dark',
  borderColor,
  className 
}: RotatedCardProps) {

  // Auto-determine border color based on variant if not specified
  const defaultBorder = variant === 'dark' ? 'white' : 
                       variant === 'red' ? 'white' : 'black';
  const border = borderColor || defaultBorder;

  return (
    <div 
      className={cn(
        'p-6 border-4 transform',
        VARIANT_STYLES[variant],
        BORDER_STYLES[border],
        rotation,
        className
      )}
    >
      {children}
    </div>
  );
}

