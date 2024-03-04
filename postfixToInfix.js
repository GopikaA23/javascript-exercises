const _ = require("lodash");

function postfixToInfix(expression) {
  const array = [];
  _.forEach(expression, (element) => {
    if (isOperator(element)) {
      const operand2 = array.pop();
      const operand1 = array.pop();
      array.push(operand1 + element + operand2);
    } else {
      array.push(element);
    }
  });
  return array;
}

function isOperator(elem) {
  const operators = ["+", "-", "*", "/"];
  return _.includes(operators, elem);
}

const expression = ["a", "4", "+", "b", "*", "1", "5", "+", "/"];
const out = postfixToInfix(expression);
const res = _.map(out, (a) => _.join(a, ","));
console.log(res);
