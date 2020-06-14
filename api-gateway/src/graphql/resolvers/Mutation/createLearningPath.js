import BrainDripBackend from "#root/adapters/BrainDripBackend";

const createLearningPathResolver = async (obj, { name, description, tags, difficulty }) => {
    return await BrainDripBackend.createLearningPath({ name, description, tags, difficulty });
}

export default createLearningPathResolver;