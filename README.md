# Ex06 BMI Calculator
## Date: 

## AIM
To develop a responsive and interactive Body Mass Index (BMI) Calculator using React that allows users to input their height and weight, and calculates their BMI to categorize their health status (e.g., Underweight, Normal, Overweight, Obese).

## DESIGN STEPS

### STEP 1: Initialize React Project

<li>Create a new React app using create-react-app.</li>
<li>Install React Router using:</li>
npm install react-router-dom

### STEP 2: Set Up Routing

Create routing structure with react-router-dom:

<li>Home route (/) – Intro or Navigation</li>

<li>BMI Calculator route (/bmi)</li>

<li>Result route (/result)</li>

### STEP 3: Design the BMI Form Page

<li>Create a form to accept Height (in cm or m) and Weight (in kg).</li>

<li>On form submit, navigate to the result page with entered values via URL query params or context/state.</li>

## STEP 4: Handle Input Validation

<li>Check if height and weight are valid numbers.</li>

<li>Optionally, show error messages for invalid inputs.</li>

### STEP 5: Perform BMI Calculation

<li>In the result component:

<li>Extract height and weight from the route (URL or passed state).</li>

<li>Apply the BMI formula:</li>

![image](https://github.com/user-attachments/assets/ec785506-c96b-489e-8783-fb1a5d36101a)
​
 
<li>Convert height from cm to m if needed.</li></li>

### STEP 6: Display Result

<li>Show calculated BMI.</li>

<li>Show category based on BMI range:

<li>Underweight, Normal, Overweight, Obese, etc.</li></li>

### STEP 7: Navigation Options

<li>Provide a button to go back to the BMI form to calculate again.</li>

### STEP 8: Enhancements

<li>Add styling using CSS or Tailwind.</li>

## PROGRAM
main.jsx
```
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
app.jsx
```
import Calculator from "./Calculator";

function App() {
  return (
    <div>
      <Calculator />
    </div>
  );
}

export default App;
```
index.css
```
body {
  margin: 0;
  font-family: "Poppins", sans-serif;
  background: linear-gradient(135deg, #ff9a9e, #fad0c4, #a18cd1);
  height: 100vh;
}

/* Center everything */
.app {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Glass card */
.card {
  backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.2);
  padding: 40px;
  border-radius: 25px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 320px;
  color: #fff;
  transition: 0.3s;
}

.card:hover {
  transform: scale(1.02);
}

h1 {
  margin-bottom: 20px;
}

/* Inputs */
input {
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border-radius: 12px;
  border: none;
  outline: none;
  font-size: 15px;
}

/* Buttons */
.buttons {
  display: flex;
  justify-content: space-between;
}

button {
  width: 48%;
  padding: 10px;
  border-radius: 12px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  background: linear-gradient(45deg, #ff758c, #ff7eb3);
  color: white;
  transition: 0.3s;
}

button:hover {
  transform: scale(1.05);
}

.reset {
  background: linear-gradient(45deg, #a1c4fd, #c2e9fb);
  color: #333;
}

/* Result */
.result {
  margin-top: 20px;
}

.result h2 {
  font-size: 34px;
  margin: 10px 0;
}

.result p {
  font-size: 18px;
}
```
calculator.jsx
```
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
```


## OUTPUT

![alt text](<Screenshot 2026-03-23 124911.png>)
![alt text](<Screenshot 2026-03-23 124938.png>)
![alt text](<Screenshot 2026-03-23 125005.png>)


## RESULT
The BMI Calculator successfully takes user input for height and weight, performs the BMI calculation in real-time using React state and event handling, and displays the BMI value along with the corresponding health category.