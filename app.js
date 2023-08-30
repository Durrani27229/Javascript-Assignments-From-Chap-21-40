
// ========== Chapter 21 (Changing Case) ==========





// ======== Question 1 ========
// Type the characters that are missing from this code. 
// var allLower = userInput.toLowerCase;
// Note: Correct this statement by yourself.

// ======== Answer 1 ========

// var userInput = prompt();
// var allLower = userInput.toLowerCase();
// console.log(allLower);

// ======== Question 2 ========
// Convert the string represented by x to lower-case and assign the result to the same variable.

// ======== Answer 2 ========

// var x = prompt();
// x = x.toLowerCase();
// console.log(x);

// ======== Question 3 ========
// Convert the string represented by y to upper-case and assign the result to the same variable.

// ======== Answer 3 ========

// var y = prompt();
// y = y.toUpperCase();
// console.log(y);

// ======== Question 4 ========
// Convert the string represented by a variable to lower-case and assign the result to a second variable that hasn't been declared beforehand.

// ======== Answer 4 ========

// var x = prompt();
// var y = x.toLowerCase();
// console.log(y);

// ======== Question 5 ========
// Convert the string represented by an array element to lower-case and assign it to a variable that hasn't been declared beforehand.

// ======== Answer 5 ========

// var userName = ["Usama","Noman","Danish","Faraz"];
// var convertedArr = userName[0].toLowerCase(); // jis bhi index ko lower case karna ho uska index number dal dain
// console.log(convertedArr);

// ======== Question 6 ========
// Display in an alert the upper-case version of the string represented by a variable.

// ======== Answer 6 ========

// var x = prompt();
// var y = x.toUpperCase();
// alert(y);

// ======== Question 7 ========
// var cityName = “kaRacHi”;
// Convert the string represented by a cityName in Capitalisation is the writing of a word with its first letter in uppercase and the remaining letters in lowercase.

// ======== Answer 7 ========

// Method 1

// var cityName = "kaRacHi";
// var firstChar = cityName.slice(0,1);
// firstChar = firstChar.toUpperCase();
// var otherChar = cityName.slice(1);
// otherChar = otherChar.toLowerCase();
// var convertedCityName = firstChar + otherChar;
// console.log(convertedCityName);

// Method 2
// var cityName = "kaRacHi";
// var convertedCityName = cityName.slice(0,1).toUpperCase() + cityName.slice(1).toLowerCase();
// console.log(convertedCityName);




// ========== Chapter 22 - 25 (Strings) ==========





// ======== Question 1 ========
// "captain" has been assigned to variable “sameWords”. You want to slice "ap" out of it.

// ======== Answer 1 ========

// var sameWords = "captain";
// var copy = sameWords.slice(1,3);
// console.log(copy);

// ======== Question 2 ========
// The number of characters in the string will be assigned to the variable.

// ======== Answer 2 ========

// var x = "Hello World"
// var y = x.length;
// console.log(y);

// ======== Question 3 ========
// The string "elephant" has been assigned to the variable animal. Slice the four middle characters out of the string and assign it to the variable seg, which hasn't been declared beforehand.

// ======== Answer 3 ========

// var animal = "elephant";
// var seg = animal.slice(2,6);
// console.log(seg);

// ======== Question 4 ========
// Find the number of characters in the string represented by a variable and assign the number to a second variable.

// ======== Answer 4 ========

// var x = "Hello World"
// var y = x.length;
// console.log(y);


// ======== Question 5 ========
// In a first statement measure how many characters there are in a string represented by a variable. In a second statement slice all but the first character and last 3 characters of the string and assign it to a second variable that hasn't been declared beforehand.

// ======== Answer 5 ========

// var animal = "Elephant";
// console.log(animal.length);
// var afterSlice = animal.slice(1,5);
// console.log(afterSlice);


// ======== Question 6 ========

// var text = "To be or not to be."; 
// var indx = text.indexOf("be"); 
// What is the value of indx?

// ======== Answer 6 ========

// var text = "To be or not to be."
// var indx = text.indexOf("be");
// console.log("the value of indx is " + indx);

