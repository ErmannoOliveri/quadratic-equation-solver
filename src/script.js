/**
 * Calculate the solutions of a quadratic equation
 */
function calculate() {

    document.getElementById("equation").textContent = "";
    document.getElementById("result-value").textContent = "";
    document.getElementById("result").textContent = "";

    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;

    /* Checking if the value of the coefficient of the x^2 term is null or 0. If it is, it prints a
    message and returns. */
    if (a === '' || a === 0) {
        document.getElementById("result").textContent = "This is not a quadratic equation!"; 
        return;
    }
/* Checking if the value of the coefficient of the x term is null or 0. If it is, it sets it to 0. */
    if (b === '') {
        b = 0;
    }
/* Checking if the value of the term c is null or 0. If it is, it sets it to 0. */
    if (c === '') {
        c = 0;
    }

    let ris;
/* Calculating the value of the discriminant of the equation. */
    let delta = calculateDelta(a, b, c);
/* Checking the number of solutions of the equation. */
    let solutions = checkDelta(delta);

    if (solutions === 0) {
        document.getElementById("result").textContent = "This equation have no result"; 
        return;
    }
    else {
        ris = calculateSolutions(a, b, c, delta, solutions);
    }
/* Printing the equation and the number of solutions. */

    document.getElementById("equation").textContent = printEquation(a, b, c);
    document.getElementById("result").textContent = "This equation have " + solutions + " result";

/* A way to print the result of the equation. */
    if (solutions === 1) {
        ris = ris.toFixed(5);
        document.getElementById("result-value").textContent = "The result is: " + ris; 
    }
    else {
        ris[0] = ris[0].toFixed(5);
        ris[1] = ris[1].toFixed(5);

        document.getElementById("result-value").textContent = "The results are: " + ris[0] + " and " + ris[1]; 
    }
    
}

/**
 * Calculate the delta of a quadratic equation
 * @param a - the coefficient of the x^2 term in the quadratic equation.
 * @param b - the y-intercept of the line
 * @param c - the term c of the equation
 * @returns The value of the discriminant.
 */
function calculateDelta(a, b, c) {
    b2 = b * b;
    return b2 - (4 * a * c);
}

/**
 * Prints the equation of a quadratic function
 * @param a - the coefficient of the x^2 term
 * @param b - the coefficient of the x term (not the power of x)
 * @param c - the term c of the equation
 * @returns Nothing
 */
function printEquation(a, b, c) {
    return a + "x^2" + addSign(b) + "x" + addSign(c) + " = 0";
}

/**
 * Given a number, return a string that is either "+" or "-" followed by the absolute value of the
 * number
 * @param n - The number to be converted to a string.
 * @returns The number with the sign.
 */
function addSign(n) {
    if (n >= 0) {
        return "+" + n;
    }
    else {
        return n;
    }
}

/**
 * Given the discriminant of a quadratic equation return the number of its solutions.
 * @param delta - The discriminant.
 * @returns the number of solutions.
 */
function checkDelta(delta) {
    if (delta === 0) {
        return 1;
    }
    else if (delta > 0) {
        return 2;
    }
    else if (delta < 0) {
        return 0;
    }
}

/**
 * Given the coefficients of a quadratic equation, it returns the solutions of the equation
 * @param a - the coefficient of the x^2 term
 * @param b - the b in the quadratic formula
 * @param c - the term c of the equation
 * @param delta - the discriminant of the equation
 * @param solutions - the number of solutions to the equation
 * @returns the solutions of the quadratic equation.
 */
function calculateSolutions(a, b, c, delta, solutions) {

    if (solutions === 1) {
        return -b / (a * a);
    }    

    else if (solutions === 2) {
        let deltaSqrt = Math.sqrt(delta);
        let ris = [];
        
        ris[0] = (-b - deltaSqrt) / (a * 2);
        ris[1] = (-b + deltaSqrt) / (a * 2);

        return ris;
    }

    else {
        console.error("AN ERROR OCCURRED");
    }
    
}


/**
 * It takes the values of the terms of the equation, check if can exist and print it
 */
function updateEquationValue() {
    document.getElementById("equation").textContent = "";
    document.getElementById("result-value").textContent = "";
    document.getElementById("result").textContent = "";
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;
    if (a === ''&&b === '' && c === '') {
        return;
    }

    /* Checking if the value of the coefficient of the x term is null or 0. If it is, it sets it to 0. */
    if (b === '') {
        b = 0;
    }
/* Checking if the value of the term c is null or 0. If it is, it sets it to 0. */
    if (c === '') {
        c = 0;
    }

    document.getElementById("equation").textContent = printEquation(a, b, c);

}