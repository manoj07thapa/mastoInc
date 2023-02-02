import { object, string } from "yup";

export const registerSchema = object({
    fullname: string().required().min(6).max(25),
    email: string().email().required(),
    password: string().required().min(8),
    phoneNumber: string(),
});
