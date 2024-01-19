class Rectangle{
    constructor(width,height){

        this.width = width
        this.height = height

    }

    area_Of_Rectangle(){
        if (this.width <= 0){
            console.log(`The variable width should be positive`)
        }

        else if(this.height <= 0){
                console.log(`The variable height should be positive`)
        
        }else{
            console.log(`Area of Rectangle is ${this.width*this.height}`)
        }
    }

    Parameter_Of_Rectangle(){
        if (this.width <= 0){
            console.log(`The variable width should be positive`)
        }

        else if(this.height <= 0){
                console.log(`The variable height should be positive`)
        
        }else{
            console.log(`Area of Rectangle is 
            ${2*(this.width+this.height)}`)
        }
    }
}

let rec = new Rectangle(5,10)
// let para = new Rectangle()