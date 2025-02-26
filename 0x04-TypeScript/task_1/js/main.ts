interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
}

interface Directors extends Teacher{
	numberOfReports: number;
}

interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}
function printTeacher(firstName: string, lastName: string): string {
	return `Teacher: ${firstName.charAt(0)} ${lastName}`;
}
interface StudentClassInterface {
	workOnHomework(): string;
	displayName(): string;
}
class StudentClass implements StudentClassInterface {
	firstName: string;
	lastName: string;
	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
            this.lastName = lastName;
	}
	workOnHomework(): string { return 'Currently working' };

	displayName(): string { return this.firstName };
}
interface StudentConstructor {
	new(firstName: string, lastName: string): StudentClassInterface;
}