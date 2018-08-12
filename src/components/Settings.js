import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';

import Toggle from './common/Toggle';

@inject('stores')
@observer
export default class Settings extends Component {
  render() {
    const { gameStore } = this.props.stores;
    return (
      <section id="settings" className="hero is-light">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Settings
            </h1>
            <h2 className="subtitle">
              Change the game settings
            </h2>
            <div className="content">
              <h4>Game Rules</h4>
              <div className="columns is-mobile">
                <div className="column is-10">
                  Dollars / Card
                </div>
                <div className="column is-2">
                  <div className="field">
                    <div className="control">
                      <input className="input" value={gameStore.rules.dollarsPerCard} onChange={(event) => { gameStore.rules.dollarsPerCard = event.target.value }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="columns is-mobile">
                <div className="column is-10">
                  Double Chao
                </div>
                <div className="column is-2">
                  <Toggle onClick={() => gameStore.toggleRule('doubleChao')} name="doubleChao" value={gameStore.rules.doubleChao} />
                </div>
              </div>
              <div className="columns is-mobile">
                <div className="column is-10">
                  Triple Chao
                </div>
                <div className="column is-2">
                  <Toggle onClick={() => gameStore.toggleRule('tripleChao')} name="tripleChao" value={gameStore.rules.tripleChao} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
