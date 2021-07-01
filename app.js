//                                  Chapter   1
//                    Q#1
//  Write a program to take “city” name as input from user.
//  If user enters “Karachi”, welcome the user like this: “Welcome to city of lights

// var city = prompt("Enter name of the city")
// if(city == "karachi"){
//     document.write("Welcome to city of lights")
// }
// else{
//     document.write("Sorry")
// }

// -------------------------------------------------------------------------------------------------------------------

//                   Q#2
//  Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir.
//  If the user is female, give the message: Good Morning Ma’am.

// var gender = prompt("Enter your gender")
// if(gender == "male"){
//     document.write("Good Morning Sir")
// }
// else if(gender == "female"){
//     document.write("Good Morning Madam")
// }
// else{
//     document.write("You have given wrong information")
// }

// ------------------------------------------------------------------------------------------------------------------

//                  Q#3
// Write a program to take input color of road traffic signal from the user &
//  show the message according to this table:
// Signal color  Message Red Must Stop Yellow Ready to move Green Move now

// var color = prompt("Enter the color of traffic light (red/yellow/green)")
// if(color == "red"){
//     document.write("You must stop")
// }
// else if(color == "yellow"){
//     document.write("Get ready to move")
// }
// else if(color == "green"){
//     document.write("Move now")
// }
// else{
//     document.write("You have given wrong information")
// }

// -------------------------------------------------------------------------------------------------------------------

//                  Q#4
// Write a program to take input remaining fuel in car (in litres) from user.
//  If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car

// var fuel = +prompt("Enter the amount of remaining fuel in your car in litres")
// if (fuel < 0.25){
//     document.write("Please refill the fuel in your car")
// }
// else{
//     document.write("Nothing to worry about")
// }

// ------------------------------------------------------------------------------------------------------------------

//                Q#5
//Run this script, & check whether alert message would be displayed or not. Record the outputs.

//                           A
// var a = 4;
// if (++a === 5){
//     alert("given condition for variable a is true");
// }

//    true

//                           B

// var a = 82
// if (a++ === 83){
//     alert("given condition for variable b is true");
// }

//        FALSE  a will be icremented when real value of a returned

//                           C

// var c = 12;
// if (c++ === 13){
//     alert("condition 1 is true");
// } if (c === 13){
//     alert("condition 2 is true");
//  }
// if (++c < 14){
//     alert("condition 3 is true");
// } if(c === 14){
//     alert("condition 4 is true");
//  }

//        condition 1 is false because icrement will be done when its original value is returned
//        condition 3 is false because value of c after pre increment is 14 which is not less than 14

//                  D

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//   alert("The cost equals");
// }
//            TRUE

//                  E

// if (true) {
//   alert("True");
// }
// if (false) {
//   alert("False");
// }
//     the code willonl run if condition is true if its already false it will not execute

//                 F

// if ("car" < "cat") {
//   alert("car is smaller than cat");
// }

// -----------------------------------------------------------------------------------------------------------------

//                                              Q#6
// Write a program to take input the marks obtained in three subjects & total marks.
//  Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:

// var physics = +prompt("enter your obtained numbers in Physics out of 100")
// var chemistry = +prompt("enter your obtained numbers in Chemistry out of 100")
// var maths = +prompt("enter your obtained numbers in Maths out of 100")
// var total = (physics + chemistry + maths)
// var percentage = ((total / 300)*100)
// var grade = null
// var remarks = null
// if(percentage >= 80){
//     var grade = "A-one"
//     var remarks = "Excellent"
// }
// else if(percentage >= 70 && percentage <= 79 ){
//     var grade = "A"
//     var remarks = "Good"
// }
// else if(percentage >= 60 && percentage <= 69){
//     var grade = "B"
//     var remarks = "you need improvement"
// }
// else if(percentage <= 59){
//     var grade = "F"
//     var remarks = "Sorry"
// }
// document.write("MARKSHEET")
// document.write("<br>")
// document.write("Total Marks : 300")
// document.write("<br>")
// document.write("Obtained Marks : " + total)
// document.write("<br>")
// document.write("Percentage : " + percentage + "%")
// document.write("<br>")
// document.write("Grade : " + grade)
// document.write("<br>")
// document.write("Remarks : " + remarks)

// ---------------------------------------------------------------------------------------------------------------------

//                    Q#7
// Guess game: Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number. a.
//  If user guesses the same number, show “Bingo! Correct answer”. b.
//  If the guessed number +1 is the secret number, show “Close enough to the correct answer”.
// var num = 8
// var guess = +prompt("guess the number")
// var ca = guess + 1
// if (guess == 8){
//     document.write("Bingo! correct answer")
// }
// else if (ca == 8){
//     document.write("So Close")
// }
// else{
//     document.write("Sorry")
// }

// ------------------------------------------------------------------------------------------------------------------
//                                Q#8

// Write a program to check whether the given number is divisible by 3.
// Show the message to the user if the number is divisible by 3

