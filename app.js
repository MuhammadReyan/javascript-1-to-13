//  Chapter 1

/**  let a = " Error! Please enter a valid password.";
alert(a)

let b = " Welcome to JS Land...\n Happy Coding!";
alert(b)
let c = " Welcome to JS Lands...";
alert(c)

let d = "Happy Coding!";
alert(d)

let e = " Hello.. I can run JS through my web brower's  console";
alert(e)
console.log(e)
**/

// Chapter 2

// var username = "Hello";
// alert(username)

// var Name = "Reyan"
// alert(Name)

// var fullName = "Muhammad Reyan";
// alert(fullName)

// var age = " 15 years old";
// alert(age)

// var bio = "Certified Mobile Application Development";
// alert(bio)

// var email = "example.@example.com";
// alert("My email address is " + (email))

// var book = " A Smarter way to learn Javascript";
// alert(book)

// var string = "";
// alert(string)


// var design = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”"
// alert(design)


//  Chapter 3


// var age = " iam 15 years old" ;
// alert(age)

// var track1 = "You have visited this site 14 times" ;
// alert(track1)
// var track2 = "You have visited this site 15 times" ;
// alert(track2)

// var birth = "My birth year is 1990";
// document.write(birth)

// var visit = 14;
// var visit = prompt("What is") ;
// alert (`you have visited this site ${ visit } times`)
// alert("you have visited this site" + visit + "times");


// var visitername = "John Doe";
// var producttitle = " 5 T-shirt(s)";
// var companyname = " on XYZ Clothing store";
// document.write(visitername + ' ' + "ordered" + producttitle + ' ' + companyname)
// document.write(`${visitername} ${producttitle} ${companyname}`)


// Chapter 4 variable name legal and illegal

// var first$Nam = "Muhammad", last_Nam = "Reyan", $age = 19;
// alert(`my name is    ${first$Nam} ${last_Nam} and my is ${$age}`)

//  Five legal variable

// var firstName = "Muhammad";
// var last_name = "Reyan";
// var age$ = 19;
// var $favoriteGame = "cricket";
// var $favoritekhel = "CS GO";

//  Five illegal variable

// var 1firstName = "Muhammad";
// var last+name = "Reyan";
// var age% = 19;
// var var  = "cricket";
// var favorite khel = "CS GO";


//        Chapter 5


// var three = 3;
// var five = 5 ;
// document.write("sum of 3 and 5 is " + (three + five))
// var three = 3;
// var five = 5 ;
// document.write("sub of 3 and 5 is " + (three * five))
// var three = 3;
// var five = 5 ;
// document.write("moduls of 3 and 5 is " + (three % five))



//      Declare a varriable

// var apnaNum;
// document.write(`Value after variable declaraiton is undefined <br>`)


// //  initialize  the variable with some number

// var apnaNum = 5;
// document.write(`initialize value ${apnaNum}<br> `)


// // increment the variable

// var incremenNum = ++apnaNum;
// document.write(` value after increment is: ${incremenNum} <br>`)

// // add 7 variable

// var addIncremenNum = incremenNum + 7;
// document.write(` value after addition is: ${addIncremenNum} <br>`)

// // Decrement the variable

// var Decrement = --addIncremenNum;

// document.write(` value after decrement is: ${Decrement} <br>`)

// // remaindar aftar Decrement
// var divide = Decrement - 12 / 1;
// document.write(`the remaindar is ${divide}:`)


// QUESTION no 6

// var fahrenheit = Number(prompt("What is fahrenheit.??"));
// var celsius = Number(prompt("What is celsius.??"));
// var ctempToF = (celsius * 9 / 5) + 32;
// var ftempToC = (fahrenheit - 32) * 5 / 9;
// document.write(`${ctempToF}C is ${ftempToC}F <br>`)
// document.write(`${ftempToC}C is ${ctempToF}F <br>`)

// question 7

// var priceOfitem1 = 650;
// document.write(`Price of item 1 is ${priceOfitem1} <br>`)

// var Quantityofitem1 = 3;
// document.write(`Quantity of item 1 is ${Quantityofitem1} <br>`)

// var PriceOfitem2 = 100;
// document.write(`Price of item 2 is ${PriceOfitem2} <br>`)

// var Quantityofitem2 = 7;
// document.write(`Quantity of item 2 is ${Quantityofitem2} <br>`)

// var shipping = 100;
// document.write(`Shipping Charge is ${shipping} <br>`)

// document.write(`Total cost of your order is ${priceOfitem1 * Quantityofitem1 + PriceOfitem2 * Quantityofitem2 + shipping}  `)

// Question 8

// var totalmark = 980;
// document.write(`Total mark ${totalmark} <br>`)
// var markobtaied = 804;
// document.write(`mark obtaied  ${markobtaied} <br>`)
// document.write(`Percentage ${markobtaied * 100 / totalmark}%`)


//  Question 9

// var dollar = 104.80;
// var riyal = 28;
// document.write(`Total Currency in PKR: ${dollar * 10 + riyal * 25}`)

// Question no 10

// var myNumber = 2 + 5 * 10 / 2;
// alert(myNumber)


//    Question 11

// var CurrentYear = 2016;
// var BirthYear = 1992;
// document.write(`Current Year ${CurrentYear} <br> Birth Year ${BirthYear} <br>`)
// document.write(`Your Age is : ${CurrentYear - BirthYear}`)

// Question 12



// var radius = (prompt("what is radius"));
// var circumference = Math.PI * 2 * radius;
// var area = Math.PI * radius * radius;
// document.write(`Radius of a circle : ${radius} <br>`)
// document.write(`the circumference is : ${circumference} <br>`)
// document.write(`The area is : ${area}<br>`)


// Question 13



// var favoriteSnack = "Lays";
// document.write(`Favorite Snack : ${favoriteSnack} <br>`)
// var currentage = 15;
// document.write(`Current Age : ${currentage} <br>`)
// var estimatedMaximumAge = 65 ;
// document.write(`Estimate Maximum Age : ${estimatedMaximumAge} <br>`)
// var amountOfSnackPerDay = 3;
// document.write(`Amount Of Snack Per Day : ${amountOfSnackPerDay} <br>`)

// document.write(`You will need ${amountOfSnackPerDay * estimatedMaximumAge - ( currentage * 3) } Lays to last you until the ripe old age of ${estimatedMaximumAge} `)

// 65 - 15 50 * 3 *12 * 30



//    Chapter no 6 7 8 9


// Question no 1

// var result = "Result :";
// document.write(`${result} <br>`)


// var a = 10;
// document.write(`The value of a is : ${a}<br>`)

