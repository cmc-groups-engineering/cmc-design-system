/**
 * CMC Group Design System - Design Tokens (JavaScript Module)
 * Generated from design mockups
 *
 * Usage: Import tokens into your JavaScript/TypeScript projects
 * import { colors, typography, spacing } from './tokens.js';
 */

export const colors = {
  brand: {
    primary: '#0891B2',
    primaryLight: '#22D3EE',
    primaryDark: '#0E7490',
    secondary: '#DC2626',
    secondaryLight: '#EF4444',
    tertiary: '#2563EB',
  },
  background: {
    base: '#000000',
    elevated: '#0A0A0A',
    surface: '#111111',
    surfaceAlt: '#1A1A1A',
    card: '#111827',
    cardHover: '#1F2937',
    input: '#1F2937',
    white: '#FFFFFF',
    light: '#F9FAFB',
    tealBanner: '#0E7490',
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#D1D5DB',
    muted: '#9CA3AF',
    subtle: '#6B7280',
    dark: '#111827',
    darkSecondary: '#374151',
    accent: '#22D3EE',
    link: '#0891B2',
  },
  border: {
    default: '#1F2937',
    subtle: '#374151',
    accent: '#0891B2',
    light: '#E5E7EB',
    input: '#374151',
  },
  gradient: {
    heroOverlay: 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.8) 100%)',
    tealGlow: 'linear-gradient(135deg, #0891B2 0%, #22D3EE 100%)',
    cardBorder: 'linear-gradient(180deg, #0891B2 0%, transparent 100%)',
    darkFade: 'linear-gradient(180deg, #000000 0%, #111111 100%)',
  },
};

export const typography = {
  fontFamily: {
    heading: "'Inter', 'Helvetica Neue', Arial, sans-serif",
    body: "'Inter', 'Helvetica Neue', Arial, sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', monospace",
  },
  fontSize: {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px
    base: '1rem',      // 16px
    lg: '1.125rem',    // 18px
    xl: '1.25rem',     // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
    '7xl': '4.5rem',   // 72px
    '8xl': '6rem',     // 96px
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeight: {
    tight: 1.1,
    snug: 1.25,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
};

export const spacing = {
  0: '0px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
  16: '64px',
  20: '80px',
  24: '96px',
  32: '128px',
};

export const borderRadius = {
  none: '0px',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  '2xl': '24px',
  full: '9999px',
};

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
  glowTeal: '0 0 20px rgba(8, 145, 178, 0.3)',
  glowTealLg: '0 0 40px rgba(8, 145, 178, 0.2)',
  card: '0 4px 20px rgba(0, 0, 0, 0.3)',
  cardHover: '0 8px 30px rgba(0, 0, 0, 0.4)',
};

export const animation = {
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
    slower: '700ms',
  },
  easing: {
    default: 'cubic-bezier(0.4, 0, 0.2, 1)',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

export const container = {
  maxWidth: '1280px',
  padding: '24px',
};

/** Tailwind CSS config extension for CMC Design System */
export const tailwindConfig = {
  theme: {
    extend: {
      colors: {
        'cmc-primary': colors.brand.primary,
        'cmc-primary-light': colors.brand.primaryLight,
        'cmc-primary-dark': colors.brand.primaryDark,
        'cmc-secondary': colors.brand.secondary,
        'cmc-secondary-light': colors.brand.secondaryLight,
        'cmc-tertiary': colors.brand.tertiary,
        'cmc-bg-base': colors.background.base,
        'cmc-bg-elevated': colors.background.elevated,
        'cmc-bg-surface': colors.background.surface,
        'cmc-bg-surface-alt': colors.background.surfaceAlt,
        'cmc-bg-card': colors.background.card,
        'cmc-bg-card-hover': colors.background.cardHover,
        'cmc-text-primary': colors.text.primary,
        'cmc-text-secondary': colors.text.secondary,
        'cmc-text-muted': colors.text.muted,
        'cmc-text-subtle': colors.text.subtle,
      },
      fontFamily: {
        heading: typography.fontFamily.heading.split(',').map(f => f.trim().replace(/'/g, '')),
        body: typography.fontFamily.body.split(',').map(f => f.trim().replace(/'/g, '')),
      },
      boxShadow: {
        'glow-teal': shadows.glowTeal,
        'glow-teal-lg': shadows.glowTealLg,
        'card': shadows.card,
        'card-hover': shadows.cardHover,
      },
    },
  },
};

// Default export with all tokens
export default {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  animation,
  breakpoints,
  container,
  tailwindConfig,
};
