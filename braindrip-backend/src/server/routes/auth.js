import express from 'express';
let router = express.Router();
import passport from "passport";

const USER_SESSION_EXPIRY_HOURS = 1;

// router.get('/facebook', async(req, res) => res.json({ "message" : "success"}));

router.get("/facebook", passport.authenticate('facebook'));
router.get("/google", passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login']}));

router.get("/facebook/callback", passport.authenticate('facebook'), async (req, res, next) => {
    console.log(req.body);
    return res.json({ "message" : "success"});
});
router.get("/google/callback", passport.authenticate('google', {failureRedirect: '/login'}), async (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

// router.get("/facebook", passport.authenticate("facebook"), async (req, res, next) => {
//     if (!req.body.email || !req.body.password) { 
//         return next(new Error("Invalid body!"));
//     }

//     try {
//         const user = await User.findOne({ attributes: {}, where: {
//             email: req.body.email
//         }});

//         if (!user) return next(new Error("Invalid Email!"));

//         if (!passwordCompareSync(req.body.password, user.passwordHash)) {
//             return next(new Error("Incorrect Password!"));
//         }

//         const expiresAt = addHours(new Date(), USER_SESSION_EXPIRY_HOURS);

//         const sessionToken = generateUUID();

//         const userSession = await UserSession.create({
//             expiresAt,
//             id: sessionToken,
//             userId: user.id
//         });

//         return res.json(userSession);
//     } catch(e) {
//         return next(e)
//     }
// })

// router.get("/google", async (req, res, next) => {
//     try {
//         const userSession = await UserSession.findByPk(req.params.sessionId);

//         if (!userSession) return next(new Error("Invalid session ID"))

//         return res.json(userSession);
//     } catch (e) {
//         return next(e);
//     }
// })

export default router;