// var a = 10 + 1;
// document.write(`the value of ++a is: ${a}<br>Now the value of a : ${a} <br>`)


// var a = 10 + 1;
// document.write(`the value of ++a is: ${a}<br>Now the value of a : ${a + 1}`)


// var a = 10 + 1;
// document.write(`the value of --a is: ${a}<br>Now the value of a : ${a} <br>`)

// var a = 10 + 1;
// document.write(`the value of a-- is: ${a}<br>Now the value of a : ${a - 1} <br>`)


// Question no 2


// var a = 2, b = 1;
// document.write(`a is ${a} <br>`)
// document.write(`b is ${b} <br>`)

// let result = --a;
// document.write(`result is ${result} <br>`)

// result = --a - --b;
// document.write(`result is ${result} <br>`)

// result = --a - --b + ++b;
// document.write(`result is ${result} <br>`)


// result = --a - --b + ++b + b--;
// document.write(`result is ${result} <br>`)


// Question no 3

// var username = (prompt('Whats  your good name'));
//  alert(`Welcome  ${username}`)


// Question no 4 / 5
// var table = Number(prompt("konsa table chaye ?"))


// document.write(`table of ${5} <br>`)
// document.write(`${5} X 1 = ${5 * 1} <br>`)
// document.write(`${5} X 2 = ${5 * 2} <br>`)
// document.write(`${5} X 3 = ${5 * 3} <br>`)
// document.write(`${5} X 4 = ${5 * 4} <br>`)
// document.write(`${5} X 5 = ${5 * 5} <br>`)
// document.write(`${5} X 6 = ${5 * 6} <br>`)
// document.write(`${5} X 7 = ${5 * 7} <br>`)
// document.write(`${5} X 8 = ${5 * 8} <br>`)
// document.write(`${5} X 9 = ${5 * 8} <br>`)
// document.write(`${5} X 10 = ${5 * 10} <br>`)

// document.write(`table of ${table} <br>`)
// document.write(`${table} X 1 = ${table * 1} <br>`)
// document.write(`${table} X 2 = ${table * 2} <br>`)
// document.write(`${table} X 3 = ${table * 3} <br>`)
// document.write(`${table} X 4 = ${table * 4} <br>`)
// document.write(`${table} X 5 = ${table * 5} <br>`)
// document.write(`${table} X 6 = ${table * 6} <br>`)
// document.write(`${table} X 7 = ${table * 7} <br>`)
// document.write(`${table} X 8 = ${table * 8} <br>`)
// document.write(`${table} X 9 = ${table * 8} <br>`)
// document.write(`${table} X 10 = ${table * 10} <br>`)


// Quesiton 6



// let subjectName1 = (prompt("Please tell me first subject name"));
// let subjectName2 = (prompt("Please tell me first subject name"));
// let subjectName3 = (prompt("Please tell me first subject name"));
// let totalmarks = 100;

// let obtaiedmarkssub1 = Number(prompt("Please tell me your first subject mark"));
// let obtaiedmarkssub2 = Number(prompt("Please tell me your second subject mark"));
// let obtaiedmarkssub3 = Number(prompt("Please tell me your third subject mark"));

// let obtmarktotal1 = obtaiedmarkssub1 + obtaiedmarkssub2 + obtaiedmarkssub3;
// let totalMarkT = totalmarks * 3;


// document.write(`<table> <tr> <th>Subject</th> <th>Total Mark </th>  <th>Obtained Marks </th> <th>Percentage</th> </tr>

// <tr> <th>${subjectName1}</th> <td>${totalmarks}</td> <td>${obtaiedmarkssub1}</td> <td> ${obtaiedmarkssub1 / totalmarks * 100}%</tr>
// <tr> <th>${subjectName2}</th> <td>${totalmarks}</td> <td>${obtaiedmarkssub2}</td> <td> ${obtaiedmarkssub2 / totalmarks * 100}%</tr>
// <tr> <th>${subjectName3}</th> <td>${totalmarks}</td> <td>${obtaiedmarkssub3}</td> <td> ${obtaiedmarkssub3 / totalmarks * 100}%</tr>
// <tr> <th> </th> <th>${totalMarkT}<th>  <th> ${obtmarktotal1}</th> <th> ${obtmarktotal1 / totalMarkT * 100}%</th> </tr></table><br>
// `)




// Chapter 9 10

// question 1

// let city = prompt("Where are you form...?");
// if (city == "karachi") {
//     alert("welcome to city of light");
// } else {
//     alert("welcome ")
// }

// Question 2


// let gender = prompt("gender");
// if (gender == "male") {
//     alert("Good Morning Sir");

// } else (gender == "female")
// {
//     alert("Good Morning Maam ")
// }


// Question no 3

// let color = prompt("color of road traffic signal");

// let message1 = "Must stop";
// let message2 = "Ready to Move";
// let message3 = "Move Now";

// if (color == "red") {
//     document.write(`<table>
//     <tr><th>Signal Color </th> <th> Message </th>  </tr>
//     <tr> <th> ${color} </th> <td>${message1} </td></tr> </table> `);
// } else if (color == "yellow") {
//     document.write(`<table>
//     <tr><th>Signal Color </th> <th> Message </th>  </tr>
//     <tr> <th> ${color} </th> <td>${message2} </td></tr> </table> `);
// }
// else {
//     document.write(`<table>
//     <tr><th>Signal Color </th> <th> Message </th>  </tr>
//     <tr> <th> ${color} </th> <td>${message3} </td></tr> </table> `)
// }



// Question 4
// let fuel = Number(prompt('please tell me your fuel capacity ...?'));

// if (fuel <= 0.25) {
//     alert("please refill the fuel in your car")
// } else {
//     alert("You have enough fuel in your car.")
// }


// Question no 5

// let a = 4 ;

// if ( ++a == 5){
//     alert("given condition for variable a is true");
// }else{
//     alert("given condition for variable a is false ")
// }


// let b = 84 ;

// if ( b++ == 5){
//     alert("given condition for variable b is true");
// }else{
//     alert("given condition for variable b is false ")
// }


// let c = 14 ;

// if (c++ == 13){
//     alert(" conditon 1 is true")

// }else if (c===13){

//     alert(" conditon 2 is true")
// }else if (++c < 14){
//     alert(" conditon 3 is true")
// }else if (c ===14){
//     alert("conditon 4 is true")
// }else{
//     alert("all condition are false")
// }


// let papercost = 20000;
// let papermarker = 2000;
// let totalcost = papercost + papermarker;
// if (totalcost = papermarker + papercost) {
//     alert("the cost is equal")
// } else {
//     alert("the cost is not equal")
// }


