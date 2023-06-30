// Ninja

// Example Outputs
// const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// ninja1.showStats();

// Create a Ninja class
class Ninja {
    // add an attribute: name
    // add an attribute: health
    // add a attribute: speed - give a default value of 3
    // add a attribute: strength - give a default value of 3
    constructor(name) {
        this.name = name;
        this.health = 0;
        this.speed = 3;
        this.strength = 3;
    }
    // add a method: sayName() - This should log that Ninja's name to the console
    sayName() {
        console.log(`Name: ${ this.name }`)
    }
    // add a method: showStats() - This should show the Ninja's name, strength, speed, and health.
    showStats() {
        console.log(`Name: ${this.name}`);
        console.log(`Health: ${this.health}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`Strength: ${this.strength}`);
    }
    // add a method: drinkSake() - This should add +10 Health to the Ninja
    drinkSake() {
        this.health += 10
    }
}


const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();