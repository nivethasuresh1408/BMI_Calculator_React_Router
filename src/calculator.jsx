import { useState } from "react";
import "./index.css";

function Calculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (!height || !weight || height <= 0 || weight <= 0) {
      alert("Enter valid values ✨");
      return;
    }

    const h = height / 100;
    const result = (weight / (h * h)).toFixed(2);
    setBmi(result);

    if (result < 18.5) setCategory("🌸 Underweight");
    else if (result < 24.9) setCategory("✨ Normal");
    else if (result < 29.9) setCategory("🔥 Overweight");
    else setCategory("⚠️ Obese");
  };

  const reset = () => {
    setHeight("");
    setWeight("");
    setBmi(null);
    setCategory("");
  };

  return (
    <div className="app">
      <div className="card">
        <h1>BMI Calculator</h1>

        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <div className="buttons">
          <button onClick={calculateBMI}>Calculate</button>
          <button className="reset" onClick={reset}>
            Reset
          </button>
        </div>

        {bmi && (
          <div className="result">
            <h2>{bmi}</h2>
            <p>{category}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Calculator;