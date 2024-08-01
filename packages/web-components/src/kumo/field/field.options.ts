import type { ValuesOf } from '../../utils/typings.js';

/**
 * Label position values
 * @public
 */
export const KumoLabelPosition = {
  after: 'after',
  before: 'before',
} as const;

/** @public */
export type KumoLabelPosition = ValuesOf<typeof KumoLabelPosition>;
