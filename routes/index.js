const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');
// // const db = require('./db');

router.use('/api', apiRoutes);

// GET Route for homepage
router.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

// GET Route for notes
router.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '../public/notes.html'))
);

module.exports = router;