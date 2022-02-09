const router = require('express').Router();
const path = require('path');
const noteRoutes = require('./notes');

// This prepends /api to every route declared below this comment.
router.use('/notes', noteRoutes);

module.exports = router;