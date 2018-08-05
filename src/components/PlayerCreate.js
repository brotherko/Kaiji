import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
export default class PlayerCreate extends Component {
  constructor(props) {
    super(props)
  }
  changeHandler = (player, event) => {
    player.update({
      name: event.target.value
    })
  }
  clickHandler = (event) => {
    event.preventDefault();
    this.props.store.createPlayer();
  }
  render() {
    return (
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Manage Players
            </h1>
            <h2 className="subtitle">
              Add, edit and remove players
            </h2>
            <div className="content">
            <form>
              {this.props.store.players.map((player, index) => 
                <div className="field">
                  <label className="label">Player {index}</label>
                  <div className="control">
                    <input className="input" name={player.id} value={player.name} onChange={this.changeHandler.bind(this, player)} />
                  </div>
                </div>
              )}
            <button className="button" onClick={this.clickHandler}>
            Add new player
            </button>
            </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
