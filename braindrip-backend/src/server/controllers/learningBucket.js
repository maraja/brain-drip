import db from "#root/db";
import generateUUID from "#root/helpers/generateUUID";

const { User, LearningBucket, LearningBucketResource } = db;

const createLearningBucket = async (req, res, next) => {
    if (!req.body) return next(new Error("Invalid body!"));

    const { name, description, tags } = req.body;
    try {
        const newLearningBucket = await LearningBucket.create({
            id: generateUUID(),
            name, description, tags, userId: req.user.id
        })
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
            }
            ],
            where: {
                userId: req.user.id
            },
            order: [['updatedAt', 'DESC']]
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