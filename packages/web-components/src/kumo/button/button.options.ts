import type { ValuesOf } from '../../utils/index.js';

/**
 * KumoButtonAppearance constants
 * @public
 */
export const KumoButtonAppearance = {
  primary: 'primary',
  transparent: 'transparent',
} as const;

/**
 * A KumoButton can be secondary, primary, outline, subtle, transparent
 * @public
 */
export type KumoButtonAppearance = ValuesOf<typeof KumoButtonAppearance>;

/**
 * A KumoButton can be a size of small, medium or large.
 * @public
 */
export const KumoButtonSize = {
  medium: 'medium',
  large: 'large',
} as const;

/**
 * A KumoButton can be on of several preset sizes.
 * @public
 */
export type KumoButtonSize = ValuesOf<typeof KumoButtonSize>;
