// Write a function that takes two parameters, an array of numbers and a target number.The function should return a pair of numbers from the array that adds up to the target number.If no such pair is found, the function should return null.

// function findPair(num, target) {
//     for (let i = 0; i <= num.length; i++) {
//         for (let j = 0; j <= num.length; j++) {
//             if (num[i] + num[j] == target) {
//                 return [num[i],num[j]]
//             }
//         }
//     }

//     return null
// }
// let num = [1,2,3,4]
// let target = 5
// let result = findPair(num,target)
// console.log(findPair([1,2,3,4],5))

// Example input: findPair([1, 2, 3, 4], 5) Example output: [1, 4]


// Write a function that takes a string as input and returns the reverse of the string.

// function reverse(str) {
//     let string = ""
//     for (let i = str.length - 1; i >= 0; i--) {
//         // string += str[i]
//         string = string + str[i]
//     }
//     return string
// }
// console.log(reverse("hello"))
// Example input: reverseString("hello") Example output: "olleh"



// Write a function that takes an array of numbers as input and returns the sum of the two largest numbers in the array.

// function sumOfLargestNum(Num){
//     let largeNum = Math.max(...Num);
//     let index = Num.indexOf(largeNum);
//     if(index > -1){
//         Num.splice(index,0);


//         return Num;
//     }

//     let seclargeNum = Math.max(...Num);
//     console.log(largeNum + seclargeNum)

// Example input: sumLargest([1, 2, 3, 4]) Example output: 7


// Write a function that takes an array of strings as input and returns a new array that contains only the strings that have more than three characters.



// function filterStrings(input) {

//     let output = input.filter(function (value) {
//         return value.length > 3
//     })
//     return output
// }

// console.log(filterStrings(["hi", "hello", "hey", "howdy"]))

// Example input: filterStrings(["hi", "hello", "hey", "howdy"]) Example output: ["hello", "howdy"]


// Write a function that takes an array of numbers as input and returns a new array that contains only the even numbers.

// function even(num) {

//     let evenNumbers = num.filter(function (value) {

//         return value % 2 === 0
//     })
//     return evenNumbers

// }
// console.log(even([1, 2, 3, 4, 5, 6]))

// Example input: filterEven([1, 2, 3, 4, 5, 6]) Example output: [2, 4, 6]


// Write a function that takes an array of objects and a key name as input and returns a new array that contains only the values of the specified key from each object in the array.


function pluck(array, key) {
    return array.map(obj => obj[key])
}

let student = [{ name: "John", age: 30 }, { name: "Jane", age: 25 }]

let names = pluck(student,"name")

console.log(names)


// Example input: pluck([{ name: "John", age: 30 }, { name: "Jane", age: 25 }], "name") Example output: ["John", "Jane"]

// Write a function that takes a string as input and returns the most frequent character in the string. If there are multiple characters that appear with the same frequency, return the one that appears first.




// function find(str) {
//     let frequency = {}
//     for (let i = 0; i < str.length; i++) {
//         let string = str[i]
//         if (!frequency[string]) {
//             frequency[string] = 0
//         }
//         frequency[string]++
//     }
//     return frequency
// }
// console.log(find("hello world"))






// Example input: mostFrequent("hello world") Example output: "l"




// Write a function that takes an array of strings as input and returns a new array that contains the length of each string in the original array.




// function nameLength(str) {
//     const words = str;
//     let woring =  words.map(str => ` ${str.length}`);
//     return woring
// }


// console.log(nameLength(["hi", "hello", "hey", "howdy"]))


// Example input: stringLengths(["hi", "hello", "hey", "howdy"]) Example output: [2, 5, 3, 5]









// Q7) Write a function that takes a string as input and returns true if the string is a palindrome (reads the same backwards as forwards), and false otherwise.

// Example input: isPalindrome("racecar") Example output: true



// function isPalindrome(value){
//     valueLower = value.toLowerCase()

//     let reverse =  valueLower.split("").reverse().join("")
//     if(valueLower === reverse){
//         return true
//     }
//     else{
//         return false
//     }

// }


// console.log(isPalindrome("racecar"))



// Write a function that takes an array of numbers as input and returns the index of the first number in the array that is greater than or equal to 10.



// function equal(numbers) {

//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] >= 10) {
//             return i;
//         }
//     }
//     return -1
// }

// console.log(equal([1, 5, 15, 20]))






// Example input: firstGreater([1, 5, 15, 20]) Example output: 2







