// Task 1: Code a Person class---------------------------------------------------
class person {
  constructor(name, age, energy) {
    this.name = name
    this.age = age
    this.energy = energy
  }
  sleep() {
    return (this.energy += 10);
  }
  doSomethingFun() {
    return (this.energy -= 10);
  }
}


// Task 2: Code a Worker class---------------------------------------------------
class worker extends person {
  constructor(name = "Tom", age = 20, energy = 100, xp = 0, hourlyWage = 10) {
    super(name, age, energy);
    this.xp = xp;
    this.hourlyWage = hourlyWage;
  }
  gToWork() {
    this.xp += 10;
  }
}





// Task 3: Code an intern object, run methods---------------------------------------------------
function intern() {
  const newIntern = new worker("Bob", 21, 110, 0, 10);
  newIntern.gToWork();
  return newIntern;
}







// Task 4: Code a manager object, methods
function manager() {
const newManager = new worker("Alice", 30, 120, 100, 30)
newManager.doSomethingFun();
return newManager;

}

console.log(intern());
console.log(manager());
