/* eslint-disable */
export default function createReportObject(employeesList) {
  const reportObject = {
    allEmployees: {...employeesList},
    getNumberOfDepartments: function() {
      return Object.keys(this.allEmployees).length;
    }
  };

  return reportObject;
}
