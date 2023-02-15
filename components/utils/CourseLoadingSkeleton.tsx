
const CourseLoadingSkeleton = () => {
    return (
        <>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 gap-y-16 " >
                {Array(6).fill(0).map((_, idx) => (
                    <div className="flex flex-col animate-pulse" key={idx} >
                        <div className="w-full h-40 rounded-md bg-slate-700"></div>
                        <div className="flex-1 pt-4 space-y-6">
                            <div className="h-5 rounded bg-slate-700"></div>
                            <div className="space-y-3">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-2 col-span-2 rounded bg-slate-700"></div>
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-2 col-span-1 rounded bg-slate-700"></div>
                                    <div></div>
                                    <div className="h-2 col-span-1 rounded bg-slate-700"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </>
    );
}
export default CourseLoadingSkeleton;