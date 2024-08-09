// // Task 1
var dairy = [
  "cheese",
  "sour cream",
  "milk",
  "yogurt",
  "ice cream",
  "milkshake",
];

function logDairy() {
  for (const items of dairy) {
    console.log(items);
  }
}
logDairy();
// // Task 2

const animal = {
  canJump: true,
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
  const birdKeys = Object.keys(bird);
  for (const key of birdKeys){console.log(`${key}: ${bird[key]}`)}
}
birdCan();

// Task 3

function animalCan() {
    for (const key in bird) {
        console.log(`${key}: ${bird[key]}`);
    }
}
animalCan();    