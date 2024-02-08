import { css } from '@microsoft/fast-element';
import { forcedColorsStylesheetBehavior } from '@microsoft/fast-foundation/utilities.js';
import { styles as ButtonStyles } from '../button/button.styles.js';
import {
  colorBrandBackgroundHover,
  colorBrandBackgroundPressed,
  colorBrandBackgroundSelected,
  colorNeutralBackground1Hover,
  colorNeutralBackground1Pressed,
  colorNeutralBackground1Selected,
  colorNeutralForeground1,
  colorNeutralForeground2BrandHover,
  colorNeutralForeground2BrandPressed,
  colorNeutralForeground2BrandSelected,
  colorNeutralForeground2Hover,
  colorNeutralForeground2Pressed,
  colorNeutralForeground2Selected,
  colorNeutralForegroundOnBrand,
  colorNeutralStroke1,
  colorNeutralStroke1Hover,
  colorNeutralStroke1Pressed,
  colorSubtleBackgroundHover,
  colorSubtleBackgroundPressed,
  colorSubtleBackgroundSelected,
  colorTransparentBackgroundHover,
  colorTransparentBackgroundPressed,
  colorTransparentBackgroundSelected,
  strokeWidthThin,
} from '../theme/design-tokens.js';
import {
  colorControlButtonSelectedDefaultFillHover,
  colorControlButtonSelectedDefaultFillPressed,
  colorControlButtonSelectedDefaultFillRest,
  colorControlButtonSelectedDefaultForegroundTextRest,
  colorControlButtonSelectedDefaultStrokeHover,
  colorControlButtonSelectedDefaultStrokePressed,
  colorControlButtonSelectedDefaultStrokeRest,
  colorControlButtonSelectedSubtleFillHover,
  colorControlButtonSelectedSubtleFillPressed,
  colorControlButtonSelectedSubtleFillRest,
  colorControlButtonSubtleForegroundTextHover,
  colorControlButtonSubtleForegroundTextPressed,
  colorControlButtonSubtleForegroundTextRest,
} from '../theme/design-tokens-new.js';

// Need to support icon hover styles
export const styles = css`
  ${ButtonStyles}

  :host([aria-pressed="true"]) .control {
    border-color: var(${colorControlButtonSelectedDefaultStrokeRest}, var(${colorNeutralStroke1}));
    background-color: var(${colorControlButtonSelectedDefaultFillRest}, var(${colorNeutralBackground1Selected}));
    color: var(${colorControlButtonSelectedDefaultForegroundTextRest}, var(${colorNeutralForeground1}));
    border-width: var(${strokeWidthThin});
  }

  :host([aria-pressed='true']:hover) .control {
    border-color: var(${colorControlButtonSelectedDefaultStrokeHover}, var(${colorNeutralStroke1Hover}));
    background-color: var(${colorControlButtonSelectedDefaultFillHover}, var(${colorNeutralBackground1Hover}));
  }

  :host([aria-pressed='true']:active) .control {
    border-color: var(${colorControlButtonSelectedDefaultStrokePressed}, var(${colorNeutralStroke1Pressed}));
    background-color: var(${colorControlButtonSelectedDefaultFillPressed}, var(${colorNeutralBackground1Pressed}));
  }

  :host([aria-pressed='true'][appearance='primary']) .control {
    border-color: transparent;
    background-color: var(${colorControlButtonSelectedDefaultFillRest}, var(${colorBrandBackgroundSelected}));
    color: var(${colorControlButtonSelectedDefaultForegroundTextRest}, var(${colorNeutralForegroundOnBrand}));
  }

  :host([aria-pressed='true'][appearance='primary']:hover) .control {
    background-color: var(${colorControlButtonSelectedDefaultFillHover}, var(${colorBrandBackgroundHover}));
  }

  :host([aria-pressed='true'][appearance='primary']:active) .control {
    background-color: var(${colorControlButtonSelectedDefaultFillPressed}, var(${colorBrandBackgroundPressed}));
  }

  :host([aria-pressed='true'][appearance='subtle']) .control {
    border-color: transparent;
    Color.Control.Button.Subtle.Foreground.Text.Rest
    background-color: var(${colorControlButtonSelectedSubtleFillRest}, var(${colorSubtleBackgroundSelected}));
    color: var(${colorControlButtonSubtleForegroundTextRest}, var(${colorNeutralForeground2Selected}));
  }

  :host([aria-pressed='true'][appearance='subtle']:hover) .control {
    background-color: var(${colorControlButtonSelectedSubtleFillHover}, var(${colorSubtleBackgroundHover}));
    color: var(${colorControlButtonSubtleForegroundTextHover}, var(${colorNeutralForeground2Hover}));
  }

  :host([aria-pressed='true'][appearance='subtle']:active) .control {
    background-color: var(${colorControlButtonSelectedSubtleFillPressed}, var(${colorSubtleBackgroundPressed}));
    color: var(${colorControlButtonSubtleForegroundTextPressed}, var(${colorNeutralForeground2Pressed}));
  }

  :host([aria-pressed='true'][appearance='outline']) .control,
  :host([aria-pressed='true'][appearance='transparent']) .control {
    background-color: var(${colorControlButtonSelectedSubtleFillRest}, var(${colorTransparentBackgroundSelected}));
  }

  :host([aria-pressed='true'][appearance='outline']:hover) .control,
  :host([aria-pressed='true'][appearance='transparent']:hover) .control {
    background-color: var(${colorControlButtonSelectedSubtleFillHover}, var(${colorTransparentBackgroundHover}));
  }

  :host([aria-pressed='true'][appearance='outline']:active) .control,
  :host([aria-pressed='true'][appearance='transparent']:active) .control {
    background-color: var(${colorControlButtonSelectedSubtleFillPressed}, var(${colorTransparentBackgroundPressed}));
  }

  :host([aria-pressed='true'][appearance='transparent']) .control {
    border-color: transparent;
    color: var(${colorNeutralForeground2BrandSelected});
  }

  :host([aria-pressed='true'][appearance='transparent']:hover) .control {
    color: var(${colorNeutralForeground2BrandHover});
  }

  :host([aria-pressed='true'][appearance='transparent']:active) .control {
    color: var(${colorNeutralForeground2BrandPressed});
  }
`.withBehaviors(
  forcedColorsStylesheetBehavior(css`
    :host([aria-pressed='true']) .control,
    :host([aria-pressed='true'][appearance='primary']) .control,
    :host([aria-pressed='true'][appearance='subtle']) .control,
    :host([aria-pressed='true'][appearance='outline']) .control,
    :host([aria-pressed='true'][appearance='transparent']) .control,
    :host([aria-pressed='true'][appearance='transparent']) .control {
      background: SelectedItem;
      color: SelectedItemText;
    }
  `),
);
