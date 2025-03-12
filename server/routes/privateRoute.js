const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');

// Example of a protected route
router.get('/', auth, (req, res) => {
  res.send('This is a protected route');
});

module.exports = router;
