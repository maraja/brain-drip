import BrainDripBackend from "#root/adapters/BrainDripBackend";

const createLearningBucketResourceResolver = async (obj, { learningBucketId, url, topic, description }, request) => {
    return await BrainDripBackend.createLearningBucketResource({ learningBucketId, url, topic, description, auth: request.req.headers.authorization });
}

export default createLearningBucketResourceResolver;