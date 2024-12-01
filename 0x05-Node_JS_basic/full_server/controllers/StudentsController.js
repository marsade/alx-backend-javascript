const { readDatabase } = require('./utils');
module.exports = class StudentsController {
  static getAllStudents(request, response) {
    response.send('This is the list of our students\n');
    readDatabase(process.argv[2].toString()).then((res) => {
      response.status(200);
      Object.entries(res).forEach(([course, students]) => {
        response.send(`Number of students in ${course}: ${students.length}. List: ${students.join(', ')}\n`);
      });
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    })
  }

  static getStudentByMajor(request, response) {
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