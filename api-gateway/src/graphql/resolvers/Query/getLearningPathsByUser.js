import BrainDripBackend from "#root/adapters/BrainDripBackend";

const getLearningPathsByUserResolver = async (obj, {}) => {
    return await BrainDripBackend.fetchLearningPathsByUser();
}

export default getLearningPathsByUserResolver;