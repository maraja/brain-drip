import BrainDripBackend from "#root/adapters/BrainDripBackend";

const getLearningBucketResolver = async (obj, { id }) => {
    return await BrainDripBackend.fetchLearningBucket({ id });
}

export default getLearningBucketResolver;