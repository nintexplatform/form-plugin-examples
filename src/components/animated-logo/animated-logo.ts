import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { animate, AnimateController, fade, flyBelow } from '@lit-labs/motion';
import { styles } from './styles';
import { PluginContract } from '@nintex/form-plugin-contract';

@customElement('form-plugin-animated-logo')
export class NintexSampleAnimatedLogo extends LitElement {
  static styles = styles;  //Add custom CSS. See https://help.nintex.com/en-US/formplugins/Reference/Style.htm

  defaultLogo = 'Logo';
  @property({ type: String }) word = this.defaultLogo;
  duration = 1000;
  controller = new AnimateController(this, {
    defaultOptions: {
      keyframeOptions: {
        duration: this.duration,
        fill: 'backwards',
      },
    },
  });

  public static getMetaConfig(): PluginContract {
    return {
      controlName: 'LIT Logo',
      fallbackDisableSubmit: false,
      version: '1',
    };
  }

  render() {
    const delayTime = this.duration / (this.word.length * 2.5);
    return html`
      ${this.word.split('')?.map(
        (letter, i) =>
          html`<span
            class="letter"
            ${animate({
              keyframeOptions: {
                delay: i * delayTime,
              },
              in: fade,
              out: flyBelow,
            })}
            >${letter}</span
          >`
      )}
    `;
  }
}
