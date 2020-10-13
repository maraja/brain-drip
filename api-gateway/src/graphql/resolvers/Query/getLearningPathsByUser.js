import BrainDripBackend from "#root/adapters/BrainDripBackend";

const getLearningPathsByUserResolver = async (obj, { }, request) => {
    return await BrainDripBackend.fetchLearningPathsByUser({ auth: request.req.headers.authorization });
}

export default getLearningPathsByUserResolver;