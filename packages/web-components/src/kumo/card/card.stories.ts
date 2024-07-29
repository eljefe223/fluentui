import { html } from '@microsoft/fast-element';
import type { Args, Meta } from '@storybook/html';
import { renderComponent } from '../../helpers.stories.js';
import { cardStyles } from '../styles/card.partials.js';

type CardStoryArgs = Args;
type CardStoryMeta = Meta<CardStoryArgs>;

const storyTemplate = html<CardStoryArgs>`
  <style>
    .my-card {
      ${cardStyles.createCSS(() => {})}
      padding: 20px;
    }
  </style>
  <div class="my-card">test</div>
`;

export default {
  title: 'Components/Kumo/Card',
} as CardStoryMeta;

export const Card = renderComponent(storyTemplate).bind({});
