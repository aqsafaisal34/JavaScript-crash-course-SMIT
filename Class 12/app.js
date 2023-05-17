// Arrow Functions
// const add = (x, y) => {
//   return x + y;
// }
// const result = add(5, 6);
// console.log(result);

// Default Parameters
// const add = (x = 10, y = 20) => {
//   return x + y;
// }
// const result = add(2,10);
// console.log(result);

// shorter way of oneline arrow function
// const add = (x, y) =>  x + y;

// const result = add(5, 6);
// console.log(result);

//Rest Parameters
// const restPara = (x,y, ...z) => {
//   console.log(x,y,z)
// }
// restPara(3,4,5,5,6,7)

// const obj = {
//   name: "Saylani",
//   print: function () {
//     setTimeout(function(){
//       console.log(this.name);
//     },1000);
//   },
// };
// obj.print();

// const obj = {
//     name: "Saylani",
//     print: function () {
//       setTimeout(()=>{
//         console.log(this.name);
//       },1000);
//     },
//   };
//   obj.print();

// short Syntax for Objects

// const firstName = "Aqsa";
// const lastName = "Faisal";

// let obj = {
//   // firstName: firstName,
//   // lastName:lastName
//   firstName,
//   lastName
// }
// console.log(obj.firstName);

//  Destructuring
// const obj = {
//   firstName: "Aqsa",
//   lastName: "Faisal",
//   printName () {
//     console.log("Aqsa Faisal");
//   }
// };

// const {firstName, lastName} = obj;

// console.log(firstName);

// const arr = ["Aqsa", "Faisal", "Saylani"];

// const [firstName,lastName,institute] = arr;

// console.log(firstName);
// console.log(institute);

// Spread Operator
// const arr = ["Aqsa", "Faisal", "Saylani"];
// const newArr = ["laiba", ...arr, "Ali"];
// console.log(arr);
// console.log(newArr);

// let obj = {
//    firstName: "Aqsa",
//    lastName: "Faisal",
// }
// let newObj = {...obj, hobby: "Video Games"};
// console.log(obj, newObj);

// OOPs (Object Oriented Programming)
// Classes

// const obj = {
//   name: "LED TV",
//   price: 12000
// };

// const obj2 = {
//   title: "Samsung Galaxy",
//   amount: 140000
// }

// const products = [obj, obj2];

// products.forEach(p => console.log(p.name));

// class Product {
//   constructor (title, price) {
//     this.title = title;
//     this.price = price;
//   }
// }

// const product1 = new Product("LED TV", 12000);
// const product2 = new Product("Samsung Galaxy", 140000);
// const product3 = new Product ("Dawlance", 20,000);
// const products = [product1, product2,product3];

// products.forEach(p => console.log(p.title,p.price));













