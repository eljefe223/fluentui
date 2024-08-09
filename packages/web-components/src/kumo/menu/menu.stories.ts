import { html } from '@microsoft/fast-element';
import type { Args, Meta } from '@storybook/html';
import { renderComponent } from '../../helpers.stories.js';
import type { Menu as KumoMenu } from '../../menu/menu.js';

type MenuStoryArgs = Args & KumoMenu;
type MenuStoryMeta = Meta<MenuStoryArgs>;

const storyTemplate = html<MenuStoryArgs>`
  <style>
    .container {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  </style>
  <kumo-menu
    ?open-on-hover="${x => x.openOnHover}"
    ?open-on-context="${x => x.openOnContext}"
    ?close-on-scroll="${x => x.closeOnScroll}"
    ?persist-on-item-click="${x => x.persistOnItemClick}"
  >
    <kumo-menu-button aria-label="Toggle Menu" appearance="primary" slot="trigger">Toggle Menu</kumo-menu-button>
    <kumo-menu-list>
      <kumo-menu-item>Menu item 1</kumo-menu-item>
      <kumo-menu-item>Menu item 2</kumo-menu-item>
      <kumo-menu-item>Menu item 3</kumo-menu-item>
      <kumo-menu-item>Menu item 4</kumo-menu-item>
    </kumo-menu-list>
  </kumo-menu>
`;

export default {
  title: 'Components/Kumo/Menu',
  args: {
    openOnHover: false,
    openOnContext: false,
    closeOnScroll: false,
    persistOnItemClick: false,
  },
  argTypes: {
    openOnHover: {
      description: 'Sets whether menu opens on hover',
      table: {
        defaultValue: { summary: false },
      },
      control: 'boolean',
      defaultValue: false,
    },
    openOnContext: {
      description: 'Opens the menu on right click (context menu), removes all other menu open interactions',
      table: {
        defaultValue: { summary: false },
      },
      control: 'boolean',
      defaultValue: false,
    },
    closeOnScroll: {
      description: 'Close when scroll outside of it',
      table: {
        defaultValue: { summary: false },
      },
      control: 'boolean',
      defaultValue: false,
    },
    persistOnItemClick: {
      description: 'Prevents the menu from closing when an item is clicked',
      table: {
        defaultValue: { summary: false },
      },
      control: 'boolean',
      defaultValue: false,
    },
  },
} as MenuStoryMeta;

export const Menu = renderComponent(storyTemplate).bind({});

export const MenuOpenOnHover = renderComponent(html<MenuStoryArgs>`
  <div class="container">
    <kumo-menu open-on-hover>
      <kumo-menu-button aria-label="Toggle Menu" appearance="primary" slot="trigger">Toggle Menu</kumo-menu-button>
      <kumo-menu-list>
        <kumo-menu-item>Menu item 1</kumo-menu-item>
        <kumo-menu-item>Menu item 2</kumo-menu-item>
        <kumo-menu-item>Menu item 3</kumo-menu-item>
        <kumo-menu-item>Menu item 4</kumo-menu-item>
      </kumo-menu-list>
    </kumo-menu>
  </div>
`);

export const MenuOpenOnContext = renderComponent(html<MenuStoryArgs>`
  <div class="container">
    <kumo-menu open-on-context>
      <kumo-menu-button aria-label="Toggle Menu" appearance="primary" slot="trigger">Toggle Menu</kumo-menu-button>
      <kumo-menu-list>
        <kumo-menu-item>Menu item 1</kumo-menu-item>
        <kumo-menu-item>Menu item 2</kumo-menu-item>
        <kumo-menu-item>Menu item 3</kumo-menu-item>
        <kumo-menu-item>Menu item 4</kumo-menu-item>
      </kumo-menu-list>
    </kumo-menu>
  </div>
`);

export const MenuWithMaxHeight = renderComponent(html<MenuStoryArgs>`
  <div class="container">
    <kumo-menu style="--menu-max-height: 10rem">
      <kumo-menu-button appearance="primary" slot="trigger">Toggle Menu</kumo-menu-button>
      <kumo-menu-list>
        <kumo-menu-item>Menu item 1</kumo-menu-item>
        <kumo-menu-item>Menu item 2</kumo-menu-item>
        <kumo-menu-item>Menu item 3</kumo-menu-item>
        <kumo-menu-item>Menu item 4</kumo-menu-item>
        <kumo-menu-item>Menu item 5</kumo-menu-item>
        <kumo-menu-item>Menu item 6</kumo-menu-item>
        <kumo-menu-item>Menu item 7</kumo-menu-item>
        <kumo-menu-item>Menu item 8</kumo-menu-item>
      </kumo-menu-list>
    </kumo-menu>
  </div>
`);

export const MenuWithInteractiveItems = renderComponent(html<MenuStoryArgs>`
  <div class="container">
    <kumo-menu>
      <kumo-menu-button appearance="primary" slot="trigger">Toggle Menu</kumo-menu-button>
      <kumo-menu-list>
        <kumo-menu-item>
          Item 1
          <kumo-menu-list slot="submenu">
            <kumo-menu-item> Subitem 1 </kumo-menu-item>
            <kumo-menu-item> Subitem 2 </kumo-menu-item>
          </kumo-menu-list>
        </kumo-menu-item>

        <kumo-menu-item role="menuitemcheckbox"> Item 2 </kumo-menu-item>
        <kumo-menu-item role="menuitemcheckbox"> Item 3 </kumo-menu-item>

        <fluent-divider role="separator" aria-orientation="horizontal" orientation="horizontal"></fluent-divider>

        <kumo-menu-item>Menu item 4</kumo-menu-item>
        <kumo-menu-item>Menu item 5</kumo-menu-item>
        <kumo-menu-item>Menu item 6</kumo-menu-item>

        <kumo-menu-item>Menu item 7</kumo-menu-item>
        <kumo-menu-item>Menu item 8</kumo-menu-item>
      </kumo-menu-list>
    </kumo-menu>
  </div>
`);
