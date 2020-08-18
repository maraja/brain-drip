import BrainDripBackend from "#root/adapters/BrainDripBackend";

const addFavoriteResolver = async (obj, { learningPathId, userId }) => {
    return await BrainDripBackend.addFavorite({ learningPathId, userId });
}

export default addFavoriteResolver;