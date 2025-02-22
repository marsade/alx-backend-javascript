interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}
const student1: Student = {
	firstName: "John",
      lastName: "Doe",
      age: 18,
      location: "New York"
}
const student2: Student = {
	firstName: "Jane",
      lastName: "Smith",
      age: 20,
      location: "Los Angeles"
};
const studentsList: Student[] = [student1, student2];

function createTable(): void {
	const table = document.createElement('table');
	table.border = '1';
	const headerRow = table.insertRow();
	headerRow.insertCell().textContent = 'First Name';
	headerRow.insertCell().textContent = 'Location';

	studentsList.forEach((student) => {
		const row = table.insertRow();
		row.insertCell().textContent = student.lastName;
		row.insertCell().textContent = student.location;
	});
	document.body.appendChild(table);
}
createTable();