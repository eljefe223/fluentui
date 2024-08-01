import { html, repeat } from '@microsoft/fast-element';
import { uniqueId } from '@microsoft/fast-web-utilities';
import type { Meta, Story, StoryArgs } from '../../helpers.stories.js';
import { renderComponent } from '../../helpers.stories.js';
import { colorStatusDangerForeground1, colorStatusSuccessBackground3 } from '../../theme/design-tokens.js';
import type { TextInput as FluentTextInput } from '../../text-input/text-input.js';
import { ValidationFlags } from '../../field/field.options.js';
import type { KumoField } from './field.js';
import { KumoLabelPosition } from './field.options.js';

const SuccessIcon = html.partial(/* html */ `
  <svg fill="${colorStatusSuccessBackground3}" aria-hidden="true" width="1em" height="1em" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 6a5 5 0 1 1 10 0A5 5 0 0 1 1 6Zm7.35-.9a.5.5 0 1 0-.7-.7L5.5 6.54 4.35 5.4a.5.5 0 1 0-.7.7l1.5 1.5c.2.2.5.2.7 0l2.5-2.5Z" fill="${colorStatusSuccessBackground3}" />
  </svg>
`);

export const storyTemplate = html<StoryArgs<KumoField>>`
  <kumo-field label-position="${x => x.labelPosition}">
    <label slot="label" for="${x => x.id}">${x => x.label}</label>
    ${x => x.storyContent}
    ${repeat(
      x => x.messages,
      html`
        <fluent-text slot="message" flag="${x => x.flag}" size="200">${SuccessIcon} ${x => x.message}</fluent-text>
      `,
    )}
  </kumo-field>
`;

export default {
  title: 'Components/Kumo/Field',
  excludeStories: ['storyTemplate'],
  args: {
    label: 'Example',
    id: uniqueId('field-'),
    storyContent: html`<fluent-text-input slot="input" id="${x => x.id}"></fluent-text-input>`,
    labelPosition: KumoLabelPosition.after,
  },
  argTypes: {
    label: { table: { disable: true } },
    storyContent: { table: { disable: true } },
    messages: { table: { disable: true } },
    id: { table: { disable: true } },
    labelPosition: {
      description: 'Sets the position of the label relative to the input',
      control: 'select',
      table: {
        defaultValue: { summary: KumoLabelPosition.after },
      },
      options: Object.values(KumoLabelPosition),
    },
  },
} as Meta<KumoField>;

export const Field: Story<KumoField> = renderComponent(storyTemplate).bind({});
Field.args = {
  messages: [
    {
      message: 'This is a success message',
      icon: SuccessIcon,
    },
  ],
};

export const LabelPositions: Story<KumoField> = renderComponent(html<StoryArgs<KumoField>>`
  ${repeat(
    x => x.storyItems,
    html`
      <div>
        <kumo-field label-position="${x => x.labelPosition}">
          <label slot="label" for="${x => x.id}">${x => x.label}</label>
          <fluent-text-input slot="input" id="${x => x.id}"></fluent-text-input
        ></kumo-field>
      </div>
      <br />
    `,
  )}
`).bind({});
LabelPositions.args = {
  label: 'Label position',
  id: uniqueId('field-'),
  storyItems: Object.values(KumoLabelPosition).map(labelPosition => ({
    labelPosition,
    label: `Label position: ${labelPosition}`,
    id: uniqueId('field-'),
  })),
};

export const Required: Story<KumoField> = renderComponent(storyTemplate).bind({});
Required.args = {
  id: uniqueId('field-'),
  storyContent: html`<fluent-text-input required slot="input" id="${x => x.id}"></fluent-text-input>`,
  label: 'Required field',
};

export const DisabledControl: Story<KumoField> = renderComponent(storyTemplate).bind({});
DisabledControl.args = {
  id: uniqueId('field-'),
  storyContent: html`<fluent-text-input disabled slot="input" id="${x => x.id}"></fluent-text-input>`,
  label: 'Disabled field',
};

