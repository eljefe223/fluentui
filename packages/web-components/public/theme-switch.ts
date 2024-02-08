import { teamsDarkTheme, teamsLightTheme, Theme, webDarkTheme, webLightTheme } from '@fluentui/tokens';
import { setTheme } from '@fluentui/web-components';
import * as tokens from '../src/theme/design-tokens';
import { ThemeDefinition, webLightNewTheme } from '../src/theme/set-theme';
import { NewTheme } from '../src/theme/types';
import * as tokensNew from '../src/theme/design-tokens-new';

const tokenNamesNew = Object.keys(tokensNew) as (keyof NewTheme)[];
const tokenNames = Object.keys(tokens) as (keyof Theme)[];

const themes: Record<string, ThemeDefinition> = {
  'web-light': { theme: webLightTheme, tokens, names: tokenNames },
  'web-dark': { theme: webDarkTheme, tokens, names: tokenNames },
  'teams-light': { theme: teamsLightTheme, tokens, names: tokenNames },
  'teams-dark': { theme: teamsDarkTheme, tokens, names: tokenNames },
  'web-new': { theme: webLightNewTheme, tokens: tokensNew, names: tokenNamesNew },
};

export function switchTheme(themeName: keyof typeof themes) {
  setTheme(themes[themeName]);
}
