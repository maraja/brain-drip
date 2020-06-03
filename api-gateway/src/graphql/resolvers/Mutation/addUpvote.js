import BrainDripBackend from "#root/adapters/BrainDripBackend";

const addUpvoteResolver = async (obj, { learningPathId, userId }) => {
    return await BrainDripBackend.addUpvote({ learningPathId, userId });
}

export default addUpvoteResolver;