// var num = +prompt("enter number")
// if ( (num % 3) == 0 ) {
//     document.write("number is divisible by 3")
// }
// else{
//     document.write("number is not divisible by 3")
// }

// ----------------------------------------------------------------------------------------------------------------

//                                Q#9
// //  Write a program that checks whether the given input is an even number or an odd number

// var num = +prompt("enter number");
// if (num = 1){
//     document.write("number is odd")
// }
// else if (num % 2 == 0) {
//   document.write("number is even");
// }
// else if(num % 2 != 0){
//     document.write("number is odd")
// }
// else{
//     document.write("you have given wrong information")
// }

// -----------------------------------------------------------------------------------------------------------

//                           Q#10
//  Write a program that takes temperature as input and shows a message based on following criteria
// a. T > 40 then “It is too hot outside.” b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.” d. T > 10 then “OMG! Today’s weather is so Cool.”

// var temp = +prompt("wnter the current temperature")
// if(temp > 40){
//     document.write("It is too hot outside")
// }
// else if(temp < 40 && temp >= 30){
//     document.write("the weather today is normal")
// }
// else if(temp < 30 && temp >= 20){
//     document.write("Today’s Weather is cool")
// }
// else if(temp < 20 && temp >= 10){
//     document.write("OMG! Today’s weather is so Cool")
// }
// else{
//     document.write("oh")
// }

// -----------------------------------------------------------------------------------------------------------
//                           Q#11

// Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
// a. First number b. Second number c. Operation (+, -, *, /, %) Compute & show the calculated result to user.

// var first = +prompt("Enter first number")
// var second = +prompt("Enter second number")
// var oper = prompt("Enter operation (+ ! - ! / ! * ! %)")
// if (oper == "+"){
//     document.write("sum of given number is = ")
//     document.write(first + second)
// }
// else if (oper == "-"){
//     document.write("subtracion of given numbers is = ")
//     document.write(first - second)
// }
// else if (oper == "/"){
//     document.write("division of given numbers is = ")
//     document.write(first / second)
// }
// else if (oper == "*"){
//     document.write("product of given numbers is = ")
//     document.write(first * second)
// }
// else if (oper == "%"){
//     document.write("reaminder of given numbers is = ")
//     document.write(first % second)
// }
// else{
//     document.write("You have given wrong information")
// }

// -------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------

//                        CHAPTER # 2
//                        Q#1

// var num = +prompt("enter the number")
// document.write("Result")
// document.write("<br>")
// document.write("the value of number = " + num)
// document.write("<br>")
// document.write("-------------------------------")
// document.write("<br>")
// var a = ++num
// document.write("the value of ++number = " + a)
// document.write("<br>")
// document.write("now the value of number is = " + num)
// document.write("<br>")
// var b = num++
// document.write("the value of number++ = " + b)
// document.write("<br>")
// document.write("now the value of number is = " + num)
// document.write("<br>")
// var c = --num
// document.write("the value of --number = " + c)
// document.write("<br>")
// document.write("now the value of number is = " + num)
// document.write("<br>")
// var d = num--
// document.write("the value of number-- = " + d)
// document.write("<br>")
// document.write("now the value of number is = " + num)
// document.write("<br>")

// ---------------------------------------------------------------------------------------------------------------
//                         Q#2
// What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// --a;             it decreases the value of a by 1
// --a - --b;       answer of this will be 1 and 0
// --a - --b + ++b;       here the answer will be 1 because the value of a and b have changed
// --a - --b + ++b + b--;   since the value of a was changed to 0 so here it will be -1 and value of b as -1 so it will be
//                           -2 and value of ++b is 3 and value of b-- will be also 3 and it will be changed after it gives the 
//                          original value
//   the answer will be 3
//  
// -----------------------------------------------------------------------------------------------------------------

//                        Q#3
// Write a program that takes input a name from user & greet the user.
// var name = prompt("enter your name")
// document.write("you are welcome " + name)

// --------------------------------------------------------------------------------------------------------------
//                        Q#4
// Write a program to take input a number from user & display it’s multiplication table on your browser. 
// If user does not enter a new number, multiplication table of 5 should be displayed by default.
// var num = +prompt("enter any number")
// if (num == 0){
//     document.write("5" + " *   1  = " +(5*1))
//     document.write("<br>")
//     document.write("5" + " *   2  = " +(5*2))
//     document.write("<br>")
//     document.write("5" + " *   3  = " +(5*3))
//     document.write("<br>")
//     document.write("5" + " *   4  = " +(5*4))
//     document.write("<br>")
//     document.write("5" + " *   5  = " +(5*5))
//     document.write("<br>")
//     document.write("5" + " *   6  = " +(5*6))
//     document.write("<br>")
//     document.write("5" + " *   7  = " +(5*7))
//     document.write("<br>")
//     document.write("5" + " *   8  = " +(5*8))
//     document.write("<br>")
//     document.write("5" + " *   9  = " +(5*9))
//     document.write("<br>")
//     document.write("5" + " *   10 = " +(5*10))
// }
// else{
//     document.write(num + " *   1  = " +(num*1))
//     document.write("<br>")
//     document.write(num + " *   2  = " +(num*2))
//     document.write("<br>")
//     document.write(num + " *   3  = " +(num*3))
//     document.write("<br>")
//     document.write(num + " *   4  = " +(num*4))
//     document.write("<br>")
//     document.write(num + " *   5  = " +(num*5))
//     document.write("<br>")
//     document.write(num + " *   6  = " +(num*6))
//     document.write("<br>")
//     document.write(num + " *   7  = " +(num*7))
//     document.write("<br>")
//     document.write(num + " *   8  = " +(num*8))
//     document.write("<br>")
//     document.write(num + " *   9  = " +(num*9))
//     document.write("<br>")
//     document.write(num + " *   10 = " +(num*10))
// }

