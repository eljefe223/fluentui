import { styles } from '../button/button.styles.js';
import { template } from '../../menu-button/menu-button.template.js';
import { KumoMenuButton } from './menu-button.js';

/**
 * @public
 * @remarks
 * HTML Element: \<kumo-menu-button\>
 */
export const definition = KumoMenuButton.compose({
  name: `kumo-menu-button`,
  template,
  styles,
});
