import { css } from '@microsoft/fast-element';
import { display, forcedColorsStylesheetBehavior } from '@microsoft/fast-foundation/utilities.js';
import {
  borderRadiusCircular,
  borderRadiusLarge,
  borderRadiusMedium,
  borderRadiusNone,
  borderRadiusSmall,
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
  colorSubtleBackground,
  colorSubtleBackgroundHover,
  colorSubtleBackgroundPressed,
  colorTransparentBackground,
  colorTransparentBackgroundHover,
  colorTransparentBackgroundPressed,
  colorTransparentStroke,
  curveEasyEase,
  durationFaster,
  fontFamilyBase,
  fontSizeBase200,
  fontSizeBase300,
  fontSizeBase400,
  fontWeightRegular,
  fontWeightSemibold,
  lineHeightBase200,
  lineHeightBase300,
  lineHeightBase400,
  shadow2,
  shadow4,
  spacingHorizontalL,
  spacingHorizontalM,
  spacingHorizontalS,
  spacingHorizontalSNudge,
  spacingHorizontalXS,
  strokeWidthThick,
  strokeWidthThin,
} from '../theme/design-tokens.js';
import {
  colorControlButtonAccentFillHover,
  colorControlButtonAccentFillPressed,
  colorControlButtonAccentFillRest,
  colorControlButtonAccentForegroundHover,
  colorControlButtonAccentForegroundPressed,
  colorControlButtonAccentForegroundRest,
  colorControlButtonDefaultFillHover,
  colorControlButtonDefaultFillPressed,
  colorControlButtonDefaultFillRest,
  colorControlButtonDefaultStrokeHover,
  colorControlButtonDefaultStrokePressed,
  colorControlButtonDefaultStrokeRest,
  colorControlButtonOutlineFillRest,
  colorControlButtonOutlineStrokeHover,
  colorControlButtonOutlineStrokePressed,
  colorControlButtonOutlineStrokeRest,
  colorControlButtonSubtleFillDisabled,
  colorControlButtonSubtleFillHover,
  colorControlButtonSubtleFillPressed,
  colorControlButtonSubtleFillRest,
  colorControlFocusStrokeInner,
  colorControlFocusStrokeOuter,
  colorControlForegroundLabelOnPageLightUpHover,
  colorControlForegroundLabelOnPageLightUpPressed,
  colorControlForegroundLabelOnPageLightUpRest,
  colorControlForegroundTextOnPlatePrimaryHover,
  colorControlForegroundTextOnPlatePrimaryPressed,
  colorControlForegroundTextOnPlatePrimaryRest,
  colorControlLinkAccentForegroundRest,
  controlHeight,
  layoutControlGapIconToText,
  layoutControlPaddingHorizontal,
  layoutControlStrokeDefaultRest,
  layoutControlTextMarginBottom,
  layoutControlTextMarginTop,
  layoutCornerControlDefaultHover,
  layoutCornerControlDefaultPressed,
  layoutCornerControlDefaultRest,
} from '../theme/design-tokens-new.js';

