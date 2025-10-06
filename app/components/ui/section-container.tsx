import { ReactNode } from 'react';
import { cn } from '@/app/lib/utils';

export interface SectionContainerProps {
  children: ReactNode;
  as?: 'section' | 'footer' | 'div';
  className?: string;
  maxWidth?: '4xl' | '6xl';
}

/**
 * Reusable section container that provides consistent layout structure.
 * Handles responsive padding and max-width constraints.
 */
export function SectionContainer({ 
  children, 
  as: Component = 'section',
  className,
  maxWidth = '6xl'
}: SectionContainerProps) {
  const maxWidthClass = maxWidth === '4xl' ? 'max-w-4xl' : 'max-w-6xl';

  return (
    <Component className={className}>
      <div className="container mx-auto px-4">
        <div className={cn(maxWidthClass, 'mx-auto')}>
          {children}
        </div>
      </div>
    </Component>
  );
}

