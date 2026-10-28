function createAccount(initialBalance) {
    let balance = initialBalance;
 return {
 deposit: function(amount) {balance = balance + amount; },
 withdraw: function(amount) {
 if (amount > balance) { throw new Error("Not enough balance");
                 }
balance = balance - amount;
        },
 getBalance: function() {
            return balance;
        }
    };
}

const account = createAccount(5000);

account.deposit(1000);
console.log(account.getBalance());

try {
    account.withdraw(7000);
} catch (error) {
    console.log(error.message);
}

account.withdraw(2000);
console.log(account.getBalance());