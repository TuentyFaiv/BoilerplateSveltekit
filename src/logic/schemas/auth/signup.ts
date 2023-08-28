import { boolean, string } from "yup";
import { REGEX_PHONE, REGEX_PASSWORD } from "@utils/regex";

import type { SignupValues } from "@typing/services/auth";

export const SignupSchema = {
  firstName: string().min(2).max(40).required("required"),
  lastName: string().min(2).max(40).required("required"),
  country: string().required("required"),
  email: string().email("required-email").required("required"),
  phone: string().matches(REGEX_PHONE, "required-phone").required("required"),
  phoneCode: string().required("required"),
  password: string().matches(REGEX_PASSWORD, "required-pass").required("required"),
  confirmPassword: string().matches(REGEX_PASSWORD, "required-pass").required("required"),
  terms: boolean().oneOf([true], "required-terms").required("required"),
};

export const DEFAULT_SIGNUP_VALUES: SignupValues = {
  firstName: "",
  lastName: "",
  country: "",
  email: "",
  phone: "",
  phoneCode: "",
  password: "",
  confirmPassword: "",
  terms: false,
}
