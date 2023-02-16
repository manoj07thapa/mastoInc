import { Dispatch, SetStateAction, useState } from "react";
import LoadingSpinner from "@/components/utils/LoadingSpinner";

type StepControlProps = {
    step: number,
    setStep: Dispatch<SetStateAction<number>>,
    isSubmitting: boolean,
    isLastStep: () => boolean
    isValid: boolean
}

const StepControl = ({ step, setStep, isSubmitting, isLastStep, isValid }: StepControlProps) => {

    return (
        <div className="flex justify-around mt-12 mb-8 ">
            <div>
                {step > 0 ? (
                    <button
                        className="px-4 py-2 text-gray-300 bg-pink-900 rounded-md"
                        disabled={isSubmitting}
                        onClick={() => setStep((s) => s - 1)}
                        type="button"
                    >Back </button>
                ) : null}
            </div>
            <div className="space-x-3">
                <button
                    className={`px-4 py-2 text-gray-300 bg-blue-900 rounded-md ${(!isValid || isSubmitting) && "text-slate-400 bg-slate-700"} `}
                    disabled={isSubmitting}
                    type="submit"
                >
                    {isSubmitting ? <LoadingSpinner /> : isLastStep() ? 'Create' : 'Next'}
                </button>
            </div>

        </div >
    )
};
export default StepControl;