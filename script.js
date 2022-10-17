const displayTop = document.querySelector('.display-top');
const displayMain = document.querySelector('.display-main');

const allClearButton = document.querySelector('.all-clear');
const lastClearButton = document.querySelector('.last-clear');
const decimalButton = document.querySelector('.decimal');
const equalsButton = document.querySelector('.equals');

const numbers = document.querySelector('.number');
const operations = document.querySelector('.operation');

const numsAndOps = document.querySelectorAll('.number, .operation');

numsAndOps.forEach(numsAndOps => {
    numsAndOps.addEventListener('click', (e) => {
        const value = e.target.innerText; // innerText will get rid of every thing else (<button class=> ect) and just show us the value like (7, 8, 9, ect)
            displayMain.innerText += value; // += allows multiple numbers and numbers + operations to display instead of just 1 value at a time
       
    });
});