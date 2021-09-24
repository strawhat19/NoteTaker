const fs = require(`fs`);
const util = require(`util`);

const readFromFile = util.promisify(fs.readFile);

const appendToFile = (content, file) => {
    fs.readFile(file, `utf8`, (error, data) => {
        if(error) {
            console.error(error);
        } else {
            const parsedData = JSON.parse(data);
            parsedData.push(content);
            fs.writeFile(file, JSON.stringify(parsedData, null, 2), (error) =>
            err ? console.error(error) : console.info(`\nData has been written to ${file}`));
        };
    });
};

const deleteFromFile = (userID, file) => {
    fs.readFile(file, `utf8`, (error, data) => {
        if(error) {
            console.error(error);
        } else {
            const parsedData = JSON.parse(data);
            // example of removing object from array sourced from https://www.codegrepper.com/code-examples/javascript/how+to+delete+object+from+array+in+javascript
            // uses the array.findIndex method to find the index of the object that matches the userID
            const index = parsedData.findIndex(function(objData){
                return objData.id === userID;
            });
            // splice is used to remove the note that matches the userID
            parsedData.splice(index, 1);
            // writes the file back out
            fs.writeFile(file, JSON.stringify(parsedData, null, 2), (error) =>
            err ? console.error(error) : console.info(`\nData has been deleted and written to ${file}`));
        };
    });
}

module.exports = { readFromFile, appendToFile, deleteFromFile };