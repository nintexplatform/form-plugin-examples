import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Grid } from 'gridjs';
import { styles } from './grid-js.styles';

/**
 * A Simple example of using a grid library
 * https://gridjs.io/
 */
@customElement('form-plugin-grid-js')
export class NintexSampleGirdJs extends LitElement {
  static styles = styles; //Add custom CSS. See https://help.nintex.com/en-US/formplugins/Reference/Style.htm
  /**
   * Allow Grid Sorting
   */
  @property({ type: Boolean })
  sortable = false;
  /**
   * Allow Grid Pagination
   */
  @property({ type: Boolean })
  pagination = false;
  private grid?: Grid;

  static getMetaConfig() {
    // plugin contract information
    return import('./grid-js.config').then(({ config }) => {
      return config;
    });
  }

  firstUpdated() {
    this.grid = new Grid({
      columns: ['Name', 'Email', 'Phone Number'],
      data: [
        ['John', 'john@example.com', '(353) 01 222 3333'],
        ['Mark', 'mark@mail.com', '(01) 22 888 4444'],
        ['Eoin', 'eoin@mail.com', '0097 22 654 00033'],
        ['Sarah', 'sarahcdd@mail.com', '+322 876 1233'],
        ['Afshin', 'afshin@home.com', '(353) 22 87 8356'],
        ['Fred', 'fred@home.com', '(353) 44 55 3854'],
      ],

      sort: this.sortable,
      pagination: this.pagination
        ? {
            limit: 5,
          }
        : undefined,
    });

    this.grid.render(this.shadowRoot?.getElementById('js-canvas') as Element);
  }

  render() {
    if (this.grid) {
      this.grid.updateConfig({
        sort: this.sortable,
        pagination: this.pagination
          ? {
              limit: 5,
            }
          : undefined,
      });
      this.grid.forceRender();
    }

    return html` <div id="js-canvas"></div>`;
  }
}
