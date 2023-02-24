import { UserContext } from "@/contexts/UserContext";
import { ListCoursesQuery } from "@/types/amplifyCodegen/codegenTypes";
import Link from "next/link";
import { useContext } from "react";

const columns = [
    { header: "Title", accessor: "title", id: 1 },
    { header: "Category", accessor: "category", id: 2 },
    { header: "Framework", accessor: "framework", id: 3 },
    { header: "Price", accessor: "price", id: 4 },
    { header: "Duration", accessor: "duration", id: 5 },
];


const CourseTable = ({ courses }: { courses: ListCoursesQuery }) => {
    const userContext = useContext(UserContext);

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-100 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                    <tr>
                        {columns.map((column) => (
                            <th scope="col" className="px-6 py-3" key={column.header}>
                                {column.header}
                            </th>
                        ))}
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody className="">
                    {/* {teacherCourses?.listCourses?.items.map((course) => (
                        <tr
                            className="text-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-500 dark:hover:bg-gray-600"
                            key={course?.id}
                        >
                            {course && columns.map((column) => (
                                <td className="px-6 py-4" key={`${course?.id}-${column.accessor}`}>
                                    {" "}
                                    {course[column.accessor]}
                                </td>
                            ))}
                            <td className="px-6 py-4 text-green-300 ">
                                <Link href={`/dashboard/teacher/${userContext?.user?.attributes.name}/${course?.id}`}>
                                    view detail
                                </Link>
                            </td>
                        </tr>
                    ))} */}
                    {courses.listCourses?.items.map(item => (
                        <tr key={item?.id} className="text-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-500 dark:hover:bg-gray-600">
                            <td className="px-6 py-4">{item?.title}</td>
                            <td className="px-6 py-4">{item?.category}</td>
                            <td className="px-6 py-4">{item?.framework}</td>
                            <td className="px-6 py-4">{item?.price}</td>
                            <td className="px-6 py-4">{item?.duration}</td>
                            <td className="px-6 py-4 text-green-300 ">
                                <Link href={`/dashboard/teacher/${userContext?.user?.attributes.name}/${item?.id}`}>
                                    view detail
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
};
export default CourseTable;


