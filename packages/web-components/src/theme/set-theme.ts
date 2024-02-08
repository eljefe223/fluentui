import type { Theme } from '@fluentui/tokens';
import type { NewTheme } from './types.js';
import * as tokens from './design-tokens.js';
import {
  generateFontFamilies,
  generateFontSizes,
  generateFontWeights,
  generateLayoutTokens,
  generateLineHeights,
  generateNewColorTokens,
  generateShadowTokens,
  generateStrokeWidths,
  generateThrowAway,
} from './new-tokens/lightTheme.js';

export const webLightNewTheme: NewTheme = {
  ...generateNewColorTokens(),
  ...generateFontSizes(),
  ...generateLineHeights(),
  ...generateFontWeights(),
  ...generateFontFamilies(),
  ...generateStrokeWidths(),
  ...generateLayoutTokens(),
  ...generateThrowAway(),
  ...generateShadowTokens(),
};

const tokenNames = Object.keys(tokens) as (keyof Theme)[];

export interface ThemeDefinition {
  theme: any;
  tokens: any;
  names: any;
}

let oldProperties: Array<string>;
/**
 * Sets the theme tokens on defaultNode.
 * @param theme Flat object of theme token values.
 */
export const setTheme = (themeDefinition: ThemeDefinition) => {
  if (oldProperties) {
    for (const t of oldProperties) {
      document.body.style.removeProperty(t);
    }
  } else {
    oldProperties = [];
  }
  for (const t of themeDefinition.names) {
    oldProperties.push(themeDefinition.tokens[t] as string);
    document.body.style.setProperty(themeDefinition.tokens[t] as string, themeDefinition.theme[t] as string);
  }
};

export const setThemeFor = (element: HTMLElement, theme: Theme) => {
  for (const t of tokenNames) {
    element.style.setProperty(tokens[t] as string, theme[t] as string);
  }
};
