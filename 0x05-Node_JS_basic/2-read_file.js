const fs = require('fs');

function countStudents(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error('Cannot load the database');
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const rows = fileContent.split('\n');
  const studentByField = {};
  let totalStudents = 0;

  for (const row of rows) {
    if (row.trim() !== '') {
      const columns = row.split(',');
      const studentField = columns[3];
      const studentName = columns[0];

      if (totalStudents > 0) {
        if (!Object.hasOwnProperty.call(studentByField, studentField)) {
          studentByField[studentField] = [];
        }
        studentByField[studentField].push(studentName);
      }
      totalStudents += 1;
    }
  }

  console.log(`Number of students: ${totalStudents - 1}`);
  for (const field in studentByField) {
    if (Object.hasOwnProperty.call(studentByField, field)) {
      console.log(`Number of students in ${field}: ${studentByField[field].length}. List: ${studentByField[field].join(', ')}`);
    }
  }
}

module.exports = countStudents;
