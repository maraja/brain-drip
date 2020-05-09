import { Upvotes, LearningPath } from "#root/db";
import generateUUID from "#root/helpers/generateUUID";


const addUpvote = async (req, res, next) => {
    if (!req.body) return next(new Error("Invalid body!"));

    const { learningPathId, userId } = req.body;

    try {
        const newUpvote = await Upvotes.create({
            id: generateUUID(),
            learningPathId, userId
        });
        await LearningPath.increment('upVotes', { 
            where: { 
                id: learningPathId 
            }
        });
        return res.json({
            success: true,
            message: "Upvote added.",
            newUpvote
        });
    } catch(e) {
        return next(e);
    }
}


const removeUpvote = async (req, res, next) => {

    const { learningPathId, userId } = req.body;

    try {
        const removedUpvote = await Upvotes.destroy({
            where: {
                learningPathId: learningPathId,
                userId: userId,
            }
        });
        if (removedUpvote) {
            await LearningPath.decrement('upVotes', { 
                where: { 
                    id: learningPathId 
                }
            });
        }
        return res.json({
            success: true,
            message: "Successfully removed upvote."
        });
    } catch (e) {
        return next(e);
    }
}




export default {
    addUpvote, 
    removeUpvote,
};