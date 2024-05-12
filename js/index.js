console.log("I'm ready!");

// Iteration 1: Names and Input

let hacker1 ='Mauro'
console.log(`the driver's name is ${hacker1}`);
let hacker2 ='Konrad'
console.log(`the navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log (`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`) 
} else {
    console.log (`Wow, you both have equally long names, XX characters!.`)   
}


// Iteration 3: Loops
const result = hacker1.split('').join(' ');
console.log(result.toUpperCase());

let reverseHacker2 = "";
    for (let i = hacker2.length - 1; i >= 0; i--) {
        reverseHacker2 += hacker2[i];}
console.log(reverseHacker2);

if (hacker1.localeCompare(hacker2) ==1) {
    console.log('Yo, the navigator goes first definitely.')
}else if (hacker1.localeCompare(hacker2) ==-1) {
    console.log("The driver's name goes first.")
} else {
    console.log("What?! You both have the same name?")
}


// Bonus 1
//mofified on 12 May 2024 -> solution build for string instead of array

let text = "tibulum dui velit, accumsan vel venenatis in, scelerisque quis ligula.";
let spaceCount = 1;

for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
        spaceCount++;
    }
}
console.log("Number of words:", spaceCount);

// Bonus 2

let word = "racecar"
let reverseword = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reverseword += word[i];}
console.log(reverseword);
if (reverseword == word) {
    console.log("It's a palindrome");
} else {
    console.log("I's not a palindrome");
}







