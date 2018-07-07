import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MainTable from "./components/MainTable";
import MainTableDisplay from "./components/MainTableDisplay";
import Form from "./components/Form";

class App extends Component {
  state = {
    weight: ""
  };

  calculateWeights = newWeight => {
    this.setState({
      weight: newWeight
    });
  };

  render() {
    return (
      <div className="App">
        <Form calculateWeights={this.calculateWeights} />
        {this.state.weight ? (
          <MainTable weight={this.state.weight} />
        ) : (
          <MainTableDisplay />
        )}
      </div>
    );
  }
}

export default App;
