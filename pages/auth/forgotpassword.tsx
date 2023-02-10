import { Fragment } from "react";
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { Auth } from "aws-amplify";
import { useRouter } from "next/router";
import Head from "next/head";
import { forgotPasswordSchema } from "../../validations/auth/forgotPasswordSchema";

type ForgotPasswordProps = {
    email: string
}

function ForgotPassword() {
    const router = useRouter();

    const initialValues: ForgotPasswordProps = {
        email: "",
    };

    const onSubmit = async (values: ForgotPasswordProps, { setErrors }: FormikHelpers<ForgotPasswordProps>) => {
        const { email } = values;

        try {
            await Auth.forgotPassword(email);

            router.push("/auth/createnewpassword");
        } catch (error) {
            console.log(error);

            if (error) {
                setErrors(error); //toDO: backend validation
            }
        }
    };
    return (
        <Fragment>
            <Head>
                <title>Forgot Password</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="min-h-screen w-full bg-[url('/architect.svg')]  ">
                <div className="flex justify-between ">
                    <div className="mt-[500px] flex -skew-y-12  flex-col ">
                        <div className="w-2 h-10 bg-pink-500 mix-blend-multiply sm:w-12 md:w-24 lg:w-40"></div>
                        <div className="w-4 h-10 -mt-4 bg-indigo-500 mix-blend-multiply sm:w-16 md:w-32 lg:w-48"></div>
                    </div>
                    <div className="w-full max-w-md mt-24 lg:max-w-lg">
                        <div className="py-10 mt-4 bg-white rounded-sm shadow-md  px-7">
                            <Formik
                                initialValues={initialValues}
                                onSubmit={onSubmit}
                                validationSchema={forgotPasswordSchema}
                            >
                                {({ errors }) => (
                                    <Form>
                                        <label htmlFor="email " className="flex flex-col">
                                            <span className="mb-2 text-lg font-bold tracking-wide text-gray-600 ">
                                                Please enter your Email
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
                                        <div className="mt-6 text-right ">
                                            <button
                                                type="submit"
                                                className="w-full px-4 py-2 tracking-wide text-white transition ease-in-out bg-pink-500 rounded-md text-medium hover:bg-pink-600"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                    <div className="flex flex-col mt-12 -skew-y-12 ">
                        <div className="w-4 h-10 bg-indigo-500 sm:w-16 md:w-32 lg:w-48 "></div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ForgotPassword;
