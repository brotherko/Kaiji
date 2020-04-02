import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import '../App.css'
import UIStore from '../stores/UIStore';

@inject("stores")
@observer 
export default class RecordShow extends Component {
  render() {
    const { matchStore, playerStore } = this.props.stores;
    const records = 
    matchStore.matches.map((match, round) => (
      <tr>
        <td>{round}</td>
        {playerStore.players.map(player => (
          <td>{match[player.id]}</td>
        ))}
      </tr>
    ))
    const name = playerStore.players.map((player) => (
      <td key={player.id}>{player.name}</td>
    ))
    const score = matchStore.score.map((score, idx) => (
      <td key={"score_" + idx}>{score}</td>
    ))
    const pnl = matchStore.pnl.map((score, idx) => (
      <td key={"pnl_" + idx}>{score}</td>
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
