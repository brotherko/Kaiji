import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';

import Toggle from './common/Toggle';

@inject('stores')
@observer
export default class Settings extends Component {
  render() {
    return (
      <div>
        <Toggle />
      </div>
    )
  }
}
