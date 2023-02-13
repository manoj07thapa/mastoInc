import { FieldArray, Field, ErrorMessage, useFormikContext, FormikValues } from 'formik';


const StepThree = () => {
    const { errors } = useFormikContext<FormikValues>()
    return (
        <div>
            <FieldArray name="syllabus">
                {(fieldArrayProps) => {
                    const {
                        push,
                        remove,
                        form: {
                            values: { syllabus },
                        },
                    } = fieldArrayProps;
                    return (
                        <div >
                            <label htmlFor="syllabus " className="text-lg font-semibold tracking-wide label" >Course Syllabus </label>
                            {syllabus.length &&
                                syllabus.map((_: any, index: number) => (
                                    <div key={index} className="pt-12 pb-12 border-b border-slate-800">
                                        <div className="space-y-2">
                                            <div>
                                                <label htmlFor="syllabus " className="label" >Topic </label>
                                                <Field
                                                    name={`syllabus[${index}].topic`}
                                                    type="text"
                                                    id="syllabusTitle"
                                                    className={`field ${errors.syllabus && "field-error"}`}
                                                    placeholder="Topic..."
                                                />
                                                <ErrorMessage component="p" name={`syllabus.${index}.topic`} className="fieldError" />
                                            </div>

                                            <div>
                                                <label htmlFor="syllabus " className="label" >Description </label>
                                                <Field
                                                    name={`syllabus[${index}].description`}
                                                    type="text"
                                                    id="syllabusDescription"
                                                    as="textarea"
                                                    rows="4"
                                                    className={`field ${errors.syllabus && "field-error"}`}
                                                    placeholder="Description..."
                                                />
                                                <ErrorMessage component="p" name={`syllabus.${index}.description`} className="fieldError" />
                                            </div>
                                            <div className="w-1/3">
                                                <label htmlFor="syllabus " className="label" >Duration </label>
                                                <Field
                                                    name={`syllabus[${index}].duration`}
                                                    type="text"
                                                    id="syllabusDuration"
                                                    rows="4"
                                                    className={`field ${errors.syllabus && "field-error"}`}
                                                    placeholder="Duration..."
                                                />
                                                <ErrorMessage component="p" name={`syllabus.${index}.duration`} className="fieldError" />
                                            </div>

                                        </div>

                                        <div className="pt-3 space-x-4">
                                            {index > 0 && <button
                                                type="button"
                                                onClick={() => remove(index)}
                                                className="px-4 py-2 text-xs transition duration-100 ease-in-out rounded-md shadow bg-slate-800 text-slate-300 hover:text-slate-100"
                                            >
                                                Drop
                                            </button>}
                                            <button
                                                type="button"
                                                onClick={() => push('')}
                                                className="px-4 py-2 text-xs transition duration-100 ease-in-out rounded-md shadow bg-slate-800 text-slate-300 hover:text-slate-100"
                                            >
                                                Add
                                            </button>
                                        </div>

                                    </div>
                                ))}
                        </div>
                    );
                }}
            </FieldArray>

        </div>
    );
}
export default StepThree;