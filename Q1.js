class Person{
    constructor(name,age,country){

        this.name = name
        this.age = age
        this.country = country

    }

    personDetails(){
        console.log(`${name} his age is${age} and he lives in ${counrty}`)
    }
}

let person1 = new Person('Asif Shah',28,'Pakistan')

let person2 = new Person('jhon',30,'USA')