import { css } from 'lit';

const baseStyle = css`
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

export const styles = [baseStyle];
