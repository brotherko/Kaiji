import React, { Component } from "react";
import { observer, inject } from "mobx-react";

@inject("store")
@observer
export default class RecordCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {}
    };
  }

  createRecords = event => {
    event.preventDefault();
    const players = this.props.store.players;
    const formData = this.state.formData;
    const recordsSum = Object.keys(formData).reduce((sum, key) => {
      return sum + formData[key];
    }, 0);
    if (recordsSum === 0) {
        players.map(player => {
            const cards = formData[player.id] ? formData[player.id] : 0;
            player.addRecord(this.props.store.rounds, cards);
        });
        this.props.store.rounds += 1;
    } else {
      this.props.store.addMessage({
        content: "gg"
      });
    }
  };

  changeHandler = event => {
    const target = event.target;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [target.name]: parseInt(target.value)
      }
    }));
  };

  render() {
    return (
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Create Records</h1>
            <h2 className="subtitle">Add record to player</h2>
            <div className="content">
              <form onSubmit={this.createRecords}>
                {this.props.store.players.map(player => (
                  <div key={player.id} className="field">
                    <div className="label">{player.name}</div>
                    <div className="control">
                        <input
                        type="number"
                        className="control"
                        name={player.id}
                        onChange={this.changeHandler}
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
