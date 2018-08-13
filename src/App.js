import React, { Component } from 'react';

import Nav from './components/Nav';
import ManagePlayers from './components/ManagePlayers';
import ManageRecords from './components/ManageRecords';
import Statistics from './components/Statistics';
import Settings from './components/Settings';
import MessageBox from './components/MessageBox';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { observer, inject } from 'mobx-react';

library.add(fas)

@inject("stores")
@observer
class App extends Component {
  render() {
    const { uiStore } = this.props.stores;
    return (
      <div>
        {this.props.stores.uiStore.messages.length > 0 &&
          <MessageBox />
        }
        <Nav />
        {uiStore.currentScreen == 'managePlayers' &&
        <ManagePlayers />
        }
        {uiStore.currentScreen == 'manageRecords' &&
        <ManageRecords />
        }
        {uiStore.currentScreen == 'statistics' &&
        <Statistics />
        }
        {uiStore.currentScreen == 'settings' &&
        <Settings />
        }
      </div>
    );
  }
}

export default App;
