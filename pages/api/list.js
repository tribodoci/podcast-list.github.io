import podcasts from './output.json'

export default function handler(req, res) {
    try {
        res.status(200).json(podcasts)
    } catch (err) {
        res.status(500).json({ err })
    }
}
