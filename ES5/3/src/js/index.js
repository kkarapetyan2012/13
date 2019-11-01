function Account(id, name, balance) {
	this.id = id;
	this.name = name;
	this.balance = balance;

	Account.prototype.getId = () => {
		return this.id;
	}

	Account.prototype.setId = (id) => {
		return this.id = id;
	}

	Account.prototype.getName = () => {
		return this.name;
	}

	Account.prototype.setName = (name) => {
		return this.name = name
	}

	Account.prototype.getBalance = () => {
		return this.balance;
	}

	// methods credit
	Account.prototype.credit = (amount) => {
		const updatedBalance = this.balance + amount;
		return updatedBalance;
	}

	// methods debit
	Account.prototype.debit = (amount) => {
		if(amount < this.balance) {
			return this.balance - amount;
		} else {
			return 'Amount exceeded balance';
		}
	}

	// methods transferTo
	Account.prototype.transferTo = (anotherAccount = {}, amount) => {
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
console.log(account.getId());
console.log(account.getName());
console.log(account.getBalance());
console.log(account.credit(117000));
console.log(account.debit(117000));
console.log(account.transferTo(117000));