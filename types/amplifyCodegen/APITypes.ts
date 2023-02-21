import { DeepOmit } from './DeepOmit';
import {
    GetUserQuery, Course, Syllabus, ListResourcesQuery
} from '../../src/API';
import { ListCoursesQuery } from './codegenTypes';


export type GetUserQueryType = DeepOmit<
    Exclude<GetUserQuery['getUser'], null>,
    '__typename'
>;
export type CourseType = DeepOmit<
    Exclude<Course, null>,
    '__typename'
>;
export type SyllabusType = DeepOmit<
    Exclude<Syllabus, null>,
    '__typename'
>;
export type ResourcesType = DeepOmit<
    Exclude<ListResourcesQuery['listResources'], null>,
    '__typename'
>;
export type ListCoursesType = DeepOmit<
    Exclude<ListCoursesQuery['listCourses'], null>,
    '__typename'
>;

