import { cn } from '@/app/lib/utils';

export interface StatCardProps {
  value: string;
  label: string;
  rotation?: string;
  variant?: 'dark' | 'light' | 'red';
  className?: string;
}

// Move variant styles outside component to prevent recreation
const VARIANT_STYLES = {
  dark: 'bg-black text-white border-white',
  light: 'bg-white text-black border-black',
  red: 'bg-red-500 text-white border-white',
} as const;

/**
 * Reusable stat card component with neo-brutalist styling.
 * Used throughout the site to display statistics and metrics.
 */
export function StatCard({ 
  value, 
  label, 
  rotation = '', 
  variant = 'dark',
  className 
}: StatCardProps) {

  return (
    <div 
      className={cn(
        'p-8 border-4 text-center transform',
        VARIANT_STYLES[variant],
        rotation,
        className
      )}
    >
      <div className="text-3xl md:text-4xl font-black mb-2">{value}</div>
      <div className="uppercase tracking-wide text-sm md:text-base">{label}</div>
    </div>
  );
}
