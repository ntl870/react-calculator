import "./App.css";
import React, { Component } from "react";
import Numberbtn from "./Components/Numberbtn";

class App extends Component {
  AnsTemp = [];
  state = {
    temp: [0],
    display : 0,
    ans: 0,
  };

  getInput = (e) => {
    let ButtonValue = e.target.value;
    this.AnsTemp.push(ButtonValue);
    let temp = this.AnsTemp;
    temp = temp.join("");
    temp = Number(temp);
    this.setState({
      ...this.state,
      temp: temp,
    });
  };

  operatorPlus = () => {
    let tempState = this.state;
    this.AnsTemp = [];
    tempState.temp = Number(tempState.temp);
    tempState.ans += tempState.temp;
    tempState.temp = [0];
    this.setState({
      ...this.state,
      temp : tempState.temp,
      ans: tempState.ans
    })
  };

  operatorEqual = () => {
    let tempState = this.state;
    this.setState({
      ...this.state,
      display : tempState.ans
    })
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Numberbtn
          getInput={this.getInput}
          current={this.state.display}
          equal={this.operatorEqual}
          plus={this.operatorPlus}
        />
      </div>
    );
  }
}

export default App;
