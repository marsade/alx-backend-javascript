const readDatabase = require('../utils');
module.exports = class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2].toString()).then((res) => {
      let output = 'This is the list of students\n';
      Object.entries(res).forEach(([course, students]) => {
        output += `Number of students in ${course}: ${students.length}. List: ${students.join(', ')}\n`;
      });
      response.status(200).send(output.trim());
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    })
  }

  static getAllStudentsByMajor(request, response) {
    let major = request.params.major;
    readDatabase(process.argv[2].toString()).then((res) => {
      if (!(major in res)) {
        response.status(500).send('Major Parameters must be CS or SWE');
      }
      else {
        response.status(200).send(`List: ${res[major].join(', ')}`);
      }
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }
}