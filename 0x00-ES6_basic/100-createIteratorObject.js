export default function createIteratorObject(report) {
  let repoArray = [];

  const departments = Object.keys(report.allEmployees);
  departments.forEach(department => {
    repoArray = [...repoArray, ...report.allEmployees[department]];
  });

  return repoArray
}
