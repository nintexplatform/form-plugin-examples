import { b as b$1, i as i$2, _ as _decorate, s as s$1, e as e$2, y, a as e$3 } from './query-assigned-elements-5558b813.js';
import { i as i$1, t as t$1, e as e$1 } from './directive-2bb7789e.js';
import { e } from './directive-helpers-e9e1a73e.js';

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=(i,t)=>{var e,o;const r=i._$AN;if(void 0===r)return !1;for(const i of r)null===(o=(e=i)._$AO)||void 0===o||o.call(e,t,!1),s(i,t);return !0},o=i=>{let t,e;do{if(void 0===(t=i._$AM))break;e=t._$AN,e.delete(i),i=t;}while(0===(null==e?void 0:e.size))},r$1=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(void 0===e)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),l$1(t);}};function n$1(i){void 0!==this._$AN?(o(this),this._$AM=i,r$1(this)):this._$AM=i;}function h$1(i,t=!1,e=0){const r=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(t)if(Array.isArray(r))for(let i=e;i<r.length;i++)s(r[i],!1),o(r[i]);else null!=r&&(s(r,!1),o(r));else s(this,i);}const l$1=i=>{var t,s,o,r;i.type==t$1.CHILD&&(null!==(t=(o=i)._$AP)&&void 0!==t||(o._$AP=h$1),null!==(s=(r=i)._$AQ)&&void 0!==s||(r._$AQ=n$1));};class c extends i$1{constructor(){super(...arguments),this._$AN=void 0;}_$AT(i,t,e){super._$AT(i,t,e),r$1(this),this.isConnected=i._$AU;}_$AO(i,t=!0){var e,r;i!==this.isConnected&&(this.isConnected=i,i?null===(e=this.reconnected)||void 0===e||e.call(this):null===(r=this.disconnected)||void 0===r||r.call(this)),t&&(s(this,i),o(this));}setValue(t){if(e(this._$Ct))this._$Ct._$AI(t,this);else {const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0);}}disconnected(){}reconnected(){}}

const i=new WeakMap;class t{constructor(t,s){this.startPaused=!1,this.disabled=!1,this.clients=new Set,this.pendingComplete=!1,this.host=t,this.defaultOptions=s.defaultOptions||{},this.startPaused=!!s.startPaused,this.disabled=!!s.disabled,this.onComplete=s.onComplete,i.set(this.host,this);}async add(i){var t,s;this.clients.add(i),this.startPaused&&(null===(t=i.webAnimation)||void 0===t||t.pause()),this.pendingComplete=!0,await i.finished,this.pendingComplete&&!this.isAnimating&&(this.pendingComplete=!1,null===(s=this.onComplete)||void 0===s||s.call(this));}remove(i){this.clients.delete(i);}pause(){this.clients.forEach((i=>{var t;return null===(t=i.webAnimation)||void 0===t?void 0:t.pause()}));}play(){this.clients.forEach((i=>{var t;return null===(t=i.webAnimation)||void 0===t?void 0:t.play()}));}cancel(){this.clients.forEach((i=>{var t;return null===(t=i.webAnimation)||void 0===t?void 0:t.cancel()})),this.clients.clear();}finish(){this.clients.forEach((i=>{var t;return null===(t=i.webAnimation)||void 0===t?void 0:t.finish()})),this.clients.clear();}togglePlay(){this.isPlaying?this.pause():this.play();}get isAnimating(){return this.clients.size>0}get isPlaying(){return Array.from(this.clients).some((i=>{var t;return "running"===(null===(t=i.webAnimation)||void 0===t?void 0:t.playState)}))}async finished(){await Promise.all(Array.from(this.clients).map((i=>i.finished)));}}

