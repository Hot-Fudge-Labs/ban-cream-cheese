import { cn } from '@/app/lib/utils';
import { ButtonHTMLAttributes } from 'react';

export interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

/**
 * Reusable call-to-action button with neo-brutalist styling.
 * Features hover effects, bold borders, and uppercase text.
 */
export function CTAButton({ 
  variant = 'primary', 
  size = 'md',
  className,
  children,
  ...props 
}: CTAButtonProps) {
  const variantStyles = {
    primary: 'bg-red-500 hover:bg-red-600 text-white border-white',
    secondary: 'bg-white hover:bg-gray-100 text-black border-black',
  };

  const sizeStyles = {
    sm: 'px-6 py-3 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-12 py-6 text-lg',
  };

  return (
    <button
      className={cn(
        'border-4 uppercase tracking-widest transform hover:scale-105 transition-transform duration-200 font-medium focus:outline-none focus:ring-4 focus:ring-offset-4',
        variantStyles[variant],
        variant === 'primary' ? 'focus:ring-white focus:ring-offset-red-500' : 'focus:ring-black focus:ring-offset-white',
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

