import { ElementViewTemplate, html } from '@microsoft/fast-element';
import type { Radio } from '../../radio/radio.js';

const checkedIndicator = html.partial(/* html */ `
    <span part="checked-indicator" class="checked-indicator" role="presentation"></span>
`);

/**
 * Generates a template for the {@link (Radio:class)} component.
 *
 * @param options - Radio configuration options
 * @public
 */
export function radioTemplate<T extends Radio>(): ElementViewTemplate<T> {
  return html<T>`
    <template
      @click="${(x, c) => x.clickHandler(c.event as MouseEvent)}"
      @keydown="${(x, c) => x.keydownHandler(c.event as KeyboardEvent)}"
      @keyup="${(x, c) => x.keyupHandler(c.event as KeyboardEvent)}"
    >
      ${checkedIndicator}
    </template>
  `;
}

/**
 * Template for the Radio component
 *
 * @public
 */
export const template: ElementViewTemplate<Radio> = radioTemplate();
