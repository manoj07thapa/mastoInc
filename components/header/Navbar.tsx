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

    const handleSignOut = async (close: () => void) => {
        try {
            await Auth.signOut()
            userContext?.setUser(null)
            router.push("/auth/login")
            close()

        } catch (error) {
            console.log('Error signing out');

        }

    }

    return (
        <Popover className="sticky top-0 z-10 bg-gray-100 border-b dark:bg-slate-900 backdrop-filter backdrop-blur-lg bg-opacity-30 dark:border-slate-800">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 ">
                <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link href="/" className="text-xl font-extrabold tracking-wider">
                            MastoInc
                        </Link>
                    </div>

                    {/**bar menu for mobile devices only */}
                    <div className="-my-2 -mr-2 md:hidden">
                        <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open menu</span>
                            <Bars3CenterLeftIcon className="w-6 h-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    {/**nav menu as popovers */}
                    <Popover.Group as="nav" className="hidden space-x-10 md:flex md:items-center">
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
                                        <Popover.Panel className="absolute z-10 w-screen max-w-4xl px-2 mt-3 -ml-4 transform sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                                            {({ close }) => (
                                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                                    <div className="relative grid grid-cols-3 gap-6 px-5 py-6 bg-violet-100 dark:bg-slate-800 sm:gap-8 sm:p-8">
                                                        {solutions.map((item) => (
                                                            <Popover.Button
                                                                key={item.name}
                                                                className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-100"
                                                                as={Link}
                                                                href={`/solutions/${item.href}`}
                                                            >
                                                                <div

                                                                >
                                                                    <div className="flex">
                                                                        <item.icon
                                                                            className="flex-shrink-0 w-6 h-6 text-indigo-600"
                                                                            aria-hidden="true"
                                                                        />
                                                                        <div className="flex flex-col items-start ml-4">
                                                                            <p className="text-base font-medium text-gray-900">
                                                                                {item.name}
                                                                            </p>
                                                                            <p className="mt-1 text-sm text-gray-500">
                                                                                {item.description}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Popover.Button>
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
                                            open ? "text-slate-100" : "text-slate-200",
                                            "group rounded-md inline-flex items-center text-base font-medium hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
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
                                        <Popover.Panel className="absolute z-10 w-screen max-w-4xl px-2 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0">
                                            {({ close }) => (
                                                <div className="overflow-hidden rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                                                    <div className="relative grid grid-cols-3 gap-6 px-5 py-6 dark:bg-slate-800 sm:gap-8 sm:p-8">
                                                        {courses.map((item) => (
                                                            <Popover.Button
                                                                as={Link}
                                                                key={item.name}
                                                                className="p-3 -m-3 rounded-md hover:bg-slate-700"
                                                                href={`/courses/${item.href}`}
                                                            >
                                                                <div>
                                                                    <div className="flex">
                                                                        <item.icon
                                                                            className="flex-shrink-0 w-6 h-6 text-indigo-500"
                                                                            aria-hidden="true"
                                                                        />
                                                                        <div className="flex flex-col items-start ml-4">
                                                                            <p className="text-base font-medium text-slate-200">
                                                                                {item.name}
                                                                            </p>
                                                                            <p className="mt-1 text-sm text-slate-400">
                                                                                {item.description}
                                                                            </p>
                                                                        </div>
                                                                    </div>{" "}
                                                                </div>
                                                            </Popover.Button>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>
                        <Link href="/contact" className="text-base font-medium transition ease-in-out hover:text-gray-200">
                            Contact
                        </Link>
                    </Popover.Group>

                    {/**toggle right part of nav bar according to user's presence */}
                    <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
                        <div>
                            {userContext?.user ? (
                                <UserMenu />
                            ) : (
                                <div>
                                    <Link href="/auth/login" className="text-base font-medium transition ease-in-out whitespace-nowrap hover:text-gray-200">
                                        Login
                                    </Link>
                                    <Link href="/auth/register" className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium transition ease-in-out bg-indigo-600 border border-transparent rounded-md shadow-sm whitespace-nowrap hover:text-gray-200 hover:bg-indigo-700">
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
            {/* <MobileNav handleSignOut={handleSignOut} /> */}
            <div>
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
                        className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden bg-violet-100"
                    >
                        {({ close }) => (
                            <div className="divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
                                <div className="px-5 pt-5 pb-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="text-gray-900">WebMolecule</span>
                                        </div>
                                        <div className="-mr-2">
                                            <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">Close menu</span>
                                                <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                                            </Popover.Button>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <h4 className="pb-6 font-semibold tracking-wide text-gray-600 text-md">
                                            Solutions
                                        </h4>
                                        <nav className="grid gap-y-8">
                                            {solutions.map((item) => (
                                                <button
                                                    key={item.name}
                                                    onClick={() => {
                                                        router.push(`/solutions/${item.href}`), close();
                                                    }}
                                                    className="flex items-center p-3 -m-3 transition ease-in-out rounded-md hover:bg-gray-100"
                                                >
                                                    <item.icon
                                                        className="flex-shrink-0 w-6 h-6 text-indigo-600"
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
                                <div className="px-5 py-6 mt-3 space-y-3 ">
                                    <h4 className="font-semibold tracking-wide text-gray-600 text-md ">
                                        Courses
                                    </h4>
                                    <div className="grid grid-cols-2 gap-y-2 gap-x-8 ">
                                        {courses.map((item) => (
                                            <button
                                                key={item.name}
                                                onClick={() => {
                                                    router.push(`/courses/${item.href}`), close();
                                                }}
                                                className="flex items-start py-3 text-base font-medium text-gray-900 transition ease-in-out hover:text-gray-700"
                                            >
                                                {item.name}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="py-2 mt-1 mb-1">
                                        <button
                                            onClick={() => {
                                                router.push(`/contact`), close();
                                            }}
                                            className="font-semibold tracking-wide text-gray-600 text-md "
                                        >
                                            Contact
                                        </button>
                                    </div>
                                    {userContext?.user ? (
                                        <div className="mt-2 space-y-5">
                                            <button
                                                onClick={() => handleSignOut(close)}

                                                className="flex items-center justify-center w-full px-4 py-2 text-base font-medium bg-indigo-600 border border-transparent rounded-md shadow-sm text-grau-600 hover:bg-indigo-700"
                                            >
                                                Signout
                                            </button>
                                            <button
                                                onClick={() => {
                                                    router.push(`/dashboard`), close();
                                                }}
                                                className="font-semibold tracking-wide text-gray-600 text-md "
                                            >
                                                Dashboard
                                            </button>

                                        </div>
                                    ) : (
                                        <div>
                                            <button
                                                onClick={() => {
                                                    router.push("/auth/register"), close();
                                                }}
                                                className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
                                            >
                                                Register
                                            </button>
                                            <p className="mt-6 text-base font-medium text-center text-gray-500">
                                                Existing customer?{" "}
                                                <button
                                                    onClick={() => {
                                                        router.push("/auth/login"), close();
                                                    }}
                                                    className="text-indigo-600 hover:text-indigo-500"
                                                >
                                                    Login
                                                </button>
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </Popover.Panel>
                </Transition>
            </div>
        </Popover>
    );
}
