import { Dispatch, SetStateAction } from "react";
import number from 'yup';

type StepControlProps = {
    step: number,
    setStep: Dispatch<SetStateAction<number>>,
    isSubmitting: boolean,
    isLastStep: () => boolean
}

const StepControl = ({ step, setStep, isSubmitting, isLastStep }: StepControlProps) => {
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
            <div>
                <button
                    className="px-4 py-2 text-gray-300 bg-blue-900 rounded-md"
                    disabled={isSubmitting}
                    type="submit"
                >
                    {isSubmitting ? 'Submitting' : isLastStep() ? 'Submit' : 'Next'}
                </button>
            </div>

        </div >
    )
};
export default StepControl;