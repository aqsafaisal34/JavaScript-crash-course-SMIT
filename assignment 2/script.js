// Task1

// let func1 =  (arg1) =>{
//     return (arg2) => {
//       console.log(arg1 + arg2)
//     }
// }

// let print = func1(3);
// print(4);  // output 7
// print (10); // output 13

//Task 2
// let arrFruits = ["Mango","Apple", "Banana", "Grapes"];

// let findArr = (searchArr) => {
//     for(let i = 0; i>arrFruits.length; i++){
//     if(arrFruits[i] === searchArr){
//         console.log("True")
//     }else {
//         console.log("false")
//     }
//   }
//   return findArr("Mango")
// }

//Task3
// let addNewPara = (text) => {
//     const newPara = document.createElement('p');
//     newPara.textContent = text;
//     document.body.appendChild(newPara);
// }

// addNewPara("This is the new paragraph we add at the bottom of HTML document");

//Task4
// let addNewListItem = (text) =>{
//     const newListItem = document.createElement('li');
//     newListItem.textContent = text;
//    const unorderedList = document.querySelector("ul");
//    unorderedList.appendChild(newListItem);
// }

// addNewListItem("Mango");
// addNewListItem("Banana");

//Task 5
// let changebgColor = (color) => {
//     document.getElementById("para1").style.backgroundColor = color
// }

// changebgColor("red");

//Task6
// let saveObject = (key, object) => {
//     window.localStorage.setItem(key, JSON.stringify(object));
// }

// const myObject = {name: 'Aqsa', age:22 };
// saveObject('myKey', myObject);

// const getObject = JSON.parse(localStorage.getItem('myKey'));
// console.log(getObject);

//Task 7

// let retrieveObj = (key) => {
//    const storedVal =  JSON.parse(localStorage.getItem(key));
//    if(storedVal){
//     return storedVal
//    } else{
//     return null
//    }
// }
// const obj = retrieveObj('myKey')
// console.log(obj);

//Task 8

// let saveObject = (myObj) => {
//     localStorage.setItem('key' , JSON.stringify(myObj));

//     return JSON.parse(localStorage.getItem('key'))
// }

// const createObj = {name:'Ahmed', age:23};
// const getObj = saveObject(createObj);
// console.log(getObj);
