import { template } from '../../anchor-button/anchor-button.template.js';
import { styles } from '../button/button.styles.js';
import { KumoAnchorButton } from './anchor-button.js';

/**
 * @public
 * @remarks
 * HTML Element: \<kumo-anchor-button\>
 */
export const definition = KumoAnchorButton.compose({
  name: `kumo-anchor-button`,
  template,
  styles,
});
