import { Button } from '../../button/button.js';
import { template } from '../../button/button.template.js';
import { styles } from './button.styles.js';

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
