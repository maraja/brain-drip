import express from 'express';
import passport from 'passport';
let router = express.Router();

import learningBucketResourceController from "#root/server/controllers/learningBucketResource";

const {
    createLearningBucketResource,
    updateLearningBucketResource,
    getLearningBucketResourceById,
    deleteLearningBucketResource
} = learningBucketResourceController

router.post("/", passport.authenticate('jwt', { session: false }), createLearningBucketResource)

router.put("/", updateLearningBucketResource)

router.delete("/", deleteLearningBucketResource)

router.get("/id/:learningBucketResourceId", getLearningBucketResourceById)

export default router;