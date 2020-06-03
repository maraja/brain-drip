<<<<<<< HEAD
import db from "#root/db";
import generateUUID from "#root/helpers/generateUUID";
import Sequelize, { Op } from 'sequelize';

const { User, Favorites, LearningPath, LearningPathResource } = db;

=======
import { User, Favorites, LearningPath, LearningPathResource } from "#root/db";
import generateUUID from "#root/helpers/generateUUID";
import Sequelize, { Op } from 'sequelize';

>>>>>>> 461ae08e90c0639bf52d9c202d1f2a55301920af
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
const getLearningPathResourceById = async (req, res, next) => {
    try {
        console.debug(req.params);
        const learningPathResource = await LearningPathResource.findByPk(req.params.learningPathResourceId, {
            subQuery: false,
            include: [
                {
                    model: LearningPath,
                    as: 'learningPath'
                },
            ],  
            nest: true,
        });

        if (!learningPathResource) return next(new Error("Invalid learning path resource ID"))
        
        return res.json({
            message: "Successfully retrieved learning path resource.",
            learningPathResource
        });
    } catch (e) {
        return next(e);
    }
}

const deleteLearningPathResource = async (req, res, next) => {
    if (!req.body) return next(new Error("Invalid body!"));

    const { id } = req.body;

    try {
        const learningPath = await LearningPathResource.destroy( { 
            where: { id: id },
        })
        return res.json({
            success: true,
            message: `Learning Path Resource Successfully deleted.`
        });
    } catch(e) {
        return next(e);
    }
}
export default {
    createLearningPathResource,
    updateLearningPathResource,
    getLearningPathResourceById,
    deleteLearningPathResource
}