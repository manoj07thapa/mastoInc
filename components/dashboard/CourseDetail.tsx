import { motion } from "framer-motion";
import { Course, GetCourseQuery, ListUserCoursesQuery, DeleteUserCoursesInput, DeleteCourseInput } from '@/types/amplifyCodegen/codegenTypes';
import { API, Storage } from "aws-amplify";
import { deleteCourse, deleteUserCourses } from "@/src/graphql/mutations";
import { listUserCourses } from "@/src/graphql/queries";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import DeleteModal from "../modals/DeleteModal";
import CourseEditModal from "../modals/CourseEditModal";

type CourseDetailProps = Omit<Course, 'enrollees'>

const CourseDetail = ({ course }: { course: GetCourseQuery }) => {
    const router = useRouter()
    const images = course.getCourse?.images
    const enrolleeIds = course.getCourse?.enrollees?.items.map(item => item?.user.id)

    //deletemodal props and state
    let [isOpen, setIsOpen] = useState(false);
    function closeModal() {
        setIsOpen(false);
    }
    function openModal() {
        setIsOpen(true);
    }
    //edit modal props and state
    let [isEditOpen, setEditOpen] = useState(false);
    function closeEditModal() {
        setEditOpen(false);
    }
    function openEditModal() {
        setEditOpen(true);
    }

    //using Promise.all() may cause bugs and data inconsistancy  if one of the operation fails
    //try using atomicity if any one operation failled rollback the whole process
    const removeCourseImages = async () => {
        if (images) {
            await Promise.all(images?.map(async (image) => {
                await Storage.remove(image)
            }))
        }

    }

    const removeUserCourses = async () => {
        if (enrolleeIds) {
            const response = await Promise.all(enrolleeIds?.map(async (userId) => {
                const res = (await API.graphql({
                    query: listUserCourses,
                    variables: {
                        filter: { courseId: { eq: course.getCourse?.id }, userId: { eq: userId } }
                    },
                    authMode: "AMAZON_COGNITO_USER_POOLS",
                })) as { data: ListUserCoursesQuery }
                return res.data
            }))
            if (response) {
                const ids = response.map(res => {
                    return res.listUserCourses?.items.map(item => item?.id)
                })
                //flateIds fills all the usercourses ids in same array which are otherwise in different arrays
                const flatIds = ids.flat()
                const resUserCourse = await Promise.all(flatIds.map(async (userCourseId) => {
                    const res = (await API.graphql({
                        query: deleteUserCourses,
                        variables: {
                            input: { id: userCourseId }
                        },
                        authMode: "AMAZON_COGNITO_USER_POOLS",
                    })) as { data: DeleteUserCoursesInput }
                }))
            }
        }
    }

    const removeCourse = async () => {
        const response = (await API.graphql({
            query: deleteCourse,
            variables: { input: { id: course.getCourse?.id } },
            authMode: "AMAZON_COGNITO_USER_POOLS",
        })) as { data: DeleteCourseInput };
        console.log('coursedelres', response);

    }

    //before removing the course first remove the images associated with the course and then remove userCourses associated with the course
    const removeImagesCourseUserCourses = async () => {
        try {
            await removeCourseImages()
            await removeUserCourses()
            await removeCourse()
        } catch (error) {
            console.log('REMOVECOURSEERROR', error);

        }
    };

    return (
        <motion.div className=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <h1 className="text-xl font-bold tracking-wider">Course Detail</h1>
            <h3>{course.getCourse?.title}</h3>
            <h3>{course.getCourse?.subtitle}</h3>
            <h3>{course.getCourse?.category}</h3>
            <div className="flex mt-12 space-x-7">
                <button
                    className="px-3 py-1 bg-blue-500 rounded-sm"
                    onClick={() => {
                        openEditModal()
                    }}
                >
                    Edit Course
                </button>
                {isEditOpen && <CourseEditModal isOpen={isEditOpen} closeModal={closeEditModal} course={course} />}
                {/* <button className="px-3 py-2 rounded-sm bg-sky-600 " onClick={() => router.push('/dashboard/edit/course')}>Edit Course</button> */}
                {/* <button className="px-3 py-2 bg-red-600 rounded-sm " onClick={() => removeImagesCourseUserCourses()}>Delete Course</button> */}
                <button
                    className="px-3 py-1 bg-red-500 rounded-sm"
                    onClick={() => {
                        openModal()
                    }}
                >
                    Delete
                </button>
                {isOpen && <DeleteModal isOpen={isOpen} closeModal={closeModal} removeImagesCourseUserCourses={removeImagesCourseUserCourses} />}
            </div>
        </motion.div>
    )
};
export default CourseDetail;