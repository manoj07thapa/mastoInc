import Image from "next/image";
import ReactImage from "../../public/react-2.svg";
import TailwindImage from "../../public/tailwindcss.svg";
import NodeImage from "../../public/nodejs-1.svg";
import { ResourceProps } from '../../types/types';


const HeroSection = ({ heroResources }: { heroResources: ResourceProps[] }) => {
    return (
        <div className="pt-12 sm:pt-24">
            {heroResources.map((res, idx) => (
                <div
                    key={idx}
                    className=" sm:flex sm:items-center lg:items-start sm:justify-between sm:space-x-6 lg:space-x-24"
                >
                    <div className="">
                        <p className="hidden px-4 py-2 text-sm text-gray-200 bg-gray-800 rounded-md shadow-md sm:leading-6 sm:inline">
                            {res.subtitle}
                        </p>
                        <h1 className="text-4xl font-extrabold text-center lg:text-7xl sm:text-left sm:pt-4">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-purple-500 to-indigo-600">
                                {res.title}
                            </span>
                            {/* {""} <span>{res.subtitle}</span> */}
                        </h1>
                        <p className="pt-6 text-lg font-medium text-center text-gray-300 sm:text-left">
                            {/* <span className="">{res.subtitle2}</span> */}
                            {""} <span>{res.description}</span>
                        </p>
                        <button
                            type="submit"
                            className="justify-center w-full px-4 py-3 mt-6 font-semibold tracking-wide transition ease-in-out bg-indigo-800 rounded-md shadow-md hover:bg-indigo-900 sm:w-2/3 md:w-1/3 text-medium"
                        >
                            View courses
                        </button>
                    </div>
                    <div className="relative items-center hidden sm:flex sm:flex-col">
                        <div className="flex">
                            <Image
                                height={200}
                                width={200}
                                src={TailwindImage}
                                alt="tailwindcss image"
                                className="shadow-md "
                                priority
                            />
                            <Image
                                height={200}
                                width={200}
                                src={NodeImage}
                                alt="node image"
                                className="shadow-md "
                                priority
                            />
                        </div>
                        <Image
                            height={200}
                            width={200}
                            src={ReactImage}
                            alt="react image"
                            className="shadow-md"
                            priority
                        />
                        <div className="absolute z-0 bg-gradient-to-r from-indigo-900 to-green-900 top-0 left-0 w-[100%] h-[150%] blur-3xl rounded-full "></div>
                        {/* <div className="absolute z-10 bg-gradient-to-r from-gray-900 to-gray-200 bottom-0  w-[300%] h-[100%] blur-3xl"></div> */}
                        {/* <div className="absolute z-0 bg-gradient-to-r from-blue-800 to-blue-500 right-0  w-[300%] h-[100%] blur-3xl"></div> */}
                    </div>
                </div>
            ))}
        </div>
    );
};
export default HeroSection;
