import BrainDripBackend from "#root/adapters/BrainDripBackend";

const createLearningPathResolver = async (obj, { name, description, difficulty, userId }) => {
    return await BrainDripBackend.createLearningPath({ name, description, difficulty, userId });
}

export default createLearningPathResolver;