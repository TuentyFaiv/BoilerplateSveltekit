import { string } from "yup";
import { REGEX_PHONE } from "@utils/regex";

import type { MessageValues } from "@typing/services/contact";

export const MessageSchema = {
  name: string().required("required"),
  email: string().email("required-email").required("required"),
  phone: string().matches(REGEX_PHONE, "required-phone").required("required"),
  message: string(),
};

export const DEFAULT_MESSAGE_VALUES: MessageValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};
