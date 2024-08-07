import { html } from '@microsoft/fast-element';
import type { Args, Meta } from '@storybook/html';
import { renderComponent } from '../../helpers.stories.js';
import { TablistOrientation } from '../../tablist/tablist.options.js';
import type { BaseTablist as KumoTablist } from '../../tablist/tablist.js';

type TablistStoryArgs = Args & KumoTablist;
type TablistStoryMeta = Meta<TablistStoryArgs>;

const tabIds = ['first-tab', 'second-tab', 'third-tab', 'fourth-tab'];

function changeTab() {
  const tablist = document.querySelector('kumo-tablist') as KumoTablist;
  const panelPlaceholder = document.querySelector('#panel-placeholder')!;
  // there's a million ways to do this, but this is the simplest
  panelPlaceholder.innerHTML = `
  <div role="tabpanel" aria-labelledby="tablist.activeid">
    Tab changed to ${tablist.activeid}
  </div>`;
}

const tabsDefault = html`
  <style>
    #demo-layout {
      display: grid;
      gap: 1rem;
    }
    #demo-layout:has(kumo-tablist[orientation='vertical']) {
      grid-template-columns: max-content 1fr;
    }
  </style>
  <div id="demo-layout">
    <kumo-tablist
      orientation=${x => x.orientation}
      ?disabled=${x => x.disabled}
      activeid=${x => x.activeid}
      @change="${() => changeTab()}"
    >
      <kumo-tab id=${tabIds[0]}> First Tab </kumo-tab>
      <kumo-tab id=${tabIds[1]}> Second Tab</kumo-tab>
      <kumo-tab id=${tabIds[2]}> Third Tab</kumo-tab>
      <kumo-tab id=${tabIds[3]}> Fourth Tab</kumo-tab>
    </kumo-tablist>

    <div id="panel-placeholder"></div>
  </div>
`;
export const TablistDefault = renderComponent(tabsDefault).bind({});

const tabsHorizontal = html`
  <kumo-tablist orientation="horizontal">
    <kumo-tab> First Tab </kumo-tab>
    <kumo-tab> Second Tab</kumo-tab>
    <kumo-tab> Third Tab</kumo-tab>
    <kumo-tab> Fourth Tab</kumo-tab>
  </kumo-tablist>
`;
export const TablistHorizontal = renderComponent(tabsHorizontal).bind({});

const tabsVertical = html`
  <kumo-tablist orientation="vertical">
    <kumo-tab> First Tab </kumo-tab>
    <kumo-tab> Second Tab</kumo-tab>
    <kumo-tab> Third Tab</kumo-tab>
    <kumo-tab> Fourth Tab</kumo-tab>
  </kumo-tablist>
`;
export const TablistVertical = renderComponent(tabsVertical).bind({});

const tabsDisabledTablist = html`
  <kumo-tablist disabled>
    <kumo-tab> First Tab </kumo-tab>
    <kumo-tab> Second Tab</kumo-tab>
    <kumo-tab> Third Tab</kumo-tab>
    <kumo-tab> Fourth Tab</kumo-tab>
  </kumo-tablist>
  <kumo-tablist>
    <kumo-tab> First Tab </kumo-tab>
    <kumo-tab disabled> Second Tab</kumo-tab>
    <kumo-tab> Third Tab</kumo-tab>
    <kumo-tab> Fourth Tab</kumo-tab>
  </kumo-tablist>
`;
export const TablistDisabled = renderComponent(tabsDisabledTablist).bind({});

const tabsSizeMedium = html`
  <kumo-tablist size="medium">
    <kumo-tab> First Tab </kumo-tab>
    <kumo-tab> Second Tab</kumo-tab>
    <kumo-tab> Third Tab</kumo-tab>
    <kumo-tab> Fourth Tab</kumo-tab>
  </kumo-tablist>
  <br />
  <kumo-tablist size="medium" orientation="vertical">
    <kumo-tab> First Tab </kumo-tab>
    <kumo-tab> Second Tab</kumo-tab>
    <kumo-tab> Third Tab</kumo-tab>
    <kumo-tab> Fourth Tab</kumo-tab>
  </kumo-tablist>
`;
export const TablistSizeMedium = renderComponent(tabsSizeMedium).bind({});

const rtl = html`
  <div dir="rtl">
    <kumo-tablist>
      <kumo-tab> First Tab </kumo-tab>
      <kumo-tab> Second Tab</kumo-tab>
      <kumo-tab> Third Tab</kumo-tab>
      <kumo-tab> Fourth Tab</kumo-tab>
    </kumo-tablist>
    <br />
    <kumo-tablist orientation="vertical">
      <kumo-tab> First Tab </kumo-tab>
      <kumo-tab> Second Tab</kumo-tab>
      <kumo-tab> Third Tab</kumo-tab>
      <kumo-tab> Fourth Tab</kumo-tab>
    </kumo-tablist>
  </div>
`;
export const RTL = renderComponent(rtl).bind({});

export default {
  title: 'Components/Kumo/Tablist',
  args: {
    disabled: false,
    orientation: 'horizontal',
  },
  argTypes: {
    activeid: {
      options: tabIds,
      defaultValue: tabIds[0],
      control: { type: 'select' },
    },
    disabled: {
      options: [true, false],
      defaultValue: false,
      control: { type: 'select' },
    },
    orientation: {
      options: Object.values(TablistOrientation),
      defaultValue: TablistOrientation.horizontal,
      control: { type: 'select' },
    },
  },
} as TablistStoryMeta;
