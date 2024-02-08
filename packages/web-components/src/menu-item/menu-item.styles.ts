import { css } from '@microsoft/fast-element';
import { display } from '@microsoft/fast-foundation/utilities.js';
import {
  borderRadiusCircular,
  borderRadiusMedium,
  colorCompoundBrandForeground1,
  colorCompoundBrandForeground1Hover,
  colorCompoundBrandForeground1Pressed,
  colorNeutralBackground1,
  colorNeutralBackground1Hover,
  colorNeutralBackground1Selected,
  colorNeutralBackgroundDisabled,
  colorNeutralForeground2,
  colorNeutralForeground2Hover,
  colorNeutralForeground2Pressed,
  colorNeutralForeground3,
  colorNeutralForegroundDisabled,
  fontFamilyBase,
  fontSizeBase200,
  fontSizeBase300,
  fontSizeBase500,
  fontWeightRegular,
  lineHeightBase200,
  lineHeightBase300,
} from '../theme/design-tokens.js';
import {
  colorControlForegroundTextOnPlatePrimaryDisabled,
  colorControlForegroundTextOnPlatePrimaryHover,
  colorControlForegroundTextOnPlatePrimaryPressed,
  colorControlForegroundTextOnPlatePrimaryRest,
  colorControlListItemDefaultFillDisabled,
  colorControlListItemDefaultFillHover,
  colorControlListItemDefaultFillPressed,
  colorControlListItemDefaultFillRest,
  colorControlListItemDefaultIconHover,
  colorControlListItemDefaultIconPressed,
  colorControlListItemDefaultIconRest,
  colorControlListItemDefaultSwitchBackgroundFillHover,
  colorControlListItemDefaultSwitchBackgroundFillPressed,
  colorControlListItemDefaultSwitchBackgroundStrokeHover,
  colorControlListItemDefaultSwitchBackgroundStrokePressed,
  colorControlListItemDefaultSwitchForegroundFillPressed,
  colorControlListItemSelectedDefaultSwitchBackgroundFillHover,
  colorControlListItemSelectedDefaultSwitchBackgroundStrokeHover,
  colorControlListItemSelectedDefaultSwitchForegroundFillHover,
  colorControlListItemSelectedDefaultSwitchForegroundFillPressed,
  colorControlListItemSelectedDefaultSwitchForegroundFillRest,
  controlHeight,
  layoutControlPaddingHorizontal,
  layoutControlStrokeOutlineHover,
  layoutControlStrokeOutlinePressed,
  layoutControlSwitchSelectorSizeHover,
  layoutControlSwitchSelectorSizePressed,
  layoutControlSwitchSelectorSizeRest,
  layoutControlTextMarginBottom,
  layoutControlTextMarginTop,
  layoutCornerControlDefaultDisabled,
  layoutCornerControlDefaultHover,
  layoutCornerControlDefaultPressed,
  layoutCornerControlDefaultRest,
  layoutCornerControlRadioHover,
  layoutCornerControlRadioInnerHover,
  layoutCornerControlSelectorRest,
  menuIndicatorDisplay,
} from '../theme/design-tokens-new.js';

/** MenuItem styles
 * @public
 */
