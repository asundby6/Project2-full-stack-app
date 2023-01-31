const mongoose = require('./connection')

const { Schema } = mongoose

const savedSongs = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'owner',
        required: true
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
        type: [String]
    }
})

module.exports = savedSongs



// savedSongs = {
// 	owner: userId ref, // just like fruits,
// 	title: string,
// 	artist: string,
// 	song_id: string, // probably going to want lyricId from chartAPI
// 	lyrics: String
// }