import express from 'express';
import passport from 'passport';

let router = express.Router();

import learningBucketController from "#root/server/controllers/learningBucket";

const {
    getLearningBucketById,
    getLearningBucketsByUserId,
    createLearningBucket,
    updateLearningBucket,
    deleteLearningBucket,
} = learningBucketController
        
router.post("/", passport.authenticate('jwt', { session: false }), createLearningBucket)

router.put("/", updateLearningBucket)

router.delete("/", deleteLearningBucket)

router.get("/id/:learningBucketId", getLearningBucketById)

router.get("/user/", passport.authenticate('jwt', { session: false }), getLearningBucketsByUserId)

export default router;