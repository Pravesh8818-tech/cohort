// Create an inheritance without using extends keyword.
// Like you have a class person and you want to access persons method in the child class

class Person {
  constructor() {
    this.fname = "Pravesh";
    this.lname = "Yadav";
  }
  getFullName() {
    return this.fname + " " + this.lname;
  }
}

class Person2 {}
Person2.prototype.__proto__ = Person.prototype; //Person.prototype;
const p2 = new Person();
const p1 = new Person2();
p1.fname = "Hitesh";
p1.lname = "Ch";
// p1.__proto__ = p2.__proto__;
console.log(p1.getFullName());
console.log(p2.getFullName());
