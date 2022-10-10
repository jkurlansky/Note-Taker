const router = require('express').Router();
const fs = require('fs');
const db = require('../db/db.json');

router.get('/api/notes', (req, res) => {
    console.log(`Get /api/notes`);
    res.status(200).json(db);
});

router.post('/api/notes', (req, res) => {
    console.log(req.body);
    // console.log(req);
    const newNote = req.body;
    db.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(db));
    res.status(200).json(db);
});

module.exports = router;