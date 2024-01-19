class BankAccount2{
    constructor(accountNumber, accountHolderName, balance) {
      this.accountNumber = accountNumber;
      this.accountHolderName = accountHolderName;
      this.balance = balance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited ${amount} ropy. New balance: ${this.balance} ropy.`);
      } else {
        console.log("Zero balance please recharge");
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawn ${amount} ropy. New balance: ${this.balance} ropy.`);
      } else {
        console.log("Invalid withdrawal amount or insufficient balance.");
      }
    }
  
    transfer(transferAccount, amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        transferAccount.balance += amount;
        console.log(`Transferred ${amount} ropy to ${transferAccount.accountHolderName}. Your new balance: ${this.balance} ropy.`);
      } else {
        console.log("Invalid transfer amount or insufficient balance.");
      }
    }
  }
  
  let acc1 = new BankAccount2(112233, "Syed Haris Shah", 5000);
  let acc2 = new BankAccount2(5554422, "Hamza Khan", 2000);