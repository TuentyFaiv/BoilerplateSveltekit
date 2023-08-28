import { ForgotSchema, SigninSchema, SignupSchema } from "@schemas/auth";
import { object, type InferType } from "yup";

const forgotSchema = object(ForgotSchema);
export type ForgotValues = InferType<typeof forgotSchema>;

const signinSchema = object(SigninSchema);
export type SigninValues = InferType<typeof signinSchema>;

const signupSchema = object(SignupSchema);
export type SignupValues = InferType<typeof signupSchema>;
