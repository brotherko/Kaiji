import React, { Component } from "react";
import { observer, inject } from "mobx-react";

@inject("stores")
@observer
export default class RecordCreate extends Component {
  constructor(props) {
    super(props);
    this.uiStore = this.props.stores.uiStore;
    this.playerStore = this.props.stores.playerStore;
    this.gameStore = this.props.stores.gameStore;
  }

  createRecords = (event) => {
    event.preventDefault();
    this.gameStore.createRecords();
  }

  changeHandler = event => {
    const target = event.target;
    this.uiStore.recordCreateFormdata.update(target.name, target.value);
  };

  render() {
    const { players } = this.playerStore;
    const { fields } = this.uiStore.recordCreateFormdata;
    return (
      <section id="manage-records" className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Create Records</h1>
            <h2 className="subtitle">Add record to player</h2>
            <div className="content">
              <form onSubmit={this.createRecords}>
                {players.map(player => (
                  <div key={player.id} className="field">
                    <div className="label">{player.name}</div>
                    <div className="control">
                        <input
                        type="number"
                        className="control"
                        name={player.id}
                        onChange={this.changeHandler}
                        value={fields[player.id]}
                        />
                    </div>
                  </div>
                ))}
                  <button className="button">save</button>
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
