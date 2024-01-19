class BankAccount{
    constructor(accountNumber,Balance){

        this.accountNumber = accountNumber
        this.Balance = Balance

    }

    deposite(newBalance){
        if (newBalance > 0){
            this.Balance += newBalance
            console.log(`Your Balance is ${this.Balance}`)
        }else{
            console.log(`zero balance please recharge`)
        }
    }

    withDraw(newBalance){
        if (newBalance > 0 && newBalance <= this.Balance){
            this.Balance -= newBalance
            console.log(`withDraw ${newBalance} and new balance is ${this.Balance}`)
        }else {
            console.log('Invalid withdrawal amount or insufficient funds.');
          }
    }
}

let b1 = new BankAccount('abc123',1000)