const mongoose = require('mongoose')

const songlists = new mongoose.Schema({ 
    owner: {
        ref: 'User'
    },
    name: {
        type: String
    },
    songs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'savedSongs'
    }]
})

module.exports = mongoose.model('songLists', songlists)



// songLists = {
// 	owner: userId ref, // just like fruits,
// 	name: String,
// 	songs: [{ type: objectId, ref: 'savedSongs' }]
// }