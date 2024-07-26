import { styles } from '../button/button.styles.js';
import { MenuButton } from './menu-button.js';
import { template } from './menu-button.template.js';

/**
 * @public
 * @remarks
 * HTML Element: \<kumo-menu-button\>
 */
export const definition = MenuButton.compose({
  name: `kumo-menu-button`,
  template,
  styles,
});
