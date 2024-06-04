class User {
	#name;
	#surn;
	
	setName(name) {
		this.#name = name;
	}
	getName() {
		return this.#name;
	}
	
	setSurn(surn) {
		this.#surn = surn;
	}
	getSurn() {
		return this.#surn;
	}
}
class Employee {
	setAge(age) {
		if (age <= 120) {
			if (age >= 0) {
				this.age = age;
			} else {
				throw new Error('need age more 0');
			}
		} else {
			throw new Error('need age less 120');
		}
	}

	getFull() {
		return this.name + ' ' + this.surn;
	}
}
