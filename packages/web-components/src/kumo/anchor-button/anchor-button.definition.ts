import { AnchorButton } from './anchor-button.js';
import { styles } from './anchor-button.styles.js';
import { template } from './anchor-button.template.js';

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
