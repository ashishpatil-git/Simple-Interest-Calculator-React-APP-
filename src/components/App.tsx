import React, { useState } from "react";
import "./App.css";
import { Stack, TextField, Button } from "@mui/material";

function App() {
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [time, setTime] = useState(0);
  const [Add, setAdd] = useState(0);

  const calculateSum = (e: any) => {
    e.preventDefault();
    if (principal === 0 || rate === 0 || time === 0) {
      alert("Enter valid Numbers");
    } else {
      let sum = (principal * rate * time) / 100;
      setAdd(sum);
    }
  };

  const handleClick = (e: any) => {
    setAdd(0);
    // window.location.reload();
    setPrincipal(0);
    setRate(0);
    setTime(0);
  };

  return (
    <div className="app">
      <div className="container">
        <div className="app-header">
          <h1>Simple Interest Calculator</h1>
          <p className="Subtitle">Calculate your interest Easily!</p>
        </div>

        <div className="total-amount-card">
          <h1 className="total_amount_heading">$ {Add}</h1>
          <p className="total_amt_para">Total Simple Interest</p>
        </div>

        <form onSubmit={calculateSum}>
          <div className="input_area">
            <div className="input_field">
              <TextField
                id="outlined-basic"
                label="$ Principal Amount"
                variant="outlined"
                type="number"
                value={principal || ""}
                onChange={(e) => setPrincipal(Number(e.target.value))}
              />
            </div>
            <div className="input_field">
              <TextField
                id="outlined-basic"
                label="Rate of Interest"
                variant="outlined"
                type="number"
                value={rate || ""}
                onChange={(e) => setRate(Number(e.target.value))}
              />
            </div>
            <div className="input_field">
              <TextField
                id="outlined-basic"
                label="Validity"
                variant="outlined"
                type="number"
                value={time || ""}
                onChange={(e) => setTime(Number(e.target.value))}
              />
            </div>
          </div>
          <div className="button_collection">
            <Stack direction="row" spacing={2}>
              <Button
                type="submit"
                variant="contained"
                style={{ backgroundColor: "green" }}
              >
                Calculate
              </Button>
              <Button onClick={handleClick} variant="outlined">
                Reset
              </Button>
            </Stack>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
