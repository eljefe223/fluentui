import { BaseDivider } from '../../divider/divider.js';
import { template } from '../../divider/divider.template.js';
import { styles } from './divider.styles.js';

/**
 * The Kumo Divider Element definition.
 *
 * @public
 * @remarks
 * HTML Element: `<kumo-divider>`
 */
export const definition = BaseDivider.compose({
  name: `kumo-divider`,
  template,
  styles,
});
