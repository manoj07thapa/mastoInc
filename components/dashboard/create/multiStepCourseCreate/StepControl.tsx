import { Dispatch, SetStateAction, useState } from "react";
import PreviewModal from "./PreviewModal";
import LoadingSpinner from "@/components/utils/LoadingSpinner";
import { FormikValues, useFormikContext } from "formik";

type StepControlProps = {
    step: number,
    setStep: Dispatch<SetStateAction<number>>,
    isSubmitting: boolean,
    isLastStep: () => boolean
    isValid: boolean
}

const StepControl = ({ step, setStep, isSubmitting, isLastStep, isValid }: StepControlProps) => {
    let [isOpen, setIsOpen] = useState(false)
    const { values } = useFormikContext<FormikValues>()

    function closePreviewModal() {
        setIsOpen(false)
    }

    function openPreviewModal() {
        setIsOpen(true)
    }

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
                {isLastStep() &&
                    <button className="px-4 py-2 bg-pink-600 rounded-md text-slate-200" type="button" onClick={() => openPreviewModal()}>
                        Preview
                    </button>

                }
                {isOpen && <PreviewModal isOpen={isOpen} closePreviewModal={closePreviewModal} />}
            </div>

        </div >
    )
};
export default StepControl;