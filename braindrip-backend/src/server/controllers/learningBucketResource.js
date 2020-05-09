import { User, Favorites, LearningBucket, LearningBucketResource } from "#root/db";
import generateUUID from "#root/helpers/generateUUID";
import Sequelize, { Op } from 'sequelize';

const createLearningBucketResource = async (req, res, next) => {
    if (!req.body) return next(new Error("Invalid body!"));

    const { learningBucketId, url, topic, description } = req.body;

    try {
        const learningBucketResource = await LearningBucketResource.create({
            id: generateUUID(),
            learningBucketId, url, topic, description
        })
        return res.json({
            success: true,
            message: "Learning Path Resource Successfully created.",
            learningBucketResource
        });
    } catch(e) {
        return next(e);
    }
}

const updateLearningBucketResource = async (req, res, next) => {
    if (!req.body) return next(new Error("Invalid body!"));

    const { id, learningBucketId, url, topic, description } = req.body;
    try {
        const learningBucketResource = await LearningBucketResource.update({
            learningBucketId, url, topic, description
        }, { 
            where: { id: id },
            returning: true,
        })
        
        return res.json({
            success: true,
            message: `Learning Path Resource Successfully updated.`
        });
    } catch(e) {
        return next(e);
    }
}

export default {
    createLearningBucketResource,
    updateLearningBucketResource
}