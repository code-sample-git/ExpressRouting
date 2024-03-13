
const express = require('express');
const app = express();
const port = 3000;

// Import routes
const router = require('./route');

// Use the router
app.use('/', router);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
