import React from "react";
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { Auth } from "aws-amplify";
import { useRouter } from "next/router";
import Link from "next/link";
import { registerSchema } from "../../validations/auth/registerSchema";

type SignUpProps = {
    fullname: string,
    email: string,
    password: string,
    phoneNumber: string
}

function SignUp() {
    const router = useRouter();
    const initialValues: SignUpProps = {
        fullname: "",
        email: "",
        password: "",
        phoneNumber: "+977",
    };

    const onSubmit = async (values: SignUpProps, { setErrors }: FormikHelpers<SignUpProps>) => {

        const { email, password, phoneNumber, fullname } = values;


        try {
            const user = await Auth.signUp({
                username: email,
                password,
                attributes: {
                    name: fullname,
                    email,
                    phone_number: phoneNumber,
                },
            });

            router.push("/auth/userconfirmation");
        } catch (error) {


            if (error) {
                setErrors(error); //toDO: backend validation
            }
        }
    };
    return (
        <div className="flex justify-between ">
            <div className="mt-[500px] flex -skew-y-12  flex-col ">
                <div className="w-2 h-10 bg-pink-500 mix-blend-multiply sm:w-12 md:w-24 lg:w-40"></div>
                <div className="w-4 h-10 -mt-4 bg-indigo-500 mix-blend-multiply sm:w-16 md:w-32 lg:w-48"></div>
            </div>
            <div className="w-full max-w-md mt-12 lg:max-w-lg">
                <div className="px-12 py-10 mt-4 rounded-md shadow-md bg-slate-800">
                    <h3 className="pb-2 text-lg font-bold leading-7 tracking-wide text-left text-slate-100">
                        Register for a new account
                    </h3>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={registerSchema}
                    >
                        {({ errors }) => (
                            <Form>
                                <div className="mt-8 space-y-4">
                                    <div>
                                        <label
                                            htmlFor="fullname"
                                            className="block mb-1 text-sm font-semibold text-gray-500"
                                        >
                                            Full Name
                                        </label>
                                        <Field
                                            name="fullname"
                                            type="text"
                                            id="fullname"
                                            className={`w-full rounded-md bg-violet-100 text-lg font-medium ${errors.fullname && "ring-2 ring-offset-1 ring-red-500"}`}
                                        />
                                        <div className="mt-1 text-xs text-red-500">
                                            {errors.fullname && errors.fullname}
                                        </div>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block mb-1 text-sm font-semibold text-gray-500"
                                        >
                                            Email
                                        </label>
                                        <Field
                                            name="email"
                                            type="email"
                                            id="email"
                                            className={`w-full rounded-md bg-violet-100 text-lg font-medium ${errors.email && "ring-2 ring-offset-1 ring-red-500"}`}
                                        />
                                        <div className="mt-1 text-xs text-red-500">
                                            {errors.email && errors.email}
                                        </div>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="password "
                                            className="block mb-1 text-sm font-semibold text-gray-500"
                                        >
                                            Password
                                        </label>
                                        <Field
                                            name="password"
                                            type="password"
                                            id="password"
                                            className={`w-full rounded-md bg-violet-100 text-lg font-medium ${errors.password && "ring-2 ring-offset-1 ring-red-500"}`}
                                        />
                                        <div className="mt-1 text-xs text-red-500">
                                            {errors.password && errors.password}
                                        </div>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="phoneNumber"
                                            className="block mb-1 text-sm font-semibold text-gray-500"
                                        >
                                            Phone Number
                                        </label>
                                        <Field
                                            name="phoneNumber"
                                            id="phoneNumber"
                                            type="tel"
                                            className={`w-full rounded-md bg-violet-100 text-lg font-medium ${errors.phoneNumber && "ring-2 ring-offset-1 ring-red-500"}`}
                                        />
                                        <div className="mt-1 text-xs text-red-500">
                                            {errors.phoneNumber && errors.phoneNumber}
                                        </div>
                                    </div>
                                    <div className="text-right ">
                                        <button
                                            type="submit"
                                            className="w-full px-4 py-2 mt-6 tracking-wider text-white uppercase transition ease-in-out bg-pink-600 rounded-md text-medium hover:bg-pink-700 focus:outline-none"
                                        >
                                            Register
                                        </button>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                    {/* <hr className="mt-5 text-gray-900" /> */}
                </div>
                <div className="flex items-center px-4 mt-6 space-x-1">
                    <p className="text-white">Already have an account?</p>
                    <Link href="/auth/login" className="text-sm font-semibold text-indigo-500">
                        Login
                    </Link>
                </div>
            </div>
            <div className="flex flex-col -skew-y-12 mt-9 ">
                <div className="w-4 h-10 bg-indigo-500 sm:w-16 md:w-32 lg:w-48 "></div>
            </div>
        </div>
    );
}

export default SignUp;
