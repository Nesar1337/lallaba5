class User {
	#name;
  
	get name() {
	  return this.#name;
	}
  
	set name(name) {
	  this.#name = name;
	}
  
	greet() {
	  console.log(`Hello, my name is ${this.name}.`);
	}
  }
  
  class Employee extends User {
	#position;
	#salary;
  
	get position() {
	  return this.#position;
	}
  
	set position(position) {
	  this.#position = position;
	}
  
	get salary() {
	  return this.#salary;
	}
  
	set salary(salary) {
	  this.#salary = salary;
	}
  
	printInfo() {
	  console.log(`Name: ${this.name}`);
	  console.log(`Position: ${this.position}`);
	  console.log(`Salary: ${this.salary}`);
	}
  
	giveRaise(amount) {
	  this.#salary += amount;
	  console.log(`${this.name}'s salary has been increased by $${amount}.`);
	}
  }
  
  class Programmer extends Employee {
	#programmingLanguages;
  
	get programmingLanguages() {
	  return this.#programmingLanguages;
	}
  
	set programmingLanguages(languages) {
	  this.#programmingLanguages = languages;
	}
  
	printInfo() {
	  super.printInfo();
	  console.log(`Programming Languages: ${this.programmingLanguages.join(', ')}`);
	}
  
	learnNewLanguage(language) {
	  this.#programmingLanguages.push(language);
	  console.log(`${this.name} has learned a new programming language: ${language}.`);
	}
  }
  
  class Designer extends Employee {
	#skills;
  
	get skills() {
	  return this.#skills;
	}
  
	set skills(skills) {
	  this.#skills = skills;
	}
  
	printInfo() {
	  super.printInfo();
	  console.log(`Design Skills: ${this.skills.join(', ')}`);
	}
  
	improveSkill(skill) {
	  this.#skills.push(skill);
	  console.log(`${this.name} has improved their ${skill} design skill.`);
	}
  }
  
  // Пример использования
  const programmer = new Programmer();
  programmer.name = 'John Doe';
  programmer.position = 'Senior Software Engineer';
  programmer.salary = 80000;
  programmer.programmingLanguages = ['JavaScript', 'Python', 'Java'];
  programmer.printInfo();
  programmer.learnNewLanguage('Go');
  
  const designer = new Designer();
  designer.name = 'Jane Doe';
  designer.position = 'UI/UX Designer';
  designer.salary = 60000;
  designer.skills = ['Photoshop', 'Figma', 'Sketch'];
  designer.printInfo();
  designer.improveSkill('Figma');