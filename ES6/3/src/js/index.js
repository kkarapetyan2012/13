class Account  {
	constructor (id, name, balance) {
		this.id = id;
		this.name = name;
		this.balance = balance;
	}

	get Id () {
		return this.id;
	}

	setId (id) {
		return this.id = id;
	}

	get Name () {
		return this.name;
	}

	setName (name) {
		return this.name = name;
	}

	get Balance () {
		return this.balance;
	}

	// methods credit
	credit (amount) {
		const updatedBalance = this.balance + amount;
		return updatedBalance;
	}

	// methods debit
	debit (amount) {
		if(amount < this.balance) {
			return this.balance - amount;
		} else {
			return 'Amount exceeded balance';
		}
	}

	// methods transferTo
	transferTo (anotherAccount = {}, amount) {
		if(amount < this.balance) {
			const updatedBalance = this.balance - amount;
			anotherAccount.balance += updatedBalance;
			return updatedBalance;
		} else {
			return 'Amount exceeded balance';
		}
	}

}

const account = new Account(15, 'Max', 175000);
console.log(account.Id);
console.log(account.Name);
console.log(account.Balance);
console.log(account.credit(117000));
console.log(account.debit(117000));
console.log(account.transferTo(117000));