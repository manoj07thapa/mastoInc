
import { Tab } from '@headlessui/react'
import { motion } from "framer-motion";
import CourseDetail from './CourseDetail';
import { GetCourseQuery } from '@/types/amplifyCodegen/codegenTypes';
import StudentTable from './tables/StudentTable';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}
type CourseWithEnrolleesProps = {
    courseWithEnrollees: GetCourseQuery,
    removeUserFromCourse: (userId: string) => void

}
export default function CourseTabs({ courseWithEnrollees, removeUserFromCourse }: CourseWithEnrolleesProps) {
    const course = courseWithEnrollees?.getCourse
    // const enrollees = courseWithEnrollees.getCourse?.enrollees?.items.map(item => item?.user)
    const tabList = ["Course Detail", "Enrollees"]


    return (
        <div className="px-2 py-16 sm:px-0">
            <Tab.Group>
                <div
                >
                    <Tab.List className="flex p-1 space-x-1 bg-gray-900">
                        {tabList.map((category) => (
                            <Tab
                                key={category}
                                className={({ selected }) =>
                                    classNames(
                                        'w-1/3 py-2.5 text-sm font-medium leading-5 text-blue-700',
                                        selected
                                            ? 'bg-gray-700 shadow'
                                            : 'text-blue-100  hover:text-white'
                                    )
                                }
                            >
                                {category}
                            </Tab>
                        ))}
                    </Tab.List>
                </div>
                <Tab.Panels className="mt-12">
                    <div
                    >
                        <Tab.Panel>
                            {course && <CourseDetail course={courseWithEnrollees} />}
                        </Tab.Panel>
                        <Tab.Panel>
                            {/**insted of passing whole object try and pass the enrollee array */}
                            {courseWithEnrollees && <StudentTable enrollees={courseWithEnrollees} courseId={course?.id} removeUserFromCourse={removeUserFromCourse} />}

                        </Tab.Panel>
                    </div>

                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}

