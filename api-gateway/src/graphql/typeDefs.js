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

    type Upvote {
        id: ID!
        userId: ID!
        learningPathId: ID!
    }

    type Downvote {
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

    type UserCreateResponse {
        success: Boolean
        message: String
        newUser: User
    }

    type LearningPathCreateResponse {
        success: Boolean
        message: String
        newLearningPath: LearningPath
    }

    type LearningBucketCreateResponse {
        success: Boolean
        message: String
        newLearningBucket: LearningBucket
    }

    type LearningBucketResourceResponse {
        success: Boolean
        message: String
        learningBucketResource: LearningBucketResource
    }

    type LearningPathResourceResponse {
        success: Boolean
        message: String
        learningPathResource: LearningPathResource
    }

    type DownvoteResponse {
        success: Boolean
        message: String
        newDownvote: Downvote
    }

    type UpvoteResponse {
        success: Boolean
        message: String
        newUpvote: Upvote
    }

    type FavoriteResponse {
        success: Boolean
        message: String
        newFavorite: Favorite
    }

    type Mutation {
        createUser(email: String!, password: String!, firstName: String!, lastName: String!): UserCreateResponse

        createLearningPath(name: String!, description: String!, difficulty: String!, userId: String!): LearningPathCreateResponse
        createLearningPathResource(learningPathId: String!, url: String!, description: String!, topic: String!, type: String!, sequenceNumber: Int): LearningPathResourceResponse
        updateLearningPathResource(id: String!, learningPathId: String!, 
                                    url: String!, description: String!, topic: String!, type: String!, sequenceNumber: Int): LearningPathResourceResponse

        createLearningBucket(name: String!, description: String!, tags: String!, userId: String!): LearningBucketCreateResponse
        createLearningBucketResource(learningBucketId: String!, url: String!, topic: String!, description: String!): LearningBucketResourceResponse
        updateLearningBucketResource(id: String!, learningBucketId: String!, url: String!, topic: String!, description: String!): LearningBucketResourceResponse

        addDownvote(learningPathId: String!, userId: String!): DownvoteResponse
        addUpvote(learningPathId: String!, userId: String!): UpvoteResponse        
        addFavorite(learningPathId: String!, userId: String!): FavoriteResponse

        removeDownvote(learningPathId: String!, userId: String!): DownvoteResponse
        removeUpvote(learningPathId: String!, userId: String!): UpvoteResponse
        removeFavorite(learningPathId: String!, userId: String!): FavoriteResponse


        # createUserSession(email: String!, password: String!): UserSession!
    }

    type Query {
        # we don't want an exclamation mark at the end of this one because it could 
        # return null if it isn't them.
        user_list: [User]
        user(id: String!): User
        learningPath(id: String!): LearningPath
        learningBucket(id: String!): LearningBucket
    }
`;

export default typeDefs;