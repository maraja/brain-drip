import express from 'express';
let router = express.Router();

import learningPathResourceController from "#root/server/controllers/learningPathResource";

const {
    createLearningPathResource,
    updateLearningPathResource } = learningPathResourceController

router.post("/", createLearningPathResource)

router.put("/", updateLearningPathResource)

export default router;