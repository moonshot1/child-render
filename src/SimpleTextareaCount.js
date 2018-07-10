import React, { Component } from 'react'

export default class SimpleTextareaCount extends Component {

  constructor(props){
    super(props);
    this.state = {
      chars_left: 4000
    }
  }

  handleChange(event) {
    var input = event.target.value;
    this.setState({
      chars_left: 4000 - input.length
    });
  }
render() {
  return (
    <div>
      <p>Characters Left: {this.state.chars_left}</p>
      <textarea onChange={this.handleChange.bind(this)}></textarea>
      
    </div>
  );
}
}