// ----------------------------------------------------------------------------------------------------------------
//                          Q#5
// a) Take three subjects name from user and store them in 3 different variables.
//  b) Total marks for each subject is 100, store it in another variable
// . c) Take obtained marks for first subject from user and stored it in different variable
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
//  e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
// var sub1 = prompt("Enter subject name")
// var sub2 = prompt("Enter subject name")
// var sub3 = prompt("Enter subject name")
// var obt1 = +prompt("enter obtained marks in " + sub1 + "out of 100")
// var obt2 = +prompt("enter obtained marks in " + sub2 + "out of 100")
// var obt3 = +prompt("enter obtained marks in " + sub3 + "out of 100")
// var total = obt1 + obt2 + obt3
// var perc = ((total / 300)*100)
// document.write(sub1+ " = " + obt1 + "/300")
// document.write("<br>")
// document.write(sub2+ " = " + obt2 + "/300")
// document.write("<br>")
// document.write(sub3+ " = " + obt3 + "/300")
// document.write("<br>")
// document.write("percentage = " + perc + "%")
// 
// -----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
//                                 chapter#3 ARRAYS AND LOOOPS
//           Q#1 
// Declare and initialize an empty multidimensional array. (Array of arrays) 
// var arr = [[,],[,],[,]] 
// console.log(arr)

// ----------------------------------------------------------------------------------------------------------
// 
//           Q#3
// Declare and initialize a multidimensional array representing the following matrix:   
// var arr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]]
// console.log(arr)
// 
// ---------------------------------------------------------------------------------------------------------
//             Q#4
// 
// Write a program to print numeric counting from 1 to 10
// for (i=1; i<101; i++){
//     document.write(i + "<br/>")
// }

// ------------------------------------------------------------------------------------------------------------

//                   Q#5
//  Write a program to print multiplication table of any number using for loop.
//  Table number & length should be taken as an input from user
// var num = +prompt("type the number for table")
// var len = +prompt("enter the length")
// var a = num+1
// for(i = num; i < a; i++){
//     for(b = 1; b <= len; b++){
//         document.write(i + " x " + b + " = " + (i*b) + "<br/>")
//     }
// }

// -----------------------------------------------------------------------------------------------------------
// 
//                    Q#6
// Write a program to print items of the following array using for loop:
//  fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”] 
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
// for(i = 0; i<fruits.length; i++){
//     document.write("Element on index " + i + " is " + fruits[i] + "<br/>")
// }
// 
// -----------------------------------------------------------------------------------------------------
//                           Q#7
//  Generate the following series in your browser. See example output. 
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// 
//         A 
// document.write("COUNTING" + "<br/>")
// for (a = 1; a <16; a++ ) {
//     document.write(a + "<br/>")
// }
// 
//        B

// document.write("Reverse counting" + "<br/>")
// for(i = 10; i>0; i--){
//     document.write(i + "<br/>")
// }

//        C
// document.write("Even" + "<br/>")
// for(i = 0; i <= 20; i++){
//     for(b = 1; b < 2; b++ ) {
//         if(i % 2 == 0){
//             document.write(i + "<br/>")
//         }
//     }
// }
// 
//         D
// 
// document.write("Odd " + "<br/>")
// for(i = 0; i <= 20 ; i++){
//     for(f=1; f < 2; f++){
//         if(i % 2 == 1){
//             document.write(i + "<br/>")
//         }
//     }
// }

//        E

// document.write("SERIES" + "<br/>")
// for(i = 1; i <= 20; i++){
//     for(b = 1; b < 2; b++ ) {
//         if(i % 2 == 0){
//             document.write(i +"K"  + "<br/>")
//         }
//     }
// }

// ------------------------------------------------------------------------------------------------------------
// 
//            Q#7
//  You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] 
//  Write a program to enable “search by user input” in an array.
//  After searching, prompt the user whether the given item is found in the list or not. Example:
// var ser = prompt("Welcome to umer bakery search here")
// var arr = ["cake", "apple pie", "cookie", "chips", "patties"]
// var ko = 0
// for(i = 0; i < arr.length; i++){
//     if(ser == arr[i]){
//         document.write("yes " + ser + " is available")
//         var ko = 1
//     }
// }
// if(ko == 0){
//     document.write("Sorry " + ser +  " is not available")
// }

