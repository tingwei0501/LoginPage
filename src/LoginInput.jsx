import React from "react";
import email from "./figure/email.svg";
import pwd from "./figure/padlock.svg";
import eye from "./figure/eye.svg";

import "./LoginInput.css";

export default class LoginInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pwd: "",
      error: false,
      errorIndex: -1,
      pwdInputLen: 0,
      emailIsFocused: false,
      pwdIsFocused: false
    };
  }

  handleEye = (e) => {
    let x = document.getElementById("pwd");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

  handleSetEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  handleFocusEmail = (e) => {
    setTimeout(() => {
      if (!this.state.emailIsFocused) {
        this.setState({
          emailIsFocused: true
        });
        // console.log(this.state.emailIsFocused);
      }
      // console.log(this.state.emailIsFocused);
    }, 0);
  };

  handleBlurEmail = (e) => {
    setTimeout(() => {
      if (this.state.emailIsFocused) {
        this.setState({
          emailIsFocused: false
        });
      }
    }, 0);
  };

  handleFocusPwd = (e) => {
    setTimeout(() => {
      if (!this.state.pwdIsFocused) {
        this.setState({
          pwdIsFocused: true
        });
      }
    }, 0);
  };

  handleBlurPwd = (e) => {
    setTimeout(() => {
      if (this.state.pwdIsFocused) {
        this.setState({
          pwdIsFocused: false
        });
      }
    }, 0);
  };

  handleSetPwd = (e) => {
    let password = e.target.value;
    let len = password.length;
    let isError = this.state.error;
    let errorIndex = this.state.errorIndex;

    if (len - this.state.pwdInputLen >= 1 && !isError) {
      // if copy & paste
      if (len > 5) {
        let checkedTimes =
          this.state.pwdInputLen - 5 > 0 ? this.state.pwdInputLen - 5 : 0;
        // console.log(checkedTimes);
        //  let errorIndexTmp;    [...Array(len - 5 - checkedTimes)]
        for (let i = 0; i < len - 5 - checkedTimes; i++) {
          // console.log(
          //   checkedTimes,
          //   password,
          //   password.substr(checkedTimes + i, 6)
          // );
          if (
            this.state.email.indexOf(password.substr(checkedTimes + i, 6)) ===
            -1
          ) {
            isError = this.state.error;
          } else {
            isError = true;
            errorIndex = checkedTimes + i + 5;
            break;
          }
        }
      }
      // } else if (password.length >= 6) {
      //   if (this.state.email.indexOf(password.substr(len - 6, 6)) === -1) {
      //     isError = this.state.error;
      //   } else {
      //     errorIndex = this.state.email.indexOf(password.substr(len - 6, 6)) + 5;
      //     isError = true;
      //   }
    }

    if (this.state.error) {
      if (len < this.state.pwdInputLen) {
        // press <-
        if (len <= errorIndex) {
          isError = false;
        }
      } else {
        password = password.slice(0, -1);
      }
    }
    // console.log(isError);
    this.setState({
      pwd: password,
      error: isError,
      pwdInputLen: len,
      errorIndex: errorIndex
    });
  };

  render() {
    return (
      <div class="col-auto">
        <div class="email-group">
          {this.state.emailIsFocused && <div class="label">Email</div>}

          <div
            class={`input-group mb-2 ${
              this.state.emailIsFocused ? "focus" : ""
            }`}
          >
            <div class="input-group-prepend">
              <div class="input-group-text">
                <img src={email} width="20" alt="email" />
              </div>
            </div>
            <input
              type="text"
              class="form-control"
              id="email"
              placeholder="Email"
              onChange={this.handleSetEmail}
              onFocus={this.handleFocusEmail}
              onBlur={this.handleBlurEmail}
              value={this.state.email}
            />
          </div>
        </div>

        <div class="pwd-group">
          {this.state.error ? (
            <div class="label error">
              [請修改] 密碼的任意連續 6 碼，不可以和帳號的任意連續 6 碼重複
            </div>
          ) : this.state.pwdIsFocused ? (
            <div class="label">Password</div>
          ) : (
            ""
          )}
          <div
            class={`input-group mb-2 ${
              this.state.error
                ? "focus error"
                : this.state.pwdIsFocused
                ? "focus"
                : ""
            }`}
          >
            <div class="input-group-prepend">
              <div class="input-group-text">
                <img src={pwd} width="20" alt="pwd" />
              </div>
            </div>
            <input
              // type="text"
              class="form-control"
              id="pwd"
              placeholder="Password"
              type="password"
              onChange={this.handleSetPwd}
              onFocus={this.handleFocusPwd}
              onBlur={this.handleBlurPwd}
              value={this.state.pwd}
            />
            <div class="input-group-append">
              <button class="eye" onClick={this.handleEye}>
                <img src={eye} width="20" alt="eye" />
              </button>
              <button class="input-group-button" variant="outline-secondary">
                Forgot?
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
