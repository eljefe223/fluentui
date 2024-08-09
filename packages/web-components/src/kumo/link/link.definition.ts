import { Link } from '../../link/link.js';
import { template } from '../../link/link.template.js';
import { styles } from '../../link/link.styles.js';

/**
 * The definition for the Kumo Link component.
 *
 * @public
 * @remarks
 * HTML Element: `<kumo-link>`
 */
export const definition = Link.compose({
  name: `kumo-link`,
  template,
  styles,
});
