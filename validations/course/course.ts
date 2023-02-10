import { object, string, number, mixed, array } from "yup";

export const courseSchema = object({
    title: string().required().min(6),
    subtitle: string().required(),
    category: string().required(),
    price: number().required(),
    language: string().required(),
    framework: string().required(),
    tutor: string().required(),
    duration: string().required(),
    reqKnowledge: string().required(),
    level: string().required(),
    time: string().required(),
    //     files: mixed().when("isArray", {
    //       is: Array.isArray,
    //       then: array().of(string().required()),
    //       otherwise: string().required(),
    //     }),
    //     courseContent: object("course content is string and required").shape({
    //       topic: string("topic must be a string").required("topic is required"),
    //       description: string().required(),
    //       duration: string().required(),
    //     }),
});
