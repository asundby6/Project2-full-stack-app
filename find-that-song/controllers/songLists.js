const express = require('express')
const songLists = require('../models/songLists') //songLists
const router = express.Router();

router.get('/', (req,res) => {
    const { username, loggedIn, userId } = req.session
    songLists.find({})
    .populate('owner','username')
    .populate('savedSongs', '-password')
    .then(songlists => {
        res.render('songLists/results', {songlists, username, loggedIn, userId })
    })
    .catch(err => {
        console.log(err)
        res.status(404).json(err)
    })
})

// router.get('/:lyrics', (req, res) => {
//     // get the id -> save to a variable
//     const lyrics = req.params.lyrics
//     // use a mongoose method to find using that id
//     songLists.findById(lyrics)
//         .populate('', '')
//         // send the fruit as json upon success
//         .then( => {
//             res.json({ fruit: fruit })
//         })
//         // catch any errors
//         .catch(err => {
//             console.log(err)
//             res.status(404).json(err)
//         })
// })
