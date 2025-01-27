// graphFunctions.js

import * as math from 'mathjs';

/**
 * Parse and evaluate a mathematical expression for graphing.
 * @param {string} expression - The mathematical expression (e.g., "x^2").
 * @param {number} xValue - The value of x to evaluate.
 * @returns {number} - The evaluated result.
 */
function evaluateExpression(expression, xValue) {
  try {
    const scope = { x: xValue };
    return math.evaluate(expression, scope);
  } catch (error) {
    console.error("Invalid expression:", error);
    throw new Error("Invalid mathematical expression.");
  }
}

/**
 * Generate data points for plotting a graph.
 * @param {string} expression - The mathematical expression (e.g., "x^2").
 * @param {number} xMin - The minimum x-value.
 * @param {number} xMax - The maximum x-value.
 * @param {number} step - The step size for x-values.
 * @returns {Array} - An array of {x, y} objects for graphing.
 */
function generateGraphData(expression, xMin, xMax, step = 0.1) {
  const data = [];

  for (let x = xMin; x <= xMax; x += step) {
    try {
      const y = evaluateExpression(expression, x);
      data.push({ x, y });
    } catch (error) {
      console.warn(`Skipped x=${x} due to error:`, error);
    }
  }

  return data;
}

export { evaluateExpression, generateGraphData };