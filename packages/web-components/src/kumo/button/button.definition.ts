import { template } from '../../button/button.template.js';
import { KumoButton } from './button.js';
import { styles } from './button.styles.js';

/**
 * @public
 * @remarks
 * HTML Element: \<kumo-button\>
 */
export const definition = KumoButton.compose({
  name: `kumo-button`,
  template,
  styles,
});
