import { css } from 'lit';

export const resetCss = css`
  :host {
    all: initial;
    font: normal normal normal 14px/19px 'Open Sans', helvetica, arial,
      sans-serif;

    color: var(--nx-text-color, #161718);
    display: block;
  }
`;

const baseStyle = css`
  :host {
    display: block;
  }

  .chart-container {
    width: 100%;
    height: 100%;
    min-height: 100px;
  }
`;

export const styles = [resetCss, baseStyle];
