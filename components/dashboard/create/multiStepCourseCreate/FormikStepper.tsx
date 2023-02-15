import { Form, Formik, FormikConfig, FormikValues, FormikHelpers, useFormikContext } from 'formik';
import Stepper from './Stepper';
import StepperControl from './StepControl';
import React, { ReactElement, ReactNode, useState } from 'react'
import { FormikStepProps } from './Home';
import { ConnectedFocusError } from 'focus-formik-error'
import PreviewModal from './PreviewModal';


export type FormikStepperProps = FormikConfig<FormikValues> & {
    children: ReactNode[]
}


export function FormikStepper({ children, ...props }: FormikStepperProps) {
    const childrenArray = React.Children.toArray(children) as ReactElement<FormikStepProps>[];
    const [step, setStep] = useState(0);
    const currentChild = childrenArray[step];
    const [completed, setCompleted] = useState(false);

    function isLastStep() {
        return step === childrenArray.length - 1;
    }

    const handleSubmit = async (values: FormikValues, actions: FormikHelpers<FormikValues>) => {

        if (isLastStep()) {
            const res = await props.onSubmit(values, actions);
            setCompleted(true);
            setStep(0)
        } else {
            setStep((s) => s + 1);

            // the next line was not covered in the youtube video
            //
            // If you have multiple fields on the same step
            // we will see they show the validation error all at the same time after the first step!
            //
            // If you want to keep that behaviour, then, comment the next line :)
            // If you want the second/third/fourth/etc steps with the same behaviour
            //    as the first step regarding validation errors, then the next line is for you! =)
            //
            // In the example of the video, it doesn't make any difference, because we only
            //    have one field with validation in the second step :)
            actions.setTouched({});
        }

    }

    return (
        <Formik
            {...props}
            validationSchema={currentChild.props.validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting, isValid }) => (
                <Form autoComplete="off" className="">
                    <ConnectedFocusError />
                    <div className="space-y-12">
                        <div className='sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30 py-7 px-7'>
                            <Stepper steps={childrenArray} step={step} completed={completed} isLastStep={isLastStep} />
                        </div>

                        <div className='space-y-4'>
                            {currentChild}
                        </div>
                        <StepperControl step={step} setStep={setStep} isSubmitting={isSubmitting} isLastStep={isLastStep} isValid={isValid} />
                    </div>
                </Form>
            )}
        </Formik>
    );
}