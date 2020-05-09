import express from 'express';
let router = express.Router();

import learningBucketResourceController from "#root/server/controllers/learningBucketResource";

const {
    createLearningBucketResource,
    updateLearningBucketResource,
    getLearningBucketResourceById,
    deleteLearningBucketResource
 } = learningBucketResourceController

router.post("/", createLearningBucketResource)

router.put("/", updateLearningBucketResource)

router.delete("/", deleteLearningBucketResource)

router.get("/id/:learningBucketResourceId", getLearningBucketResourceById)

export default router;