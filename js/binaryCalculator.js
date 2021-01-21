let dispBox = document.getElementById('res');
let dispString = "";
let buttons = document.querySelectorAll('.btn');
// declare the firstOperand
let firstOperand
// declare the secondOperand
let secondOperand
// delcare operator
let operator
// when an operator is pressed take the length of the firstOperand with the operator to slice the dispString to get the secondOperand
let foAndOpLength

buttons.forEach((btn) => {
  btn.addEventListener('click', function(event) {
    // set the character of what button is being pressed
    let char = event.target.innerHTML;
    dispString = dispString + event.target.innerHTML;
    dispBox.innerHTML = dispString;
    // console.log(dispString)
    // set up switch statement to match the button's value to the specific case label
    switch (char) {
      // if the char is C clear the box
      case 'C':
        // console.log(dispString)
        dispString = ''
        dispBox.innerHTML = dispString
        break;
      case '+':
        firstOperand = dispString.slice(0, dispString.length - 1)
        console.log('firstOperand is: ', firstOperand)
        // console.log('the length is: ',dispString.length)
        foAndOpLength = dispString.length
        // console.log('length is: ', foAndOpLength)
        break;
      case '-':
        firstOperand = dispString.slice(0, dispString.length - 1)
        foAndOpLength = dispString.length
        // console.log('firstOperand is: ', firstOperand)
        break;
      case '*':
        firstOperand = dispString.slice(0, dispString.length - 1)
        foAndOpLength = dispString.length
        // console.log('firstOperand is: ', firstOperand)
        break;
      case '/':
        firstOperand = dispString.slice(0, dispString.length - 1)
        foAndOpLength = dispString.length
        // console.log('firstOperand is: ', firstOperand)
        break;
      case '=':
        secondOperand = dispString.slice(foAndOpLength, dispString.length - 1)
        operator = dispString[foAndOpLength - 1]
        console.log('firstOperand is: ', firstOperand)
        console.log('Second operand is: ', secondOperand)
        // convert the operand strings to base 10 integers before reconverting
        // to binary numbers
        firstOperand = parseInt(firstOperand, 2)
        secondOperand = parseInt(secondOperand, 2)
        console.log('Second operand is after conversion: ', firstOperand)
        console.log('Second operand is after conversion: ', secondOperand)
        if (operator === '+') {
          dispString = firstOperand + secondOperand
        } else if (operator === '-') {
          dispString = firstOperand - secondOperand
        } else if (operator === '*') {
          dispString = firstOperand * secondOperand
        } else if (operator === '/') {
          dispString = firstOperand / secondOperand
        }
        dispString = dispString.toString(2)
        console.log('dispString is: ',dispString)
        dispBox.innerHTML = dispString
      default:
        console.log(dispBox.innerHTML)
    }
})})
