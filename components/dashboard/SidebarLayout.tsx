import { Fragment, useContext, useState, ReactNode } from 'react';
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon, CakeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
// import SlideOverMenu from "./SlideOverMenu";
import { UserContext } from "../../contexts/UserContext";
import ThemeSwitcher from '../header/ThemeSwitcher';

type SidebarLayoutProps = {
    children: ReactNode
}

const SidebarLayout = ({ children }: SidebarLayoutProps) => {
    const router = useRouter();
    const userContext = useContext(UserContext);
    const group = userContext?.user?.signInUserSession?.accessToken?.payload["cognito:groups"];

    return (
        <Fragment>
            <div className="mx-auto max-w-9xl ">
                <div className="flex flex-col items-start md:container md:relative lg:flex-row ">
                    <aside className="justify-center hidden transition duration-200 ease-in-out border-r md:sticky md:top-0 md:h-screen md:w-2/12 md:hover:overflow-auto lg:block border-slate-800">
                        <div className="space-y-20 ">
                            <div className="w-full ">
                                <div className='sticky top-0 flex items-center justify-between'>
                                    <Link href="/" className=' md:sticky md:top-0'>
                                        <div className="flex space-x-6 text-lg font-semibold transition ease-in-out shadow-md bg-slate-900 py-7 text-slate-300 hover:text-slate-200">
                                            <CakeIcon className="w-6 h-6 text-pink-600 " />
                                            <p className="tracking-wide text-md ">Masto Inc</p>
                                        </div>
                                    </Link>
                                    <ThemeSwitcher />
                                </div>

                                <div className="pr-5 mt-12 space-y-5">
                                    <div>
                                        <Link href="/dashboard" className={`text-slate-300 text-lg font-medium tracking-wide ${router.pathname === "/dashboard" ? "bg-indigo-600 text-slate-200 px-2 py-1" : ""}`}>General Information</Link>
                                    </div>
                                    <div>
                                        {userContext?.user && !group && (
                                            <Disclosure
                                                className="pb-4 border-b border-gray-800 md:border-none"
                                                as="div"
                                            >
                                                {({ open }) => (
                                                    <>
                                                        <Disclosure.Button className="flex justify-between w-full py-2 tracking-wide text-left rounded-md text-md focus:outline-none">
                                                            <span>Profile</span>
                                                            <ChevronUpIcon
                                                                className={`${open ? "rotate-180 transform" : ""
                                                                    } h-5 w-5 `}
                                                            />
                                                        </Disclosure.Button>
                                                        <Transition
                                                            enter="transition duration-100 ease-out"
                                                            enterFrom="transform scale-95 opacity-0"
                                                            enterTo="transform scale-100 opacity-100"
                                                            leave="transition duration-75 ease-out"
                                                            leaveFrom="transform scale-100 opacity-100"
                                                            leaveTo="transform scale-95 opacity-0"
                                                            className="pl-2 mt-2 space-y-4 text-sm md:pl-4 md:border-l md:border-gray-800 md:text-gray-400"
                                                        >
                                                            <Disclosure.Panel className=" md:hover:text-gray-300">
                                                                Your Information
                                                            </Disclosure.Panel>
                                                            <Disclosure.Panel className=" md:hover:text-gray-300">
                                                                <Link href={`/dashboard/profile/enrolledCourses`}>
                                                                    Enrolled Course
                                                                </Link>
                                                            </Disclosure.Panel>
                                                            <Disclosure.Panel className=" md:hover:text-gray-300">
                                                                Assignments
                                                            </Disclosure.Panel>
                                                        </Transition>
                                                    </>
                                                )}
                                            </Disclosure>
                                        )}
                                    </div>
                                    <div>
                                        {(group && group.includes("admin")) && (
                                            <Disclosure
                                                className="pb-4 border-b border-gray-800 md:border-none"
                                                as="div"
                                            >
                                                {({ open }) => (
                                                    <>
                                                        <Disclosure.Button className="flex justify-between w-full py-2 tracking-wide text-left rounded-md text-md focus:outline-none">
                                                            <span>Analytics</span>
                                                            <ChevronUpIcon
                                                                className={`${open ? "rotate-180 transform" : ""
                                                                    } h-5 w-5 `}
                                                            />
                                                        </Disclosure.Button>
                                                        <Transition
                                                            enter="transition duration-100 ease-out"
                                                            enterFrom="transform scale-95 opacity-0"
                                                            enterTo="transform scale-100 opacity-100"
                                                            leave="transition duration-75 ease-out"
                                                            leaveFrom="transform scale-100 opacity-100"
                                                            leaveTo="transform scale-95 opacity-0"
                                                            className="pl-2 mt-2 space-y-4 text-sm md:pl-4 md:border-l md:border-gray-800 md:text-gray-400"
                                                        >
                                                            <Disclosure.Panel className=" md:hover:text-gray-300">
                                                                Courses
                                                            </Disclosure.Panel>
                                                            <Disclosure.Panel className=" md:hover:text-gray-300">
                                                                Home Resource
                                                            </Disclosure.Panel>
                                                            <Disclosure.Panel className=" md:hover:text-gray-300">
                                                                Users
                                                            </Disclosure.Panel>
                                                        </Transition>
                                                    </>
                                                )}
                                            </Disclosure>
                                        )}
                                    </div>

                                    <div>
                                        {group &&
                                            (group.includes("admin") || group.includes("teacher")) && (
                                                <Disclosure
                                                    className="pb-4 border-b border-gray-800 md:border-none"
                                                    as="div"
                                                    defaultOpen={true}
                                                >
                                                    {({ open }) => (
                                                        <>
                                                            <Disclosure.Button className="flex justify-between w-full py-2 tracking-wide text-left rounded-md text-md focus:outline-none">
                                                                <span>Create</span>
                                                                <ChevronUpIcon
                                                                    className={`${open ? "rotate-180 transform" : ""
                                                                        } h-5 w-5 `}
                                                                />
                                                            </Disclosure.Button>
                                                            <Transition
                                                                enter="transition duration-100 ease-out"
                                                                enterFrom="transform scale-95 opacity-0"
                                                                enterTo="transform scale-100 opacity-100"
                                                                leave="transition duration-75 ease-out"
                                                                leaveFrom="transform scale-100 opacity-100"
                                                                leaveTo="transform scale-95 opacity-0"
                                                                className="pl-2 mt-2 space-y-4 text-sm md:pl-4 md:border-l md:border-gray-800 md:text-gray-400"
                                                            >
                                                                <Disclosure.Panel
                                                                    className={`${router.pathname === "/dashboard/create/course"
                                                                        ? "md:text-slate-100 font-medium"
                                                                        : "text-slate-400"
                                                                        } md:hover:text-slate-100`}
                                                                >
                                                                    <Link href="/dashboard/create/course">
                                                                        Course
                                                                    </Link>
                                                                </Disclosure.Panel>
                                                                <Disclosure.Panel
                                                                    className={`${router.pathname === "/dashboard/create/course"
                                                                        ? "md:text-slate-100 font-medium"
                                                                        : "text-slate-400"
                                                                        } md:hover:text-slate-100`}
                                                                >
                                                                </Disclosure.Panel>
                                                                {group && group.includes("admin") && (
                                                                    <Disclosure.Panel
                                                                        className={`${router.pathname ===
                                                                            "/dashboard/create/resource"
                                                                            ? "md:text-indigo-400 font-bold"
                                                                            : ""
                                                                            } md:hover:text-gray-300`}
                                                                    >
                                                                        <Link href="/dashboard/create/resource">
                                                                            Resource
                                                                        </Link>
                                                                    </Disclosure.Panel>
                                                                )}
                                                                {group && group.includes("admin") && (
                                                                    <Disclosure.Panel
                                                                        className={`${router.pathname ===
                                                                            "/dashboard/create/solution"
                                                                            ? "md:text-indigo-400 font-bold"
                                                                            : ""
                                                                            } md:hover:text-gray-300`}
                                                                    >
                                                                        <Link href="/dashboard/create/solution">
                                                                            Solution
                                                                        </Link>
                                                                    </Disclosure.Panel>
                                                                )}
                                                            </Transition>
                                                        </>
                                                    )}
                                                </Disclosure>
                                            )}
                                    </div>
                                    <div>

                                        {(group && group.includes("admin")) && (
                                            <Disclosure
                                                as="div"
                                                className="pb-4 border-b border-gray-800 md:border-none"
                                                defaultOpen={true}
                                            >
                                                {({ open }) => (
                                                    <>
                                                        <Disclosure.Button className="flex justify-between w-full py-2 tracking-wide text-left transition duration-150 ease-in-out rounded-md text-md">
                                                            <span>Courses</span>
                                                            <ChevronUpIcon
                                                                className={`${open ? "rotate-180 transform" : ""
                                                                    } h-5 w-5 `}
                                                            />
                                                        </Disclosure.Button>
                                                        <Transition
                                                            enter="transition duration-100 ease-out"
                                                            enterFrom="transform scale-95 opacity-0"
                                                            enterTo="transform scale-100 opacity-100"
                                                            leave="transition duration-75 ease-out"
                                                            leaveFrom="transform scale-100 opacity-100"
                                                            leaveTo="transform scale-95 opacity-0"
                                                            className="pl-2 mt-2 space-y-4 text-sm md:pl-4 md:border-l md:border-gray-800 md:text-gray-400 "
                                                        >
                                                            <Disclosure.Panel
                                                                className={`${router.pathname === "/dashboard/viewCourses"
                                                                    ? "md:text-indigo-400 font-bold"
                                                                    : ""
                                                                    } md:hover:text-gray-300`}
                                                            >
                                                                <Link href="/dashboard/viewCourses">
                                                                    View courses
                                                                </Link>
                                                            </Disclosure.Panel>
                                                        </Transition>
                                                    </>
                                                )}
                                            </Disclosure>
                                        )}
                                    </div>
                                    <div>
                                        {(group && group.includes("teacher")) && (
                                            <Disclosure
                                                as="div"
                                                className="pb-4 border-b border-gray-800 md:border-none"
                                                defaultOpen={true}

                                            >
                                                {({ open }) => (
                                                    <>
                                                        <Disclosure.Button className="flex justify-between w-full py-2 tracking-wide text-left transition duration-150 ease-in-out rounded-md text-md">
                                                            <span>Courses</span>
                                                            <ChevronUpIcon
                                                                className={`${open ? "rotate-180 transform" : ""
                                                                    } h-5 w-5 `}
                                                            />
                                                        </Disclosure.Button>
                                                        <Transition
                                                            enter="transition duration-100 ease-out"
                                                            enterFrom="transform scale-95 opacity-0"
                                                            enterTo="transform scale-100 opacity-100"
                                                            leave="transition duration-75 ease-out"
                                                            leaveFrom="transform scale-100 opacity-100"
                                                            leaveTo="transform scale-95 opacity-0"
                                                            className="pl-2 mt-2 space-y-4 text-sm md:pl-4 md:border-l md:border-gray-800 md:text-gray-400 "
                                                        >
                                                            <Disclosure.Panel
                                                                className={`${router.pathname === "/dashboard/viewCourses"
                                                                    ? "md:text-slate-400 font-semibold"
                                                                    : ""
                                                                    } md:hover:text-slate-200 md:hover:bg-indigo-700 py-3 px-2`}
                                                            >
                                                                <Link
                                                                    href={`/dashboard/${userContext?.user?.username}/courses`}
                                                                >
                                                                    View courses
                                                                </Link>
                                                            </Disclosure.Panel>
                                                        </Transition>
                                                    </>
                                                )}
                                            </Disclosure>
                                        )}
                                    </div>
                                    <div>
                                        {group && group.includes("admin") && (
                                            <Disclosure
                                                as="div"
                                                className="pb-24 border-b border-gray-800 md:border-none"
                                            >
                                                {({ open }) => (
                                                    <>
                                                        <Disclosure.Button className="flex justify-between w-full py-2 tracking-wide text-left transition duration-150 ease-in-out rounded-md text-md">
                                                            <span>Users</span>
                                                            <ChevronUpIcon
                                                                className={`${open ? "rotate-180 transform" : ""
                                                                    } h-5 w-5 `}
                                                            />
                                                        </Disclosure.Button>
                                                        <Transition
                                                            enter="transition duration-100 ease-out"
                                                            enterFrom="transform scale-95 opacity-0"
                                                            enterTo="transform scale-100 opacity-100"
                                                            leave="transition duration-75 ease-out"
                                                            leaveFrom="transform scale-100 opacity-100"
                                                            leaveTo="transform scale-95 opacity-0"
                                                            className="pl-2 mt-2 space-y-4 text-sm md:pl-4 md:border-l md:border-gray-800 md:text-gray-400"
                                                        >
                                                            <Disclosure.Panel
                                                                className={`${router.pathname === "/dashboard/viewUsers"
                                                                    ? "md:text-indigo-400 font-bold"
                                                                    : ""
                                                                    } md:hover:text-gray-300`}
                                                            >
                                                                <Link href="/dashboard/viewUsers">
                                                                    View Users
                                                                </Link>
                                                            </Disclosure.Panel>
                                                        </Transition>
                                                    </>
                                                )}
                                            </Disclosure>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                    {/* <div className="sticky top-0 lg:hidden">
                        <SlideOverMenu open={open} setOpen={setOpen} />

                    </div> */}

                    <main className=" md:w-10/12 md:mt-0">
                        {children}
                    </main>

                </div>
            </div>
        </Fragment >
    );
};
export default SidebarLayout;
