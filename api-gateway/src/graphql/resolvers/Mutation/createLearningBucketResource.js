import BrainDripBackend from "#root/adapters/BrainDripBackend";

const createLearningBucketResourceResolver = async (obj, { learningBucketId, url, topic, description }) => {
    return await BrainDripBackend.createLearningBucketResource({ learningBucketId, url, topic, description });
}

export default createLearningBucketResourceResolver;