const router = require('express').Router();
const db = require('../../../db/db.json');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');


router.get('/', (req, res) => {
    const content = fs.readFileSync('./db/db.json', 'utf8')
    res.send(content);    
});

router.post('/', (req, res) => {
    const { title, text } = req.body;
    const id = uuidv4();

    if (!title || !text) {
        res.send('Title and text cannot be blank!');
    }

    const newNote = {
        id,
        title,
        text
    };
    const notes = JSON.stringify(newNote);
    fs.writeFile(db, notes);
    
    res.json(JSON.stringify(newNote));
});

module.exports = router;