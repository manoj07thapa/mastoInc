import { Fragment, useContext } from "react";
import { Formik, Field, Form, FormikHelpers, FormikValues } from "formik";
import { Auth } from "aws-amplify";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { loginSchema } from "../../validations/auth/loginSchema";
import { UserContext } from "../../contexts/UserContext";

type SignInProps = {
    email: string,
    password: string

}

function SignIn() {
    const router = useRouter();
    const userContext = useContext(UserContext);

    const initialValues: SignInProps = {
        email: "",
        password: "",
    };

    const onSubmit = async (values: SignInProps, { setErrors }: FormikHelpers<SignInProps>) => {
        const { email, password } = values;
        try {
            const user = await Auth.signIn({
                username: email,
                password,
            });


            userContext?.setUser(user);
            router.push("/");
        } catch (error) {

            console.log(error);

            if (error) {
                setErrors(error); //toDO: backend validation use toast 
            }
        }
    };
    return (
        <Fragment>
            <Head>
                <title>Login</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex justify-between ">
                <div className="mt-[500px] flex -skew-y-12  flex-col ">
                    <div className="w-2 h-10 bg-pink-500 mix-blend-multiply sm:w-12 md:w-24 lg:w-40"></div>
                    <div className="w-4 h-10 -mt-4 bg-indigo-500 mix-blend-multiply sm:w-16 md:w-32 lg:w-48"></div>
                </div>
                <div className="w-full max-w-md mt-16 lg:max-w-lg ">
                    <div className="px-12 py-8 mt-10 rounded-md shadow-lg dark:bg-slate-800">
                        <h3 className="text-lg font-extrabold tracking-wide text-left text-slate-100">
                            Sign in to your account
                        </h3>
                        <div className="mt-10">
                            <Formik
                                initialValues={initialValues}
                                onSubmit={onSubmit}
                                validationSchema={loginSchema}
                                className=" accent-green-900"
                            >
                                {({ errors }) => (
                                    <Form className="space-y-5 ">
                                        <div>
                                            <label
                                                htmlFor="email "
                                                className="block mb-1 text-sm font-medium tracking-wide text-slate-200"
                                            >
                                                Email
                                            </label>
                                            <Field
                                                name="email"
                                                type="email"
                                                id="username"
                                                className={`field ${errors.email && "field-error"}`}
                                            />
                                            <div className="mt-1 text-xs text-red-500">
                                                {errors.email && errors.email}
                                            </div>
                                        </div>
                                        <div className="">
                                            <label
                                                htmlFor="password"
                                                className="block mt-5 mb-1 text-sm font-medium tracking-wide text-slate-200 "
                                            >
                                                Password
                                            </label>
                                            <Field
                                                name="password"
                                                type="password"
                                                id="password"
                                                className={`field ${errors.email && "field-error"}`}
                                            />
                                            <div className="mt-1 text-xs text-red-500">
                                                {errors.password && errors.password}
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between mt-4">
                                            <div className="text-sm">
                                                <Link href="/auth/forgotpassword" className="font-medium text-indigo-500 hover:text-indigo-600">
                                                    Forgot your password?

                                                </Link>
                                            </div>
                                        </div>
                                        <div className="mt-4 text-right ">
                                            <button
                                                type="submit"
                                                className="w-full px-4 py-2 tracking-wider text-white uppercase transition ease-in-out bg-pink-600 rounded-md text-medium hover:bg-pink-700"
                                            >
                                                SignIn
                                            </button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                    <div className="flex items-center px-4 mt-6 space-x-1">
                        <p className="text-white">Don&apos;t have an account?</p>
                        <Link href="/auth/register" className="text-sm font-semibold text-indigo-500 hover:text-indigo-600">
                            Register
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col mt-12 -skew-y-12 ">
                    <div className="w-4 h-10 bg-indigo-500 sm:w-16 md:w-32 lg:w-48 "></div>
                </div>
            </div>
        </Fragment>
    );
}

export default SignIn;
