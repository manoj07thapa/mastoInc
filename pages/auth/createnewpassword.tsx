import { Fragment } from "react";
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { Auth } from "aws-amplify";
import { useRouter } from "next/router";
import Head from "next/head";
import { passwordSubmitSchema } from "../../validations/auth/passwordSubmitSchema";


type NewPasswordSubmitProps = {
    email: string,
    code: string,
    newPassword: string
}
function CreateNewPassword() {
    const router = useRouter();
    const initialValues: NewPasswordSubmitProps = {
        email: "",
        code: "",
        newPassword: "",
    };

    const onSubmit = async (values: NewPasswordSubmitProps, { setErrors }: FormikHelpers<NewPasswordSubmitProps>) => {
        const { email, code, newPassword } = values;
        const new_password = newPassword;
        try {
            await Auth.forgotPasswordSubmit(email, code, new_password);

            router.push("/auth/login");
        } catch (error) {
            if (error) {
                setErrors(error); //toDO: backend validation
            }
        }
    };
    return (
        <Fragment>
            <Head>
                <title>Change Password</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="min-h-screen w-full bg-[url('/architect.svg')]  flex  justify-between ">
                <div className="mt-[500px] flex -skew-y-12  flex-col ">
                    <div className="h-10 w-2 bg-pink-500 mix-blend-multiply sm:w-12 md:w-24 lg:w-40"></div>
                    <div className="-mt-4 h-10 w-4 bg-indigo-500 mix-blend-multiply sm:w-16 md:w-32 lg:w-48"></div>
                </div>
                <div className="w-full max-w-md lg:max-w-lg mt-16">
                    <div className=" mt-4 rounded-sm bg-white px-12 py-8 shadow-md">
                        <h3 className="text-xl font-semibold tracking-tight text-gray-600">
                            Change Password
                        </h3>
                        <Formik
                            initialValues={initialValues}
                            onSubmit={onSubmit}
                            validationSchema={passwordSubmitSchema}
                        >
                            {({ errors }) => (
                                <Form className="mt-6 ">
                                    <label htmlFor="email ">
                                        <span className="mb-2 block text-sm font-semibold text-gray-500">
                                            Email
                                        </span>
                                        <Field
                                            name="email"
                                            type="email"
                                            id="email"
                                            className={`w-full rounded-md bg-violet-100 text-lg font-medium ${errors.email && "ring-2 ring-offset-1 ring-red-500"}`}
                                        />
                                        <div className="mt-1 text-xs text-red-500">
                                            {errors.email && errors.email}
                                        </div>
                                    </label>
                                    <label htmlFor="code ">
                                        <span className="mb-2 mt-4 block text-sm font-semibold text-gray-500">
                                            Verification Code
                                        </span>
                                        <Field
                                            name="code"
                                            type="text"
                                            id="code"
                                            className={`w-full rounded-md bg-violet-100 text-lg font-medium ${errors.code && "ring-2 ring-offset-1 ring-red-500"}`}
                                        />
                                        <div className="mt-1 text-xs text-red-500">
                                            {errors.code && errors.code}
                                        </div>
                                    </label>
                                    <label htmlFor="newPassword w-full">
                                        <span className="mb-2 mt-4 block text-sm font-semibold text-gray-500">
                                            New Password
                                        </span>
                                        <Field
                                            name="newPassword"
                                            type="password"
                                            id="newPassword"
                                            className={`w-full rounded-md bg-violet-100 text-lg font-medium ${errors.newPassword && "ring-2 ring-offset-1 ring-red-500"}`}
                                        />
                                        <div className="mt-1 text-xs text-red-500">
                                            {errors.newPassword && errors.newPassword}
                                        </div>
                                    </label>

                                    <div className="mt-6  text-right ">
                                        <button
                                            type="submit"
                                            className="text-medium w-full rounded-md bg-pink-500 px-4 py-2 uppercase tracking-wide text-white hover:bg-pink-600 transition ease-in-out focus:outline-none"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
                <div className="mt-12 flex -skew-y-12  flex-col ">
                    <div className="h-10 w-4 bg-indigo-500 sm:w-16 md:w-32 lg:w-48 "></div>
                </div>
            </div>
        </Fragment>
    );
}

export default CreateNewPassword;
