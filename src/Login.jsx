import React from "react";
import LoginInput from "./LoginInput";
import "./Login.css";

export default class Login extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div class="login">
        <LoginInput />
        <div class="description">
          <div class="text">
            <h6 class="Q">No account? &nbsp;</h6>
            <h6 class="A">Signup</h6>
          </div>
          <button onClick={this.handleSubmit}>Login</button>
        </div>
      </div>
    );
  }
}
