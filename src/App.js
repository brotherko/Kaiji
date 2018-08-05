import React, { Component } from 'react';
import RecordCreate from './components/RecordCreate';
import RecordShow from './components/RecordShow';
import PlayerCreate from './components/PlayerCreate';
import MessageBox from './components/MessageBox';
import { observer, inject } from 'mobx-react';

@inject("store")
@observer
class App extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div>
        {this.props.store.messages.length > 0 &&
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
