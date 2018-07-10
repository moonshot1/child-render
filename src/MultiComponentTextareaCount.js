import React, { PureComponent } from 'react';

export const Header = (props) => {
  return (
    <p>Characters Left: {props.chars_left}</p>
  )
}

export const Textarea = (props) => {
  return (
    <textarea onChange={props.onChangeHandler}></textarea>
  )
}

export default class MultiComponentTextareaCount extends PureComponent {

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
      <div>
        <Header chars_left={this.state.chars_left} />
        <Textarea onChangeHandler={this.handleChange.bind(this)}/>
      </div>
    );
  }
}
