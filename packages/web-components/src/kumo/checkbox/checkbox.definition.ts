import { KumoCheckbox } from './checkbox.js';
import { styles } from './checkbox.styles.js';
import { template } from './checkbox.template.js';

/**
 * The Kumo Checkbox Element
 *
 * @public
 * @remarks
 * HTML Element: \<kumo-checkbox\>
 */
export const definition = KumoCheckbox.compose({
  name: `kumo-checkbox`,
  template,
  styles,
});
