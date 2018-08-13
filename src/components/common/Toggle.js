import React, { Component } from 'react'
import { observer } from 'mobx-react';

@observer
export default class Toggle extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="toggle-button">
          <input onClick={this.props.onClick} type="checkbox" id={this.props.name} checked={this.props.value} />
          <label for={this.props.name}><i></i></label>
      </div>
    )
  }
}
