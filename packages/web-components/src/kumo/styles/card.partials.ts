import { css } from '@microsoft/fast-element';
import { colorNeutralStroke1 } from '../../theme/design-tokens.js';

export const cardStyles = css.partial`
  box-sizing: border-box;
  border-radius: 24px;
  display: flex;
  width: 100%;
  border: 1px solid ${colorNeutralStroke1};
  padding: 20px;
`;