// let yourtalk = prompt("true / false");

// if (yourtalk == "true") {
//     alert("true")

// } else if (yourtalk == "false") {
//     alert("false")
// }




//  Question 6

// let obtaiedmarkssub1 = Number(prompt("Please tell me your first subject mark"));
// let obtaiedmarkssub2 = Number(prompt("Please tell me your second subject mark"));
// let obtaiedmarkssub3 = Number(prompt("Please tell me your third subject mark"));

// let obtmarktotal1 = obtaiedmarkssub1 + obtaiedmarkssub2 + obtaiedmarkssub3;
// let totalMarkT = 300;

// let Percentage = obtmarktotal1 / totalMarkT * 100;
// document.write(`total marks : ${totalMarkT} <br>`)
// document.write(`obtained marks : ${obtmarktotal1} <br>`)
// document.write(`percentage : ${Percentage}% <br>`)

// if (Percentage >= 80) {
//     document.write(`Grade : A-one <br>`)
//     document.write(`Remarks : Excllent <br> `)
// }
// else if (Percentage >= 70) {
//     document.write(`Grade : A  <br>`)
//     document.write(`Remarks : Good <br> `)
// }
// else if (Percentage >= 60) {
//     document.write(`Grade : B  <br>`)
//     document.write(`Remarks : You need to improve <br> `)
// }
// else if (Percentage >= 50) {
//     document.write(`Grade : Fail  <br>`)
//     document.write(`Remarks : You are Fail Sorry <br> `)
// }



// Question no 7

// var guessGame = Number(prompt("Secret Number"));

// if (guessGame == 5) {
//     alert(" “Bingo! Correct Answer")
// }
// else if (guessGame == 4) {
//     alert(" Close enough to the correct answer")
// } else {
//     alert('Sorry wrong answer')
// }



// Question no 8

// let anyNumber = Number(prompt("Write a number student"));

// if (anyNumber % 3 == 0) {
//     alert("Its Possible")
// }
// else {
//     alert("Its not Possible")
// }


// Quesion no 9

// let anyNumber = Number(prompt("Write a Number"));

// if (anyNumber % 2 == 0) {
//     alert("Even Number")
// }
// else {
//     alert("Odd Number")
// }


// question 10


// var temputure = (prompt("Tody tempurture..?"));

// if (temputure > 40) {
//     alert(`It is too hot outside.`)
// }
// else if (temputure > 30) {
//     alert(`The Weather today is Normal.`)
// }
// else if (temputure > 20) {
//     alert(`Today’s Weather is cool.”.`)
// }
// else if (temputure > 10) {
//     alert(`OMG! Today’s weather is so Cool.`)
// }



//  Question no 11


// let firstNum = Number(prompt("Tell me first Number"));
// let secondNum = Number(prompt("Tell me second Number"));
// let operate = prompt('tell how can i help you ...?');


// if (operate == "+") {
//     alert(firstNum + secondNum)
// }

// else if (operate == "-") {
//     alert(firstNum - secondNum)
// }

// else if (operate == "*") {
//     alert(firstNum * secondNum)
// }

// else if (operate == "/") {
//     alert(firstNum / secondNum)
// }
// else if (operate == "%") {
//     alert(firstNum % secondNum)
// }



//  Chapter no 12  13

//    Question no 1


// let text = prompt(" write something here...");
// if (text >= "A" && text <= "Z") {
//     alert(`"${text}" is an uppercase character`)
// }
// else if (text >= "a" && text <= "z") {
//     alert(`"${text}" is an lowercase character`)
// }
// else {
//     alert(`"${text}" is not a alphabetic character`)
// }



// Question no 2

// var input1 = parseInt(prompt("Enter first number:"));
// var input2 = parseInt(prompt("Enter second number:"));
// if (input1 == input2) {
//     document.write(input1 + " is equal to " + input2);
// } else if (input1 > input2) {
//     document.write(input1 + " is larger than " + input2);
// } else {
//     document.write(input1 + " is lesser than " + input2);


//    Question 3


// var num = Number(prompt("Write Number"));

// if (num > 0) {
//     alert(`this positive`)
// }
// else if (num == 0) {
//     alert(`this zero`)
// }

// else {
//     alert(`this negative`)
// }


//   Question 4


// let alphabetic = prompt("Write  any signal lowercase alphabet");
// if (alphabetic == "a" || alphabetic == "e" || alphabetic == "o" || alphabetic == "u") {
//     alert("true")
// } else {
//     alert("false")
// }

//  QUESTION NO 5

// let myCurrentPassword = "Password123"
// let userEnterPassword = prompt("Enter A Current Password")

// if (!userEnterPassword) {
//     alert("Please Correct Password")
// } else if (myCurrentPassword == userEnterPassword) {
//     alert("Thank You For Current Passsword")
// } else {
//     alert("INCORRECT PASSWORD")
// }


//  Question 6

// var greeting;
// var hour = Number(prompt("type"));
// if (hour < 18) {
// alert(greeting = "Good day" );
// } else {
// alert(greeting = "Good evening" );
// }




// QUESTION NO 9


// let leapYear = +prompt("Enter the year")

// if (leapYear % 100 !== 0 && leapYear % 4 == 0 || leapYear % 400 == 400) {
//     console.log(`${leapYear} is a leap year`)
// } else {
//     console.log(`${leapYear} is no leap year`)
// }








//  QUESTION NO 15
// Ask the user what the current hour is. If the hour is between
// 6 and 9 a.m., tell the user, "Breakfast is served." If the hour is
// between 11 a.m. and 1 p.m., tell the user, "Time for lunch." If
// the hour is between 5 and 8 p.m., tell the user, "It's dinner
// time." For any other hours, tell the user, "Sorry, you'll have to
// wait, or go get a snack." (Hint: Store the hour in 24 hours clock
// format i.e. 14 for 2pm , 15 for 3pm) u


// let currentHour = parseInt(prompt("Enter the current hour (in 24-hour format):"));;

// if (currentHour >= 6 && currentHour < 9) {
//     console.log("Breakfast is served.");
// } else if (currentHour >= 11 && currentHour < 13) {
//     console.log("Time for lunch.");
// } else if (currentHour >= 17 && currentHour < 20) {
//     console.log("It's dinner time.");
// } else {
//     console.log("Sorry, you'll have to wait, or go get a snack.");
// }



































//  CHAPTER 14 AND 15 ARRAY

// Question NO 1

// let studentNames = [];

//   Question NO 2

// let EmptyArray = {
//     studetName : []
// }

//  Question NO 3 4 5 6

