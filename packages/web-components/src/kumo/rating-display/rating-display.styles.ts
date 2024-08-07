import { css } from '@microsoft/fast-element';
import { display, forcedColorsStylesheetBehavior } from '../../utils/index.js';
import {
  colorNeutralForeground1,
  colorPaletteMarigoldBackground2,
  colorPaletteMarigoldBackground3,
  fontFamilyBase,
  fontSizeBase200,
  fontWeightSemibold,
  lineHeightBase200,
  spacingHorizontalXS,
  spacingHorizontalXXS,
} from '../../theme/design-tokens.js';

/**
 * The styles for the Rating Display component.
 *
 * @public
 */
export const styles = css`
  ${display('inline-flex')}

  :host {
    --icon-size: 16px;
    align-items: center;
    color: ${colorNeutralForeground1};
    font-family: ${fontFamilyBase};
    font-size: ${fontSizeBase200};
    line-height: ${lineHeightBase200};
    contain: layout style;
    user-select: none;
  }

  svg {
    width: var(--icon-size);
    height: var(--icon-size);
    fill: ${colorPaletteMarigoldBackground3};
    margin-inline-end: ${spacingHorizontalXXS};
  }

  svg:nth-child(even) {
    clip-path: inset(0 50% 0 0);
    margin-inline-end: calc(0px - var(--icon-size));
  }

  :host(:is([value^='-'], [value='0'])) svg,
  :host(:not([value])) svg,
  svg[selected] ~ svg {
    fill: ${colorPaletteMarigoldBackground2};
  }

  .value-label,
  ::slotted([slot='value']) {
    display: block;
    margin-inline-start: ${spacingHorizontalXS};
    font-weight: ${fontWeightSemibold};
  }

  :host(:not([count])) .count-label {
    display: none;
  }

  .count-label::before,
  ::slotted([slot='count'])::before {
    content: '·';
    margin-inline: ${spacingHorizontalXS};
  }
`.withBehaviors(
  forcedColorsStylesheetBehavior(css`
    :host([color]) svg {
      fill: CanvasText;
    }

    :host([color]:is([value^='-'], [value='0'])) svg,
    :host(:not([value])) svg,
    :host([color]) svg[selected] ~ svg {
      fill: Canvas;
      stroke: CanvasText;
    }
  `),
);
