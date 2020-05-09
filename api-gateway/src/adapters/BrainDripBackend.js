import got from 'got';

const BRAINDRIP_BACKEND_URI = "http://braindrip-backend:7101/v1";

export default class BrainDripService {

    // USERS
    static async fetchUser({ id }) {
        const body = await got.get(`${BRAINDRIP_BACKEND_URI}/users/${id}`).json();
        return body.user;
    }

    static async fetchUsers() {
        const body = await got.get(`${BRAINDRIP_BACKEND_URI}/users`).json();
        return body.users;
    }

    static async createUser({ email, password, firstName, lastName }) {
        const body = await got.post(`${BRAINDRIP_BACKEND_URI}/users`, {
            json: { email, password, firstName, lastName }
        }).json();
        return body;
    }


    // LEARNING PATHS
    static async fetchLearningPath({ id }) {
        const body = await got.get(`${BRAINDRIP_BACKEND_URI}/learning-path/id/${id}`).json();
        return body.learningPath;
    }

    static async createLearningPath({ name, description, tags, difficulty, userId }) {
        const body = await got.post(`${BRAINDRIP_BACKEND_URI}/learning-path`, {
            json: { name, description, tags, difficulty, userId }
        }).json();
        return body;
    }

    // LEARNING PATH RESOURCES

    static async createLearningPathResource({ learningPathId, url, topic, description, type, sequenceNumber }) {
        const body = await got.post(`${BRAINDRIP_BACKEND_URI}/learning-path/resource`, {
            json: { learningPathId, url, topic, description, type, sequenceNumber }
        }).json();
        console.debug(body);
        return body;
    }

    static async updateLearningPathResource({ id, learningPathId, url, topic, description, type, sequenceNumber }) {
        const body = await got.put(`${BRAINDRIP_BACKEND_URI}/learning-path/resource`, {
            json: { id, learningPathId, url, topic, description, type, sequenceNumber }
        }).json();
        return body;
    }

    // LEARNING BUCKETS
    static async fetchLearningBucket({ id }) {
        const body = await got.get(`${BRAINDRIP_BACKEND_URI}/learning-bucket/id/${id}`).json();
        return body.learningBucket;
    }

    static async createLearningBucket({ name, description, tags, userId }) {
        const body = await got.post(`${BRAINDRIP_BACKEND_URI}/learning-bucket`, {
            json: { name, description, tags, userId }
        }).json();
        return body;
    }

    // LEARNING BUCKET RESOURCES

    static async createLearningBucketResource({ learningBucketId, url, topic, description }) {
        const body = await got.post(`${BRAINDRIP_BACKEND_URI}/learning-bucket/resource`, {
            json: { learningBucketId, url, topic, description}
        }).json();
        return body;
    }

    static async updateLearningBucketResource({ id, learningBucketId, url, topic, description }) {
        const body = await got.put(`${BRAINDRIP_BACKEND_URI}/learning-bucket/resource`, {
            json: { id, learningBucketId, url, topic, description }
        }).json();
        console.debug(body);
        return body;
    }

    // UPVOTES
    static async addUpvote({ learningPathId, userId }) {
        const body = await got.post(`${BRAINDRIP_BACKEND_URI}/upvotes`, {
            json: { learningPathId, userId }
        }).json();
        return body;
    }

    static async removeUpvote({ learningPathId, userId }) {
        const body = await got.delete(`${BRAINDRIP_BACKEND_URI}/upvotes`, {
            json: { learningPathId, userId }
        }).json();
        return body;
    }

    // DOWNVOTES
    static async addDownvote({ learningPathId, userId }) {
        const body = await got.post(`${BRAINDRIP_BACKEND_URI}/downvotes`, {
            json: { learningPathId, userId }
        }).json();
        return body;
    }

    static async removeDownvote({ learningPathId, userId }) {
        const body = await got.delete(`${BRAINDRIP_BACKEND_URI}/downvotes`, {
            json: { learningPathId, userId }
        }).json();
        return body;
    }

    // FAVORITES
    static async addFavorite({ learningPathId, userId }) {
        const body = await got.post(`${BRAINDRIP_BACKEND_URI}/favorites`, {
            json: { learningPathId, userId }
        }).json();
        return body;
    }

    static async removeFavorite({ learningPathId, userId }) {
        const body = await got.delete(`${BRAINDRIP_BACKEND_URI}/favorites`, {
            json: { learningPathId, userId }
        }).json();
        return body;
    }



    // static async createUserSession({ email, password }) {
    //     const body = await got.post(`${BRAINDRIP_BACKEND_URI}/sessions`, { json: { email, password}})
    //     .json();
    //     return body;
    // }

    // static async fetchUserSession({sessionId}) {
    //     const body = await got.get(`${BRAINDRIP_BACKEND_URI}/sessions/${sessionId}`).json();
    //     return body;
    // }
}