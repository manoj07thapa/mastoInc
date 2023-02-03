import { object, string } from "yup";

export const forgotPasswordSchema = object({
    email: string().required().email(),
});
