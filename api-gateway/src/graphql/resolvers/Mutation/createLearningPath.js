import BrainDripBackend from "#root/adapters/BrainDripBackend";

const createLearningPathResolver = async (obj, { name, description, tags, difficulty, userId }) => {
    return await BrainDripBackend.createLearningPath({ name, description, tags, difficulty, userId });
}

export default createLearningPathResolver;