import express from 'express';
let router = express.Router();

import upvoteController from "#root/server/controllers/upvotes";

const {
    addUpvote,
    removeUpvote,
} = upvoteController

router.post("/", addUpvote)

router.delete("/", removeUpvote)


export default router;