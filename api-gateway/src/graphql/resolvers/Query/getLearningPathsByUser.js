import BrainDripBackend from "#root/adapters/BrainDripBackend";

const getLearningPathsByUserResolver = async (obj, { userId }, request) => {
    return await BrainDripBackend.fetchLearningPathsByUser({ userId, auth: request.req.headers.authorization });
}

export default getLearningPathsByUserResolver;