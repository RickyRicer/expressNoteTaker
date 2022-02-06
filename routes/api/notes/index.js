const router = require('express').Router();
// const db = require('../../../db/db.json');
const fs = require('fs');

router.get('/', (req, res) => {
    const db = fs.readFileSync('./db/db.json', 'utf8')
    res.send(db);    
});

router.post('/api/notes', (req, res) => {
    const db = fs.readFileSync('./db/db.json')
    res.json(db);
});

module.exports = router;