/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserCourses = /* GraphQL */ `
  subscription OnCreateUserCourses(
    $filter: ModelSubscriptionUserCoursesFilterInput
    $name: String
    $tutor: String
  ) {
    onCreateUserCourses(filter: $filter, name: $name, tutor: $tutor) {
      id
      userId
      courseId
      user {
        id
        username
        email
        phone_number
        name
        enrolledCourses {
          nextToken
        }
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
      createdAt
      updatedAt
      name
      tutor
    }
  }
`;
export const onUpdateUserCourses = /* GraphQL */ `
  subscription OnUpdateUserCourses(
    $filter: ModelSubscriptionUserCoursesFilterInput
    $name: String
    $tutor: String
  ) {
    onUpdateUserCourses(filter: $filter, name: $name, tutor: $tutor) {
      id
      userId
      courseId
      user {
        id
        username
        email
        phone_number
        name
        enrolledCourses {
          nextToken
        }
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
      createdAt
      updatedAt
      name
      tutor
    }
  }
`;
export const onDeleteUserCourses = /* GraphQL */ `
  subscription OnDeleteUserCourses(
    $filter: ModelSubscriptionUserCoursesFilterInput
    $name: String
    $tutor: String
  ) {
    onDeleteUserCourses(filter: $filter, name: $name, tutor: $tutor) {
      id
      userId
      courseId
      user {
        id
        username
        email
        phone_number
        name
        enrolledCourses {
          nextToken
        }
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
      createdAt
      updatedAt
      name
      tutor
    }
  }
`;
