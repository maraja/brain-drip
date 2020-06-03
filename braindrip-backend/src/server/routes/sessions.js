import { addHours } from 'date-fns';

<<<<<<< HEAD
import db from "#root/db";
=======
import db, { User, UserSession } from "#root/db";
>>>>>>> 461ae08e90c0639bf52d9c202d1f2a55301920af
import generateUUID from "#root/helpers/generateUUID";
import passwordCompareSync from "#root/helpers/passwordCompareSync";

import express from 'express';
let router = express.Router();

<<<<<<< HEAD
const { User, UserSession } = db;
=======
>>>>>>> 461ae08e90c0639bf52d9c202d1f2a55301920af
const USER_SESSION_EXPIRY_HOURS = 1;

router.post("/", async (req, res, next) => {
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

router.get("/:sessionId", async (req, res, next) => {
    try {
        const userSession = await UserSession.findByPk(req.params.sessionId);

        if (!userSession) return next(new Error("Invalid session ID"))

        return res.json(userSession);
    } catch (e) {
        return next(e);
    }
})

export default router;