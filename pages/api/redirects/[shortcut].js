import nextConnect from 'next-connect'
import dbMiddleware from '../../../middleware/db'

const { COLLECTION_NAME, FALLBACK_URL } = process.env

const handler = nextConnect()

handler.use(dbMiddleware)

handler.get(async (req, res) => {
  const { shortcut } = req.query
  const result = await req.db.collection(COLLECTION_NAME)
    .findOne({ ShortKey: shortcut })
  return res.redirect((result && result.RealUrl) || FALLBACK_URL)
})

export default handler
