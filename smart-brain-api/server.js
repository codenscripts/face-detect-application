const express = require('express');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const knex = require('knex');
const register = require('./controllers/register');
const signIn = require('./controllers/signIn');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'YOUR USER NAME',
    password : '',
    database : 'YOUR DATABASE NAME'
  }
});

console.log(db.select('*').from('users'))

const app = express();
app.use(express.json());
app.use(cors());


app.post('/signin', (req, res) => { signIn.handleSignIn (req, res, db, bcrypt) })
app.post('/register', (req, res) => { register.handleRegister (req, res, db, bcrypt) })
app.get('/profile/:id', (req, res) => {profile.handleProfileGet (req, res, db) })
app.put('/image', (req, res) => {image.handleImage (req, res, db) })

app.listen(3000, () => {
  console.log('app is running');
})


/*
THIS MIGHT BE USED BY BACKEND, BUT FOR NOW WE DON'T NEED

app.get('/profile/:id', (req, res) => {
  const { id } = req.params;
  let found = false;
  database.users.forEach(user => {
    if(user.id === id){
      found = true;
      return res.json(user);
    } 
  })
  if (!found) {
    res.status(404).json('user not found');
  }
})
*/
/*
/ --> res = this is working
/ signin --> POST = success/fail
/ register --> POST = new user
/ profile/:userId --> GET = user
/ image --> PUT --> updated user
*/