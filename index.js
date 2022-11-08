
const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config()


app.use(cors());
app.use(express.json());

app.get('/', (req, res) =>{
    res.send('Welcome to personal service server')
})

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.tmuuwhy.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {
    try{
        const serviceCollection = client.db("PersonalService").collection("services");
        app.get('/hservices', async (req, res) => {
            const services = await serviceCollection.find({}).limit(3).toArray();
            res.send(services);
        })
        app.get('/services', async (req, res) => {
            const services = await serviceCollection.find({}).toArray();
            res.send(services);
        })
    }
    finally{

    }
}
run().catch(err => console.log(err))


app.listen(port, () => {
    console.log(`personal Service Servier Is running port ${port} ${port}`);
})

