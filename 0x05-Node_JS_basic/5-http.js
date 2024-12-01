const http = require('http');
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

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');

  if (request.method === 'GET' && request.url === '/') {
    response.write('Hello Holberton School!');
    response.end();
  }
  if (request.method === 'GET' && request.url === '/students') {
    response.write('This is the list of our students\n');
    countStudents(process.argv[2].toString()).then((res) => {
      response.end(res);
    }).catch(() => {
      response.statusCode = 404;
      response.end('Cannot load the database');
    });
  }
});

app.listen(port, hostname, () => {
});

module.exports = app;
