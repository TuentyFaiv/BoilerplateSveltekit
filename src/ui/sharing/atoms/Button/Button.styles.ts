import { css, cx } from "@emotion/css";

import * as responsive from "./Button.styles.responsive";

// types buttons
export const button = cx(
  css`
    span {
    }
    &[data-hidden="true"] {
    }
  `,
  responsive.button,
);

const gradient = cx(
  css`
    span {
    }
  `,
  responsive.gradient,
);

const outline = cx(
  css`
    span {
    }
  `,
  responsive.outline,
);

const invert = cx(
    css`
    span {
    }
  `,
  responsive.invert,
);

// sizes buttons
export const size_normal = cx(
  css`
  `,
  responsive.size_normal,
);

export const size_big = cx(
  css`
  `,
  responsive.size_big,
);

export const size_small = cx(
  css`
  `,
  responsive.size_small,
);

// text buttons
export const text_normal = cx(
  css`
  `,
  responsive.text_normal,
);

export const text_upper = cx(
  css`
  `,
  responsive.text_upper,
);

export const text_lower = cx(
  css`
  `,
  responsive.text_lower,
);

export const text_capital = cx(
  css`
  `,
  responsive.text_capital,
);

// styles buttons
export const button_gradient = cx(button, gradient);
export const button_outline = cx(button, outline);
export const button_invert = cx(button, invert);
