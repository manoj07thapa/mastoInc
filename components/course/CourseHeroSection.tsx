import { StarIcon } from "@heroicons/react/24/outline";
import { FormikValues } from 'formik';


const CourseHeroSection = ({ values }: FormikValues) => {
    return (

        <section className="max-w-4xl px-4 py-6 mx-auto space-y-1 ">
            <div>
                <h1 className="text-2xl font-bold tracking-wide text-slate-100 md:font-extrabold">
                    {values.title}
                </h1>
                <h3 className="mt-1 text-sm font-medium text-slate-300 md:text-lg">
                    {values.subtitle}
                </h3>
                <div className="">
                    <p className="text-sm text-slate-300 ">
                        Created by {" "}
                        <span className="text-lg font-medium text-indigo-500 underline">
                            {values.tutor}{" "}
                            <span className="text-xs text-slate-200">
                                ({values.tutorWho})
                            </span>
                        </span>
                    </p>
                    <p className="flex pt-1 space-x-1">
                        <StarIcon className="w-4 h-4 text-red-500" />
                        <StarIcon className="w-4 h-4 text-red-500" />
                        <StarIcon className="w-4 h-4 text-red-500" />
                        <StarIcon className="w-4 h-4 text-red-500" />
                    </p>
                    <p className="pt-1 text-sm font-medium text-slate-300">
                        Level : <span className="text-indigo-500">{values.level}</span>
                    </p>
                </div>
            </div>
        </section>
    );
}
export default CourseHeroSection;