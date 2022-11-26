//Commit 1 - Print Greeting

// function printGreeting(name) {
//     return `Hello there ${name}`;
// } 

//console.log(printGreeting("Slimer"));


//Commit 2 - Reverse Word Order

//  function reverseWordOrder(phrase) {
//      return phrase.split(" ").reverse().join(" ");
    //OR use this method
    // let words = [];
    // let currentWord = '';
    // for (let i = 0; i <= phrase.length; i++) {
    //     if (phrase[i] === " ") {
    //     words.push(currentWord);
    //     //words.splice(words.length -1, 0, currentWord);
    //     currentWord = '';
    //     } else {
    //         currentWord += phrase[i];
    //         if(i + 1 === phrase.length) words.push(currentWord);
    //     }
    // } return words;
//}

// console.log(reverseWordOrder("Ishmael me Call"));
// console.log(reverseWordOrder("I use Lâncome on my comb"));

//Commit 3 - Calculate

function calculate(num1, num2, operation) {
    if (operation == "add") {
        return num1 + num2;
    } else if (operation == "sub") {
        return num1 - num2;
    } else if (operation == "mult") {
        return num1 * num2;
        } else if (operation == "div") {
        return num1 / num2;
    } else {
        if (operation == "exp")
        return num1**num2;
     }
} 

console.log(calculate(4, 3, "sub"));
console.log(calculate(4, 3, "exp"));