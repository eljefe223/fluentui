import { html, repeat } from '@microsoft/fast-element';
import type { Field as FluentField } from '../../field/field.js';
import type { Meta, Story, StoryArgs } from '../../helpers.stories.js';
import { renderComponent } from '../../helpers.stories.js';
import type { RadioGroup as KumoRadioGroup } from '../../radio-group/radio-group.js';
import { RadioGroupOrientation } from '../../radio-group/radio-group.options.js';

const fieldTemplate = html<StoryArgs<FluentField>, StoryArgs<KumoRadioGroup>>`
  <fluent-field label-position="${x => x.labelPosition ?? 'after'}">
    <label slot="label" for="${(x, c) => `${c.parent.id}--${x.id}`}">${x => x.label}</label>
    <kumo-radio
      slot="input"
      id="${(x, c) => `${c.parent.id}--${x.id}`}"
      name="${(x, c) => c.parent.name}"
      ?checked="${x => x.checked}"
      ?disabled="${x => x.disabled}"
      value="${x => x.value}"
    ></kumo-radio>
  </fluent-field>
`;

const storyTemplate = html<StoryArgs<KumoRadioGroup>>`
  <fluent-field>
    <label slot="label" for="${x => x.id}">${x => x.label}</label>
    <kumo-radio-group
      slot="input"
      id="${x => x.id}"
      aria-labelledby="${x => x.id}--label"
      ?disabled=${x => x.disabled}
      ?stacked=${x => x.stacked}
      orientation=${x => x.orientation}
      name="${x => x.name}"
      value="${x => x.value}"
    >
      ${repeat(x => x.storyItems, fieldTemplate)}
    </kumo-radio-group>
  </fluent-field>
`;

export default {
  title: 'Components/Kumo/RadioGroup',
  args: {
    label: 'Favorite Fruit',
    name: 'favorite-fruit',
    storyItems: [
      { id: 'apple', label: 'Apple', value: 'apple' },
      { id: 'pear', label: 'Pear', value: 'pear' },
      { id: 'banana', label: 'Banana', value: 'banana' },
      { id: 'orange', label: 'Orange', value: 'orange' },
    ],
  },
  argTypes: {
    storyItems: {
      table: {
        disable: true,
      },
    },
    disabled: {
      control: 'boolean',
      table: {
        type: { summary: 'Sets disabled state on radio' },
        defaultValue: { summary: 'false' },
      },
    },
    orientation: {
      control: 'select',
      options: Object.values(RadioGroupOrientation),
      table: {
        type: { summary: 'Sets orientation of radio group' },
        defaultValue: { summary: RadioGroupOrientation.horizontal },
      },
    },
  },
} as Meta<KumoRadioGroup>;

export const RadioGroup: Story<KumoRadioGroup> = renderComponent(storyTemplate).bind({});
RadioGroup.args = {
  id: 'radio-group',
  orientation: RadioGroupOrientation.vertical,
};

export const LayoutHorizontal: Story<KumoRadioGroup> = RadioGroup.bind({});
LayoutHorizontal.args = {
  id: 'radio-group-horizontal',
  orientation: RadioGroupOrientation.horizontal,
};

export const LayoutHorizontalStacked: Story<KumoRadioGroup> = RadioGroup.bind({});
LayoutHorizontalStacked.args = {
  orientation: RadioGroupOrientation.horizontal,
  id: 'radio-group-horizontal-stacked',
  storyItems: [
    { id: 'apple', label: 'Apple', value: 'apple', labelPosition: 'below' },
    { id: 'pear', label: 'Pear', value: 'pear', labelPosition: 'below' },
    { id: 'banana', label: 'Banana', value: 'banana', labelPosition: 'below' },
    { id: 'orange', label: 'Orange', value: 'orange', labelPosition: 'below' },
  ],
};

export const DefaultValue: Story<KumoRadioGroup> = RadioGroup.bind({});
DefaultValue.args = {
  orientation: RadioGroupOrientation.horizontal,
  id: 'radio-group-default',
  value: 'banana',
  storyItems: [
    { id: 'apple', label: 'Apple', value: 'apple' },
    { id: 'pear', label: 'Pear', value: 'pear' },
    { id: 'banana', label: 'Banana', value: 'banana' },
    { id: 'orange', label: 'Orange', value: 'orange' },
  ],
};

export const CheckedItem: Story<KumoRadioGroup> = RadioGroup.bind({});
CheckedItem.args = {
  orientation: RadioGroupOrientation.horizontal,
  id: 'radio-group-checked',
  storyItems: [
    { id: 'apple', label: 'Apple', value: 'apple' },
    { id: 'pear', label: 'Pear', value: 'pear', checked: true },
    { id: 'banana', label: 'Banana', value: 'banana' },
    { id: 'orange', label: 'Orange', value: 'orange' },
  ],
};

export const Disabled: Story<KumoRadioGroup> = RadioGroup.bind({});
Disabled.args = {
  orientation: RadioGroupOrientation.horizontal,
  id: 'radio-group-disabled',
  disabled: true,
};

export const DisabledItems: Story<KumoRadioGroup> = RadioGroup.bind({});
DisabledItems.args = {
  orientation: RadioGroupOrientation.vertical,
  id: 'radio-group-disabled-items',
  storyItems: [
    { id: 'apple', label: 'Apple', value: 'apple' },
    { id: 'pear', label: 'Pear', value: 'pear', disabled: true },
    { id: 'banana', label: 'Banana', value: 'banana', disabled: true },
    { id: 'orange', label: 'Orange', value: 'orange' },
    { id: 'grape', label: 'Grape', value: 'grape' },
    { id: 'kiwi', label: 'Kiwi', value: 'kiwi', disabled: true },
  ],
};

export const Required: Story<KumoRadioGroup> = renderComponent(html`
  <form
    action="#"
    style="display: inline-grid; grid-template-rows: repeat(auto, 3); align-items: center; column-gap: 1ch;"
  >
    <fluent-field label-position="above" style="grid-template-rows: subgrid; grid-row: 1/4;">
      <label slot="label" for="${x => x.id}" style="grid-row: 1/2">${x => x.label}</label>
      <kumo-radio-group
        ?required="${x => x.required}"
        slot="input"
        id="${x => x.id}"
        ?disabled=${x => x.disabled}
        ?stacked=${x => x.stacked}
        orientation="${x => x.orientation}"
        name="${x => x.name}"
        value="${x => x.value}"
        style="grid-row: 2/3"
      >
        ${repeat(x => x.storyItems, fieldTemplate)}
      </kumo-radio-group>
      <fluent-text flag="value-missing" slot="message" size="200" style="grid-row: 3/4"
        >Please select a fruit.</fluent-text
      >
    </fluent-field>
    <kumo-button type="submit" appearance="primary" style="grid-row: 2/3">Submit</kumo-button>
    <kumo-button type="reset" style="grid-row: 2/3">Reset</kumo-button>
  </form>
`).bind({});
Required.args = {
  id: 'radio-group-form',
  orientation: RadioGroupOrientation.horizontal,
  required: true,
  storyItems: [
    { id: 'apple', label: 'Apple', value: 'apple' },
    { id: 'pear', label: 'Pear', value: 'pear' },
    { id: 'banana', label: 'Banana', value: 'banana' },
    { id: 'orange', label: 'Orange', value: 'orange' },
  ],
};
