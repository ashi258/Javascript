//ARRAY TUTORIAL
//...
//let arr = [1,2,3];
//let
// let arr = [12,13,14,15];
// console.log(arr[2ṇ]);

// let arr = [000, 111, 222, 333];
// console.log(arr);

// let arr = [3,4];
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// arr[3] = 4;
// arr[4] = 5;
// console.log(arr);

// let arr = new Array(4,3,21,1);
// console.log(arr);

//for adding element in an array (element is add or delete from last)
// let arr = [1,2,3,4,5];
// arr.push(6);
// arr.push(7);
// arr.push(8);
// console.log(arr);

// let arr = [2,5,8];
// arr.pop(8);
// console.log(arr);

//for deleting first element from  an array
// let arr = [1,2,3,4,5,6];
// arr.shift();
// console.log(arr);

//for adding first element from  an array
// let arr = [2,3,4,5];
// arr.unshift(1);
// console.log(arr);

//for measuring length
// let arr = [1,2,3,4,5,6,7,8,9];
// console.log(arr.length);

//delete element from 3rd element to 8 element using splice
//  let arr = [1,2,3,4,5,6,7,8,9];
//  arr.splice(3,5);
//  console.log(arr);

// for reverse
// let arr = [1,2,3,4,5,6,7,8,9];
// arr.reverse();
// console.log(arr);

//slice is used for creating sub array
// let arr = [1,2,3,4,5,6,7,8,9];
// let newArr = arr.slice(3,8);
// console.log(arr);
// console.log(newArr);

//loop
// let arr = [];
// for(let i = 0; i< 50; i++){
// console.log(i);
// }

// let arr = [];
// for(let i = 0; i< 50; i++){
// arr.push("ashish");
// }
// console.log(arr);


//creating object
// const arr = [];
// arr.push(20);
// arr.push(20);
// arr.push(20);
// console.log(arr);

// const myobj = {
//     name:"ashish",
//     surname:"srivastava",
//     sex:"male",
// };
// console.log(myobj);

//  let result = (23 * 10 + 23 * 10 + 23 * 10)/10;
//  console.log(result);

//  let result2 = (45*10 + 45*10 + 45*10)/10;
//  console.log(result2);

//function in javascript:

//  function printthevalue() {
//     let result = (2+2+2+3+4+5);
//     console.log(result);

//  }
//  printthevalue(); bracket close k baad function call krna hoga.

// const myfunc =  function (a = 0, b = 0, c = 0){
//     let result = (a*10 + b*10 + c*10)/10;
//     return result;
// };

// let ans = myfunc(10,45,50);
// console.log(ans);


//(==) is equal to value but (=== is equal to value and type)

// function intro(name = "Ashish", channel = "Manpasand"){
//     console.log(
//         `Hi my name is ${name}. Please subscribe to my channel Manpasand, what are you waiting for? My channel name is ${channel}`
//     );
// }
// intro("Ashish", "Manpasand");

//function k andr function call krna
    //  function intro(name = "Ashish", channel = "Manpasand"){
    //  console.log(
    //          `Hi my name is ${name}. Please subscribe to my channel Manpasand, what are you waiting for? My channel name is ${channel}`
    //   );
    //   console.log(`My incomee is $${myFunc(1,1,1)}`);
    // }
    // intro("Ashish", "Manpasand");

//create a function to add the element of an array

//  function totalofArray(arr=[]){
//     let total = 0;
//     for(let i=0; i<arr.length; i++){
//         total = total + arr[i];
//  }
//  return total;
// }
// const arr = [1,2,3,4,5];
// console.log(totalofArray(arr));

//DOM manipulation::
// const thisOne = document.getElementsByTagName("span");
// console.log(thisOne);

// const thisOne = document.getElementsByTagName("span");
// thisOne[0].innerText = "newOne";
// console.log(thisOne[0]);
 
// const thisOne = document.getElementsByTagName("span");
// thisOne[0].innerHTML = `<span class="myclass">Nice</span>`;
// console.log(thisOne[0]);
 
