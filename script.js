let show = document.getElementById('show');
let point = document.getElementById('point');
let div = document.getElementById('div');
let clear = document.getElementById('clear');
let back = document.getElementById('back');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let mul = document.getElementById('mul');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let minus = document.getElementById('minus');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let add = document.getElementById('add');
let zero = document.getElementById('zero');
let eql = document.getElementById('eql');

let curr = 0;

one.addEventListener('click', () => {show.innerText == '0' ? show.innerText = '1': show.innerText += '1';})
two.addEventListener('click', () => {show.innerText == '0' ? show.innerText = '2': show.innerText += '2';})
three.addEventListener('click', () => {show.innerText == '0' ? show.innerText = '3': show.innerText += '3';})
four.addEventListener('click', () => {show.innerText == '0' ? show.innerText = '4': show.innerText += '4';})
five.addEventListener('click', () => {show.innerText == '0' ? show.innerText = '5': show.innerText += '5';})
six.addEventListener('click', () => {show.innerText == '0' ? show.innerText = '6': show.innerText += '6';})
seven.addEventListener('click', () => {show.innerText == '0' ? show.innerText = '7': show.innerText += '7';})
eight.addEventListener('click', () => {show.innerText == '0' ? show.innerText = '8': show.innerText += '8';})
nine.addEventListener('click', () => {show.innerText == '0' ? show.innerText = '9': show.innerText += '9';})
zero.addEventListener('click', () => {show.innerText == '0' ? show.innerText = '0': show.innerText += '0';})
point.addEventListener('click', () => {show.innerText += '.'})

let operand = "";

add.addEventListener('click', () => {
    if (operand == 'eql') {
        operand = "minus";
        show.innerText = 0;
    }
    curr += parseFloat(show.innerText);
    console.log(curr);
    show.innerText = 0;
    operand = "add";
});
minus.addEventListener('click', () => {
    if (curr == 0) {
        curr += parseFloat(show.innerText);
        console.log(curr);
        show.innerText = 0;
        operand = 'minus';
    } else if ( operand == "eql") {
        operand = "minus";
        show.innerText = 0;
    } else if (operand == "add") {
        curr += parseFloat(show.innerText);
        show.innerText = 0;
        operand = "minus";
    } else if (operand == "mul") {
        curr *= parseFloat(show.innerText);
        show.innerText = 0;
        operand = "minus";
    } else if (operand == "div") {
        curr /= parseFloat(show.innerText);
        show.innerText = 0;
        operand = "minus";
    } else {
        curr -= parseFloat(show.innerText);
        show.innerText = 0;
        operand = 'minus';
    }
});
mul.addEventListener('click', () => {
    if (curr == 0) {
        curr += parseFloat(show.innerText);
        show.innerText = 0;
        operand = 'mul';
    } else if ( operand == "eql") {
        operand = "mul";
        show.innerText = 0;
    } else if (operand == "add") {
        curr += parseFloat(show.innerText);
        show.innerText = 0;
        operand = "mul";
    } else if (operand == "minus") {
        curr -= parseFloat(show.innerText);
        show.innerText = 0;
        operand = "mul";
    } else if (operand == "div") {
        curr /= parseFloat(show.innerText);
        show.innerText = 0;
        operand = "mul";
    }else {
        curr *= parseFloat(show.innerText);
        show.innerText = 0;
        operand = 'mul';
    }
});

div.addEventListener('click', () => {
    if (curr == 0) {
        curr += parseFloat(show.innerText);
        show.innerText = 0;
        operand = 'div';
    }else if ( operand == "eql") {
        operand = "div";
        show.innerText = 0;
    } else if (operand == "add") {
        curr += parseFloat(show.innerText);
        show.innerText = 0;
        operand = "div";
    } else if (operand == "mul") {
        curr *= parseFloat(show.innerText);
        show.innerText = 0;
        operand = "div";
    } else if (operand == "div") {
        curr /= parseFloat(show.innerText);
        show.innerText = 0;
        operand = "div";
    } else {
        curr == 0 ? show.innerText = 0: curr /= parseFloat(show.innerText);
        show.innerText = 0;
        operand = 'div';
    }
});

clear.addEventListener('click', () => {
    curr = 0;
    show.innerText = '0';
    operand = "";
});
back.addEventListener('click', () => {
    if (operand == "eql") {
        show.innerText = 0;
        curr = 0;
        operand = "";
    }
    let a = show.innerText.split('')
    a.pop();
    a.length == 0 ? show.innerText = 0 :show.innerText = a.join("");
});


eql.addEventListener('click', () => {
    if (operand == 'add') {
        curr += parseFloat(show.innerText);
        show.innerText = curr;
        operand = "eql";
    } else if (operand == 'minus') {
        curr -= parseFloat(show.innerText);
        show.innerText = curr;
        operand = "eql";
    } else if (operand == "mul") {
        curr *= parseFloat(show.innerText);
        show.innerText = curr;
        console.log(curr);
        operand = "eql";
    } else if (operand == 'div') {
        if (show.innerText != 0) {
            curr /= parseFloat(show.innerText);
            show.innerText = curr;
            operand = "eql";
        } else {
            show.innerText = "0"
            curr = 0;
            operand = "eql";
        }
    }
})