export const styles = css`
  ${display('grid')}

  :host {
    grid-template-columns: 20px 20px auto 20px;
    align-items: center;
    grid-gap: 4px;
    min-height: var(${controlHeight}, 32px);
    background: var(${colorControlListItemDefaultFillRest}, var(${colorNeutralBackground1}));
    font: var(${fontWeightRegular}) var(${fontSizeBase300}) / var(${lineHeightBase300}) var(${fontFamilyBase});
    border-radius: var(${layoutCornerControlDefaultRest} var(${borderRadiusMedium}));
    color: var(${colorControlForegroundTextOnPlatePrimaryRest}, var(${colorNeutralForeground2}));
    padding: 0 var(${layoutControlPaddingHorizontal}, 10px);
    cursor: pointer;
    overflow: visible;
    contain: layout;
  }

  :host(:hover) {
    background: var(${colorControlListItemDefaultFillHover}, var(${colorNeutralBackground1Hover}));
    border-radius: var(${layoutCornerControlDefaultHover}, var(${borderRadiusMedium}));
  }

  .content {
    white-space: nowrap;
    flex-grow: 1;
    grid-column: auto / span 2;
    padding: 0 2px;
    margin-top: var(${layoutControlTextMarginTop}, 0);
    margin-bottom: var(${layoutControlTextMarginBottom}, 0);
  }

  .checkbox,
  .radio {
    display: none;
  }

  :host(:active) .checkbox,
  :host(:active) .radio {
    display: var(${menuIndicatorDisplay}, none);
  }

  :host(:active) .checkbox {
    color: var(${colorControlListItemDefaultSwitchForegroundFillPressed});
  }

  :host(:active) .radio {
    background: var(${colorControlListItemDefaultSwitchForegroundFillPressed});
  }

  .input-container,
  .expand-collapse-glyph-container,
  ::slotted([slot='start']),
  ::slotted([slot='end']),
  :host([checked]) .checkbox,
  :host([checked]) .radio {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: var(${colorControlForegroundTextOnPlatePrimaryRest}, var(${colorNeutralForeground2}));
  }

  .radio {
    height: var(${layoutControlSwitchSelectorSizeRest}, 10px);
    width: var(${layoutControlSwitchSelectorSizeRest}, 10px);
    border-radius: var(${layoutCornerControlSelectorRest}, var(${borderRadiusCircular}));
  }

  :host(:hover) .radio {
    height: var(${layoutControlSwitchSelectorSizeHover}, 10px);
    width: var(${layoutControlSwitchSelectorSizeHover}, 10px);
    border-radius: var(${layoutCornerControlRadioInnerHover}, var(${borderRadiusCircular}));
  }

  :host(:active) .radio {
    height: var(${layoutControlSwitchSelectorSizePressed}, 10px);
    width: var(${layoutControlSwitchSelectorSizePressed}, 10px);
  }

  ::slotted([slot='start']) {
    color: var(${colorControlListItemDefaultIconRest}, var(${colorNeutralForeground2}));
  }

  .expand-collapse-glyph-container,
  ::slotted([slot='start']),
  ::slotted([slot='end']) {
    height: 32px;
    font-size: var(${fontSizeBase500});
    width: fit-content;
  }

  .input-container {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
  }

  :host(:hover) .input-container {
    border-radius: var(${layoutCornerControlRadioHover}, 0px);
    border: var(${layoutControlStrokeOutlineHover}, 0px) solid
      var(${colorControlListItemDefaultSwitchBackgroundStrokeHover}, transparent);
    background: var(${colorControlListItemDefaultSwitchBackgroundFillHover}, transparent);
  }

  :host(:active) .input-container {
    border: var(${layoutControlStrokeOutlinePressed}, 0px) solid
      var(${colorControlListItemDefaultSwitchBackgroundStrokePressed}, transparent);
    background: var(${colorControlListItemDefaultSwitchBackgroundFillPressed}, transparent);
  }

  :host([checked]) .input-container {
    border-radius: var(${layoutCornerControlRadioHover}, 0px);
    border: var(${layoutControlStrokeOutlineHover}, 0px) solid
      var(${colorControlListItemSelectedDefaultSwitchBackgroundStrokeHover}, transparent);
    background: var(${colorControlListItemSelectedDefaultSwitchBackgroundFillHover}, transparent);
  }

  :host([checked]) .radio {
    background: var(
      ${colorControlListItemSelectedDefaultSwitchForegroundFillRest},
      var(${colorCompoundBrandForeground1})
    );
  }

  :host([checked]) .checkbox {
    color: var(${colorControlListItemSelectedDefaultSwitchForegroundFillRest}, var(${colorCompoundBrandForeground1}));
  }

  :host([checked]:hover) .input-container {
    border-radius: var(${layoutCornerControlRadioHover}, 0px);
    border: var(${layoutControlStrokeOutlineHover}, 0px) solid
      var(${colorControlListItemSelectedDefaultSwitchBackgroundStrokeHover}, transparent);
    background: var(${colorControlListItemSelectedDefaultSwitchBackgroundFillHover}, transparent);
  }

  :host([checked]:hover) .radio {
    background: var(
      ${colorControlListItemSelectedDefaultSwitchForegroundFillHover},
      var(${colorCompoundBrandForeground1Hover})
    );
  }

  :host([checked]:hover) .checkbox {
    color: var(
      ${colorControlListItemSelectedDefaultSwitchForegroundFillHover},
      var(${colorCompoundBrandForeground1Hover})
    );
  }

  :host([checked]:active) .input-container {
    border-radius: var(${layoutCornerControlRadioHover}, 0px);
    border: var(${layoutControlStrokeOutlineHover}, 0px) solid
      var(${colorControlListItemSelectedDefaultSwitchBackgroundStrokeHover}, transparent);
    background: var(${colorControlListItemSelectedDefaultSwitchBackgroundFillHover}, transparent);
  }

  :host([checked]:active) .radio {
    background: var(
      ${colorControlListItemSelectedDefaultSwitchForegroundFillPressed},
      var(${colorCompoundBrandForeground1Pressed})
    );
  }

  :host([checked]:active) .checkbox {
    color: var(
      ${colorControlListItemSelectedDefaultSwitchForegroundFillPressed},
      var(${colorCompoundBrandForeground1Pressed})
    );
  }

  ::slotted([slot='end']) {
    color: var(${colorNeutralForeground3});
    font: var(${fontWeightRegular}) var(${fontSizeBase200}) / var(${lineHeightBase200}) var(${fontFamilyBase});
    white-space: nowrap;
    grid-column: 4 / span 1;
    justify-self: flex-end;
  }

  .expand-collapse-glyph-container {
    grid-column: 4 / span 1;
    justify-self: flex-end;
  }

  :host(:hover) .input-container,
  :host(:hover) .expand-collapse-glyph-container,
  :host(:hover) .content {
    color: var(${colorControlForegroundTextOnPlatePrimaryHover}, var(${colorNeutralForeground2Hover}));
  }

  :host(:hover) ::slotted([slot='start']) {
    color: var(${colorControlListItemDefaultIconHover}, var(${colorCompoundBrandForeground1Hover}));
  }

  :host(:active) {
    background-color: var(${colorControlListItemDefaultFillPressed}, var(${colorNeutralBackground1Selected}));
    border-radius: var(${layoutCornerControlDefaultPressed}, var(${borderRadiusMedium}));
  }

  :host(:active) .input-container,
  :host(:active) .expand-collapse-glyph-container,
  :host(:active) .content {
    color: var(${colorControlForegroundTextOnPlatePrimaryPressed}, var(${colorNeutralForeground2Pressed}));
  }

  :host(:active) ::slotted([slot='start']) {
    color: var(${colorControlListItemDefaultIconPressed}, var(${colorCompoundBrandForeground1Pressed}));
  }

  :host([disabled]) {
    background-color: var(${colorControlListItemDefaultFillDisabled}, var(${colorNeutralBackgroundDisabled}));
    border-radius: var(${layoutCornerControlDefaultDisabled}, var(${borderRadiusMedium}));
  }

  :host([disabled]) .content,
  :host([disabled]) .expand-collapse-glyph-container,
  :host([disabled]) ::slotted([slot='end']),
  :host([disabled]) ::slotted([slot='start']) {
    color: var(${colorControlForegroundTextOnPlatePrimaryDisabled}, var(${colorNeutralForegroundDisabled}));
  }

  :host([data-indent]) {
    display: grid;
  }

  :host([data-indent='1']) .content {
    grid-column: 2 / span 1;
  }

  :host([data-indent='1'][role='menuitemcheckbox']) {
    display: grid;
  }

  :host([data-indent='2'][aria-haspopup='menu']) ::slotted([slot='end']) {
    grid-column: 4 / span 1;
  }

  :host([data-indent='2'][aria-haspopup='menu']) .expand-collapse-glyph-container {
    grid-column: 5 / span 1;
  }

  :host([data-indent='1']) .content {
    grid-column: 2 / span 1;
  }

  :host([data-indent='1'][role='menuitemcheckbox']) .content,
  :host([data-indent='1'][role='menuitemradio']) .content {
    grid-column: auto / span 1;
  }

  :host([icon]) ::slotted([slot='end']),
  :host([data-indent='1']) ::slotted([slot='end']) {
    grid-column: 4 / span 1;
    justify-self: flex-end;
  }

  :host([data-indent='2']) {
    display: grid;
    grid-template-columns: 20px 20px auto auto;
  }

  :host([data-indent='2']) .content {
    grid-column: 3 / span 1;
  }

  :host([data-indent='2']) .input-container {
    grid-column: 1 / span 1;
  }

  :host([data-indent='2']) ::slotted([slot='start']) {
    grid-column: 2 / span 1;
  }

  :host([aria-haspopup='menu']) {
    grid-template-columns: 20px auto auto 20px;
  }

  :host([data-indent='2'][aria-haspopup='menu']) {
    grid-template-columns: 20px 20px auto auto 20px;
  }

  :host([aria-haspopup='menu']) ::slotted([slot='end']) {
    grid-column: 3 / span 1;
    justify-self: flex-end;
  }

  :host([data-indent='2'][aria-haspopup='menu']) ::slotted([slot='end']) {
    grid-column: 4 / span 1;
    justify-self: flex-end;
  }
`;
