import { html } from '@microsoft/fast-element';
import type { Args, Meta } from '@storybook/html';
import { renderComponent } from '../../helpers.stories.js';
import { SpinnerAppearance, SpinnerSize } from '../../spinner/spinner.options.js';

type SpinnerStoryArgs = Args;
type SpinnerStoryMeta = Meta<SpinnerStoryArgs>;

const storyTemplate = html<SpinnerStoryArgs>`
  <kumo-spinner appearance=${x => x.appearance} size=${x => x.size}></kumo-spinner>
`;

export default {
  title: 'Components/Kumo/Spinner',
  argTypes: {
    appearance: {
      description: 'The appearance of the spinner',
      table: {
        defaultValue: { summary: 'primary' },
      },
      control: {
        type: 'select',
        options: Object.values(SpinnerAppearance),
      },
      defaultValue: 'primary',
    },
    size: {
      description: 'The size of the spinner',
      table: {
        defaultValue: { summary: 'medium' },
      },
      control: {
        type: 'select',
        options: Object.values(SpinnerSize),
      },
      defaultValue: 'medium',
    },
  },
  parameters: {
    status: {
      type: 'experimental',
    },
  },
} as SpinnerStoryMeta;

export const Spinner = renderComponent(storyTemplate).bind({});

//
// Attribute stories
//

export const Appearance = renderComponent(html<SpinnerStoryArgs>`
  <div>
    <div style="padding: 20px; display: flex; align-items: center; gap: 20px;">
      <code>primary</code>
      <kumo-spinner appearance="primary"></kumo-spinner>
    </div>
    <div
      style="padding: 20px; background-color: var(--colorNeutralBackgroundInverted); color: var(--colorNeutralForegroundInverted); display: flex; align-items: center; gap: 20px;"
    >
      <code>inverted</code>
      <kumo-spinner appearance="inverted" size="medium"></kumo-spinner>
    </div>
  </div>
`);

export const Size = renderComponent(html<SpinnerStoryArgs>`
  <div style="display: grid; align-items: center; gap: 0 20px; grid-template-columns: 120px min-content;">
    <code>tiny</code>
    <kumo-spinner size="tiny"></kumo-spinner>
    <code>extra-small</code>
    <kumo-spinner size="extra-small"></kumo-spinner>
    <code>small</code>
    <kumo-spinner size="small"></kumo-spinner>
    <code>medium</code>
    <kumo-spinner size="medium"></kumo-spinner>
    <code>large</code>
    <kumo-spinner size="large"></kumo-spinner>
    <code>extra-large</code>
    <kumo-spinner size="extra-large"></kumo-spinner>
    <code>huge</code>
    <kumo-spinner size="huge"></kumo-spinner>
  </div>
`);
