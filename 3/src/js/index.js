const Account = (credit, debit, anotherAccount, amount) => {
	this.credit = credit;
	this.debit = debit;
	this.anotherAccount = anotherAccount;
	this.amount = amount;

	getCredit = () => {
		return this.credit;
	}

	setCredit = (credit) => {
		return this.credit = credit;
	}

	getUpdateBalance = () => {
		return `${this.credit}`;
	}

	setUpdateBalance = (updateBalance) => {
		return `${this.credit}`;
	}

	getDebit = () => {
		return this.debit;
	}

	setDebit = (debit) => {
		return this.debit = debit;
	}

	getAnotherAccount = () => {
		return this.anotherAccount;
	}

	setAnotherAccount = (anotherAccount) => {
		return this.anotherAccount = anotherAccount;
	}

	getAmount = () => {
		return this.amount;
	}

	setAmount = (amount) => {
		return this.amount;
	}

	getTransferTo = () => {
		return this.transferTo;
	}

	setTransferTo = (anotherAccount, amount) => {
		return `(${anotherAccount} ${amount})`;
	}

}

console.log(Account())