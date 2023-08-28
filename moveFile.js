const fs = require('fs').promises;

async function moveFile(source, destination) {
    try {
        await fs.rename(source, destination);
        console.log(`Moved file from ${source} to ${destination}`);
    } catch (error) {
        console.error(`Got an errror trying to move the file: ${error.message}`)
    }
}

moveFile('greetings-2.txt', 'test-data/salutations.txt');