const fs = require('fs').promises;

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8')
      .then((fileContent) => {
        const rows = fileContent.split('\n');
        const studentsByField = {};
        let totalStudents = -1;
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
        console.log(`Number of students: ${totalStudents}`);
        for (const field in studentsByField) {
          if (Object.hasOwnProperty.call(studentsByField, field)) {
            console.log(`Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}`);
          }
        }
        resolve();
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;
