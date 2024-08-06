import { Spinner } from '../../spinner/spinner.js';
import { template } from '../../spinner/spinner.template.js';
import { styles } from './spinner.styles.js';

/**
 * The Kumo Spinner Element definition.
 *
 * @public
 * @remarks
 * HTML Element: `<kumo-spinner>`
 */
export const definition = Spinner.compose({
  name: `kumo-spinner`,
  template,
  styles,
});
