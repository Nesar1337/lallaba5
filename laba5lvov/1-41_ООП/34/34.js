class User {
	setName(name) {
		this.name = name;
	}
	getName() {
		return this.#capeFirst(this.name);
	}
	
	#capeFirst(str) {
		return str[0].toUpperCase() + str.slice(1);
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
}
