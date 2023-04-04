import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { PluginContract } from '@nintex/form-plugin-contract';

@customElement('form-plugin-styled-input')
export class NintexStyledInput extends LitElement {
  // Define scoped styles right with your component, in plain CSS.  See https://help.nintex.com/en-US/formplugins/Reference/Style.htm
  static styles = css` 
    .form-control {
      color: var(--ntx-form-theme-color-secondary);
      background-color: var(
        --ntx-form-theme-color-input-background,
        transparent
      );
      font-size: var(--ntx-form-theme-text-input-size);
      font-family: var(--ntx-form-theme-font-family);
      border: 1px solid var(--ntx-form-theme-color-border);
      border-radius: var(--ntx-form-theme-border-radius);
    }

    .form-control:focus {
      outline: none;
      border-color: var(--ntx-form-theme-color-primary);
    }
  `;
  @property()
  value: string = 'hello';
  @property({ type: Boolean })
  readOnly: boolean = false;  //Add a read-only mode. See https://help.nintex.com/en-US/formplugins/Reference/ReadOnly.htm

  static getMetaConfig(): Promise<PluginContract> | PluginContract {
    // plugin contract information
    return {
      controlName: 'Styled Input',
      fallbackDisableSubmit: false,
      iconUrl: 'one-line-text',
      version: '1',
      properties: { //A custom configuration field. See https://help.nintex.com/en-US/formplugins/Reference/CustomField.htm
        value: { //A custom field to store the value. 
          type: 'string',
          title: 'Value',
          /* This marks the field as the value field. Should only be defined once in the list of properties. 
             See https://help.nintex.com/en-US/formplugins/Reference/StoreValue.htm */
          isValueField: true,
          defaultValue: 'This is a text field default value',
        },
      },
      standardProperties: {
        fieldLabel: true,
        defaultValue: true,
        readOnly: true,  //Add a read-only mode. See https://help.nintex.com/en-US/formplugins/Reference/ReadOnly.htm
      },
    };
  }

  // Render the UI as a function of component state
  render() {
    return html`<input
      class="form-control"
      class="form-control"
      ?disabled="${this.readOnly}"
      @change="${(e: any) => this.onChange(e)}"
      .value="${this.value}"
    />`;
  }

  private onChange(e: any) {
    const value = e.target?.value;
    const args = {
      bubbles: true,
      cancelable: false,
      composed: true,
      detail: value,
    };
    const event = new CustomEvent('ntx-value-change', args);
    this.dispatchEvent(event);
  }
}
