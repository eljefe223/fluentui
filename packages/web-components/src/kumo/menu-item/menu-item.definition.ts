import { MenuItem } from '../../menu-item/menu-item.js';
import { template } from '../../menu-item/menu-item.template.js';
import { styles } from '../../menu-item/menu-item.styles.js';

/**
 * The definition for the Kumo Rating Display component.
 *
 * @public
 * @remarks
 * HTML Element: `<kumo-menu-item>`
 */
export const definition = MenuItem.compose({
  name: `kumo-menu-item`,
  template,
  styles,
});
