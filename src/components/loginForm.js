import React, { Component } from 'react';
import { ForgotPassword } from './forgotPasswordLink'
import '../css/loginForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CreateAccountBtn } from './createAccountLink';



export class LoginForm extends Component {
  render() {
    return (
        <div>
            <div className="global-container">
            <div className="card login-form">
                <div className="card-body">
                    <h3 className="card-title text-center">Log in to University Platform</h3>
                    <div className="card-text">
                        {/* <div 
                            className="alert alert-danger alert-dismissible fade show" 
                            role="alert">
                            Incorrect username or password.</div> */}
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" 
                                    className="form-control form-control-sm" 
                                    id="exampleInputEmail1" 
                                    aria-describedby="emailHelp"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <ForgotPassword forgotPasswordUrl="forgotPassword"/>
                                <input type="password" className="form-control form-control-sm" id="exampleInputPassword1"/>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Sign in</button>
                                <CreateAccountBtn crateAccountUrl="exampleUrl" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    );
  }
}
