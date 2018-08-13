import React, { Component } from 'react'
import { observer } from 'mobx-react';

@observer
export default class PlusBtn extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div
      onClick={() => this.props.formdata.updateByAmount(this.props.target, this.props.amount)}
      className="button is-rounded is-info is-inverted is-outlined">
        {this.props.amount}
      </div>
    )
  }
}
