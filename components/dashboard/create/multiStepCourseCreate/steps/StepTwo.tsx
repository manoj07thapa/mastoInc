
import { FieldArray, Field, ErrorMessage } from "formik";

const StepTwo = () => {
    return (
        <div>
            {/**cOUSEagenda section */}
            <div className="w-full pb-16 border-b pr-7 border-slate-800">
                <FieldArray name="courseObjectives" >
                    {(fieldArrayProps) => {
                        const {
                            push,
                            remove,
                            form: {
                                values: { courseObjectives },
                            },
                        } = fieldArrayProps;
                        return (
                            <div className="space-y-5 ">
                                {courseObjectives.length &&
                                    courseObjectives.map((_: any, index: number) => (
                                        <div key={index} className="">
                                            <div className="flex items-end ">
                                                <div className="w-full">
                                                    {index === 0 && <label htmlFor="courseObjectives " className=" label"  >
                                                        Course Objectives
                                                    </label>}
                                                    <Field
                                                        name={`courseObjectives[${index}]`}
                                                        type="text"
                                                        id="courseObjectives"
                                                        className={`field`}
                                                        placeholder="courseObjective"
                                                    />
                                                    <ErrorMessage component="p" name={`courseObjectives.${index}`} className="fieldError" />
                                                </div>
                                                <div className="inline-flex flex-col pl-4 space-y-2">
                                                    {index > 0 && (
                                                        <button
                                                            type="button"
                                                            onClick={() => remove(index)}
                                                            className="px-2 py-1 text-xs transition duration-100 rounded-md shadow bg-slate-800 text-slate-300 hover:text-slate-100 ease "
                                                        >
                                                            Drop
                                                        </button>
                                                    )}
                                                    {index === 0 && <button
                                                        type="button"
                                                        onClick={() => push('')}
                                                        className="px-2 py-1 text-xs transition duration-100 rounded-md shadow bg-slate-800 text-slate-300 hover:text-slate-100 ease "
                                                    >
                                                        Add
                                                    </button>}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        );
                    }}
                </FieldArray>
            </div>
            <div className="grid-cols-2 gap-20 pt-16 sm:grid">
                {/**relatedskills section */}
                <div className="w-full pr-12 border-r border-slate-800">
                    <FieldArray name="relatedSkills" >
                        {(fieldArrayProps) => {
                            const {
                                push,
                                remove,
                                form: {
                                    values: { relatedSkills },
                                },
                            } = fieldArrayProps;
                            return (
                                <div className="space-y-5 ">
                                    {relatedSkills.length &&
                                        relatedSkills.map((_: any, index: number) => (
                                            <div key={index} className="">
                                                <div className="flex items-end ">
                                                    <div className="w-full">
                                                        {index === 0 && <label htmlFor="prerequisite " className=" label"  >
                                                            Relates skills
                                                        </label>}
                                                        <Field
                                                            name={`relatedSkills[${index}]`}
                                                            type="text"
                                                            id="relatedSkills"
                                                            className={`field`}
                                                            placeholder="tech stacks.."
                                                        />
                                                        <ErrorMessage component="p" name={`relatedSkills.${index}`} className="fieldError" />
                                                    </div>
                                                    <div className="inline-flex flex-col pl-4 space-y-2">
                                                        {index > 0 && (
                                                            <button
                                                                type="button"
                                                                onClick={() => remove(index)}
                                                                className="px-2 py-1 text-xs transition duration-100 rounded-md shadow bg-slate-800 text-slate-300 hover:text-slate-100 ease "
                                                            >
                                                                Drop
                                                            </button>
                                                        )}
                                                        {index === 0 && <button
                                                            type="button"
                                                            onClick={() => push('')}
                                                            className="px-2 py-1 text-xs transition duration-100 rounded-md shadow bg-slate-800 text-slate-300 hover:text-slate-100 ease "
                                                        >
                                                            Add
                                                        </button>}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            );
                        }}
                    </FieldArray>
                </div>
                {/**Prequisite section */}
                <div className="w-full -ml-7">
                    <FieldArray name="prerequisites" >
                        {(fieldArrayProps) => {
                            const {
                                push,
                                remove,
                                form: {
                                    values: { prerequisites },
                                },
                            } = fieldArrayProps;
                            return (
                                <div className="space-y-5">
                                    {prerequisites.length &&
                                        prerequisites.map((_: any, index: number) => (

                                            <div key={index} className="">
                                                <div className="flex items-end ">
                                                    <div className="w-full">
                                                        <div>
                                                            {index === 0 && <label htmlFor="prerequisite " className="label"  >
                                                                Prerequisite
                                                            </label>}
                                                            <Field
                                                                name={`prerequisites[${index}]`}
                                                                type="text"
                                                                id="prerequisites"
                                                                className={`field`}
                                                                placeholder="previous knowledge"
                                                            />
                                                        </div>
                                                        <ErrorMessage component="p" name={`prerequisites.${index}`} className="inline-block fieldError" />
                                                    </div>
                                                    <div className="inline-flex flex-col items-center pl-4 space-y-2">
                                                        {index > 0 && (
                                                            <button
                                                                type="button"
                                                                onClick={() => remove(index)}
                                                                className="px-2 py-1 text-xs transition duration-100 ease-in-out rounded-md shadow bg-slate-800 text-slate-300 hover:text-slate-100 "
                                                            >
                                                                Drop
                                                            </button>
                                                        )}
                                                        {index === 0 && <button
                                                            type="button"
                                                            onClick={() => push('')}
                                                            className="px-2 py-1 text-xs transition duration-100 rounded-md shadow bg-slate-800 text-slate-300 hover:text-slate-100 ease"
                                                        >
                                                            Add
                                                        </button>}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            );
                        }}
                    </FieldArray>
                </div>
            </div>
        </div>
    );
}
export default StepTwo;