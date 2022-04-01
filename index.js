const express = require('express');
const path = require('path');
require('dotenv').config();
const port = process.env.PORT || 8080;

const app = express();

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '/index.html'));
});

app.get('/about.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '/about.html'));
});

app.get('/contact.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '/contact.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '404.html'));
});

