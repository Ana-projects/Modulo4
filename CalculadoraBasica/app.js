
var add = (number1, number2) => number1 + number2;
var subtract = (number1, number2) => number1 - number2;
var multiply = (number1, number2) => number1 * number2;
var divide = (number1, number2) => number1 / number2;

var getOperand1 = () => parseInt(document.getElementById("input-operand1").value);
var getOperand2 = () => parseInt(document.getElementById("input-operand2").value);

var showResult = (result) => {
    if (isNaN(result)){
        document.getElementById("result").innerText = "Error";
    } else {
        document.getElementById("result").innerText = result;
    }
}

var handleClickAdd = () => {
    showResult(add(getOperand1(), getOperand2()));
}

var handleClickSubtract = () => {
    showResult(subtract(getOperand1(), getOperand2()));
}

var handleClickMultiply = () => {
    showResult(multiply(getOperand1(), getOperand2()));
}

var handleClickDivide = () => {
    showResult(divide(getOperand1(), getOperand2()));
}

document.getElementById("button-add").addEventListener("click", handleClickAdd);
document.getElementById("button-subtract").addEventListener("click", handleClickSubtract);
document.getElementById("button-multiply").addEventListener("click", handleClickMultiply);
document.getElementById("button-divide").addEventListener("click", handleClickDivide);
