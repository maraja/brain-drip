import BrainDripBackend from "#root/adapters/BrainDripBackend";

const updateLearningBucketResolver = async (obj, { id, name, description, tags, userId }) => {
    return await BrainDripBackend.updateLearningBucket({ id, name, description, tags, userId});
}

export default updateLearningBucketResolver;