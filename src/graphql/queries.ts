/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      phone_number
      enrolledCourses {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        phone_number
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
      id
      title
      subtitle
      category
      images
      price
      language
      tutor
      tutorWho
      relatedSkills
      courseObjectives
      duration
      framework
      prerequisites
      level
      time
      syllabus {
        topic
        description
        duration
      }
      enrollees {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        subtitle
        category
        images
        price
        language
        tutor
        tutorWho
        relatedSkills
        courseObjectives
        duration
        framework
        prerequisites
        level
        time
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getResource = /* GraphQL */ `
  query GetResource($id: ID!) {
    getResource(id: $id) {
      id
      title
      subtitle
      subtitle1
      subtitle2
      description
      page
      section
      s3ImageKeys
      createdAt
      updatedAt
    }
  }
`;
export const listResources = /* GraphQL */ `
  query ListResources(
    $filter: ModelResourceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResources(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        subtitle
        subtitle1
        subtitle2
        description
        page
        section
        s3ImageKeys
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserCourses = /* GraphQL */ `
  query GetUserCourses($id: ID!) {
    getUserCourses(id: $id) {
      id
      userId
      courseId
      user {
        id
        username
        email
        phone_number
        createdAt
        updatedAt
      }
      course {
        id
        title
        subtitle
        category
        images
        price
        language
        tutor
        tutorWho
        relatedSkills
        courseObjectives
        duration
        framework
        prerequisites
        level
        time
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      username
    }
  }
`;
export const listUserCourses = /* GraphQL */ `
  query ListUserCourses(
    $filter: ModelUserCoursesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        courseId
        createdAt
        updatedAt
        username
      }
      nextToken
    }
  }
`;
export const userCoursesByUserId = /* GraphQL */ `
  query UserCoursesByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserCoursesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userCoursesByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        courseId
        createdAt
        updatedAt
        username
      }
      nextToken
    }
  }
`;
export const userCoursesByCourseId = /* GraphQL */ `
  query UserCoursesByCourseId(
    $courseId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserCoursesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userCoursesByCourseId(
      courseId: $courseId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        courseId
        createdAt
        updatedAt
        username
      }
      nextToken
    }
  }
`;
