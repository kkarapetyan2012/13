const Employee = (id, firstName, lastName, position, salary, workingHours) => {
	this.id = id;
	this.firstName = firstName;
	this.lastName = lastName;
	this.position = position;
	this.salary = salary;
	this.workingHours = workingHours;

	getId = () => {
		return this.id;
	}

	setId = (id) => {
		return this.id = id;
	}

	getFirstName = () => {
		return this.firstName;
	}

	setFirstName = (firstName) => {
		return this.firstName = firstName;
	}

	getLastName = () => {
		return this.lastName;
	}

	setLastName = (lastName) => {
		return this.lastName = lastName;
	}

	getFullName = () => {
		return `(${this.firstName} + ' ' + ${this.lastName})`;
	}

	setFullName = (fullName) => {
		return `(${this.firstName} + ' ' + ${this.lastName})`;
	}

	getPosition = () => {
		return this.position;
	}

	setPosition = (position) => {
		return this.position = position;
	}

	getSalary = () => {
		return this.salary;
	}

	setSalary = (salary) => {
		return this.salary = salary;
	}

	getraiseSalary = () => {
		return this.salary;
	}

	setraiseSalary = (percent) => {
		return `(${this.salary} * 12)`;
	}

	getworkingHours = () => {
		return this.workingHours;
	}

	setworkingHours = (workingHours) => {
		return this.workingHours;
	}
}

console.log(Employee(10, 'Karen', 'Vardanyan', 'Developer', 205000, 42))