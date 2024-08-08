import { html } from '@microsoft/fast-element';
import type { Args, Meta } from '@storybook/html';
import { renderComponent } from '../../helpers.stories.js';
import type { BaseDivider as KumoDivider } from '../../divider/divider.js';
import { DividerOrientation, DividerRole } from '../../divider/divider.options.js';

type DividerStoryArgs = Args & KumoDivider;
type DividerStoryMeta = Meta<DividerStoryArgs>;

const dividerTemplate = html<DividerStoryArgs>`
  <div>
    <kumo-divider
      align-content=${x => x.alignContent}
      appearance=${x => x.appearance}
      role=${x => x.role}
      ?inset=${x => x.inset}
      orientation=${x => x.orientation}
    >
      ${x => (x.content ? html`<h3>${x.content}</h3>` : '')}
    </kumo-divider>
  </div>
`;

const dividerSvgTemplate = html<DividerStoryArgs>`
  <div>
    <kumo-divider align-content="start" appearance="brand" role="presentation">
      <svg width="20px" height="20px" viewBox="0 0 32 33" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13 22.0312C13 21.479 12.5523 21.0312 12 21.0312C11.4477 21.0312 11 21.479 11 22.0312V25.0312C11 25.5835 11.4477 26.0312 12 26.0312C12.5523 26.0312 13 25.5835 13 25.0312V22.0312ZM16 15.0312C16.5523 15.0312 17 15.479 17 16.0312V25.0312C17 25.5835 16.5523 26.0312 16 26.0312C15.4477 26.0312 15 25.5835 15 25.0312V16.0312C15 15.479 15.4477 15.0312 16 15.0312ZM21 19.0312C21 18.479 20.5523 18.0312 20 18.0312C19.4477 18.0312 19 18.479 19 19.0312V25.0312C19 25.5835 19.4477 26.0312 20 26.0312C20.5523 26.0312 21 25.5835 21 25.0312V19.0312ZM5 5.03125C5 3.3744 6.34315 2.03125 8 2.03125H18.1716C18.9672 2.03125 19.7303 2.34732 20.2929 2.90993L26.1213 8.73836C26.6839 9.30097 27 10.064 27 10.8597V27.0312C27 28.6881 25.6569 30.0312 24 30.0312H8C6.34315 30.0312 5 28.6881 5 27.0312V5.03125ZM8 4.03125C7.44772 4.03125 7 4.47897 7 5.03125V27.0312C7 27.5835 7.44772 28.0312 8 28.0312H24C24.5523 28.0312 25 27.5835 25 27.0312V12.0312H20C18.3431 12.0312 17 10.6881 17 9.03125V4.03125H8ZM20 10.0312H24.5858L19 4.44546V9.03125C19 9.58353 19.4477 10.0312 20 10.0312Z"
          fill="currentColor"
        />
      </svg>
    </kumo-divider>
  </div>
`;

const dividerSvgVerticalTemplate = html<DividerStoryArgs>`
  <kumo-divider role=${x => x.role} ?inset=${x => x.inset} orientation="vertical">
    <svg width="20px" height="20px" viewBox="0 0 32 33" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13 22.0312C13 21.479 12.5523 21.0312 12 21.0312C11.4477 21.0312 11 21.479 11 22.0312V25.0312C11 25.5835 11.4477 26.0312 12 26.0312C12.5523 26.0312 13 25.5835 13 25.0312V22.0312ZM16 15.0312C16.5523 15.0312 17 15.479 17 16.0312V25.0312C17 25.5835 16.5523 26.0312 16 26.0312C15.4477 26.0312 15 25.5835 15 25.0312V16.0312C15 15.479 15.4477 15.0312 16 15.0312ZM21 19.0312C21 18.479 20.5523 18.0312 20 18.0312C19.4477 18.0312 19 18.479 19 19.0312V25.0312C19 25.5835 19.4477 26.0312 20 26.0312C20.5523 26.0312 21 25.5835 21 25.0312V19.0312ZM5 5.03125C5 3.3744 6.34315 2.03125 8 2.03125H18.1716C18.9672 2.03125 19.7303 2.34732 20.2929 2.90993L26.1213 8.73836C26.6839 9.30097 27 10.064 27 10.8597V27.0312C27 28.6881 25.6569 30.0312 24 30.0312H8C6.34315 30.0312 5 28.6881 5 27.0312V5.03125ZM8 4.03125C7.44772 4.03125 7 4.47897 7 5.03125V27.0312C7 27.5835 7.44772 28.0312 8 28.0312H24C24.5523 28.0312 25 27.5835 25 27.0312V12.0312H20C18.3431 12.0312 17 10.6881 17 9.03125V4.03125H8ZM20 10.0312H24.5858L19 4.44546V9.03125C19 9.58353 19.4477 10.0312 20 10.0312Z"
        fill="currentColor"
      />
    </svg>
  </kumo-divider>
`;

export default {
  title: 'Components/Kumo/Divider',
  args: {
    content: 'Section One',
    orientation: undefined,
  },
  argTypes: {
    content: {
      description: 'HTML element wrapping text  (e.g. `<h3>Section One</h3>`), Image or SVG',
      table: {
        defaultValue: {
          summary: 'empty',
        },
      },
    },
    role: {
      description: 'Set role attribute',
      table: {
        type: {
          summary: 'Inherited from FASTDivider. Aria role for the divider.',
        },
        defaultValue: {
          summary: 'separator',
        },
      },
      options: Object.values(DividerRole),
      control: {
        type: 'select',
      },
    },
    orientation: {
      description: 'Divider layout',
      table: {
        type: {
          summary:
            'Inherited from FASTDivider. Layout can be horizontal or vertical. Adds aria-orientation to component.',
        },
        defaultValue: {
          summary: undefined,
        },
      },
      options: Object.values(DividerOrientation),
      control: {
        type: 'select',
      },
    },
  },
} as DividerStoryMeta;

export const Divider = renderComponent(dividerTemplate).bind({});

//
// Attribute Stories
//

export const Content = renderComponent(html<DividerStoryArgs>`
  <kumo-divider align-content="center">
    <em>Wrap your content in an element to render</em>
  </kumo-divider>
`);

export const Role = renderComponent(html<DividerStoryArgs>`
  <div>
    <kumo-divider role="separator"><div>separator</div></kumo-divider>
    <kumo-divider role="presentation"><div>presentation</div></kumo-divider>
  </div>
`);

export const Orientation = renderComponent(html<DividerStoryArgs>`
  <div>
    <kumo-divider orientation="vertical"><div>vertical</div></kumo-divider>
    <br />
    <kumo-divider orientation="horizontal"><div>horizontal</div></kumo-divider>
  </div>
`);

//
// Extra stories - These stories are in addition to the story for each attribute.
//
export const DividerWithSvg = renderComponent(dividerSvgTemplate).bind({});
export const VerticalDividerWithSvg = renderComponent(dividerSvgVerticalTemplate).bind({});
