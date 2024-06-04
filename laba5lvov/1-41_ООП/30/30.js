class Student extends User {
	setYear(year) {
		this.year = year;
	}
	getYear() {
		return this.year;
	}
}

let student = new Student;

student.setName('john');
student.setYear(1);

let name = student.getName();
let year = student.getYear();

console.log(name, year);