// let student = []
// let studentName = ["Student", 4, true, student];


//  Question NO 7

// let education = [
//     "SSC",
//     " HSC",
//     "BCS",
//     "B.COM",
//     "MS",
//     "M.Phil",
//     "PhD"];

// document.write(education)


//  Question 8

// let studentNames3 = ["Michael", "John", "Tony"]

// let numbers = [320, 230, 480]


// let studentPercentages = []

// for (let i = 0; i < numbers.length; i++) {
//     let percentage = (numbers[i] / 500) * 100;
//     studentPercentages.push(percentage);
// }

// for (let i = 0; i < studentNames3.length; i++) {
//     console.log(studentNames3[i] + ": Score = " + numbers[i] + ", Percentage = " + studentPercentages[i] + "%");
// }

//  Question No 9

// initlize a Array ==============start=============


// let colors = ["red", "green", "blue", "yellow", "orange",]

// document.write(colors)

// add begining array

// ==============A=============

// let colorToAdd = prompt("type array in the beginning")
// colors.unshift(colorToAdd)
// document.write("<br> update and add in the beginning array check " + colors)

// ==============B=============

// let colorToAddEnd = prompt("type array add in end")
// colors.push(colorToAddEnd)
// document.write("<br> update and add in end array check " + colors)

//  add two more array
// ==============C=============
// colors.unshift("pink", "black")

// document.write("<br> add two more array " + colors)

// delete first Array
// ==============D=============
// colors.shift()
// document.write("<br> delete first array " + colors)

// delete end array
// ==============E=============
// colors.pop()
// document.write("<br> delete end array " + colors)




// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index:


// let index = prompt("Enter the index at which you want to add a color:")
// let colorToAdd = prompt("Enter a color to add at the specified index:")
// colors.splice(index, 0, colorToAdd)
// document.write("<br> after adding specific index" + colors)



// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the specified colors:

// let index = prompt("Enter the index at which you want to delete color(s):");
// let numberOfColorsToDelete = prompt("Enter the number of colors to delete:");
// colors.splice(index, numberOfColorsToDelete);
// document.write("<br>Updated array after deleting colors from the specified index: " + colors);




//  QUESTION NO 9


// let moives = []


// moives.push(" 1) Avenger: Age OF Ultron <br>")
// moives.push(" 2) Specture <br>")
// moives.push(" 3) Jurassic World <br>")
// moives.push(" 4) Inside Out <br>")


// document.write(moives + "<br>")
// document.write("Length of array " + moives.length)













//  QUESTION NO 10



// Declare and initialize an array with some favorite cars

// const favoriteCars = ["Tesla Model S", "Audi R8", "Porsche 911", "BMW M3"];

// // Get the first index of the array

// const firstIndex = 0;

// // Get the car at the first index of the array

// const carAtFirstIndex = favoriteCars[firstIndex];

// // Get the last index of the array

// const lastIndex = favoriteCars.length - 1;

// // Get the car at the last index of the array

// const carAtLastIndex = favoriteCars[lastIndex];

// // Print the results
// console.log("First index of the array: " + firstIndex);
// console.log("Car at first index of the array: " + carAtFirstIndex);
// console.log("Last index of the array: " + lastIndex);
// console.log("Car at last index of the array: " + carAtLastIndex);

















//  QUESTION NO 11

// let cities = [" Karachi ", " Hyderbad ", " Quetta ", " Peshawar ", " Lahore "]

// let selectedCities = []

// selectedCities = cities.slice(0, 3)

// document.write("Cities" + cities + "<br>")
// document.write("Selected Cities" + selectedCities)

//  QUESTION NO 12


// let arr = ["This", "is", "my", "cat"];
// let str = arr.join(" ");

// document.write(str);


//  QUESTION NO 13


// let fruit = [];

// // Add values to the end of the array
// fruit.push("Apple");
// fruit.push("Banna");
// fruit.push("Orange");

// // Remove values from the beginning of the array
// let first = fruit.shift();
// let second = fruit.shift();
// let third = fruit.shift();

// // Display the removed values in the console

// console.log(first)
// console.log(second)
// console.log(third)



//      Question no 13

// const studentScore = [320, 230, 480, 120]

// document.write(`Scoren Of Student : ${studentScore}<br> `);

// const scoreSort = studentScore.sort()
// document.write(`Ordered Score Of student :${scoreSort} <br>`)



















//  QUESTION NO 14


// let last = [];

// // Add values to the end of the array

// last.push(1);
// last.push(2);
// last.push(3);

// // Remove values from the last of the array

// let lastvalue = last.pop();
// console.log(lastvalue)


// let second = last.pop();
// console.log(second)


// let third = last.pop();
// console.log(third)




// QUESTION NO 15


// const phoneManufacturers = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];

// document.write('<select>');
// document.write(`<option value="${phoneManufacturers[0]}">${phoneManufacturers[0]}</option>`);
// document.write(`<option value="${phoneManufacturers[1]}">${phoneManufacturers[1]}</option>`);
// document.write(`<option value="${phoneManufacturers[2]}">${phoneManufacturers[2]}</option>`);
// document.write(`<option value="${phoneManufacturers[3]}">${phoneManufacturers[3]}</option>`);
// document.write(`<option value="${phoneManufacturers[4]}">${phoneManufacturers[4]}</option>`);
// document.write(`<option value="${phoneManufacturers[5]}">${phoneManufacturers[5]}</option>`);
// document.write('</select>');





































//  FUNCTION 35 TO 38 CHAPTER

//  QUESTION NO 1


// function currentTime(){
//     let dateTime = new Date();
//     let dateTimeString = dateTime.toLocaleString();
//     alert(`The current date and time is ${dateTimeString}`)
// }
// currentTime()


//  QUESTION NO 2

// function myfunction() {
//     let firstName = prompt("Type first name")
//     let lastName = prompt("Type last name")
//     alert(" HELLO SIR")

// }
// myfunction()

// function greetUser(firstName, lastName) {
//     const fullName = `${firstName} ${lastName}`;
//     console.log(`Hello, ${fullName}!`);
//   }

// greetUser("hello", "iam")


//  QUESTION NO 3

// let a = +prompt("type number")
// let b = +prompt( " type number")

// function addsNumber(a,b)
// {
//     console.log(a + b)
// }
// addsNumber(a,b)


//  QUESTION 4






















//  QUESTION NO 5
// let num = +prompt(" Type Number For Square")

// function square(num) {
//     return num ** 2
// }
// document.write(square(num))



//  QUESTION NO 6

