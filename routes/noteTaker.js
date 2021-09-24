const fs = require(`fs`);
const notes = require(`express`).Router();

const {v4 : uuidv4 } = require(`uuid`);

const { readFromFile, appendToFile, deleteFromFile } = require(`../helper/fsUtils`);

const jsonFile = `./db/db.json`;

notes.get(`/`, (req, res) => {
    console.info(`${req.method} request received for notes`);
    readFromFile(jsonFile).then((data) => res.json(JSON.parse(data)));
});

notes.post(`/`, (req, res) => {
    const {title, text} = req.body;
    const id = uuidv4();
    const newNote = {
        id,
        title,
        text
    };
    appendToFile(newNote, jsonFile);
    res.send(`Information submitted with User ID: ${id}`);
})

notes.delete(`/:id`, (req, res) => {
    const id = req.params.id;

    deleteFromFile(id, jsonFile);
    res.send(`Selected note with User ID ${id} has been deleted`);
})

module.exports = notes;