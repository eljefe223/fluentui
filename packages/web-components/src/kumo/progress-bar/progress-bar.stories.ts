import { html } from '@microsoft/fast-element';
import type { Args, Meta } from '@storybook/html';
import { renderComponent } from '../../helpers.stories.js';
import { ProgressBarThickness, ProgressBarValidationState } from '../../progress-bar/progress-bar.options.js';
import type { KumoProgressBar } from './progress-bar.js';

type ProgressStoryArgs = Args & KumoProgressBar;
type ProgressStoryMeta = Meta<ProgressStoryArgs>;

const storyTemplate = html<ProgressStoryArgs>`
  <kumo-progress-bar
    thickness=${x => x.thickness}
    max=${x => x.max}
    min=${x => x.min}
    value=${x => x.value}
    validation-state=${x => x.validationState}
  ></kumo-progress-bar>
`;

export default {
  title: 'Components/Kumo/ProgressBar',
  args: {
    max: 100,
    value: 15,
    thickness: 'medium',
    validationState: null,
  },
  argTypes: {
    max: {
      control: 'number',
      defaultValue: 100,
    },
    value: {
      control: 'number',
      defaultValue: 15,
    },
    thickness: {
      control: {
        type: 'select',
      },
      options: Object.values(ProgressBarThickness),
      defaultValue: 'medium',
    },
    validationState: {
      options: Object.values(ProgressBarValidationState),
      control: {
        type: 'select',
      },
      defaultValue: null,
    },
  },
} as ProgressStoryMeta;

export const Progress = renderComponent(storyTemplate).bind({});

//
// Attribute stories
//

export const Max = renderComponent(html<ProgressStoryArgs>`
  <div>
    <p>
      <code>3 of 10</code>
      <kumo-progress-bar value="3" max="10"></kumo-progress-bar>
    </p>
    <p>
      <code>3 of 5</code>
      <kumo-progress-bar value="3" max="5"></kumo-progress-bar>
    </p>
  </div>
`);

export const Value = renderComponent(html<ProgressStoryArgs>`
  <div>
    <code>0</code><kumo-progress-bar value="0"></kumo-progress-bar>
    <code>25</code>
    <kumo-progress-bar value="25"></kumo-progress-bar>
    <code>50</code>
    <kumo-progress-bar value="50"></kumo-progress-bar>
    <code>75</code>
    <kumo-progress-bar value="75"></kumo-progress-bar>
    <code>100</code>
    <kumo-progress-bar value="100"></kumo-progress-bar>
  </div>
`);

export const Thickness = renderComponent(html<ProgressStoryArgs>`
  <div>
    <p>
      <code>medium</code>
      <kumo-progress-bar thickness="medium"></kumo-progress-bar>
    </p>
    <p>
      <code>large</code>
      <kumo-progress-bar thickness="large"></kumo-progress-bar>
    </p>
  </div>
`);

export const ValidationState = renderComponent(html<ProgressStoryArgs>`
  <div>
    <p>
      <code>success</code>
      <kumo-progress-bar validation-state="success"></kumo-progress-bar>
    </p>
    <p>
      <code>warning</code>
      <kumo-progress-bar validation-state="warning"></kumo-progress-bar>
    </p>
    <p>
      <code>error</code>
      <kumo-progress-bar validation-state="error"></kumo-progress-bar>
    </p>
  </div>
`);
