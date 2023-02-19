import { ChevronUpIcon } from '@heroicons/react/24/outline';
import { SyllabusProps } from '../../types/types';
import { Disclosure, Transition } from "@headlessui/react";
import { Syllabus } from '@/src/API';


const Syllabuses = ({ syllabus }: { syllabus: Syllabus[] }) => {
    return (
        <div className="w-full mt-2">
            <h3 className="text-lg font-semibold tracking-wide">Course Content</h3>
            <div className="mt-4 space-y-4 ">
                {syllabus?.map((content, idx) => (
                    <Disclosure key={idx}>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-left text-gray-300 bg-gray-800 rounded-md text-medium focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
                                    <span>{content.topic}</span>
                                    <ChevronUpIcon
                                        className={`${open ? "rotate-180 transform" : ""
                                            } h-5 w-5 text-indigo-700`}
                                    />
                                </Disclosure.Button>
                                <Transition
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                >
                                    <Disclosure.Panel className="px-4 pt-1 pb-2 text-sm text-gray-300 rounded-md">
                                        <span className="">{content.description}</span>
                                        <span className="block mt-2 text-xs text-indigo-600">
                                            Duration <span className="">({content.duration})</span>
                                        </span>
                                    </Disclosure.Panel>
                                </Transition>
                            </>
                        )}
                    </Disclosure>
                ))}
            </div>
        </div>
    );
}
export default Syllabuses;