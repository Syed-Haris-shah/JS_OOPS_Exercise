class Vehicle{
    constructor(make,model,year){

        this.make = make
        this.model = model
        this.year = year

    }

    carDetails(){
        console.log(`Make: ${this.make}\nModel: ${this.model}\nyear ${this.year}`)
    }
}

class Car extends Vehicle{
    constructor(make,model,year,doors,engine,color){
    super(make,model,year)
        this.doors = doors
        this.engine = engine
        this.color = color
    }
    carDetails(){
        console.log(`Make: ${this.make}\nModel: ${this.model}\nyear: ${this.year}\nDoors: ${this.doors}\nEngine: ${this.engine}\ncolor: ${this.color}`)
    }
}

let car1 = new Vehicle('Honda','Civic','2015')

let car2 = new Car('Toyota','Aqua','2011','4 doors','Hybrid','Gray')