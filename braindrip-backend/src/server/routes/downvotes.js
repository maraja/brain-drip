import express from 'express';
let router = express.Router();

import downvoteController from "#root/server/controllers/downvotes";

const {
    addDownvote,
    removeDownvote,
} = downvoteController

router.post("/", addDownvote)

router.delete("/", removeDownvote)


export default router;