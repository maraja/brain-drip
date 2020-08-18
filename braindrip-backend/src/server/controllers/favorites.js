import db from "#root/db";
import generateUUID from "#root/helpers/generateUUID";

const { Favorites } = db;

const addFavorite = async (req, res, next) => {
    if (!req.body) return next(new Error("Invalid body!"));

    const { learningPathId, userId } = req.body;

    try {
        const newFavorite = await Favorites.create({
            id: generateUUID(),
            learningPathId, userId
        });
        return res.json({
            success: true,
            message: "Favorite added.",
            newFavorite
        });
    } catch (e) {
        return next(e);
    }
}


const removeFavorite = async (req, res, next) => {
    try {
        const removedFavorite = await Favorites.destroy({
            where: {
                learningPathId: req.body.learningPathId,
                userId: req.body.userId,
            }
        });
        return res.json({
            success: true,
            message: "Successfully removed favorite."
        });
    } catch (e) {
        return next(e);
    }
}




export default {
    addFavorite,
    removeFavorite,
};