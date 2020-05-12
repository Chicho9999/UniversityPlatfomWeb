import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LOGIN_REQUEST, LOGOUT } from './actions/actionTypes';
import './App.css';
import {LoginForm} from './components/loginForm'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <LoginForm />

          <button onClick={this.props.login}>Login</button>
          <button onClick={this.props.logout}>Logout</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.login.token,
    status: state.login.status,
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch({type:LOGIN_REQUEST, user:'NoriSte', password:'password'}),
    logout: () => dispatch({type:LOGOUT}),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);