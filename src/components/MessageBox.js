import React, { Component } from 'react'
import { inject, observer } from 'mobx-react';

@inject("store")
@observer
export default class MessageBox extends Component {
  render() {
    const message = this.props.store.messages.map((message) => (
      <div>{message.type}: {message.content}</div>
    ))
    return (
      <article className="message">
        <div className="message-header">
          <p>Error</p>
          <button onClick={this.props.store.clearMessage} className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">
          {message}
        </div>
      </article>  
    )
  }
}
