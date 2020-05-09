import BrainDripBackend from "#root/adapters/BrainDripBackend";

const createLearningBucketResolver = async (obj, { name, description, tags, userId }) => {
    return await BrainDripBackend.createLearningBucket({ name, description, tags, userId });
}

export default createLearningBucketResolver;