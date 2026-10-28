class BankAccount {
  constructor(owner, balance = 0) {
    if (balance < 0) {
      throw new Error("Initial balance cannot be negative");
    }

    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    if (!Number.isFinite(amount) || amount <= 0) {
      throw new Error("Deposit must be a positive number");
    }

    this.balance += amount;
    return this.balance;
  }

  withdraw(amount) {
    if (!Number.isFinite(amount) || amount <= 0) {
      throw new Error("Withdrawal must be a positive number");
    }

    if (amount > this.balance) {
      throw new Error("Insufficient balance");
    }

    this.balance -= amount;
    return this.balance;
  }

  getBalance() {
    return this.balance;
  }
}

class SavingsAccount extends BankAccount {
  addInterest(rate) {
    if (!Number.isFinite(rate) || rate < 0) {
      throw new Error("Interest rate must be non-negative");
    }

    // Rate is a percentage: 5 means 5%.
    const interest = this.balance * rate / 100;
    this.balance += interest;

    return interest;
  }
}


try {
  const account = new BankAccount("Ali", 10000);

  account.deposit(2000);
  console.log("Balance after deposit:", account.getBalance());

  account.withdraw(1500);
  console.log("Balance after withdrawal:", account.getBalance());

  const savings = new SavingsAccount("Sara", 20000);

  const interest = savings.addInterest(5);

  console.log("Interest added:", interest);
  console.log("Savings balance:", savings.getBalance());

  
} catch (error) {
  console.error("Bank account error:", error.message);
}
