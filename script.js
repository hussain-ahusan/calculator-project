const clear = document.querySelector('.AC');
clear.addEventListener('click', () => {
    const input = document.querySelector('input');
    input.value = "";
});


function updateDisplay () {
    const input = document.querySelector('input');
    const buttons = document.querySelectorAll(".number, .opr");
    buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        input.value += e.target.textContent;
    })
})
};

function updateDisplay(){
    const operators = document.querySelectorAll('.opr')
    const numbers = document.querySelectorAll('.number')
    numbers.forEach((number) => {
        const input = document.querySelector('input');
        number.addEventListener('click', (e) => {
            input.value += e.target.textContent;
        })
    })
    
    operators.forEach((operator) => {
        operator.addEventListener('click', (e) =>{
            const input = document.querySelector('input');
            if (e.target.textContent == '=') return;
            input.value += e.target.textContent;
        })
    })
}

function operate (operator, num1, num2) {
    const input = document.querySelector('input').value;
    num1 = parseInt(input.split(/[*]|[-]|[+]|[\/]/)
    .splice(0, 1)
    .join());
    console.log(num1);
    num2 = parseInt(input.split(/[*]|[-]|[+]|[\/]/)
    .splice(-1)
    .join());
    console.log(num2);
    operator = input.split(/[^-|+|*|\/]/)
    .filter(e => e)
    .join();
    console.log(operator)
    if (operator == '+') {
        return num1 + num2
    } else if (operator == '-') {
        return num1 - num2
    } else if (operator == '*') {
        return num1 * num2
    } else if (operator == '/') {
        return num1 / num2
    } else if (operator == '%') {
        return (num1- num2) / num1 * 100
    } else {
        return 0;
    };
};


const equal = document.querySelector('.equal');
equal.addEventListener('click', () => {
    const input = document.querySelector('input');
    input.value = operate()
})
updateDisplay()