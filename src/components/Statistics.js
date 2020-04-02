import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import '../App.css'

@inject("stores")
@observer 
export default class RecordShow extends Component {
  render() {
    const { matchStore, playerStore } = this.props.stores;
    const records = 
    [...Array(matchStore.rounds)].map((_, round) => (
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
    const score = playerStore.players.map((player) => (
      <td key={player.id}>{player.score}</td>
    ))
    const pnl = playerStore.players.map((player) => (
      <td key={player.id}>{player.pnl}</td>
    ))

    return (
      <section id="statistics" className="hero is-warning is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Records
            </h1>
            <h2 className="subtitle">
              Real time records
            </h2>
            <div className="content">
              <div className="detail-stats">
                <table className="table is-fullwidth">
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
                      <td>Score</td>
                      {score}
                    </tr>
                    <tr>
                      <td>PNL</td>
                      {pnl}
                    </tr>
                  </tfoot>
                </table>
              </div>

            </div>
          </div>
        </div>
      </section>
    )
  }
}
