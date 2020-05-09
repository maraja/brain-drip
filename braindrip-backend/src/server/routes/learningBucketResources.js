import express from 'express';
let router = express.Router();

import learningBucketResourceController from "#root/server/controllers/learningBucketResource";

const {
    createLearningBucketResource,
    updateLearningBucketResource } = learningBucketResourceController

router.post("/", createLearningBucketResource)

router.put("/", updateLearningBucketResource)

export default router;