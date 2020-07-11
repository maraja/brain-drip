
import gql from "graphql-tag";


// USER
export const LOGIN_USER = gql`
    query userLogin($email: String!, $password: String!) {
        userLogin(email: $email, password: $password) {
          success
          message
          user {
            id
            firstName
            lastName
          }
          token
        }
    }
`;


// LEARNING PATHS


export const GET_LEARNING_PATHS_ALL = gql`
  {
    learningPaths {
      id
      name
      description
      difficulty
    }
  }
`;

export const GET_LEARNING_PATHS_BY_USER = gql`
  query userLearningPaths($userId: String!){
    userLearningPaths(userId: $userId) {
      id
      name
      description
      difficulty
      upVotes
      downVotes
      userId
      learningPathResources {
        id
        learningPathId
        url
        topic
        description
        type
        sequenceNumber
      }
    }
  }
`;

export const GET_LEARNING_PATHS = gql`
    query getLearningPaths($searchString: String!) {
        learningPathSearch(searchString: $searchString) {
            id
            name
            description
        }
    }
`;

export const GET_LEARNING_PATH_DETAIL = gql`
  query getLearningPath($id: String!) {
    learningPath(id: $id) {
      id
      name
      description
      difficulty
      upVotes
      downVotes
      userId
      learningPathResources {
        id
        learningPathId
        url
        topic
        description
        type
        sequenceNumber
      }
    }
  }
`;