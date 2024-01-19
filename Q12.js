// class University {
//     constructor(name, department) {
//         this.name = name;
//         this.department = department;
//         // department = [];

//     }

//     addDepartment() {
//         this.department = [];
//         let addDepartment = prompt('Enter department name: ')
//         this.department.push(addDepartment);
//         console.log(`${addDepartment} department is added`)
//     }

//     removeDepartment(){
//         let remove = this.department.pop()
//         console.log(`${remove} department is removed`);
//     }
// }

// let dpt = new University('Abasyn University');

class University {
    constructor(name) {
      this.name = name;
      this.departments = [];
    }
  
    addDepartment(department) {
      this.departments.push(department);
      console.log(`Department "${department}" added successfully.`);
    }
  
    removeDepartment(department) {
      const index = this.departments.indexOf(department);
      if (index !== -1) {
        this.departments.splice(index, 1);
        console.log(`Department "${department}" removed successfully.`);
      } else {
        console.log(`Department "${department}" not found.`);
      }
    }
  
    displayDepartments() {
      if (this.departments.length === 0) {
        console.log("No departments found.");
      } else {
        console.log(`Departments at ${this.name}:`);
        this.departments.forEach((department, index) => {
          console.log(`${index + 1}. ${department}`);
        });
      }
    }
  }
  const myUniversity = new University("Abasyn University");