// ======== Question 7 ========
// var text = "To be or not to be."; 
// var indx = text.lastIndexOf("be"); 
// What is the value of indx?
// Note: Try the above both examples by yourself.

// ======== Answer 7 ========

// var text = "To be or not to be."
// var indx = text.lastIndexOf("be");
// console.log("the value of indx is " + indx);

// ======== Question 8 ========
// Find the index of the first character of the last instance of "go" in the string represented by the variable text and assign the number to the variable indx, which hasn't been declared beforehand.

// ======== Answer 8 ========

// var text = "To be or not to be."
// var indx = text.indexOf("T");
// console.log(indx);


// ======== Question 9 ========
// Code the first line of an if statement that tests whether a segment with an index represented by indexNum exists in a string.

// ======== Answer 9 ========

// var userName = "Muhammad Usama Masood";
// var indexNum = userName.indexOf("Usama");
// console.log(indexNum);
// if (indexNum == 9){
//     var firstName = userName.slice(0,9)
//     var middle = "Bilal";
//     var lastName = userName.slice(indexNum + 5);
//     console.log(firstName + middle + lastName);
// }

// ======== Question 10 ========
// In this string "abcde", what character is at index 2? (Use charAt)

// ======== Answer 10 ========

// var x = "abcde";
// var y = x.charAt(2)
// console.log(y + " is at index 2");

// ======== Question 11 ========
// Find the 10th character in the string represented by text and assign it to the variable cha, which hasn't been declared beforehand.

// ======== Answer 11 ========

// var text = "Muhammad Usama Masood";
// var cha = text.charAt(9);
// console.log(cha);

// ======== Question 12 ========
// Find the last character in the string represented by str and assign it to x, which hasn't been declared beforehand.

// ======== Answer 12 ========

// var str = "Jawan Pakistan";
// var x = str.charAt(13)
// console.log(x);

// ======== Question 13 ========
// Find the the 5th character in a string represented by input and assign it to cha, which hasn't been declared beforehand.

// ======== Answer 13 ========

// var input = "Jawan Pakistan";
// var cha = input.charAt(4);
// console.log(cha);

// ======== Question 14 ========
// Code the first line of an if statement that tests whether the 3rd character of a string represented by a variable is a particular character.

// ======== Answer 14 ========

// var str = "Jawan Pakistan";
// var indx = str.charAt(2);
// console.log(indx);
// if(indx !== ""){
//     console.log("a particular character");
// }else{
//     console.log("not a particular character");
// }



// ======== Question 15 ========
// Code a for loop that cycles through all the characters of a string represented by a variable and assigns each character to an element of an array that has been declared beforehand.
 
// In the string represented by reply replace the first instance of "no" with "yes" and assign the revised string to revisedReply, which hasn't been declared beforehand.


// ======== Answer 15 ========

// var text = "Hello World";
// var arr = [];
// for (var i = 0; i < text.length; i++){
//     arr.push(text[i]);
// }
// console.log(arr);



// var reply = "I said no, but she insisted no.";
// var revisedReply = reply.replace("no", "yes");

// console.log(revisedReply); // is me sirf first no replace hoa h yes k sth


// ======== Question 16 ========
// 16.	In a string represented by str replace the first instance of "1" with "one" and assign the revised string to newStr, which hasn't been declared beforehand.

// ======== Answer 16 ========

// var str = "There are 1 apples and 2 bananas.";
// var newStr = str.replace("1", "one");

// console.log(newStr);


// ======== Question 17 ========
// 17.	If you want all instances replaced, enter 3 characters that need to appear in this statement.
// var y = x.replace("a", "z");

// ======== Answer 17 ========

// var y = x.replace(/a/g, "z");



// ========== Chapter 26 (Rounding Numbers) ==========





// ======== Question 1 ========
// Form a statement that rounds a number to the nearest integer.

// ======== Answer 1 ========

// var x = 2.785;
// var y = Math.round(x);
// console.log(y);

// ======== Question 2 ========
// Round up a number represented by origNum and assign it to roundNum, which hasn't been declared beforehand.

// ======== Answer 2 ========

// var origNum = +prompt();
// var roundNum = Math.ceil(origNum);
// console.log(roundNum);

