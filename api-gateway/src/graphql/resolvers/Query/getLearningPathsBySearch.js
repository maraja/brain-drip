import BrainDripBackend from "#root/adapters/BrainDripBackend";

const getLearningPathBySearchStringResolver = async (obj, { searchString }) => {
    return await BrainDripBackend.fetchLearningPathsBySearch({ searchString });
}

export default getLearningPathBySearchStringResolver;