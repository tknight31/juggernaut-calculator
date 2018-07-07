import React from "react";

class Form extends React.Component {
  state = {
    weight: ""
  };

  handleInputChange = event => {
    this.setState({
      weight: event.target.value
    });
  };

  handleOnClick = event => {
    this.props.calculateWeights(this.state.weight);
  };

  render() {
    return (
      <div className="basic-form">
        <input
          onChange={this.handleInputChange}
          placeholder="weight"
          type="text"
          name="weight"
          value={this.state.weight}
        />
        <button onClick={this.handleOnClick}>Calculate!</button>
      </div>
    );
  }
}

export default Form;
