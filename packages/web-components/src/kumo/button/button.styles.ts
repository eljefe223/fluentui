import { css } from '@microsoft/fast-element';
import { display, forcedColorsStylesheetBehavior } from '../../utils/index.js';
import {
  colorBrandBackground,
  colorBrandBackgroundHover,
  colorBrandBackgroundPressed,
  colorNeutralBackground1,
  colorNeutralBackground1Hover,
  colorNeutralBackground1Pressed,
  colorNeutralBackgroundDisabled,
  colorNeutralForeground1,
  colorNeutralForeground1Hover,
  colorNeutralForeground1Pressed,
  colorNeutralForeground2,
  colorNeutralForeground2BrandHover,
  colorNeutralForeground2BrandPressed,
  colorNeutralForegroundDisabled,
  colorNeutralForegroundOnBrand,
  colorNeutralStroke1,
  colorNeutralStroke1Hover,
  colorNeutralStroke1Pressed,
  colorNeutralStrokeDisabled,
  colorStrokeFocus2,
  colorTransparentBackground,
  colorTransparentBackgroundHover,
  colorTransparentBackgroundPressed,
  colorTransparentStroke,
  curveEasyEase,
  durationFaster,
  fontFamilyBase,
  fontSizeBase300,
  fontSizeBase400,
  fontWeightSemibold,
  lineHeightBase300,
  lineHeightBase400,
  shadow2,
  shadow4,
  spacingHorizontalL,
  spacingHorizontalS,
  spacingHorizontalSNudge,
  spacingVerticalS,
  spacingVerticalSNudge,
  strokeWidthThick,
  strokeWidthThin,
} from '../../theme/design-tokens.js';
import { iconOnlyState, largeState, primaryState, transparentState } from '../../styles/states/index.js';

/**
 * @internal
 */
export const baseButtonStyles = css`
  ${display('inline-flex')}

  :host {
    --rounded-border-radius: 12px;
    --icon-spacing: ${spacingHorizontalSNudge};
    position: relative;
    contain: layout style;
    vertical-align: middle;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;
    text-align: center;
    text-decoration-line: none;
    margin: 0;
    min-height: 32px;
    outline-style: none;
    background-color: ${colorNeutralBackground1};
    color: ${colorNeutralForeground1};
    border: ${strokeWidthThin} solid ${colorNeutralStroke1};
    padding: ${spacingVerticalSNudge} ${spacingHorizontalS};
    min-width: 96px;
    border-radius: var(--rounded-border-radius);
    font-size: ${fontSizeBase300};
    font-family: ${fontFamilyBase};
    font-weight: ${fontWeightSemibold};
    line-height: ${lineHeightBase300};
    transition-duration: ${durationFaster};
    transition-property: background, border, color;
    transition-timing-function: ${curveEasyEase};
    cursor: pointer;
    user-select: none;
  }

  .content {
    display: inherit;
  }

  :host(:hover) {
    background-color: ${colorNeutralBackground1Hover};
    color: ${colorNeutralForeground1Hover};
    border-color: ${colorNeutralStroke1Hover};
  }

  :host(:hover:active) {
    background-color: ${colorNeutralBackground1Pressed};
    border-color: ${colorNeutralStroke1Pressed};
    color: ${colorNeutralForeground1Pressed};
    outline-style: none;
  }

  :host(:focus-visible) {
    border-color: ${colorTransparentStroke};
    outline: ${strokeWidthThick} solid ${colorTransparentStroke};
    box-shadow: ${shadow4}, 0 0 0 2px ${colorStrokeFocus2};
  }

  @media screen and (prefers-reduced-motion: reduce) {
    transition-duration: 0.01ms;
  }

  ::slotted(svg) {
    font-size: 20px;
    height: 20px;
    width: 20px;
    fill: currentColor;
  }

  :is([slot='start'], ::slotted([slot='start'])) {
    margin-inline-end: var(--icon-spacing);
  }

  :is([slot='end'], ::slotted([slot='end'])) {
    margin-inline-start: var(--icon-spacing);
  }

  :host(${iconOnlyState}) {
    min-width: 32px;
    max-width: 32px;
  }

  :host(${largeState}) {
    min-height: 40px;
    padding: ${spacingVerticalS} ${spacingHorizontalL};
    font-size: ${fontSizeBase400};
    line-height: ${lineHeightBase400};
  }

  :host(${largeState}${iconOnlyState}) {
    min-width: 40px;
    max-width: 40px;
  }

  :host(${largeState}) ::slotted(svg) {
    font-size: 24px;
    height: 24px;
    width: 24px;
  }

  :host(${primaryState}) {
    background-color: ${colorBrandBackground};
    color: ${colorNeutralForegroundOnBrand};
    border-color: transparent;
  }

  :host(${primaryState}:hover) {
    background-color: ${colorBrandBackgroundHover};
  }

  :host(${primaryState}:is(:hover, :hover:active)) {
    border-color: transparent;
    color: ${colorNeutralForegroundOnBrand};
  }

  :host(${primaryState}:hover:active) {
    background-color: ${colorBrandBackgroundPressed};
  }

  :host(${primaryState}:focus-visible) {
    border-color: ${colorNeutralForegroundOnBrand};
    box-shadow: ${shadow2}, 0 0 0 2px ${colorStrokeFocus2};
  }

  :host(${transparentState}) {
    background-color: ${colorTransparentBackground};
    color: ${colorNeutralForeground2};
  }

  :host(${transparentState}:hover) {
    background-color: ${colorTransparentBackgroundHover};
    color: ${colorNeutralForeground2BrandHover};
  }

  :host(${transparentState}:hover:active) {
    background-color: ${colorTransparentBackgroundPressed};
    color: ${colorNeutralForeground2BrandPressed};
  }

  :host(:is(${transparentState}, ${transparentState}:is(:hover, :active))) {
    border-color: transparent;
  }
`;

/**
 * The styles for the Button component.
 *
 * @public
 */
export const styles = css`
  ${baseButtonStyles}

  :host(:is(:disabled, [disabled-focusable], [appearance]:disabled, [appearance][disabled-focusable])),
  :host(:is(:disabled, [disabled-focusable], [appearance]:disabled, [appearance][disabled-focusable]):hover),
  :host(:is(:disabled, [disabled-focusable], [appearance]:disabled, [appearance][disabled-focusable]):hover:active) {
    background-color: ${colorNeutralBackgroundDisabled};
    border-color: ${colorNeutralStrokeDisabled};
    color: ${colorNeutralForegroundDisabled};
    cursor: not-allowed;
  }

  :host(${primaryState}:is(:disabled, [disabled-focusable])),
  :host(${primaryState}:is(:disabled, [disabled-focusable]):is(:hover, :hover:active)) {
    border-color: transparent;
  }

  :host(${transparentState}:is(:disabled, [disabled-focusable])),
  :host(${transparentState}:is(:disabled, [disabled-focusable]):is(:hover, :hover:active)) {
    border-color: transparent;
    background-color: ${colorTransparentBackground};
  }
`.withBehaviors(
  forcedColorsStylesheetBehavior(css`
    :host {
      background: ButtonFace;
      color: ButtonText;
    }

    :host(:is(:hover, :focus-visible)) {
      border-color: Highlight;
    }
  `),
);
