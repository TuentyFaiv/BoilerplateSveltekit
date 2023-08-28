import { css, cx } from "@emotion/css";

import * as responsive from "./layout.styles.responsive";

export const main = cx(
  css`
    width: 100%;
  `,
  responsive.main,
);