// -----------------------------------------------------------------------------------------------------------

//                 Q#8
//  Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12].

// var A = [24, 53, 78, 91, 12]
// var one = A[0]
// for(g = 0; g < A.length; g++){
//     if(A[g]> one){
//         var one = A[g]
//     }
// }
// document.write(one)
// 
// ---------------------------------------------------------------------------------------------------------=--
// 
//                  Q#9
//  Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12] 
// var A = [24, 53, 78, 91, 12, 2] 
// var low = A[0]
// for(i = 0; i < A.length; i++){
//     if(low > A[i]){
//         var low = A[i]
//     }
// }
// document.write("the lowest number is " + low)
// 
// -------------------------------------------------------------------------------------------------------------
// 
//                  Q#10
// Write a program to print multiples of 5 ranging 1 to 100.
// var Arr = []
// for(i = 1; i <= 100; i++){
//     if(i % 5 == 0){
//         Arr.push(i)
//     }
// }
// for(b = 0; b < Arr.length; b++){
//     document.write(Arr[b] + " , ")
// }
// 
// ----------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------

//                                        CHAPTER#4     ARRAYS

//  
//             Q#1
// Declare an empty array using JS literal notation to store student names in future.


// var arr = []
// 
// ---------------------------------------------------------------------------------------------
// 
//               Q#2
// Declare an empty array using JS object notation to store student names in future

// var arr = {

// }
// ------------------------------------------------------------------------------------------------
//               Q#3
//  Declare and initialize a strings array.
// var students = ["umer","usman","huzaifa","ali","wasi"]
// 
// -----------------------------------------------------------------------------------------------
// 
//                Q#4
// Declare and initialize a numbers array
// var num = [1,2,3,4,5,6,7,8,9,10]
// 
// -----------------------------------------------------------------------------------------------
// 
//                 Q#5
// Declare and initialize a boolean array.
// var arr = [true, false, false]
// 
//--------------------------------------------------------------------------------------------------
// 
//                 Q#6
// Declare and initialize a mixed array
// var arr = ["umer", 5648, true, "mango", "pakistan"]
// 
// ------------------------------------------------------------------------------------------------
//               
//                 Q#7
// Declare and Initialize an array and store available education qualifications in Pakistan 
// (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). 
// Show the listed qualifications in your browser like: 
// var qual = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"]
// document.write("QUALIFICATiON" + "<br/>")

// for(var i = 0; i < qual.length; i++){
//     document.write((i+1) + " . " + qual[i] + "<br/>")
// }

// -------------------------------------------------------------------------------------------------1
// 
//                Q#8
// Write a program to store 3 student names in an array.Take another array to store score of these three students.
// Assume that total marks are 500 for each student, display the scores & percentages of students like:
// var students = ["Umer", "Usman", "Huzaifa"]
// var numbers = [398, 450, 415]
// for(var i = 0; i < students.length; i++) {
//     var per = Math.ceil((numbers[i]/500)*100)
//     document.write("Score of " + students[i] + " is " + numbers[i] + ". " + " Percentage: " + per + "%" +"<br/>")
// }
// 
// --------------------------------------------------------------------------------------------------
// 
//                Q#9
// Initialize an array with color names. Display the array elements in your browser. 
// a. Ask the user what color  want to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser. 
// var color = ["red", "yellow", "orange", "blue", "black"]
// for(var i = 0; i < color.length; i++){
//     document.write(color[i] + "<br/>")
// }
// var usercolor = prompt("what color do you want to add to the beginning")
// color.unshift(usercolor)
// document.write("----------------------------------------------------------" + "<br/>")
// for(var i = 0; i < color.length; i++){
//     document.write(color[i] + "<br/>")
// }
// 
//              B
// b. Ask the user what color he/she wants to add to the end & 
// add that color to the end of the array. Display the updated array in your browser.
// var color = ["red", "yellow", "orange", "blue", "black"]
// for(var i = 0; i < color.length; i++){
//     document.write(color[i] + "<br/>")
// }
// var usercolor = prompt("what color do you want to add to the end")
// color.push(usercolor)
// document.write("----------------------------------------------------------" + "<br/>")
// for(var i = 0; i < color.length; i++){
//     document.write(color[i] + "<br/>")
// }
// 
//             C
// 
// Add two more color to the beginning of the array. Display the updated array in your browser. 
// var color = ["red", "yellow", "orange", "blue", "black"]
// for(var i = 0; i < color.length; i++){
//     document.write(color[i] + "<br/>")
// }
// var usercolor = prompt("what color do you want to add to the end")
// var usercolor2 = prompt("what other color do you want to add to the end")
// color.unshift(usercolor)
// color.unshift(usercolor2)
// document.write("----------------------------------------------------------" + "<br/>")
// for(var i = 0; i < color.length; i++){
//     document.write(color[i] + "<br/>")
// }
// 
//           D
// Delete the first color in the array. Display the updated array in your browser.
// var color = ["red", "yellow", "orange", "blue", "black"]
// for(var i = 0; i < color.length; i++){
//     document.write(color[i] + "<br/>")
// }
// color.shift()
// document.write("----------------------------------------------------------" + "<br/>")
// for(var i = 0; i < color.length; i++){
//     document.write(color[i] + "<br/>")
// }
// 
//         C
// // Delete the last color in the array. Display the updated array in your browser.
// var color = ["red", "yellow", "orange", "blue", "black"]
// for(var i = 0; i < color.length; i++){
//     document.write(color[i] + "<br/>")
// }
// color.pop()
// document.write("----------------------------------------------------------" + "<br/>")
// for(var i = 0; i < color.length; i++){
//     document.write(color[i] + "<br/>")
// }