// function factorial(n){
//     let result = 1;
//     for (let i = 1; i <= n; i++){
//         result *=i
//     }
//     return result
// }

// let n = +prompt("Type A Number");
// document.write(factorial(n))

//  Question no 7
// function count(start, end) {
//     for (let i = start; i <= end; i++) {
//         document.write(i + "<br>");
//     }
// }

//  count(20 , 30)


//  QUESTION NO 8

// function calculateHypotenus(base, perpendicular) {
//     function square(number) {
//         return number * number
//     }
//     var hypoteuse = Math.sqrt(square(base) + square(perpendicular));
//     return hypoteuse;
// }

// let a = +prompt("Type A Number");
// let b = +prompt("Type A Number");
// let c = calculateHypotenus(a, b);
// document.write(c)


//  QUESTION NO 9

// function calculateAresWithValue(width, height) {
//     return width * height
// }

// function calculateAresWithVariabes() {
//     var width = arguments[0];
//     var height = arguments[1];
//     return width * height
// }

// var area1 = calculateAresWithValue(5, 10);
// // console.log(area1)


// var width = 6;
// var height = 8;
// var area2 = calculateAresWithVariabes(width, height);
// console.log(area2)





// QUESTION NO 10






//  QUESTION NO 11

// function capitalizeFirstLetter(str) {
//     var words = str.split(" ");
//     for (var i = 0; i < words.length; i++) {
//       var word = words[i];
//       words[i] = word.charAt(0).toUpperCase() + word.slice(1);
//     }
//     return words.join(" ");
//   }

//   // Example usage:
//   var str = prompt("type");
//   var capitalizedStr = capitalizeFirstLetter(str);
//   console.log(capitalizedStr);
// output: 'The Quick Brown Fox'



//  QUESTION NO 12

// function findString(str) {

//     let word = str.split(' ')

//     let longgestWord = ' ';

//     for (let i = 0; i < word.length; i++) {
//         if (word[i].length > longgestWord.length) {
//             longgestWord = word[i]
//         }
//     }
//     return longgestWord;
// }

// document.write(findString("Web Developeer Tutorial"))





//  QUESTION NO 13

// match /\ word ki location btata

// function counting(str,letter)
//  {
//     const count = (str.match(new RegExp(letter, 'g')) || []).length;


//     return count;
// }

// console.log(counting('JSResourceS.com', 'o'));
// console.log(counting('hello world', 'l'));



// Question no 14


// function calCircumference(radius){
//     let calCircumference = 2 * Math.PI*radius
//     console.log(`the circumference is ${calCircumference.toFixed(2)}`)
// }
// function calArea (radius){
//     let area = Math.PI * radius ** 2
//     console.log(`the area is ${area.toFixed(3)}`)

// }

// calCircumference(5)
// calArea(10)



//             OBJECT ASSINGMENT

// Q1: Write a program to create basic object structure (Object Name = “Student”)?
// Q2: Write a program to create student Object and use properties that are as given
// name = “ABS Student” ;
// age = 20;
// student_Id = 420 ;

// Show Student Properties in alert box


// var obj = {
//     name: "ABS Student",
//     age: 20,
//     student_Id: 420
// }
// alert(obj.name)
// alert(obj.age)
// alert(obj.student_Id)

// Q3: Write a program to create student bio data, following fields use in Student Object
// (First Name, Last Name, Age, ID, Contact #, Father Name, Residential Address)


// let studentObject = {
//     firstName: "Reyan",
//     lastName: "Javed",
//     age: 19,
//     iD: 4240112345678,
//     contact: 0312300445656,
//     fatherName: "Muhammad Javed",
//     residentalAddress: "Gulshan Iqbal Karachi"
// }

// console.log(studentObject)


// Q4: Write a program to create student mark sheet, use following fields in Object


// let marksheet = {
//     Student_Name: "Reyan",
//     Student_ID: 1001223446,
//     Subject_HTML: 80,
//     Student_CSS: 90,
//     Student_JAVASCRIPT: 90,
//     Student_BOOTSTRAP: 70,
//     Total_Marks: 400
// }

// console.log(marksheet)


// Q5: Write a program to check if student is eligible for Module A class, following fields use in Student Object




// let studentObject = {
//     student_Name: "Zia Khan",
//     student_Age: 20
// }
// let studentAge = {
//     studentCheckAge: +prompt("Type your age for check Module A class")
// }
// if (studentObject.student_Age < studentAge.studentCheckAge) {
//     alert("Student are not eligible for Module A classes ")

// } else if (studentObject.student_Age > studentAge.studentCheckAge) {
//     alert("Student are  eligible for Module A classes ")

// } else {
//     alert("Please Type Age in Numbers")
// }


//  QNO 6  Write a program to create two student Mark sheet, and check the conditions as given in question

// Student_One
// {
// Student_Name : “Zia Khan”,
// Student_ID : =J30052425300,
// Subject_HTML : 80,
// Student_CSS : 90,
// Student_JAVASCRIPT : 90,
// Student_BOOTSTRAP :  70,
// Total_Marks : 400
//  }
// Student_Two

// {
// Student_Name : “Zia Khan”,
// Student_ID : =J30052425300,
// Subject_HTML : 60,
// Student_CSS : 70,
// Student_JAVASCRIPT : 65,
// Student_BOOTSTRAP :  85,
// Total_Marks : 400
//  }

// Show the percentage for both and check the condition, if Student_One’s percentage > Student_Two then eligible for scholarship



// let studentOne = {
//     student_Name: "“Zia Khan”",
//     student_ID: 30052425300,
//     subject_Html: 80,
//     student_Css: 90,
//     student_Javascript: 90,
//     student_Bootstrap: 70,
//     total_Marks: 400,

// };

// let studentTwo = {
//     student_Name: "“Ali Khan”",
//     student_Id: 30052425300,
//     subject_Html: 60,
//     student_Css: 70,
//     student_Js: 65,
//     student_Bootstrap: 85,
//     total_Marks: 400,

// };



// let percentageOne = ().toFixed(2)
// let percentageTwo = (studentTwo.total_Marks / 4).toFixed(2)


// console.log(`Student One percentage is ${percentageOne}`)
// console.log(`Student Two percentage is ${percentageTwo}`)



// Q7: Write a program to create student object and insert data through prompt, then show values in alert box
// Use following properties in object

// Name
// Age
// Address

// And after show the data in alert box?

// let studentObject = {

//     name: prompt("Type Your Name Here"),
//     age: +prompt("Type Your Age In Number"),
//     address: prompt("Type Your Address Here"),
// };
// alert(`${studentObject.name} \n ${studentObject.age} \n  ${studentObject.address} `)


