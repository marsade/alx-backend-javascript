const { readFile } = require('fs');

module.exports = function readDatabase(path) {
  return new Promise((resolve, reject) => {
    const res = {};
    readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
      } else {
        const students = data.split('\n').slice(1);
        for (const student of students) {
          if (student.trim() !== '') {
            const [firstname, , , course] = student.split(',');
            if (!res[course]) {
              res[course] = [];
            }
            res[course].push(firstname);
          }
        }
        resolve(res);
      }
    });
  });
}
