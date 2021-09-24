const router = require(`express`).Router();
const db = require(`../db/db`);
const fs = require(`fs`);
const path = require(`path`);
const uuid = require(`uuid`);

router.get(`/notes`, (req, res) => {
  console.info(`Retrieving notes from the database...`);
  res.json(db);
});

router.delete(`/notes/:id`, (req, res) => {
  let jsonPath = path.join(__dirname, `../db/db.json`);
  for (i = 0; i < db.length; i++) {
    if (db[i].id == req.params.id) {
      db.splice(i, 1);
      break;
    } else {
      return `Error: Note not found!`;
    }
  }

  fs.writeFileSync(jsonPath, JSON.stringify(db), (err) => {
    console.info(
      `Something went wrong while trying to delete the note with ID: ${req.params.id}`
    );
    console.error(err);
  });
  console.info(`Deleting note ${req.body}`);
  res.json(db);
});

router.post(`/notes`, (req, res) => {
  let jsonFilePath = path.join(__dirname, `../db/db.json`);

  let note = req.body;
  note.id = uuid.v4();
  console.log(`The note's ID is: ${note.id}`);
  console.info(
    `Your new note titled: ${note.title} will be saved to the database with an id of ${note.id}`
  );
  db.push(note);

  fs.writeFile(jsonFilePath, JSON.stringify(db), function (err) {
    err
      ? console.log(err)
      : console.log(`Your note has been saved to the database.`);
  });

  res.json(note);
});
module.exports = router;