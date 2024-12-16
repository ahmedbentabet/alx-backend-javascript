const express = require('express');
const fs = require('fs').promises;

const server = express();

function getStudentData(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8')
      .then((fileContent) => {
        const lines = fileContent.split('\n');
        const studentGroups = {};
        let totalStudents = -1;
        let formattedResult = '';

        for (const line of lines) {
          if (line.trim() !== '') {
            const [firstName, , , group] = line.split(',');
            if (totalStudents >= 0) {
              if (!Object.hasOwnProperty.call(studentGroups, group)) {
                studentGroups[group] = [];
              }
              studentGroups[group] = [...studentGroups[group], firstName];
            }
            totalStudents += 1;
          }
        }

        formattedResult += `Number of students: ${totalStudents}\n`;
        for (const groupName in studentGroups) {
          if (Object.hasOwnProperty.call(studentGroups, groupName)) {
            formattedResult += `Number of students in ${groupName}: ${studentGroups[groupName].length}. List: ${studentGroups[groupName].join(', ')}\n`;
          }
        }

        resolve(formattedResult);
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

server.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

server.get('/students', (request, response) => {
  getStudentData(process.argv[2])
    .then((studentData) => {
      response.send(`This is the list of our students\n${studentData}`);
    })
    .catch((error) => {
      response.status(500).send(`This is the list of our students\n${error.message}`);
    });
});

server.listen(1245);

module.exports = server;
