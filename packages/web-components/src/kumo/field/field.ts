import { attr } from '@microsoft/fast-element';
import { BaseField } from '../../field/field.js';
import { KumoLabelPosition } from './field.options.js';

/**
 * A Field Custom HTML Element.
 * Based on BaseField and includes style and layout specific attributes
 *
 * @public
 */
export class KumoField extends BaseField {
  /**
   * The position of the label relative to the input.
   *
   * @public
   * @remarks
   * HTML Attribute: `label-position`
   */
  @attr({ attribute: 'label-position' })
  public labelPosition: KumoLabelPosition = KumoLabelPosition.after;
}
