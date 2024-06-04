class Student extends User {
	setName(name) {
		if (name.length > 18) {
			this.name = name;
		} else {
			throw new Error('student name error');
		}
	}
}
let student = new Student;

student.setName('john');