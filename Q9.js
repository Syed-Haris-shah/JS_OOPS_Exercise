// class Bank{
//     constructor(names,branches){
//         this.names = names;
//         this.branches = branches;
//     }

//     addBranch(){
//         console.log(`${branch} is added`)
//     }


// }

// let branch1 = new Bank('HBL')

class Bank {
    constructor(bankName) {
      this.bankName = bankName;
      this.branches = [];
    }
  
    addBranch(branchName) {
      if (!this.branches.includes(branchName)) {
        this.branches.push(branchName);
        console.log(`Branch "${branchName}" added successfully.`);
      } else {
        console.log(`Branch "${branchName}" already exists.`);
      }
    }
  
    removeBranch(branchName) {
      const index = this.branches.indexOf(branchName);
      if (index !== -1) {
        this.branches.splice(index, 1);
        console.log(`Branch "${branchName}" removed successfully.`);
      } else {
        console.log(`Branch "${branchName}" does not exist.`);
      }
    }
  
    displayBranches() {
      if (this.branches.length === 0) {
        console.log('No branches available.');
      } else {
        console.log(`Branches of ${this.bankName}:`);
        this.branches.forEach((branch, index) => {
          console.log(`${index + 1}. ${branch}`);
        });
      }
    }
  }
  
  const myBank = new Bank('MyBank');

  