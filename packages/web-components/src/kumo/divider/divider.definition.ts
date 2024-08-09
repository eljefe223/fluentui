import { template } from '../../divider/divider.template.js';
import { KumoDivider } from './divider.js';
import { styles } from './divider.styles.js';

/**
 * The Kumo Divider Element definition.
 *
 * @public
 * @remarks
 * HTML Element: `<kumo-divider>`
 */
export const definition = KumoDivider.compose({
  name: `kumo-divider`,
  template,
  styles,
});
