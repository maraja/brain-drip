import express from 'express';
import passport from 'passport';

let router = express.Router();

import learningPathController from "#root/server/controllers/learningPath";

const {
    getLearningPaths,
    getLearningPathById,
    getLearningPathsByUserId,
    createLearningPath,
    updateLearningPath,
    deleteLearningPath,
    searchLearningPathsByParams,
    searchLearningPathsByString } = learningPathController

router.post("/", passport.authenticate('jwt', { session: false }), createLearningPath)

router.put("/", updateLearningPath)

router.delete("/", deleteLearningPath)

router.get("/id/:learningPathId", getLearningPathById)

router.get("/", getLearningPaths)

router.get("/user/:userId", passport.authenticate('jwt', { session: false }), getLearningPathsByUserId)

router.get("/search", searchLearningPathsByParams)

router.get("/search/:searchString", searchLearningPathsByString)


export default router;