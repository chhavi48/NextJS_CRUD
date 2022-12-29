
import connectMongo from "../../database/connection";

export default function handler(req, res) {
  connectMongo()
  res.status(200).json({ name: 'John Doe' })
}
