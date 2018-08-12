import React, { Component } from 'react'

export default class Toggle extends Component {
  render() {
    return (
      <div class="toggle-button">
          <input type="checkbox" id="toggly" />
          <label for="toggly"><i></i></label>
      </div>
    )
  }
}
