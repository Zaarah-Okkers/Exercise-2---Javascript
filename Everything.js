// TODO: Create a function called sum. The function will take in a parameter andcalculate all the numbers from 0 -> the parameter. You must check if the parameterisan integer first before any calculation is made. If the parameter is not a number, return a message stating, “The value passed is not a number”. You are NOT allowedtouse methods(!Number.isInteger(n)) or regular expressions(.match(/cat/g)). Makesureto test your code effectively. 
function sum(n) {
    if (typeof n !== 'number' || !Number.isInteger(n)) {
        return "The value passed is not a number";
    }
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i;
    }
    return total;
}


// TODO: Create a function called ‘factorial’ that takes in a number as a parameter. The function will print the factorial of the entered number, e.g. factorial(4) ->4*3*2*1 //output 24
function factorial(n) {
    if (typeof n !== 'number' || !Number.isInteger(n) || n < 0) {
        return "The value passed is not a valid number";
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(4));

// TODO: Create a function called funkyMath . If this function is calledwith2arguments the function will subtract the first from the second. If the functionis calledwith 3 arguments it will add all 3 numbers together. If the function is calledwith4arguments it will add together argument 1 and 2 , 3 and 4 separately. Thendividethem accordingly, eg funkyMath(8,2,3,5) -> 8+2 divided by 3+5 -> 10/8 //output 1,25
function funkyMath(...args) {
    if (args.length === 2) {
        return args[1] - args[0];
    } else if (args.length === 3) {
        return args[0] + args[1] + args[2];
    } else if (args.length === 4) {
        let sum1 = args[0] + args[1];
        let sum2 = args[2] + args[3];
        return sum1 / sum2;
    }
}

console.log(funkyMath(8, 2, 3, 5)); 

// TODO: Create a loop that will remove all the odd numbers fromthe array andaddthem to a new array. Use the current array [1, 2 , 33, 45, 6,44]. Bonus: Make sure to arrange them from smallest to biggest.()
let numbers = [1, 2, 33, 45, 6, 44];
let oddNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        oddNumbers.push(numbers[i]);
    }
}
oddNumbers.sort((a, b) => a - b);  
console.log(oddNumbers);
// TODO: Create an object called ‘me’ with properties of first name, last name, age, favourite colour, dream car
let me = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    favouriteColour: "Midnight galaxy black",
    dreamCar: "BMW M5 F90"
};
console.log(me);
// TODO: Create and add a new property and value of ‘favourite food’ to the object.
me.favouriteFood = "Sushi";

// TODO: . Now delete the age property from the object.
delete me.age;