
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

const uri = "mongodb+srv://<username>:<password>@cluster0.tmuuwhy.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const collection = client.db("test").collection("devices");



app.listen(port, () => {
    console.log(`personal Service Servier Is running port ${port} ${port}`);
})

