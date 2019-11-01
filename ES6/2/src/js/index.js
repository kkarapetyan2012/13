class Employee  {
	constructor (id, firstName, lastName, position, salary, workingHours) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.position = position;
		this.salary = salary;
		this.workingHours = workingHours;
	}
	
	get Id () {
		return this.setId();
	}

	setId () {
		return this.id;
	}

	get FirstName () {
		return ('FirstName: ' + this.setFirstName());
	}

	setFirstName () {
		return this.firstName;
	}

	get LastName () {
		return ('LastName: ' + this.setLastName());
	}

	setLastName () {
		return this.lastName;
	}

	get FullName () {
		return ('FullName: ' + this.setFullName());
	}

	setFullName () {
		return this.setFirstName() + ' ' + this.setLastName();
	}

	get Position () {
		return ('Position: ' + this.setPosition());
	}

	setPosition () {
		return this.position;
	}

	get Salary () {
		return ('Salary: ' + this.setSalary());
	}

	setSalary () {
		return this.salary;
	}

	get WorkingHours () {
		return ('Working Time: ' + this.setworkingHours());
	}

	setworkingHours () {
		return this.workingHours;
	}

	getAnnualSalary () {
		return this.salary * 12;
	}

	riseSalary (percent) {
		return (this.salary + ((percent/100) * this.salary))
	}
}

const employee = new Employee(10, 'Karen', 'Vardanyan', 'Developer', 120000, 80);
console.log(employee);
console.log(employee.Id);
console.log(employee.FirstName);
console.log(employee.LastName);
console.log(employee.FullName);
console.log(employee.Position);
console.log(employee.Salary);
console.log(employee.riseSalary(10));
console.log(employee.WorkingHours);