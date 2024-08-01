import { KumoField } from './field.js';
import { styles } from './field.styles.js';
import { template } from './field.template.js';

/**
 * The Kumo Field Element
 *
 * @public
 * @remarks
 * HTML Element: `<kumo-field>`
 */
export const definition = KumoField.compose({
  name: `kumo-field`,
  template,
  styles,
  shadowOptions: {
    delegatesFocus: true,
  },
});
