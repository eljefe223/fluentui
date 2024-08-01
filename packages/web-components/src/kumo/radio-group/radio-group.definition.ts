import { RadioGroup } from '../../radio-group/radio-group.js';
import { styles } from '../../radio-group/radio-group.styles.js';
import { template } from '../../radio-group/radio-group.template.js';

/**
 * The Kumo RadioGroup Element.
 *
 *
 * @public
 * @remarks
 * HTML Element: \<kumo-radio-group\>
 */
export const definition = RadioGroup.compose({
  name: `kumo-radio-group`,
  template,
  styles,
});
