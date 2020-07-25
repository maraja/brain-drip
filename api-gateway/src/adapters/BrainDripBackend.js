import got from 'got';

import accessEnv from "#root/helpers/accessEnv"

const BRAINDRIP_BACKEND_URI = accessEnv("BRAINDRIP_BACKEND_URI");

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


    // AUTH
    static async loginUser({ email, password }) {
        const body = await got.post(`${BRAINDRIP_BACKEND_URI}/users/login`, {
            json: { email, password }
        }).json();
        return body;
    }


    // LEARNING PATHS
    static async fetchLearningPaths() {
        const body = await got.get(`${BRAINDRIP_BACKEND_URI}/learning-path`).json();
        return body.learningPaths;
    }

    static async fetchLearningPathsByUser({ userId, auth }) {
        const body = await got.get(`${BRAINDRIP_BACKEND_URI}/learning-path/user/${userId}`, {
            headers: {
                'Authorization': auth
            }
        }).json();
        return body.learningPaths;
    }

    static async fetchLearningPath({ id }) {
        const body = await got.get(`${BRAINDRIP_BACKEND_URI}/learning-path/id/${id}`).json();
        return body.learningPath;
    }

    static async fetchLearningPathsBySearch({ searchString }) {
        const body = await got.get(`${BRAINDRIP_BACKEND_URI}/learning-path/search/${searchString}`).json();
        return body;
    }

    static async createLearningPath({ name, userId, description, tags, difficulty, auth }) {
        const body = await got.post(`${BRAINDRIP_BACKEND_URI}/learning-path`, {
            json: { name, userId, description, tags, difficulty },
            headers: {
                'Authorization': auth
            }
        }).json();
        return body;
    }

    static async updateLearningPath({ id, name, description, tags, difficulty, userId }) {
        const body = await got.put(`${BRAINDRIP_BACKEND_URI}/learning-path`, {
            json: { id, name, description, tags, difficulty, userId }
        }).json();
        return body;
    }

    static async deleteLearningPath({ id, userId }) {
        const body = await got.delete(`${BRAINDRIP_BACKEND_URI}/learning-path`, {
            json: { id, userId }
        }).json();
        return body;
    }

    // LEARNING PATH RESOURCES

    static async fetchLearningPathResource({ id }) {
        const body = await got.get(`${BRAINDRIP_BACKEND_URI}/learning-path/resource/id/${id}`).json();
        return body.learningPathResource;
    }

    static async createLearningPathResource({ learningPathId, url, topic, description, type, sequenceNumber }) {
        const body = await got.post(`${BRAINDRIP_BACKEND_URI}/learning-path/resource`, {
            json: { learningPathId, url, topic, description, type, sequenceNumber }
        }).json();
        return body;
    }

    static async updateLearningPathResource({ id, learningPathId, url, topic, description, type, sequenceNumber }) {
        const body = await got.put(`${BRAINDRIP_BACKEND_URI}/learning-path/resource`, {
            json: { id, learningPathId, url, topic, description, type, sequenceNumber }
        }).json();
        return body;
    }

    static async deleteLearningPathResource({ id }) {
        const body = await got.delete(`${BRAINDRIP_BACKEND_URI}/learning-path/resource`, {
            json: { id }
        }).json();
        return body;
    }

    // LEARNING BUCKETS

    static async fetchLearningBucketsByUser({ auth }) {
        const body = await got.get(`${BRAINDRIP_BACKEND_URI}/learning-bucket/user/`, {
            headers: {
                'Authorization': auth
            }
        }).json();
        return body.learningBuckets;
    }

    static async fetchLearningBucket({ id }) {
        const body = await got.get(`${BRAINDRIP_BACKEND_URI}/learning-bucket/id/${id}`).json();
        return body.learningBucket;
    }

    static async createLearningBucket({ name, description, tags, auth }) {
        const body = await got.post(`${BRAINDRIP_BACKEND_URI}/learning-bucket`, {
            json: { name, description, tags },
            headers: {
                'Authorization': auth
            }
        }).json();
        return body;
    }

    static async updateLearningBucket({ id, name, description, tags, userId }) {
        const body = await got.put(`${BRAINDRIP_BACKEND_URI}/learning-bucket`, {
            json: { id, name, description, tags, userId }
        }).json();
        return body;
    }

    static async deleteLearningBucket({ id, userId }) {
        const body = await got.delete(`${BRAINDRIP_BACKEND_URI}/learning-bucket`, {
            json: { id, userId }
        }).json();
        return body;
    }

    // LEARNING BUCKET RESOURCES

    static async fetchLearningBucketResource({ id }) {
        const body = await got.get(`${BRAINDRIP_BACKEND_URI}/learning-bucket/resource/id/${id}`).json();
        return body.learningBucketResource;
    }

    static async createLearningBucketResource({ learningBucketId, url, topic, description, auth }) {
        const body = await got.post(`${BRAINDRIP_BACKEND_URI}/learning-bucket/resource`, {
            json: { learningBucketId, url, topic, description },
            headers: {
                'Authorization': auth
            }
        }).json();
        return body;
    }

    static async updateLearningBucketResource({ id, learningBucketId, url, topic, description }) {
        const body = await got.put(`${BRAINDRIP_BACKEND_URI}/learning-bucket/resource`, {
            json: { id, learningBucketId, url, topic, description }
        }).json();
        return body;
    }

    static async deleteLearningBucketResource({ id }) {
        const body = await got.delete(`${BRAINDRIP_BACKEND_URI}/learning-bucket/resource`, {
            json: { id }
        }).json();
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