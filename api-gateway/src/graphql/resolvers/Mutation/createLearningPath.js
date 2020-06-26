import BrainDripBackend from "#root/adapters/BrainDripBackend";

const createLearningPathResolver = async (obj, { name, userId, description, tags, difficulty }) => {
    return await BrainDripBackend.createLearningPath({ name, userId, description, tags, difficulty });
}

export default createLearningPathResolver;