import BrainDripBackend from "#root/adapters/BrainDripBackend";

const deleteLearningBucketResolver = async (obj, { id, userId }) => {
    return await BrainDripBackend.deleteLearningBucket({ id, userId});
}

export default deleteLearningBucketResolver;