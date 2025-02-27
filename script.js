
const display = document.getElementById("display")
function appendNumber(number){
    display.value += number
}

function appendOperator(operator){
    display.value += operator
}

function appendDot() {
    display.value += '.';
}
function clearDisplay(){
    display.value = '';
}

function calculate(){
    try {
        display.value = eval(display.value);
    } catch(e) {
        display.value = 'Error';
        alert(e);
    }
}

function back(){
    display.value = display.value.slice(0, -1);
}
function findSquare(){ 
     display.value = (display.value)**2;
 }
     