import React, { Component } from "react";

class LoginPage extends Component {
  login = async e => {
    e.preventDefault();
    const { login } = this.props;
    const userData = {
      email: e.target.email.value,
      password: e.target.password.value
    };
    login(userData);
  };

  render() {
    return (
      <div>
        Login
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={this.login}
        >
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" />
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default LoginPage;
