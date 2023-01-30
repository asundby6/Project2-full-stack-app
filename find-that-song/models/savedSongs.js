const mongoose = require('mongoose')

const { Schema } = mongoose

const savedsongs = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String
    },
    artist: {
        type: String
    },
    song_id: {
        type: String
    },
    lyrics: {
        type: String
    }
})

const savedSongs = model('savedSongs', savedsongs)

module.exports = savedSongs







// savedSongs = {
// 	owner: userId ref, // just like fruits,
// 	title: string,
// 	artist: string,
// 	song_id: string, // probably going to want lyricId from chartAPI
// 	lyrics: String
// }