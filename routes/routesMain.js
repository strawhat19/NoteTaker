const express = require(`express`);
const notes = require(`./noteTaker.js`);
const app = express();
app.use(`/notes`, notes);

module.exports = app;