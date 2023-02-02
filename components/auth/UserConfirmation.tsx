import { Fragment } from "react";
import { Formik, Field, Form } from "formik";
import { Auth } from "aws-amplify";
import { useRouter } from "next/router";
import Head from "next/head";
import { userConfirmationSchema } from "../../validations/auth/userConfirmationSchema";

function ConfirmUser() {
    const router = useRouter();

    const initialValues = {
        username: "",
        code: "",
    };

    const onSubmit = async (values: any, actions: any) => {
        const { username, code } = values;

        try {
            await Auth.confirmSignUp(username, code);

            router.push("/auth/login");
        } catch (error) {
            if (error) {
                actions.setErrors(error); //toDO: backend validation
            }
        }
    };
    return (
        <Fragment>
            <Head>
                <title>Confirm User</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex  justify-between ">
                <div className="mt-[500px] flex -skew-y-12  flex-col ">
                    <div className="h-10 w-2 bg-pink-500 mix-blend-multiply sm:w-12 md:w-24 lg:w-40"></div>
                    <div className="-mt-4 h-10 w-4 bg-indigo-500 mix-blend-multiply sm:w-16 md:w-32 lg:w-48"></div>
                </div>
                <div className="w-full max-w-md lg:max-w-lg mt-16">
                    <div className=" mt-4 rounded-md bg-violet-100  px-12 py-8 shadow-md">
                        <h3 className="mt-4 text-lg font-semibold tracking-wide text-gray-600 text-center underline">
                            Confirm your email with verification code
                        </h3>
                        <Formik
                            initialValues={initialValues}
                            onSubmit={onSubmit}
                            validationSchema={userConfirmationSchema}
                        >
                            {({ errors }) => (
                                <Form className="mt-7">
                                    <label htmlFor="username ">
                                        <span className="mb-1 block text-sm font-semibold text-gray-500">
                                            User Name
                                        </span>
                                        <Field
                                            name="username"
                                            type="text"
                                            id="username"
                                            className={`w-full rounded-md bg-violet-100 text-lg font-medium ${errors.username && "ring-2 ring-offset-1 ring-red-500"}`}
                                        />
                                        <div className="mt-1 text-xs text-red-500">
                                            {errors.username && errors.username}
                                        </div>
                                    </label>
                                    <label htmlFor="code" className="">
                                        <span className="mt-4 mb-1 block text-sm font-semibold text-gray-500">
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

                                    <div className="mt-7  text-right ">
                                        <button
                                            type="submit"
                                            className="text-medium w-full rounded-md bg-pink-500 px-4 py-2  tracking-wide text-white hover:bg-pink-600 transition ease-in-out focus:outline-none"
                                        >
                                            ConfirmUser
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

export default ConfirmUser;
