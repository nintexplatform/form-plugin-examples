import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@material/mwc-textfield/mwc-textfield.js';
import { NintexPlugin } from '../../lib/nintex-plugin';
import { TextField } from '@material/mwc-textfield/mwc-textfield.js';

const fire = <T>(
  element: HTMLElement,
  data: {
    bubbles?: boolean;
    cancelable?: boolean;
    composed?: boolean;
    detail?: T;
  }
) => {
  const args = {
    bubbles: true,
    cancelable: false,
    composed: true,
    ...data,
  };

  const event = new CustomEvent('nintex-value-change', args);
  element.dispatchEvent(event);
  return event;
};

@customElement('zwc-textfield')
export class ZwcTextfield extends LitElement {
  static styles = css`
    :host {
      /* height: 100%; */
      width: 100%;
      display: block;

      --mdc-theme-primary: var(--ntx-form-theme-color-highlight, #f56900);
    }

    mwc-textfield {
      width: 100%;
    }
  `;
  @property()
  label!: string;
  @property()
  description!: string;
  @property({ type: Boolean })
  outlined: boolean = false;
  @property({ type: Boolean })
  disabled: boolean = false;

  static getMetaConfig(): Promise<NintexPlugin> | NintexPlugin {
    // plugin contract information
    return {
      controlName: 'Material Text field',
      fallbackDisableSubmit: false,
      iconUrl: 'one-line-text',
      version: '1',
      properties: {
        outlined: {
          type: 'boolean',
          title: 'Show Outline',
        },
        disabled: {
          type: 'boolean',
          title: 'Disabled',
        },
      },
      standardProperties: {
        fieldLabel: true,
        description: true,
      },
    };
  }

  // Render the UI as a function of component state
  render() {
    return html` <mwc-textfield
      id="textfield"
      .label="${this.label}"
      .helper="${this.description}"
      ?outlined="${this.outlined}"
      ?disabled="${this.disabled}"
      @change="${() => this.onChange()}"
    ></mwc-textfield>`;
  }

  private onChange() {
    const el = this.shadowRoot?.getElementById('textfield') as TextField;
    if (el) {
      fire<any>(this, { detail: el.value });
    }
  }
}