export const ValidationMessage: Story<KumoField> = renderComponent(html<StoryArgs<KumoField>>`
  <form id="validation-messages-form" action="#" style="display:flex;flex-flow:column;align-items:start;gap:10px;">
    <kumo-field>
      <label slot="label" for="field-required">Required</label>
      <fluent-text-input required slot="input" id="field-required"></fluent-text-input>
      <fluent-text slot="message" flag="value-missing" size="200" style="color: ${colorStatusDangerForeground1}">
        This field is required.
      </fluent-text>
    </kumo-field>
    <kumo-field>
      <label slot="label" for="field-pattern-mismatch">Unique ID</label>
      <fluent-text-input
        pattern="\\w+"
        slot="input"
        id="field-pattern-mismatch"
        value="Cool Username 123"
      ></fluent-text-input>
      <fluent-text slot="message" flag="pattern-mismatch" size="200" style="color: ${colorStatusDangerForeground1}">
        <span style="vertical-align: middle">Only letters and numbers please, spaces not allowed</span>
      </fluent-text>
    </kumo-field>
    <kumo-field>
      <label slot="label" for="field-too-long">Too Long</label>
      <fluent-text-input maxlength="5" value="123456789" slot="input" id="field-too-long"></fluent-text-input>
      <fluent-text slot="message" flag="too-long" size="200" style="color: ${colorStatusDangerForeground1}">
        This value is too long.
      </fluent-text>
    </kumo-field>
    <kumo-field>
      <label slot="label" for="field-too-short">Too Short</label>
      <fluent-text-input minlength="5" value="123" slot="input" id="field-too-short"></fluent-text-input>
      <fluent-text slot="message" flag="too-short" size="200" style="color: ${colorStatusDangerForeground1}">
        This value is too short.
      </fluent-text>
    </kumo-field>
    <kumo-field>
      <label slot="label" for="field-range-overflow">Range Overflow</label>
      <fluent-text-input type="number" max="5" value="7" slot="input" id="field-range-overflow"></fluent-text-input>
      <fluent-text slot="message" flag="range-overflow" size="200" style="color: ${colorStatusDangerForeground1}">
        This value must be less than 5.
      </fluent-text>
    </kumo-field>
    <kumo-field>
      <label slot="label" for="field-range-underflow">Range Underflow</label>
      <fluent-text-input type="number" min="5" value="3" slot="input" id="field-range-underflow"></fluent-text-input>
      <fluent-text slot="message" flag="range-underflow" size="200" style="color: ${colorStatusDangerForeground1}">
        This value must be greater than 5.
      </fluent-text>
    </kumo-field>
    <kumo-field>
      <label slot="label" for="field-step-mismatch">Step Mismatch</label>
      <fluent-text-input type="number" step="5" value="0" slot="input" id="field-step-mismatch"></fluent-text-input>
      <fluent-text slot="message" flag="step-mismatch" size="200" style="color: ${colorStatusDangerForeground1}">
        This value must be a multiple of 5.
      </fluent-text>
    </kumo-field>
    <kumo-field>
      <label slot="label" for="field-type-mismatch">Type Mismatch</label>
      <fluent-text-input value="not an email" type="email" slot="input" id="field-type-mismatch"></fluent-text-input>
      <fluent-text slot="message" flag="type-mismatch" size="200" style="color: ${colorStatusDangerForeground1}">
        This value is not a valid email address.
      </fluent-text>
    </kumo-field>
  </form>
`).bind({});
ValidationMessage.decorators = [
  Story => {
    setTimeout(() => {
      const flags = Object.fromEntries(Object.entries(ValidationFlags).map(a => a.reverse()));

      document
        .getElementById('validation-messages-form')
        ?.querySelectorAll<KumoField>('kumo-field')
        .forEach(field => {
          const message = field.querySelector<FluentTextInput>('fluent-text');
          field.input?.setValidity?.(
            { [flags[message!.getAttribute('flag') as ValidationFlags]]: true },
            message!.textContent!,
          );
          field.input?.checkValidity();
        });
    }, 0);

    return Story();
  },
];

export const Hint: Story<KumoField> = renderComponent(storyTemplate).bind({});
Hint.args = {
  id: uniqueId('field-'),
  messages: [{ message: 'Hint text' }],
  label: 'Hint text',
};

export const ComponentExamples: Story<KumoField> = renderComponent(html`
  <div style="display: flex; flex-direction: column; gap: 10px;">
    <kumo-field label-position="before">
      <label slot="label" for="field-text">Text Input</label>
      <fluent-text-input slot="input" id="field-text"></fluent-text-input>
    </kumo-field>
    <kumo-field label-position="before" style="max-width: 400px">
      <label slot="label" for="field-slider">Slider</label>
      <fluent-slider size="medium" slot="input" id="field-slider"></fluent-slider>
    </kumo-field>
    <kumo-field label-position="after">
      <label slot="label" for="field-checkbox">Checkbox</label>
      <kumo-checkbox slot="input" id="field-checkbox"></kumo-checkbox>
    </kumo-field>
    <kumo-field label-position="after">
      <label slot="label" for="field-radio">Radio Group</label>
      <kumo-radio-group slot="input" name="field-radio" orientation="vertical">
        <kumo-radio value="Apple">Apple</kumo-radio>
        <kumo-radio value="pear">Pear</kumo-radio>
        <kumo-radio value="banana">Banana</kumo-radio>
        <kumo-radio value="orange">Orange</kumo-radio>
      </kumo-radio-group>
    </kumo-field>
  </div>
`).bind({});

export const ThirdPartyControls: Story<KumoField> = renderComponent(html`
  <form action="#" style="display:flex;flex-flow:column;align-items:start;gap:10px">
    <kumo-field label-position="after" style="max-width: 400px">
      <label slot="label" for="native-text-input">Text Input</label>
      <input slot="input" id="native-text-input" required />
    </kumo-field>
    <kumo-field label-position="before">
      <label slot="label" for="native-checkbox">Checkbox</label>
      <input slot="input" type="checkbox" id="native-checkbox" />
    </kumo-field>
  </form>
`).bind({});
