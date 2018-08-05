import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import '../App.css'

@inject("store")
@observer 
export default class RecordShow extends Component {
  render() {
    const records = 
    [...Array(this.props.store.rounds)].map((_, round) => (
      <tr>
        <td>{round}</td>
        {this.props.store.players.map((player) => (
          <td>{player.records[round] || 0}</td>
        ))}
      </tr>
    ))
    const totalPNL = 
    this.props.store.players.map((player) => (
      <td>{player.totalPNL}</td>
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
                    {this.props.store.players.map((player) => (
                      <td>{player.name}</td>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {records}
                </tbody>
                <tfoot>
                  <tr>
                    {totalPNL}
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
