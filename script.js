function add(a,b) {
	return (a+b);
}

function subtract(a,b) {
	return (a-b);
}

function multiply(a,b) {
	return (a*b);
}

function divide(a,b) {
	return (a/b);
}

function operate() {
    numbers = screen.innerHTML.split("");
    let a = "";
    let b = parseFloat(operation.innerHTML)
    let c = "";
    let answer = 0;

    for (const i of numbers) {
        if (!isNaN(i) == true || i == ".") {
            a = a + i;
        } else {
            c = i;
        }
    }

    a = parseFloat(a);
    
    if (c == "+") {
        answer = add(a,b);
        operation.innerHTML = answer;
        screen.innerHTML = answer;
    }

    if (c == "-") {
        answer = subtract(a,b);
        operation.innerHTML = answer;
        screen.innerHTML = answer;
    }

    if (c == "×") {
        answer = multiply(a,b);
        operation.innerHTML = answer;
        screen.innerHTML = answer;
    }

    if (c == "÷") {
        answer = divide(a,b);
        operation.innerHTML = answer;
        screen.innerHTML = answer;
    }
}



const number = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator');
const operation = document.querySelector('#operation');
const screen = document.querySelector('#screen');
const clear = document.querySelector('#clear')
const erase = document.querySelector('#delete');
const dot = document.querySelector('#dot');
const equal = document.querySelector('#equal');

let operatorClick = 0

for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', () => {
    if (operation.innerHTML == 0 || operatorClick == 1) {
        operation.innerHTML = number[i].innerHTML;
        operatorClick = 0;
    } else {
        operation.innerHTML = operation.innerHTML + number[i].innerHTML;
    };
    });
};

for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', () => {
    if (screen.innerHTML != "" && operatorClick == 0) {
        operate();
        screen.innerHTML = screen.innerHTML + operator[i].innerHTML;
        operatorClick = 1;
    } else {
    screen.innerHTML = operation.innerHTML + operator[i].innerHTML;
    operatorClick = 1;
    }
    });
};

clear.addEventListener('click', () => {
    operation.innerHTML = 0;
    screen.innerHTML = "";
});

erase.addEventListener('click', () => {
    let split = operation.innerHTML.split("");
    split.pop();
    split = split.join("");
    operation.innerHTML =split;
})

dot.addEventListener('click', () => {
    let split = operation.innerHTML.split("");
    if (!split.includes(".")) {
       operation.innerHTML = operation.innerHTML + "."; 
    }
});

equal.addEventListener('click', () => {
    let split = screen.innerHTML.split("");
    if (split.includes("=") === false && operatorClick == 0) {
        operate();
    }
})

document.addEventListener('keydown', (e) => {
    if (e.key == "+" || e.key == "-") {
        if (screen.innerHTML != "" && operatorClick == 0) {
            operate();
            screen.innerHTML = screen.innerHTML + e.key;
            operatorClick = 1;
        } else {
        screen.innerHTML = operation.innerHTML + e.key;
        operatorClick = 1;
        } 
    } else if (e.key == "*") {
        if (screen.innerHTML != "" && operatorClick == 0) {
            operate();
            screen.innerHTML = screen.innerHTML + "×";
            operatorClick = 1;
        } else {
        screen.innerHTML = operation.innerHTML + "×";
        operatorClick = 1;
        }
    } else if (e.key == "/") {
        if (screen.innerHTML != "" && operatorClick == 0) {
            operate();
            screen.innerHTML = screen.innerHTML + "÷";
            operatorClick = 1;
        } else {
        screen.innerHTML = operation.innerHTML + "÷";
        operatorClick = 1;
        }
    } else if (isNaN(e.key) === false) {
        if (operation.innerHTML == 0 || operatorClick == 1) {
            operation.innerHTML = e.key;
            operatorClick = 0;
        } else {
            operation.innerHTML = operation.innerHTML + e.key;
        }
    } else if (e.key == "=" || e.key == "Enter") {
        let split = screen.innerHTML.split("");
        if (split.includes("=") === false && operatorClick == 0) {
        operate();
    }
    } else if (e.key == "Backspace") {
        let split = operation.innerHTML.split("");
        split.pop();
        split = split.join("");
        operation.innerHTML =split;
}   else if (e.key == ".") {
    let split = operation.innerHTML.split("");
    if (!split.includes(".")) {
       operation.innerHTML = operation.innerHTML + "."; 
    }
}
});

