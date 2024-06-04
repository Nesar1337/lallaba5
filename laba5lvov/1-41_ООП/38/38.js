class User {
	#name;
  
	get name() {
	  return this.#name;
	}
  
	set name(name) {
	  this.#name = name;
	}
  }
  
  class Employee extends User {
	set name(name) {
	  if (name.length > 0) {
		super.name = name;
	  }
	}
  }