import React, { PureComponent } from 'react';
import SimpleTextareaCount from './SimpleTextareaCount';
import DependentTextareaCount from './DependentTextareaCount';
import logo from './logo.svg';
import './App.css';

class Container extends PureComponent {

  constructor(props) {
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
      <div className="App">
        <DependentTextareaCount onChangeHandler={this.handleChange.bind(this)} chars_left={this.state.chars_left} />
      </div>
    );
  }
}

export default Container;