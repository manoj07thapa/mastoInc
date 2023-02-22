import { useState } from "react";
import { GetCourseQuery, GetUserQuery, User } from "@/types/amplifyCodegen/codegenTypes";
import DeleteModal from "@/components/modals/DeleteModal";
// import CourseDeleteModal from "./CourseDeleteModal";
// import SlideOverPanel from "../../utils/SlideOverPanel";


const columns = [
    { header: "Username", accessor: "name" },
    { header: "Email", accessor: "email" },
    { header: "Phone Number", accessor: "phone_number" },

];
type StudentTableProps = {
    enrollees?: GetCourseQuery,
    courseId?: string,
    removeUserFromCourse: (userId: string) => void
}

//the type for enrollees needs to be fixed this is the temporary fix
const StudentTable = ({ enrollees, courseId, removeUserFromCourse }: StudentTableProps) => {
    console.log('ENROLLEES', enrollees);
    const students = enrollees?.getCourse?.enrollees?.items.map(item => item?.user)

    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [selectedData, setSelectedData] = useState({})

    const handleCheckboxChange = (row: any, index: number) => {
        if (selectedIndex === index) {
            setSelectedIndex(-1);
            setSelectedData(row)
        } else {
            setSelectedIndex(index);
            setSelectedData(row)

        }
    };


    return (
        <div>
            {students?.length ?
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
                    <h1 className="text-xl font-bold tracking-wider pb-2">Enrolled Students</h1>
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-100 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                            <tr>
                                <th className="px-4 py-2"></th>
                                {columns.map((column) => (
                                    <th scope="col" className="px-6 py-3" key={column.header}>
                                        {column.header}
                                    </th>
                                ))}
                                <th className="px-4 py-2">Assigments</th>
                                <th className="px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {students.map((row, index) => (
                                <tr
                                    key={row?.id}
                                    className=" text-white  border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-500 dark:hover:bg-gray-600 transition ease-in-out"
                                >
                                    <td className="px-4 py-2">
                                        <input
                                            type="checkbox"
                                            onChange={(e) => handleCheckboxChange(row, index)}
                                            checked={selectedIndex === index}
                                        />
                                    </td>
                                    <td className="px-6 py-4">{row?.name}</td>
                                    <td className="px-6 py-4">{row?.email}</td>
                                    <td className="px-6 py-4">{row?.phone_number}</td>
                                    <td className="px-4 py-2 ">Assignments</td>
                                    <td className="px-4 py-2 ">
                                        {selectedIndex === index &&
                                            <div className="flex space-x-2"
                                            >
                                                <button
                                                    className="bg-red-500 text-white px-3 py-1 rounded-sm text-xs"
                                                    onClick={() => {
                                                        openModal()
                                                    }}
                                                >
                                                    Delete
                                                </button>
                                                {isOpen && <DeleteModal isOpen={isOpen} closeModal={closeModal} deleteItem={removeUserFromCourse} userId={row?.id} />}
                                            </div>
                                        }
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                : <p className="">No enrollees</p>}
        </div>
    );
};
export default StudentTable;
