// // let firstName;
// // firstName = "Tanyasis"
// // console.log(firstName)

// // //functions
// // function sum(x,y){
// // return x + y
// // }
// // console.log(40,60)

// // const sumArrow = (x,y) =>{
// // return x + y
// // }

// // const sumarrow = (x,y) => x + y; // another function method

// // //Conditions
// // // if/else
//  let canDrink = 17;
//  if(canDrink >= 18){
//      console.log("Pass that bottle")
//  }else if(canDrink > 15){
//      console.log("You are a teen")

//  }
//  else{
//      console.log("You are still young")
//  }

// //  function abilityDrink(age){
// //      if (age >= 18){
// //          console.log("you can now drink")
// //      }else if(age > 15){
// //          console.log("You are a teen")
// //      }else{
// //          console.log("you are still young")
// //      }
// //  }
// //  abilityDrink(14)

// function canDrink (age){
//     let drink = 16
//     if (age <14 ){
//         console.log("You are not allowed to drink")
//     }
//     else if(age >= 18){
//         console.log("Youa can buy a bottle of bear")
//     }
//     else{
//         console.log("you are still a baby so no drinks for you")
//     }
// }
// canDrink(10)


// let adulting = true;
// function checkAdulting(){
//     return adulting;
// }
// console.log(checkAdulting())

// // function product (t,u){
// //     return t * u
// // }
// // console.log(product(3,6))

// // Write a short program that prints each number from 1 to 100 on a new line.

// //For each multiple of 3, print "Fizz" instead of the number.

// //For each multiple of 5, print "Buzz" instead of the number.

// //For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

// function fizzBuzz(number){

//     if(number % 3 == 0 &&  number % 5 == 0){
//         console.log("FizzBuzz")
//     }
//     else if(number % 3 == 0){
//         console.log("fizz")
//     }
//     else if(number % 5 ==0){
//         console.log("Buzz")
//     }else{
//         console.log("number not divisible by any")
//     }

// }
// fizzBuzz(15)

// //pharsing phase - go through the entire code first
// //Execution phase -
// // machine Code -binary Code
// // JS Engine -interpreter of js into machine code
// // JS => machine code =>Execution

// var greeting = "Hello";
// console.log(greeting)
// greeting = "hi"
// console.log(greeting)

// // scopes in Javascript
// //1. Global scope-
// //2. Fuction scope -
// //3. Block scope- used in if statements

// // difference btwn let and var
// // // let will not put your variable in the window object.
// // // var put your variable in the window object.

// var students = [
// {name:"Tanyasis",marks:100},
// {name:"Judith",marks:98},
// {name:"Dude",marks:60},
// {name:"Wekesa",marks:20}
// ];

// function studentsMark(studentsMarks){
//     for (let student of students){
//         if (student.marks ==studentsMarks){
//             return student.marks;
//         }
//         return "student's marks not found"

//     }
// }
// console.log(studentsMark(60))

// // let first_name = "tanya";

// // function student() {
// //   console.log(name);
// //   let place = "AkiraChix";
// //   let school =""
// //   for (x of place) {
// //   school += (x.toUpperCase());

// //   }

// //   console.log(school)
// // }
// // student();

// //nested fuction

// function foo() {
//     console.log("foo");
//     bar();
//     function bar() {
//       buz();
//       console.log("bar");

//       function buz() {
//         console.log("buz");
//       }
//     }
//   }

//   foo();

// function foo(){
//     console.log("foo")
//     bar()
// function bar(){
//     console.log("bar")
//     buz()
// function buz(){
//     console.log("buz")

// }
// }
// }
// foo()

// function foo(){
//     bar()
//     console.log("foo")

// function bar(){
//     buz()
//     console.log("bar")

// function buz(){
//     console.log("buz")

// }
// }
// }
// bar()

//closures
// function parent() {
//   let firstName = "Tanya";
//   console.log(firstName)
//   child()

//   function child() {
//     let middleName = "Mayiana";
//     grandChild()
//     function grandChild() {
//       let lastName = "Mantaine";
//       console.log(lastName)
//     }
//   }
// }
// parent()

//  function base(){
//     // let multiplier = 2;
//     return function person(name){
//         return name
//     }

//     }
//     let result = base()

//     console.log(result("Ian"))

// function checkBalance(){
//     let balance = 200;

//     return function(){
//         return balance
//     };
// let myBalance = checkBalance()
// console.log(myBalance())

// }
//Array methods
// const arryNumbers = [1,2,3,4,5,6,7,8,9,10];
// for (let i=0; i< arryNumbers.length;i++){
//     console.log(arryNumbers)
// }

// //forEach(does not return anything)
//function checkStudent(){
//     let name = "Tanyasis";
//     return function(){
//         return name
//     };
// }
// let found = checkStudent()
// console.log(found())n a value)
// const namesArr=["Ian","Clint","Tanya"]
// namesArr.forEach (function(value){
//     console.log(value)

// });

//map(returns a new array)
// const namesArr=["Ian","Clint","Tanya"]

// const capitalizedArr = namesArr(function(value){
//     return value.upperCase()
// })
// console.log(capitalizedArr)

//filter returns a new array but with the same array as the original
//  const numbers = [2,3,4,5,6,7.8,9]
//  const evenNumbers = numbers.filter(function(){

//  })
// console.log(evenNumbers)
// //arror function
// const evnNumbers = numbers.filter((value) =>{})

// function parent() {
//   let firstName = "Tanya";
//   console.log(firstName)
//   child()

//   function child() {
//     let middleName = "Mayiana";
//     grandChild()
//     function grandChild() {
//       let lastName = "Mantaine";
//       console.log(lastName)
//     }
//   }
// }
// parent()

// const arrayNumbers = [2,3,4,5,6,7,8,9,1]
// for(let i = 0; i<arrayNumbers.length;i++){
//     console.log(arrayNumbers[i])

// }

//The formula to convert from Celsius to Fahrenheit is 
//the temperature in Celsius times 9/5, plus 32.
//You are given a variable celsius representing a
//temperature in Celsius. Use the variable fahrenheit 
//already defined and assign it the Fahrenheit temperature equivalent 
//to the given Celsius temperature. Use the formula mentioned above to help 
//convert the Celsius temperature to Fahrenheit.

// let celsius = 10
// let fahrenheit = (celsius * 9/5) + 32

// function temp(celsius){
//     let fahrenheit = (celsius * 9/5) + 32
//     return fahrenheit

// }
// console.log(temp(0))


//Reverse the provided string.

//You may need to turn the string into an array before you can reverse it.

//Your result must be a string.

// "Hello"
// "olleH"
// function reverse(word){
// let reversed = ""
// for(let i = word.length-1; i >=0;i--){
//     reversed += word[i]

// }
// console.log(reversed)
// return reversed
// }
// reverse("Tanya")

//Return the factorial of the provided integer.
//If the integer is represented with the letter n, a factorial is the product of 
//all positive integers less than or equal to n.
//Factorials are often represented with the shorthand notation n!
//For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
//Only integers greater than or equal to zero will be supplied to the function

// function factorials(n){
//     if (n === 1){
//         return n
//     }
//     let product = 1
//     for(let i = 1; i <= n; i++){
//         product *= i

//     }
//     return product
    

// }
// console.log(factorials(1000))
 
    
 
 



