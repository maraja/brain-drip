import BrainDripBackend from "#root/adapters/BrainDripBackend";

const getLearningPathsByUserResolver = async (obj, { userId }) => {
    return await BrainDripBackend.fetchLearningPathsByUser({ userId });
}

export default getLearningPathsByUserResolver;