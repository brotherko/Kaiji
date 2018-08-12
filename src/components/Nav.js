import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { inject, observer } from 'mobx-react';

@inject("stores")
@observer
export default class Nav extends Component {
  render() {
    const { uiStore } = this.props.stores;
    return (
      <div>
        <div className="tabs is-toggle is-fullwidth">
          <ul>
            <li className="is-active">
              <a className="is-primary" onClick={() => uiStore.setCurrentScreen('managePlayers')}>
                <span class="icon is-small"><FontAwesomeIcon icon="users" /></span>
              </a>
            </li>
            <li>
              <a className="is-info" onClick={() => uiStore.setCurrentScreen('manageRecords')}>
                <span class="icon is-small"><FontAwesomeIcon icon="file-alt" /></span>
              </a>
            </li>
            <li>
              <a className="is-warning" onClick={() => uiStore.setCurrentScreen('statistics')}>
                <span class="icon is-small"><FontAwesomeIcon icon="chart-bar" /></span>
              </a>
            </li>
            <li>
              <a className="is-light" onClick={() => uiStore.setCurrentScreen('settings')}>
                <span class="icon is-small"><FontAwesomeIcon icon="sliders-h" /></span>
              </a>
            </li>
          </ul>
      </div>
      </div>
    )
  }
}
