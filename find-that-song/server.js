////////////////////
//  Dependencies  //
////////////////////
require('dotenv').config() // make env variables available
const express = require('express')
const middleware = require('./utils/middleware')
const UserRouter = require('./controllers/user')
const User = require('./models/user')
const seed = require('./models/seed')
// const savedSongs = require('./controllers/savedSongs')
const songLists = require('./controllers/songLists')
// SEE MORE DEPENDENCIES IN ./utils/middleware.js
// user and resource routes linked in ./utils/middleware.js

//////////////////////////////
// Middleware + App Object  //
//////////////////////////////
const app = require("liquid-express-views")(express())

middleware(app)

////////////////////
//    Routes      //
////////////////////

app.use('/auth', UserRouter)
app.use('/saved', savedSongs)
app.use('/list', songLists)

app.get('/', (req, res) => {
    const { username, userId, loggedIn } = req.session
	res.render('index.liquid', { loggedIn, username, userId })
})

app.get('/error', (req, res) => {
	const error = req.query.error || 'This Page Does Not Exist'
    const { username, loggedIn, userId } = req.session
	res.render('error.liquid', { error, username, loggedIn, userId })
})

// if page is not found, send to error page
app.all('*', (req, res) => {
	res.redirect('/error')
})



//////////////////////////////
//      App Listener        //
//////////////////////////////
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})





/*
user = {
	username: { type: String },
	password: { type: String }
}
savedSongs = {
	owner: userId ref, // just like fruits,
	title: string,
	artist: string,
	song_id: string, // probably going to want lyricId from chartAPI
	lyrics: String
}
songLists = {
	owner: userId ref, // just like fruits,
	name: String,
	songs: [{ type: objectId, ref: 'savedSongs' }]
}
------------------------------------------------------------------------------------------------------------------------------
- Proj name -
Find That Song
- Idea + Notes -
Users can CRUD song lyrics
- API -
http://www.chartlyrics.com/api.aspx
- MVP -
Users can search songs by lyrics, and/or artist. Save songs they've found. Users can use those saved songs to create lists. 
- Stretch Goals -
figure out pagination(limit # of results shown on a single page)
song ratings(an additional model that connects users to saved songs, allows them to rate from 1-5)
*/