import { css } from '@microsoft/fast-element';
import { display } from '@microsoft/fast-foundation/utilities.js';
import {
  borderRadiusCircular,
  borderRadiusMedium,
  borderRadiusSmall,
  colorCompoundBrandBackground,
  colorCompoundBrandBackgroundHover,
  colorCompoundBrandBackgroundPressed,
  colorCompoundBrandForeground1,
  colorCompoundBrandForeground1Hover,
  colorCompoundBrandForeground1Pressed,
  colorCompoundBrandStrokeHover,
  colorCompoundBrandStrokePressed,
  colorNeutralForeground1,
  colorNeutralForeground2,
  colorNeutralForeground3,
  colorNeutralForegroundDisabled,
  colorNeutralForegroundInverted,
  colorNeutralStrokeAccessible,
  colorNeutralStrokeAccessibleHover,
  colorNeutralStrokeAccessiblePressed,
  colorNeutralStrokeDisabled,
  colorStrokeFocus1,
  colorStrokeFocus2,
  colorTransparentBackgroundHover,
  fontFamilyBase,
  fontSizeBase300,
  lineHeightBase300,
  spacingHorizontalS,
  spacingHorizontalXS,
  spacingVerticalS,
} from '../theme/design-tokens.js';
import {
  colorControlForegroundLabelOnPagePrimaryDisabled,
  colorControlSwitchDefaultFillDisabled,
  colorControlSwitchDefaultFillHover,
  colorControlSwitchDefaultFillRest,
  colorControlSwitchDefaultSelectorPressed,
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
  layoutControlStrokeOutlineHover,
  layoutControlStrokeOutlineRest,
  layoutControlSwitchBaseSize,
  layoutControlSwitchGapControlToLabel,
  layoutCornerControlCheckboxHover,
  layoutCornerControlCheckboxPressed,
  layoutCornerControlCheckboxRest,
} from '../theme/design-tokens-new.js';

/** Checkbox styles
 *
 * @public
 */
