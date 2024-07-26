import { AnchorButton } from '../../anchor-button/anchor-button.js';
import { template } from '../../anchor-button/anchor-button.template.js';
import { styles } from '../button/button.styles.js';

/**
 * @public
 * @remarks
 * HTML Element: \<kumo-anchor-button\>
 */
export const definition = AnchorButton.compose({
  name: `kumo-anchor-button`,
  template,
  styles,
});
