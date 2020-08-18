import { addHours } from 'date-fns';

import { User, UserSession } from "#root/db/models";
import generateUUID from "#root/helpers/generateUUID";
import hashPassword from "#root/helpers/hashPassword";
import passwordCompareSync from "#root/helpers/passwordCompareSync";

import express from 'express';
let router = express.Router();

const USER_SESSION_EXPIRY_HOURS = 1;

// console.log("models", models)


const setupRoutes = app => {

    router.post("/sessions", async (req, res, next) => {
        if (!req.body.email || !req.body.password) {
            return next(new Error("Invalid body!"));
        }

        try {
            const user = await User.findOne({ attributes: {}, where: {
                email: req.body.email
            }});

            if (!user) return next(new Error("Invalid Email!"));

            if (!passwordCompareSync(req.body.password, user.passwordHash)) {
                return next(new Error("Incorrect Password!"));
            }

            const expiresAt = addHours(new Date(), USER_SESSION_EXPIRY_HOURS);

            const sessionToken = generateUUID();

            const userSession = await UserSession.create({
                expiresAt,
                id: sessionToken,
                userId: user.id
            });

            return res.json(userSession);
        } catch(e) {
            return next(e)
        }
    })

    router.get("/sessions/:sessionId", async (req, res, next) => {
        try {
            const userSession = await UserSession.findByPk(req.params.sessionId);

            if (!userSession) return next(new Error("Invalid session ID"))

            return res.json(userSession);
        } catch (e) {
            return next(e);
        }
    })

    router.get("/users", async (req, res, next) => {
        // if (!req.body.email || !req.body.password) {
        //     return next(new Error("Invalid body!"));
        // }

        try {   
            const users = await User.findAll()
            return res.json(users);
        } catch(e) {
            return next(e);
        }
    })

    router.post("/users", async (req, res, next) => {
        if (!req.body.email || !req.body.password) {
            return next(new Error("Invalid body!"));
        }

        try {
            const newUser = await User.create({
                email: req.body.email,
                id: generateUUID(),
                passwordHash: hashPassword(req.body.password)
            })
            return res.json(newUser);
        } catch(e) {
            return next(e);
        }
    })

    router.get("/users/:userId", async (req, res, next) => {
        try {
            const user = await User.findByPk(req.params.userId);

            if (!user) return next(new Error("Invalid user ID"))
            
            return res.json(user);
        } catch (e) {
            return next(e);
        }
    })

    app.use('/v1', router);
}

export default setupRoutes;