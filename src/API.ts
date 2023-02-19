/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  username: string,
  email: string,
  phone_number: string,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone_number?: ModelStringInput | null,
  and?: Array<ModelUserConditionInput | null> | null,
  or?: Array<ModelUserConditionInput | null> | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array<string | null> | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array<number | null> | null,
};

export type User = {
  __typename: "User",
  id: string,
  username: string,
  email: string,
  phone_number: string,
  enrolledCourses?: ModelUserCoursesConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelUserCoursesConnection = {
  __typename: "ModelUserCoursesConnection",
  items: Array<UserCourses | null>,
  nextToken?: string | null,
};

export type UserCourses = {
  __typename: "UserCourses",
  id: string,
  userId: string,
  courseId: string,
  user: User,
  course: Course,
  createdAt: string,
  updatedAt: string,
  username?: string | null,
};

export type Course = {
  __typename: "Course",
  id: string,
  title: string,
  subtitle?: string | null,
  category: string,
  images?: Array<string> | null,
  price: number,
  language: string,
  tutor: string,
  tutorWho: string,
  relatedSkills?: Array<string> | null,
  courseObjectives?: Array<string> | null,
  duration: string,
  framework: string,
  prerequisites?: Array<string> | null,
  level: string,
  time: string,
  syllabus?: Array<Syllabus> | null,
  enrollees?: ModelUserCoursesConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type Syllabus = {
  __typename: "Syllabus",
  topic?: string | null,
  description?: string | null,
  duration?: string | null,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  email?: string | null,
  phone_number?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateCourseInput = {
  id?: string | null,
  title: string,
  subtitle?: string | null,
  category: string,
  images?: Array<string> | null,
  price: number,
  language: string,
  tutor: string,
  tutorWho: string,
  relatedSkills?: Array<string> | null,
  courseObjectives?: Array<string> | null,
  duration: string,
  framework: string,
  prerequisites?: Array<string> | null,
  level: string,
  time: string,
  syllabus?: Array<SyllabusInput> | null,
};

export type SyllabusInput = {
  topic?: string | null,
  description?: string | null,
  duration?: string | null,
};

export type ModelCourseConditionInput = {
  title?: ModelStringInput | null,
  subtitle?: ModelStringInput | null,
  category?: ModelStringInput | null,
  images?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  language?: ModelStringInput | null,
  tutor?: ModelStringInput | null,
  tutorWho?: ModelStringInput | null,
  relatedSkills?: ModelStringInput | null,
  courseObjectives?: ModelStringInput | null,
  duration?: ModelStringInput | null,
  framework?: ModelStringInput | null,
  prerequisites?: ModelStringInput | null,
  level?: ModelStringInput | null,
  time?: ModelStringInput | null,
  and?: Array<ModelCourseConditionInput | null> | null,
  or?: Array<ModelCourseConditionInput | null> | null,
  not?: ModelCourseConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array<number | null> | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateCourseInput = {
  id: string,
  title?: string | null,
  subtitle?: string | null,
  category?: string | null,
  images?: Array<string> | null,
  price?: number | null,
  language?: string | null,
  tutor?: string | null,
  tutorWho?: string | null,
  relatedSkills?: Array<string> | null,
  courseObjectives?: Array<string> | null,
  duration?: string | null,
  framework?: string | null,
  prerequisites?: Array<string> | null,
  level?: string | null,
  time?: string | null,
  syllabus?: Array<SyllabusInput> | null,
};

export type DeleteCourseInput = {
  id: string,
};

export type CreateResourceInput = {
  id?: string | null,
  title: string,
  subtitle: string,
  subtitle1?: string | null,
  subtitle2?: string | null,
  description: string,
  page: string,
  section: string,
  s3ImageKeys?: Array<string | null> | null,
};

export type ModelResourceConditionInput = {
  title?: ModelStringInput | null,
  subtitle?: ModelStringInput | null,
  subtitle1?: ModelStringInput | null,
  subtitle2?: ModelStringInput | null,
  description?: ModelStringInput | null,
  page?: ModelStringInput | null,
  section?: ModelStringInput | null,
  s3ImageKeys?: ModelStringInput | null,
  and?: Array<ModelResourceConditionInput | null> | null,
  or?: Array<ModelResourceConditionInput | null> | null,
  not?: ModelResourceConditionInput | null,
};

export type Resource = {
  __typename: "Resource",
  id: string,
  title: string,
  subtitle: string,
  subtitle1?: string | null,
  subtitle2?: string | null,
  description: string,
  page: string,
  section: string,
  s3ImageKeys?: Array<string | null> | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateResourceInput = {
  id: string,
  title?: string | null,
  subtitle?: string | null,
  subtitle1?: string | null,
  subtitle2?: string | null,
  description?: string | null,
  page?: string | null,
  section?: string | null,
  s3ImageKeys?: Array<string | null> | null,
};

export type DeleteResourceInput = {
  id: string,
};

export type CreateUserCoursesInput = {
  id?: string | null,
  userId: string,
  courseId: string,
};

export type ModelUserCoursesConditionInput = {
  userId?: ModelIDInput | null,
  courseId?: ModelIDInput | null,
  and?: Array<ModelUserCoursesConditionInput | null> | null,
  or?: Array<ModelUserCoursesConditionInput | null> | null,
  not?: ModelUserCoursesConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array<string | null> | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateUserCoursesInput = {
  id: string,
  userId?: string | null,
  courseId?: string | null,
};

export type DeleteUserCoursesInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone_number?: ModelStringInput | null,
  and?: Array<ModelUserFilterInput | null> | null,
  or?: Array<ModelUserFilterInput | null> | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items: Array<User | null>,
  nextToken?: string | null,
};

export type ModelCourseFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  subtitle?: ModelStringInput | null,
  category?: ModelStringInput | null,
  images?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  language?: ModelStringInput | null,
  tutor?: ModelStringInput | null,
  tutorWho?: ModelStringInput | null,
  relatedSkills?: ModelStringInput | null,
  courseObjectives?: ModelStringInput | null,
  duration?: ModelStringInput | null,
  framework?: ModelStringInput | null,
  prerequisites?: ModelStringInput | null,
  level?: ModelStringInput | null,
  time?: ModelStringInput | null,
  and?: Array<ModelCourseFilterInput | null> | null,
  or?: Array<ModelCourseFilterInput | null> | null,
  not?: ModelCourseFilterInput | null,
};

export type ModelCourseConnection = {
  __typename: "ModelCourseConnection",
  items: Array<Course | null>,
  nextToken?: string | null,
};

export type ModelResourceFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  subtitle?: ModelStringInput | null,
  subtitle1?: ModelStringInput | null,
  subtitle2?: ModelStringInput | null,
  description?: ModelStringInput | null,
  page?: ModelStringInput | null,
  section?: ModelStringInput | null,
  s3ImageKeys?: ModelStringInput | null,
  and?: Array<ModelResourceFilterInput | null> | null,
  or?: Array<ModelResourceFilterInput | null> | null,
  not?: ModelResourceFilterInput | null,
};

export type ModelResourceConnection = {
  __typename: "ModelResourceConnection",
  items: Array<Resource | null>,
  nextToken?: string | null,
};

export type ModelUserCoursesFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  courseId?: ModelIDInput | null,
  and?: Array<ModelUserCoursesFilterInput | null> | null,
  or?: Array<ModelUserCoursesFilterInput | null> | null,
  not?: ModelUserCoursesFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionUserCoursesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  courseId?: ModelSubscriptionIDInput | null,
  and?: Array<ModelSubscriptionUserCoursesFilterInput | null> | null,
  or?: Array<ModelSubscriptionUserCoursesFilterInput | null> | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array<string | null> | null,
  beginsWith?: string | null,
  in?: Array<string | null> | null,
  notIn?: Array<string | null> | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?: {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    phone_number: string,
    enrolledCourses?: {
      __typename: "ModelUserCoursesConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?: {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    phone_number: string,
    enrolledCourses?: {
      __typename: "ModelUserCoursesConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?: {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    phone_number: string,
    enrolledCourses?: {
      __typename: "ModelUserCoursesConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCourseMutationVariables = {
  input: CreateCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type CreateCourseMutation = {
  createCourse?: {
    __typename: "Course",
    id: string,
    title: string,
    subtitle?: string | null,
    category: string,
    images?: Array<string> | null,
    price: number,
    language: string,
    tutor: string,
    tutorWho: string,
    relatedSkills?: Array<string> | null,
    courseObjectives?: Array<string> | null,
    duration: string,
    framework: string,
    prerequisites?: Array<string> | null,
    level: string,
    time: string,
    syllabus?: Array<{
      __typename: "Syllabus",
      topic?: string | null,
      description?: string | null,
      duration?: string | null,
    }> | null,
    enrollees?: {
      __typename: "ModelUserCoursesConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCourseMutationVariables = {
  input: UpdateCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type UpdateCourseMutation = {
  updateCourse?: {
    __typename: "Course",
    id: string,
    title: string,
    subtitle?: string | null,
    category: string,
    images?: Array<string> | null,
    price: number,
    language: string,
    tutor: string,
    tutorWho: string,
    relatedSkills?: Array<string> | null,
    courseObjectives?: Array<string> | null,
    duration: string,
    framework: string,
    prerequisites?: Array<string> | null,
    level: string,
    time: string,
    syllabus?: Array<{
      __typename: "Syllabus",
      topic?: string | null,
      description?: string | null,
      duration?: string | null,
    }> | null,
    enrollees?: {
      __typename: "ModelUserCoursesConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCourseMutationVariables = {
  input: DeleteCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type DeleteCourseMutation = {
  deleteCourse?: {
    __typename: "Course",
    id: string,
    title: string,
    subtitle?: string | null,
    category: string,
    images?: Array<string> | null,
    price: number,
    language: string,
    tutor: string,
    tutorWho: string,
    relatedSkills?: Array<string> | null,
    courseObjectives?: Array<string> | null,
    duration: string,
    framework: string,
    prerequisites?: Array<string> | null,
    level: string,
    time: string,
    syllabus?: Array<{
      __typename: "Syllabus",
      topic?: string | null,
      description?: string | null,
      duration?: string | null,
    }> | null,
    enrollees?: {
      __typename: "ModelUserCoursesConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateResourceMutationVariables = {
  input: CreateResourceInput,
  condition?: ModelResourceConditionInput | null,
};

export type CreateResourceMutation = {
  createResource?: {
    __typename: "Resource",
    id: string,
    title: string,
    subtitle: string,
    subtitle1?: string | null,
    subtitle2?: string | null,
    description: string,
    page: string,
    section: string,
    s3ImageKeys?: Array<string | null> | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateResourceMutationVariables = {
  input: UpdateResourceInput,
  condition?: ModelResourceConditionInput | null,
};

export type UpdateResourceMutation = {
  updateResource?: {
    __typename: "Resource",
    id: string,
    title: string,
    subtitle: string,
    subtitle1?: string | null,
    subtitle2?: string | null,
    description: string,
    page: string,
    section: string,
    s3ImageKeys?: Array<string | null> | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteResourceMutationVariables = {
  input: DeleteResourceInput,
  condition?: ModelResourceConditionInput | null,
};

export type DeleteResourceMutation = {
  deleteResource?: {
    __typename: "Resource",
    id: string,
    title: string,
    subtitle: string,
    subtitle1?: string | null,
    subtitle2?: string | null,
    description: string,
    page: string,
    section: string,
    s3ImageKeys?: Array<string | null> | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserCoursesMutationVariables = {
  input: CreateUserCoursesInput,
  condition?: ModelUserCoursesConditionInput | null,
};

export type CreateUserCoursesMutation = {
  createUserCourses?: {
    __typename: "UserCourses",
    id: string,
    userId: string,
    courseId: string,
    user: {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone_number: string,
      createdAt: string,
      updatedAt: string,
    },
    course: {
      __typename: "Course",
      id: string,
      title: string,
      subtitle?: string | null,
      category: string,
      images?: Array<string> | null,
      price: number,
      language: string,
      tutor: string,
      tutorWho: string,
      relatedSkills?: Array<string> | null,
      courseObjectives?: Array<string> | null,
      duration: string,
      framework: string,
      prerequisites?: Array<string> | null,
      level: string,
      time: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    username?: string | null,
  } | null,
};

export type UpdateUserCoursesMutationVariables = {
  input: UpdateUserCoursesInput,
  condition?: ModelUserCoursesConditionInput | null,
};

export type UpdateUserCoursesMutation = {
  updateUserCourses?: {
    __typename: "UserCourses",
    id: string,
    userId: string,
    courseId: string,
    user: {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone_number: string,
      createdAt: string,
      updatedAt: string,
    },
    course: {
      __typename: "Course",
      id: string,
      title: string,
      subtitle?: string | null,
      category: string,
      images?: Array<string> | null,
      price: number,
      language: string,
      tutor: string,
      tutorWho: string,
      relatedSkills?: Array<string> | null,
      courseObjectives?: Array<string> | null,
      duration: string,
      framework: string,
      prerequisites?: Array<string> | null,
      level: string,
      time: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    username?: string | null,
  } | null,
};

export type DeleteUserCoursesMutationVariables = {
  input: DeleteUserCoursesInput,
  condition?: ModelUserCoursesConditionInput | null,
};

export type DeleteUserCoursesMutation = {
  deleteUserCourses?: {
    __typename: "UserCourses",
    id: string,
    userId: string,
    courseId: string,
    user: {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone_number: string,
      createdAt: string,
      updatedAt: string,
    },
    course: {
      __typename: "Course",
      id: string,
      title: string,
      subtitle?: string | null,
      category: string,
      images?: Array<string> | null,
      price: number,
      language: string,
      tutor: string,
      tutorWho: string,
      relatedSkills?: Array<string> | null,
      courseObjectives?: Array<string> | null,
      duration: string,
      framework: string,
      prerequisites?: Array<string> | null,
      level: string,
      time: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    username?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?: {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    phone_number: string,
    enrolledCourses?: {
      __typename: "ModelUserCoursesConnection",
      items: Array<{
        __typename: "Course",
        courseId: string,
        userId: string,
        id: string,
      } | null>,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?: {
    __typename: "ModelUserConnection",
    items: Array<{
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone_number: string,
      createdAt: string,
      updatedAt: string,
    } | null>,
    nextToken?: string | null,
  } | null,
};

export type GetCourseQueryVariables = {
  id: string,
};

export type GetCourseQuery = {
  getCourse?: {
    __typename: "Course",
    id: string,
    title: string,
    subtitle?: string | null,
    category: string,
    images?: Array<string> | null,
    price: number,
    language: string,
    tutor: string,
    tutorWho: string,
    relatedSkills?: Array<string> | null,
    courseObjectives?: Array<string> | null,
    duration: string,
    framework: string,
    prerequisites?: Array<string> | null,
    level: string,
    time: string,
    syllabus?: Array<{
      __typename: "Syllabus",
      topic?: string | null,
      description?: string | null,
      duration?: string | null,
    }> | null,
    enrollees?: {
      __typename: "ModelUserCoursesConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCoursesQueryVariables = {
  filter?: ModelCourseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCoursesQuery = {
  listCourses?: {
    __typename: "ModelCourseConnection",
    items: Array<{
      __typename: "Course",
      id: string,
      title: string,
      subtitle?: string | null,
      category: string,
      images?: Array<string> | null,
      price: number,
      language: string,
      tutor: string,
      tutorWho: string,
      relatedSkills?: Array<string> | null,
      courseObjectives?: Array<string> | null,
      duration: string,
      framework: string,
      prerequisites?: Array<string> | null,
      level: string,
      time: string,
      createdAt: string,
      updatedAt: string,
    } | null>,
    nextToken?: string | null,
  } | null,
};

export type GetResourceQueryVariables = {
  id: string,
};

export type GetResourceQuery = {
  getResource?: {
    __typename: "Resource",
    id: string,
    title: string,
    subtitle: string,
    subtitle1?: string | null,
    subtitle2?: string | null,
    description: string,
    page: string,
    section: string,
    s3ImageKeys?: Array<string | null> | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListResourcesQueryVariables = {
  filter?: ModelResourceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListResourcesQuery = {
  listResources?: {
    __typename: "ModelResourceConnection",
    items: Array<{
      __typename: "Resource",
      id: string,
      title: string,
      subtitle: string,
      subtitle1?: string | null,
      subtitle2?: string | null,
      description: string,
      page: string,
      section: string,
      s3ImageKeys?: Array<string | null> | null,
      createdAt: string,
      updatedAt: string,
    } | null>,
    nextToken?: string | null,
  } | null,
};

export type GetUserCoursesQueryVariables = {
  id: string,
};

export type GetUserCoursesQuery = {
  getUserCourses?: {
    __typename: "UserCourses",
    id: string,
    userId: string,
    courseId: string,
    user: {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone_number: string,
      createdAt: string,
      updatedAt: string,
    },
    course: {
      __typename: "Course",
      id: string,
      title: string,
      subtitle?: string | null,
      category: string,
      images?: Array<string> | null,
      price: number,
      language: string,
      tutor: string,
      tutorWho: string,
      relatedSkills?: Array<string> | null,
      courseObjectives?: Array<string> | null,
      duration: string,
      framework: string,
      prerequisites?: Array<string> | null,
      level: string,
      time: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    username?: string | null,
  } | null,
};

export type ListUserCoursesQueryVariables = {
  filter?: ModelUserCoursesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserCoursesQuery = {
  listUserCourses?: {
    __typename: "ModelUserCoursesConnection",
    items: Array<{
      __typename: "UserCourses",
      id: string,
      userId: string,
      courseId: string,
      createdAt: string,
      updatedAt: string,
      username?: string | null,
    } | null>,
    nextToken?: string | null,
  } | null,
};

export type UserCoursesByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserCoursesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserCoursesByUserIdQuery = {
  userCoursesByUserId?: {
    __typename: "ModelUserCoursesConnection",
    items: Array<{
      __typename: "UserCourses",
      id: string,
      userId: string,
      courseId: string,
      createdAt: string,
      updatedAt: string,
      username?: string | null,
    } | null>,
    nextToken?: string | null,
  } | null,
};

export type UserCoursesByCourseIdQueryVariables = {
  courseId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserCoursesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserCoursesByCourseIdQuery = {
  userCoursesByCourseId?: {
    __typename: "ModelUserCoursesConnection",
    items: Array<{
      __typename: "UserCourses",
      id: string,
      userId: string,
      courseId: string,
      createdAt: string,
      updatedAt: string,
      username?: string | null,
    } | null>,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserCoursesSubscriptionVariables = {
  filter?: ModelSubscriptionUserCoursesFilterInput | null,
  username?: string | null,
};

export type OnCreateUserCoursesSubscription = {
  onCreateUserCourses?: {
    __typename: "UserCourses",
    id: string,
    userId: string,
    courseId: string,
    user: {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone_number: string,
      createdAt: string,
      updatedAt: string,
    },
    course: {
      __typename: "Course",
      id: string,
      title: string,
      subtitle?: string | null,
      category: string,
      images?: Array<string> | null,
      price: number,
      language: string,
      tutor: string,
      tutorWho: string,
      relatedSkills?: Array<string> | null,
      courseObjectives?: Array<string> | null,
      duration: string,
      framework: string,
      prerequisites?: Array<string> | null,
      level: string,
      time: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    username?: string | null,
  } | null,
};

export type OnUpdateUserCoursesSubscriptionVariables = {
  filter?: ModelSubscriptionUserCoursesFilterInput | null,
  username?: string | null,
};

export type OnUpdateUserCoursesSubscription = {
  onUpdateUserCourses?: {
    __typename: "UserCourses",
    id: string,
    userId: string,
    courseId: string,
    user: {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone_number: string,
      createdAt: string,
      updatedAt: string,
    },
    course: {
      __typename: "Course",
      id: string,
      title: string,
      subtitle?: string | null,
      category: string,
      images?: Array<string> | null,
      price: number,
      language: string,
      tutor: string,
      tutorWho: string,
      relatedSkills?: Array<string> | null,
      courseObjectives?: Array<string> | null,
      duration: string,
      framework: string,
      prerequisites?: Array<string> | null,
      level: string,
      time: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    username?: string | null,
  } | null,
};

export type OnDeleteUserCoursesSubscriptionVariables = {
  filter?: ModelSubscriptionUserCoursesFilterInput | null,
  username?: string | null,
};

export type OnDeleteUserCoursesSubscription = {
  onDeleteUserCourses?: {
    __typename: "UserCourses",
    id: string,
    userId: string,
    courseId: string,
    user: {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone_number: string,
      createdAt: string,
      updatedAt: string,
    },
    course: {
      __typename: "Course",
      id: string,
      title: string,
      subtitle?: string | null,
      category: string,
      images?: Array<string> | null,
      price: number,
      language: string,
      tutor: string,
      tutorWho: string,
      relatedSkills?: Array<string> | null,
      courseObjectives?: Array<string> | null,
      duration: string,
      framework: string,
      prerequisites?: Array<string> | null,
      level: string,
      time: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    username?: string | null,
  } | null,
};
