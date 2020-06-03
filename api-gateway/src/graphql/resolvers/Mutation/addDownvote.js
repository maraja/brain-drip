import BrainDripBackend from "#root/adapters/BrainDripBackend";

const addDownvoteResolver = async (obj, { learningPathId, userId }) => {
    return await BrainDripBackend.addDownvote({ learningPathId, userId });
}

export default addDownvoteResolver;