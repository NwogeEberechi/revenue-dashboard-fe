/**
 * UI Constants
 *
 * Centralized constants for UI dimensions, spacing, and other magic numbers.
 * This prevents hardcoded values scattered throughout components.
 */

export const UI_CONSTANTS = {
  /**
   * Spacing values
   */
  spacing: {
    headerHeight: 24,
    sidebarLeft: 4,
    pageTopMargin: 16,
  },

  /**
   * Component sizes
   */
  sizes: {
    avatarSmall: '32px',
    avatarMedium: '48px',
    iconBox: '48px',
    inputHeight: '48px',
    buttonMaxWidth: 150,
  },

  /**
   * Border radius values
   */
  radii: {
    small: '8px',
    medium: '12px',
    large: '16px',
    full: '9999px',
  },

  /**
   * Animation durations (in ms)
   */
  animation: {
    fast: 150,
    normal: 200,
    slow: 300,
  },

  /**
   * Z-index layers
   */
  zIndex: {
    base: 0,
    dropdown: 1000,
    sticky: 1100,
    fixed: 1200,
    modalBackdrop: 1300,
    modal: 1400,
    popover: 1500,
    tooltip: 1600,
  },
} as const
