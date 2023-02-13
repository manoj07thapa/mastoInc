import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useFormikContext, FormikValues } from 'formik';
import { XMarkIcon } from '@heroicons/react/24/solid';
import CourseHeroSection from '@/components/course/CourseHeroSection';
import CourseObjectiveSection from '@/components/course/CourseObjectiveSection';

export type PreviewMOdalProps = {
    closePreviewModal: () => void
    isOpen: boolean
}

export default function PreviewModal({ closePreviewModal, isOpen }: PreviewMOdalProps) {
    const { values } = useFormikContext<FormikValues>()
    console.log('previewodal', values)

    return (
        <>
            {values && <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closePreviewModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex items-center justify-center min-h-full p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="relative w-full max-w-3xl p-6 text-left align-middle transition-all transform rounded-md shadow-xl bg-slate-800">

                                    <CourseHeroSection values={values} />
                                    <CourseObjectiveSection values={values} />

                                    <button
                                        type="button"
                                        className="absolute z-10 inline-flex items-center px-2 py-2 bg-red-500 rounded-full shadow-lg -top-2 -right-2 text-slate-100 "
                                        onClick={closePreviewModal}
                                    >
                                        <XMarkIcon className='w-5 h-5' />
                                    </button>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
            }
        </>
    )
}
