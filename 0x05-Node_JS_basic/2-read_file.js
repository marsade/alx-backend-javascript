const fs = require('fs');

function countStudents(path) {
  const csStudents = [];
  const sweStudents = [];

  try {
    const data = fs.readFileSync(path, 'utf8');
    const students = data.split('\n').slice(1);
    const count = students.length - 1;

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
  } catch (error) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;

countStudents('./database.csv')