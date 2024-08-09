function greet() {
    console.log(this.name);
}
var person = { name: 'Charlie' };
greet.call(person);