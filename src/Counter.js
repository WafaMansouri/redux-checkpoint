import React, { useState } from "react";
import { connect } from "react-redux";
import { decrement, increment } from "./actions/actions";
import "./App.css";
const Counter = (props) => {
  const [step, setStep] = useState(1);
  return (
    <div>
      <div className="counter">
        <div>
          <h1 style={{ color: "#DC143C" }}>Counter (choose your step)</h1>
          <select onChange={(e) => setStep(+e.target.value)}>
            <option value="1">1</option>
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
        </div>
        <button onClick={(e) => props.decrement(step)}>-</button>
        <span>{props.myCount}</span>
        <button onClick={(e) => props.increment(step)}>+</button>
      </div>
      <h3 style={{ color: "red", textAlign: "center" }}>{props.myAlert}</h3>
    </div>
  );
};
const mapStateToProps = (state) => {
  {
    return {
      myCount: state.CounterReducer.count,
      myAlert: state.AlertReducer.alerts,
    };
  }
};

export default connect(mapStateToProps, { decrement, increment })(Counter);
