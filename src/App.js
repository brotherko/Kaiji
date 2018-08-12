import React, { Component } from 'react';
import RecordCreate from './components/RecordCreate';
import RecordShow from './components/RecordShow';
import PlayerCreate from './components/PlayerCreate';
import MessageBox from './components/MessageBox';
import { observer, inject } from 'mobx-react';

@inject("stores")
@observer
class App extends Component {
  render() {
  console.log(this.props.stores);
    return (
      <div>
        {this.props.stores.uiStore.messages.length > 0 &&
          <MessageBox />
        }
        <PlayerCreate />
        <RecordCreate />
        <RecordShow />
      </div>
    );
  }
}

export default App;
