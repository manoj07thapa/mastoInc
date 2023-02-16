/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      phone_number
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
        syllabus {
          topic
          description
          duration
        }
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
