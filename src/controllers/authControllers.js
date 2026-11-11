// GOOGLE and GITHUB CALLBACK
/*const authCallbackSession= (req, res) => {
    if(!req.user) {
        return res.status(401).json({
            success: false, 
            message: 'Login failed',
        });
    }
    return res.json({
        success: true,
        message: 'Login successful', 
        user: req.user, 
        sessionID: req.sessionID,
    });
};

// CALLBACK FAILURE
const loginFailure = (req, res) => {
    return res.status(401).json({
        success: false, 
        message: 'OAuth login failed', 
    });
};

// CURRENT USER
const currentUser = (req, res) => {
    if (!req.isAuthenticated || !req.isAuthenticated()) {
        return res.status(401).json({
            authenticated: false, 
            user: null,
        });
    }

    return res.json({
        authenticated: true, 
        user: req.user, 
        sessionID: req.sessionID,
    });
};

// LOGOUT
const logout = (req, res, next) => {
    req.logout(function(err) {
        if (err) return next(err);

        req.session.destroy((sessionErr) => {
            if(sessionErr) return next(sessionErr);

            res.clearCookie('connect.sid');
            return res.redirect('/login');
        });
    });
};

module.exports = {
    authCallbackSession, 
    loginFailure, 
    currentUser, 
    logout, 
};*/
