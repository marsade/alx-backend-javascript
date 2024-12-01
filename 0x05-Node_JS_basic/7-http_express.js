const express = require('express');

const { readFile } = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    try {
      readFile(path, 'utf8', (err, data) => {
        if (err) {
          reject(Error('Cannot load the database'));
        } else {
          let res = '';
          const students = data.split('\n').slice(1);
          const count = students.length - 1;
          const csStudents = students.filter((student) => student.includes('CS')).map(
            (student) => student.split(',')[0],
          );
          const sweStudents = students.filter((student) => student.includes('SWE')).map(
            (student) => student.split(',')[0],
          );

          res += `Number of students: ${count}\n`;
          res += `Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}\n`;
          res += `Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`;
          resolve(res);
        }
      });
    } catch (error) {
      reject(Error('Cannot load the database'));
    }
  });
}
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2].toString()).then((output) => {
    res.send(['This is the list of our students', output].join('\n'));
  }).catch(() => {
    res.status(404).send('This is the list of our students\nCannot load the database');
  });
});

app.listen(1245, () => {
});

module.exports = app;
