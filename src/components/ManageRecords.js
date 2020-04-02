import React, { Component } from "react";
import { observer, inject } from "mobx-react";

import PlusBtn from './common/PlusBtn';

@inject("stores")
@observer
export default class RecordCreate extends Component {
  constructor(props) {
    super(props);
    
  }

  addMatch = () => {
    this.props.stores.matchStore.addMatch()
  }

  render() {
    const { uiStore, playerStore } = this.props.stores;
    const { fields } = uiStore.matchFormdata;

    const options = [...Array(14)].map((_, number) => (
      <option value={number}>{number}</option>
    ))
    
    const PlusBtnGenerator = (playerId, amount) => (
      <PlusBtn 
        key={'Player' + playerId + amount} amount={amount} 
        clickEvent={() => uiStore.updateFieldToMatchFormdata(playerId, parseInt(amount, 10))} /> 
    )
    return (
      <section id="manage-records" className="hero is-info is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Create Records</h1>
            <h2 className="subtitle">Add record to player</h2>
            <div className="content">
              {playerStore.players.map(player => (
                <div className="columns">
                  <div className="column">
                  <h4 className="has-text-white has-text-centered">{player.name}</h4>
                  <div key={player.id} className="field has-addons has-addons-centered">
                    <div className="control">
                      <div className="buttons has-addons">
                        {PlusBtnGenerator(player.id, "-5")}
                        {PlusBtnGenerator(player.id, "-1")}
                      </div>
                    </div>
                    <div className="control is-expanded">
                      <div className="select is-fullwidth ">
                        <select
                        className="is-expanded"
                        onChange={(event) => uiStore.matchFormdata.update(event.target.name, parseInt(event.target.value))}
                        name={player.id}
                        value={fields[player.id]}>
                          {options}
                        </select>
                      </div>
                    </div>
                    <div className="control">
                      <div className="buttons has-addons">
                        {PlusBtnGenerator(player.id, "+1")}
                        {PlusBtnGenerator(player.id, "+5")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              ))}
              <div className="columns">
                <div className="column">
                  <a
                  className="button is-primary is-outlined is-large is-fullwidth is-inverted"
                  onClick={ () => this.addMatch() }>
                    Save Record
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
