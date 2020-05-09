import { Downvotes, LearningPath } from "#root/db";
import generateUUID from "#root/helpers/generateUUID";


const addDownvote = async (req, res, next) => {
    if (!req.body) return next(new Error("Invalid body!"));

    const { learningPathId, userId } = req.body;

    try {
        const newDownvote = await Downvotes.create({
            id: generateUUID(),
            learningPathId, userId
        });
        await LearningPath.increment('downVotes', {
            where: {
                id: learningPathId
            }
        });
        return res.json({
            success: true,
            message: "Downvote added.",
            newDownvote
        });
    } catch (e) {
        return next(e);
    }
}


const removeDownvote = async (req, res, next) => {
    const { learningPathId, userId } = req.body;
    try {
        const removedDownvote = await Downvotes.destroy({
            where: {
                learningPathId: learningPathId,
                userId: userId,
            }
        });
        if (removedDownvote) {
            await LearningPath.decrement('downVotes', {
                where: {
                    id: learningPathId
                }
            });
        }
        return res.json({
            success: true,
            message: "Successfully removed downvote."
        });
    } catch (e) {
        return next(e);
    }
}




export default {
    addDownvote,
    removeDownvote,
};