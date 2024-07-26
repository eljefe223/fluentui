import { attr } from '@microsoft/fast-element';
import { StartEnd } from '../../patterns/index.js';
import type { StartEndOptions } from '../../patterns/index.js';
import { applyMixins } from '../../utils/apply-mixins.js';
import { toggleState } from '../../utils/element-internals.js';
import { BaseAnchor } from '../../anchor-button/anchor-button.js';
import {
  type ButtonAppearance as AnchorButtonAppearance,
  type ButtonSize as AnchorButtonSize,
} from '../button/button.options.js';

/**
 * Anchor configuration options
 * @public
 */
export type AnchorOptions = StartEndOptions<KumoAnchorButton>;

/**
 * An Anchor Custom HTML Element.
 * Based on BaseAnchor and includes style and layout specific attributes
 *
 * @public
 */
export class KumoAnchorButton extends BaseAnchor {
  /**
   * The appearance the anchor button should have.
   *
   * @public
   * @remarks
   * HTML Attribute: `appearance`
   */
  @attr
  public appearance?: AnchorButtonAppearance | undefined;

  /**
   * Handles changes to appearance attribute custom states
   * @param prev - the previous state
   * @param next - the next state
   */
  public appearanceChanged(prev: AnchorButtonAppearance | undefined, next: AnchorButtonAppearance | undefined) {
    if (prev) {
      toggleState(this.elementInternals, `${prev}`, false);
    }
    if (next) {
      toggleState(this.elementInternals, `${next}`, true);
    }
  }

  /**
   * The size the anchor button should have.
   *
   * @public
   * @remarks
   * HTML Attribute: `size`
   */
  @attr
  public size?: AnchorButtonSize;

  /**
   * Handles changes to size attribute custom states
   * @param prev - the previous state
   * @param next - the next state
   */
  public sizeChanged(prev: AnchorButtonSize | undefined, next: AnchorButtonSize | undefined) {
    if (prev) {
      toggleState(this.elementInternals, `${prev}`, false);
    }
    if (next) {
      toggleState(this.elementInternals, `${next}`, true);
    }
  }

  /**
   * The anchor button has an icon only, no text content
   *
   * @public
   * @remarks
   * HTML Attribute: `icon-only`
   */
  @attr({ attribute: 'icon-only', mode: 'boolean' })
  public iconOnly: boolean = false;

  /**
   * Handles changes to icon only custom states
   * @param prev - the previous state
   * @param next - the next state
   */
  public iconOnlyChanged(prev: boolean, next: boolean) {
    toggleState(this.elementInternals, 'icon', !!next);
  }
}

/**
 * Mark internal because exporting class and interface of the same name
 * confuses API documenter.
 * TODO: https://github.com/microsoft/fast/issues/3317
 * @internal
 */
/* eslint-disable-next-line @typescript-eslint/no-empty-interface */
export interface KumoAnchorButton extends StartEnd {}
applyMixins(KumoAnchorButton, StartEnd);
