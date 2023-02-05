import { Fragment, ReactElement, ReactNode } from "react";
import SidebarLayout from "../../../components/dashboard/SidebarLayout";
import { useRouter } from "next/router";
import { NextPage } from "next";


type CoursePageWithLayout = NextPage & {
    getLayout: (page: ReactElement) => ReactNode

}

const CreateCourse: CoursePageWithLayout = () => {
    const router = useRouter();

    return (
        <div>Create course</div>
    );
}
CreateCourse.getLayout = function (page: ReactElement) {
    return (
        <Fragment>
            <SidebarLayout >
                <main>{page}</main>
            </SidebarLayout>
        </Fragment>
    )
}

export default CreateCourse;