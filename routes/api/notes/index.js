const router = require('express').Router();
// const db = require('../../../db/db.json');
const fs = require('fs');

router.get('/', async (req, res) => {
    const db = fs.readFileSync('./db/db.json', 'utf8')
    res.send(db);    
});

module.exports = router;