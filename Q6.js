class Employee{
    constructor(name,salary){
        this.name = name
        this.salary = salary
    }

    annualSalary(){
        console.log(`Mounthly salary is ${this.salary} Euro\nAnnual Salary is ${this.salary*12} Euro`)
    }
}

class Manager extends Employee{
    constructor(name,salary,department){
        super(name,salary)
        this.department = department
    }

    annualSalary(){
        const Bonus = 0.1;
        console.log(`Monthly salary is ${this.salary} Euro\nAnnual salary is ${this.salary*12} Euro\nBonuses is ${this.salary * Bonus}`)
    }
}

emp = new Employee('Haris',4000)
emp2 = new Manager('Syed Haris Shah',3500,'Computer Science')