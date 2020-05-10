import express from 'express';
let router = express.Router();

import learningPathController from "#root/server/controllers/learningPath";

const {
    getLearningPathById,
    createLearningPath,
    updateLearningPath,
    deleteLearningPath,
    searchLearningPathsByParams,
    searchLearningPathsByString } = learningPathController

router.post("/", createLearningPath)

router.put("/", updateLearningPath)

router.delete("/", deleteLearningPath)

router.get("/id/:learningPathId", getLearningPathById)

router.get("/search", searchLearningPathsByParams)

router.get("/search/:searchString", searchLearningPathsByString)


export default router;