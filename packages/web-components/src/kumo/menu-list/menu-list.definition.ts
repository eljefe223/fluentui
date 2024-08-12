import { MenuList } from '../../menu-list/menu-list.js';
import { template } from '../../menu-list/menu-list.template.js';
import { styles } from '../../menu-list/menu-list.styles.js';

/**
 * The definition for the Kumo Menu List component.
 *
 * @public
 * @remarks
 * HTML Element: `<kumo-menu-list>`
 */
export const definition = MenuList.compose({
  name: `kumo-menu-list`,
  template,
  styles,
});
