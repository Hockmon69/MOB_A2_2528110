export const theme = {
  colors: {
    primary: '#0284C7',        // Sky 600 - WCAG AA compliant on white
    primaryDark: '#0369A1',    // Sky 700
    primaryLight: '#E0F2FE',   // Sky 100
    accent: '#6366F1',         // Indigo 500
    accentLight: '#EEF2FF',    // Indigo 50
    background: '#F8FAFC',     // Slate 50
    card: '#FFFFFF',
    surface: '#F1F5F9',        // Slate 100
    textPrimary: '#0F172A',    // Slate 900 - High contrast ratio > 12:1
    textSecondary: '#475569',  // Slate 600 - Contrast ratio > 5:1
    textMuted: '#64748B',      // Slate 500
    border: '#CBD5E1',         // Slate 300
    borderLight: '#E2E8F0',    // Slate 200
    success: '#059669',        // Emerald 600
    successLight: '#D1FAE5',
    warning: '#D97706',        // Amber 600
    warningLight: '#FEF3C7',
    danger: '#DC2626',         // Red 600
    dangerLight: '#FEE2E2',
    white: '#FFFFFF',
    darkNavy: '#0F172A',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
    xxxl: 32,
  },
  borderRadius: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    full: 9999,
  },
  typography: {
    h1: {
      fontSize: 26,
      lineHeight: 34,
      fontWeight: '700' as const,
    },
    h2: {
      fontSize: 20,
      lineHeight: 28,
      fontWeight: '700' as const,
    },
    h3: {
      fontSize: 17,
      lineHeight: 24,
      fontWeight: '600' as const,
    },
    body: {
      fontSize: 15,
      lineHeight: 22,
      fontWeight: '400' as const,
    },
    bodyBold: {
      fontSize: 15,
      lineHeight: 22,
      fontWeight: '600' as const,
    },
    caption: {
      fontSize: 13,
      lineHeight: 18,
      fontWeight: '400' as const,
    },
    captionBold: {
      fontSize: 13,
      lineHeight: 18,
      fontWeight: '600' as const,
    },
    code: {
      fontSize: 13,
      lineHeight: 18,
      fontFamily: 'monospace',
    },
  },
  shadows: {
    sm: {
      shadowColor: '#0F172A',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 2,
    },
    md: {
      shadowColor: '#0F172A',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 4,
      elevation: 3,
    },
  },
};
