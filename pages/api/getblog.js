import *  as fs from "fs";


export default function handler(req, res) {
    fs.readFile(`blogData/${req.query.slug}.json`, 'utf-8', (err, data) => {
        if (err) {
            res.status(400).json({ error: 'No Such Blog found' })
        }
        res.status(200).json(JSON.parse(data))
    });

}
