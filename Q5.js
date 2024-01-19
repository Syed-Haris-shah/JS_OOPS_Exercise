class Shape{
    constructor(){

    }

    calArea(){
        console.log('Shape is not define')
    }
}

class Circle extends Shape{
    constructor(radius){
        super()
        this.radius = radius
    }

    calArea(){
        let PI = 3.14;
        console.log(`Area of Circle is ${PI*(this.radius*this.radius)}`)
    }
}

class Triangle extends Shape{
    constructor(base,height){
        super()
        this.base = base
        this.height = height
    }

    calArea(){
        console.log(`Area of Triangle is ${(this.base*this.height)/2}`)
    }
}

let s = new Shape();
let s1 = new Circle(3);
let s2 = new Triangle(10,6);