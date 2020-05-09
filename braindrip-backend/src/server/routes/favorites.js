import express from 'express';
let router = express.Router();

import favoriteController from "#root/server/controllers/favorites";

const {
    addFavorite,
    removeFavorite,
} = favoriteController

router.post("/", addFavorite)

router.delete("/", removeFavorite)


export default router;