// ======== Question 3 ========
// Round down a number represented by origNum and assign it to roundNum, which hasn't been declared beforehand.

// ======== Answer 3 ========

// var origNum = +prompt();
// var roundNum = Math.floor(origNum);
// console.log(roundNum);

// ======== Question 4 ========
// Round a number represented by a variable and assign the result to a second variable that hasn't been declared beforehand.

// ======== Answer 4 ========

// var x = 2.785;
// var y = Math.round(x);
// console.log(y);

// ======== Question 5 ========
// Round .5 to 0 and assign it to a variable that hasn't been declared beforehand.

// ======== Answer 5 ========

// var x = 0.5;
// var y = Math.floor(x);
// console.log(y);





// ========== Chapter 27 (Random Numbers) ==========





// ======== Question 1 ========
// Convert a random number generated by JavaScript to a number in the range 1 to 50

// ======== Answer 1 ========

// var x = Math.random();
// var y = x + 5;
// console.log(y);

// ======== Question 2 ========
// Generate a random number and assign it to a variable that hasn't been declared beforehand.

// ======== Answer 2 ========

// var x = Math.random();
// var y = x;
// console.log(y);

// ======== Question 3 ========
// You have to create a dice in JavaScript with the use of pseudo- random number.

// ======== Answer 3 ========

// var dice = Math.floor(Math.random()*6)+1;
// console.log(dice);

// ======== Question 4 ========
// You have to create a toss (head/tail) in JavaScript with the use of pseudo-random number.

// ======== Answer 4 ========

// var randomNumber = Math.random();
// var roundNum = Math.round(randomNumber);
// if (roundNum > 0){
//     console.log("Heads");
// }else{
//     console.log("Tails");
// }



// ========== Chapter 28, 29 (Converting Strings) ==========





// ======== Question 1 ========
// How do you convert a string to an integer in JavaScript?

// ======== Answer 1 ========

// There are many methods to convert strings into integer.
// For example
// var a = "2.45"; // we can convert it into integer with following methods. 
// var b = Number(a); // display with decimal
// var c = parseFloat(a); // display with decimal
// var d = parseInt(a); // display without decimal
// console.log(d);



// ======== Question 2 ========
// Write a JavaScript function to convert the string "123" to an integer.

// ======== Answer 2 ========

// var x = "123";
// var y = Number(x); // We can also use parseInt/parseFloat instead of Number
// console.log(y);


// ======== Question 3 ========
// How can you convert a string containing a decimal number to a floating-point number in JavaScript?

// ======== Answer 3 ========

// var x = "123.56";
// var y = parseFloat(x); // We can also use Number instead of parseFloat
// console.log(y);

// ======== Question 4 ========
// How can you check if a string can be successfully converted to an integer or decimal in JavaScript before performing the conversion?

// ======== Answer 4 ========

// var x = "123.56";
// var y = parseFloat(x);
// console.log(x);
// console.log(y);


// ======== Question 5 ========

// How can you convert a number to a string in JavaScript?

// ======== Answer 5 ========

// var num = 234;
// var str = num.toString();
// console.log(str);

// ======== Question 6 ========
// Write a JavaScript function to convert the number 42 to a string.

// ======== Answer 6 ========

// var num = 42;
// var str = num.toString();
// console.log(str);

// ======== Question 7 ========
// Can you convert a string representing a decimal number (e.g., "3.14") to an integer in JavaScript? If so, how?

// ======== Answer 7 ========

// var x = "3.14";
// var y = parseInt(x);
// console.log(y);




// ========== Chapter 30 (Controlling the length of decimals) ==========





// ======== Question 1 ========
// Code a statement that rounds a number represented by num to 4 places, converts it to a string, and assigns it to newNum, which hasn't been declared beforehand.

// ======== Answer 1 ========

// var num = 34.6784;
// var roundNum = Math.round(num);
// var newNum = roundNum.toString();
// console.log(newNum);

// ======== Question 2 ========
// In a single statement round a number represented by a variable to 2 places, convert it to a string, convert it back to a number, and assign it to the same variable.
 
// ======== Answer 2 ========