let h=0;const r=new Map,n=new WeakSet,a=()=>new Promise((t=>requestAnimationFrame(t))),l=[{transform:"translateY(100%) scale(0)",opacity:0}],f=[{opacity:0}],m=f,g=(t,i)=>{const s=t-i;return 0===s?void 0:s},w=(t,i)=>{const s=t/i;return 1===s?void 0:s},A={left:(t,i)=>{const s=g(t,i);return {value:s,transform:s&&`translateX(${s}px)`}},top:(t,i)=>{const s=g(t,i);return {value:s,transform:s&&`translateY(${s}px)`}},width:(t,i)=>{const s=w(t,i);return {value:s,transform:s&&`scaleX(${s})`}},height:(t,i)=>{const s=w(t,i);return {value:s,transform:s&&`scaleY(${s})`}}},b={duration:333,easing:"ease-in-out"},j=["left","top","width","height","opacity","color","background"],x=new WeakMap;class S extends c{constructor(t){if(super(t),this.t=null,this.i=null,this.o=!0,this.shouldLog=!1,t.type===t$1.CHILD)throw Error("The `animate` directive must be used in attribute position.");this.createFinished();}createFinished(){var t;null===(t=this.resolveFinished)||void 0===t||t.call(this),this.finished=new Promise((t=>{this.h=t;}));}async resolveFinished(){var t;null===(t=this.h)||void 0===t||t.call(this),this.h=void 0;}render(i){return b$1}getController(){return i.get(this.l)}isDisabled(){var t;return this.options.disabled||(null===(t=this.getController())||void 0===t?void 0:t.disabled)}update(t,[i]){var s;const e=void 0===this.l;return e&&(this.l=null===(s=t.options)||void 0===s?void 0:s.host,this.l.addController(this),this.element=t.element,x.set(this.element,this)),this.optionsOrCallback=i,(e||"function"!=typeof i)&&this.u(i),this.render(i)}u(t){var i,s;t=null!=t?t:{};const e=this.getController();void 0!==e&&((t={...e.defaultOptions,...t}).keyframeOptions={...e.defaultOptions.keyframeOptions,...t.keyframeOptions}),null!==(i=(s=t).properties)&&void 0!==i||(s.properties=j),this.options=t;}v(){const t={},i=this.element.getBoundingClientRect(),s=getComputedStyle(this.element);return this.options.properties.forEach((e=>{var o;const h=null!==(o=i[e])&&void 0!==o?o:A[e]?void 0:s[e],r=Number(h);t[e]=isNaN(r)?h+"":r;})),t}p(){let t,i=!0;return this.options.guard&&(t=this.options.guard(),i=((t,i)=>{if(Array.isArray(t)){if(Array.isArray(i)&&i.length===t.length&&t.every(((t,s)=>t===i[s])))return !1}else if(i===t)return !1;return !0})(t,this.m)),this.o=this.l.hasUpdated&&!this.isDisabled()&&!this.isAnimating()&&i&&this.element.isConnected,this.o&&(this.m=Array.isArray(t)?Array.from(t):t),this.o}hostUpdate(){var t;"function"==typeof this.optionsOrCallback&&this.u(this.optionsOrCallback()),this.p()&&(this.g=this.v(),this.t=null!==(t=this.t)&&void 0!==t?t:this.element.parentNode,this.i=this.element.nextSibling);}async hostUpdated(){if(!this.o||!this.element.isConnected||this.options.skipInitial&&!this.isHostRendered)return;let t;this.prepare(),await a;const i=this._(),s=this.A(this.options.keyframeOptions,i),e=this.v();if(void 0!==this.g){const{from:s,to:o}=this.O(this.g,e,i);this.log("measured",[this.g,e,s,o]),t=this.calculateKeyframes(s,o);}else {const s=r.get(this.options.inId);if(s){r.delete(this.options.inId);const{from:o,to:n}=this.O(s,e,i);t=this.calculateKeyframes(o,n),t=this.options.in?[{...this.options.in[0],...t[0]},...this.options.in.slice(1),t[1]]:t,h++,t.forEach((t=>t.zIndex=h));}else this.options.in&&(t=[...this.options.in,{}]);}this.animate(t,s);}resetStyles(){var t;void 0!==this.P&&(this.element.setAttribute("style",null!==(t=this.P)&&void 0!==t?t:""),this.P=void 0);}commitStyles(){var t,i;this.P=this.element.getAttribute("style"),null===(t=this.webAnimation)||void 0===t||t.commitStyles(),null===(i=this.webAnimation)||void 0===i||i.cancel();}reconnected(){}async disconnected(){var t;if(!this.o)return;if(void 0!==this.options.id&&r.set(this.options.id,this.g),void 0===this.options.out)return;if(this.prepare(),await a(),null===(t=this.t)||void 0===t?void 0:t.isConnected){const t=this.i&&this.i.parentNode===this.t?this.i:null;if(this.t.insertBefore(this.element,t),this.options.stabilizeOut){const t=this.v();this.log("stabilizing out");const i=this.g.left-t.left,s=this.g.top-t.top;!("static"===getComputedStyle(this.element).position)||0===i&&0===s||(this.element.style.position="relative"),0!==i&&(this.element.style.left=i+"px"),0!==s&&(this.element.style.top=s+"px");}}const i=this.A(this.options.keyframeOptions);await this.animate(this.options.out,i),this.element.remove();}prepare(){this.createFinished();}start(){var t,i;null===(i=(t=this.options).onStart)||void 0===i||i.call(t,this);}didFinish(t){var i,s;t&&(null===(s=(i=this.options).onComplete)||void 0===s||s.call(i,this)),this.g=void 0,this.animatingProperties=void 0,this.frames=void 0,this.resolveFinished();}_(){const t=[];for(let i=this.element.parentNode;i;i=null==i?void 0:i.parentNode){const s=x.get(i);s&&!s.isDisabled()&&s&&t.push(s);}return t}get isHostRendered(){const t=n.has(this.l);return t||this.l.updateComplete.then((()=>{n.add(this.l);})),t}A(t,i=this._()){const s={...b};return i.forEach((t=>Object.assign(s,t.options.keyframeOptions))),Object.assign(s,t),s}O(t,i,s){t={...t},i={...i};const e=s.map((t=>t.animatingProperties)).filter((t=>void 0!==t));let o=1,h=1;return void 0!==e&&(e.forEach((t=>{t.width&&(o/=t.width),t.height&&(h/=t.height);})),void 0!==t.left&&void 0!==i.left&&(t.left=o*t.left,i.left=o*i.left),void 0!==t.top&&void 0!==i.top&&(t.top=h*t.top,i.top=h*i.top)),{from:t,to:i}}calculateKeyframes(t,i,s=!1){var e;const o={},h={};let r=!1;const n={};for(const s in i){const a=t[s],l=i[s];if(s in A){const t=A[s];if(void 0===a||void 0===l)continue;const i=t(a,l);void 0!==i.transform&&(n[s]=i.value,r=!0,o.transform=`${null!==(e=o.transform)&&void 0!==e?e:""} ${i.transform}`);}else a!==l&&void 0!==a&&void 0!==l&&(r=!0,o[s]=a,h[s]=l);}return o.transformOrigin=h.transformOrigin=s?"center center":"top left",this.animatingProperties=n,r?[o,h]:void 0}async animate(t,i=this.options.keyframeOptions){this.start(),this.frames=t;let s=!1;if(!this.isAnimating()&&!this.isDisabled()&&(this.options.onFrames&&(this.frames=t=this.options.onFrames(this),this.log("modified frames",t)),void 0!==t)){this.log("animate",[t,i]),s=!0,this.webAnimation=this.element.animate(t,i);const e=this.getController();null==e||e.add(this);try{await this.webAnimation.finished;}catch(t){}null==e||e.remove(this);}return this.didFinish(s),s}isAnimating(){var t,i;return "running"===(null===(t=this.webAnimation)||void 0===t?void 0:t.playState)||(null===(i=this.webAnimation)||void 0===i?void 0:i.pending)}log(t,i){this.shouldLog&&!this.isDisabled()&&console.log(t,this.options.id,i);}}const $=e$1(S);

