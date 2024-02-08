import { css } from '@microsoft/fast-element';
import { display, forcedColorsStylesheetBehavior } from '@microsoft/fast-foundation/utilities.js';
import {
  borderRadiusCircular,
  borderRadiusSmall,
  colorCompoundBrandForeground1,
  colorCompoundBrandForeground1Pressed,
  colorCompoundBrandStrokeHover,
  colorCompoundBrandStrokePressed,
  colorNeutralForeground2,
  colorNeutralForeground3,
  colorNeutralForegroundDisabled,
  colorNeutralStrokeAccessible,
  colorNeutralStrokeAccessibleHover,
  colorNeutralStrokeAccessiblePressed,
  colorStrokeFocus1,
  colorStrokeFocus2,
  fontFamilyBase,
  fontSizeBase300,
  fontWeightRegular,
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
  layoutControlSwitchSelectorSizeHover,
  layoutControlSwitchSelectorSizePressed,
  layoutControlSwitchSelectorSizeRest,
  layoutCornerControlRadioHover,
  layoutCornerControlRadioInnerHover,
  layoutCornerControlSelectorRest,
} from '../theme/design-tokens-new.js';

/** Radio styles
 * @public
 */
export const styles = css`
  ${display('inline-grid')}

  :host {
    grid-auto-flow: column;
    grid-template-columns: max-content;
    gap: var(${spacingHorizontalXS});
    align-items: center;
    height: 32px;
    cursor: pointer;
    outline: none;
    position: relative;
    user-select: none;
    color: blue;
    color: var(--state-color, var(${colorNeutralForeground3}));
    padding-inline-end: var(${spacingHorizontalS});
    --control-border-color: var(${colorNeutralStrokeAccessible});
    --checked-indicator-background-color: var(${colorCompoundBrandForeground1});
    --state-color: var(${colorNeutralForeground3});
  }
  :host([disabled]) {
    --control-border-color: var(${colorNeutralForegroundDisabled});
    --checked-indicator-background-color: var(${colorNeutralForegroundDisabled});
    --state-color: var(${colorNeutralForegroundDisabled});
  }
  .label {
    cursor: pointer;
    font-family: var(${fontFamilyBase});
    font-size: var(${fontSizeBase300});
    font-weight: var(${fontWeightRegular});
    line-height: var(${lineHeightBase300});
  }
  .label__hidden {
    display: none;
  }
  .control {
    box-sizing: border-box;
    align-items: center;
    border: var(${layoutControlStrokeOutlineRest}, 1px) solid
      var(--control-border-color, var(${colorControlSwitchDefaultStrokeRest}, var(${colorNeutralStrokeAccessible})));
    background: var(${colorControlSwitchDefaultFillRest});
    border-radius: var(${layoutCornerControlSelectorRest}, var(${borderRadiusCircular}));
    display: flex;
    height: var(${layoutControlSwitchBaseSize}, 16px);
    justify-content: center;
    margin: var(${layoutControlSwitchGapControlToLabel}, var(${spacingVerticalS}))
      var(${layoutControlSwitchGapControlToLabel}, var(${spacingHorizontalS}));
    position: relative;
    width: var(${layoutControlSwitchBaseSize}, 16px);
    justify-self: center;
  }
  .checked-indicator {
    border-radius: var(${layoutCornerControlSelectorRest}, var(${borderRadiusCircular}));
    height: var(${layoutControlSwitchSelectorSizeRest}, 10px);
    width: var(${layoutControlSwitchSelectorSizeRest}, 10px);
    opacity: 0;
  }
  :host([aria-checked='false']:hover) .control {
    background: var(${colorControlSwitchDefaultFillHover});
    border-color: var(${colorControlSwitchDefaultStrokeHover});
    color: var(${colorNeutralForeground2});
    border-width: var(${layoutControlStrokeOutlineHover}, 1px);
    border-radius: var(${layoutCornerControlRadioHover}, var(${borderRadiusCircular}));
  }
  :host(:focus-visible) {
    border-radius: var(${borderRadiusSmall});
    box-shadow: 0 0 0 3px var(${colorStrokeFocus2});
    outline: 1px solid var(${colorStrokeFocus1});
  }
  :host(:hover) .control {
    border-color: var(${colorNeutralStrokeAccessibleHover});
  }
  :host(:active) .control {
    border-color: var(${colorNeutralStrokeAccessiblePressed});
  }

  :host(:active) .checked-indicator,
  :host([aria-checked='true']) .checked-indicator {
    opacity: 1;
  }

  :host(:active) .checked-indicator {
    background-color: var(${colorControlSwitchDefaultSelectorPressed});
  }

  :host([aria-checked='true']) .control {
    border-color: var(
      --control-border-color,
      var(${colorControlSwitchSelectedDefaultBackgroundRest}, var(${colorNeutralStrokeAccessible}))
    );
    background: var(${colorControlSwitchSelectedDefaultBackgroundRest});
  }
  :host([aria-checked='true']) .checked-indicator {
    background-color: var(
      --checked-indicator-background-color,
      var(${colorControlSwitchSelectedDefaultSelectorRest}, var(${colorCompoundBrandForeground1}))
    );
  }

  :host([aria-checked='true']:hover) .control {
    border-color: var(${colorControlSwitchSelectedDefaultBackgroundHover}, var(${colorCompoundBrandStrokeHover}));
    background: var(${colorControlSwitchSelectedDefaultBackgroundHover});
    border-radius: var(${layoutCornerControlRadioHover}, var(${borderRadiusCircular}));
  }
  :host([aria-checked='true']:hover) .checked-indicator {
    background-color: var(${colorControlSwitchSelectedDefaultSelectorHover}, var(${colorCompoundBrandStrokeHover}));
    border-radius: var(${layoutCornerControlRadioInnerHover}, var(${borderRadiusCircular}));
    height: var(${layoutControlSwitchSelectorSizeHover}, 10px);
    width: var(${layoutControlSwitchSelectorSizeHover}, 10px);
  }

  :host([aria-checked='true']:active) .control {
    border-color: var(${colorControlSwitchSelectedDefaultBackgroundPressed}, var(${colorCompoundBrandStrokePressed}));
    background: var(${colorControlSwitchSelectedDefaultBackgroundPressed});
  }
  :host([aria-checked='true']:active) .checked-indicator {
    background: var(${colorControlSwitchSelectedDefaultSelectorPressed}, var(${colorCompoundBrandForeground1Pressed}));
    height: var(${layoutControlSwitchSelectorSizePressed}, 10px);
    width: var(${layoutControlSwitchSelectorSizePressed}, 10px);
  }
  :host([disabled]) {
    color: var(${colorControlForegroundLabelOnPagePrimaryDisabled});
    pointer-events: none;
  }
  :host([disabled]) .control {
    pointer-events: none;
    border-color: var(${colorControlSwitchDefaultStrokeDisabled}, var(${colorNeutralForegroundDisabled}));
    background: var(${colorControlSwitchDefaultFillDisabled});
  }
  :host([disabled]) .checked-indicator {
    background: var(${colorControlSwitchSelectedDefaultSelectorDisabled}, var(${colorNeutralForegroundDisabled}));
  }
  :host([disabled][aria-checked='true']) .control {
    pointer-events: none;
    border-color: var(${colorControlSwitchSelectedDefaultBackgroundDisabled}, var(${colorNeutralForegroundDisabled}));
    background: var(${colorControlSwitchSelectedDefaultBackgroundDisabled});
    background-clip: content-box;
  }
`.withBehaviors(
  forcedColorsStylesheetBehavior(css`
    :host .control {
      border-color: InactiveBorder;
    }
    :host([aria-checked='true']) .checked-indicator,
    :host([aria-checked='true']:active) .checked-indicator,
    :host([aria-checked='true']:hover) .checked-indicator {
      background-color: Highlight;
      border-color: ActiveBorder;
    }
  `),
);
