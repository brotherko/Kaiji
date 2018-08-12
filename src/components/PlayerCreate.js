import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('stores')
@observer
export default class PlayerCreate extends Component {
  changeHandler = (player, event) => {
    player.update({
      name: event.target.value
    })
  }
  render() {
    const { players, createPlayer } = this.props.stores.playerStore;
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
              {players.map((player, index) => 
                <div className="field" key={player.id}>
                  <label className="label">Player {index}</label>
                  <div className="control">
                    <input className="input" name={player.id} value={player.name} onChange={this.changeHandler.bind(this, player)} />
                  </div>
                </div>
              )}
            <button className="button" onClick={ () => createPlayer() }>
            Add new player
            </button>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
