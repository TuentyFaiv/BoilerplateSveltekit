import { string } from "yup";

import type { ForgotValues } from "@typing/services/auth";

export const ForgotSchema = {
  email: string().required("required"),
};

export const DEFAULT_FORGOT_VALUES: ForgotValues = {
  email: "",
}
