import BrainDripBackend from "#root/adapters/BrainDripBackend";

const deleteLearningBucketResourceResolver = async (obj, { id }) => {
    return await BrainDripBackend.deleteLearningBucketResource({ id });
}

export default deleteLearningBucketResourceResolver;