//         D
// . Ask the user at which index he/she wants to add a color & color name
// . Then add the color to desired position/index. . Display the updated array in your browser
// var color = ["red", "yellow", "orange", "blue", "black"]
// for(var i = 0; i < color.length; i++){
//     document.write(color[i] + "<br/>")
// }
// var usercolor1 = prompt("what first color do you want to add ")
// var index1 = prompt("At which index you want to add first color")
// var usercolor2 = prompt("what second color do you want to add ")
// var index2 = prompt("At which index you want to add second color")
// color.splice(index1, 0 , usercolor1)
// color.splice(index2, 0 , usercolor2)
// document.write("----------------------------------------------------------" + "<br/>")
// for(var i = 0; i < color.length; i++){
//     document.write(color[i] + "<br/>")
// }
// 
//         E
//  Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delet
// var color = ["red", "yellow", "orange", "blue", "black"]
// for(var i = 0; i < color.length; i++){
//     document.write(color[i] + "<br/>")
// }
// var index1 = prompt("from which index you want to delete color")
// var count = prompt("how many color you want to get deleted")
// color.splice(index1, count)
// document.write("----------------------------------------------------------" + "<br/>")
// for(var i = 0; i < color.length; i++){
//     document.write(color[i] + "<br/>")
// }
// 
// --------------------------------------------------------------------------------------------------------------
//                           Q#10
// Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
// var num = [320, 230, 480, 120]
// for(var i = 0; i < num.length; i++){
//     document.write(num[i] + "<br/>")
// }
// document.write("--------------------------------------------" + "<br/>")

// num.sort();
// document.write("Sorted list" + "<br/>")
// for(var i = 0; i < num.length; i++){
//     document.write(num[i] + "<br/>")
// }

//-------------------------------------------------------------------------------------------------------
//                    Q#11
// Write a program to initialize an array with city names. 
// Copy 3 array elements from cities array to selectedCities array. 
// var cities = ["karchi", "lahore", "peshawar", "quetta", "multan" ]
// document.write("cities" + "<br/>")
// for(var i = 0 ; i < cities.length; i++){
//     document.write(cities[i] + "<br/>")
// }
// document.write("-------------------------------------------"  + "<br/>")
// document.write("selected cities" + "<br/>")
// var seleccities = cities.slice(0,3)
// for(var i = 0 ; i < seleccities.length; i++){
//     document.write(seleccities[i] + "<br/>")
// }
// ----------------------------------------------------------------------------------------------------------
//                   Q#12
// Write a program to create a single string from the below mentioned
//  array: var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)                
// var arr = ["This", "is", "my" , "cat"];
// var join = arr.join(" ");
// document.write(join)
// 
// --------------------------------------------------------------------------------------------
// 
//                    Q#13
//  Create a new array. Store values one by one in such a way that 
// you can access the values in the order in which they were stored. (FIFO-First In First Out
// 
// var arr = []
// arr.push("keyboard")
// arr.push("mouse")
// arr.push("printer")
// arr.push("monitor")
// document.write(arr + "<br/>")
// document.write(arr.shift() + "<br/>")
// document.write(arr.shift() + "<br/>")
// document.write(arr.shift() + "<br/>")
// document.write(arr.shift() + "<br/>")
// 
// ---------------------------------------------------------------------------------------------

//                   Q#14
//  Create a new array. Store values one by one in such a 
// way that you can access the values in reverse order. (Last InFirst Out) 
// var arr = []
// arr.push("keyboard")
// arr.push("mouse")
// arr.push("printer")
// arr.push("monitor")
// document.write(arr + "<br/>")
// document.write(arr.pop() + "<br/>")
// document.write(arr.pop() + "<br/>")
// document.write(arr.pop() + "<br/>")
// document.write(arr.pop() + "<br/>")

