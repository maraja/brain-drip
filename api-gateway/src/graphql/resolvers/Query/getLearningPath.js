import BrainDripBackend from "#root/adapters/BrainDripBackend";

const getLearningPathResolver = async (obj, { id }) => {
    return await BrainDripBackend.fetchLearningPath({ id });
}

export default getLearningPathResolver;