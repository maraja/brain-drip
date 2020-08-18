import BrainDripBackend from "#root/adapters/BrainDripBackend";

const getLearningPathResourceResolver = async (obj, { id }) => {
    return await BrainDripBackend.fetchLearningPathResource({ id });
}

export default getLearningPathResourceResolver;