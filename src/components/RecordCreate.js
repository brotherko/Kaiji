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

  clearFormData = () => {
    this.setState((prevState) => {
      let obj = prevState.formData;
      Object.keys(obj).map((key) => {
        obj[key] = ''
      })
      return {
        formData: obj
      }
    })
  }

  createRecords = event => {
    event.preventDefault();

    const players = this.props.store.players;
    const formData = this.state.formData;
    players.map(player => {
      if(typeof(formData[player.id]) === 'number'){
        player.addRecord(this.props.store.rounds, formData[player.id]);
      }
    });
    this.clearFormData();
    this.props.store.rounds += 1;
  };

  changeHandler = event => {
    const target = event.target;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [target.name]: parseInt(target.value, 10)
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
                        value={this.state.formData[player.id]}
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
