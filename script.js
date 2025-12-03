//7.8.10.11.12.15.16.18


// 1.
// console.log("Name: Ankit")
// console.log("Interest:Coding")

// // 2. Difference between var , let , const
// let x = 32;
// var y = "Hello guys";
// const z =  true;
// console.log(x);
// console.log(y);
// console.log(z);



// // 3. program
// let a = 1;
// if(a>5){
//     a=20;
// }
// else{
//     a=30;
// }
// console.log(a);

// 4. Write a program that determines whether a given number is positive or negative.

// let num =  prompt("Enter a number : ");
// if(num>0){
//     console.log('It is a positive number');
// }
// else{
//     console.log('It is a negative number');
// }
//5.
// let i;
// for (i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("FizzBuzz");
//     }
//     else if (i % 3 == 0) {
//         console.log("FIZZ");
//     }
//     else if (i % 5 == 0) {
//         console.log("BUZZ")
//     }

//     else {
//         console.log(i);
//     }
// }
//5.
// const num1 = Number(prompt("Enter a number : "));
// const num2 = Number(prompt("Enter another number : "));
// const operator = prompt("Enter operator (+, -, * or /):");
// let output;
// switch (operator) {
//     case "+":
//     output = num1 + num2;
//         break;

//     case "-":
//     output = num1 - num2;
//         break;

//     case "*":
//     output = num1 * num2;
//         break;

//     case "/":
//     output = num1 / num2;
//         break;

//     default :
//     output= "Operator is invalid";
// }
// alert("The result is : " + output);

//6.
//Write a for loop that prints numbers from 11 to 19.
// let l;
// for(l=11; l<=19 ;l++){
//     console.log(l)
// }



//13.
// let number = ["Ram","Shyam"];
// for(let i=0 ; i<number.length ; i++){
//     console.log(number[i]);
// }

//14.
// let employee = [{name:"Ramesh",age:"25"},{name:"Rajesh",age:"40"}];
// // console.log(apple.color)

// for(let i=0 ; i<employee.length ; i++){
//     console.log(employee[i].name);
//     console.log(employee[i].age)
// }


// 17.
// function EvenOrOdd() {
//     let n = Number(prompt("Enter a number: "));
//     if (n % 2 == 0) {
//         console.log ("It is even");
//     }
//     else {
//         console.log ("It is odd");
//     }
// }
// EvenOrOdd();


//9. 
// const addNum = [1,2,3,4,5];
// let sum =0;
// for(i=0;i<addNum.length;i++){
//     sum = sum+ addNum[i];
// }
// console.log("The sum of array is : "+sum)


//19.
// const array_num = [3,2,5,7,11];
// let largest= Math.max(...array);
// console.log(largest);

const array_num = [3, 2, 5, 7, 11];
let largest = array_num[0];
let second = array_num[0];
for (let i = 0; i < array_num.length; i++) {
    if (array_num[i] > largest) {
        largest = array_num[i];

        for (let j = 0; j < array_num.length; j++) {
            if (array_num[j] > second && array_num[j] < largest) {
                second = array_num[j];
            }
        }
    }
    
}

console.log("The Second largest number is : " + second);