import { User, Favorites, LearningPath, LearningPathResource } from "#root/db";
import generateUUID from "#root/helpers/generateUUID";
import Sequelize, { Op } from 'sequelize';

const createLearningPathResource = async (req, res, next) => {
    if (!req.body) return next(new Error("Invalid body!"));

    const { learningPathId, url, topic, description, sequenceNumber, type } = req.body;

    try {
        const learningPathResource = await LearningPathResource.create({
            id: generateUUID(),
            sequenceNumber: sequenceNumber || 0,
            learningPathId, url, topic, description, type
        })
        return res.json({
            success: true,
            message: "Learning Path Resource Successfully created.",
            learningPathResource
        });
    } catch(e) {
        return next(e);
    }
}

const updateLearningPathResource = async (req, res, next) => {
    if (!req.body) return next(new Error("Invalid body!"));

    const { id, learningPathId, url, topic, description, sequenceNumber, type } = req.body;

    try {
        const learningPathResource = await LearningPathResource.update({
            sequenceNumber, learningPathId, url, topic, description, type
        }, { 
            where: { id: id },
            returning: true,
            plain: true
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
    createLearningPathResource,
    updateLearningPathResource
}