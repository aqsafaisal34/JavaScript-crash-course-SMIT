// class Product {
//     constructor (title, price) {
//       this.title = title;
//       this.price = price;
//     }
//   }
  
//   const product1 = new Product("LED TV", 12000);
//   const product2 = new Product("Samsung Galaxy", 140000);
//   const product3 = new Product ("Dawlance", 20,000);
//   const products = [product1, product2,product3];
  
//   products.forEach(p => console.log(p.title,p.price));
  
// class Student {
//     constructor (name,className,rollno){
//         this.name = name;
//         this.className = className;
//         this.rollno = rollno;
//     }
// }
// let student1 = new Student("Aqsa", "Bcom", 25);
// let student2 = new Student("Tasmia", "Bcom", 26);
// let student3 = new Student("Fatima", "Mbbs", 29);
// console.log(student1);
// console.log(student1 instanceof Student);// return true or false

// class Shape {
//     constructor (id, x, y) {
//         this.id = id
//         this.move(x, y)
//     }
//     move (x, y) {
//         this.x = x
//         this.y = y
//     }
// }
// const square = new Shape("Square", 10,10);
// const rectangle = new Shape("Rectangle", 5, 5);
// square.move(7, 8);
// rectangle.move(7, 8);
// console.log(square,rectangle);

const students = [];

class Student  {
  static data = "Hello World"
  constructor (fullName, rollNo, batch, subject) {
    this.fullName = fullName;
    this._rollNo = rollNo;
    this.batch = batch;
    this.subject = subject;
    this.attendance = [];
  }
  markAttendance(){
    this.attendance.push(new Date());
  }
}
// Inheritance
class Volunteer extends Student {
    constructor(fullName, rollNo, batch, subject){
        super(fullName, rollNo, batch, subject);
        this.canVolunteerIn = []
    } 
    addVolunteerSkill(skill){
        this.canVolunteerIn.push(skill);
    }
    static sayYourName (){
        console.log("Volunteer");
    }
}

const student1 = new Student("Hamza Iqbal", 1234, 1, "JavaScript" );
const student2 = new Volunteer("Ali Iqbal", 1235, 1, "JavaScript" );

student1.markAttendance();
student2.addVolunteerSkill("HTML");
student2.addVolunteerSkill("CSS");

students.push(student1);
students.push(student2);
console.log(students);
Volunteer.sayYourName(); // static method link directly to class


