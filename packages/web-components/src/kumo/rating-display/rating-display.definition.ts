import { BaseRatingDisplay } from '../../rating-display/rating-display.js';
import { template } from '../../rating-display/rating-display.template.js';
import { styles } from './rating-display.styles.js';

/**
 * The definition for the Kumo Rating Display component.
 *
 * @public
 * @remarks
 * HTML Element: `<kumo-rating-display>`
 */
export const definition = BaseRatingDisplay.compose({
  name: `kumo-rating-display`,
  template,
  styles,
});
