// 1. The Magical Sorting Hat:
//    Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

// let students = ["Tushar","Harsh","Ayush","Chetan","Naman","Yash","Yogesh","Bhupender","Alpa","Sanu","Lakshay"]

// let Houses = []

// for (const student of students) {
//     if (student.length < 6 ) {
//         Houses.push("Gryffindor")
//     }
//     else if(student.length < 8 ) {
//         Houses.push("Hufflepuff")
//     }
//     else if(student.length < 12 ) {
//         Houses.push("Ravenclaw")
//     }
//     else if(student.length <= 12 ) {
//         Houses.push("Slytherin")
//     }
//     else {
//         Houses.push("Black")
//     }
// }

// console.log(Houses);


// 2. The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

// function doubletrouble(arr){
//     if (!arr || !Array.isArray(arr)) {
//         return "Invaild input.Please Provide a valid array"
//     }
//     if (arr.lenth === 0) {
//         return "The Arrays is Empty"
//     }

//     let result = [arr[0] *2];
//     let prev = arr[0];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === prev) {
//             result.push(arr[i]);
//         }

//         result.push(arr[i] * 2);
//         prev  =arr [i];
//     }

//     return result;
// }
// const arr1 = [1, 2, 2, 3, 4, 4, 4, 5];
// console.log(doubletrouble(arr1)); // Output: [2, 4, 2, 6, 4, 8, 4, 10]

// const arr2 = [1, 2, 3, 4, 5];
// console.log(doubletrouble(arr2)); // Output: [2, 4, 6, 8, 10]

// const arr3 = [];
// console.log(doubletrouble(arr3)); // Output: "The array is empty."

// const arr4 = null;
// console.log(doubletrouble(arr4)); // Output: "Invalid input. Please provide a valid array."


// 3. The Mirror Mirror:
//    Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

// function mirrorMirror(str) {
//     if (typeof str !== 'string') {
//         return "Invaild input,Please provide a valid string.";
//     }
//     return str + str.split('').reverse().join('');
// }

// const Og = "Hello";

// console.log(mirrorMirror(Og));

// 4. The Password Validator:
//    You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

// function IsPasswordIsVaild(Password) {
//     if (typeof Password !== 'string') {
//         return "Invaild Input  Please Provide A Valid string.";
//     }
//     if (Password.length < 8 ) {
//         return false;
//     }
//     const containsuppercase = /[A-Z]/.test(Password);
//     const containslowercase = /[a-z]/.test(Password); 
//     if (!containsuppercase || !containslowercase) {
//         return false
//     }
//     const containsDigit = /\d/.test(Password);
//     if (!containsDigit) {
//         return false;
//     }
//     return true
// }

// // Example usage
// const password1 = "Password123";
// console.log(IsPasswordIsVaild(password1)); // Output: true

// const password2 = "password";
// console.log(IsPasswordIsVaild(password2)); // Output: false

// const password3 = "12345678";
// console.log(IsPasswordIsVaild(password3)); // Output: false

// const password4 = "P@ssw0rd";
// console.log(IsPasswordIsVaild(password4)); // Output: true

// const notAString = 123;
// console.log(IsPasswordIsVaild(notAString)); // Output: "Invalid input. Please provide a valid string."
    

// 5. The Sum Selector:
//    You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

// function sum(arr) {
//     if (!Array.isArray(arr)) {
//         return "The Value is in Minus"
//     }
//     let sum1 = 0; 
//     for (const num of arr) {
//         if (num<0) {
//             break;
//         }
//         sum1 +=num;
//     }
//     return sum1;
// }

// // Example usage
// const numbers1 = [1, 2, 3, 4, 5];
// console.log(sum(numbers1)); // Output: 15 (1 + 2 + 3 + 4 + 5 = 15)

// const numbers2 = [10, 20, -5, 30, 40];
// console.log(sum(numbers2)); // Output: 30 (10 + 20)

// const notAnArray = 123;
// console.log(sum(notAnArray)); // Output: "Invalid input. Please provide a valid array."


// 7. The Local Storage Manager:
        //     You are working on a note-taking app, and you want to implement a function named saveNoteToLocalStorage that takes a note object and saves it to the browser's local storage.

        // if (localStorage.getItem("name")) {
        //     a = localStorage.getItem("name")
        //     document.write("Welcome" + a)
        // }
        // else {
        //     let a = prompt("Enter Your Name")
        //     localStorage.setItem("name", a);
        // }

