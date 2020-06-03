const JWTStrategy = require('passport-jwt').Strategy;
// We use this to extract the JWT sent by the user
const ExtractJWT = require('passport-jwt').ExtractJwt;
// import jwt from 'jsonwebtoken';
import db from "#root/db";
import generateUUID from "#root/helpers/generateUUID";
import hashPassword from "#root/helpers/hashPassword";
import jwt from "#root/server/auth/jwt";
import {Strategy as FacebookStrategy} from "passport-facebook";
// import {default as GoogleStrategy} from "passport-google-oauth";
// import {FacebookStrategy} from "passport-facebook";
// import {GoogleStrategy} from "passport-google-oauth";
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const {User} = db;
const config = require('config');

// implement this: https://www.twilio.com/blog/facebook-oauth-login-node-js-app-passport-js

export default function (passport) {
    let opts = {
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.jwt.secret
    }

    passport.use(new JWTStrategy(opts, async function (jwtPayload, done) {
        try {
            const user = await User.findByPk(jwtPayload.id, {
                subQuery: false,
                nest: true,
                attributes: [
                    'id',
                    'email',
                    'firstName',
                    'lastName',
                    'profilePicture',
                    'facebookId',
                    'googleId'
                ]
            });

            if (user) {
                return done(null, user);
            } else {
                return done(null, false, {message: 'Unauthorized.'});
            }

        } catch (e) {
            return done(e, false, {message: e.message});
        }
    }));

    passport.use(new FacebookStrategy({
        clientID: config.facebookAuth.clientID,
        clientSecret: config.facebookAuth.clientSecret,
        callbackURL: config.facebookAuth.callbackURL,
        profileFields: ['id', 'photos', 'emails', 'name']
    }, async function (accessToken, refreshToken, profile, done) {
        try {
            const user = await User.findAll({
                limit: 1,
                subQuery: false,
                nest: true,
                raw: true,
                where: {
                    email: profile.emails[0].value
                },
                attributes: [
                    'id',
                    'email',
                    'firstName',
                    'lastName',
                    'profilePicture',
                    'facebookId',
                    'googleId'
                ]
            });
            if (user.length > 0) {
                let returnedUser = user[0];
                let accessToken = await jwt.createToken(returnedUser);
                returnedUser.accessToken = accessToken;
                return done(null, returnedUser);
            } else {
                const user = await User.create({
                    id: generateUUID(),
                    firstName: profile.name.givenName,
                    lastName: profile.name.familyName,
                    email: profile.emails[0].value,
                    profilePicture: profile.photos[0].value,
                    facebookId: profile.id
                });
                let returnedUser = user.get({plain: true})
                let accessToken = await jwt.createToken(returnedUser);
                returnedUser.accessToken = accessToken;
                return done(null, returnedUser)
            }
        } catch (e) {
            return done(e, false);
        }
    }));

    passport.use(new GoogleStrategy({
        clientID: config.googleAuth.clientID,
        clientSecret: config.googleAuth.clientSecret,
        callbackURL: config.googleAuth.callbackURL
    }, async function (accessToken, refreshToken, profile, done) {
        try {
            const user = await User.findAll({
                limit: 1,
                subQuery: false,
                nest: true,
                where: {
                    email: profile._json.email
                },
                attributes: [
                    'id',
                    'email',
                    'firstName',
                    'lastName',
                    'profilePicture',
                    'googleId',
                    'facebookId'
                ]
            });
            if (user.length > 0) {
                let returnedUser = user[0];
                let accessToken = await jwt.createToken(returnedUser);
                returnedUser.accessToken = accessToken;
                return done(null, returnedUser);
            } else {
                const user = await User.create({
                    id: generateUUID(),
                    firstName: profile._json.given_name,
                    lastName: profile._json.family_name,
                    email: profile._json.email,
                    profilePicture: profile._json.picture,
                    googleId: profile._json.sub
                });
                let returnedUser = user.get({plain: true})
                let accessToken = await jwt.createToken(returnedUser);
                returnedUser.accessToken = accessToken;
                return done(null, returnedUser)
            }
        } catch (e) {
            return done(e, false);
        }
    }));

    // passport.use(
    //     "email-confirmation",
    //     new JwtStrategy(opts, async function(jwt_payload, done) {
    //         let err, user;

    //         if (
    //             jwt_payload.token_type &&
    //             jwt_payload.token_type == "email_confirmation"
    //         ) {
    //             [err, user] = await to(Account.findById(jwt_payload.id));
    //             if (err) return done(err, false);
    //             if (user) {
    //                 if (user.user_type == "tutor") user.state = "incomplete";
    //                 if (user.user_type == "tutee") user.state = "active";
    //                 user.save();
    //                 return done(null, user);
    //             } else {
    //                 return done(null, false);
    //             }
    //         } else {
    //             return done(null, false);
    //         }
    //     })
    // );


    // passport.use(
    //     "reset-password",
    //     new JwtStrategy(opts, async function(jwt_payload, done) {
    //         let err, user;

    //         if (
    //             jwt_payload.token_type &&
    //             jwt_payload.token_type == "password_reset"
    //         ) {
    //             [err, user] = await to(Account.findById(jwt_payload.id));
    //             if (err) return done(err, false);
    //             if (user) {
    //                 return done(null, user);
    //             } else {
    //                 return done(null, false);
    //             }
    //         } else {
    //             return done(null, false);
    //         }
    //     })
    // );

}
