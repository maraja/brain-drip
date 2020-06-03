import BrainDripBackend from "#root/adapters/BrainDripBackend";

const updateLearningBucketResourceResolver = async (obj, { id, learningBucketId, url, topic, description }) => {
    return await BrainDripBackend.updateLearningBucketResource({ id, learningBucketId, url, topic, description });
}

export default updateLearningBucketResourceResolver;