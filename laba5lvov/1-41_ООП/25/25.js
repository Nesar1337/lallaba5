
class EmployeesCollection {
	#name;
	
	constructor(name) {
		this.#name = name;
	}
	getName() {
		return this.#name;
	}
}


class UsersCollection {
	#users;
	
	constructor() {
		this.#users = [];
	}
	add(user) {
		this.#users.push(user);
	}
	show() {
		for (let user of this.#users) {
			console.log(user.getName());
		}
	}
}




