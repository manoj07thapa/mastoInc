import { useState, useEffect } from "react";
import { Field, useFormikContext, FormikValues, ErrorMessage, useField, FieldAttributes } from 'formik';
import {
    frontendFrameworks,
    backendFrameworks,
    database,
    webDesign,
    fullStack,
} from "./courseData";

export type FrameworkFieldProp = {
    key: string,
    value: string
}[]

export default function FrameworkField() {
    const { values } = useFormikContext<FieldAttributes<FormikValues>>()

    const [frameworks, setFrameworks] = useState<FrameworkFieldProp | undefined>(undefined);

    function fetchFrameworks(category: string) {
        if (category === "frontend") {
            return frontendFrameworks;
        }
        if (category === "backend") {
            return backendFrameworks;
        }
        if (category === "database") {
            return database;
        }
        if (category === "webDesign") {
            return webDesign;
        }
        if (category === "fullstack") {
            return fullStack;
        }
    }

    useEffect(() => {
        const frameworks = fetchFrameworks(values.category);
        setFrameworks(frameworks);
    }, [values.category]);

    return (
        <div className="sm:w-1/3">
            <label htmlFor="framework" className="label">
                Choose Framework
            </label>
            <Field
                as="select"
                name="framework"
                type="text"
                id="framework"
                value={values.framework}
                className={` " field `}
            >
                {frameworks &&
                    frameworks.map((option) => (
                        <option key={option.key} value={option.value} className="py-3 space-y-1 rounded-md shadow bg-slate-800 text-slate-200">
                            {option.key}
                        </option>
                    ))}
            </Field>
            <ErrorMessage component="p" name="framework" className="text-xs italic text-red-700" />

        </div>
    );
}
