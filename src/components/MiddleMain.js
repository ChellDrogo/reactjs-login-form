import React from 'react';
import '../styles/MiddleMain.css';

function MiddleMain(props){
    return(
        <div className='MiddleMain'>
            <div className='login-button-container'>
                <button 
                className='button login'
                onClick={props.handleLogin}
                >
                    Login
                </button>
            </div>
            <div className='signup-button-container'>
                <button 
                className='button signup'
                onClick={props.handleSignup}
                >
                    Sign Up
                </button>
            </div>
            <div 
            className='password-reset'
            onClick={props.handleForgottenPassword}
            >
                Forgot Password?
            </div>
        </div>
    )
}

export default MiddleMain;