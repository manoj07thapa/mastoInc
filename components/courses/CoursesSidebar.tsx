import { courses } from "@/components/header/headerData/header/navData";
import Link from "next/link";
import { useRouter } from "next/router";

const CourseSidebar = () => {
    const { query } = useRouter();
    return (
        <aside className="hidden divide-x sm:block divide-slate-800 divide-opacity-50">
            <nav className="flex items-center sm:flex-col sm:items-start sm:space-y-6 ">
                {courses.map((course) => (
                    <ul key={course.href}>
                        <li>
                            <Link href={`/courses/${course.href}`}
                                className={`${query.params === course.href
                                    ? "sm:border-l-2 border-b-2 sm:border-b-0 border-pink-500 px-2.5 text-slate-100"
                                    : ""
                                    } px-3 py-2 text-sm lg:text-base font-normal transition ease-in-out hover:bg-indigo-600 text-slate-400 hover:text-slate-200 hover:shadow hover:rounded-md`}>
                                {course.name}
                            </Link>
                        </li>
                    </ul>
                ))}
            </nav>
        </aside>
    );
};
export default CourseSidebar;
