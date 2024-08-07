import { css } from '@microsoft/fast-element';
import { display } from '../../utils/index.js';
import {
  colorNeutralForeground2,
  colorNeutralForegroundDisabled,
  spacingVerticalS,
  strokeWidthThicker,
} from '../../theme/design-tokens.js';
import { disabledState, verticalState } from '../../styles/states/index.js';
/**
 * @public
 */
export const styles = css`
  ${display('flex')}

  :host {
    --tabPaddingInline: inherit;
    --tabPaddingBlock: inherit;
    box-sizing: border-box;
    color: ${colorNeutralForeground2};
    flex-direction: row;
  }

  :host(${verticalState}) {
    flex-direction: column;
  }

  :host ::slotted([role='tab']) {
    align-items: flex-start;
  }

  :host ::slotted([slot='tab'])::after {
    height: ${strokeWidthThicker};
    margin-block-start: auto;
  }

  :host(${verticalState}) ::slotted([slot='tab'])::after {
    width: ${strokeWidthThicker};
    height: unset;
    margin-block-start: unset;
  }

  :host ::slotted([slot='tab'][aria-selected='true'])::before {
    background-color: ${colorNeutralForegroundDisabled};
  }

  :host ::slotted([slot='tab'][aria-selected='false']:hover)::after {
    height: ${strokeWidthThicker};
    margin-block-start: auto;
    transform-origin: left;
  }

  :host(${verticalState}) ::slotted([slot='tab'])::before,
  :host(${verticalState}) ::slotted([slot='tab'][aria-selected='false']:hover)::after {
    height: unset;
    width: ${strokeWidthThicker};
    margin-inline-end: auto;
    transform-origin: top;
  }

  :host(${verticalState}) ::slotted([slot='tab']) {
    padding-block: var(--tabPaddingBlock);
  }

  :host(${verticalState}) ::slotted([slot='tab']) {
    --tabPaddingBlock: ${spacingVerticalS};
  }

  /* disabled styles */
  :host(${disabledState}) {
    cursor: not-allowed;
    color: ${colorNeutralForegroundDisabled};
  }

  :host(${disabledState}) ::slotted([slot='tab']) {
    pointer-events: none;
    cursor: not-allowed;
    color: ${colorNeutralForegroundDisabled};
  }

  :host(${disabledState}) ::slotted([slot='tab']:hover):before {
    content: unset;
  }
`;
