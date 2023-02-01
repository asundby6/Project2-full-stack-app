const express = require('express')
const songLists = require('../models/songLists') //songLists
const router = express.Router();


router.get('/songLists', (req,res) => {
    const { username, loggedIn, userId } = req.session
    songLists.find({})
    // .populate('owner','username')
    // .populate('savedSongs', '-password')
    .then(songlists => {
        res.json('songLists/results', {songlists, username, loggedIn, userId })
    })
    .catch(err => {
        console.log(err + "messed up")
        res.status(404).json(err)
    })
})


// get all songs in list
// router.get('/songLists', async (req,res) => {
//     try {
//         const data = await songLists.find()
//         res.json(data)
//     }
    
//     catch(err) {
//         console.log(err)
//         res.status(404).json(err)
//     }
// })

// get songs by id in list
// router.get('/findSong/:id', async (req, res) => {
//     try {
//         const data = await Model.findById(req.params.id);
//         res.json(data)
//     }
//     catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })


module.exports = router
