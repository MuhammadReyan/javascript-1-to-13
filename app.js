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






















//  Question 6



// var greeting;
// var hour = Number(prompt("type"));
// if (hour < 18) {
// alert(greeting = "Good day" );
// } else {
// alert(greeting = "Good evening" );
// }

