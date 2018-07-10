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

export default class DependentTextareaCount extends PureComponent {

  constructor(props) {
    super(props);
  }
  

  render() {
    return (
      <div>
        <Header chars_left={this.props.chars_left} />
        <Textarea onChangeHandler={this.props.onChangeHandler} />
      </div>
    );
  }
}
