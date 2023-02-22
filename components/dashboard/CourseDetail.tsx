import { motion } from "framer-motion";
import { Course } from "@/types/amplifyCodegen/codegenTypes";

type CourseDetailProps = Omit<Course, 'enrollees'>

const CourseDetail = ({ course }: { course: CourseDetailProps }) => {

    return (
        <motion.div className=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <h1 className="text-xl font-bold tracking-wider">Course Detail</h1>
            <h3>{course.title}</h3>
            <h3>{course.subtitle}</h3>
            <h3>{course.category}</h3>
        </motion.div>
    )
};
export default CourseDetail;