// -------------------------------------------------------------------------------------
//                Q#15
// Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your browser using document.write() method
// var phone = ["Apple", "Samsung", "Motorola", "Nokia", "Sony" ,"Haier"]
// for(var i = 0; i < phone.length; i++){
//     document.write(phone[i]  + "<br/>")
// }
// 
// 
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
//                                   CHAPTER 5
//                                     IF ELSE STATEMENTS 
// 
//               Q#1
// 
// 
// 
// 
// 
// 


//---------------------------------------------------------------------------------------------------------------- 

//              Q#2
// Write a JavaScript program that accept two integers and display the larger.
// //  Also show if the two integers are equal.
// var num1 = +prompt("Enter first number")
// var num2 = +prompt("Enter second number")
// if(num1 == num2){
//     document.write("Both numbers are equal")
// }
// else if(num1 > num2){
//     document.write(num1 + " is greater than " + num2)
// }
// else if(num1 < num2){
//     document.write(num2 + " is greater than " + num1)
// }
// 
// ----------------------------------------------------------------------------------------------------------------

//             Q#3
// Write a program that takes input a number from user & state whether the number is positive, negative or zero
// var num = +prompt("enter the number")
// if(num == 0){
//     document.write("given number is equal to zero")
// }
// else if(num > 0){
//     document.write("given number is positive")
// }
// else if(num < 0){
//     document.write("given number is negative")
// }

// -----------------------------------------------------------------------------------------------------------
//             Q#4
// Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise 
// var str = prompt("enter a word")
// if(str == "a" || str == "e" || str == "i" || str == "o" || str == "u"){
//     document.write("given alphabet is a vowel")
// }
// else{
//     document.write("given alphabet is not a vowel")
    
// }
// 
// ---------------------------------------------------------------------------------------------------------
//             Q#5
// Write a program that a. Store correct password in a JS variable. 
// b.  Asks user to enter his/her password c.  Validate the two passwords: 
// i. Check if user has entered password. If not, then give message “ Please enter your password” 
// ii. Check if both passwords are same. If they are same, show message “Correct! 
// The password you entered matches the original password”. Show “Incorrect password” otherwise
// var password = prompt("enter the password")
// var real = "pakistan112"
// if (password == real) {
//     alert("Correct!")
// }
// else if (password != real && password != "") {
//     alert("Incorrect Password")
// }
// else{
//     alert("Please Enter Password")
// }
// 
// ---------------------------------------------------------------------------------------------------------
// 
//              Q#6
// 
// This if/else statement does not work. Try to fix it: var greeting; 
// 
// var hour = 13;
// var greeting = "" 
// if (hour < 18) { 
//     greeting = "Good day";
// }
// else{
//     greeting = "Good evening";
//  }
// document.write(greeting)
// 
// --------------------------------------------------------------------------------------------------------
// 
//              Q#7
// 
// Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm.
// Implement the following case using if, else & else if statement
// var time = 1900;
// if(time >= 0000 && time < 1200){
//     document.write("Good morning!")
// }
// else if(time >= 1200 && time < 1700){
//     document.write("Good afternoon!")
// }
// else if(time >= 1700 && time < 2100){
//     document.write("Good evening!")
// }
// else if(time >= 2100 && time < 2359){
//     document.write("Good night!")
// }
// 
// 
// -------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------

//                     CHAPTER 6  VARIABLES FOR STRINGS
//         Q#1
// 1. Declare a variable called username.
// var username = ""

// ---------------------------------------------------------------------------------------------------------------
//        Q #2
// 2. Declare a variable called myName & assign to it a string that represents your Full Name. 
// var myName = "Umer Faizyab Khan"

// --------------------------------------------------------------------------------------------------------------
//         Q#3
// 3. Write script to a) Declare a JS variable, titled message. b) Assign “Hello World” to variable message 
// c) Display the message in alert box.
// var titledmesssage = "Hello World"
// alert(titledmesssage)
// 
// ---------------------------------------------------------------------------------------------------------------
// 
//         Q#4
// 
// Write a script to save student’s bio data in JS variables and show the data in alert boxes. 

// var studentname = "Umer Faizyab Khan"
// var age = "20 years old"
// var qualification = "Intermidiate student"
// alert(studentname)
// alert(age)
// alert(qualification)

//--------------------------------------------------------------------------------------------------------------- 
//         Q#5
// Write a script to display the following alert using one JS variable
// alert("PIZZA \nPIZZ \nPIZ \nPI \nP")
// 
// -------------------------------------------------------------------------------------------------------------

//         Q#6
// Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com
// ). Show the blow mentioned message in an alert box.(Hint: use string concatenation)
// var email = "umer123@gmail.com"
// alert("My Email Address is " + email)

// ------------------------------------------------------------------------------------------------------------
// 
//         Q#7
// Declare a variable called book & give it the value
//  “A smarter way to learn JavaScript”. Display the following message in an alert box:
// var book = "A smarter \nway to learn javaScript"
// alert("I am trying to study" + book)

// -----------------------------------------------------------------------------------------------------------
// 
//          Q#8
// Write a script to display this in browser through JS 
// document.write("yah! I can write HTML content through JavaScript")
// ------------------------------------------------------------------------------------------------------------
//          Q#9
// Store following string in a variable and show in alert and browser through JS “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”
// var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
// alert(design)

// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------

//                           CHAPTER 9 TO 11     ALERTS
// 
//              Q#1
// 1. Write a script to greet your website visitor using JS alert box
// alert("Welcome")
// ----------------------------------------------------------------------------------------------
//               Q#2
// . 2. Write a script to display following message on your web page
// 
//  alert("Error! Please Enter a valid password")
// 
// ----------------------------------------------------------------------------------------------
//              Q#3
// Write a script to display following message on your web page: (Hint : Use line break)

// alert("Welcome to JS coding \nHappy Coding")
// 
// --------------------------------------------------------------------------------------------------------

//              Q#4
// 
// alert("welcome to JS land")
// alert("Happy coding!")
// 
// -------------------------------------------------------------------------------------------------------
// 
//              Q#5
// 
// Generate the following message through browser’s developer console:  
// console.log("Hello ! i can run JS through my web browser console")
// 
// -------------------------------------------------------------------------------------------------------
//             Q#6
//Make use of alerts in your new/existing HTML & CSS project.
// var num = +prompt("guess a number from 1 to 5")
// if(num == 3 ){
//     alert("Correct")
// } 
// else if(num+1 == 3){
//     alert("So close")
// }
// 
// ---------------------------------------------------------------------------------------------
//             Q#7
// Practice placement of <script></script>
//  element in following sections of your project in exercise
//   6: a. Head b. Body (before your page’s HTML) 

// done
// 
// 
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
// 
//                  CHAPTER 12 - 13  MATH EXPRESSIONS
// 
//         Q#1
// Write a program that take two numbers & add them in a new variable. 
// Show the result in your browser. 
// var num1 = +prompt("enter first number")
// var num2 = +prompt("enter second number")
// var sum = num1 + num2
// alert("sum of given numbers is " + sum)
// 
// --------------------------------------------------------------------
//       Q#2
//  Repeat task1 for subtraction, multiplication, division & modulus
// var num1 = +prompt("enter first number")
// var num2 = +prompt("enter second number")
// var sub = num1 - num2
// alert("subtraction of given numbers is " + sub)

// var num1 = +prompt("enter first number")
// var num2 = +prompt("enter second number")
// var mul = num1 * num2
// alert("product of given numbers is " + mul)

// var num1 = +prompt("enter first number")
// var num2 = +prompt("enter second number")
// var div = num1 / num2
// alert("division of given numbers is " + div)

// var num1 = +prompt("enter first number")
// var num2 = +prompt("enter second number")
// var mod = num1 % num2
// alert("modulus of given numbers is " + mod)
// 
// -----------------------------------------------------------------------------------
//        Q#3
// Do the following using JS Mathematic Expressions 
// a. Declare a variable. 
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”. 
// c. Initialize the variable with some number. 
// d. Show the value of variable in your browser like “Initial value: 5”. 
// e. Increment the variable. 
// f. Show the value of variable in your browser like “Value after increment is: 6”. 
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Valueafter addition is: 13”. 
// i. Decrement the variable. 
// j. Show the value of variable in your browser like “Value after decrement is: 12”. 
// k. Show the remainder after dividing the variable’s value by 3.  
// l. Output : “The remainder is : 0”


// var num = 
// document.write("value after variable decleration is " + num + "<br/>")
// var num = 9
// document.write("value after initialization is " + num  + "<br/>")
// var num = ++num
// document.write("value after increment is " + num  + "<br/>")
// var num = num + 7
// document.write("value after addition is " + num  + "<br/>")
// var num = --num
// document.write("value after decrement is " + num  + "<br/>")
// var num = num % 3 
// document.write("the remainder is " + num  + "<br/>")

// -------------------------------------------------------------------------------------------------------------
 
//       Q#4
// Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable
// & calculate the cost of buying 5 tickets to a movie. Example output
// var num = +prompt("How many tickets you want to buy (price = 500Rs each)")
// document.write("total price of " + num + " is " + (num*500))

// ------------------------------------------------------------------------------------------------------------
// 
//        Q#5
// Write a script to display multiplication table of any number in your browser. 
// var num = +prompt("enter a number to get its table")
// for(var i = 1; i < 11; i++){
//     document.write(num + " x " + i + " = " + (num*i) + "<br/>")
// }
// 
// ----------------------------------------------------------------------------------------------