// Q8: Write a program to take user input and create student mark sheet?

// Student_Name : user input,
// Student_ID : user input,
// Subject_HTML : user input,
// Student_CSS : user input,
// Student_JAVASCRIPT : user input,
// Student_BOOTSTRAP :  user input,
// Total_Marks : user input


// let createStudentMarkSheet = {
//     student_Name: prompt("Type Your Name"),
//     student_Id: +prompt("Type Your ID Number"),
//     subject_Html: +prompt("Type Your HTML Mark"),
//     student_Css: +prompt("Type Your CSS Number"),
//     student_Javascript: +prompt("Type Your JAVASCRIPT Number"),
//     student_Bootstrap: +prompt("Type Your BOOTSTRAP Number"),
//     total_Mark: +prompt("Type Your TOTAL MARKS"),

// };
// alert(` STUDENT NAME : ${createStudentMarkSheet.student_Name}\n  STUDENT ID : ${createStudentMarkSheet.student_Id} \n
//   STUDENT HTML :  ${createStudentMarkSheet.subject_Html} \n STUDENT CSS ${createStudentMarkSheet.student_Css} \n STUDENT JAVASCRIPT  ${createStudentMarkSheet.student_Javascript} \n STUDENT BOOTSTRAP  ${createStudentMarkSheet.student_Bootstrap} \n TOTAL MARKS : ${createStudentMarkSheet.total_Mark} `)



//  CHAPTER NO 18 20 FOR LOOP

// 1. Write a program to display the message “Hello World” 5 times
// in your browser using for loop

// let i = "HELLO WORLD"

// for (let index = 0; index < 5; index++) {
//   document.write("HELLO WORLD <br>")
// }


// 2. Write a program to print numeric counting from 1 to 10.

// for (let i = 1; i < 11; i++) {
//     console.log(i)
// }

// 3Write a program to print multiplication table of any number
// using for loop. Table number & length should be taken as an
// input from user


// Taking input from the user for the number and the length of the table

// let num = parseInt(prompt("Enter a number: "));
// let length = parseInt(prompt("Enter the length of the table:"));

// // Printing the multiplication table using a for loop

// document.write(`Multiplication Table of ${num} with length ${length}:  <br>`);
// for (let i = 1; i <= length; i++) {
//     document.write(`${num} x ${i} = ${num * i} <br>`);
// }

//          Question no 4     4. You have an array
//A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”]
// Write each element on new line with the help of for loop


// let a = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];

// for (let i = 0; i < a.length; i++) {
//     document.write(`${a[i]}<br>`)
// }

//     QUESTION 5
// 5. Write a program to print items of the following array using for
// loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]


// let fruits = ["apple",  "banana", "mango" , "orange", "strawberry"]

// for (let i = 0; i < fruits.length; i++) {

//     console.log(fruits[i])

//     document.write(`Element at index${i} is ${fruits[i]}<br> `)
// }


// 6. Write a program to initialize an array of N items by using
// prompt. Where N is number of items as entered by the user


// let n = prompt("Enter the number of items in the array :")


// let array = [];
// for (let i = 0; i < n; i++) {
//     let item = prompt(`Enter item ${i + 1}`);
//     array.push(`${item}<br>`)
// }
// document.write(`${array}`)


//  QUESTION NO 7

// Generate the following series in your browser. See example
// output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k




// let counting = " ";

// for (let i = 1; i < 16; i++) {
//     counting += i + ", "
// }
// document.write("<h4> Counting : " + counting.slice(0, -2) + "</h4>")


// let reversecounting = " ";

// for (let i = 10; i >= 1; i--) {
//     reversecounting += i + ", "
// }
// document.write("<h4> Reverse Counting : " + reversecounting.slice(0, -2) + "</h4>")

// Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

// for (var i = 1; i <= 20; i++) {
//     if (i % 2 == 0) {
//         document.write(i + "<br>")
//     }
// }

// // Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

// for (let i = 0; i <= 19; i++) {
//     if (i % 2 != 0) {
//         document.write(i + "<br>")
//     }
// }


// // Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// let series = "";
// for (let i = 1; i <= 10; i++) {
//     series += (2 * i) + "k, ";
// }
// document.write("<p>Series: " + series + "</p>");



// 8. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:


// let mart = ["Cake", "Apple", "Cookie", "Chips", "Patties"];
// let client = prompt("Which Product You Want To Be Buy");

// let flag;

// let boxNumber;

// for (let i = 0; i < mart.length; i++) {
//     if (client === mart[i]) {
//         flag = true
//         boxNumber = i

//     }
// }
// if (flag) {

//     document.write(`Yes This Product is <strong>${client}</strong> Avaiable In My Mart.`)

// } else {
//     document.write("This Product Is Not Avaiable  ")
// }

//            QUESTION NO 9

// 9. Write a program to identify the largest number in the given
// array.
// A = [24, 53, 78, 91, 12]


// const a = [
//     24, 53, 78, 91, 21
// ]

// let largest = [+prompt("Type Number")]


// for (let i = 1; i < a.length; i++) {
//     if (a[i] >largest) {
//         largest = a[i]
//     }
// }

// document.write(`The largest number in the array is : ${largest}`)



//  QUESTION 10

// 10. Write a program to identify the smallest number in the given
// array.
// A = [24, 53, 78, 91, 12]

// const a = [
//     24, 53, 78, 91, 21
// ]

// let largest = [+prompt("Type Number")]


// for (let i = 1; i < a.length; i++) {
//     if (a[i] < largest) {
//         largest = a[i]
//     }
// }

// document.write(`The Smallest number in the array is : ${largest}`)



//        Question NO 11

// Write a program to identify the largest & the smallest
// number in the given array.
// A = [24, 53, 78, 91, 12]

// const a = [
//     24, 53, 78, 91, 21
// ]

// let largest = [+prompt("Type Number"),]
// let smallest = [+prompt("Type Second Number")]


// for (let i = 1; i < a.length; i++) {
//     if (a[i] > largest) {
//         largest = a[i]
//     } else if (a[i] < smallest) {
//         smallest = a[i]
//     }
// }

// document.write(`The Largest Number in the array is : ${largest} `)
// document.write(`The Smallest number in the array is : ${smallest} <br>`)



// 12. Write a program to print multiples of 5 ranging 1 to 100


// for (var i = 1; i <= 100; i++) {
//     if (i % 5 == 0) {
//         document.write(i + "<br>")
//     }
// }


//           QUESTION 13

// You have given the following arrays:
// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90];

// Write a program to generate the following HTML table in your
// browser using JS.



