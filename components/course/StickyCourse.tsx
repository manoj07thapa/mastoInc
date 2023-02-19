import { useRouter } from "next/router";
import Image from "next/image";
import { UserContext } from "@/contexts/UserContext";
import { useContext } from "react";
import { CourseWithImagesProps } from './CourseContainer';


const StickyCourse = ({ ssgCourse, courseImages, subscribeToCourse }: CourseWithImagesProps) => {
    const router = useRouter();
    const userContext = useContext(UserContext);
    const { duration, price, time } = ssgCourse

    return (
        <>
            <aside className="sticky top-0 hidden w-2/3 col-span-3 border border-gray-800 shadow-xl xl:right-36 lg:right-6 md:h-2/3 md:block">
                <Image
                    src={courseImages[0]}
                    height={234}
                    width={300}
                    alt="course image"
                    className="shadow-md "
                    priority
                />
                <div className="pb-5 space-y-3">
                    {/** course time section */}
                    <section className="px-4 py-2 border-b border-gray-800">
                        <h3 className="tracking-wide text-medium">Duration </h3>
                        <p className="text-sm text-gray-400">{duration}</p>
                    </section>
                    {/** course time section */}
                    <section className="px-4 py-2 border-b border-gray-800">
                        <h3 className="tracking-wide text-medium">Time </h3>
                        <p className="text-sm text-gray-400">{time}</p>
                    </section>
                    {/** course cost  section */}
                    <section className="px-4 py-2 border-b border-gray-800">
                        <h3 className="tracking-wide text-medium">Total cost </h3>
                        <p className="text-sm text-gray-400">Rs, {price}</p>
                    </section>
                    {/** course signup section */}
                    <section className="px-4 py-2">
                        <button
                            type="submit"
                            className="w-full px-4 py-2 transition ease-in-out bg-pink-500 rounded-md shadow-md hover:bg-pink-600"
                            onClick={subscribeToCourse}
                        >
                            Enroll Now
                        </button>

                    </section>
                </div>
            </aside>
        </>
    );
}
export default StickyCourse;