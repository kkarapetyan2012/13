// class Employee  {
// 	constructor (id, firstName, lastName, position, salary, m, workingHours) {
// 		this.id = id;
// 		this.firstName = firstName;
// 		this.lastName = lastName;
// 		this.position = position;
// 		this.salary = salary;
// 		this.m = m;
// 		this.workingHours = workingHours;
// 	}
	
// 	get Id () {
// 		return this.setId();
// 	}

// 	setId () {
// 		return this.id;
// 	}

// 	get FirstName () {
// 		return ('FirstName: ' + this.setFirstName());
// 	}

// 	setFirstName () {
// 		return this.firstName;
// 	}

// 	get LastName () {
// 		return ('LastName: ' + this.setLastName());
// 	}

// 	setLastName () {
// 		return this.lastName;
// 	}

// 	get FullName () {
// 		return ('FullName: ' + this.setFullName());
// 	}

// 	setFullName () {
// 		return this.setFirstName() + ' ' + this.setLastName();
// 	}

// 	get Position () {
// 		return ('Position: ' + this.setPosition());
// 	}

// 	setPosition () {
// 		return this.position;
// 	}

// 	get Salary () {
// 		return ('Salary: ' + this.setSalary());
// 	}

// 	setSalary () {
// 		return this.salary;
// 	}

// 	get M () {
// 		return 'Mount: ' + this.setM();
// 	}

// 	setM () {
// 		return this.m;
// 	}

// 	get RaiseSalary () {
// 		return ('Total: ' + this.setraiseSalary());
// 	}

// 	setraiseSalary () {
// 		return this.salary * this.m;
// 	}

// 	get WorkingHours () {
// 		return ('WorkingTime: ' + this.setworkingHours());
// 	}

// 	setworkingHours () {
// 		return this.workingHours;
// 	}
// }

// const employee = new Employee(10, 'Karen', 'Vardanyan', 'Developer', 120000, 5, 17, 80);
// console.log(employee);
// console.log(employee.Id);
// console.log(employee.FirstName);
// console.log(employee.LastName);
// console.log(employee.FullName);
// console.log(employee.Position);
// console.log(employee.M);
// console.log(employee.Salary);
// console.log(employee.RaiseSalary);
// console.log(employee.WorkingHours);




function Employee (id, firstName, lastName, position, salary, workingHours) {
	this.id = id;
	this.firstName = firstName;
	this.lastName = lastName;
	this.position = position;
	this.salary = salary;
	this.workingHours = workingHours;

	Employee.prototype.ID = () => {
		return this.id;
	}

	Employee.prototype.getFirstName = () => {
		return this.firstName;
	}

	Employee.prototype.setFirstName = (firstName) => {
		return this.firstName = firstName;
	}

	Employee.prototype.getLastName = () => {
		return this.lastName;
	}

	Employee.prototype.setLastName = (lastName) => {
		return this.lastName = lastName;
	}

	Employee.prototype.getFullName = () => {
		return `${this.firstName} ${this.lastName}`;
	}

	Employee.prototype.getPosition = () => {
		return this.position;
	}

	Employee.prototype.setPosition = (position) => {
		return this.position = position;
	}

	Employee.prototype.getSalary = () => {
		return this.salary;
	}

	Employee.prototype.setSalary = (salary) => {
		return this.salary = salary;
	}

	Employee.prototype.getWorkingHours = () => {
		return this.workingHours;
	}

	Employee.prototype.setWorkingHours = (workingHours) => {
		return this.workingHours = workingHours;
	}

	Employee.prototype.getAnnualSalary = () => {
		return this.salary * 12;
	}

	Employee.prototype.riseSalary = (percent) => {
		return (this.salary + ((percent/100) * this.salary))
	}

}

const employee = new Employee(10, 'Karen', 'Vardanyan', 'Developer', 120000, 80);
console.log(employee.ID());
console.log(employee.getFullName());
console.log(employee.getPosition());
console.log(employee.getSalary());
console.log(employee.getWorkingHours());
console.log(employee.getAnnualSalary());
console.log(employee.riseSalary(10));