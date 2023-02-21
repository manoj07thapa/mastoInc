import { MultipleFileUploadField } from "@/components/upload/MultiFileUploadField";
import { createResource } from "@/src/graphql/mutations";
import { Field, Form, Formik, FormikHelpers, ErrorMessage } from 'formik';
import { ResourceProps } from "@/types/types";
import { Storage, API } from "aws-amplify";
import { resourceSchema } from "@/validations/resource/resourceSchema";
import { pages, sections } from "./resourceData";
import LoadingSpinner from "@/components/utils/LoadingSpinner";
import { CreateResourceInput } from "@/types/amplifyCodegen/codegenTypes";

const CreateResource = ({ }) => {
    const initialValues: CreateResourceInput = {
        title: "",
        subtitle: "",
        subtitle1: "",
        subtitle2: "",
        images: [],
        s3ImageKeys: [],
        description: "",
        page: "",
        section: "",
    };

    const handleSubmit = async (values: CreateResourceInput, actions: FormikHelpers<CreateResourceInput>) => {
        try {
            //uploading the image to s3 one at a time with the file name as the key
            if (values.images) {
                const imageKeys = await Promise.all(
                    values.images.map(async (file) => {
                        const key = await Storage.put(file?.name, file);
                        return key.key;
                    })
                );
                values.s3ImageKeys = imageKeys;
                delete values.images
            }
            const res = (await API.graphql({
                query: createResource,
                variables: { input: values },
                authMode: "AMAZON_COGNITO_USER_POOLS",
            })) as { data: CreateResourceInput };

            if (res) {
                console.log('res', res);

                // actions.resetForm();
            }
        } catch (error) {


        }

    };

    return (
        <>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={resourceSchema}
            >
                {({ errors, isSubmitting, isValid }) => (
                    <Form className="space-y-5">
                        <div>
                            <label
                                htmlFor="title"
                                className="block pb-1 text-sm text-gray-400"
                            >
                                Title
                            </label>
                            <Field
                                name="title"
                                type="text"
                                id="title"
                                className={`${errors.title ? "field-error" : ""} field`}
                            />
                            <ErrorMessage component="p" name="title" className="fieldError" />

                        </div>
                        <div>
                            <label
                                htmlFor="subtitle"
                                className="block pb-1 text-sm text-gray-400"
                            >
                                Subtitle
                            </label>
                            <Field
                                name="subtitle"
                                type="text"
                                id="subtitle"
                                className={`${errors.subtitle && "field-error"} field`}

                            />
                            <ErrorMessage component="p" name="subtitle" className="fieldError" />

                        </div>
                        <div>
                            <label
                                htmlFor="subtitle1"
                                className="block pb-1 text-sm text-gray-400"
                            >
                                Subtitle1
                            </label>
                            <Field
                                name="subtitle1"
                                type="text"
                                id="subtitle1"
                                className={`${errors.subtitle1 && "field-error"} field`}
                            />
                            <ErrorMessage component="p" name="subtitle1" className="fieldError" />
                        </div>
                        <div>
                            <label
                                htmlFor="subtitle2"
                                className="block pb-1 text-sm text-gray-400"
                            >
                                Subtitle2
                            </label>
                            <Field
                                name="subtitle2"
                                type="text"
                                id="subtitle2"

                                className={`${errors.subtitle2 && "field-error"} field`}
                            />
                            <ErrorMessage component="p" name="subtitle2" className="fieldError" />
                        </div>
                        <div>
                            <label
                                htmlFor="description"
                                className="block pb-1 text-sm text-gray-400"
                            >
                                Description
                            </label>
                            <Field
                                name="description"
                                type="text"
                                id="description"
                                rows="4"
                                as="textarea"
                                className={`${errors.description && "field-error"} field`}
                            />
                            <ErrorMessage component="p" name="description" className="fieldError" />
                        </div>
                        <div className="sm:flex sm:space-x-4">
                            <div className="sm:w-1/2">
                                <label
                                    htmlFor="page"
                                    className="block pb-1 text-sm text-gray-400"
                                >
                                    Page
                                </label>
                                <Field
                                    as="select"
                                    name="page"
                                    type="text"
                                    id="page"
                                    className={` field ${errors.page && "field-error"}`}
                                >
                                    {pages.map((option) => (
                                        <option key={option.key} value={option.value} className="py-3 space-y-1 rounded-md shadow bg-slate-800 text-slate-200 ">
                                            {option.key}
                                        </option>
                                    ))}
                                </Field>
                                <ErrorMessage component="p" name="page" className="fieldError" />
                            </div>
                            <div className="sm:w-1/2">
                                <label
                                    htmlFor="section"
                                    className="block pb-1 text-sm text-gray-400"
                                >
                                    Section
                                </label>
                                <Field
                                    as="select"
                                    name="section"
                                    type="text"
                                    id="section"
                                    className={` field ${errors.section && "field-error"}`}
                                >
                                    {sections.map((option) => (
                                        <option key={option.key} value={option.value} className="py-3 space-y-1 rounded-md shadow bg-slate-800 text-slate-200 ">
                                            {option.key}
                                        </option>
                                    ))}
                                </Field>
                                <ErrorMessage component="p" name="section" className="fieldError" />
                            </div>
                        </div>

                        <div className="py-4 mt-6 border border-pink-600 border-dashed rounded-md shadow px-7">
                            <MultipleFileUploadField />
                        </div>

                        <div className="mt-12">
                            <button
                                disabled={isSubmitting || !isValid}
                                type="submit"
                                className={`${isSubmitting ? "bg-slate-600" : ""
                                    }  text-medium w-full rounded-md bg-pink-500 px-7 py-4 font-semibold uppercase  tracking-wider text-white hover:bg-pink-600 `}
                            >
                                {isSubmitting ? <LoadingSpinner /> : "Submit"}
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
}
export default CreateResource;