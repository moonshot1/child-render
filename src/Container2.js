import React, { PureComponent } from 'react';
import SimpleTextareaCount from './SimpleTextareaCount';
import { Header, Textarea } from './DependentTextareaCount';
import logo from './logo.svg';
import './App.css';

class Container2 extends PureComponent {

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
        <Header chars_left={this.state.chars_left} />
        <Textarea onChangeHandler={this.handleChange.bind(this)} />
      </div>
    );
  }
}

export default Container2;