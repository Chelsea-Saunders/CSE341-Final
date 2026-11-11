/*const express = require('express');
const passport = require('../config/passport');
const router = express.Router();

// PROFILE ROUTE
router.get('/profile', (req, res) => {
    if (!req.isAuthenticated()) {
        return res.status(401).json({ message: 'Not logged in' });
    }
    res.json(req.user);
});

// LOGOUT ROUTE
const logout = (req, res, next) => {
    req.logout((err) => {
        if (err) return next(err);

        req.session.destroy((sessionErr) => {
            if (sessionErr) return next(sessionErr);

            res.clearCookie('connect.sid', { path: '/' });

            return res.redirect('/login');
        });
    });
};
router.get('/logout', logout);


// GOOGLE ROUTES
router.get('/auth/google', 
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

// google callback
router.get(
    '/auth/google/callback', 
    passport.authenticate('google', { 
        failureRedirect: '/login'
    }),
    (req, res) => {
        res.redirect('/dashboard');
    }
);

// GITHUB ROUTES
router.get(
    '/auth/github', 
    passport.authenticate('github', { scope: ['user:email'] })
);

// GitHub callback
router.get(
    '/auth/github/callback', 
    passport.authenticate('github', {
        failureRedirect: '/login'
    }),
    (req, res) => {
        res.redirect("/dashboard");
    }
);

module.exports = router;*/