export const styles = css`
  ${display('inline-flex')}
  :host {
    align-items: center;
    outline: none;
    user-select: none;
    vertical-align: middle;
    cursor: pointer;
    font-family: var(${fontFamilyBase});
    font-size: var(${fontSizeBase300});
    line-height: var(${lineHeightBase300});
    color: var(${colorNeutralForeground3});
    position: relative;
  }

  :host(:focus-visible)::after {
    content: '';
    position: absolute;
    inset: 0px;
    cursor: pointer;
    border-radius: var(${borderRadiusMedium});
    outline: none;
    border: 2px solid var(${colorStrokeFocus1});
    box-shadow: inset 0 0 0 1px var(${colorStrokeFocus2});
  }

  .control {
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin: var(${layoutControlSwitchGapControlToLabel}, var(${spacingVerticalS}))
      var(${layoutControlSwitchGapControlToLabel}, var(${spacingHorizontalS}));
    background: var(${colorControlSwitchDefaultFillRest});
    fill: currentcolor;
    height: var(${layoutControlSwitchBaseSize}, 16px);
    width: var(${layoutControlSwitchBaseSize}, 16px);
    border: var(${layoutControlStrokeOutlineRest}, 1px) solid
      var(${colorControlSwitchDefaultStrokeRest}, var(${colorNeutralStrokeAccessible}));
    border-radius: var(${layoutCornerControlCheckboxRest}, var(${borderRadiusSmall}));
    outline: none;
  }
  .label {
    align-self: center;
    cursor: inherit;
    padding-inline: var(${spacingHorizontalS});
    padding-bottom: var(${spacingVerticalS});
    padding-top: var(${spacingVerticalS});
  }
  .label__hidden {
    display: none;
    visibility: hidden;
  }
  .checked-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(${colorControlSwitchSelectedDefaultSelectorRest}, var(${colorNeutralForegroundInverted}));
    font-size: 12px;
    margin: auto;
    opacity: 0;
  }
  .indeterminate-indicator {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: var(${borderRadiusSmall});
    background-color: var(${colorCompoundBrandForeground1});
    opacity: 0;
  }
  :host([aria-checked='false']:hover) .control {
    background: var(${colorControlSwitchDefaultFillHover});
    border-color: var(${colorControlSwitchDefaultStrokeHover});
    color: var(${colorNeutralForeground2});
    border-width: var(${layoutControlStrokeOutlineHover}, 1px);
    border-radius: var(${layoutCornerControlCheckboxHover}, var(${borderRadiusSmall}));
  }
  :host(:hover) {
    color: var(${colorNeutralForeground2});
  }
  :host(:hover) .control {
    border-color: var(${colorControlSwitchDefaultStrokeHover}, var(${colorNeutralStrokeAccessibleHover}));
    border-radius: var(${layoutCornerControlCheckboxHover}, var(${borderRadiusSmall}));
  }
  :host(:hover) .indeterminate-indicator {
    background-color: var(${colorCompoundBrandForeground1Hover});
  }
  :host(:active) .control {
    border-color: var(${colorControlSwitchDefaultStrokePressed}, var(${colorNeutralStrokeAccessiblePressed}));
    border-radius: var(${layoutCornerControlCheckboxPressed}, var(${borderRadiusSmall}));
  }
  :host(:active) .indeterminate-indicator {
    background-color: var(${colorCompoundBrandForeground1Pressed});
  }
  :host(:active) .checked-indicator {
    color: var(${colorControlSwitchDefaultSelectorPressed});
  }
  ,
  :host([aria-checked='true']),
  :host([aria-checked='mixed']),
  :host(:active) {
    color: var(${colorNeutralForeground1});
  }
  :host([aria-checked='true']) .control {
    border-color: var(${colorControlSwitchSelectedDefaultBackgroundRest}, var(${colorCompoundBrandBackground}));
    background: var(${colorControlSwitchSelectedDefaultBackgroundRest});
  }
  :host([aria-checked='true']:hover) .control {
    border-color: var(${colorControlSwitchSelectedDefaultBackgroundHover}, var(${colorCompoundBrandStrokeHover}));
    background-color: var(
      ${colorControlSwitchSelectedDefaultBackgroundHover},
      var(${colorCompoundBrandBackgroundHover})
    );
  }
  :host([aria-checked='true']:active) .control {
    border-color: var(${colorControlSwitchSelectedDefaultBackgroundPressed});
    background-color: var(
      ${colorControlSwitchSelectedDefaultBackgroundPressed},
      var(${colorCompoundBrandBackgroundPressed})
    );
  }
  :host([aria-checked='mixed']:hover) .control {
    border-color: var(${colorCompoundBrandStrokeHover});
  }

  :host([aria-checked='true']) .checked-indicator {
    color: var(${colorControlSwitchSelectedDefaultSelectorRest});
  }
  :host([aria-checked='true']:hover) .checked-indicator {
    color: var(${colorControlSwitchSelectedDefaultSelectorHover});
  }
  :host([aria-checked='true']:active) .checked-indicator {
    color: var(${colorControlSwitchSelectedDefaultSelectorPressed});
  }
  :host(:active) .checked-indicator,
  :host([aria-checked='true']) .checked-indicator,
  :host([aria-checked='mixed']) .indeterminate-indicator {
    opacity: 1;
  }
  :host([aria-checked='true']) .control,
  :host([aria-checked='mixed']) .control {
    border-color: var(${colorControlSwitchSelectedDefaultBackgroundRest}, var(${colorCompoundBrandBackground}));
  }
  :host([aria-checked='mixed']:active) .control,
  :host([aria-checked='true']:active) .control {
    border-color: var(${colorCompoundBrandStrokePressed});
  }
  :host([label-position='before']) {
    flex-direction: row-reverse;
  }
  :host([label-position='before']) .label {
    padding-inline: var(${spacingHorizontalS}) var(${spacingHorizontalXS});
    padding-top: var(${spacingVerticalS});
    padding-bottom: var(${spacingVerticalS});
  }
  :host([size='large']) .control {
    width: 20px;
    height: 20px;
  }
  :host([size='large']) .checked-indicator {
    font-size: 16px;
    height: 20px;
  }
  :host([aria-checked='mixed'][size='large']) .indeterminate-indicator {
    height: 10px;
    width: 10px;
  }
  :host([shape='circular']) .control,
  :host([shape='circular']) .indeterminate-indicator {
    border-radius: var(${borderRadiusCircular});
  }
  :host([disabled]) .control {
    border-color: var(${colorControlSwitchDefaultStrokeDisabled}, var(${colorNeutralStrokeDisabled}));
    background-color: var(${colorControlSwitchDefaultFillDisabled}, var(${colorTransparentBackgroundHover}));
  }
  :host([aria-checked='true'][disabled]) .checked-indicator,
  :host([disabled]) ::slotted([slot='start']),
  :host([disabled]) .label {
    color: var(${colorControlSwitchSelectedDefaultSelectorDisabled}, var(${colorNeutralForegroundDisabled}));
  }
  :host([disabled]) .label,
  :host([aria-checked='mixed'][disabled]) .label,
  :host([aria-checked='true'][disabled]) .label {
    color: var(${colorControlForegroundLabelOnPagePrimaryDisabled}, var(${colorNeutralForegroundDisabled}));
  }
  :host([disabled]) .indeterminate-indicator {
    background-color: var(${colorNeutralForegroundDisabled});
  }
  :host([disabled][aria-checked='true']) .control,
  :host([disabled][aria-checked='mixed']) .control {
    pointer-events: none;
    border-color: var(${colorControlSwitchSelectedDefaultBackgroundDisabled}, var(${colorNeutralForegroundDisabled}));
    background: var(${colorControlSwitchSelectedDefaultBackgroundDisabled});
    background-clip: content-box;
  }
`;