// let students = ["Ali", "Sami", "Taha", "Inam"];
// let scores = [58, 73, 89, 90]



// let html = "<table><tr><th>Students</th> <th>Score</th></tr><table>"


// for (let i = 0; i < students.length; i++) {
//     html += "<tr> <td>" + students[i] + "</td> <td>" + scores[i] + "</td> </tr>"
// }
// html += "</table>"

// document.write(html)



//             Question no 14

// Write a program that prints number from start of the array
// to desired stop value. Given array:
// var scores = [12, 45, 3, 22, 34, 50];
// (Hint: take stop value from user)
// E.g. if user gives 3 as input value print 12, 45, 3
// if user gives 34 as input value print 12, 45, 3, 22, 34


// Define the scores array
// const scores = [12, 45, 3, 22, 34, 50];

// // Get the stop value from the user
// const stop = parseInt(prompt("Enter the stop value:"));

// // Loop through the scores array and print each number until the stop value is reached
// for(let i = 0; i < scores.length && scores[i] <= stop; i++) {
//   console.log(scores[i]);
// }

//  QUESTION NO 15

// You have an array
// A = [ [1,2,3] , [4,5,6] , [7,8,9] ]
// Write each element on new line with the help of nested for
// loops.


// let a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];


// for (let i = 0; i < a.length; i++) {
//     for (let b = 0; b < a[i].length; b++) {
//         console.log(a[i][b])
//     }
// }

// QUESTION NO 16

// Write a program to repeatedly print the value of the variable
// num which is input by user. Value should be decreasing by 0.5
// each time, as long as x Value remains positive.

// let num = parseFloat(prompt("Type Number"));



// for (let i = num; i > 0; i -= 0.5) {

//     document.write(i)
// }

//  QUESTION NO 17

// The even/odd reporter
// Write a for loop that will iterate from 0 to 20. For each
// iteration, it will check if the current number is even or odd, and
// report that to the screen (e.g. "2 is even").



// for (let i = 0; i <= 20; i++) {

//     if (i % 2 === 0) {
//         console.log(i + " Even")
//     } else {
//         console.log(i + " Odd")
//     }
// }


//  QUESTION NO 18

// let product = 1;

// for (let i = 1; i <= 7; i++) {
//     if (i % 2 === 0) {
//         product *= i
//     }
// }

// console.log(`Product of odd integers from 1 to 7: ${product}`);



//          QUESTION 19


// 9. Write a program that will write out a wedge of stars. The user
// will enter the initial number of stars, and the program will write
// out lines of stars where each line has one few star than the
// previous line. Initial number of stars: 7




// let numStar = parseInt(prompt("Type Number"));

// for (let i = numStar; i >= 1; i--) {
//     let stars = " ";
//     for (let j = 0; j < i; j++) {
//         stars += "*"
//     }

//     document.write(stars)
// }


//  QUESTION  MO 20

// Write a program to create the following patterns in your
// browser. Take number of lines as an input





// Prompt the user to enter the number of lines
// let numLines = parseInt(prompt("Enter the number of lines: "));

// // Pattern 1
// for (let i = 1; i <= numLines; i++) {
//     let stars = "";
//     for (let j = 0; j < i; j++) {
//         stars += "*";
//     }
//     console.log(stars);
// }

// // Pattern 2
// for (let i = 1; i <= numLines; i++) {
//     let spaces = "";
//     let stars = "";
//     for (let j = 1; j <= (numLines - i); j++) {
//         spaces += " ";
//     }
//     for (let k = 1; k <= i; k++) {
//         stars += "*";
//     }
//     console.log(spaces + stars);
// }

// // Pattern 3
// for (let i = numLines; i >= 1; i--) {
//     let spaces = "";
//     let stars = "";
//     for (let j = 1; j <= (numLines - i); j++) {
//         spaces += " ";
//     }
//     for (let k = 1; k <= i; k++) {
//         stars += "*";
//     }
//     console.log(spaces + stars);
// }




//                            CHAPTER NO 21 25 STRING METHODS

// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// let fullName = prompt("Type Your First Name")

// let lastName = prompt("Type Your Last Name")

// document.write(`${fullName} ${lastName} `)

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser



// let userInput = prompt("Type Your Favorite mobile phone model ")

// document.write(`My Favorite Phone is : ${userInput} <br> Length of string ${userInput.length}`)


// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .


// let find = "Pakistani";
// let word = find.indexOf('n')

// document.write(" String :" + find + "<br>" + "Index Of  :" + word)

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.



// let strign = "Hello World"

// let word = strign.lastIndexOf('l')

// document.write(" String :" + strign + "<br>" + "Index Of  :" + word)


// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.


// let string = "Pakistani"

// let word = string.charAt(3)


// document.write("String : " + string + "<br>" + "Character at index 3 :" + word)

// 6. Repeat Q1 using string concat() method


// let fullName = prompt("Type Your First Name")

// let lastName = prompt("Type Your Last Name")

// document.write(fullName.concat(lastName))

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser


// let city = "Hyderabad"
// let replace = city.replace('Hyderabad', 'Islamabad')
// document.write("city :" + city + "<br>" + "After Replacement :" + replace)




// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;


// var message = "Ali and Sami are best friends They play cricket and football together";

// let replace = message.replace(/and/g,"&")

// document.write(replace)

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.



// let num = " '472'"

// document.write("Value :" + num + "<br> " + "Type : " + typeof (num) + "<br>")
// let number = 472

// document.write("Value :" + number + "<br> " + "Type : " + typeof (number))


// 10. Write a program that takes user input. Convert and
// show the input in capital letters.


// let message = "hello"

// let reached = message.toUpperCase('hello')

// document.write(" Before Case :" + message + "<br>" + "After Case : " + reached)

// 11. Write a program that takes user input. Convert and
// show the input in title case.


// let userInput = prompt("Enter a sentence: ");
// let titleCase = userInput.toLowerCase().replace(/(^|\s)\S/g, function(firstLetter) { 
//   return firstLetter.toUpperCase(); 
// });

// document.write("Title case: ", titleCase);




// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// let num = 35.36

// let str = num.toString().replace(".", " ")


// document.write("Number :" + num + "<br>" + "Result :" + str )


// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64



// let userInput = prompt("Type your username")

// if (userInput.includes(",") || userInput.includes(".") || userInput.includes("@") || userInput.includes("!")) {
//     alert('Please enter a valid username without special symbols [@ . , !]')
// } else {
//     alert("Username accepted: " + userInput);
// }

14   // You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability.




// let a = ["cake", "patties", "apple pie", "cookie", "chips"]

