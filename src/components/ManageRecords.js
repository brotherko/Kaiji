import React, { Component } from "react";
import { observer, inject } from "mobx-react";

import PlusBtn from './common/PlusBtn';

@inject("stores")
@observer
export default class RecordCreate extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { uiStore, playerStore, gameStore } = this.props.stores;
    const { fields } = uiStore.recordCreateFormdata;

    const options = [...Array(14)].map((_, number) => (
      <option value={number}>{number}</option>
    ))
    
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
                    <div class="control">
                      <div className="buttons has-addons">
                        <PlusBtn amount="-5" target={player.id} formdata={uiStore.recordCreateFormdata} />
                        <PlusBtn amount="-1" target={player.id} formdata={uiStore.recordCreateFormdata} />
                      </div>
                    </div>
                    <div class="control is-expanded">
                      <div class="select is-fullwidth ">
                        <select
                        className="is-expanded"
                        onChange={(event) => uiStore.recordCreateFormdata.update(event.target.name, parseInt(event.target.value))}
                        name={player.id}
                        value={fields[player.id]}>
                          {options}
                        </select>
                      </div>
                    </div>
                    <div class="control">
                      <div className="buttons has-addons">
                        <PlusBtn amount="+1" target={player.id} formdata={uiStore.recordCreateFormdata} />
                        <PlusBtn amount="+5" target={player.id} formdata={uiStore.recordCreateFormdata} />
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
                  onClick={ () => gameStore.createRecords() }>
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