// var num = 2.24;
// var newNum = Math.round(num);
// var str = newNum.toString();
// console.log(str);
// num = Number(str); 
// console.log(num);


// ======== Question 3 ========
// Code the first line of an if statement that tests whether the number represented by num, rounded to 2 digits and converted to a string, has more than 4 characters in it.

// ======== Answer 3 ========

// var num = 2.1356445;
// num = num.toFixed(2).toString();
// console.log(num);
// console.log(num.length);
// if (num.charAt(num.length-1) > "4"){
//     console.log("YEs it has more");
// }else{
//     console.log("No Not More Than Four");
// }

// ======== Question 4 ========
// Assign a number with many decimal places to a variable.
// Code an alert that displays the number rounded to 2 decimal places and converted to a string.

// ======== Answer 4 ========

// var num = 2.45562413;
// var newNum = num.toFixed(2);
// var str = newNum.toString();
// alert(str);
// // in single statment
// alert(num.toFixed(2).toString()); 



// ========== Chapter 31 - 34 (Date & Time) ==========





// ======== Question 1 ========
// Code a statement that creates a new Date object and assigns it to dObj, which hasn't been declared beforehand.

// ======== Answer 1 ========

// var dObj = new Date();
// console.log(dObj);

// ======== Question 2 ========
// Code a statement that creates a new Date object, converts it to a string, and assigns the string to dStr, which hasn't been declared beforehand.

// ======== Answer 2 ========

// var dObj = new Date();
// var dStr = dObj.toString();
// console.log(dStr);

// ======== Question 3 ========
// Code a statement that extracts the day of the week from a Date object represented by d and assigns it to day, which hasn't been declared beforehand.

// ======== Answer 3 ========

// var d = new Date();
// var day = d.getDay();
// console.log(day);

// ======== Question 4 ========
// The day has been extracted from the Date object and assigned to d. The names of the days of the week have been assigned to the array dayNames. Alert the current day with array index.

// ======== Answer 4 ========

// var dObj = new Date();
// var d = dObj.getDay();
// var dayNames = ["Sun","Mon","Tue","Wed","Thr","Fri","Sat"];
// var currentDay = dayNames[d];
// console.log(currentDay);


// ======== Question 5 ========
// Extract all parts of the Date and Time and assign it to the variable which has not been declared beforehand.

// ======== Answer 5 ========

// var dObj = new Date();
// var day = dObj.getDay();
// var month = dObj.getMonth();
// var date = dObj.getDate();
// var year = dObj.getFullYear();
// var time = dObj.getHours();
// var time2 = dObj.getMinutes();
// var time3 = dObj.getSeconds();
// console.log(dObj);
// console.log(day);
// console.log(month);
// console.log(date);
// console.log(year);
// console.log(time);
// console.log(time2);
// console.log(time3);

// ======== Question 6 ========
// Code a statement that creates a Date object for the last day of the last month of 2020 and assigns it to later, which hasn't been declared beforehand.

// ======== Answer 6 ========

// var later = new Date("Dec 31,2020");
// console.log(later);

// ======== Question 7 ========
// Create a Date object for the second day of the second month of 1992 and assign it to a variable that hasn't been declared beforehand.

// ======== Answer 7 ========

// var date = new Date("Feb 02,1992");
// console.log(date);

// ======== Question 8 ========
// Code a single statement that displays in an alert the milliseconds that elapsed between the reference date and the beginning of 1980.

// ======== Answer 8 ========

// var refDate = new Date();
// var begnDate = new Date("Jan 01,1980");
// alert(refDate-begnDate); 

// ======== Question 9 ========
// How do you change the year of a date in JavaScript?

// ======== Answer 9 ========

// var date = new Date();
// date.setFullYear(2001);
// console.log(date);

// ======== Question 10 ========
// Write a JavaScript function to change the month of a given date to January.

// ======== Answer 10 ========

// var date = new Date();
// date.setMonth(0);
// console.log(date);

// ======== Question 11 ========
// What is the method to change the day of the week for a specific date in JavaScript?

// ======== Answer 11 ========

// var date = new Date("Jan 01,2023");
// date.setDate(5);
// console.log(date);

