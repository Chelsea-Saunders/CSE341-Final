require('dotenv').config();

const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo').default;
const passport = require('passport');
const swaggerui = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');
const cors = require('cors');
const connectMongoose = require('./db/mongoose');
const mongodb = require('./db/connect');

require('./config/passport')(passport);

const app = express();
const PORT = process.envPORT || 3000;

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

app.use('/api-docs', swaggerui.serve, swaggerui.setup(swaggerDocument));

//PASSPORT INIT
app.use(passport.initialize());
app.use(passport.session);

// SERIALIZE USER INTO SESSION
passport.serializeUser((user, done) => {
    done(null, user);
});

// API ROUTES 

// GITHUB 
passport.use(
    new GitHubStrategy(
        {
        clientId: process.env.GITHUB_CLIENT_ID, 
        clientSecret: process.env.GITHUB_CLIENT_SECRET, 
        callbackURL: process.env.GITHUB_CALLBACK_URL,
    },
    function (accessToken, refreshToken, profile, done) {
        // 1: look up the user in MongoDb
        // 2: create the user if they don't exist
        // 3: return the user object

        const user = {
            githubId: profile.id, 
            username: profile.username, 
            displayName: profile.displayName, 
            profileUrl: profile.profileUrl, 
            photos: profile.photos, 
        };

        return done(null, user);
    }
  )
);

// Start GitHub login
app.get(
    '/auth/github', 
    passport.authenticate('github', { scope: ['user:email'] })
);

// GitHub callback
app.get(
    "/auth/github/callbackk", 
    passport.authenticate('github', {
        failureRedirect: '/login', 
        session: true,
    }),
    (req, res) => {
        res.redirect("/");
    }
);

// Check current login
app.get('/profile', (req, res) => {
    if (!req.isAuthenticated()) {
        return res.status(401).send('Not logged in');
    }

    res.json(req.user);
});

// logout
app.get("/logout", (req, res) => {
    req.logout(() => {
        res.redirect('/');
    });
});

mongodb.initDb(async (err) => {
    if(err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
    try {
        await connectMongoose();
        app.listen(PORT, () => {
            console.log(`Connected to MongoDB and listening on prot ${PORT}.`);
        });
    } catch (err) {
        console.error('Mongoose connection error:', err);
        process.exit(1);
    }
});