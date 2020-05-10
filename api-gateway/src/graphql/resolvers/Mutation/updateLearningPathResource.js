import BrainDripBackend from "#root/adapters/BrainDripBackend";

const updateLearningPathResourceResolver = async (obj, { id, learningPathId, url, topic, description, type, sequenceNumber }) => {
    return await BrainDripBackend.updateLearningPathResource({ id, learningPathId, url, topic, description, type, sequenceNumber });
}

export default updateLearningPathResourceResolver;