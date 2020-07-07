import React, { Component } from 'react';
import '../assets/css/sign-in.css';





class SignIn extends React.Component {
  render() {

    return (
      <div className = 'signin'>
        <form className="form-signin">         
          <h1 className="h2 mb-3 font-weight-normal">
          <span className="mr-3"><img classname="mb-4" src={require('../assets/img/bug.svg')} 
            alt="Bug Icon" width="32" height="32" /></span>
          Bug Tracker 
          </h1>
          <label for="inputEmail" className="sr-only">Email address</label>
          <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus /> 
          <label for="inputPassword" className="sr-only">Password</label> 
          <input type="password" id="inputPassword" className="form-control" placeholder="Password" required /> 
          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
          <p className="mt-5 mb-3 text-muted">Forgot your <a href="">password?</a></p>
          <p className="mb-3 text-muted">Create an account? <a href="">Sign Up</a></p>
          <p className="mb-3 text-muted">Sign in as a <a href="">Demo User</a></p>
        </form>
      </div>
      )
  }
}


export default SignIn
