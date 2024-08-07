import { template } from '../../tablist/tablist.template.js';
import { BaseTablist as KumoTablist } from '../../tablist/tablist.js';
import { styles } from './tablist.styles.js';

/**
 * The Kumo Tablist Element definition.
 *
 * @public
 * @remarks
 * HTML Element: `<kumo-tablist>`
 */
export const definition = KumoTablist.compose({
  name: `kumo-tablist`,
  template,
  styles,
});
