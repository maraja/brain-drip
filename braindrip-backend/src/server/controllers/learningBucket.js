import { User, LearningBucket, LearningBucketResource } from "#root/db";
import generateUUID from "#root/helpers/generateUUID";

const createLearningBucket = async (req, res, next) => {
    if (!req.body) return next(new Error("Invalid body!"));

    const { name, description, tags, userId } = req.body;
    try {
        const newLearningBucket = await LearningBucket.create({
            id: generateUUID(),
            name, description, tags, userId
        })
        return res.json({
            success: true,
            message: "Learning Bucket Successfully created.",
            newLearningBucket
        });
    } catch(e) {
        return next(e);
    }
}

const getLearningBucketById = async (req, res, next) => {
    try {
        const learningBucket = await LearningBucket.findByPk(req.params.learningBucketId, {
            subQuery: false,
            include: [
                {
                    model: User,
                    as: 'user'
                }, {
                    model: LearningBucketResource,
                    as: 'learningBucketResources'
                }
            ],  
            // the following two will flatten and spit out only a json
            nest: true,
        });

        if (!learningBucket) return next(new Error("Invalid learning path ID"))
        
        return res.json({
            message: "Successfully retrieved learning path.",
            learningBucket
        });
    } catch (e) {
        return next(e);
    }
}

export default {
    getLearningBucketById, 
    createLearningBucket, 
};