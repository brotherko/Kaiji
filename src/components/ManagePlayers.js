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
      <section id="manage-players" className="hero is-primary is-fullheight">
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
              <div className="columns" key={player.id}>
                <div className="column">
                  <div className="field">
                    <h4 className="has-text-white has-text-centered">Player {index}</h4>
                    <div className="control">
                      <input className="input" name={player.id} value={player.name} onChange={this.changeHandler.bind(this, player)} />
                    </div>
                  </div>
                </div>
              </div>
              )}
            <a className="button is-primary is-outlined is-large is-fullwidth is-inverted" onClick={ () => createPlayer() }>
              New Player
            </a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
