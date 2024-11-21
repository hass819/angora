
// var num = prompt("Enter a number:");

// console.log(num);






// var userInput = window.prompt('please enter your number')
// if( userInput % 3 == 0 && userInput % 4 == 0 ) {
//     console.log("yes");
// }else {
//     console.log('no')
// }
 

// var num1 = +window.prompt("Enter the first number:");
// var num2 = +window.prompt("Enter the second number:");



// if (num1 > num2) {
//     console.log(num1);
// } else {
//     console.log(num2);
// }



// var num = +window.prompt("Enter an integer:");

// if (num < 0) {
//     console.log("negative");
// } else {
//     console.log("positive");
// }



// var num1 = +window.prompt("Enter the first number:");
// var num2 = +window.prompt("Enter the second number:");
// var num3 = +window.prompt("Enter the third number:");


// var maxElement = num1;
// if (num2 > maxElement) {
//     maxElement = num2;
// }
// if (num3 > maxElement) {
//     maxElement = num3;
// }

// var minElement = num1;
// if (num2 < minElement) {
//     minElement = num2;
// }
// if (num3 < minElement) {
//     minElement = num3;
// }

// console.log("Max element = " + maxElement);
// console.log("Min element = " + minElement);





// var num = +window.prompt("Enter an integer:");

// if (num % 2 === 0) {
//     console.log("even");
// } else {
//     console.log("odd");
// }


// var char = window.prompt("Enter a character:");

// if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || 
//     char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
//     console.log("vowel");
// } else {
//     console.log("consonant");
// }






// var num = +window.prompt("Enter an integer:");


// var result = "";

// for (var i = 1; i <= num; i++) {
//     if (i === num) {
//         result += i;  
//     } else {
//         result += i + ", ";  
//     }
// }
// console.log(result);


 //var num = +window.prompt("Enter an integer:");

// num = parseInt(num);

// var result = "";

// for (var i = 1; i <= 12; i++) {
//     result += num * i; 
//     if (i !== 12) {      
//         result += " ";
//     }
// }

// console.log(result);






// var num = +window.prompt("Enter a number:");


// var result = "";

// for (var i = 2; i <= num; i += 2) {
//     result += i;  
//     if (i !== num && i + 2 <= num) { 
//         result += " ";
//     }
// }

// console.log(result);






// var base = +window.prompt("Enter the base number:");
 //var exponent = +window.prompt("Enter the exponent:");

// var result = 1;

// for (var i = 1; i <= exponent; i++) {
//     result *= base;  
// }

// console.log(result);







// var marks1 = +window.prompt("Enter marks for subject 1:");
// var marks2 = +window.prompt("Enter marks for subject 2:");
// var marks3 = +window.prompt("Enter marks for subject 3:");
// var marks4 = +window.prompt("Enter marks for subject 4:");
// var marks5 = +window.prompt("Enter marks for subject 5:");

// var totalMarks = marks1 + marks2 + marks3 + marks4 + marks5;

// var averageMarks = totalMarks / 5;

// var percentage = (totalMarks / 500) * 100;

// console.log("Total marks = " + totalMarks);
// console.log("Average marks = " + averageMarks);
// console.log("Percentage = " + percentage + "%");


// var month = +window.prompt("Enter the month number (1-12):");



// var daysInMonth;

// if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
//     daysInMonth = 31;  
// } else if (month === 4 || month === 6 || month === 9 || month === 11) {
//     daysInMonth = 30;  
// } else if (month === 2) {
//     daysInMonth = 28;
// } else {
//     daysInMonth = "Invalid month number";  
// }

// console.log("Days in month: " + daysInMonth);









// var physics = +window.prompt("Enter marks for Physics:");
// var chemistry = +window.prompt("Enter marks for Chemistry:");
// var biology = +window.prompt("Enter marks for Biology:");
// var mathematics = +window.prompt("Enter marks for Mathematics:");
// var computer = +window.prompt("Enter marks for Computer:");

// var totalMarks = physics + chemistry + biology + mathematics + computer;

// var percentage = (totalMarks / 500) * 100;

// var grade;
// if (percentage >= 90) {
//     grade = "A";
// } else if (percentage >= 80) {
//     grade = "B";
// } else if (percentage >= 70) {
//     grade = "C";
// } else if (percentage >= 60) {
//     grade = "D";
// } else if (percentage >= 40) {
//     grade = "E";
// } else {
//     grade = "F";
// }

// console.log("Total Marks = " + totalMarks);
// console.log("Percentage = " + percentage.toFixed(2) + "%");
// console.log("Grade = " + grade);








// var month = +window.prompt("Enter the month number (1-12):");


// var daysInMonth;

// switch (month) {
//     case 1:  
//     case 3:  
//     case 5:  
//     case 7:  
//     case 8:  
//     case 10: 
//     case 12: 
//         daysInMonth = 31;  
//         break;
//     case 4:  
//     case 6:  
//     case 9:  
//     case 11: 
//         daysInMonth = 30; 
//         break;
//     case 2:  
//         daysInMonth = 28;  
//         break;
//     default:
//         daysInMonth = "Invalid month number"; 
// }

// console.log("Total number of days: " + daysInMonth);








// var character = prompt("Enter a character:");

// character = character.toLowerCase();

// switch (character) {
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//         console.log(character + " is a vowel.");
//         break;
//     default:
//         if ((character >= 'a' && character <= 'z') || (character >= 'A' && character <= 'Z')) {
//             console.log(character + " is a consonant.");
//         } else {
//             console.log("Invalid input! Please enter an alphabet.");
//         }
//         break;
// }











// var num1 = +window.prompt("Enter the first number:");
// var num2 = +window.prompt("Enter the second number:");



// var result;

// switch (true) {
//     case (num1 > num2):
//         result = num1;  
//         break;
//     case (num2 > num1):
//         result = num2;  
//         break;
//     case (num1 === num2):
//         result = "Both numbers are equal"; 
//         break;
//     default:
//         result = "Invalid input";  
//         break;
// }

// console.log("Maximum: " + result);
