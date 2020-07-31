var makeQuestionsDb = require('./questions-db')
var mongodb = require('mongodb')
const dotenv = require('dotenv')
dotenv.config({path: "../.env"})

const MongoClient = mongodb.MongoClient
const url = process.env.DM_DB_URL // Users and Questions collections
const dbName = process.env.DM_DB_NAME//FIXME
const client = new MongoClient(url) // { useNewUrlParser=true }
console.log(dbName)
console.log(url)
async function makeDb() {
    if (!client.isConnected()) {
        await client.connect()
    }
    return client.db(dbName)
}

const questionsDb = makeQuestionsDb({ makeDb })

module.exports =  questionsDb