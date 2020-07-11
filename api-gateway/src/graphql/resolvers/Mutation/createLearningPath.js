import BrainDripBackend from "#root/adapters/BrainDripBackend";

const createLearningPathResolver = async (obj, { name, userId, description, tags, difficulty }, request) => {
    return await BrainDripBackend.createLearningPath({ name, userId, description, tags, difficulty, auth: request.req.headers.authorization });
}

export default createLearningPathResolver;