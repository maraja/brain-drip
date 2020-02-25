import { User, Favorites, LearningPath, LearningPathResource } from "#root/db";
import generateUUID from "#root/helpers/generateUUID";
import Sequelize, { Op } from 'sequelize';

const createLearningPath = async (req, res, next) => {
    if (!req.body) return next(new Error("Invalid body!"));

    const { name, description, tags, difficulty, userId } = req.body;

    try {
        const newLearningPath = await LearningPath.create({
            id: generateUUID(),
            upVotes: 0,
            downVotes: 0,
            name, description, tags, difficulty, userId
        })
        return res.json({
            message: "Learning Path Successfully created.",
            learningPath: newLearningPath
        });
    } catch(e) {
        return next(e);
    }
}

const updatelearningPath = async (req, res, next) => {
    if (!req.body) return next(new Error("Invalid body!"));

    const { learningPathId, name, description, tags, difficulty, upVotes, downVotes, userId } = req.body;

    try {
        const learningPath = await LearningPath.update({
            name, description, tags, difficulty, upVotes, downVotes, userId
        }, { 
            where: { id: learningPathId },
            returning: true,
            plain: true
        })
        return res.json({
            message: `Learning Path Successfully updated.`
        });
    } catch(e) {
        return next(e);
    }
}

const getLearningPathById = async (req, res, next) => {
    try {
        const learningPath = await LearningPath.findByPk(req.params.learningPathId, {
            subQuery: false,
            include: [
                {
                    model: User,
                    as: 'user'
                }, {
                    model: LearningPathResource,
                    as: 'learningPathResources'
                }
            ],  
            // the following two will flatten and spit out only a json
            nest: true,
        });

        if (!learningPath) return next(new Error("Invalid learning path ID"))
        
        return res.json({
            message: "Successfully retrieved learning path.",
            learningPath
        });
    } catch (e) {
        return next(e);
    }
}

const searchLearningPathsByParams = async (req, res, next) => {
    let { query } = req
    if (Object.keys(query).length == 0) return next(new Error("No search params provided."))
    // console.log(query)

    var whereStatement = {};
    if(query.id) {
        whereStatement.id = query.id;
    }
    if(query.search) {
        whereStatement.name = Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('name')), 'LIKE', `%${query.search}%`);
        // whereStatement.description = Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('description')), 'LIKE', `%${query.search}%`);
    }

    try {
        const learningPaths = await LearningPath.findAll({
            subQuery: false,
            where: whereStatement,
            include: [
                {
                    model: User,
                    as: 'user'
                }, {
                    model: LearningPathResource,
                    as: 'learningPathResources'
                }
            ],  
            // the following two will flatten and spit out only a json
            nest: true,
        });

        if (!learningPaths) return next(new Error("No learning paths found"))
        
        return res.json(learningPaths);
    } catch (e) {
        return next(e);
    }
}

const searchLearningPathsByString = async(req, res, next) => {
    let searchString = req.params.searchString;
    try {
        const learningPaths = await LearningPath.findAll({
            subQuery: false,
            where: {
                name: Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('name')), 'LIKE', `%${searchString}%`),
            },
            include: [
                {
                    model: User,
                    as: 'user'
                }, {
                    model: LearningPathResource,
                    as: 'learningPathResources'
                }
            ],  
            // the following two will flatten and spit out only a json
            nest: true,
        });

        if (!learningPaths) return next(new Error("No learning paths found"))
        
        return res.json(learningPaths);
    } catch (e) {
        return next(e);
    }
}


export default {
    getLearningPathById, 
    createLearningPath, 
    updatelearningPath, 
    searchLearningPathsByParams, 
    searchLearningPathsByString
};