import { Dialog } from '../../dialog/dialog.js';
import { template } from '../../dialog/dialog.template.js';
import { styles } from './dialog.styles.js';

/**
 * The Kumo Dialog Element
 *
 * @public
 * @remarks
 * HTML Element: \<kumo-dialog\>
 */
export const definition = Dialog.compose({
  name: `kumo-dialog`,
  template,
  styles,
});
