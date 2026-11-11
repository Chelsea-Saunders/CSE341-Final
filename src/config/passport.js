/*const passport = require('passport');
const Google = require('passport-google-oauth20').Strategy;
const Github = require('passport-github2').Strategy;
const User = require('../models/User');

// Serialization
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(err, null);
    }
});

// Google OAuth
passport.use(
    new Google(
        {
            clientID: process.env.GOOGLE_CLIENT_ID, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK,
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                let user = await User.findOne({ googleId: profile.id });
                
                if (!user) {
                    const primaryEmail = profile.emails && profile.emails[0] ? profile.emails [0].value : null;

                    user = await User.create({
                        googleId: profile.id, 
                        name: profile.displayName || profile.username, 
                        email: primaryEmail,
                        avatar: profile.photos?.[0]?.value || profile._json?.avatar_url || null,
                    });
                }
                return done(null, user);
            } catch (err) {
                return done(err);
            }
        }
    )
);

// GitHub OAuth
passport.use(
    new Github(
        {
            clientID: process.env.GITHUB_CLIENT_ID, 
            clientSecret: process.env.GITHUB_CLIENT_SECRET, 
            callbackURL: process.env.GITHUB_CALLBACK, 
        }, 
        async (accessToken, refreshToken, profile, done) => {
            try {
                let user = await User.findOne({ githubId: profile.id });

                if (!user) {
                    const primaryEmail = profile.emails && profile.emails[0] ? profile.emails[0].value : null;

                    user = await User.create({
                        githubId: profile.id, 
                        name: profile.displayName || profile.username, 
                        email: primaryEmail, 
                        avatar: profile.photos?.[0]?.value || null,
                    });
                }
                return done(null, user);
            } catch (err) {
                return done(err);
            }
        }
    )
);
module.exports = passport;*/
