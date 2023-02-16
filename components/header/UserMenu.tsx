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
    const router = useRouter();

    const handleSignOut = async () => {
        try {
            await Auth.signOut()
            userContext?.setUser(null)
            router.push("/auth/login")

        } catch (error) {
            console.log('Error signing out');
        }
    }

    return (
        <div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                    type="button"
                    className="p-1 text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="w-5 h-5" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                    <div>
                        <Menu.Button className="flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open user menu</span>
                            <UserIcon className="w-5 h-5" />
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
                        <Menu.Items className="absolute right-0 z-50 w-48 mt-2 overflow-hidden origin-top-right rounded-md shadow-lg bg-violet-100 ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="flex items-center py-2 pl-4 space-x-4 text-center bg-indigo-600">
                                <LockClosedIcon className="w-4 h-4 text-white" />
                                <p className="tracking-wider uppercase ">{userContext?.user?.attributes?.name}</p>
                            </div>

                            <Menu.Item>
                                {({ active }) => (
                                    <Link href="/dashboard" >
                                        <div className="flex space-x-4" >
                                            <CpuChipIcon className="w-4 h-4 text-pink-600" />
                                            <p className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                                                Dashboard
                                            </p>
                                        </div>
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item >
                                {({ active }) => (
                                    <button
                                        className={classNames(
                                            active ? "bg-gray-100" : "",
                                            " px-4 py-2 text-sm text-gray-700 w-full text-left flex space-x-4"
                                        )}
                                        onClick={handleSignOut}
                                    >
                                        <div className="flex items-center space-x-3">
                                            <ShareIcon className="w-4 h-4 text-pink-600" />
                                            <p>Signout</p>
                                        </div>
                                    </button>
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
