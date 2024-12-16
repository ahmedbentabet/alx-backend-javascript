const http = require('http');
const fs = require('fs').promises;

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8')
      .then((fileContent) => {
        const rows = fileContent.split('\n');
        const studentsByField = {};
        let totalStudents = -1;
        let result = '';
        for (const row of rows) {
          if (row.trim() !== '') {
            const columns = row.split(',');
            const studentField = columns[3];
            const studentName = columns[0];
            if (totalStudents >= 0) {
              if (!Object.hasOwnProperty.call(studentsByField, studentField)) {
                studentsByField[studentField] = [];
              }
              studentsByField[studentField].push(studentName);
            }
            totalStudents += 1;
          }
        }
        result += `Number of students: ${totalStudents}\n`;
        for (const field in studentsByField) {
          if (Object.hasOwnProperty.call(studentsByField, field)) {
            result += `Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}\n`;
          }
        }
        resolve(result);
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

const server = http.createServer((request, response) => {
  if (request.url === '/') {
    response.writeHead(200);
    response.end('Hello Holberton School!');
  } else if (request.url === '/students') {
    countStudents(process.argv[2])
      .then((studentsData) => {
        response.writeHead(200);
        response.end(`This is the list of our students\n${studentsData}`);
      })
      .catch((error) => {
        response.writeHead(404);
        response.end(`This is the list of our students\n${error.message}`);
      });
  } else {
    response.writeHead(404);
    response.end('Not found');
  }
});

server.listen(1245);

module.exports = server;
