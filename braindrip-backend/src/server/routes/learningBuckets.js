import express from 'express';
let router = express.Router();

import learningBucketController from "#root/server/controllers/learningBucket";

const {
    getLearningBucketById,
    createLearningBucket,
    updateLearningBucket,
    deleteLearningBucket,
 } = learningBucketController

router.post("/", createLearningBucket)

router.put("/", updateLearningBucket)

router.delete("/", deleteLearningBucket)

router.get("/id/:learningBucketId", getLearningBucketById)


export default router;