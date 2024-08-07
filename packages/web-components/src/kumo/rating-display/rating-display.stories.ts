import { html } from '@microsoft/fast-element';
import type { Meta, Story, StoryArgs } from '../../helpers.stories.js';
import { renderComponent } from '../../helpers.stories.js';
import type { BaseRatingDisplay as KumoRatingDisplay } from '../../rating-display/rating-display.js';

const storyTemplate = html<StoryArgs<KumoRatingDisplay>>`
  <kumo-rating-display count=${x => x.count} max=${x => x.max} value=${x => x.value}> </kumo-rating-display>
`;

export default {
  title: 'Components/Kumo/Rating Display',
  argTypes: {
    count: {
      control: 'number',
      table: {
        type: {
          summary: 'The number of ratings',
        },
      },
    },
    max: {
      control: 'number',
      table: {
        type: {
          summary: 'The maximum possible value of the rating. This attribute determines the number of icons displayed.',
        },
        defaultValue: {
          summary: '5',
        },
      },
    },
    value: {
      control: 'number',
      table: {
        type: {
          summary: 'The value of the rating',
        },
        defaultValue: {
          summary: '0',
        },
      },
    },
  },
} as Meta<KumoRatingDisplay>;

export const RatingDisplay: Story<KumoRatingDisplay> = renderComponent(storyTemplate).bind({});
RatingDisplay.args = {
  value: 3.5,
};

export const Count: Story<KumoRatingDisplay> = renderComponent(html<StoryArgs<KumoRatingDisplay>>`
  <kumo-rating-display value="4" count="3391"></kumo-rating-display>
`);

export const Max: Story<KumoRatingDisplay> = renderComponent(html<StoryArgs<KumoRatingDisplay>>`
  <kumo-rating-display value="8.6" max="10"></kumo-rating-display>
`);