const styles = [i$2`
    :host {
      display: flex;
      height: 100%;
      width: 100%;
      align-items: center;
      position: relative;
      overflow: hidden;
      color: #040424;
      cursor: pointer;
    }

    .letter {
      flex: 1;
      font-size: 30vw;
      text-align: center;
      will-change: transform;
      background: linear-gradient(
        0deg,
        rgba(2, 0, 36, 1) 0%,
        rgba(9, 33, 121, 1) 35%,
        rgba(0, 212, 255, 1) 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .info {
      position: absolute;
      right: 2px;
      bottom: 2px;
    }
  `];

let NintexSampleAnimatedLogo = _decorate([e$3('form-plugin-animated-logo')], function (_initialize, _LitElement) {
  class NintexSampleAnimatedLogo extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: NintexSampleAnimatedLogo,
    d: [{
      kind: "field",
      static: true,
      key: "styles",
      value() {
        return styles;
      }
    }, {
      kind: "field",
      key: "defaultLogo",
      value() {
        return 'Logo';
      }
    }, {
      kind: "field",
      decorators: [e$2({
        type: String
      })],
      key: "word",
      value() {
        return this.defaultLogo;
      }
    }, {
      kind: "field",
      key: "duration",
      value() {
        return 1000;
      }
    }, {
      kind: "field",
      key: "controller",
      value() {
        return new t(this, {
          defaultOptions: {
            keyframeOptions: {
              duration: this.duration,
              fill: 'backwards'
            }
          }
        });
      }
    }, {
      kind: "method",
      static: true,
      key: "getMetaConfig",
      value: function getMetaConfig() {
        return {
          controlName: 'LIT Logo',
          fallbackDisableSubmit: false,
          version: '1'
        };
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const delayTime = this.duration / (this.word.length * 2.5);
        return y`
      ${this.word.split('')?.map((letter, i) => y`<span
            class="letter"
            ${$({
          keyframeOptions: {
            delay: i * delayTime
          },
          in: m,
          out: l
        })}
            >${letter}</span
          >`)}
    `;
      }
    }]
  };
}, s$1);

export { NintexSampleAnimatedLogo };
