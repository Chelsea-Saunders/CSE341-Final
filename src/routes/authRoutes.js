const express = require('express');
const passport = require('../config/passport');
const { ensureAuth } = require('../middleware/auth');
const router = express.Router();

// GOOGLE ROUTEs
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get( '/google/callback', 
    passport.authenticate('google', { failureRedirect: '/login' }), 
    (req, res) => {
        res.redirect('/dashboard');
    }
);
//GITHUB ROUTES
router.get('/github', passport.authenticate('github', { scope: ['user:email'] }));
router.get('/github/callback', 
    passport.authenticate('github', { failureRedirect: '/login' }),
    (req, res) => {
        res.redirect('/dashboard');
    }
);

module.exports = router;