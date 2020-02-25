import got from 'got';

const BRAINDRIP_BACKEND_URI = "http://braindrip-backend:7101/v1";

export default class BrainDripService {

    // USERS
    static async fetchUser({ id }){
        const body = await got.get(`${BRAINDRIP_BACKEND_URI}/users/${id}`).json();
        return body.user;
    }

    static async createUser({ email, password, firstName, lastName }) {
        const body = await got.post(`${BRAINDRIP_BACKEND_URI}/users`, {
            json: {email, password, firstName, lastName}
        }).json();
        return body;
    }


    // LEARNING PATHS
    static async fetchLearningPath({ id }){
        const body = await got.get(`${BRAINDRIP_BACKEND_URI}/learning-path/id/${id}`).json();
        return body.learningPath;
    }
    
    static async createLearningPath({ name, description, difficulty, userId }) {
        const body = await got.post(`${BRAINDRIP_BACKEND_URI}/learning-path`, {
            json: {name, description, difficulty, userId}
        }).json();
        return body.learningPath;
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