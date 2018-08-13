import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';

import Toggle from './common/Toggle';

@inject('stores')
@observer
export default class Settings extends Component {
  render() {
    const { gameStore } = this.props.stores;
    console.log(gameStore.rules)
    return (
      <section id="settings" className="hero is-light is-fullheight">
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
              <h6>Scoring System</h6>
              <div className="columns is-mobile is-centered has-text-centered">
                <div className="column has-text-centered">
                  <a className={(gameStore.rules.scoring === 'winner' ? 'is-info ' : '') + 'button is-rounded'}
                     onClick={() => { gameStore.rules.scoring = 'winner' }}>
                    Winner takes all
                  </a>
                </div>
                <div className="column has-text-centered">
                  <a className={(gameStore.rules.scoring === 'diff' ? 'is-info ' : '') + 'button is-rounded'}
                     onClick={() => { gameStore.rules.scoring = 'diff' }}>
                    Diff by players
                  </a>
                </div>
              </div>
              <div className="columns is-mobile">
                <div className="column is-10">
                  Dollars / Card
                </div>
                <div className="column is-2">
                  <div className="field">
                    <div className="control">
                      <input className="input" 
                      value={gameStore.rules.dollarsPerCard}
                      onChange={(event) => { gameStore.rules.dollarsPerCard = event.target.value }} />
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
