import "./Numberbtn.css";
import React from "react";
const Numberbtn = (props) => {
  return (
    <div className="Numberbtn">
      <div className="calculator card">
        <input
          type="text"
          className="text-light calculator-screen z-depth-1"
          value={props.display}
          disabled
        />

        <div className="calculator-keys">
          <button
            id="math-sign"
            type="button"
            className={props.btnPlusStyle}
            value="+"
            onClick={props.plus}
          >
            +
          </button>
          <button
            id="math-sign"
            type="button"
            className={props.btnSubtractStyle}
            value="-"
            onClick={props.subtract}
          >
            -
          </button>
          <button
            id="math-sign"
            type="button"
            className={props.btnMultiplyStyle}
            value="*"
            onClick={props.multiply}
          >
            &times;
          </button>

          <button
            id="math-sign"
            type="button"
            className={props.btnDivideStyle}
            value="/"
            onClick={props.divide}
          >
            &divide;
          </button>

          <button
            type="button"
            value="7"
            className="btn btn-outline-dark waves-effect"
            onClick={props.getInput}
          >
            7
          </button>

          <button
            type="button"
            value="8"
            className="btn btn-outline-dark wave-effect"
            onClick={props.getInput}
          >
            8
          </button>
          <button
            type="button"
            value="9"
            className="btn btn-outline-dark wave-effect"
            onClick={props.getInput}
          >
            9
          </button>

          <button
            type="button"
            value="4"
            className="btn btn-outline-dark wave-effect"
            onClick={props.getInput}
          >
            4
          </button>
          <button
            type="button"
            value="5"
            className="btn btn-outline-dark wave-effect"
            onClick={props.getInput}
          >
            5
          </button>
          <button
            type="button"
            value="6"
            className="btn btn-outline-dark wave-effect"
            onClick={props.getInput}
          >
            6
          </button>

          <button
            type="button"
            value="1"
            className="btn btn-outline-dark wave-effect"
            onClick={props.getInput}
          >
            1
          </button>
          <button
            type="button"
            value="2"
            className="btn btn-outline-dark wave-effect"
            onClick={props.getInput}
          >
            2
          </button>
          <button
            type="button"
            value="3"
            className="btn btn-outline-dark wave-effect"
            onClick={props.getInput}
          >
            3
          </button>

          <button
            type="button"
            value="0"
            className="btn btn-outline-dark wave-effect"
            onClick={props.getInput}
          >
            0
          </button>
          <button
            type="button"
            className="btn btn-outline-dark"
            value="."
            onClick={props.getInput}
          >
            .
          </button>
          <button
            type="button"
            className="all-clear function btn btn-danger btn-sm"
            value="all-clear"
            onClick={props.operatorClear}
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
