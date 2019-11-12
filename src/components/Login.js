import React from 'react';

import '../styles/Login.css';

function Login(){
    return(
        <div className='Login'>
            <form>
                <div className='username'>
                    <label>Username</label><br/>
                    <input type='text'></input>
                </div>
                <div className='password'>
                    <label>Password</label><br/>
                    <input type='text'></input>
                </div>
                <div className='forgotten-password'>Forgotten Password?</div>
                <div className='login-button-container'>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;