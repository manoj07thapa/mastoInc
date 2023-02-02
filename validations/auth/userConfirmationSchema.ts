import { object, string, number } from "yup";

export const userConfirmationSchema = object({
    username: string().required(),
    code: number().required(),
});