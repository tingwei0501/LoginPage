import React from "react";
import AccountType from "./AccountType";
import doctor from "./figure/doctor.svg";
import patient from "./figure/patient.svg";

import "./AccountPool.css";

export default class AccountPool extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accountList: [
        { name: "Doctor", src: 1 },
        { name: "Patient", src: 2 }
      ],
      preActive: "",
      currentActive: "",
      accountSvg: {
        1: doctor,
        2: patient
      }
    };
  }

  handleClick = (name) => {
    // console.log(name);
    const { clickHandler } = this.props;
    // const accountList = this.state.accountList.slice();
    // let currentId = accountList.findIndex((account) => account.name === name);
    // accountList[currentId].active = true;
    // if (this.state.preActive !== "" && this.state.preActive !== name) {
    //   let lastCheckId = accountList.findIndex(
    //     (account) => account.name === this.state.preActive
    //   );
    //   accountList[lastCheckId].active = false;
    // }
    this.setState({
      preActive: this.state.currentActive,
      // accountList: this.staaccountList,
      currentActive: name
    });
    clickHandler(name);
  };

  render() {
    // const accountList = [
    //   { name: "doctor", src: doctor },
    //   { name: "patient", src: patient }
    // ];
    return (
      <div class="account-pool">
        {this.state.accountList.map((
          account //
        ) => (
          <AccountType
            key={account.name}
            name={account.name}
            src={this.state.accountSvg[account.src]}
            currentActive={this.state.currentActive}
            // active={account.active}
            clickHandler={this.handleClick}
          />
        ))}
      </div>
    );
  }
}