// Need to support icon hover styles
export const styles = css`
  ${display('inline-flex')}

  :host {
    --icon-spacing: var(${layoutControlGapIconToText}, var(${spacingHorizontalSNudge}));
    contain: layout style;
    vertical-align: middle;
  }

  :host .control {
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;
    text-decoration-line: none;
    margin: 0;
    min-height: var(${controlHeight}, 32px);
    outline-style: none;
    background-color: var(${colorControlButtonDefaultFillRest}, var(${colorNeutralBackground1}));
    color: var(${colorControlForegroundTextOnPlatePrimaryRest}, var(${colorNeutralForeground1}));
    border: var(${layoutControlStrokeDefaultRest}, var(${strokeWidthThin})) solid
      var(${colorControlButtonDefaultStrokeRest}, var(${colorNeutralStroke1}));
    padding: 0 var(${layoutControlPaddingHorizontal}, var(${spacingHorizontalM}));
    min-width: 96px;
    border-radius: var(${layoutCornerControlDefaultRest}, var(${borderRadiusMedium}));
    font-size: var(${fontSizeBase300});
    font-family: var(${fontFamilyBase});
    font-weight: var(${fontWeightSemibold});
    line-height: var(${lineHeightBase300});
    transition-duration: var(${durationFaster});
    transition-property: background, border, color;
    transition-timing-function: var(${curveEasyEase});
    cursor: pointer;
  }

  .content {
    display: inherit;
    margin-top: var(${layoutControlTextMarginTop}, 0);
    margin-bottom: var(${layoutControlTextMarginBottom}, 0);
  }

  :host(:hover) .control {
    background-color: var(${colorControlButtonDefaultFillHover}, var(${colorNeutralBackground1Hover}));
    color: var(${colorControlForegroundTextOnPlatePrimaryHover}, var(${colorNeutralForeground1Hover}));
    border-color: var(${colorControlButtonDefaultStrokeHover}, var(${colorNeutralStroke1Hover}));
    border-radius: var(${layoutCornerControlDefaultHover}, var(${borderRadiusMedium}));
  }

  :host(:hover:active) .control {
    background-color: var(${colorControlButtonDefaultFillPressed}, var(${colorNeutralBackground1Pressed}));
    border-color: var(${colorControlButtonDefaultStrokePressed}, var(${colorNeutralStroke1Pressed}));
    color: var(${colorControlForegroundTextOnPlatePrimaryPressed}, var(${colorNeutralForeground1Pressed}));
    border-radius: var(${layoutCornerControlDefaultPressed}, var(${borderRadiusMedium}));
    outline-style: none;
  }

  :host .control:focus-visible {
    border-color: var(${colorControlFocusStrokeInner}, var(${colorTransparentStroke}));
    outline: var(${strokeWidthThick}) solid var(${colorControlFocusStrokeInner}, var(${colorTransparentStroke}));
    box-shadow: var(${shadow4}), 0 0 0 2px var(${colorControlFocusStrokeOuter}, var(${colorStrokeFocus2}));
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

  [slot='start'],
  ::slotted([slot='start']) {
    margin-inline-end: var(--icon-spacing);
  }

  [slot='end'],
  ::slotted([slot='end']) {
    margin-inline-start: var(--icon-spacing);
  }

  :host([icon-only]) .control {
    min-width: 32px;
    max-width: 32px;
  }

  :host([size='small']) {
    --icon-spacing: var(${spacingHorizontalXS});
  }

  :host([size='small']) .control {
    min-height: 24px;
    min-width: 64px;
    padding: 0 var(${spacingHorizontalS});
    border-radius: var(${borderRadiusSmall});
    font-size: var(${fontSizeBase200});
    line-height: var(${lineHeightBase200});
    font-weight: var(${fontWeightRegular});
  }

  :host([size='small'][icon-only]) .control {
    min-width: 24px;
    max-width: 24px;
  }

  :host([size='large']) .control {
    min-height: 40px;
    border-radius: var(${borderRadiusLarge});
    padding: 0 var(${spacingHorizontalL});
    font-size: var(${fontSizeBase400});
    line-height: var(${lineHeightBase400});
  }

  :host([size='large'][icon-only]) .control {
    min-width: 40px;
    max-width: 40px;
  }

  :host([size='large']) ::slotted(svg) {
    font-size: 24px;
    height: 24px;
    width: 24px;
  }

  :host([shape='circular']) .control,
  :host([shape='circular']) .control:focus-visible {
    border-radius: var(${borderRadiusCircular});
  }

  :host([shape='square']) .control,
  :host([shape='square']) .control:focus-visible {
    border-radius: var(${borderRadiusNone});
  }

  :host([appearance='primary']) .control {
    background-color: var(${colorControlButtonAccentFillRest}, var(${colorBrandBackground}));
    color: var(${colorControlButtonAccentForegroundRest}, var(${colorNeutralForegroundOnBrand}));
    border-color: transparent;
  }

  :host([appearance='primary']:hover) .control {
    background-color: var(${colorControlButtonAccentFillHover}, var(${colorBrandBackgroundHover}));
    color: var(${colorControlButtonAccentForegroundHover}, var(${colorNeutralForegroundOnBrand}));
  }

  :host([appearance='primary']:hover:active) .control {
    border-color: transparent;
    color: var(${colorControlButtonAccentForegroundPressed}, var(${colorNeutralForegroundOnBrand}));
  }

  :host([appearance='primary']:hover:active) .control {
    background-color: var(${colorControlButtonAccentFillPressed}, var(${colorBrandBackgroundPressed}));
  }

  :host([appearance='primary']) .control:focus-visible {
    border-color: var(${colorControlFocusStrokeInner}, var(${colorNeutralForegroundOnBrand}));
    box-shadow: var(${shadow2}), 0 0 0 2px var(${colorStrokeFocus2});
  }

  :host(is:([disabled][appearance='primary'], [disabled-focusabale][appearance="primary"])) .control,
  :host(is:([disabled][appearance='primary'], [disabled-focusabale][appearance="primary"]):hover) .control,
  :host(is:([disabled][appearance='primary'], [disabled-focusabale][appearance="primary"]):hover:active) .control {
    border-color: transparent;
  }

  :host([appearance='outline']) .control {
    border-color: var(${colorControlButtonOutlineStrokeRest});
    background-color: var(${colorControlButtonOutlineFillRest}, var(${colorTransparentBackground}));
  }

  :host([appearance='outline']:hover) .control {
    border-color: var(${colorControlButtonOutlineStrokeHover});
    background-color: var(${colorTransparentBackgroundHover});
  }

  :host([appearance='outline']:hover:active) .control {
    border-color: var(${colorControlButtonOutlineStrokePressed});
    background-color: var(${colorTransparentBackgroundPressed});
  }

  :host(is:([disabled][appearance='outline'], [disabled-focusabale][appearance="outline"])) .control,
  :host(is:([disabled][appearance='outline'], [disabled-focusabale][appearance="outline"]):hover) .control,
  :host(is:([disabled][appearance='outline'], [disabled-focusabale][appearance="outline"]):hover:active) .control {
    background-color: var(${colorTransparentBackground});
  }

  :host([appearance='subtle']) .control {
    background-color: var(${colorControlButtonSubtleFillRest}, var(${colorSubtleBackground}));
    border-color: transparent;
  }

  :host([appearance='subtle']:hover) .control {
    background-color: var(${colorControlButtonSubtleFillHover}, var(${colorSubtleBackgroundHover}));
    border-color: transparent;
  }

  :host([appearance='subtle']:hover:active) .control {
    background-color: var(${colorControlButtonSubtleFillPressed}, var(${colorSubtleBackgroundPressed}));
    border-color: transparent;
  }

  :host(is:([disabled][appearance='subtle'], [disabled-focusabale][appearance="subtle"])) .control,
  :host(is:([disabled][appearance='subtle'], [disabled-focusabale][appearance="subtle"]):hover) .control,
  :host(is:([disabled][appearance='subtle'], [disabled-focusabale][appearance="subtle"]):hover:active) .control {
    background-color: var(${colorControlButtonSubtleFillDisabled}, var(${colorTransparentBackground}));
    border-color: transparent;
  }

  :host([appearance='subtle']) ::slotted(svg) {
    fill: var(${colorControlLinkAccentForegroundRest}, var(${colorNeutralForeground2BrandHover}));
  }

  :host([appearance='subtle']:hover) ::slotted(svg) {
    fill: var(${colorControlForegroundLabelOnPageLightUpHover}, var(${colorNeutralForeground2BrandHover}));
  }

  :host([appearance='subtle']:hover:active) ::slotted(svg) {
    fill: var(${colorControlForegroundLabelOnPageLightUpPressed}, var(${colorNeutralForeground2BrandPressed}));
  }

  :host([appearance='transparent']) .control {
    background-color: var(${colorTransparentBackground});
    color: var(${colorControlForegroundLabelOnPageLightUpRest}, var(${colorNeutralForeground2}));
  }

  :host([appearance='transparent']:hover) .control {
    background-color: var(${colorTransparentBackgroundHover});
    color: var(${colorControlForegroundLabelOnPageLightUpHover}, var(${colorNeutralForeground2BrandHover}));
  }

  :host([appearance='transparent']:hover:active) .control {
    background-color: var(${colorTransparentBackgroundPressed});
    color: var(${colorControlForegroundLabelOnPageLightUpPressed}, var(${colorNeutralForeground2BrandPressed}));
  }

  :host([appearance='transparent']) .control,
  :host([appearance='transparent']:hover) .control,
  :host([appearance='transparent']:hover:active) .control {
    border-color: transparent;
  }

  :host(is:([disabled][appearance='transparent'], [disabled-focusabale][appearance="transparent"])) .control,
  :host(is:([disabled][appearance='transparent'], [disabled-focusabale][appearance="transparent"]):hover) .control,
  :host(is:([disabled][appearance='transparent'], [disabled-focusabale][appearance="transparent"]):hover:active) .control {
    border-color: transparent;
    background-color: var(${colorTransparentBackground});
  }

  :host(:is([disabled], [disabled-focusable], [appearance][disabled], [appearance][disabled-focusable])) .control,
  :host(:is([disabled], [disabled-focusable], [appearance][disabled], [appearance][disabled-focusable]):hover) .control,
  :host(:is([disabled], [disabled-focusable], [appearance][disabled], [appearance][disabled-focusable]):hover:active)
    .control {
    background-color: var(${colorNeutralBackgroundDisabled});
    border-color: var(${colorNeutralStrokeDisabled});
    color: var(${colorNeutralForegroundDisabled});
    cursor: not-allowed;
  }
`.withBehaviors(
  forcedColorsStylesheetBehavior(css`
    :host([appearance='transparent']:hover) .control {
      border-color: Highlight;
    }
  `),
);
