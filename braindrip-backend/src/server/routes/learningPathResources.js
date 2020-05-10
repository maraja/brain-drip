import express from 'express';
let router = express.Router();

import learningPathResourceController from "#root/server/controllers/learningPathResource";

const {
    createLearningPathResource,
    updateLearningPathResource,
    getLearningPathResourceById,
    deleteLearningPathResource
} = learningPathResourceController

router.post("/", createLearningPathResource)

router.put("/", updateLearningPathResource)


router.delete("/", deleteLearningPathResource)

router.get("/id/:learningPathResourceId", getLearningPathResourceById)


router.get("/id/:learningPathResourceId", getLearningPathResourceById)
 
router.delete("/", deleteLearningPathResource)

//router.get("/:learningPathId", getLearningPathResources)


export default router;