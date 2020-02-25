import { gql } from "apollo-server";

// examples of queries: https://www.predic8.de/graphql-query-samples.htm

const typeDefs = gql`
    scalar Date
    enum Difficulty {
        beginner
        intermediate
        advanced
    }

    type UserSession {
        createdAt: Date!
        expiresAt: Date!
        id: ID!
        user: User!
    }
    
    type LearningPathResource {
        id: ID!
        learningPathId: ID!
        url: String!
        topic: String!
        description: String!
        sequenceNumber: Int!
    }

    type LearningPath {
        id: ID!
        name: String!
        description: String!
        tags: [String!]
        difficulty: Difficulty!
        upVotes: Int!
        downVotes: Int!
        userId: ID!
        learningPathResources: [LearningPathResource]
    }
    
    type LearningBucketResource {
        id: ID!
        learningBucketId: ID!
        url: String!
        topic: String!
        description: String!
    }
    
    type LearningBucket {
        id: ID!
        name: String!
        description: String!
        tags: [String!]
        learningBucketResources: [LearningBucketResource]
    }

    type Favorite {
        id: ID!
        userId: ID!
        learningPathId: ID!
    }

    type User {
        email: String!
        id: ID!
        firstName: String!
        lastName: String!
        profilePicture: String!
        learningPaths: [LearningPath]
        favorites: [Favorite]
    }


    type Mutation {
        createUser(email: String!, password: String!, firstName: String!, lastName: String!): User
        createLearningPath(name: String!, description: String!, difficulty: String!, userId: String!): LearningPath
        # createUserSession(email: String!, password: String!): UserSession!
    }

    type Query {
        # we don't want an exclamation mark at the end of this one because it could 
        # return null if it isn't them.
        user(id: String!): User
        learningPath(id: String!): LearningPath
    }
`;

export default typeDefs;