import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { inject, observer } from "mobx-react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
@inject("stores")
@observer
export default class Nav extends Component {
  render() {
    const { id } = useParams();
    const { uiStore } = this.props.stores;
    return (
      <div>
        <div className="tabs is-toggle is-fullwidth">
          <ul>
            <li>
              <Link to={"/match/" + id + "manage"}
                <span className="icon is-small">
                  <FontAwesomeIcon icon="file-alt" />
                </span>
                </Link>
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
