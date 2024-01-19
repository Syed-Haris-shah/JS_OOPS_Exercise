class Animal{
    constructor(species,sound){
        this.species = species
        this.sound = sound
    }

    animalSound(){
        console.log(`Name is ${this.species} sounds ${this.sound}`)
    }
}

class Dog extends Animal{
    constructor(species,sound,color){
        super(species,sound)
        this.color = color
    }

    animalSound(){
        console.log(`Name is ${this.species} sounds ${this.sound} and color is ${this.color}`)
    }
}

let dog = new Dog('Bulldog','bark','black')