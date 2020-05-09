import BrainDripBackend from "#root/adapters/BrainDripBackend";

const getLearningBucketResourceResolver = async (obj, { id }) => {
    return await BrainDripBackend.fetchLearningBucketResource({ id });
}

export default getLearningBucketResourceResolver;