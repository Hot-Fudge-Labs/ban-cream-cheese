/**
 * Shared type definitions for UI components
 */

/**
 * Common variant types for components
 */
export type Variant = 'dark' | 'light' | 'red';

/**
 * Border color options
 */
export type BorderColor = 'white' | 'black' | 'red';

/**
 * Button variant types
 */
export type ButtonVariant = 'primary' | 'secondary';

/**
 * Size options for components
 */
export type Size = 'sm' | 'md' | 'lg';

/**
 * Rotation classes for neo-brutalist design
 */
export type Rotation = '-rotate-2' | '-rotate-1' | '' | 'rotate-1' | 'rotate-2';

/**
 * Common props for components with variants
 */
export interface VariantProps {
  variant?: Variant;
  className?: string;
}

/**
 * Common props for rotatable components
 */
export interface RotatableProps {
  rotation?: string;
}

