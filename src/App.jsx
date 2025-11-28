import { useState } from 'react'
import './App.css'
import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // optional
function App() {
  const [height, setheight] = useState("");
  const [weight, setweight] = useState("");
  const [bmi, setbmi] = useState(null);
  const [bmistatus, setBmistatus] = useState("");
  const calculateBmi = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setbmi(bmiValue.toFixed(2));
      if (bmiValue < 18.5) {
        setBmistatus("Underweight");
      }
      else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setBmistatus("Normal weight");
      }
      else if (bmiValue >= 25 && bmiValue < 29.9) {
        setBmistatus("over weight");
      }
      else {
        setBmistatus("Abnormal");
      }
    } else
      setbmi(null);
  }
  return (
    <>
      <div className=" BMI container ">
        <div className='data'>
          <h1>Body Mass Index Calculator</h1>
          <div className='input-container'>
            <lable className="i">Height (cm):</lable>
            <input type="text" value={height} id='height' onChange={(e) => setheight(e.target.value)} />
          </div>
          <div className='input-container'>
            <lable className="i">Weight (kg):</lable>
            <input type="text" value={weight} onChange={(e) => setweight(e.target.value)} id='weight' />
          </div>
          <button onClick={calculateBmi} >Calculate BMI</button>
          {bmi !== null && (
            <div className='result'>
              <p>Your BMI is:{bmi}</p>
              <p>Status: {bmistatus}</p>
            </div>)}
        </div>
      </div>
    </>
  )
}
export default App;
