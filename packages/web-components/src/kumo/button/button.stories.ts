import { html } from '@microsoft/fast-element';
import type { Meta, Story, StoryArgs } from '../../helpers.stories.js';
import { renderComponent } from '../../helpers.stories.js';
import type { Button as FluentButton } from '../../button/button.js';
import { ButtonAppearance, ButtonShape, ButtonSize } from './button.options.js';

const storyTemplate = html<StoryArgs<FluentButton>>`
  <kumo-button
    appearance="${x => x.appearance}"
    shape="${x => x.shape}"
    size="${x => x.size}"
    ?disabled="${x => x.disabled}"
    ?disabled-focusable="${x => x.disabledFocusable}"
    ?icon-only="${x => x.iconOnly}"
    ?icon="${x => x.icon}"
  >
    ${x => x.content}
  </kumo-button>
`;

export default {
  title: 'Components/Kumo/Button/Button',
  args: {
    content: 'Button',
    disabled: false,
    disabledFocusable: false,
  },
  argTypes: {
    appearance: {
      options: Object.values(ButtonAppearance),
      control: {
        type: 'select',
      },
    },
    size: {
      options: Object.values(ButtonSize),
      control: {
        type: 'select',
      },
    },
    disabled: {
      control: 'boolean',
      table: {
        type: {
          summary: 'Sets the disabled state of the component',
        },
        defaultValue: {
          summary: 'false',
        },
      },
    },
    disabledFocusable: {
      control: 'boolean',
      table: {
        type: {
          summary: 'The component is disabled but still focusable',
        },
        defaultValue: {
          summary: 'false',
        },
      },
    },
    content: {
      control: 'Button text',
    },
  },
} as Meta<FluentButton>;

export const Button: Story<FluentButton> = renderComponent(storyTemplate).bind({});

export const Appearance: Story<FluentButton> = renderComponent(html<StoryArgs<FluentButton>>`
  <kumo-button>Default</kumo-button>
  <kumo-button appearance="primary">Primary</kumo-button>
  <kumo-button appearance="outline">Outline</kumo-button>
  <kumo-button appearance="subtle">Subtle</kumo-button>
  <kumo-button appearance="transparent">Transparent</kumo-button>
`);

export const Size: Story<FluentButton> = renderComponent(html<StoryArgs<FluentButton>>`
  <kumo-button size="medium">Medium</kumo-button>
  <kumo-button size="medium" icon>
    <svg
      fill="currentColor"
      slot="start"
      aria-hidden="true"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5 3A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9zm0 1h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5zM7 11a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zM7 7a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2z"
        fill="currentColor"
      ></path>
    </svg>
    Medium with calendar icon
  </kumo-button>
  <kumo-button size="medium" icon-only aria-label="Medium icon only button">
    <svg
      fill="currentColor"
      aria-hidden="true"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5 3A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9zm0 1h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5zM7 11a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zM7 7a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2z"
        fill="currentColor"
      ></path>
    </svg>
  </kumo-button>
  <kumo-button size="large">Large</kumo-button>
  <kumo-button size="large" icon>
    <svg
      fill="currentColor"
      slot="start"
      aria-hidden="true"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5 3A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9zm0 1h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5zM7 11a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zM7 7a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2z"
        fill="currentColor"
      ></path>
    </svg>
    Large with calendar icon
  </kumo-button>
  <kumo-button size="large" icon-only aria-label="Large icon only button">
    <svg
      fill="currentColor"
      aria-hidden="true"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5 3A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9zm0 1h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5zM7 11a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zM7 7a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2z"
        fill="currentColor"
      ></path>
    </svg>
  </kumo-button>
`);

export const Disabled: Story<FluentButton> = renderComponent(html<StoryArgs<FluentButton>>`
  <kumo-button>Enabled state</kumo-button>
  <kumo-button disabled>Disabled state</kumo-button>
  <kumo-button disabled-focusable>Disabled focusable state</kumo-button>
  <kumo-button appearance="primary">Enabled state</kumo-button>
  <kumo-button appearance="primary" disabled>Disabled state</kumo-button>
  <kumo-button appearance="primary" disabled-focusable>Disabled focusable state</kumo-button>
`);

export const WithLongText: Story<FluentButton> = renderComponent(html<StoryArgs<FluentButton>>`
  <style>
    .max-width {
      width: 280px;
    }
  </style>
  <kumo-button>Short text</kumo-button>
  <kumo-button class="max-width">Long text wraps after it hits the max width of the component</kumo-button>
`);

export const ResetAndSubmitButtonsInForm: Story<FluentButton> = renderComponent(html<StoryArgs<FluentButton>>`
  <form action="/asdf" id="myform" onreset="output.textContent = ''">
    <label>Email: <input id="input-field" name="input-field" type="email" /></label>
    <button type="submit" value="submitted" name="normalsubmit">Button Submit</button>
    <button type="reset">Button Reset</button>
    <kumo-button type="reset">Fluent Button Reset</kumo-button>
  </form>
  <kumo-button name="fluentsubmit" type="submit" value="submitted" form="myform">Fluent Button Submit</kumo-button>
  <div id="something">Div Label</div>
  <output id="output"></output>
`);
