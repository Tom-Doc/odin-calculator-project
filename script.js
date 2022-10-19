const displayTop = document.querySelector('.display-top');
const displayMain = document.querySelector('.display-main');

const allClearButton = document.querySelector('.all-clear');
const lastClearButton = document.querySelector('.last-clear');
// const decimalButton = document.querySelector('.decimal');
const equalsButton = document.querySelector('.equals');

const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operation');

const numsAndOps = document.querySelectorAll('.number, .operation, .decimal');

let hasDecimal = false;
let hasDivide = false;
let hasMultiply = false;
let hasSub = false;
let hasAdd = false;

let displayNum1 = '';
let displayNum2 = '';
let lastOperator = '';

function clearMainDisplay (name = '') {
    displayNum1 += displayNum2+ '' + name + '';
    displayMain.innerText = displayTop;
}


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
            // displayMain.innerText = parseInt(displayNum1 += displayNum2)
            console.log('display1:', displayNum1);
            console.log('display2:', displayNum2);
        }
        // displayNum1 += e.target.innerText; // innerText will get rid of every thing else (<button class=> ect) and just show us the value like (7, 8, 9, ect)
        // displayMain.innerText = displayNum1; // += allows multiple numbers and numbers + operations to display instead of just 1 value at a time
    });
});

operations.forEach(operations => {
    operations.addEventListener('click', (e) => {
        if (e.target.innerText === '.' && !hasDecimal) {
            hasDecimal = true;
        } else if (e.target.innerText === '.' && hasDecimal) {
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
        displayMain.innerText = displayNum1 += lastOperator += displayNum2;
    });
});

equalsButton.addEventListener('click', () => {
    if(lastOperator === '+') {
        return displayNum1 + displayNum1
    }
    return displayNum1;
});
