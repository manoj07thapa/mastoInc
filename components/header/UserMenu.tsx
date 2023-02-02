import { Menu, Transition } from "@headlessui/react";
import { UserIcon, BellIcon } from "@heroicons/react/24/outline";
import { Fragment, useContext } from "react";
import { Auth } from "aws-amplify";
// import MyLink from "./MyLink";
import { useRouter } from "next/router";
import Link from "next/link";
import {
    LockClosedIcon,
    CpuChipIcon,
    ShareIcon,
} from "@heroicons/react/24/solid";
import { UserContext } from "../../contexts/UserContext"

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

const UserMenu = () => {
    const userContext = useContext(UserContext);

    // const group = userContext?.user?.signInUserSession?.accessToken.payload["cognito:groups"];
    const router = useRouter();
    return (
        <div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                    type="button"
                    className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-5 w-5" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                    <div>
                        <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open user menu</span>
                            <UserIcon className="h-5 w-5" />
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg overflow-hidden bg-violet-100 ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                            <div className="text-center py-2  bg-indigo-600  flex items-center pl-4 space-x-4">
                                <LockClosedIcon className="h-4 w-4 text-white" />
                                <p className="uppercase tracking-wider ">{userContext?.user?.attributes?.name}</p>
                            </div>

                            <Menu.Item>
                                {({ active }) => (
                                    <Link href="/dashboard">
                                        <div className="flex space-x-4">
                                            <CpuChipIcon className="h-4 w-4 text-pink-600" />
                                            <p>Dashboard</p>
                                        </div>
                                    </Link>
                                )}
                            </Menu.Item>

                            <Menu.Item>
                                {({ active }) => (
                                    <div>
                                        <button
                                            type="submit"
                                            className={classNames(
                                                active ? "bg-gray-100" : "",
                                                " px-4 py-2 text-sm text-gray-700 w-full text-left flex space-x-4"
                                            )}
                                            onClick={() => {
                                                Auth.signOut();
                                                router.push("/");
                                                userContext?.setUser(null);
                                            }}
                                        >
                                            <ShareIcon className="h-4 w-4 text-pink-600" />

                                            <p>Signout</p>
                                        </button>
                                    </div>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>
    );
};
export default UserMenu;
