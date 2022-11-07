import db from '../../lib/db'

export default async function handler(req, res) {
  try {
    const rows = await db.query('select type, value from app_info')
    res.json(rows)
  } catch (err) {
    console.error(err)
    res.code(500).send()
  }
}
