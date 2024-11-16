const express = require('express');
const app = express()
const cors = require('cors');
const port = process.env.PORT||5000
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()
const uri = `mongodb+srv://${process.env.USER_ID}:${process.env.USER_PASS}@cluster0.ssb3nmc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`



app.use(cors())
app.use(express.json())


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
  










    
    await client.connect();

    await client.db("admin").command({ ping: 1 })

   
  } finally {
    
  }
}
run().catch(console.dir);
app.get('/',(req,res)=>{
res.send('sarvar is rune')
})

app.listen(port,()=>{
    console.log(`prot is ${port}`);
    
})