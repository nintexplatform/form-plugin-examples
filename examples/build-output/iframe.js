import { e, i as i$1, t, x, a as i$2, _ as _decorate, s, b as e$1, y, c as e$2 } from './directive-2abd2358.js';

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i=e(class extends i$1{constructor(t$1){var e;if(super(t$1),t$1.type!==t.ATTRIBUTE||"style"!==t$1.name||(null===(e=t$1.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const s=t[r];return null==s?e:e+`${r=r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(e,[r]){const{style:s}=e.element;if(void 0===this.vt){this.vt=new Set;for(const t in r)this.vt.add(t);return this.render(r)}this.vt.forEach((t=>{null==r[t]&&(this.vt.delete(t),t.includes("-")?s.removeProperty(t):s[t]="");}));for(const t in r){const e=r[t];null!=e&&(this.vt.add(t),t.includes("-")?s.setProperty(t,e):s[t]=e);}return x}});

const baseStyle = i$2`
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

let NintexSampleIframe = _decorate([e$2('nintex-sample-iframe')], function (_initialize, _LitElement) {
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
      decorators: [e$1()],
      key: "name",
      value: void 0
    }, {
      kind: "field",
      decorators: [e$1()],
      key: "description",
      value: void 0
    }, {
      kind: "field",
      decorators: [e$1()],
      key: "src",
      value() {
        return 'https://www.wikipedia.org/';
      }
    }, {
      kind: "field",
      decorators: [e$1({
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
      style=${i(styles)}
      .name=${this.name}
      allow="geolocation *; microphone; camera"
      .title=${this.description}
      src=${this.src}
    ></iframe>`;
      }
    }]
  };
}, s);

export { NintexSampleIframe };
