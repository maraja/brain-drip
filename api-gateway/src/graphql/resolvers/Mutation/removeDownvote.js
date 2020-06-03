import BrainDripBackend from "#root/adapters/BrainDripBackend";

const removeDownvoteResolver = async (obj, { learningPathId, userId }) => {
    return await BrainDripBackend.removeDownvote({ learningPathId, userId });
}

export default removeDownvoteResolver;