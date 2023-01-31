const mongoose = require('./connection')

const { Schema, model } = mongoose


const songlists = new Schema({ 
    owner: {
        ref: 'User'
    },
    name: {
        type: String
    },
    songs: [{
        type: Schema.Types.ObjectId,
        ref: 'songs'
    }]
})

const songLists = model('songLists', songlists)

module.exports = songLists

// songLists = {
// 	owner: userId ref, // just like fruits,
// 	name: String,
// 	songs: [{ type: objectId, ref: 'savedSongs' }]
// }