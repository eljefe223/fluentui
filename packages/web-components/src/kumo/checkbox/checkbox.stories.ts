import { html, repeat } from '@microsoft/fast-element';
import { uniqueId } from '@microsoft/fast-web-utilities';
import { LabelPosition, ValidationFlags } from '../../field/field.options.js';
import { Meta, renderComponent, Story, StoryArgs } from '../../helpers.stories.js';
import { KumoCheckbox } from './checkbox.js';

const storyTemplate = html<StoryArgs<KumoCheckbox>>`
  <kumo-checkbox
    ?checked="${x => x.checked}"
    ?disabled="${x => x.disabled}"
    id="${x => x.id}"
    :indeterminate="${x => x.indeterminate}"
    name="${x => x.name}"
    ?required="${x => x.required}"
    shape="${x => x.shape}"
    size="${x => x.size}"
    slot="${x => x.slot}"
  ></kumo-checkbox>
`;

const messageTemplate = html`
  <fluent-text slot="message" size="200" flag="${x => x.flag}">
    <span>${x => x.message}</span>
  </fluent-text>
`;

const fieldStoryTemplate = html<StoryArgs<KumoCheckbox>>`
  <fluent-field label-position="${x => x.labelPosition}">
    <label slot="label" for="${x => x.id}">${x => x.label}</label>
    ${x => x.storyContent} ${repeat(x => x.messages, messageTemplate)}
  </fluent-field>
`;

export default {
  title: 'Components/Kumo/Checkbox',
  args: {
    name: 'checkbox',
  },
  argTypes: {
    checked: {
      description: 'Sets the checked state of the checkbox',
      control: 'boolean',
    },
    disabled: {
      description: 'Sets the disabled state of the checkbox',
      control: 'boolean',
    },
    indeterminate: {
      description: 'Sets the indeterminate state of the checkbox',
      control: 'boolean',
    },
    required: {
      description: 'Sets the checkbox as required',
      control: 'boolean',
    },
  },
} as Meta<KumoCheckbox>;

export const Checkbox: Story<KumoCheckbox> = renderComponent(storyTemplate).bind({});
Checkbox.args = {
  id: uniqueId('checkbox-'),
};

export const Checked: Story<KumoCheckbox> = renderComponent(html<StoryArgs<KumoCheckbox>>`
  ${repeat(x => x.storyContent, html<StoryArgs<KumoCheckbox>>`${fieldStoryTemplate}<br />`)}
`).bind({});
Checked.args = {
  storyContent: [
    {
      storyContent: storyTemplate,
      slot: 'input',
      labelPosition: LabelPosition.after,
      id: uniqueId('checkbox-'),
      checked: true,
      label: 'Checked (default)',
    },
  ],
};

export const Indeterminate: Story<KumoCheckbox> = renderComponent(html<StoryArgs<KumoCheckbox>>`
  ${repeat(x => x.storyContent, html<StoryArgs<KumoCheckbox>>`${fieldStoryTemplate}<br />`)}
`).bind({});
Indeterminate.args = {
  storyContent: [
    {
      storyContent: storyTemplate,
      id: uniqueId('checkbox-'),
      indeterminate: true,
      label: 'Indeterminate (default)',
      labelPosition: LabelPosition.after,
      slot: 'input',
    },
  ],
};

export const Disabled: Story<KumoCheckbox> = renderComponent(html<StoryArgs<KumoCheckbox>>`
  ${repeat(x => x.storyContent, html<StoryArgs<KumoCheckbox>>`${fieldStoryTemplate}<br />`)}
`).bind({});
Disabled.args = {
  storyContent: [
    {
      storyContent: storyTemplate,
      id: uniqueId('checkbox-'),
      disabled: true,
      label: 'Disabled unchecked',
      labelPosition: LabelPosition.after,
      slot: 'input',
    },
    {
      storyContent: storyTemplate,
      checked: true,
      disabled: true,
      id: uniqueId('checkbox-'),
      label: 'Disabled checked',
      labelPosition: LabelPosition.after,
      slot: 'input',
    },
    {
      storyContent: storyTemplate,
      disabled: true,
      id: uniqueId('checkbox-'),
      indeterminate: true,
      label: 'Disabled indeterminate',
      labelPosition: LabelPosition.after,
      slot: 'input',
    },
  ],
};

export const Required: Story<KumoCheckbox> = renderComponent(html<StoryArgs<KumoCheckbox>>`
  <form style="display: inline-flex; gap: 1em; align-items: baseline">
    <div>
      <kumo-checkbox id="required-kumo-checkbox" required></kumo-checkbox>
      <label for="required-kumo-checkbox">Required</label>
    </div>
    ${fieldStoryTemplate}
    <kumo-button type="submit">Submit</kumo-button>
  </form>
`).bind({});
Required.args = {
  storyContent: storyTemplate,
  slot: 'input',
  labelPosition: LabelPosition.after,
  id: uniqueId('checkbox-'),
  required: true,
  label: 'Required',
  messages: [{ message: 'This field is required', flag: ValidationFlags.valueMissing }],
};

export const LabelBefore: Story<KumoCheckbox> = renderComponent(fieldStoryTemplate).bind({});
LabelBefore.args = {
  storyContent: storyTemplate,
  id: uniqueId('checkbox-'),
  labelPosition: LabelPosition.before,
  label: 'Label before',
  slot: 'input',
};

export const LabelWrapping: Story<KumoCheckbox> = renderComponent(fieldStoryTemplate).bind({});
LabelWrapping.args = {
  storyContent: storyTemplate,
  id: uniqueId('checkbox-'),
  labelPosition: LabelPosition.after,
  label: 'Here is an example of a checkbox with a long label and it starts to wrap to a second line',
  slot: 'input',
};
LabelWrapping.decorators = [
  story => {
    const storyElement = story() as HTMLElement;
    storyElement.style.width = '400px';
    return storyElement;
  },
];
