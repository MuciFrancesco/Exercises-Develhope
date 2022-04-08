temp = [10, 20];
let [num1, num2] = temp;

console.log("Before swap: ", num1, num2); // Before swap: 10 20

// Variable swapping
[num2, num1] = temp;

console.log("After swap: ", num1, num2); // After swap: 20 10
