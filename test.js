var mongodb = require('mongodb')

const MongoClient = mongodb.MongoClient
//const url = process.env.DM_DB_URL // Users and Questions collections
const url = "mongodb://127.0.0.1:27017/hackathon" //FIXME
const dbName = "hackathon"//FIXME
const client = new MongoClient(url) // { useNewUrlParser=true }

Main = (async () => {
    await client.connect()
    var test =await  client.db("hackathon").collection("questions").aggregate(
        { $sample: { size: 1 } }
      ).toArray()
    console.log(test)
}) 

Main();
    