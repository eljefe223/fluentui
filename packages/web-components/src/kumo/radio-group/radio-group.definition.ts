import { RadioGroup } from '../../radio-group/radio-group.js';
import { styles } from '../../radio-group/radio-group.styles.js';
import { template } from '../../radio-group/radio-group.template.js';

/**
 * The Fluent RadioGroup Element.
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-radio-group\>
 */
export const definition = RadioGroup.compose({
  name: `kumo-radio-group`,
  template,
  styles,
});
