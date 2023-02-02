import { Fragment } from "react";
import Head from "next/head";
import SignUp from "../../components/auth/SignUp";

function Register() {
    return (
        <Fragment>
            <Head>
                <title>Register</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="min-h-screen w-full bg-[url('/architect.svg')]  ">
                <div className="absolute z-0 bg-gradient-to-r from-pink-800 to-pink-900 -top-40 -left-16 w-[60%] h-[30%] blur-3xl backdrop-brightness-75 rounded-full -skew-y-12 "></div>

                <SignUp />
                {/* <div className="absolute z-0 bg-gradient-to-r from-pink-800 to-pink-900 -bottom-100 -right-0 w-[60%] h-[30%] blur-3xl backdrop-brightness-75 rounded-full -skew-y-12 "></div> */}

            </div>
        </Fragment>
    );
}

export default Register;