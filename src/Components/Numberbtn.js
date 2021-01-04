import "./Numberbtn.css";
import React from "react";
const Numberbtn = (props) => {
  return (
    <div className="Numberbtn">
      <div className="calculator card">
        <input
          type="text"
          className="text-light calculator-screen z-depth-1"
          value={props.current}
          disabled
        />

        <div className="calculator-keys">
          <button id="math-sign" type="button" className="operator btn" value="+" onClick={props.plus}>
            +
          </button>
          <button id="math-sign" type="button" className="operator btn" value="-">
            -
          </button>
          <button id="math-sign" type="button" className="operator btn" value="*">
            &times;
          </button>
          <button id="math-sign" type="button" className="operator btn" value="/">
            &divide;
          </button>

          <button type="button" value="7" className="btn btn-dark waves-effect" onClick={props.getInput}>
            7
          </button>
          <button type="button" value="8" className="btn btn-dark waves-effect" onClick={props.getInput}>
            8
          </button>
          <button type="button" value="9" className="btn btn-dark waves-effect" onClick={props.getInput}>
            9
          </button>

          <button type="button" value="4" className="btn btn-dark waves-effect" onClick={props.getInput}>
            4
          </button>
          <button type="button" value="5" className="btn btn-dark waves-effect" onClick={props.getInput}>
            5
          </button>
          <button type="button" value="6" className="btn btn-dark waves-effect" onClick={props.getInput}>
            6
          </button>

          <button type="button" value="1" className="btn btn-dark waves-effect" onClick={props.getInput}>
            1
          </button>
          <button type="button" value="2" className="btn btn-dark waves-effect" onClick={props.getInput}>
            2
          </button>
          <button type="button" value="3" className="btn btn-dark waves-effect" onClick={props.getInput}>
            3
          </button>

          <button type="button" value="0" className="btn btn-dark waves-effect" onClick={props.getInput}>
            0
          </button>
          <button type="button" className="decimal function btn btn-dark" value=".">
            .
          </button>
          <button
            type="button"
            className="all-clear function btn btn-danger btn-sm"
            value="all-clear"
          >
            AC
          </button>

          <button
            type="button"
            className="equal-sign operator btn btn-primary"
            value="=" 
            onClick={props.equal}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Numberbtn;
