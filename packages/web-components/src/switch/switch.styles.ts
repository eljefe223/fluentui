import { css } from '@microsoft/fast-element';
import { display, forcedColorsStylesheetBehavior } from '@microsoft/fast-foundation/utilities.js';
import {
  borderRadiusCircular,
  colorCompoundBrandBackground,
  colorCompoundBrandBackgroundHover,
  colorCompoundBrandBackgroundPressed,
  colorNeutralBackgroundDisabled,
  colorNeutralForeground1,
  colorNeutralForeground3,
  colorNeutralForeground3Hover,
  colorNeutralForeground3Pressed,
  colorNeutralForegroundDisabled,
  colorNeutralForegroundInverted,
  colorNeutralForegroundInvertedHover,
  colorNeutralForegroundInvertedPressed,
  colorNeutralStrokeAccessible,
  colorNeutralStrokeAccessibleHover,
  colorNeutralStrokeAccessiblePressed,
  colorNeutralStrokeDisabled,
  colorStrokeFocus2,
  colorTransparentBackground,
  colorTransparentStroke,
  curveEasyEase,
  durationNormal,
  fontFamilyBase,
  fontSizeBase300,
  fontWeightRegular,
  lineHeightBase300,
  shadow4,
  spacingHorizontalS,
  spacingHorizontalXS,
  spacingHorizontalXXS,
  spacingVerticalS,
  spacingVerticalXS,
  strokeWidthThick,
} from '../theme/design-tokens.js';
import {
  colorControlForegroundLabelOnPagePrimaryRest,
  colorControlSwitchDefaultFillDisabled,
  colorControlSwitchDefaultFillHover,
  colorControlSwitchDefaultFillPressed,
  colorControlSwitchDefaultFillRest,
  colorControlSwitchDefaultStrokeDisabled,
  colorControlSwitchDefaultStrokeHover,
  colorControlSwitchDefaultStrokePressed,
  colorControlSwitchDefaultStrokeRest,
  colorControlSwitchSelectedDefaultBackgroundDisabled,
  colorControlSwitchSelectedDefaultBackgroundHover,
  colorControlSwitchSelectedDefaultBackgroundPressed,
  colorControlSwitchSelectedDefaultBackgroundRest,
  colorControlSwitchSelectedDefaultSelectorDisabled,
  colorControlSwitchSelectedDefaultSelectorHover,
  colorControlSwitchSelectedDefaultSelectorPressed,
  colorControlSwitchSelectedDefaultSelectorRest,
  layoutControlStrokeOutlineDisabled,
  layoutControlStrokeOutlineHover,
  layoutControlStrokeOutlinePressed,
  layoutControlStrokeOutlineRest,
  layoutControlSwitchBasePaddingHorizontalRest,
  layoutControlSwitchGapControlToLabel,
  layoutControlSwitchSelectorSizeHover,
  layoutControlSwitchSelectorSizePressed,
  layoutControlSwitchSelectorSizeRest,
  layoutControlTextMarginBottom,
  layoutControlTextMarginTop,
  layoutCornerControlRadioHover,
  layoutCornerControlSelectorRest,
} from '../theme/design-tokens-new.js';

