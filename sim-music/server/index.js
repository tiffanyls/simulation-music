require ('dotenv').config();
const express = require('express');
const {json} = require ('body-parser');
const session = require('express-session');
const cors = require ('cors');
const passport = require('passport');
const massive = require ('massive');
const {
    CONNECTION_STRING,
    DOMAIN,
    CLIENT_ID,
    CLIENT_SECRET,
    SESSION_SECRET
  } = process.env;

const port = 3001;

const app = express();

massive(CONNECTION_STRING).then(db =>{
    app.set('db', db);
})
    .catch(console.log);

app.use(json());
app.use(cors());

app.use(
    session({
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());


passport.serializeUser((user,done)=>{
    done(null,user);
})

passport.deserializeUser((user,done )=>{
    done(null,user);
})

app.post('/api/addsong', (req,res, next) => {
    const {song, artist, album} = req.body;
    app.get('db').addSong([song, artist, album])
    .then(resoonse =>{
        res.status(200).json(response);
    })
    .catch(err =>{
        res.status(500).json(err);
    })
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})