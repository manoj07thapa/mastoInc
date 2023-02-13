import { Field, FormikValues, ErrorMessage, useFormikContext } from 'formik';
import { categories, languages, level } from '../courseData'
import FrameworkField from '../FrameworkField';

const StepOne = () => {
    const { errors } = useFormikContext<FormikValues>()

    return (
        <>
            <div className="">
                <label htmlFor="title" className='label'>Title</label>
                <Field placeholder="Enter the title of the course" name="title" type="text" className={`field ${errors.title && "field-error"}`} />
                <ErrorMessage component="p" name="title" className="text-xs italic text-red-700" />
            </div>
            <div className="">
                <label htmlFor="subtitle" className='label'>Subtitle</label>
                <Field name="subtitle" type="text" className={`  field ${errors.subtitle && "field-error"}`} />

                <ErrorMessage component="p" name="subtitle" className="text-xs italic text-red-700" />
            </div>
            <div className="flex justify-between space-x-5">
                <div className='lg:w-1/3'>
                    <label htmlFor="language" className='label'>Language</label>
                    <Field
                        as="select"
                        name="language"
                        type="text"
                        id="language"
                        className={` field ${errors.language && "field-error"}`}
                    >
                        {languages.map((option) => (
                            <option key={option.key} value={option.value} className="py-3 space-y-1 rounded-md shadow bg-slate-800 text-slate-200 ">
                                {option.key}
                            </option>
                        ))}
                    </Field>
                    <ErrorMessage component="p" name="language" className="text-xs italic text-red-700" />
                </div>
                <div className="lg:w-1/3">
                    <label htmlFor="time" className='label'>Time</label>
                    <Field name="time" type="text" className={`  field ${errors.time && "field-error"}`} />
                    <ErrorMessage component="p" name="time" className="text-xs italic text-red-700" />
                </div>
                <div className=" lg:w-1/3">
                    <label htmlFor="duration" className='label'>Duration</label>
                    <Field name="duration" type="text" className={`  field ${errors.duration && "field-error"} `} />

                    <ErrorMessage component="p" name="duration" className="text-xs italic text-red-700" />
                </div>

            </div>
            <div className="flex justify-between space-x-5">
                <div className='lg:w-1/3'>
                    <label htmlFor="level" className='label'>Level</label>
                    <Field
                        as="select"
                        name="level"
                        type="text"
                        id="level"
                        className={` field ${errors.level && "field-error"}`}
                    >
                        {level.map((option) => (
                            <option key={option.key} value={option.value} className="py-3 space-y-1 rounded-md shadow bg-slate-800 text-slate-200 ">
                                {option.key}
                            </option>
                        ))}
                    </Field>
                    <ErrorMessage component="p" name="level" className="text-xs italic text-red-700" />
                </div>
                <div className="lg:w-1/3">
                    <label htmlFor="tutor" className='label'>Tutor</label>
                    <Field name="tutor" type="text" className={`  field ${errors.tutor && "field-error"} `} />
                    <ErrorMessage component="p" name="tutor" className="text-xs italic text-red-700" />
                </div>
                <div className="w-1/3 ">
                    <label htmlFor="tutorWho" className='label'>Tutor Expertise</label>
                    <Field name="tutorWho" type="text" className={`  field ${errors.tutorWho && "field-error"}`} />

                    <ErrorMessage component="p" name="tutorWho" className="text-xs italic text-red-700" />
                </div>

            </div>
            <div className="flex justify-between space-x-5">
                <div className='lg:w-1/3'>
                    <label htmlFor="category" className='label'>Category</label>
                    <Field
                        as="select"
                        name="category"
                        type="text"
                        id="category"
                        className={` field ${errors.category && "field-error"}`}

                    >
                        {categories.map((option) => (
                            <option key={option.key} value={option.value} className="py-3 space-y-1 rounded-md shadow bg-slate-800 text-slate-200 ">
                                {option.key}
                            </option>
                        ))}
                    </Field>
                    <ErrorMessage component="p" name="category" className="text-xs italic text-red-700" />
                </div>
                <FrameworkField />
                <div className=" lg:w-1/3">
                    <label htmlFor="price" className='label'>Price</label>
                    <Field name="price" type="number" className={`  field ${errors.price && "field-error"}`} />
                    <ErrorMessage component="p" name="price" className="text-xs italic text-red-700" />
                </div>

            </div>
        </>
    );
}
export default StepOne;