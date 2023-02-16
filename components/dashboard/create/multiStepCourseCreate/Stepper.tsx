import { CheckIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { ReactElement } from 'react';
import { FormikStepProps } from "./Home";
import { useFormikContext, FormikValues } from 'formik';

type StepperProps = {
    steps: ReactElement<FormikStepProps>[],
    step: number
    completed: boolean
    isLastStep: () => boolean
}

const Stepper = ({ steps, step, isLastStep }: StepperProps) => {

    const displaySteps = steps.map((currentStep, index) => (
        <ol key={index} className="">
            <li className="flex items-baseline space-x-3">
                <div className="flex items-center space-x-2">
                    <span>{(step > index) ? <CheckIcon className={`h-7 w-7 text-white bg-green-900 px-2 py-2 rounded-full font-bold`} /> : <p className={`${step > index && "text-blue-500"} ${(step === index) ? "text-slate-100 " : "text-slate-700"}`}>{index + 1}</p>}</span>
                    <p className={`text-sm font-medium  ${(step > index) && "text-blue-500"} ${(step === index) ? "text-slate-100 " : "text-slate-700"}`}>{currentStep.props.label}</p>
                </div>
                {(step === index && !isLastStep()) ? <ChevronRightIcon className={`h-3 w-3 text-slate-100 font-bold`} /> : null}
            </li>
        </ol>


    ))


    return (
        <div>
            <div className="flex items-center justify-between">{displaySteps}</div>
        </div>
    );
};
export default Stepper;