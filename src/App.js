import React from "react";
import './App.css'
import { useState, useEffect } from "react";

function App() {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  const reload = () => {
    window.location.reload();
  };
  useEffect(() => {
    // This effect will run whenever bmi is updated
    if (bmi < 25 && bmi > 0) {
      setMessage("you're underweight");
    } else if (bmi >= 25 && bmi < 30) {
      setMessage("you're healthy");
    } else if (bmi >= 0) {
      setMessage("");
    } else {
      setMessage("you're overweight");
    }
  }, [bmi]);
  const calcBmi = async (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("please enter a valid enter height and weight");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(2));
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form action="" onSubmit={calcBmi}>
          <div>
            <label htmlFor="">Weight (ibs)</label>
            <input
              type="text"
              placeholder="Enter Weight value"
              onChange={(e) => {
                setWeight(e.target.value);
              }}
              value={weight}
            />
          </div>
          <div>
            <label htmlFor="">Height (in)</label>
            <input
              type="text"
              placeholder="Enter Height value"
              value={height}
              onChange={(e) => {
                setHeight(e.target.value);
              }}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload}>
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;