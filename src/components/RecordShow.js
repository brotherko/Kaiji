import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import '../App.css'

@inject("stores")
@observer 
export default class RecordShow extends Component {
  render() {
    const { gameStore, playerStore } = this.props.stores;
    const records = 
    [...Array(gameStore.rounds)].map((_, round) => (
      <tr>
        <td>{round}</td>
        {playerStore.players.map((player) => (
          <td>{typeof(player.records[round] === 'number') ?
          player.records[round] :
          '//'}</td>
        ))}
      </tr>
    ))
    const name = playerStore.players.map((player) => (
      <td key={player.id}>{player.name}</td>
    ))
    const pnl = playerStore.players.map((player) => (
      <td key={player.id}>{player.pnl}</td>
    ))

    return (
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Records
            </h1>
            <h2 className="subtitle">
              Real time records
            </h2>
            <div className="content">
              <table className="table">
                <thead>
                  <tr>
                    <td>Round</td>
                    {name}
                  </tr>
                </thead>
                <tbody>
                  {records}
                </tbody>
                <tfoot>
                  <tr>
                    <td>PNL</td>
                    {pnl}
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
