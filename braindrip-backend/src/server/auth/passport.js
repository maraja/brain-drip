const JWTstrategy = require('passport-jwt').Strategy;
//We use this to extract the JWT sent by the user
const ExtractJWT = require('passport-jwt').ExtractJwt;
import {Strategy as FacebookStrategy} from "passport-facebook";
// import {default as GoogleStrategy} from "passport-google-oauth";
// import {FacebookStrategy} from "passport-facebook";
// import {GoogleStrategy} from "passport-google-oauth";
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const config = require('config');

// implement this: https://www.twilio.com/blog/facebook-oauth-login-node-js-app-passport-js

module.exports = function(passport) {
    // var opts = {};
    // opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    // opts.secretOrKey = CONFIG.jwt_encryption;

    // passport.use(
    //     new JwtStrategy(opts, async function(jwt_payload, done) {
    //         let err, user;
    //         [err, user] = await to(Account.findById(jwt_payload.id));
    //         if (err) return done(err, false, { message: err.message });
    //         if (user) {
    //             return done(null, user);
    //         } else {
    //             return done(null, false, { message: 'Unauthorized.' });
    //         }
    //     })
    // );

    passport.use(
        new FacebookStrategy(
            {
                clientID: config.facebookAuth.clientID,
                clientSecret: config.facebookAuth.clientSecret,
                callbackURL: config.facebookAuth.callbackURL    
            },
            function(accessToken, refreshToken, profile, done) {
                // Account.upsertSocialUser(
                //     accessToken,
                //     refreshToken,
                //     profile,
                //     function(err, user) {
                        return done(null, profile);
                //     }
                // );
                // console.log("PASSPORT FACEBOOK") 
                // console.log(accessToken)
                // console.log(refreshToken)
                // console.log(profile)
            }
        )
    );

    passport.use(
        new GoogleStrategy(
            {
                clientID: config.googleAuth.clientID,
                clientSecret: config.googleAuth.clientSecret,
                callbackURL: config.googleAuth.callbackURL
            },
            function(accessToken, refreshToken, profile, done) {
                // Account.upsertSocialUser(
                //     accessToken,
                //     refreshToken,
                //     profile,
                //     function(err, user) {
                    console.log(profile)
                        return done(null, profile);
                //     }
                // );
            }
        )
    );

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