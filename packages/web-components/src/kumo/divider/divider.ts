import { attr } from '@microsoft/fast-element';
import { BaseDivider } from '../../divider/divider.js';
import { toggleState } from '../../utils/element-internals.js';
import { KumoDividerAppearance } from './divider.options.js';

/**
 * A Divider Custom HTML Element.
 * Based on BaseDivider and includes style and layout specific attributes
 *
 * @public
 */
export class KumoDivider extends BaseDivider {
  /**
   * @public
   * @remarks
   * A divider can have one of the preset appearances. Select from strong, brand, subtle. When not specified, the divider has its default appearance.
   */
  @attr
  public appearance?: KumoDividerAppearance;

  /**
   * Handles changes to appearance attribute custom states
   * @param prev - the previous state
   * @param next - the next state
   */
  public appearanceChanged(prev: KumoDividerAppearance | undefined, next: KumoDividerAppearance | undefined) {
    if (prev) {
      toggleState(this.elementInternals, `${prev}`, false);
    }
    if (next) {
      toggleState(this.elementInternals, `${next}`, true);
    }
  }

  /**
   * @public
   * @remarks
   * Adds padding to the beginning and end of the divider.
   */
  @attr({ mode: 'boolean' })
  public inset?: boolean = false;

  /**
   * Handles changes to inset custom states
   * @param prev - the previous state
   * @param next - the next state
   */
  public insetChanged(prev: boolean, next: boolean) {
    toggleState(this.elementInternals, 'inset', next);
  }
}
