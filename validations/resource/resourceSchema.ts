import { object, string } from "yup";

export const resourceSchema = object({
    title: string().required().min(6),
    subtitle: string().required(),
    subtitle1: string(),
    subtitle2: string(),
    description: string(),
    page: string().required(),
    section: string().required(),
});
