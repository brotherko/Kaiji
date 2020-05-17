import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { inject, observer } from "mobx-react";

@inject("stores")
@observer
export default class Nav extends Component {
  render() {
    const { uiStore } = this.props.stores;
    return (
      <div>
        <div className="tabs is-toggle is-fullwidth">
          <ul>
            <li>
              <a
                className="is-success"
                onClick={() => uiStore.setCurrentScreen("createMatch")}
              >
                <span className="icon is-small">
                  <FontAwesomeIcon icon="file-alt" />
                </span>
              </a>
            </li>
            <li>
              <a
                className="is-info"
                onClick={() => uiStore.setCurrentScreen("manageMatch")}
              >
                <span className="icon is-small">
                  <FontAwesomeIcon icon="file-alt" />
                </span>
              </a>
            </li>
            <li>
              <a
                className="is-warning"
                onClick={() => uiStore.setCurrentScreen("statistics")}
              >
                <span className="icon is-small">
                  <FontAwesomeIcon icon="chart-bar" />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
