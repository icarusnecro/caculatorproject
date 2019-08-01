let display = document.getElementById("display");
let isOperatorClicked = false;
let isEqualClicked = false;
let operator1;
let firstOperand;
let secondOperand;
let isNegativeClicked = false;

function clickNumber(number){
    if (isOperatorClicked == true) {
        firstOperand = display.value;
        display.value = number;
        isOperatorClicked = false;
    }
    else {
        display.value += number;
    }
}
function clickOperator(operator){
    isOperatorClicked = true;
    operator1 = operator;
    isEqualClicked = false;
}
function clickEqual(){
    if(isEqualClicked && isNegativeClicked){
        firstOperand = parseInt(display.value);
    }else
    {
        firstOperand = parseInt(firstOperand);
        secondOperand = parseInt(display.value);
    }
    let result;
    switch(operator1){
        case "+" :
            result = firstOperand + secondOperand;
            break;
        case "-" :
            result = firstOperand - secondOperand;
            break;
        case "*" :
            result = firstOperand * secondOperand;
            break;
        case "/":
            if(secondOperand == 0) {

                result = 'error';
            }
            else{
                result = firstOperand / secondOperand;
            }
            break;
    }
    display.value = result;
    isEqualClicked = true;
    if (display.value == "undefined" || display.value == "NaN"){
        display.value = '';
    }

}
function clickReset(){
    isOperatorClicked = false;
    isEqualClicked = false;
    operator1 = '';
    firstOperand =undefined;
    secondOperand = undefined;
    display.value ='';

}
function negativeOperand(){
        display.value = -parseInt(display.value);
        isNegativeClicked = false;
}
