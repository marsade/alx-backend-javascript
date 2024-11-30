const fs = require('fs/promises');

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const students = data.split('\n').slice(1);
    const count = students.length - 1;
    const csStudents = students.filter(student => student.includes('CS'));
    const sweStudents = students.filter(student => student.includes('SWE'));

    console.log(`Number of students: ${count}`);
    console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
    console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
