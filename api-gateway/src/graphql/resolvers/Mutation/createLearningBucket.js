import BrainDripBackend from "#root/adapters/BrainDripBackend";

const createLearningBucketResolver = async (obj, { name, description, tags }, request) => {
    return await BrainDripBackend.createLearningBucket({ name, description, tags, auth: request.req.headers.authorization });
}

export default createLearningBucketResolver;