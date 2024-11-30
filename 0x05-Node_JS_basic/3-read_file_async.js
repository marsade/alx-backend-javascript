const { readFile } = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    try {
      readFile(path, 'utf8', (err, data) => {
        if (err) {
          reject(Error('Cannot load the database'));
        } else {
          const students = data.split('\n').slice(1);
          const count = students.length - 1;
          const csStudents = students.filter((student) => student.includes('CS')).map(
            (student) => student.split(',')[0],
          );
          const sweStudents = students.filter((student) => student.includes('SWE')).map(
            (student) => student.split(',')[0],
          );

          console.log(`Number of students: ${count}`);
          console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
          console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);

          resolve(data);
        }
      });
    } catch (error) {
      reject(Error('Cannot load the database'));
    }
  });
}

module.exports = countStudents;
