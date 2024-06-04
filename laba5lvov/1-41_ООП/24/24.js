
class Employee {
	#name;
	
	constructor(name) {
		this.#name = name;
	}
	getName() {
		return this.#name;
	}
}

let users = [
	new User('john'),
	new User('eric'),
	new User('kyle'),
];