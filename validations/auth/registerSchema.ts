import { object, string } from "yup";


const phoneRegExp = /^\+[1-9]\d{1,14}$/


export const registerSchema = object({
    fullname: string().required().min(6).max(25),
    email: string().email().required(),
    password: string().required().min(8),
    phoneNumber: string().matches(phoneRegExp, 'Phone number is not valid').required(),
});
