import { MongoClient } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'

const { DB_CONNECTION_STRING, DB_NAME, COLLECTION_NAME, FALLBACK_URL } = process.env

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { shortcut } = req.query
  const client = new MongoClient(DB_CONNECTION_STRING!)
  const connection = await client.connect()
  const result = await connection.db(DB_NAME)
    .collection(COLLECTION_NAME!)
    .findOne({ ShortKey: shortcut })
  await client.close()
  return res.redirect(result ? result.RealUrl : FALLBACK_URL)
}
