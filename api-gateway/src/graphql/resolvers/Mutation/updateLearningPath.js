import BrainDripBackend from "#root/adapters/BrainDripBackend";

const updateLearningPathResolver = async (obj, { id, name, description, tags, difficulty, userId}) => {
    return await BrainDripBackend.updateLearningPath({ id, name, description, tags, difficulty, userId});
}

export default updateLearningPathResolver;