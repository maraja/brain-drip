import BrainDripBackend from "#root/adapters/BrainDripBackend";

const removeFavoriteResolver = async (obj, { learningPathId, userId }) => {
    return await BrainDripBackend.removeFavorite({ learningPathId, userId });
}

export default removeFavoriteResolver;