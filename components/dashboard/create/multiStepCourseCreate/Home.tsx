import { Field, FormikConfig, FormikValues, ErrorMessage, FormikHelpers, FormikContext, useFormikContext } from 'formik';
import { array, mixed, number, object, string, } from 'yup';
import { useRouter } from 'next/router';
import { Storage, API } from "aws-amplify";
import { createCourse } from '../../../../src/graphql/mutations'
import { FormikStepper } from "./FormikStepper";
import StepOne from './steps/StepOne';
import StepTwo from './steps/StepTwo';
import StepThree from './steps/StepThree';
import ImageUploadComponent from './steps/ImageUploadComponent';
import { ImageProps } from './steps/ImageUploadComponent';

const initialValues = {
    title: '',
    subtitle: '',
    language: "",
    price: 0,
    duration: '',
    level: "",
    time: "",
    tutor: "",
    tutorWho: "",
    category: "",
    framework: "",
    relatedSkills: [""],
    prerequisites: [""],
    courseObjectives: [""],
    syllabus: [{ topic: "", description: "", duration: "" }],
    images: []
}

const courseInfoSchema = object({
    title: string().required().min(6),
    subtitle: string().required().min(6),
    language: string().required(),
    price: number().required(),
    duration: string().required(),
    time: string().required(),
    level: string().required(),
    tutor: string().required(),
    tutorWho: string().required(),
    category: string().required(),
    framework: string().required()

})
const prerequisiteSchema = object({
    relatedSkills: array().of(string().required("related skill is required")),
    prerequisites: array().of(string().required("prerequisite is required")),
    courseObjectives: array().of(string().required("Course Objective is required")),

})
const syllabusSchema = object().shape({
    syllabus: array()
        .of(
            object().shape({
                topic: string().min(10, 'topic must contain at least 10 charachers').required('Topic is required'), // these constraints take precedence
                description: string().min(15, 'description must be at least 15 characters'), // these constraints take precedence
                duration: string(), // these constraints take precedence
            })
        )

})


function Home() {

    const router = useRouter()
    // console.log(router)
    const handleSubmit = async (values: FormikValues, actions: FormikHelpers<FormikValues>) => {
        console.log('Values', values)
        try {
            //uploading the image to s3 one at a time with the file name as the key
            const imageKeys = await Promise.all(
                values.images.map(async (file: ImageProps) => {
                    const key = await Storage.put(file.name, file);
                    return key.key;
                })
            );
            values.images = imageKeys;
            const res = await API.graphql({
                query: createCourse,
                variables: { input: values },
                authMode: "AMAZON_COGNITO_USER_POOLS",
            });
            if (res) {
                console.log("Course has been created");
            }
            console.log("RESPONSECOURSECREATION", res);
            // if (res.data.createCourse) {
            //   actions.resetForm();
            // }
        } catch (error) {
            console.log("ERROR", error);

        }

    }

    return (
        <FormikStepper
            initialValues={initialValues}
            onSubmit={handleSubmit}

        >
            {/**step1 */}
            <FormikStep label="Course Info" validationSchema={courseInfoSchema} >
                <StepOne />
            </FormikStep>
            {/**step2 */}
            <FormikStep label="Prerequisite and related skills" validationSchema={prerequisiteSchema}>
                <StepTwo />
            </FormikStep>
            {/**step 3 */}
            <FormikStep label="Syllabus" validationSchema={syllabusSchema}>
                <StepThree />
            </FormikStep>
            {/**step4  */}
            <FormikStep label="CourseImage" >
                <ImageUploadComponent />
            </FormikStep>
        </FormikStepper>

    );
}

export default Home



export interface FormikStepProps extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {
    label: string;

}

export function FormikStep({ children }: FormikStepProps) {
    return <>{children}</>;
}


