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
            error ? console.error(error) : console.info(`\nData has been written to ${file}`));
        };
    });
};

const deleteFromFile = (userID, file) => {
    fs.readFile(file, `utf8`, (error, data) => {
        if(error) {
            console.error(error);
        } else {
            const parsedData = JSON.parse(data);
            const index = parsedData.findIndex(function(objData){
                return objData.id === userID;
            });

            parsedData.splice(index, 1);
            
            fs.writeFile(file, JSON.stringify(parsedData, null, 2), (error) =>
            error ? console.error(error) : console.info(`\nData has been deleted and written to ${file}`));
        };
    });
}

module.exports = { readFromFile, appendToFile, deleteFromFile };