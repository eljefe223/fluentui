import { template } from '../../progress-bar/progress-bar.template.js';
import { KumoProgressBar } from './progress-bar.js';
import { styles } from './progress-bar.styles.js';

/**
 * The Kumo ProgressBar Element.
 *
 *
 * @public
 * @remarks
 * HTML Element: \<kumo-progress-bar\>
 */
export const definition = KumoProgressBar.compose({
  name: `kumo-progress-bar`,
  template,
  styles,
});
