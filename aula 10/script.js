let calc = document.getElementById('calc');

const numbers = document.querySelectorAll('#number');
const operators = document.querySelectorAll('#operator');
const clear = document.querySelectorAll('#clear')

numbers.forEach(button => {
    button.addEventListener('click', () => {
        calc.textContent += button.textContent;
    });
});

operators.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === '=') {
            calc.textContent = eval(calc.textContent);
        } else {
            calc.textContent += button.textContent;
        }
    });
});

clear.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === 'C'){
            calc.textContent = "";
        }
    });
});
