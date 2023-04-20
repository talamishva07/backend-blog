// const mongooes = require('mongoose');

// mongooes.set('strictQuery', false);

// mongooes.connect("mongodb+srv://talamishva05:12345678@123cluster0.wy8ebam.mongodb.net/mishva?retryWrites=true&w=majority", {
//     useNewUrlParser: true,
// }).then(() => {
//     console.log('DB connect Done');
// }).catch((error) => {
//     console.log(error);
// })

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://talamishva05:aaa111vvv@123cluster0.wy8ebam.mongodb.net/mishva?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);
