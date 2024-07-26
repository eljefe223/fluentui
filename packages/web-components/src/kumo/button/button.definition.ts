import { Button } from '../../button/button.js';
import { styles } from './button.styles.js';
import { template } from './button.template.js';

/**
 * @public
 * @remarks
 * HTML Element: \<kumo-button\>
 */
export const definition = Button.compose({
  name: `kumo-button`,
  template,
  styles,
});
