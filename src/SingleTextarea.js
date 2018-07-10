import React, { PureComponent } from 'react'

export default class SingleTextarea extends PureComponent {

 

  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.props.onChangeHandler !== nextProps.onChangeHandler);

    /* return this.props.onChangeHandler != nextProps.onChangeHandler;  */
    return false;
  }

  render() {
    return (
      <div>
        <textarea onChange={this.props.onChangeHandler}></textarea>
      </div>
    )
  }
}
