import { MongoClient } from 'mongodb'
import nextConnect from 'next-connect'

const { DB_CONNECTION_STRING, DB_NAME } = process.env

const client = new MongoClient(DB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

async function dbHandler(req, _, next) {
  if (!client.isConnected()) await client.connect()
  req.dbClient = client
  req.db = client.db(DB_NAME)
  return next()
}

const dbMiddleware = nextConnect().use(dbHandler)

export default dbMiddleware
