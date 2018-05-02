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

//Simulation 2 - Student can store data in sessions - line 7&8
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

app.get('/api/getSongs', (req, res, next) => {
    console.log(req.body,"here");
    const {songs} = req.body;
    app.get('db').getSongs()
    .then(response =>{
        console.log(response)
        res.status(200).json(response);
    })
    .catch(err => {             
        res.status(500).json(err);
    })
})

//Simulation 1 - Student can create a RESTful API(PUT endpoint) - line 22
app.put('/api/updateSongs', (req, res, next) => {
    const {id, song, artist, album} = req.body.updatedInfo;
    console.log(req.body.updatedInfo)
    app.get('db').updateSongs([id, song, artist, album])
    .then(response => {
        res.status(200).json(response);
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json(err);
    })
})
//Simulation 1 - Student can create a RESTful API(Delete endpoint - line 24)
app.delete('/api/deleteSong/:id', (req, res, next) =>{ 
    app.get('db').deleteSong([req.params.id])
   .then(response =>{
       console.log(response)
        res.status(200).json(response);
})
    .catch(err=> {
    res.status(500).json(err);
});
app.get('/api/getUser', (req, res, next)=>{
    
});

app.post('/api/addSong', (req,res, next) => {
    const {song, artist, album} = req.body;
    app.get('db').getSongs([song, artist, album])
    .then(resoonse =>{
        res.status(200).json(response);
    })
    .catch(err =>{
        res.status(500).json(err);
    })
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})});