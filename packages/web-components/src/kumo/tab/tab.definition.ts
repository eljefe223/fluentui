import { Tab } from '../../tab/tab.js';
import { template } from '../../tab/tab.template.js';
import { styles } from '../../tab/tab.styles.js';

/**
 * The Kumo Tab element definition.
 *
 * @public
 * @remarks
 * HTML Element: `<kumo-tab>`
 */
export const definition = Tab.compose({
  name: `kumo-tab`,
  template,
  styles,
});
