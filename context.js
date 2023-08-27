function eat() {
  console.log(`${this.name} eats fish food`);
}

class Fish {
  constructor(name) {
    this.name = name;
  }

  swim() {
    console.log(`${this.name} swimming in the water`);
  }
}

const nemo = new Fish('Nemo');

/********************************* Scenario 1 *********************************/
      // will print undefined eats fish food
 eat();


/********************************* Scenario 2 *********************************/
      // will print "Nemo eats fish food"
 nemo.eat = eat;
 nemo.eat();


/********************************* Scenario 3 *********************************/
      // will print undefined eats fish food
 nemo.eat = eat;
 eat();


/********************************* Scenario 4 *********************************/
      // will print "Nemo swimming in the water"
 nemo.swim();


/********************************* Scenario 5 *********************************/
      // will print "error cannot read properties of undefined"
 const swim = nemo.swim;
 swim();
