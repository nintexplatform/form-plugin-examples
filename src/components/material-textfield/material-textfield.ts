import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@material/mwc-textfield/mwc-textfield.js';
import { NintexPlugin } from '../../lib/nintex-plugin';
import { TextField } from '@material/mwc-textfield/mwc-textfield.js';
import { styles } from './material-textfield.styles';

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

  // the event name 'nintex-value-change' is required to tell the form engine to update the value
  const event = new CustomEvent('ntx-value-change', args);
  element.dispatchEvent(event);
  return event;
};

@customElement('nintex-sample-textfield')
export class NintexSampleTextfield extends LitElement {
  static styles = styles;

  @property()
  label!: string;
  @property()
  description!: string;
  @property({ type: Boolean })
  outlined: boolean = false;
  @property({ type: Boolean })
  readOnly: boolean = false;

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
        value: {
          type: 'string',
          title: 'Value',
          // this is to mark the field as value field. it should only be defined once in the list of properties
          isValueField: true,
          defaultValue: 'This is a text field default value',
        },
      },
      standardProperties: {
        fieldLabel: true,
        description: true,
        defaultValue: true,
        readOnly: true,
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
      ?disabled="${this.readOnly}"
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
