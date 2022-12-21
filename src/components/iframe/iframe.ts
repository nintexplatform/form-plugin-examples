import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit-html/directives/style-map.js';

@customElement('zwc-iframe')
export class ZwcIframe extends LitElement {
  static getMetaConfig() {
    // plugin contract information
    return {
      controlName: 'IFrame-new',
      fallbackDisableSubmit: false,
      description: 'IFrame component which can render url view with the frame',
      iconUrl: 'one-line-text',
      groupName: 'Visual',
      version: '1.3',
      properties: {
        src: {
          type: 'string',
          title: 'Source URL',
          description:
            'URL of the iframe, please note many sites block been rendered in iframes',
        },
        height: {
          type: 'string',
          title: 'Height',
          description: 'Height of the component',
        },
      },
      standardProperties: {
        readOnly: true,
        required: true,
        description: true,
      },
    };
  }

  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      height: 100%;
      width: 100%;
      display: block;
    }
    .frame {
      display: inline-block;
      height: 100%;
      width: 100%;
      background-color: transparent;
      border: none;
    }
  `;

  @property()
  name: string = 'Hello';

  @property()
  title: string = 'Hello';

  @property()
  src: string = 'https://stackoverflow.com/';

  @property({ type: Number })
  height: number = 500;

  // Render the UI as a function of component state
  render() {
    console.log('Props', {
      name: this.name,
      title: this.title,
      src: this.src,
      height: this.height,
    });

    let styles = { height: this.height + 'px' };

    return html`<iframe
      class="frame"
      style=${styleMap(styles)}
      .name=${this.name}
      allow="geolocation *; microphone; camera"
      .title=${this.title}
      src=${this.src}
    ></iframe>`;
  }
}
