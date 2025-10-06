import { RotatedCard } from './rotated-card';

export interface SectionHeaderProps {
  title: string | React.ReactNode;
  subtitle?: string;
  subtitleRotation?: string;
  className?: string;
}

/**
 * Reusable section header with large title and optional rotated subtitle card.
 * Consistent styling across all major sections of the site.
 */
export function SectionHeader({ 
  title, 
  subtitle,
  subtitleRotation = 'rotate-1',
  className 
}: SectionHeaderProps) {
  return (
    <div className={`text-center mb-16 ${className || ''}`}>
      <h2 className="text-5xl md:text-7xl font-black uppercase mb-8">
        {title}
      </h2>
      {subtitle && (
        <RotatedCard 
          variant="dark" 
          rotation={subtitleRotation}
          className="inline-block border-red-500"
        >
          <p className="text-xl uppercase tracking-wide">
            {subtitle}
          </p>
        </RotatedCard>
      )}
    </div>
  );
}

