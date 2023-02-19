import { CourseProps } from '../../types/types';
import Image from 'next/image';
import { CheckIcon, StarIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { UserContext } from "@/contexts/UserContext";
import { useRouter } from "next/router";
import { createUserCourses } from "@/src/graphql/mutations";
import { API } from "aws-amplify";
import StickyCourse from "./StickyCourse";
import Syllabuses from './Syllabus';
import { getUser } from '@/src/graphql/queries';
import { CreateUserCoursesInput, GetUserQuery } from '@/src/API';
import { Course } from '../../src/API';

export type CourseWithImagesProps = {
    ssgCourse: Course,
    courseImages: string[],
    subscribeToCourse?: () => void
}

const CourseContainer = ({ ssgCourse, courseImages }: CourseWithImagesProps) => {
    const userContext = useContext(UserContext);
    const router = useRouter()
    const {
        title, subtitle, tutor, tutorWho, duration, level, courseObjectives, relatedSkills, syllabus, time, price, prerequisites
    } = ssgCourse

    const subscribeToCourse = async () => {
        if (userContext?.user) {
            const userId = userContext?.user?.attributes.sub
            const courseId = ssgCourse.id
            try {
                const response = (await API.graphql({
                    query: getUser,
                    variables: {
                        id: userId
                    },
                    authMode: "AMAZON_COGNITO_USER_POOLS",
                })) as { data: GetUserQuery }
                console.log('ResUser', response);
                // const data1 = data.getUser.enrolledCourses.items
                const usersCourses = response.data.getUser?.enrolledCourses?.items.map(item => item?.courseId)

                console.log('userCoursestest', usersCourses);
                //avoid enrolling already enrolled users
                if (!usersCourses?.includes(courseId)) {
                    const res = (await API.graphql({
                        query: createUserCourses,
                        variables: {
                            input: {
                                courseId,
                                userId,
                            },
                        },
                        authMode: "AMAZON_COGNITO_USER_POOLS",
                    })) as { data: CreateUserCoursesInput };
                    console.log('subscribeToCourseRes', res);
                } else {
                    return "You are already enrolled to this course."
                }
            } catch (error) {
                console.log('subscribeToCourseERROR', error);
            }
        } else {
            router.push('/auth/register')
        }

    };
    return (
        <div className="flex pb-12 ">
            <div className="w-full">
                <div className="w-full bg-slate-800 md:py-12 ">
                    <section className="md:hidden">
                        <Image
                            src={courseImages[0]}
                            height={40}
                            width={100}
                            alt="course image"
                            className="shadow-md "
                            priority
                        />
                    </section>
                    {/** Hero section*/}
                    <section className="w-full px-4 py-6 space-y-1 ">
                        <div>
                            <h1 className="text-xl font-bold tracking-wide text-gray-900 md:text-5xl md:font-extrabold">
                                {title}
                            </h1>
                            <h3 className="mt-1 text-sm font-medium text-gray-700 md:text-lg">
                                {subtitle}
                            </h3>
                            <div className="">
                                <p className="text-sm text-gray-700 ">
                                    Created by{" "}
                                    <span className="text-lg font-medium text-indigo-900 underline">
                                        {tutor}{" "}
                                        <span className="text-xs text-gray-800">
                                            ({tutorWho})
                                        </span>
                                    </span>
                                </p>
                                <p className="flex pt-1 space-x-1">
                                    <StarIcon className="w-4 h-4 text-red-500" />
                                    <StarIcon className="w-4 h-4 text-red-500" />
                                    <StarIcon className="w-4 h-4 text-red-500" />
                                    <StarIcon className="w-4 h-4 text-red-500" />
                                </p>
                                <p className="pt-1 text-sm font-semibold tracking-wide text-gray-800">
                                    {level}
                                </p>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="max-w-4xl px-4 mx-auto space-y-12 ">
                    {/** you will learn section*/}
                    <section className="w-5/6 px-2 py-6 border border-gray-800 mt-7">
                        <h3 className="text-lg font-semibold tracking-wide">
                            What you will learn
                        </h3>
                        <div className="mt-2">
                            <div className="grid-cols-2 gap-5 pt-1 pl-0 space-y-4 md:grid">
                                {courseObjectives?.map((item, idx) => (
                                    <div key={idx} className="flex items-center space-x-3">
                                        <CheckIcon className="w-3 h-3 text-indigo-700" />
                                        <p className="text-sm text-gray-300">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                    {/** Relate skills section */}

                    <section className="">
                        <h3 className="text-lg font-semibold tracking-wide">
                            Related Stacks
                        </h3>
                        <div className="flex items-center mt-2 space-x-3">
                            {relatedSkills?.map((skill, idx) => (
                                <div key={idx}>
                                    <p className="bg-gray-800 px-1 py-0.5 rounded-full text-gray-300 shadow-md text-xs">
                                        {skill}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/** course content section */}
                    <section className="w-5/6 px-2 py-4 border border-gray-800">
                        {syllabus && <Syllabuses syllabus={syllabus} />}
                    </section>
                    {/** course required knowledge section */}
                    <section className="">
                        <h3 className="text-lg font-semibold tracking-wide">
                            Prerequisites
                        </h3>
                        {prerequisites?.map((prerequisite, idx) => (
                            <p className="text-gray-300 text-medium" key={idx}>
                                {prerequisite}
                            </p>
                        ))}

                    </section>
                    {/** course duration section */}

                    <section className="md:hidden">
                        <h3 className="text-lg font-semibold tracking-wide">
                            Duration{" "}
                        </h3>
                        <p className="text-gray-300 text-medium">
                            {duration}
                        </p>
                    </section>

                    {/** course time section */}

                    <section className="md:hidden">
                        <h3 className="text-lg font-semibold tracking-wide">Time </h3>
                        <p className="text-gray-300 text-medium">{time}</p>
                    </section>

                    {/** course cost  section */}
                    <section className="md:hidden">
                        <h3 className="text-lg font-semibold tracking-wide">
                            Total cost{" "}
                        </h3>
                        <p className="text-gray-300 text-medium">Rs, {price}</p>
                    </section>
                    {/** course signup section */}
                    <section className="md:hidden">
                        <button
                            type="submit"
                            className="w-full px-4 py-2 transition ease-in-out bg-pink-500 rounded-md shadow-md hover:bg-pink-600"
                            onClick={subscribeToCourse}
                        >
                            Enroll Now
                        </button>

                    </section>
                </div>
            </div>
            <div>
                <StickyCourse
                    ssgCourse={ssgCourse}
                    courseImages={courseImages}
                    subscribeToCourse={subscribeToCourse}
                />
            </div>

        </div>
    );
}
export default CourseContainer;