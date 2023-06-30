// Super Ninja

// (from previous ninja assignment)
class Ninja {
    constructor(name, health=0, speed=3, strength=3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {
        console.log(`Name: ${ this.name }`)
    }
    showStats() {
        console.log(`Name: ${this.name}`);
        console.log(`Health: ${this.health}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`Strength: ${this.strength}`);
    }
    drinkSake() {
        this.health += 10;
    }
}


// Sensei Class
// Extend the Ninja class and create the Sensei class. A Sensei should have 200 Health, 10 speed, and 10 strength by default. In addition, a Sensei should have a new attribute called wisdom, and the default should be 10. Finally, add the speakWisdom() method. speakWisdom() should call the drinkSake() method from the Ninja class, before console.logging a wise message.

class Sensei extends Ninja {
    constructor(name) {
        super(name, 200, 10, 10);
        this.wisdom = 10;
    }
    speakWisdom() {
        super.drinkSake();
        console.log("Even a sewer rat can kick your butt!");
    }
}

// // example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();

// // -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// // -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"



