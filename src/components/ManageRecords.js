import React, { Component } from "react";
import { observer, inject } from "mobx-react";

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
              <form onSubmit={this.createRecords}>
                {playerStore.players.map(player => (
                  <div key={player.id} className="field">
                    <div className="label">{player.name}</div>
                    <div className="control">
                      <div class="select">
                        <select onChange={(event) => uiStore.recordCreateFormdata.update(event.target.name, event.target.value)}
                                name={player.id}
                                value={fields[player.id]}>
                          {options}
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
                  <a className="button is-primary is-outlined is-large is-fullwidth is-inverted" onClick={ () => gameStore.createRecords() }>
                    Save Record
                  </a>
                <div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
