import { css, cx } from "@emotion/css";

import * as responsive from "./home.styles.responsive";
import { flex } from "@mixins";

export const section = cx(
  flex({ justify: "center", align: "center"}),
  css`
    min-height: 70vh;
    flex-direction: column;
  `,
  responsive.section
);

export const h1 = cx(
  css`
    width: 100%;
    text-align: center;
  `,
  responsive.h1
);

export const welcome = cx(
  css`
    position: relative;
    display: block;
    width: 100%;
    height: 0;
    padding: 0 0 calc(100% * 495 / 2048) 0;
    z-index: 0;
  `,
  responsive.welcome
);

export const image = cx(
  css`
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 0;
  `,
  responsive.image
);
