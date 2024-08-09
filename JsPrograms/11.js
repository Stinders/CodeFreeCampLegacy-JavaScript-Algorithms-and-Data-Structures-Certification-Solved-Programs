
class Animal {

}

class Cat extends Animal {
  constructor() {
    super();
    this.noise = "meow";
  }
}

var result = new Animal();
console.log(result.noise);
