const mongoose = require('./connection')

const { Schema, model } = mongoose

const songlists = new Schema({
    name: {
        type: String
    },
    color: {
        type: String
    },
    readyToEat: {
        type: Boolean
    },
    owner: {
        // this is where we set up an objectId reference
        // by declaring that as the type
        type: Schema.Types.ObjectId,
        // this line tells us which model to look at
        ref: 'User'
    },
})
// const songlists = new Schema({ 
//     owner: {
//         type: Schema.Types.ObjectId,
//         ref: 'users'
//     },
//     name: {
//         type: String
//     },
//     songs: [{
//         type: Schema.Types.ObjectId,
//         ref: 'savedSongs'
//     }]
// })

const songLists = model('songLists', songlists)

module.exports = songLists

// songLists = {
// 	owner: userId ref, // just like fruits,
// 	name: String,
// 	songs: [{ type: objectId, ref: 'savedSongs' }]
// }