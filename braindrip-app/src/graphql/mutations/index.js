import gql from "graphql-tag";


// USER
export const SIGNUP_USER = gql`
    mutation createUser($email: String!, $password: String!, $firstName: String!, $lastName: String!) {
        createUser(email: $email, password: $password, firstName: $firstName, lastName: $lastName) {
          success
          message
          newUser {
            id
            email
            firstName
            lastName
            profilePicture
          }
        }
    }
`;

// LEARNING PATHS
export const CREATE_LEARNING_PATH = gql`
    mutation createLearningPath($name: String!, $description: String!, $difficulty: String!, $userId: String!, $tags: String! ) {
        createLearningPath(name: $name, description: $description, difficulty: $difficulty, userId: $userId, tags: $tags ) {
            success
            message
            newLearningPath {
                id
                name
                description
                difficulty
                upVotes
                downVotes
                userId
            }
        }
    }
`;


// LEARNING PATH RESOURCES
export const CREATE_LEARNING_PATH_RESOURCE = gql`
    mutation createLearningPathResource(
        $learningPathId: String!, 
        $url: String!, 
        $description: String!, 
        $topic: String!, 
        $type: String!
        $sequenceNumber: Int ) {

        createLearningPathResource(
            learningPathId: $learningPathId, 
            url: $url, 
            description: $description, 
            topic: $topic, 
            type: $type, 
            sequenceNumber: $sequenceNumber ) {
                success
                message
                learningPathResource {
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
