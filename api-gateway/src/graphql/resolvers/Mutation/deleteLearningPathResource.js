import BrainDripBackend from "#root/adapters/BrainDripBackend";

const deleteLearningPathResourceResolver = async (obj, { id }) => {
    return await BrainDripBackend.deleteLearningPathResource({ id });
}

export default deleteLearningPathResourceResolver;