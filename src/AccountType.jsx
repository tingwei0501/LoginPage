import React from "react";
import check from "./figure/check.svg";
import "./AccountType.css";

export default class AccountType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name || "",
      source: props.src || ""
    };
  }

  handleClick = () => {
    const { clickHandler, name } = this.props;
    // console.log(this.state.name);
    // this.setState({ active: true });
    clickHandler(name);
  };

  render() {
    return (
      <div class="account-wrapper">
        <button
          class={`account-type ${
            this.props.currentActive === this.state.name ? "active" : ""
          }`}
          onClick={this.handleClick}
        >
          <img
            src={this.state.source}
            alt={this.state.name}
            width="100"
            height="100"
          />
          <h6> {this.state.name} </h6>
        </button>
        {this.props.currentActive === this.state.name ? (
          <img class="check" src={check} width="40" height="40" alt="check" />
        ) : (
          //
          ""
        )}
      </div>
    );
  }
}
