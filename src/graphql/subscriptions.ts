/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserCourses = /* GraphQL */ `
  subscription OnCreateUserCourses(
    $filter: ModelSubscriptionUserCoursesFilterInput
    $username: String
  ) {
    onCreateUserCourses(filter: $filter, username: $username) {
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
export const onUpdateUserCourses = /* GraphQL */ `
  subscription OnUpdateUserCourses(
    $filter: ModelSubscriptionUserCoursesFilterInput
    $username: String
  ) {
    onUpdateUserCourses(filter: $filter, username: $username) {
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
export const onDeleteUserCourses = /* GraphQL */ `
  subscription OnDeleteUserCourses(
    $filter: ModelSubscriptionUserCoursesFilterInput
    $username: String
  ) {
    onDeleteUserCourses(filter: $filter, username: $username) {
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
