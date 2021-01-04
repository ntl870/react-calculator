import "./App.css";
import React, { Component } from "react";
import Numberbtn from "./Components/Numberbtn";

class App extends Component {
  state = {
    temp: [0],
    ans: 0,
    operating: true,
    plus: false,
    subtract: false,
    multiply: false,
    divide: false,
  };

  AnsTemp = [];

  getInput = (e) => {
    let ButtonValue = e.target.value;
    let temp = this.AnsTemp;
    temp.push(ButtonValue);
    temp = temp.join('');
    temp = Number(temp);
    this.setState({
      ...this.state,
      operating : true,
      temp : temp
    })
  };


  operatorPlus = () => {
    let tempState = this.state;
    tempState.ans = tempState.ans + tempState.temp;
    this.AnsTemp = [];
    tempState.temp = [];
    tempState.operating = false;
    tempState.plus = true;
    this.setState({
      tempState
    })
  }

  operatorSubtract = () => {
    let tempState = this.state;
    tempState.ans = tempState.ans - tempState.temp;
    this.AnsTemp = [];
    tempState.temp = [];
    tempState.operating = false;
    tempState.subtract = true;
    this.setState({
      tempState
    })
  }

  operatorEqual = () => {
    let tempState = this.state;
    if (this.state.plus) {
      tempState.ans += tempState.temp;
      tempState.temp = 0;
      tempState.plus = false;
      tempState.operating = false;
      this.setState({
        tempState
      });
    }
    if (this.state.subtract) {
      tempState.ans -= tempState.temp;
      tempState.temp = 0;
      tempState.subtract = false;
      tempState.operating = false;
      this.setState({
        tempState
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
          />
        </div>
      );
    }
  }
}

export default App;