//        Q#6
// 
// The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. 
// a.  Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”. 
// c. Now store a Fahrenheit temperature into a variable. 
// d. Convert it to Celsius & output “NNoF is NNoC
// document.write("Celcius to fehrenheit" + "<br/>")
// var cel = +prompt("enter temperature in celcius")
// var fer = (cel * 9/5) + 32
// document.write(cel + "°C is " + fer + "°F"+ "<br/>")
// document.write("fahrenheit to celcius" + "<br/>")
// var fer1 = +prompt("enter temperature in fahrenheit")
// var cel1 = (fer1 - 32) * 5/9
// document.write(fer1 + "°F is " + cel1 + "°C" + "<br/>")
// 
// -------------------------------------------------------------------------------------------------
// 
//         Q#7
// 
//  Write a program to implement checkout process of a shopping cart system for an e-commerce website. 
// Store the following in variables
// a. Price of item 1 
// b. Price of item 2 
// c. Ordered quantity of item 1 
// d. Ordered Quantity of item 2 
// e. Shipping charges
// 
// var quan1 = +prompt("how much quantity of item 1 you want (each = 940Rs)")
// var quan2 = +prompt("how much quantity of item 2 you want (each = 650Rs)")
// var price1 = 940
// var price2 = 650
// document.write("price of item 1 is " + price1 + "<br/>")
// document.write("total price of "+ quan1 + " items is "+ (quan1 * price1) + "<br/>")
// document.write("price of item 2 is " + price2 + "<br/>")
// document.write("total price of "+ quan2 + " items is "+ (quan2 * price2) + "<br/>")
// document.write("shipping charges = 100RS" + "<br/>")
// document.write("Total cost of your order is " + ((quan1 * price1)+(quan2 * price2)))
// 
// ---------------------------------------------------------------------------------------------------

//          Q#8

// Store total marks & marks obtained by a student in 2 variables.
//  Compute the percentage & show the result in your browser
// var total = +prompt("enter you total marks");
// var obtained = +prompt("enter your obatined marks")
// document.write("Your percentage is " + Math.ceil((obtained/total)*100) + "%")
// 
//---------------------------------------------------------------------------------------------------------
// 
//          Q#9
// Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression
// . (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee
// var dollar = 10;
// var riyal = 25;
// document.write("Total " + ((dollar*104.80) + (riyal*28)) + "Rs")
// 
// -------------------------------------------------------------------------------------------------------
// 
//         Q#10
// Write a program to initialize a variable with some number and do arithmetic in following sequence: 
// a. Add 5
//  b. Multiply by 10
//   c. Divide the result by 2 Perform all calculations in a single expression
// var number = 10;
// var number = (((number+5)*10)/2)
// document.write(number)
// 
// --------------------------------------------------------------------------------------------------------

//             Q#11
// The Age Calculator: Forgot how old someone is? Calculate it! 
// a. Store the current year in a variable. 
// b. Store their birth year in a variable. 
// c. Calculate their 2 possible ages based on the stored values. 
// Output them to the screen like so: “They are either NN or NN years old”. 
// var currentYear = +prompt("enter the current year");
// var birthYear = +prompt("enter your birth year");
// var age = currentYear - birthYear;
// document.write("current year " + currentYear + "<br/>")
// document.write("year of birth " + birthYear + "<br/>")
// document.write("Age = " + age)
// 
// -------------------------------------------------------------------------------------------------------s
// 
//           Q#12
// 
// The Geometrizer: Calculate properties of a circle. a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and output “The circumference is NN”.
//  (Hint : Circumference of a circle = 2 π r , π = 3.142) Calculate the area based on the radius, 
// and output “The  area is NN”. (Hint : Area of a circle = π r2, π = 3.142) 

// var radius = 5;
// document.write("the circumference is " + Math.ceil((2*3.142)*radius) + " unit" + "<br/>")
// document.write("the area is " + Math.ceil((3.142)*(radius*radius)) + " square unit")

// -----------------------------------------------------------------------------------------------------------
// 
//        Q#13
// 
// The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? 
// Wonder no more. a. Store your favorite snack into a variable b. Store your current age into a variable. 
// c. Store a maximum age into a variable. d. Store an estimated amount per day (as a number). 
// e. Calculate how many would you eat total for the rest of your life. 
// // Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”
// var snack = "Wavy flamin hot";
// var minAge = 20;
// var maxAge = 55
// var cost = 50;
// document.write("You will need " + (((maxAge-minAge)*12)*365) + " to last you until the ripe old age of " + maxAge)

//----------------------------------------------------------------------------------------------------------- 
//----------------------------------------------------------------------------------------------------------- 
//----------------------------------------------------------------------------------------------------------- 
//----------------------------------------------------------------------------------------------------------- 
//----------------------------------------------------------------------------------------------------------- 
//----------------------------------------------------------------------------------------------------------- 
//----------------------------------------------------------------------------------------------------------- 
//----------------------------------------------------------------------------------------------------------- 
//----------------------------------------------------------------------------------------------------------- 
//----------------------------------------------------------------------------------------------------------- 
//----------------------------------------------------------------------------------------------------------- 
//----------------------------------------------------------------------------------------------------------- 
//----------------------------------------------------------------------------------------------------------- 
//----------------------------------------------------------------------------------------------------------- 
//----------------------------------------------------------------------------------------------------------- 
//----------------------------------------------------------------------------------------------------------- 
//----------------------------------------------------------------------------------------------------------- 