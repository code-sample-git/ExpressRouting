
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Home page');
});

router.get('/login', (req, res) => {
    res.send('Login page');
});

router.get('/register', (req, res) => {
    res.send('Register page');
});

// Handle 404 - Keep this as a last route
router.get('*', (req, res) => {
    res.send('Page not found');
});

module.exports = router;
