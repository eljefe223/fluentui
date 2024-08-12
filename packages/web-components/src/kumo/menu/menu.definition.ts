import { Menu } from '../../menu/menu.js';
import { template } from '../../menu/menu.template.js';
import { styles } from './menu.styles.js';

/**
 * The definition for the Kumo Menu component.
 *
 * @public
 * @remarks
 * HTML Element: `<kumo-menu>`
 */
export const definition = Menu.compose({
  name: `kumo-menu`,
  template,
  styles,
});
