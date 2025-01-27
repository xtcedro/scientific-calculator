// Graph.jsx
import React, { useState, useRef, useEffect } from "react";
import "./Graph.css";
import { generateGraphData } from "./utils/graphFunctions";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const Graph = () => {
  const [expression, setExpression] = useState("x^2");
  const [xMin, setXMin] = useState(-10);
  const [xMax, setXMax] = useState(10);
  const [step, setStep] = useState(0.1);
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: { labels: [], datasets: [] },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
        },
        scales: {
          x: { title: { display: true, text: "X-axis" } },
          y: { title: { display: true, text: "Y-axis" } },
        },
      },
    });
    return () => chartInstance.current.destroy();
  }, []);

  const plotGraph = () => {
    try {
      const dataPoints = generateGraphData(expression, xMin, xMax, step);
      const labels = dataPoints.map((point) => point.x.toFixed(2));
      const data = dataPoints.map((point) => point.y);

      chartInstance.current.data.labels = labels;
      chartInstance.current.data.datasets = [
        {
          label: `y = ${expression}`,
          data: data,
          borderColor: "#4CAF50",
          borderWidth: 2,
          fill: false,
        },
      ];
      chartInstance.current.update();
    } catch (error) {
      alert("Error plotting graph: " + error.message);
    }
  };

  return (
    <div id="graph-container">
      <canvas className="graph-canvas" ref={chartRef}></canvas>
      <div className="graph-controls">
        <input
          type="text"
          value={expression}
          onChange={(e) => setExpression(e.target.value)}
          placeholder="Enter expression (e.g., x^2)"
        />
        <input
          type="number"
          value={xMin}
          onChange={(e) => setXMin(Number(e.target.value))}
          placeholder="X Min"
        />
        <input
          type="number"
          value={xMax}
          onChange={(e) => setXMax(Number(e.target.value))}
          placeholder="X Max"
        />
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          placeholder="Step"
        />
        <button onClick={plotGraph}>Plot Graph</button>
      </div>
    </div>
  );
};

export default Graph;