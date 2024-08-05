import { BaseTextInput } from '../../text-input/text-input.js';
import { template } from '../../text-input/text-input.template.js';
import { styles } from './text-input.styles.js';

/**
 * The Kumo TextInput Element definition.
 *
 * @public
 * @remarks
 * HTML Element: `<kumo-text-input>`
 */
export const definition = BaseTextInput.compose({
  name: `kumo-text-input`,
  template,
  styles,
  shadowOptions: {
    delegatesFocus: true,
  },
});
