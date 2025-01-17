function updateDisplay(){
    const operators = document.querySelectorAll('.opr');
    const numbers = document.querySelectorAll('.number');
    numbers.forEach((number) => {
        const input = document.querySelector('input');
        number.addEventListener('click', (e) => {
            input.value += e.target.textContent;
        });
    });
    
    operators.forEach((operator) => {
        operator.addEventListener('click', (e) =>{
            const input = document.querySelector('input');
            if (e.target.textContent == '=') return;
            input.value += e.target.textContent;
        });
    });
};

function operation (operator, num1, num2) {
    const input = document.querySelector('input').value;
    num1 = parseFloat(input.split(/[*]|[-]|[+]|[\/]/)
    .splice(0, 1)
    .join());
    num2 = parseFloat(input.split(/[*]|[-]|[+]|[\/]/)
    .splice(-1)
    .join());
    operator = input.split(/[^-|+|*|\/|%]/)
    .filter(e => e)
    .join();
    if (operator == '+') {
        return num1 + num2
    } else if (operator == '-') {
        return num1 - num2
    } else if (operator == '*') {
        return num1 * num2
    } else if (operator == '/') {
        if (num2 === 0) return "Woah!";
        let ans = num1 / num2; 
        return Math.round(ans * 10 ** 2) / 10 ** 2;
    } else if(operator == '%'){
        return num1 / 100;
    } else {
        return 'Single pair of numbers only!';
    };
};

function operate () {
    const equal = document.querySelector('.equal');
    equal.addEventListener('click', () => {
        const input = document.querySelector('input');
        input.value = operation();
    });
};

function eraser () {
    const erase = document.querySelector('.C');
    erase.addEventListener('click', (e) => {
        const input = document.querySelector('input');
        input.value = input.value.slice(0, -1);
    });
}

function allClear (){
    const clear = document.querySelector('.AC');
    const input = document.querySelector('input');
    clear.addEventListener('click', () => {
        input.value = "";
    });
};
function numpad (){
    document.addEventListener('keydown', (e) => {
        const input = document.querySelector('input');
        //if numlock is inactive, don't input
        if ((e.key === 'End')
            ||(e.key === 'ArrowDown')
            ||(e.key === 'PageDown')
            ||(e.key === 'ArrowLeft')
            ||(e.key === 'Clear')
            ||(e.key === 'ArrowRight')
            ||(e.key === 'Home')
            ||(e.key === 'ArrowUp')
            ||(e.key === 'PageUp')
        ){return};
        if (e.location !== 3) return; //stop firing if not numpad
        if (e.key === 'Insert') return 0;
        input.value += e.key;
        if (e.key === 'Enter') {
            input.value += "" //dont input key name
            input.value = operation();
        };
    });
};
numpad();
updateDisplay();
eraser();
allClear();
operate()