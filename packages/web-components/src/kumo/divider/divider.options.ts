import type { ValuesOf } from '../../utils/index.js';

/**
 * KumoDividerAppearance - divider color defined by a design token alias.
 * @public
 */
export const KumoDividerAppearance = {
  strong: 'strong',
  subtle: 'subtle',
  default: 'default',
} as const;

/**
 * The types for Appearance
 * @public
 */
export type KumoDividerAppearance = ValuesOf<typeof KumoDividerAppearance>;
