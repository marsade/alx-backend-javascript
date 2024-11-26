const fs = require('node:fs');
function countStudents (path) {
  fs.readFile(path, 'utf8', (error, data) => {
    if (error) {
      throw new Error('Cannot load the database');
    }

    const students = data.split('\n').slice(1);
    const count = students.length;
    const csStudents = [];
    const sweStudents = [];

    for (const index of students) {
      if (index.includes('CS')) {
        csStudents.push(index.split(',')[0]);
      } else if (index.includes('SWE')) {
        sweStudents.push(index.split(',')[0]);
      }
    }
    console.log(`Number of students: ${count}`);
    console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
    console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
  });
}

module.exports = countStudents;
