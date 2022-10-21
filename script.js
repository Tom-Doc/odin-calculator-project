const displayMain = document.querySelector('.display-main');
// const displayTop = document.querySelector('.display-top');
const allClearButton = document.querySelector('.all-clear');
const deleteButton = document.querySelector('.delete');
const equalsButton = document.querySelector('.equals');
const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operation');

// Vars to hold values
let hasDecimal = false;
let hasDivide = false;
let hasMultiply = false;
let hasSub = false;
let hasAdd = false;
let displayNum1 = '';
let displayNum2 = '';
let lastOperator = '';
let currentValue = false;

// Function to calculate mathematical operations
function calculate() {
    displayNum1 = Number(displayNum1)
    displayNum2 = Number(displayNum2)
    if (lastOperator === '+') {
        displayNum1 += displayNum2;
    } else if (lastOperator === "-") {
        displayNum1 -= displayNum2;
    } else if (lastOperator === "x") {
        displayNum1 *= displayNum2
    } else {
        displayNum1 /= displayNum2
    }

    console.log(displayNum1);
};

// Function for AC button to clear everything
function allClear() {
    hasDecimal = false;
    hasDivide = false;
    hasMultiply = false;
    hasSub = false;
    hasAdd = false;
    displayNum1 = '';
    displayNum2 = '';
    lastOperator = '';
    displayMain.textContent = displayNum1;
    displayMain.textContent = displayNum1;

}

// Numbers forEach to loop through each number, grab the value, and display
numbers.forEach(numbers => {
    numbers.addEventListener('click', (e) => {

        if (e.target.innerText === '.' && !hasDecimal) {
            hasDecimal = true;
        } else if (e.target.innerText === '.' && hasDecimal) {
            return;
        }
        if (lastOperator === '') {
            displayNum1 += e.target.innerText;
            displayMain.innerText = displayNum1
        } else {
            displayNum2 += e.target.innerText;
            displayMain.innerText = displayNum1 + lastOperator + displayNum2
            console.log('display1:', displayNum1);
            console.log('Op Display:', lastOperator);
            console.log('display2:', displayNum2);
        }

    });
});

// Operations forEach to loop through each operator, display op, and not allow 
// double ops to be hit in a row
operations.forEach(operations => {
    operations.addEventListener('click', (e) => {
        if (!displayNum2) {
            hasDecimal = false;
        } else if (displayNum2) {
            return;
        }

        if (e.target.innerText === '/' && !hasDivide) {
            hasDivide = true;
        } else if (e.target.innerText === '/' && hasDivide) {
            return;
        }
        if (e.target.innerText === 'x' && !hasMultiply) {
            hasMultiply = true;
        } else if (e.target.innerText === 'x' && hasMultiply) {
            return;
        }
        if (e.target.innerText === '+' && !hasAdd) {
            hasAdd = true;
        } else if (e.target.innerText === '+' && hasAdd) {
            return;
        }
        if (e.target.innerText === '-' && !hasSub) {
            hasSub = true;
        } else if (e.target.innerText === '-' && hasSub) {
            return;
        }
        lastOperator += e.target.innerText; // innerText will get rid of every thing else (<button class=> ect) and just show us the value like (7, 8, 9, ect)
    });
});

// Equals event lister - runs calculate function and displays results
equalsButton.addEventListener('click', () => {
    calculate()
    displayNum1.innerText;
    displayMain.innerText = displayNum1
});

// AC event listener - runs allClear function to remove display and reset calculator
allClearButton.addEventListener('click', () => {
    allClear();
});