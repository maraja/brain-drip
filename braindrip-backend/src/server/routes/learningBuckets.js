import express from 'express';
let router = express.Router();

import learningBucketController from "#root/server/controllers/learningBucket";

const {
    getLearningBucketById,
    createLearningBucket } = learningBucketController

router.post("/", createLearningBucket)

router.get("/id/:learningBucketId", getLearningBucketById)


export default router;