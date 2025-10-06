# Components

This directory contains all React components for the Sushi Truth website.

## Structure

```
components/
├── layout/          # Layout components (navigation, headers, footers)
├── sections/        # Page section components
└── ui/              # Reusable UI components
```

## Layout Components

- **Navigation**: Fixed navigation bar with smooth scrolling to sections

## Section Components

- **HeroSection**: Main hero section with headline and stats
- **EvidenceSection**: Side-by-side comparison of traditional vs. cream cheese sushi
- **ChefTestimony**: Chef quotes and statistics
- **FooterSection**: Footer with mission, contact, and resources

## UI Components

- **ImageWithFallback**: Image component with fallback UI for failed loads

## Design System

This project uses a neo-brutalist design system with:
- Bold, heavy typography (Inter font, weights 400-900)
- High contrast black, white, and red color palette
- Thick borders (2px, 4px, 8px)
- Rotated elements for visual interest
- Box shadows for depth
- Uppercase text for emphasis

## TypeScript

All components are fully typed with TypeScript for type safety and better developer experience.
