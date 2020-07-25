import BrainDripBackend from "#root/adapters/BrainDripBackend";

const getLearningBucketsByUserResolver = async (obj, { }, request) => {
    return await BrainDripBackend.fetchLearningBucketsByUser({ auth: request.req.headers.authorization });
}

export default getLearningBucketsByUserResolver;