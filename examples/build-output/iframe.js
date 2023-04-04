import { i, _ as _decorate, s, e, y, a as e$1 } from './query-assigned-elements-5558b813.js';
import { i as i$1 } from './style-map-82785fc5.js';
import './directive-2bb7789e.js';

const baseStyle = i`
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
const styles = [baseStyle];

let NintexSampleIframe = _decorate([e$1('form-plugin-iframe')], function (_initialize, _LitElement) {
  class NintexSampleIframe extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: NintexSampleIframe,
    d: [{
      kind: "field",
      static: true,
      key: "styles",
      value() {
        return styles;
      }
    }, {
      kind: "field",
      decorators: [e()],
      key: "name",
      value: void 0
    }, {
      kind: "field",
      decorators: [e()],
      key: "description",
      value: void 0
    }, {
      kind: "field",
      decorators: [e()],
      key: "src",
      value() {
        return 'https://www.wikipedia.org/';
      }
    }, {
      kind: "field",
      decorators: [e({
        type: Number
      })],
      key: "height",
      value() {
        return 500;
      }
    }, {
      kind: "method",
      static: true,
      key: "getMetaConfig",
      value:
      // Define scoped styles right with your component, in plain CSS

      function getMetaConfig() {
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
              description: 'URL of the iframe, please note many sites block been rendered in iframes',
              defaultValue: 'https://www.wikipedia.org/'
            },
            height: {
              type: 'string',
              title: 'Height',
              description: 'Height of the component',
              defaultValue: 500
            },
            frameTitle: {
              type: 'string',
              title: 'Frame Title',
              description: 'IFrame Title'
            }
          },
          standardProperties: {
            readOnly: true,
            required: true,
            description: true
          }
        };
      }

      // Render the UI as a function of component state
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        console.log('Props', {
          name: this.name,
          description: this.description,
          src: this.src,
          height: this.height
        });
        let styles = {
          height: this.height + 'px'
        };
        return y` <iframe
      class="frame"
      style=${i$1(styles)}
      .name="${this.name}"
      allow="geolocation *; microphone; camera"
      .title="${this.description}"
      src="${this.src}"
    ></iframe>`;
      }
    }]
  };
}, s);

export { NintexSampleIframe };