// let userInput = prompt("Enter an item to search for :").toLowerCase()
// let b = a.includes(userInput)

// if (b) {
//     alert(userInput + " is available at index :" + a.indexOf(userInput))
// } else {
//     alert(`The item '${userInput}' was not found in the array.`)
// }

// 15.  Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.




// let password = prompt("Enter your password");

// while (!isValidPassword(password)) {
//   password = prompt("Password must be at least 6 characters long, should contain alphabets and numbers, and should not start with a number. Please enter a valid password.");
// }

// console.log("Valid password!");

// function isValidPassword(password) {
//   return password.length >= 6 && /^[a-zA-Z][a-zA-Z0-9]*$/.test(password);
// }


// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// let university = "University Of Karachi";


// let split = university.split("")

// for (let i = 0; i < split.length; i++) {
//     document.write(split[i] + "<br>")
// }
//  17.  Write a program to display the last character of a user input.

// let product = prompt("Enter")

// let yes = product.charAt(product.length - 1)



// alert(`last character ${yes}`)



// 18  You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.




// var string = "The quick brown fox jumps over the lazy dog";
// var count = 0;

// // Split the string into an array of words
// var words = string.split(" ");

// for (var i = 0; i < words.length; i++) {
//     if (words[i].toLowerCase() === "the") {
//       count++;
//     }
//   }

//   alert("The word 'the' appears " + count + " times in the string.");


//               CHAPTER NO  26 30


// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


// let number = 3.45214

// document.write("Number : " + number + "<br>")
// document.write("Round Of Value " +Math.round(number) + "<br>")
// document.write("Floor Of Value " + Math.floor(number) +"<br> ")
// document.write( "Ceil Of Value " + Math.ceil(number) +"<br> ")



// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// let number = -3.45214

// document.write("Number : " + number + "<br>")
// document.write("Round Of Value " +Math.round(number) + "<br>")
// document.write("Floor Of Value " + Math.floor(number) +"<br> ")
// document.write( "Ceil Of Value " + Math.ceil(number) +"<br> ")


// 3 Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// let num = -4

// let absolute = Math.abs(num)

// document.write(`The absolute value of ${num} is : ${absolute}`)


// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

// let num = Math.floor(Math.random() * 6) + 1


// document.write(`random number ${num}`)

// 6. Write a program that shows a random number between 1
// and 100 in your browser

// let num = Math.floor(Math.random() * 100) + 1


// document.write(`random number ${num}`)



// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms




// let weight = prompt("Please enter your weight (in kgs or kilograms):");

// // Remove any non-numeric characters from the input
// // weight = weight.replace(/[^\d.-]/g, '');

// // Display the user's weight in the browser
// document.write("Your weight is: " + weight + " kgs");



// 8 Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.


// let secretNumber = Math.floor(Math.random() * 10) + 1;

// // Ask the user to input a number
// let userNumber = prompt("Guess the secret number (between 1 and 10):");

// // Parse the user's input as an integer
// userNumber = parseInt(userNumber);

// // Check if the user's input matches the secret number
// if (userNumber === secretNumber) {
//   document.write("Congratulations! You guessed the secret number.");
// } else {
//   document.write("Sorry, the secret number was " + secretNumber + ". Try again!");
// }


//                      CHAPTER NO 31 TO 34 Date Method


// 1. Write a program that displays current date and time in  your browser.

// let date = new Date()
// document.write(date)

// 2. Write a program that alerts the current month in words.
// For example December.
//3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun. //

// const d = new Date();

// const b = d.getMonth()
// const c = d.getDay()

// document.write("Current Month is :" + getMonth(b) + "<br>")
// document.write("Today is :" + getday(c))


// function getMonth(monthNumber) {
//     let month = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
//     return month[monthNumber]
// }

// function getday(monthday) {
//     let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

//     if (c == "Sunday" && c == "Saturday") {
//         return c = "Funday"
//     }

//     return day[monthday]
// }

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.//

// let funday = new Date();

// if (funday.getDay() == 6 || funday.getDay() == 0) {

//     alert("its funday bro")
// } else {
//     alert("Its not funday bro")
// }

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

// let day = new Date()
// let b = day.getDate()

// if (b < 16) {
//     alert("First fifteen  days of the month")
// } else {
//     alert("Last days of the month")
// }

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// let now = new Date();

// // get the number of milliseconds since Jan. 1, 1970
// let millisecondsSinceEpoch = now.getTime();

// // convert milliseconds to minutes
// let minutesSinceEpoch = Math.floor(millisecondsSinceEpoch / 60000);

// // display the result
// console.log(minutesSinceEpoch);




// 7 .Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// let now = new Date()

// let time = now.getHours()

// if (time < 12) {
//     alert("Its AM")

// } else {
//     alert("Its PM")
// }


// 8 Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

// let date = new Date("2021-01-01");

// // set the date to the last day of the previous month
// date.setMonth(date.getMonth() - 1);
// date.setDate(0);

// // assign the date to a variable named laterDate
// let laterDate = date;

// // display the result
// console.log(laterDate);


//  9 Create a date object of the starting date of this Ramadan 
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015
// let startingDate = new Date("June 18 2015")

// let currentDate = new Date()


// let timeDiff = currentDate.getTime() - startingDate.getTime()

// let dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24))

// document.write('Number of days past since 1st Ramadan: ' + dayDiff)

// 10. Write a program that displays in your browser the 
// seconds that elapsed between the reference date and the 
// beginning of 2015.

// let referenceDate = new Date('March 23, 2023');

// // Set the beginning of 2015 as the target date
// let targetDate = new Date('January 1, 2015');

// // Calculate the time difference between the two dates in seconds
// let timeDiffInSeconds = Math.floor((referenceDate.getTime() - targetDate.getTime()) / 1000);

// // Display the time difference in seconds in the browser


// document.write(`The number of seconds that have elapsed between the reference date and the beginning of 2015 is: ${timeDiffInSeconds} seconds.`);




// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.


// let currentDate = new Date()

// let currentHours = currentDate.getHours()

// currentDate.setHours(currentHours + 1)

// document.write(currentDate)

// 12 Write a program that creates a date object and show the 
// date in an alert box that is reset to 100 years back?


// let current = new Date()

// current.setFullYear(current.getFullYear() - 100)

// alert(current)




// 13 Write a program to ask the user about his age. Calculate 
// and show his birth year in your browser.


// var age = prompt("Enter your age here?");

// var year = new Date().getFullYear();

// var birth = year - age

// document.write(`Your age is : ${age} <br>`)
// document.write("Your Birth year is : " + birth + ":")





































































// x = 5

// x += x + 5

// console.log(x)





