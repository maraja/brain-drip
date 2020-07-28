import db from "#root/db";
import generateUUID from "#root/helpers/generateUUID";
import Sequelize, { Op } from 'sequelize';

const { User, Favorites, LearningPath, LearningPathResource, Tag, LearningPathTag } = db;

const createLearningPath = async (req, res, next) => {
    if (!req.body) return next(new Error("Invalid body!"));

    try {
        const { name, description, tags, difficulty } = req.body;
        const newLearningPath = await LearningPath.create({
            id: generateUUID(),
            upVotes: 0,
            downVotes: 0,
            name, description, difficulty, userId: req.user.id
        });

        const tagsResult = await Tag.findAll({
            where: {
                name: tags,
            }
        });

        let learningPathTagsArray = [];
        let tagsArrayInsert = [];

        tags.forEach(element => {
            let tagFound = tagsResult.find(item => item.name === element);
            if (tagFound) {
                learningPathTagsArray.push({
                    id: generateUUID(),
                    tagId: tagFound.id,
                    learningPathId: newLearningPath.id,
                });
            } else {
                tagsArrayInsert.push({
                    id: generateUUID(),
                    name: element.trim().toLowerCase(),
                });
            }
        });

        if (tagsArrayInsert.length > 0) {
            const tagInsertResult = await Tag.bulkCreate(tagsArrayInsert);

            tagInsertResult.forEach(element => {
                learningPathTagsArray.push({
                    id: generateUUID(),
                    tagId: element.id,
                    learningPathId: newLearningPath.id,
                });
            });
        }

        if (learningPathTagsArray.length > 0) {
            await LearningPathTag.bulkCreate(learningPathTagsArray);
        }

        return res.json({
            success: true,
            message: "Learning Path Successfully created.",
            newLearningPath
        });
    } catch (e) {
        console.debug(e);
        return next(e);
    }
}


// (async () => {
//     await LearningPath.create({

//     })
// })()


const updateLearningPath = async (req, res, next) => {
    if (!req.body) return next(new Error("Invalid body!"));

    const { id, name, description, tags, difficulty, upVotes, downVotes, userId } = req.body;

    try {
        const learningPath = await LearningPath.update({
            name, description, tags, difficulty, upVotes, downVotes
        }, {
            where: { id: id, userId: userId },
            returning: true,
            plain: true
        })
        return res.json({
            success: true,
            message: `Learning Path Successfully updated.`
        });
    } catch (e) {
        return next(e);
    }
}

const deleteLearningPath = async (req, res, next) => {
    if (!req.body) return next(new Error("Invalid body!"));

    const { id, userId } = req.body;

    try {
        const learningPath = await LearningPath.destroy({
            where: { id: id, userId: userId },
        })
        return res.json({
            success: true,
            message: `Learning Path Successfully deleted.`
        });
    } catch (e) {
        return next(e);
    }
}

const getLearningPathById = async (req, res, next) => {
    try {
        const learningPath = await LearningPath.findByPk(req.params.learningPathId, {
            subQuery: false,
            include: [
                {
                    model: LearningPathResource,
                    as: 'learningPathResources'
                },
                {
                    model: Tag,
                    as: 'tags'
                }
            ],
            order: [
                [db.Sequelize.col('sequenceNumber'), 'ASC'],
                ['tags', 'name', 'ASC']
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

const getLearningPathsByUserId = async (req, res, next) => {
    try {

        const learningPaths = await LearningPath.findAll({
            include: [{
                model: LearningPathResource,
                as: 'learningPathResources'
            },
            {
                model: Tag,
                as: 'tags'
            }
            ],
            where: {
                userId: req.user.id
            },
            order: [
                ['updatedAt', 'DESC'],
                ['tags', 'name', 'ASC']
            ],
        });
        if (!learningPaths) return next(new Error("Invalid learning path ID"))

        return res.json({
            message: "Successfully retrieved learning paths.",
            learningPaths
        });
    } catch (e) {
        return next(e);
    }
}

const getLearningPaths = async (req, res, next) => {
    try {
        const learningPaths = await LearningPath.findAll();

        if (!learningPaths) return next(new Error("No learning paths found"))

        return res.json({
            message: "Successfully retrieved learning paths.",
            learningPaths
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
    if (query.id) {
        whereStatement.id = query.id;
    }
    if (query.search) {
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
                },
                {
                    model: Tag,
                    as: 'tags'
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

const searchLearningPathsByString = async (req, res, next) => {
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
                },
                {
                    model: Tag,
                    as: 'tags'
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
    getLearningPaths,
    getLearningPathById,
    getLearningPathsByUserId,
    createLearningPath,
    updateLearningPath,
    deleteLearningPath,
    searchLearningPathsByParams,
    searchLearningPathsByString
};