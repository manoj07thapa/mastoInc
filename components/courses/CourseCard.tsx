import React, { Fragment, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
// import { motion } from "framer-motion";
import { CourseProps } from '../../types/types';
// import CourseLoadingSkeleton from "../utils/CourseLoadingSkeleton";


// const variants = {
//     hidden: { opacity: 0 },
//     show: {
//         opacity: 1,
//         transition: {
//             staggerChildren: 0.3
//         }
//     }
// }

// const image = {
//     hidden: {
//         opacity: 0,
//         y: 30
//     },
//     show: {
//         opacity: 1,
//         y: 0,
//         transition: {
//             duration: 1
//         }
//     }
// }

export type CourseCardProps = {
    courses: CourseProps[],
    loading: boolean
}

export default function CurseCard({ courses }: { courses: CourseProps[] }) {
    return (
        <Fragment>
            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 ">
                {courses.map((course) => (
                    <div key={course.id}

                        className="w-auto h-auto overflow-hidden rounded-md bg-slate-800 hover:shadow-2xl"
                    >
                        <Link href={`/course/${course.category}/${course.framework}/${course.id}`}>
                            {course.s3ImageUrl && <Image
                                src={course.s3ImageUrl[0]}
                                height={300}
                                width={400}
                                alt={course.framework}
                                className="shadow-md "
                                priority
                                placeholder="empty"
                            />}
                            <div className="px-2 py-4 space-y-1 ">
                                <p className="text-lg font-semibold text-gray-700">
                                    {course.title}
                                </p>
                                <p className="text-sm text-gray-700">
                                    {course.tutor}
                                    <span className="pl-1 text-xs text-gray-500">
                                        ({course.tutorWho})
                                    </span>
                                </p>
                                <div className="flex items-center justify-between">
                                    <p className="flex pt-1 space-x-1">
                                        <StarIcon className="w-4 h-4 text-red-500" />
                                        <StarIcon className="w-4 h-4 text-red-500" />
                                        <StarIcon className="w-4 h-4 text-red-500" />
                                        <StarIcon className="w-4 h-4 text-red-500" />
                                    </p>
                                    <p className="text-sm text-gray-700">Rs: {course.price}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
                )}
            </div>
        </Fragment >
    );
}
