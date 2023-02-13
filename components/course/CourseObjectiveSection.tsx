import { FormikValues } from 'formik';
import { CheckIcon } from '@heroicons/react/24/outline';

const CourseObjectiveSection = ({ values }: FormikValues) => {
    return (
        <div className="max-w-4xl px-4 mx-auto space-y-12 ">
            {/** you will learn section*/}
            <section className="w-5/6 px-2 py-6 border border-gray-800 mt-7">
                <h3 className="text-lg font-semibold tracking-wide">
                    What you will learn
                </h3>
                <div className="mt-2">
                    <div className="grid-cols-2 gap-5 pt-1 pl-0 space-y-4 md:grid">
                        {values.courseObjectives.map((item: string, idx: number) => (
                            <div key={idx} className="flex items-center space-x-3">
                                <CheckIcon className="w-5 h-5 text-indigo-400" />
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
                    {values.relatedSkills.map((skill: string) => (
                        <div key={skill}>
                            <p className="bg-gray-800 px-1 py-0.5 rounded-full text-gray-300 shadow-md text-xs">
                                {skill}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
export default CourseObjectiveSection;