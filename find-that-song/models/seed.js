const mongoose = require('./connection')
const songLists = require('./songLists')

const db = mongoose.connection

// db.on('open', () => {

//     const songData = [{ 
//         title: {
//             type:  "The Weekend"
//         },
//         artist: { 
//             type: "Mac Miller"
//         },
//         song_id: {
//             type: "01"
//         },
//         lyrics: {
//             type: "testing lyrics"
//         } 
//     }]

db.on('open', () => {
    // array of starter resources(fruits)
    const songData = [
        { name: 'Orange', color: 'orange', readyToEat: true },
        { name: 'Grape', color: 'purple', readyToEat: true },
        { name: 'Banana', color: 'green', readyToEat: false },
        { name: 'Strawberry', color: 'red', readyToEat: false },
        { name: 'Coconut', color: 'brown', readyToEat: true }
    ]
    
    songLists.deleteMany({ owner: null })
        .then(() => {
            songLists.create(songData)
                .then(data => {
                    console.log('here are the created songs: \n', data)
                    db.close()
                })
                .catch(err => {
                    console.log('The following error occurred: \n', err)
                    db.close()
                })
        })

    .catch(err => {
        console.log(err)
        db.close()
    })
})



// const db = mongoose.connection

// db.on('open', () => {
//     // array of starter resources(fruits)
//     const startFruits = [
//         { name: 'Orange', color: 'orange', readyToEat: true },
//         { name: 'Grape', color: 'purple', readyToEat: true },
//         { name: 'Banana', color: 'green', readyToEat: false },
//         { name: 'Strawberry', color: 'red', readyToEat: false },
//         { name: 'Coconut', color: 'brown', readyToEat: true }
//     ]
//     // then we delete every fruit in the database(all instances of this resource)
//     // this will delete any fruits that are not owned by a user
//     Fruit.deleteMany({ owner: null })
//         .then(() => {
//             // then we'll seed(create) our starter fruits
//             Fruit.create(startFruits)
//                 // tell our app what to do with success and failures
//                 .then(data => {
//                     console.log('here are the created fruits: \n', data)
//                     // once it's done, we close the connection
//                     db.close()
//                 })
//                 .catch(err => {
//                     console.log('The following error occurred: \n', err)
//                     // always close the connection
//                     db.close()
//                 })
//         })
        // .catch(err => {
        //     console.log(err)
        //     // always make sure to close the connection
        //     db.close()
        // })
// })