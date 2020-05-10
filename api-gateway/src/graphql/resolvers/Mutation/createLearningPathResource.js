import BrainDripBackend from "#root/adapters/BrainDripBackend";

const createLearningPathResourceResolver = async (obj, { learningPathId, url, topic, description, type, sequenceNumber }) => {
    return await BrainDripBackend.createLearningPathResource({ learningPathId, url, topic, description, type, sequenceNumber });
}

export default createLearningPathResourceResolver;