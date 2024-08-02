import { attr } from '@microsoft/fast-element';
import { toggleState } from '../../utils/element-internals.js';
import { BaseProgressBar } from '../../progress-bar/progress-bar.js';
import type { ProgressBarThickness } from '../../progress-bar/progress-bar.options.js';

/**
 * The base class used for constructing a progress-bar custom element
 * @public
 */
export class KumoProgressBar extends BaseProgressBar {
  /**
   * The thickness of the progress bar
   *
   * @public
   * HTML Attribute: `thickness`
   */
  @attr
  public thickness?: ProgressBarThickness;

  /**
   * Handles changes to thickness attribute custom states
   * @param prev - the previous state
   * @param next - the next state
   */
  public thicknessChanged(prev: ProgressBarThickness | undefined, next: ProgressBarThickness | undefined) {
    if (prev) {
      toggleState(this.elementInternals, `${prev}`, false);
    }
    if (next) {
      toggleState(this.elementInternals, `${next}`, true);
    }
  }
}
