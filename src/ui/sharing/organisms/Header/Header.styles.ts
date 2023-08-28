import { css, cx } from "@emotion/css";

import * as responsive from "./Header.styles.responsive";

export const header = cx(
  css`
    display: flex;
    justify-content: space-between;
  `,
  responsive.header,
);

export const corner = cx(
  css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3em;
    height: 3em;
    img {
      width: 2em;
      height: 2em;
      object-fit: contain;
      aspect-ratio: 1 / 1;
    }
  `,
  responsive.corner,
);
