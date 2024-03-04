const _ = require("lodash");

function infixToPostfix(expression) {
  const operators = "+-*/";
  const operator = [];
  const result = [];

  _.forEach(expression, (element) => {
    if (_.includes(operators, element)) {
      while (_.includes(operators, _.last(operator))) {
        result.push(operator.pop());
      }
      operator.push(element);
    } else {
      result.push(element);
    }
  });

  while (operator.length) {
    result.push(operator.pop());
  }

  return result;
}

const expression = ["a", "+", "b", "*", "c"];
const result = infixToPostfix(expression);
console.log(result);

const assertions = [
  {
    input: ["a", "+", "b", "*", "c"],
    output: ["a", "b", "+", "c", "*"],
  },
  {
    input: ["a", "/", "b", "+", "c", "-", "d", "*", "f"],
    output: ["a", "b", "/", "c", "+", "d", "-", "f", "*"],
  },
  {
    input: [
      "a",
      "*",
      "b",
      "*",
      "c",
      "-",
      "9",
      "+",
      "d",
      "/",
      "2",
      "-",
      "e",
      "*",
      "h",
      "+",
      "i",
    ],
    output: [
      "a",
      "b",
      "*",
      "c",
      "*",
      "9",
      "-",
      "d",
      "+",
      "2",
      "/",
      "e",
      "-",
      "h",
      "*",
      "i",
      "+",
    ],
  },
  {
    input: ["x", "-", "y", "+", "z", "/", "8", "*", "f", "-", "g"],
    output: ["x", "y", "-", "z", "+", "8", "/", "f", "*", "g", "-"],
  },
  {
    input: ["7", "+", "a", "/", "b", "-", "c", "*", "d", "/", "f"],
    output: ["7", "a", "+", "b", "/", "c", "-", "d", "*", "f", "/"],
  },
];

_.map(assertions, ({ input, output }) => {
  const verdict = _.isEqual(infixToPostfix(input), output) ? "Pass" : "Fail";
  console.log(`${verdict}: infix: ${input.join('')} -> postfix: ${output.join('')}`);
});
