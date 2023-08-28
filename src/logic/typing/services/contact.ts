import { MessageSchema } from "@schemas/contact";
import { object, type InferType } from "yup";

const schema = object(MessageSchema);
export type MessageValues = InferType<typeof schema>;