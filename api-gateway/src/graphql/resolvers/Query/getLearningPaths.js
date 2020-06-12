import BrainDripBackend from "#root/adapters/BrainDripBackend";

const getLearningPathsResolver = async (obj, {}) => {
    return await BrainDripBackend.fetchLearningPaths();
}

export default getLearningPathsResolver;