import db from "#root/db";
import generateUUID from "#root/helpers/generateUUID";

const { User, LearningBucket, LearningBucketResource, Tag, LearningBucketTag } = db;

const createLearningBucket = async (req, res, next) => {
    if (!req.body) return next(new Error("Invalid body!"));

    const { name, description, tags } = req.body;
    try {
        const newLearningBucket = await LearningBucket.create({
            id: generateUUID(),
            name, description, userId: req.user.id
        })
        const tagsResult = await Tag.findAll({
            where: {
                name: tags,
            }
        });

        let learningBucketTagsArray = [];
        let tagsArrayInsert = [];

        tags.forEach(element => {
            let tagFound = tagsResult.find(item => item.name === element);
            if (tagFound) {
                learningBucketTagsArray.push({
                    id: generateUUID(),
                    tagId: tagFound.id,
                    learningBucketId: newLearningBucket.id,
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
                learningBucketTagsArray.push({
                    id: generateUUID(),
                    tagId: element.id,
                    learningBucketId: newLearningBucket.id,
                });
            });
        }

        if (learningBucketTagsArray.length > 0) {
            await LearningBucketTag.bulkCreate(learningBucketTagsArray);
        }
        return res.json({
            success: true,
            message: "Learning Bucket Successfully created.",
            newLearningBucket
        });
    } catch (e) {
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
                },
                {
                    model: Tag,
                    as: 'tags'
                }
            ],
            order: [
                ['tags', 'name', 'ASC']
            ],
            // the following two will flatten and spit out only a json
            nest: true,
        });

        if (!learningBucket) return next(new Error("Invalid learning bucket ID"))

        return res.json({
            message: "Successfully retrieved learning bucket.",
            learningBucket
        });
    } catch (e) {
        return next(e);
    }
}

const updateLearningBucket = async (req, res, next) => {
    if (!req.body) return next(new Error("Invalid body!"));

    const { id, name, description, tags, userId } = req.body;

    try {
        const learningBucket = await LearningBucket.update({
            name, description, tags
        }, {
            where: { id: id, userId: userId },
            returning: true,
            plain: true
        })
        return res.json({
            success: true,
            message: `Learning Bucket Successfully updated.`
        });
    } catch (e) {
        return next(e);
    }
}

const deleteLearningBucket = async (req, res, next) => {
    if (!req.body) return next(new Error("Invalid body!"));

    const { id, userId } = req.body;

    try {
        const learningBucket = await LearningBucket.destroy({
            where: { id: id, userId: userId },
        })
        return res.json({
            success: true,
            message: `Learning Bucket Successfully deleted.`
        });
    } catch (e) {
        return next(e);
    }
}

const getLearningBucketsByUserId = async (req, res, next) => {
    try {
        const learningBuckets = await LearningBucket.findAll({
            include: [{
                model: LearningBucketResource,
                as: 'learningBucketResources'
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

        if (!learningBuckets) return next(new Error("Invalid learning bucket ID"))

        return res.json({
            message: "Successfully retrieved learning buckets.",
            learningBuckets
        });
    } catch (e) {
        return next(e);
    }
}

export default {
    getLearningBucketById,
    getLearningBucketsByUserId,
    createLearningBucket,
    updateLearningBucket,
    deleteLearningBucket
};