// ======== Question 12 ========
// Write a JavaScript function to change the minutes of a given time to a specific value. 
// (Value by prompt)

// ======== Answer 12 ========

// var givenTime = new Date();
// var value = +prompt();
// givenTime.setMinutes(value);
// console.log(givenTime);

// ======== Question 13 ========
// Write a JavaScript function to add a specific number of hours to a given time.

// ======== Answer 13 ========

// var givenTime = new Date();
// var addHours = 5;
// givenTime.setHours(addHours);
// console.log(givenTime);

// ======== Question 14 ========
// 14.	You have to create a age calculator in JavaScript.

// ======== Answer 14 ========

// var dOb = new Date("July 16,1996");
// var todayDate = new Date();
// var ageMili = todayDate - dOb;
// var ageYear = ageMili/(1000*60*60*24*30*12);
// var age = Math.floor(ageYear);
// console.log(age);






// ========== Chapter 35 - 37 (Functions) ==========





// ======== Question 1 ========

// 1.	Code the first line of a function displayAlert.

// ======== Answer 1 ========

// function displayAlert(){
//     alert("Hello World!")
// }
// displayAlert()

// ======== Question 2 ========
// Code a function named askName that prompts the user to "Enter name" and assigns the answer to userName, which hasn't been declared beforehand.

// ======== Answer 2 ========

// function askName(userName){
//     console.log(userName);
// }
// askName(prompt("Enter Name"));

// ======== Question 3 ========
// Code a function that calls 2 other functions.

// ======== Answer 3 ========

// used 2 pre-defined function in one function
// function twoFunction(){
//     var userName = prompt();
//     alert(userName);
// }
// twoFunction();


// function fun1(){
//     console.log("This is Function One");
// }

// function fun2(){
//     console.log("This is Function Two");
// }

// function fun(){
//     fun1();
//     fun2();
// }
// fun();

// ======== Question 4 ========
// Code a function that displays a prompt, "Enter name" and then displays the name in an alert. Call the function.

// ======== Answer 4 ========

// function yourName(){
//     var userName = prompt();
//     alert(userName);
// }
// yourName();

// ======== Question 5 ========
// Code the first line of a function named concat that has 3 parameters, the first three letters of the alphabet. Call that takes a variable, a string, and a number as arguments.

// ======== Answer 5 ========

// var userName = "Usama";
// function concat(a,b,c){
//     console.log(a + b + " " + c);
// }
// concat("Hello ",userName,10);

// ======== Question 6 ========
// Code a function that has 2 parameters. Concatenate them and assign the result to a variable that hasn't been declared beforehand.

// ======== Answer 6 ========

// function calc(a,b){
//     var result = a + b;
//     console.log(result);
// }
// calc(5,10);

// ======== Question 7 ========
// Code a function that has three parameters. Multiply them and assign them to a variable that hasn't been declared yet.

// ======== Answer 7 ========

// function calc(a,b,c){
//     var result = a * b *c;
//     console.log(result);
// }
// calc(5,2,6);

// ======== Question 8 ========
// Write a JavaScript function that takes an array of numbers as input and returns the average of those numbers.

// ======== Answer 8 ========

// function findAverage(array){
//     var average = 0;
//     for (var i = 0; i < array.length; i++){
//         var currentNumber = array[i];
//         average += currentNumber;
//     }
//     average = average / array.length;
//     return average;
// }
// var avg = findAverage([5 , 5 , 5]);
// console.log(avg);

// ======== Question 9 ========
// Write a JavaScript function that takes two parameters and returns their sum.

// ======== Answer 9 ========

// function calc(a,b){
//     var sum = a + b;
//     return sum ;
// }

// var x = calc(5,15);
// console.log(x);

// ======== Question 10 ========
// Write a JavaScript function that takes an array of numbers as input and returns the average of those numbers.

// ======== Answer 10 ========

// function findAverage(array){
//     var average = 0;
//     for (var i = 0; i < array.length; i++){
//         var currentNumber = array[i];
//         average += currentNumber;
//     }
//     average = average / array.length;
//     return average;
// }
// var avg = findAverage([5 , 5 , 5]);
// console.log(avg);

