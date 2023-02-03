import { object, string, number } from "yup";

export const passwordSubmitSchema = object({
    email: string().required().email(),
    code: number().required(),
    newPassword: string().required().min(8),
});
