import { string, boolean } from "yup";

import type { SigninValues } from "@typing/services/auth";

export const SigninSchema = {
  user: string().required("required"),
  password: string().required("required"),
  remember: boolean(),
};

export const DEFAULT_SIGNIN_VALUES: SigninValues = {
  user: "",
  password: "",
  remember: false,
}
