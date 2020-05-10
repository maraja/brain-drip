import BrainDripBackend from "#root/adapters/BrainDripBackend";

const removeUpvoteResolver = async (obj, { learningPathId, userId }) => {
    return await BrainDripBackend.removeUpvote({ learningPathId, userId });
}

export default removeUpvoteResolver;