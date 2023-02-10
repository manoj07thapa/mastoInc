import { ReactElement } from "react";
import SidebarLayout from "../../../components/dashboard/SidebarLayout";
import { PageWithLayout } from "@/types/types";
import Home from "@/components/dashboard/create/multiStepCourseCreate/Home";
import Head from "next/head";

const Course: PageWithLayout = () => {

    return (
        <>
            <Head>
                <title>Dashboard | Create Course</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Home />
        </>
    );
}


// binding the page to the sidebatlayout
Course.getLayout = function (page: ReactElement) {
    return (
        <SidebarLayout >
            <main>{page}</main>
        </SidebarLayout>
    )
}

export default Course;