require('dotenv').config()
const mongoose = require('./connection')


mongoose.connect("mongodb+srv://alecs:pickles@cluster1.r61u7yd.mongodb.net/?retryWrites=true&w=majority", {
	useUnifiedTopology: true,
	useNewUrlParser: true,
})

const db = mongoose.connection


const songData = [
    { title: {
        type:  "The Weekend"
    },
    artist: { 
        type: "Mac Miller"
    },
    song_id: {
        type: "01"
    },
    lyrics: {
        type: "testing"
    } }
]



try {
    client.connect();
    console.log("Connected correctly to server");

    const collection = client.db("test").collection("lyrics");

    // The drop() command destroys all data from a collection.
    collection.drop();

   
    collection.insertMany(songData);

    console.log("Database seeded! :)");
    client.close();
} catch (err) {
    console.log(err.stack);
    
}
