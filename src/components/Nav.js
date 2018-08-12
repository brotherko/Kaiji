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
        <div class="tabs is-toggle is-fullwidth">
          <ul>
            <li class="is-active">
              <a onClick={() => uiStore.setCurrentScreen('managePlayers')}>
                <span class="icon is-small"><FontAwesomeIcon icon="users" /></span>
              </a>
            </li>
            <li>
              <a onClick={() => uiStore.setCurrentScreen('manageRecords')}>
                <span class="icon is-small"><FontAwesomeIcon icon="file-alt" /></span>
              </a>
            </li>
            <li>
              <a onClick={() => uiStore.setCurrentScreen('statistics')}>
                <span class="icon is-small"><FontAwesomeIcon icon="chart-bar" /></span>
              </a>
            </li>
            <li>
              <a onClick={() => uiStore.setCurrentScreen('settings')}>
                <span class="icon is-small"><FontAwesomeIcon icon="sliders-h" /></span>
              </a>
            </li>
          </ul>
      </div>
      </div>
    )
  }
}
