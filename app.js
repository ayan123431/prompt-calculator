
// Step 1: Take first number
var num1 = parseFloat(prompt("Enter first number"));

// Step 2: Take second number
var num2 = parseFloat(prompt("Enter second number"));

// Step 3: Choose operator
var operator = prompt("Enter operator (+, -, *, /)");

// Step 4: Calculation

if (operator === "+") {
    alert("Result: " + (num1 + num2));
}

else if (operator === "-") {
    alert("Result: " + (num1 - num2));
}

else if (operator === "*") {
    alert("Result: " + (num1 * num2));
}

else if (operator === "/") {
    alert("Result: " + (num1 / num2));
}

else {
    alert("Invalid operator!");
}