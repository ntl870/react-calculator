import "./App.css";
import React, { Component } from "react";
import Numberbtn from "./Components/Numberbtn";

class App extends Component {
  state = {
    temp: '',
    ans: '',
    operating: true,
    plus: false,
    subtract: false,
    multiply: false,
    divide: false,
  };
  subtractCount = 0;
  multiplyCount = 0;
  divideCount = 0;
  AnsTemp = [];

  getInput = (e) => {
    let ButtonValue = e.target.value;
    let temp = this.AnsTemp;
    temp.push(ButtonValue);
    temp = temp.join("");
    temp = Number(temp);
    this.setState({
      ...this.state,
      operating: true,
      temp: temp,
    });
  };

  operatorPlus = () => {
    let tempState = this.state;
    tempState.ans = Number(tempState.ans) + Number(tempState.temp);
    this.AnsTemp = [];
    tempState.temp = [];
    tempState.operating = false;
    tempState.multiply = false;
    tempState.plus = true;
    tempState.subtract = false;
    tempState.divide = false;
    this.setState({
      tempState,
    });
  };

  operatorSubtract = () => {
    let tempState = this.state;
    if (this.subtractCount === 0) {
      tempState.ans = Math.abs(Number(tempState.ans) - Number(tempState.temp));
      this.subtractCount++;
    } else {
      tempState.ans = Number(tempState.ans) - Number(tempState.temp);
    }
    this.AnsTemp = [];
    tempState.temp = [];
    tempState.operating = false;
    tempState.multiply = false;
    tempState.plus = false;
    tempState.subtract = true;
    tempState.divide = false;
    this.setState({
      tempState,
    });
  };

  operatorMultiply = () => {
    let tempState = this.state;
    if (this.multiplyCount === 0) {
      // tempState.ans = Number(tempState.temp);
      this.multiplyCount++;
    } else {
      if(Number(tempState.temp) === 0){
        tempState.temp = 1;
      }
      tempState.ans = Number(tempState.ans) * Number(tempState.temp);
    }
    this.AnsTemp = [];
    tempState.temp = [];
    tempState.operating = false;
    tempState.multiply = true;
    tempState.plus = false;
    tempState.subtract = false;
    tempState.divide = false;
    this.setState({
      tempState,
    });
  };

  operatorDivide = () => {
    let tempState = this.state;
    if (this.divideCount === 0) {
      tempState.ans = Number(tempState.temp);
      this.multiplyCount++;
    } else {
      if (Number(tempState.temp) === 0) {
        tempState.ans = "Error: Divide by 0";
      } else {
        tempState.ans = Number(tempState.ans) / Number(tempState.temp);
      }
    }
    this.AnsTemp = [];
    tempState.temp = [];
    tempState.operating = false;
    tempState.multiply = false;
    tempState.plus = false;
    tempState.subtract = false;
    tempState.divide = true;
    this.setState({
      tempState,
    });
  };

  operatorEqual = () => {
    let tempState = this.state;
    if (this.state.plus) {
      tempState.ans += tempState.temp;
      tempState.temp = 0;
      tempState.plus = false;
      tempState.operating = false;
      this.setState({
        tempState,
      });
    }
    else if (this.state.subtract) {
      tempState.ans -= Number(tempState.temp);
      tempState.temp = 0;
      tempState.subtract = false;
      tempState.operating = false;
      this.setState({
        tempState,
      });
    }
    else if (this.state.multiply) {
      tempState.ans *= Number(tempState.temp);
      tempState.temp = 1;
      tempState.multiply = false;
      tempState.operating = false;
      this.setState({
        tempState,
      });
    }
    else if (this.state.divide) {
      tempState.ans /= Number(tempState.temp);
      tempState.temp = 1;
      tempState.divide = false;
      tempState.operating = false;
      this.setState({
        tempState,
      });
    }
  };

  render() {
    console.log(this.state);
    if (this.state.operating) {
      return (
        <div className="App">
          <Numberbtn
            getInput={this.getInput}
            display={this.state.temp}
            equal={this.operatorEqual}
            plus={this.operatorPlus}
            subtract={this.operatorSubtract}
            multiply={this.operatorMultiply}
            divide={this.operatorDivide}
          />
        </div>
      );
    } else {
      return (
        <div className="App">
          <Numberbtn
            getInput={this.getInput}
            display={this.state.ans}
            equal={this.operatorEqual}
            plus={this.operatorPlus}
            subtract={this.operatorSubtract}
            multiply={this.operatorMultiply}
            divide={this.operatorDivide}
          />
        </div>
      );
    }
  }
}

export default App;
