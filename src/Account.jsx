import React from "react";
import AccountPool from "./AccountPool";

import "./Account.css";

export default class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  handleClick = (name) => {
    this.setState({ name: name.toLowerCase() });
  };

  render() {
    return (
      <div class="account">
        <h5> Choose Account Type </h5>
        <AccountPool clickHandler={this.handleClick} />
        <h6 class="description">
          {" "}
          Hello {this.state.name}! <br />
          Please fill out the form below to get started{" "}
        </h6>
      </div>
    );
  }
}