export const styles = css`
  ${display('inline-flex')}

  :host {
    align-items: center;
    flex-direction: row-reverse;
    outline: none;
    user-select: none;
    contain: content;
  }
  :host([label-position='before']) {
    flex-direction: row;
  }
  :host([label-position='above']) {
    flex-direction: column;
    align-items: flex-start;
  }
  :host([disabled]) .label,
  :host([readonly]) .label,
  :host([readonly]) .switch,
  :host([disabled]) .switch {
    cursor: not-allowed;
  }
  .label {
    position: relative;
    color: var(${colorControlForegroundLabelOnPagePrimaryRest}, var(${colorNeutralForeground1}));
    line-height: var(${lineHeightBase300});
    font-size: var(${fontSizeBase300});
    font-weight: var(${fontWeightRegular});
    font-family: var(${fontFamilyBase});
    padding: var(${layoutControlTextMarginTop}, var(${spacingVerticalXS})) var(${layoutControlSwitchGapControlToLabel}, var(${spacingHorizontalXS})) var(${layoutControlTextMarginBottom}, var(${spacingVerticalXS}));
    cursor: pointer;
  }
  .label__hidden {
    display: none;
  }
  .switch {
    display: flex;
    align-items: center;
    padding: 0 var(${layoutControlSwitchBasePaddingHorizontalRest}, var(${spacingHorizontalXXS}));
    box-sizing: border-box;
    width: 40px;
    height: 20px;
    background-color: var(${colorControlSwitchDefaultFillRest}, var(${colorTransparentBackground}));
    border: var(${layoutControlStrokeOutlineRest}, 1px) solid var(${colorControlSwitchDefaultStrokeRest}, var(${colorNeutralStrokeAccessible}));
    border-radius: var(${layoutCornerControlSelectorRest}, var(${borderRadiusCircular}));
    outline: none;
    cursor: pointer;
    margin: var(${spacingVerticalS}) var(${spacingHorizontalS});
  }
  :host(:hover) .switch {
    background: none;
    background-color: var(${colorControlSwitchDefaultFillHover});
    border: var(${layoutControlStrokeOutlineHover}, 1px) solid var(${colorControlSwitchDefaultStrokeHover}, var(${colorNeutralStrokeAccessibleHover}));
  }
  :host(:active) .switch {
    background-color: var(${colorControlSwitchDefaultFillPressed});
    border: var(${layoutControlStrokeOutlinePressed}, 1px) solid var(${colorControlSwitchDefaultStrokePressed}, var(${colorNeutralStrokeAccessiblePressed}));
  }
  :host([disabled]) .switch,
  :host([readonly]) .switch {
    border: var(${layoutControlStrokeOutlineDisabled}, 1px) solid var(${colorControlSwitchDefaultStrokeDisabled}, var(${colorNeutralStrokeDisabled}));
    background-color: var(${colorControlSwitchDefaultFillDisabled} , none);
    pointer: default;
  }
  :host([aria-checked='true']) .switch {
    background: var(${colorControlSwitchSelectedDefaultBackgroundRest}, var(${colorCompoundBrandBackground}));
  }
  :host([aria-checked='true']:hover) .switch {
    background: var(${colorControlSwitchSelectedDefaultBackgroundHover}, var(${colorCompoundBrandBackgroundHover}));
    border-color: var(${colorCompoundBrandBackgroundHover});
  }
  :host([aria-checked='true']:active) .switch {
    background: var(${colorControlSwitchSelectedDefaultBackgroundPressed}, var(${colorCompoundBrandBackgroundPressed}));
    border-color: var(${colorCompoundBrandBackgroundPressed});
  }
  :host([aria-checked='true'][disabled]) .switch {
    background: var(${colorControlSwitchSelectedDefaultBackgroundDisabled}, var(${colorNeutralBackgroundDisabled}));
    border-color: var(${colorNeutralStrokeDisabled});
  }
  .checked-indicator {
    height: var(${layoutControlSwitchSelectorSizeRest}, 14px);
    width: var(${layoutControlSwitchSelectorSizeRest}, 14px);
    border-radius: var(${layoutCornerControlRadioHover}, 50%);
    margin-inline-start: 0;
    background-color: var(${colorControlSwitchSelectedDefaultBackgroundRest}, var(${colorNeutralForeground3}));
    transition-duration: var(${durationNormal});
    transition-timing-function: var(${curveEasyEase});
    transition-property: margin-inline-start;
  }
  :host([aria-checked='true']) .checked-indicator {
    height: var(${layoutControlSwitchSelectorSizeRest}, 14px);
    width: var(${layoutControlSwitchSelectorSizeRest}, 14px);
    background-color: var(${colorControlSwitchSelectedDefaultSelectorRest}, var(${colorNeutralForegroundInverted}));
    margin-inline-start: calc(100% - var(${layoutControlSwitchSelectorSizeRest}, 14px));
  }
  :host([aria-checked='true']:hover) .checked-indicator {
    width: var(${layoutControlSwitchSelectorSizeHover}, 14px);
    height: var(${layoutControlSwitchSelectorSizeHover}, 14px);
    margin-inline-start: calc(100% - var(${layoutControlSwitchSelectorSizeHover}, 14px));
    background: var(${colorControlSwitchSelectedDefaultSelectorHover}, var(${colorNeutralForegroundInvertedHover}));
  }
  :host([aria-checked='true']:active) .checked-indicator {
    width: var(${layoutControlSwitchSelectorSizePressed}, 14px);
    height: var(${layoutControlSwitchSelectorSizeRest}, 14px);
    margin-inline-start: calc(100% - var(${layoutControlSwitchSelectorSizePressed}, 14px));
    background: var(${colorControlSwitchSelectedDefaultSelectorPressed}, var(${colorNeutralForegroundInvertedPressed}));
  }
  :host(:hover) .checked-indicator {
    background-color: var(${colorControlSwitchSelectedDefaultBackgroundHover}, var(${colorNeutralForeground3Hover}));
    width: var(${layoutControlSwitchSelectorSizeHover}, 14px);
    height: var(${layoutControlSwitchSelectorSizeHover}, 14px);
    margin-inline-start: calc(var(${layoutControlSwitchSelectorSizeRest}, 14px) - 14px);
  }
  :host(:active) .checked-indicator {
    background-color: var(${colorControlSwitchSelectedDefaultBackgroundPressed} var(${colorNeutralForeground3Pressed}));
    width: var(${layoutControlSwitchSelectorSizePressed}, 14px);
    height: var(${layoutControlSwitchSelectorSizeRest}, 14px);
  }
  :host([disabled]) .checked-indicator,
  :host([readonly]) .checked-indicator {
    background: var(${colorControlSwitchSelectedDefaultBackgroundDisabled}, var(${colorNeutralForegroundDisabled}));
  }
  :host([aria-checked='true'][disabled]) .checked-indicator {
    background: var(${colorControlSwitchSelectedDefaultSelectorDisabled}, var(${colorNeutralForegroundDisabled});
  }

  :host(:focus-visible) {
    border-color: var(${colorTransparentStroke});
    outline: var(${strokeWidthThick}) solid var(${colorTransparentStroke});
    box-shadow: var(${shadow4}), 0 0 0 2px var(${colorStrokeFocus2});
  }
`.withBehaviors(
  forcedColorsStylesheetBehavior(css`
    .switch {
      border-color: InactiveBorder;
    }
    :host([aria-checked='true']) .switch,
    :host([aria-checked='true']:active) .switch,
    :host([aria-checked='true']:hover) .switch {
      background: Highlight;
      border-color: Highlight;
    }
    .checked-indicator,
    :host(:hover) .checked-indicator,
    :host(:active) .checked-indicator {
      background-color: ActiveCaption;
    }
    :host([aria-checked='true']) .checked-indicator,
    :host([aria-checked='true']:hover) .checked-indicator,
    :host([aria-checked='true']:active) .checked-indicator {
      background-color: ButtonFace;
    }
  `),
);