// ======== Question 11 ========
// You have to capture the returned value from a function and store it in a variable?

// ======== Answer 11 ========

// function calc(a,b){
//     var sum = a + b;
//     return sum ;
// }

// var x = calc(5,15);
// console.log(x);

// ======== Question 12 ========
// Write a function which tells letter counts of (word).

// ======== Answer 12 ========

// function count(){
//     var letter = "word";
//     for (var i = 0; i < letter.length; i++){
//         console.log(letter[i]+ " " + i );
//     }
// }
// count();

// ======== Question 13 ========
// Write a function to set (year) in date object.

// ======== Answer 13 ========

// function setYear(x){
//     var date = new Date();
//     date.setFullYear(x)
//     console.log(date);
// }
// setYear(2006);

// ======== Question 14 ========
// Write a function which tells the age of a person who Born on (dateOfBirth)

// ======== Answer 14 ========

// function dOb(x){
//     var dateOfBirth = new Date(x);
//     var todayDate = new Date();
//     var ageMili = todayDate - dateOfBirth;
//     var ageYear = ageMili/(1000*60*60*24*30*12);
//     var age = Math.floor(ageYear)
//     console.log(age);
// }
// dOb("16 July,1996");

// ======== Question 15 ========
// Write a function which tells the presense of (word) in an array = ['zaid','haris','raza','abubakar','hassan','hussain','fatima'] result should be in true or false

// ======== Answer 15 ========

// function presense(x){
//     var arr = ['zaid','haris','raza','abubakar','hassan','hussain','fatima'];
//     var flag = false;
//     for (var i = 0; i < arr.length ; i++){
//         if (arr[i] === x ){
//             console.log("true");   
//             flag = true;
//             break;         
//         }
// }  if (flag === false){
//     console.log("false");
// }
// }
// presense(prompt());

// ======== Question 16 ========
// Write a function which repeat (letter) 10 times. Hint: "abcde" str.repeat(10)

// ======== Answer 16 ========

// function repeat(x){
//     var letter = x;
//     var repeat = letter.repeat(10);
//     console.log(repeat);
// }
// repeat("Hello ");

// ======== Question 17 ========
// write a function which reverse array = ['a','b','c','d','e'] Hint: arr.reverse()

// ======== Answer 17 ========

// function arrayReverse(x){
//     var arr = x;
//     var arrayReverse = arr.reverse();
//     console.log(arrayReverse);
// }
// arrayReverse(['a','b','c','d','e']);





// ========== Chapter 38 (Local vs. Global Variables) ==========





// ======== Question 1 ========
// Write a JavaScript function that demonstrates the usage of a local variable.

// ======== Answer 1 ========

// function cal(a,b){
//    var result = a+b;
//    console.log(result);
// }
// cal(2,2)

// ======== Question 2 ========
// How can you access a global variable inside a function in JavaScript?

// ======== Answer 2 ======== 

// var a = "Welcome";
// console.log(a);

// function abc(){
//     a = "Welcome to our institue";
// }
// abc();
// console.log(a);

// ========== Chapter 39, 40 (Switch Statements) ==========





// ======== Question 1 ========
// Write a JavaScript switch statement that checks the value of a variable and performs different actions based on different cases.

// ======== Answer 1 ========

// var daysOfWeek = prompt();
// var convertedDaysOfWeek = daysOfWeek.toLowerCase();
// switch(convertedDaysOfWeek){
//     case "sun":
//         alert("It's Holiday");
//         break;
//         case "sat":
//             alert("It's a Half Day");
//             break;
//             default:
//                 alert("It's a Working Day");
// }

// ======== Question 2 ========
// Write a JavaScript switch statement that check whether cityName given by user check the cityName if match alert the user and  break the statement, if not default message will be shown to user.

// ======== Answer 2 ========

// var cityName = prompt();
// var cities = ["karachi","islamabad","lahore"];
// switch(cityName){
//     case "karachi":
//         alert("city match");
//         break;
//         case "islamabad":
//             alert("city match");
//             break;
//             case "lahore":
//                 alert("city match");
//                 break;
//                 default:
//                     alert("city not match");
// }



// ================= THE END =================
