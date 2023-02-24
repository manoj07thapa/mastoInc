/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserCourses = /* GraphQL */ `
  subscription OnCreateUserCourses(
    $filter: ModelSubscriptionUserCoursesFilterInput
    $email: String
    $ownerEmail: String
  ) {
    onCreateUserCourses(
      filter: $filter
      email: $email
      ownerEmail: $ownerEmail
    ) {
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
        ownerEmail
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
      email
      ownerEmail
    }
  }
`;
export const onUpdateUserCourses = /* GraphQL */ `
  subscription OnUpdateUserCourses(
    $filter: ModelSubscriptionUserCoursesFilterInput
    $email: String
    $ownerEmail: String
  ) {
    onUpdateUserCourses(
      filter: $filter
      email: $email
      ownerEmail: $ownerEmail
    ) {
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
        ownerEmail
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
      email
      ownerEmail
    }
  }
`;
export const onDeleteUserCourses = /* GraphQL */ `
  subscription OnDeleteUserCourses(
    $filter: ModelSubscriptionUserCoursesFilterInput
    $email: String
    $ownerEmail: String
  ) {
    onDeleteUserCourses(
      filter: $filter
      email: $email
      ownerEmail: $ownerEmail
    ) {
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
        ownerEmail
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
      email
      ownerEmail
    }
  }
`;
