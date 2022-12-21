import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@material/mwc-textfield/mwc-textfield.js';

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
  title!: string;
  @property()
  description!: string;
  @property({ type: Boolean })
  outlined: boolean = false;
  @property({ type: Boolean })
  disabled: boolean = false;

  static getMetaConfig() {
    // plugin contract information
    return {
      controlName: 'Material Text field',
      fallbackDisableSubmit: false,
      iconUrl: 'one-line-text',
      version: '1',
    };
  }

  // Render the UI as a function of component state
  render() {
    return html` <mwc-textfield
      id="textfield"
      .label="${this.title}"
      .helper="${this.description}"
      ?outlined="${this.outlined}"
      ?disabled="${this.disabled}"
      @change="${(e: any) => this.onChange(e)}"
    ></mwc-textfield>`;
  }

  private onChange(e: any) {
    const el = this.shadowRoot?.getElementById('textfield') as HTMLInputElement;
    if (el) {
      fire<any>(this, { detail: el.value });
    }
  }
}