// const thisOne = document.getElementsByTagName("span");
// thisOne[0].style.backgroundColor = "green";
// console.log(thisOne[0]);

// const thisOne = document.getElementsByTagName("span");
// thisOne[0].style.backgroundColor = "green";
// console.log(thisOne[0]);

// const myBtn = document.getElementById("myBtn");

// myBtn.stylebackgroundColor = "blue";
// myBtn.style.color = "#fff";
// myBtn.border = "none";
// myBtn.padding = "2vmax 4vmax";
// myBtn.style.cursor = "pointer";
// console.log(myBtn.getAttribute("class"))

//append :-put heading at last
//prepend:-put heading at top
 
// const myBtn = document.getElementById("myBtn");
// myBtn.stylebackgroundColor = "blue";
// myBtn.style.color = "#fff";
// myBtn.border = "none";
// myBtn.padding = "2vmax 4vmax";
// myBtn.style.cursor = "pointer";
// myBtn.setAttribute("class" ,"thisIsBtn");


// function bringMeHeading(){
//     const h2 = document.createElement("h2");
//     h2.innerText = "asds";
//     document.body.prepend(h2);
// }
// bringMeHeading();

// const myBtn = document.getElementById("myBtn");
// myBtn.stylebackgroundColor = "blue";
// myBtn.style.color = "#fff";
// myBtn.border = "none";
// myBtn.padding = "2vmax 4vmax";
// myBtn.style.cursor = "pointer";
// myBtn.setAttribute("class" ,"thisIsBtn");

// myBtn.onclick = bringMeHeading;
// function bringMeHeading(){
//     const h2 = document.createElement("h2");
//     h2.innerText = "asds";
//     document.body.prepend(h2);
// }
// bringMeHeading();

//arrow function
// const myfunc = (a,b)=>{
//     console.log(a*b);
// }
// myfunc(2,5);

// const arr = [2,4,6,8,10];
// const myfunc = (value,index) =>{
//     if(value===6){
//         console.log("6 Exist");
//     }
// };
// arr.find(myfunc);

//sort form we will directly add function in arr.find
// const arr = [2,4,6,8,10];
// arr.find((value,index) => {
//     if(value===6){
//         console.log("6 Exist");
//     }
// });

//arr.find krne pe single element output aayega
//lekin arr.filter krne pe all element output aayega
// const arr = [2,4,6,8,10];
// const result = arr.filter((value,index) => {
//     if(value>4){
//         return value;
//     }
// });
// console.log(result);

//arr.every boolean return krega:
// const arr = [2,4,6,8,10];
// const result = arr.every((value,index)=>{
//  return value>4;
// });
// console.log(result);

//arr.some btayega ki element 4 se bda h ya ni agr h to boolean return krega:
// const arr = [2,4,6,8,10];
// const result = arr.some((value,index)=>{
//  return value>4;
// });
// console.log(result);

// const arr = [2,4,6,8,10];
// const result = arr.some((value,index)=>{
//  return value>4;
// });
// console.log(result);

//different types of loop
// const arr = [2,4,6,8,10];
// for(const value of arr){
//     console.log(arr);
// }

//  constarr = [2,4,6,8,10];
// for(let value of arr){
//     value += 3;
//     console.log(value);
// }

// const arr = [2,4,6,8,10];
// arr.forEach((value,index)=>{
//    console.log(value);//value dega
//    console.log(index);//index dega
// });

//sum of an array
// const arr = [2,4,6,8,10];
// let totalSum = 0;
// arr.forEach((value,index)=>{
//  totalSum += value;
// });
// console.log(totalSum);

//arr.map new array print krta h
// const arr = [2,4,6,8,10];
// const result = arr.map((value,index)=>{
//     return value += 20;
// });
// console.log(result);

//Event Listeners::

const heading = document.getElementById("heading");
const btn = document.getElementById("myBtn");
const box1 = document.getElementById("box1");

btn.addEventListener("click", ()=>{
    box1.classList.add("classForDiv");
});

box1.addEventListener("dblclick", ()=>{
    document.body.style.backgroundColor = "rgb(50,50,50)";
});

