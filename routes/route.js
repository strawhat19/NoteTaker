const express = require(`express`);
const notes = require(`./notes.js`);
const app = express();
app.use(`/notes`, notes);

module.exports = app;