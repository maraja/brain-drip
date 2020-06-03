import BrainDripBackend from "#root/adapters/BrainDripBackend";

const deleteLearningPathResolver = async (obj, { id, userId }) => {
    return await BrainDripBackend.deleteLearningPath({ id, userId});
}

export default deleteLearningPathResolver;