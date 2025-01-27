// calculatorFunctions.js

/**
 * Perform basic arithmetic operations
 * @param {number} num1 - First number
 * @param {number} num2 - Second number
 * @param {string} operator - The operator (+, -, *, /)
 * @returns {number} - Result of the operation
 */
function calculate(num1, num2, operator) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) throw new Error('Division by zero is not allowed.');
        return num1 / num2;
      default:
        throw new Error('Invalid operator.');
    }
  }
  
  /**
   * Perform advanced scientific operations
   * @param {string} operation - The operation name (e.g., sin, cos, log)
   * @param {number} value - The input value
   * @returns {number} - Result of the operation
   */
  function scientificOperation(operation, value) {
    switch (operation) {
      case 'sin':
        return Math.sin(value);
      case 'cos':
        return Math.cos(value);
      case 'tan':
        return Math.tan(value);
      case 'log':
        return Math.log10(value);
      case 'ln':
        return Math.log(value);
      case 'sqrt':
        if (value < 0) throw new Error('Square root of negative number is invalid.');
        return Math.sqrt(value);
      case 'exp':
        return Math.exp(value);
      case 'factorial':
        return factorial(value);
      default:
        throw new Error('Invalid scientific operation.');
    }
  }
  
  /**
   * Calculate the factorial of a number
   * @param {number} num - The input number (non-negative integer)
   * @returns {number} - The factorial result
   */
  function factorial(num) {
    if (num < 0) throw new Error('Factorial of negative number is invalid.');
    if (num === 0 || num === 1) return 1;
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  }
  
  /**
   * Memory storage functionality
   */
  let memory = 0;
  
  function storeMemory(value) {
    memory = value;
  }
  
  function recallMemory() {
    return memory;
  }
  
  function clearMemory() {
    memory = 0;
  }
  
  export { calculate, scientificOperation, factorial, storeMemory, recallMemory, clearMemory };