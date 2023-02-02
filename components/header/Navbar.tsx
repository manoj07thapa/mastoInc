/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useContext } from "react";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Bars3CenterLeftIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { courses, solutions } from "./headerData/header/navData";
import UserMenu from "./UserMenu";
import { Auth } from "aws-amplify";
import { UserContext } from "../../contexts/UserContext";
import ThemeSwitcher from "./ThemeSwitcher";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
    const router = useRouter();
    const userContext = useContext(UserContext);

    return (
        <Popover className=" bg-gray-100 dark:bg-slate-900  sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
                <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link href="/" className="text-xl font-extrabold tracking-wider">
                            WebMolecule
                        </Link>
                    </div>

                    {/**bar menu for mobile devices only */}
                    <div className="-mr-2 -my-2 md:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open menu</span>
                            <Bars3CenterLeftIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    {/**nav menu as popovers */}
                    <Popover.Group as="nav" className="hidden md:flex md:items-center space-x-10">
                        <Popover className="relative ">
                            {({ open }) => (
                                <>
                                    <Popover.Button
                                        className={classNames(
                                            open ? "text-slate-900" : "text-slate-700",
                                            "group rounded-md inline-flex items-center text-base font-medium hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        )}
                                    >
                                        <span>Solutions</span>
                                        <ChevronDownIcon
                                            className={classNames(
                                                open ? "text-gray-600" : "text-gray-400",
                                                "ml-2 h-5 w-5 group-hover:text-gray-500"
                                            )}
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-4xl sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                                            {({ close }) => (
                                                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                    <div className="relative grid grid-cols-3  gap-6 bg-violet-100 dark:bg-slate-800 px-5 py-6 sm:gap-8 sm:p-8">
                                                        {solutions.map((item) => (
                                                            <div
                                                                key={item.name}
                                                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-100"
                                                            >
                                                                <Link
                                                                    href={`/solutions/${item.href}`}
                                                                >
                                                                    <div className="flex">
                                                                        <item.icon
                                                                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                                                            aria-hidden="true"
                                                                        />
                                                                        <div className="ml-4 flex items-start flex-col">
                                                                            <p className="text-base font-medium text-gray-900">
                                                                                {item.name}
                                                                            </p>
                                                                            <p className="mt-1 text-sm text-gray-500">
                                                                                {item.description}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>

                        <Popover className="relative">
                            {({ open }) => (
                                <>
                                    <Popover.Button
                                        className={classNames(
                                            open ? "text-gray-200" : "text-white",
                                            "group rounded-md inline-flex items-center text-base font-medium hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        )}
                                    >
                                        <span>Courses</span>
                                        <ChevronDownIcon
                                            className={classNames(
                                                open ? "text-gray-600" : "text-gray-400",
                                                "ml-2 h-5 w-5 group-hover:text-gray-500"
                                            )}
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-4xl sm:px-0">
                                            {({ close }) => (
                                                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                    <div className="relative grid grid-cols-3 gap-6 bg-violet-100 px-5 py-6 sm:gap-8 sm:p-8">
                                                        {courses.map((item) => (
                                                            <div
                                                                key={item.name}
                                                                className="-m-3 p-3  rounded-lg hover:bg-gray-100"
                                                            >
                                                                <Link

                                                                    href={`/courses/${item.href}`}
                                                                >
                                                                    <div className="flex">
                                                                        <item.icon
                                                                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                                                            aria-hidden="true"
                                                                        />
                                                                        <div className="ml-4 flex flex-col items-start">
                                                                            <p className="text-base font-medium text-gray-900">
                                                                                {item.name}
                                                                            </p>
                                                                            <p className="mt-1 text-sm text-gray-500">
                                                                                {item.description}
                                                                            </p>
                                                                        </div>
                                                                    </div>{" "}
                                                                </Link>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>

                        <Link href="/contact" className="text-base font-medium  hover:text-gray-200 transition ease-in-out">
                            Contact
                        </Link>

                    </Popover.Group>
                    {/**toggle right part of nav bar according to user's presence */}
                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                        <div>
                            {userContext?.user ? (
                                <UserMenu />
                            ) : (
                                <div>
                                    <Link href="/auth/login" className="whitespace-nowrap text-base font-medium hover:text-gray-200 transition ease-in-out">
                                        Login
                                    </Link>
                                    <Link href="/auth/register" className=" transition ease-in-out ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium hover:text-gray-200 bg-indigo-600 hover:bg-indigo-700">
                                        Register
                                    </Link>
                                </div>
                            )}
                        </div>
                        <div className="ml-5"><ThemeSwitcher /></div>
                    </div>
                </div>
            </div>
            {/**mobile device menu */}
            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel
                    focus
                    className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden bg-violet-100"
                >
                    {({ close }) => (
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5  divide-y-2 divide-gray-50">
                            <div className="pt-5 pb-6 px-5">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <span className="text-gray-900">WebMolecule</span>
                                    </div>
                                    <div className="-mr-2">
                                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <span className="sr-only">Close menu</span>
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <h4 className="text-md font-semibold text-gray-600 tracking-wide pb-6">
                                        Solutions
                                    </h4>
                                    <nav className="grid gap-y-8">
                                        {solutions.map((item) => (
                                            <button
                                                key={item.name}
                                                onClick={() => {
                                                    router.push(`/solutions/${item.href}`), close();
                                                }}
                                                className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-100 transition ease-in-out"
                                            >
                                                <item.icon
                                                    className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                                    aria-hidden="true"
                                                />
                                                <span className="ml-3 text-base font-medium text-gray-900">
                                                    {item.name}
                                                </span>
                                            </button>
                                        ))}
                                    </nav>
                                </div>
                            </div>
                            <div className=" px-5 space-y-3 mt-3 py-6">
                                <h4 className="text-md font-semibold text-gray-600 tracking-wide ">
                                    Courses
                                </h4>
                                <div className="grid grid-cols-2 gap-y-2 gap-x-8 ">
                                    {courses.map((item) => (
                                        <button
                                            key={item.name}
                                            onClick={() => {
                                                router.push(`/courses/${item.href}`), close();
                                            }}
                                            className="transition ease-in-out text-base font-medium text-gray-900 hover:text-gray-700  py-3  items-start flex"
                                        >
                                            {item.name}
                                        </button>
                                    ))}
                                </div>
                                <div className="mt-1 mb-1 py-2">
                                    <button
                                        onClick={() => {
                                            router.push(`/contact`), close();
                                        }}
                                        className="text-md font-semibold text-gray-600 tracking-wide "
                                    >
                                        Contact
                                    </button>
                                </div>
                                {userContext?.user ? (
                                    <div className="mt-2 space-y-5">
                                        <button
                                            onClick={() => {
                                                router.push(`/dashboard`), close();
                                            }}
                                            className="text-md font-semibold text-gray-600 tracking-wide "
                                        >
                                            Dashboard
                                        </button>
                                        <button
                                            onClick={() => {
                                                Auth.signOut(),
                                                    userContext?.setUser(null),
                                                    router.push("/"),
                                                    close();
                                            }}
                                            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                        >
                                            Signout
                                        </button>
                                    </div>
                                ) : (
                                    <div>
                                        <button
                                            onClick={() => {
                                                router.push("/auth/signUp"), close();
                                            }}
                                            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                        >
                                            Sign up
                                        </button>
                                        <p className="mt-6 text-center text-base font-medium text-gray-500">
                                            Existing customer?{" "}
                                            <button
                                                onClick={() => {
                                                    router.push("/auth/signIn"), close();
                                                }}
                                                className="text-indigo-600 hover:text-indigo-500"
                                            >
                                                Sign in
                                            </button>
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </Popover.Panel>
            </Transition>
        </Popover>
    );
}
