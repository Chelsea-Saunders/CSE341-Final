require('dotenv').config();

const express = require('express');
const session = require('express-session');
const swaggerui = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');
const cors = require('cors');
const connectMongoose = require('./db/mongoose');
const MongoStore = require('connect-mongo');

const passport = require('./config/passport');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(
    session({
        secret: process.env.SESSION_SECRET, 
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({
            mongoUrl: process.env.MONGODB_URI
        }),

        cookie: {
            httpOnly: true,
            secure: false,
            maxAge: 1000 * 60 * 60 *24
        },
    })
);



//PASSPORT INIT
app.use(passport.initialize());
app.use(passport.session());

app.use('/api-docs', swaggerui.serve, swaggerui.setup(swaggerDocument));

app.get('/profile', (req, res) => {
    if (!req.isAuthenticated()) {
        return res.status(401).json({ message: 'Not logged in' });
    }
    res.json(req.user);
});

// logout
app.get("/logout", (req, res, next) => {
    req.logout((err) => {
        if (err) return next(err);
        res.redirect('/');
    });
});



// Google Login
app.get('/auth/google', 
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Google callback
app.get('/auth/google/callback', 
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
        res.redirect('/dashboard');
    }
);

// GitHub login
app.get(
    '/auth/github', 
    passport.authenticate('github', { scope: ['user:email'] })
);

// GitHub callback
app.get(
    "/auth/github/callback", 
    passport.authenticate('github', {
        failureRedirect: '/login', 
        session: true,
    }),
    (req, res) => {
        res.redirect("/dashboard");
    }
);



connectMongoose()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Connected to MongoDB and listening on port ${PORT}.`);
        });
    })
    .catch((err) => {
        console.error('Mongoose connection error:', err);
        process.exit(1);
    });