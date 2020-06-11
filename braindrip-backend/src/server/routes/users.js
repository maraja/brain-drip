import express from 'express';
let router = express.Router();

import userController from "#root/server/controllers/user";

const { 
    createUser,
    loginUser, 
    getAllUsers,
    getUserById } = userController

router.get("/", getAllUsers)

router.post("/", createUser)
router.post("/login", loginUser)

router.get("/:userId", getUserById)

export default router;