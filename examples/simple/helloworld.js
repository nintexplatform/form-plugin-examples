import { html,LitElement} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
​
// define the component
export class HelloWorld extends LitElement {
  // return a promise for contract changes.
  static async getMetaConfig() {
    return {
      controlName: 'Hello World',
      fallbackDisableSubmit: false,
      version: '1.2',
    };
  }
​
  render() {
    return html`<input placeholder="Hello World" />`;
  }
}
​
// registering the web component
const elementName = 'hello-world';
customElements.define(elementName, HelloWorld);
