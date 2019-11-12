import React from 'react';
import '../styles/ForgottenPassword.css';

function ForgottenPassword(){
    return(
        <form>
            <div className='enter-email'>
                <label>Please Enter your Email Address</label>
                <div><input type='text'></input></div>
            </div>
            <div className='reset-password-button-container'>
                <button>Reset Password</button>
            </div>
        </form>
    )
}

export default ForgottenPassword;