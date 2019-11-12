import React, {Component} from 'react';
import { AnimateOnChange } from 'react-animation'
import '../styles/App.css';

import Header from './Header.js';
import MiddleMain from './MiddleMain.js';
import Login from './Login.js';
import Signup from './Signup.js';
import ForgottenPassword from './ForgottenPassword.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      visible: true,
      login: false,
      signup: false,
      forgottenPassword: false
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleForgottenPassword = this.handleForgottenPassword.bind(this);
  }

  handleLogin(){
    this.setState({
      visible: false,
      login: true
    })
  }

  handleSignup(){
    this.setState({
      visible: false,
      signup: true
    })
  }

  handleForgottenPassword(){
    this.setState({
      visible: false,
      forgottenPassword: true
    })
  }
  
  
  render(){
    return (
      <div className='container'>
        <AnimateOnChange>
        <div className="App">
          <Header />
          {this.state.visible ? 
          <MiddleMain 
          handleLogin={this.handleLogin}
          handleSignup={this.handleSignup}
          handleForgottenPassword={this.handleForgottenPassword}
          /> 
          : null}
          {this.state.login ? <Login /> : null}
          {this.state.signup ? <Signup /> : null}
          {this.state.forgottenPassword ? <ForgottenPassword /> : null}
        </div>
        </AnimateOnChange>
      </div>
    );
  }
}

export default App;
