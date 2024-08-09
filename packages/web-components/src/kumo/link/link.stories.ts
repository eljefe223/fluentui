import { html } from '@microsoft/fast-element';
import type { Args, Meta } from '@storybook/html';
import { renderComponent } from '../../helpers.stories.js';
import type { Link as KumoLink } from '../../link/link.js';
import { LinkAppearance } from '../../link/link.options.js';

type LinkStoryArgs = Args & KumoLink;
type LinkStoryMeta = Meta<LinkStoryArgs>;

const storyTemplate = html<LinkStoryArgs>`
  <kumo-link href="${x => x.href}" appearance="${x => x.appearance}">${x => x.content}</kumo-link>
`;

export default {
  title: 'Components/Kumo/Link',
  args: {
    content: 'Link',
    href: '#',
    disabled: false,
    disabledFocusable: false,
  },
  argTypes: {
    content: {
      control: 'Anchor text',
    },
    appearance: {
      options: ['default', ...Object.values(LinkAppearance)],
      control: {
        type: 'select',
      },
    },
    href: {
      control: 'text',
    },
  },
} as LinkStoryMeta;

export const Link = renderComponent(storyTemplate).bind({});

export const Appearance = renderComponent(html<LinkStoryArgs>`
  <kumo-link href="#" appearance="subtle">Subtle</kumo-link>
`);

export const Inline = renderComponent(html<LinkStoryArgs>`
  <fluent-text
    ><p>
      This is an <kumo-link href="#" inline>inline link</kumo-link> used alongside text within the
      <code>fluent-text</code> component.
    </p></fluent-text
  >
  <p>This is an <kumo-link href="#" inline>inline link</kumo-link> used alongside a <code>p</code> element.</p>
  <h4>
    This is an <kumo-link href="#">inline link without the inline attribute</kumo-link> within a
    <code>h4</code> element. In Chromium browsers, the link inherits without the use of the
    <code>inline</code> attribute.
  </h4>
`);

export const Wrapping = renderComponent(html<LinkStoryArgs>`
  <style>
    .max-width {
      display: block;
      width: 250px;
    }
  </style>
  <p class="max-width">
    This paragraph contains a link which is very long.
    <kumo-link href="#">Kumo links wrap correctly between lines when they are very long.</kumo-link> This is because
    they are inline elements.
  </p>
`);
